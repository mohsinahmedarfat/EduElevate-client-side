import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import toast from "react-hot-toast";

const UpdateClassForm = ({ classItem, refetch, setIsEditModalOpen }) => {
  const { _id, title, image, description, price, teacher } = classItem;
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const { title, image, description, price } = data;
    const updatedClassData = { title, image, description, price };

    try {
      const { data } = await axiosPublic.put(
        `/classes/${_id}`,
        updatedClassData
      );
      console.log(data);
      toast.success("Class updated successfully");
      refetch();
      setIsEditModalOpen(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full p-5 text-gray-800 rounded-xl bg-[#F7FBFC]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={title}
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
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
            className="text-gray-400 bg-gray-50 border border-[#B9D7EA] sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            defaultValue={teacher?.name}
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
            defaultValue={teacher?.email}
            readOnly
            className="text-gray-400 bg-gray-50 border border-[#B9D7EA] sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("email")}
          />
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Image
          </label>
          <input
            type="text"
            name="image"
            id="image"
            defaultValue={image}
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Description
          </label>
          <input
            type="text"
            name="description"
            id="description"
            defaultValue={description}
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Price
          </label>
          <input
            type="number"
            name="price"
            id="price"
            defaultValue={price}
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
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
          Update
        </button>
      </form>
    </div>
  );
};

export default UpdateClassForm;
