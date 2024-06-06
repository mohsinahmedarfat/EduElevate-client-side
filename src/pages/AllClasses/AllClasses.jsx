import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hook/useAxiosPublic";
import ClassCard from "../../components/ClassCard";
import LoadingSpinner from "../shared/LoadingSpinner";

const AllClasses = () => {
  const axiosPublic = useAxiosPublic();

  const { data: classes = [], isLoading } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/classes");
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return (
    <div className="my-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {classes.map((classItem) => (
          <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;
