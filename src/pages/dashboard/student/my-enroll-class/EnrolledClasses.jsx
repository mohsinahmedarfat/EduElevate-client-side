import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import useAuth from "../../../../hooks/useAuth";
import StudentClassCard from "./StudentClassCard";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const EnrolledClasses = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const { data: enrolledClasses = [], isLoading } = useQuery({
    queryKey: ["enrolledClasses", user?.email],
    queryFn: async () => {
      const { data } = await axiosPublic.get(
        `/enrolled-classes/${user?.email}`
      );
      return data;
    },
  });

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  console.log(enrolledClasses);

  return (
    <div>
      {enrolledClasses.length > 0 ? (
        <div className="m-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {enrolledClasses.map((enrolledClassItem) => (
              <StudentClassCard
                key={enrolledClassItem._id}
                enrolledClassItem={enrolledClassItem}
                continueBtn={true}
              ></StudentClassCard>
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

export default EnrolledClasses;
