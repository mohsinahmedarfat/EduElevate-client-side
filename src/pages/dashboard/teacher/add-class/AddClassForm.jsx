import { useForm } from "react-hook-form";
import useAuth from "../../../../hooks/useAuth";

const AddClassForm = () => {
  const { user } = useAuth();
  // const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { title, name, email, image, description, price } = data;
    console.log(data);
  };

  return (
    <section className="py-10 ">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <div className="w-full bg-[#F7FBFC] rounded-lg shadow md:mt-0 sm:max-w-xl xl:p-0 border border-gray-300">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Add a Class
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Title*
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="Class title"
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="text-gray-400 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  defaultValue={user?.displayName}
                  readOnly
                  {...register("name")}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  defaultValue={user?.email}
                  disabled
                  className="text-gray-400 bg-gray-50 border border-gray-300 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  {...register("email")}
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Image*
                </label>
                <input
                  type="text"
                  name="image"
                  id="image"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  placeholder="provide a image URL"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Description*
                </label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  {...register("description", { required: true })}
                />
                {errors.description && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">
                  Price*
                </label>
                <input
                  type="text"
                  name="price"
                  id="price"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <small className="text-red-400">This field is required</small>
                )}
              </div>

              <button
                type="submit"
                className="w-full bg-[#769FCD] hover:bg-[#B9D7EA] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Class
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddClassForm;
