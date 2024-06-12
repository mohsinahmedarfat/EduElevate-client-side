/* eslint-disable react-hooks/exhaustive-deps */
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";

import "../payment/CheckoutForm.css";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import { ImSpinner2 } from "react-icons/im";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ closeModal, singleClass }) => {
  console.log(singleClass);
  const { title, image, price, teacher } = singleClass;
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const [clientSecret, setClientSecret] = useState();
  const [cardError, setCardError] = useState("");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    // fetch client secret
    if (price && price > 1) {
      getClientSecret({ price });
    }
  }, [price]);

  //   get client secret
  const getClientSecret = async (price) => {
    const { data } = await axiosPublic.post("/create-payment-intent", price);
    console.log(data);
    setClientSecret(data.clientSecret);
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();
    setProcessing(true);

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setCardError("");
    }

    // confirm payment
    const { error: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log(confirmError);
      setCardError(confirmError.message);
      setProcessing(false);
      return;
    }

    console.log(paymentIntent);
    if (paymentIntent.status === "succeeded") {
      // 1. create payment info object
      const paymentInfo = {
        title,
        image,
        price,
        teacher,
        email: user?.email,
        transactionId: paymentIntent.id,
      };
      console.log(paymentInfo);
      toast.success("Payment successful.");
      navigate("/dashboard/enroll-class");
      closeModal();

      // 2. save payment info in enrollCollection (db)
      try {
        await axiosPublic.post("/enroll", paymentInfo);
      } catch (err) {
        console.log(err.message);
      }

      setProcessing(false);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex mt-2 justify-around">
          <button
            disabled={!stripe || !clientSecret || processing}
            onClick={() => {
              closeModal();
            }}
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-200 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
          >
            {processing ? (
              <ImSpinner2 className="animate-spin m-auto" size={24} />
            ) : (
              "Pay"
            )}
          </button>
          <button
            type="button"
            className="inline-flex justify-center rounded-md border border-transparent bg-red-200 px-4 py-2 text-sm font-medium text-red-900  hover:bg-red-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
            onClick={closeModal}
          >
            Cancel
          </button>
        </div>
      </form>
      {cardError && <p className="text-red-400 ml-8">{cardError}</p>}
    </>
  );
};

export default CheckoutForm;
