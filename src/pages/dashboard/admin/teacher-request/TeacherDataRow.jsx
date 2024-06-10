import { useState } from "react";
import TeacherRejectModal from "../../../../components/modal/TeacherRejectModal";
import TeacherApproveModal from "../../../../components/modal/TeacherApproveModal";

const TeacherDataRow = ({
  teacherRequestUser,
  handleReject,
  handleApprove,
}) => {
  const { photo, name, teacherReqData, status } = teacherRequestUser;
  const { title, experience, category } = teacherReqData;

  // for teacher reject modal
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };

  // for teacher approve modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const closeApproveModal = () => {
    setIsModalOpen(false);
  };

  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={photo} className="size-10" alt="" />
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{name}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{title}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{experience}</p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{category}</p>
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

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          disabled={
            teacherRequestUser?.status === "Rejected" ||
            teacherRequestUser?.status === "Accepted"
          }
          onClick={() => setIsModalOpen(true)}
          className="btn btn-sm border-none bg-green-100 hover:bg-green-400 text-green-800"
        >
          Approve
        </button>
        <TeacherApproveModal
          isOpen={isModalOpen}
          closeModal={closeApproveModal}
          handleApprove={handleApprove}
          id={teacherRequestUser?._id}
        ></TeacherApproveModal>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button
          disabled={
            teacherRequestUser?.status === "Rejected" ||
            teacherRequestUser?.status === "Accepted"
          }
          // disabled={teacherRequestUser?.status === "Rejected"}
          onClick={() => setIsOpen(true)}
          className="btn btn-sm border-none bg-red-100 hover:bg-red-400 text-red-800"
        >
          Reject
        </button>
        <TeacherRejectModal
          isOpen={isOpen}
          closeModal={closeModal}
          handleReject={handleReject}
          id={teacherRequestUser?._id}
        ></TeacherRejectModal>
      </td>
    </tr>
  );
};

export default TeacherDataRow;
