import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hook/useAxiosPublic";

const useClasses = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: classes = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classes"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/classes");
      return data;
    },
  });
  return [classes, isLoading, refetch];
  // if (isLoading) return <LoadingSpinner></LoadingSpinner>;
};

export default useClasses;
