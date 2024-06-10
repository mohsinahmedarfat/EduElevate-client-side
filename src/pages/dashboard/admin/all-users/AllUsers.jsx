import { useMutation, useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import LoadingSpinner from "../../../shared/LoadingSpinner";
import UserDataRow from "./UserDataRow";
import toast from "react-hot-toast";

const AllUsers = () => {
  const axiosPublic = useAxiosPublic();

  //   fetching users data
  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/users");
      return data;
    },
  });

  // user mutation for make admin
  const { mutateAsync } = useMutation({
    mutationFn: async (id) => {
      const { data } = await axiosPublic.patch(`/user/${id}`);
      return data;
    },
    onSuccess: (data) => {
      console.log(data);
      toast.success("User role updated to Admin successfully.");
      refetch();
    },
  });

  //   handle make admin
  const handleMakeAdmin = async (id) => {
    console.log("will admin", id);

    try {
      await mutateAsync(id);
    } catch (err) {
      console.log(err);
    }
  };

  if (isLoading) return <LoadingSpinner></LoadingSpinner>;

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
                      className="font-semibold px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase"
                    >
                      Image
                    </th>

                    <th
                      scope="col"
                      className="font-semibold px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase"
                    >
                      Name
                    </th>

                    <th
                      scope="col"
                      className="font-semibold px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase"
                    >
                      Email
                    </th>

                    <th
                      scope="col"
                      className="font-semibold px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase"
                    >
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((user) => (
                    <UserDataRow
                      key={user._id}
                      user={user}
                      refetch={refetch}
                      handleMakeAdmin={handleMakeAdmin}
                    ></UserDataRow>
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

export default AllUsers;
