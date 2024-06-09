import MenuItem from "./MenuItem";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { HiOutlineUsers } from "react-icons/hi";

const AdminMenu = () => {
  return (
    <div>
      {/* teacher request */}
      <MenuItem
        address="teacher-request"
        icon={LiaChalkboardTeacherSolid}
        label="Teacher Request"
      ></MenuItem>
      {/* all users */}
      <MenuItem
        address="all-users"
        icon={HiOutlineUsers}
        label="Users"
      ></MenuItem>
      {/* all classes */}
      <MenuItem
        address="all-classes-admin"
        icon={MdOutlineVideoLibrary}
        label="All Class"
      ></MenuItem>
    </div>
  );
};

export default AdminMenu;
