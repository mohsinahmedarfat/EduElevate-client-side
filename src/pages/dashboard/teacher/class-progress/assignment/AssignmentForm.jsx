import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../../../hook/useAxiosPublic";
import toast from "react-hot-toast";

const AssignmentForm = ({ closeModal, id }) => {
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { title, description, deadline } = data;

    const assignmentData = {
      assignmentTitle: title,
      assignmentDescription: description,
      assignmentDeadline: deadline,
    };

    try {
      const { data } = await axiosPublic.put(
        `/add-assignment/${id}`,
        assignmentData
      );
      console.log(data);
      toast.success("Assignment added successfully");
      closeModal();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full mt-5 p-5 text-gray-800 rounded-xl bg-[#F7FBFC]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-6 rounded-xl md:space-y-6 bg-[#F7FBFC]"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title*
          </label>
          <input
            type="text"
            name="title"
            id="title"
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            placeholder="Assignment title"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Deadline*
          </label>
          <input
            type="date"
            name="deadline"
            id="deadline"
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("deadline", { required: true })}
          />
          {errors.deadline && (
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
            className="bg-gray-50 border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("description", { required: true })}
          />
          {errors.description && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-[#769FCD] hover:bg-[#B9D7EA] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add assignment
        </button>
      </form>
    </div>
  );
};

export default AssignmentForm;
