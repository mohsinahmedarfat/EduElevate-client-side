import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hook/useAxiosPublic";
import toast from "react-hot-toast";

const TeachOnEEForm = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    const { name, email, image, title, experience, category } = data;

    const teacherReqData = {
      name,
      email,
      image,
      title,
      experience,
      category,
    };

    const currentUser = {
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
      role: "student",
      status: "Requested",
      teacherReqData,
    };

    try {
      const { data } = await axiosPublic.put("/user", currentUser);
      console.log(data);
      if (data.modifiedCount > 0) {
        toast.success("Success! Please wait for admin confirmation.");
      } else {
        toast.success("Please! Wait for admin approval.");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="w-full p-5 text-gray-800 rounded-xl h-full bg-[#e7f5f8]">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 md:space-y-6 py-8  bg-[#F7FBFC] h-full px-6 rounded-xl"
      >
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            defaultValue={user?.displayName}
            className=" border border-[#B9D7EA] sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
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
            readOnly
            className="text-gray-400 border border-[#B9D7EA] sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
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
            defaultValue={user?.photoURL}
            className="border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("image", { required: true })}
          />
          {errors.image && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Experience
          </label>
          <select
            {...register("experience")}
            className="select select-bordered w-full border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
          >
            <option>Beginner</option>
            <option>Experienced</option>
            <option>Mid-level</option>
          </select>
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Title*
          </label>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Based on your qualifications or role"
            className="border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block w-full p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
            {...register("title", { required: true })}
          />
          {errors.title && (
            <small className="text-red-400">This field is required</small>
          )}
        </div>

        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900">
            Category
          </label>
          <select
            {...register("category")}
            className="select select-bordered w-full border border-[#B9D7EA] text-gray-900 sm:text-sm rounded-lg focus:ring-[#B9D7EA] focus:border-[#B9D7EA] block p-2.5 placeholder-gray-400 focus:ring-2 focus:outline-none"
          >
            <option>Web development</option>
            <option>Digital marketing</option>
            <option>Graphic Designer</option>
            <option>Content Creator</option>
            <option>SEO Analyst</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-[#769FCD] hover:bg-[#B9D7EA] text-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TeachOnEEForm;
