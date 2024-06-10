import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import TeacherDataRow from "./TeacherDataRow";
import toast from "react-hot-toast";

const TeacherRequest = () => {
  const axiosPublic = useAxiosPublic();

  //   fetching users data
  const {
    data: teacherRequestUsers = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["teacherRequest"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/teacher-requests");
      return data;
    },
  });

  // =====================================================================
  // used mutation for approve teacher request
  const { mutateAsync: mutateAsyncApprove } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.patch(`/teacher-approve/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Teacher request accepted successfully.");
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
      const { data } = await axiosPublic.patch(`/teacher-reject/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("Teacher request rejected successfully.");
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

  console.log(teacherRequestUsers);

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
                      Name
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
                      Experience
                    </th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    >
                      Category
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
                    ></th>

                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-semibold"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {teacherRequestUsers.map((teacherRequestUser) => (
                    <TeacherDataRow
                      key={teacherRequestUser._id}
                      teacherRequestUser={teacherRequestUser}
                      refetch={refetch}
                      handleReject={handleReject}
                      handleApprove={handleApprove}
                    ></TeacherDataRow>
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

export default TeacherRequest;
