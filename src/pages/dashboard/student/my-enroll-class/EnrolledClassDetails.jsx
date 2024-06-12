import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import LoadingSpinner from "../../../shared/LoadingSpinner";

const EnrolledClassDetails = () => {
  const { id } = useParams();
  const axiosPublic = useAxiosPublic();
  console.log(id);

  const { data: classData = {}, isLoading } = useQuery({
    queryKey: ["classData", id],
    queryFn: async () => {
      const { data } = await axiosPublic.get(`/classes/${id}`);
      return data;
    },
  });

  console.log(classData);

  //   const { title, image, description, price, teacher } = classData;

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  return <div>details page of this id: {id}</div>;
};

export default EnrolledClassDetails;
