const TeacherDataRow = ({ teacherRequestUser, refetch }) => {
  const { photo, name, teacherReqData, status } = teacherRequestUser;
  const { title, experience, category } = teacherReqData;
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
        <p className="text-yellow-500 font-semibold whitespace-no-wrap ">
          {status}
        </p>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="btn btn-sm border-none bg-green-100 hover:bg-green-400 text-green-800">
          Approve
        </button>
      </td>

      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <button className="btn btn-sm border-none bg-red-100 hover:bg-red-400 text-red-800">
          Reject
        </button>
      </td>
    </tr>
  );
};

export default TeacherDataRow;
