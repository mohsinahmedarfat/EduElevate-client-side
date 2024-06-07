import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import LoadingSpinner from "../shared/LoadingSpinner";
import { Link, ScrollRestoration, useParams } from "react-router-dom";

const ClassDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();

  const { data: singleClass = [], isLoading } = useQuery({
    queryKey: ["singleClass", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/classes/${id}`);
      return data;
    },
  });

  const { title, image, description, price, teacher } = singleClass;

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  console.log(singleClass);
  return (
    <div>
      <ScrollRestoration></ScrollRestoration>
      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 px-6 py-10 mx-auto space-y-6 lg:py-16 lg:items-center">
        <div className="h-full">
          <img
            className="object-cover w-full h-full max-w-2xl rounded-md"
            src={image}
            alt="glasses photo"
          />
        </div>

        <div className="w-full h-full">
          <div className="lg:max-w-lg">
            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 lg:text-4xl">
              {title}
            </h1>
            <p className="mt-4 text-gray-600">{description}</p>
          </div>

          <div className=" mt-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <div className="flex gap-3 items-center">
                  <img
                    className="object-cover h-10 rounded-full"
                    src={teacher?.image}
                    alt="Avatar"
                  />
                  <div>
                    <h4 className="font-semibold">{teacher?.name}</h4>
                    <span className="text-xs text-gray-600">
                      {teacher?.email}
                    </span>
                  </div>
                </div>
              </div>

              <span className="text-3xl font-semibold text-blue-600">
                ${price}
              </span>
            </div>

            <Link to="">
              <button className="w-full mt-5 bg-[#769FCD] hover:bg-[#97c6e3] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                Pay
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetails;
