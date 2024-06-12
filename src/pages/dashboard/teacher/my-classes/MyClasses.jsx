import { useMutation, useQuery } from "@tanstack/react-query";
import ClassCard from "../../../../components/ClassCard";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import toast from "react-hot-toast";
import useAuth from "../../../../hooks/useAuth";

const MyClasses = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/teacher-classes/${user?.email}`);
      return data;
    },
  });

  // delete
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.delete(`/classes/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Class deleted successfully.");
      refetch();
    },
  });

  const handleDelete = async (id) => {
    console.log("will delete ->", id);
    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err.message);
      toast.error(err.message);
    }
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;
  return (
    <div>
      {classes.length > 0 ? (
        <div className="m-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {classes.map((classItem) => (
              <ClassCard
                key={classItem._id}
                classItem={classItem}
                teacherBtn={true}
                handleDelete={handleDelete}
                refetch={refetch}
              ></ClassCard>
            ))}
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="font-bold text-2xl">There is no data for display</h1>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
