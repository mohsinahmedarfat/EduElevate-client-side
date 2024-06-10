import { useState } from "react";
import ClassRejectModal from "../../../../components/modal/ClassRejectModal";
import ClassApproveModal from "../../../../components/modal/ClassApproveModal";

const AllClassesAdminDataRow = ({
  classRequest,
  handleReject,
  handleApprove,
}) => {
  const { _id, image, title, email, description, status } = classRequest;

  // for class reject modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  // for class approve modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeApproveModal = () => {
    setIsModalOpen(false);
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={image} className="w-[1000px] h-20" alt="" />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{email}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">
          {description.slice(0, 80)}......
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p
          className={`${
            (status === "Pending" && "text-yellow-500") ||
            (status === "Rejected" && "text-red-500") ||
            (status === "Accepted" && "text-green-500")
          } font-semibold whitespace-no-wrap `}
        >
          {status}
        </p>
      </td>

      <td className="flex flex-col items-center justify-center gap-6 px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          disabled={status === "Rejected" || status === "Accepted"}
          onClick={() => setIsModalOpen(true)}
          className="btn btn-sm border-none bg-green-100 hover:bg-green-400 text-green-800"
        >
          Approve
        </button>
        <ClassApproveModal
          isOpen={isModalOpen}
          closeModal={closeApproveModal}
          handleApprove={handleApprove}
          id={_id}
        ></ClassApproveModal>
        {/* <TeacherApproveModal
          isOpen={isModalOpen}
          closeModal={closeApproveModal}
          handleApprove={handleApprove}
          id={classRequests?._id}
        ></TeacherApproveModal> */}

        <button
          disabled={status === "Rejected" || status === "Accepted"}
          onClick={() => setIsOpen(true)}
          className="btn btn-sm border-none bg-red-100 hover:bg-red-400 text-red-800"
        >
          Reject
        </button>
        <ClassRejectModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleReject={handleReject}
          id={_id}
        ></ClassRejectModal>

        <button
          disabled={status === "Rejected" || status === "Pending"}
          className="btn w-28 btn-sm border-none bg-blue-100 hover:bg-blue-400 text-blue-800"
        >
          See Progress
        </button>
      </td>
    </tr>
  );
};

export default AllClassesAdminDataRow;
