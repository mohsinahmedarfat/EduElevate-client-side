import { useState } from "react";
import MakeAdminModal from "../../../../components/modal/MakeAdminModal";

const UserDataRow = ({ user, handleMakeAdmin }) => {
  // for make admin modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={user?.photo} className="size-20" alt="" />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.name}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          disabled={user?.role === "admin"}
          onClick={() => setIsOpen(true)}
          className="btn btn-sm bg-[#769FCD] hover:bg-[#B9D7EA] text-white"
        >
          Make Admin
        </button>
        <MakeAdminModal
          isOpen={isOpen}
          closeModal={closeModal}
          id={user?._id}
          handleMakeAdmin={handleMakeAdmin}
        ></MakeAdminModal>
      </td>
    </tr>
  );
};

export default UserDataRow;
