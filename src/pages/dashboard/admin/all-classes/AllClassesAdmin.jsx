import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import AllClassesAdminDataRow from "./AllClassesAdminDataRow";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import toast from "react-hot-toast";

const AllClassesAdmin = () => {
  const axiosPublic = useAxiosPublic();

  const {
    data: classRequests = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["classRequests"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/class-requests");
      return data;
    },
  });

  // =====================================================================
  // used mutation for approve teacher request
  const { mutateAsync: mutateAsyncApprove } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.patch(`/class-approve/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Class request accepted successfully.");
      refetch();
    },
  });

  // handle approve
  const handleApprove = async (id) => {
    console.log("will approve", id);

    try {
      await mutateAsyncApprove(id);
    } catch (err) {
      console.log(err);
    }
  };

  // =====================================================================
  // used mutation for reject teacher request
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.patch(`/class-reject/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Class request rejected successfully.");
      refetch();
    },
  });

  // handle rejected
  const handleReject = async (id) => {
    console.log("will rejected ->", id);

    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

  console.log(classRequests);

  return (
    <>
      <div className="container mx-auto px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Title
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Description
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {classRequests.map((classRequest) => (
                    <AllClassesAdminDataRow
                      key={classRequest._id}
                      classRequest={classRequest}
                      handleReject={handleReject}
                      handleApprove={handleApprove}
                    ></AllClassesAdminDataRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllClassesAdmin;
