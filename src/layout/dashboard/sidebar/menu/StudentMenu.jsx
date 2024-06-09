import MenuItem from "./MenuItem";
import { MdOutlineOndemandVideo } from "react-icons/md";

const StudentMenu = () => {
  return (
    <div>
      {/* My enroll Class */}
      <MenuItem
        address="enroll-class"
        icon={MdOutlineOndemandVideo}
        label="My Enroll Class"
      ></MenuItem>
    </div>
  );
};

export default StudentMenu;
