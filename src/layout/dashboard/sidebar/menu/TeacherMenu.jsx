import { AiOutlineVideoCameraAdd } from "react-icons/ai";
import MenuItem from "./MenuItem";
import { MdOutlineClass } from "react-icons/md";

const TeacherMenu = () => {
  return (
    <nav>
      {/* Add Room */}
      <MenuItem
        address="add-class"
        icon={AiOutlineVideoCameraAdd}
        label="Add Class"
      ></MenuItem>

      {/* My Class */}
      <MenuItem
        address="my-classes"
        icon={MdOutlineClass}
        label="My Classes"
      ></MenuItem>
    </nav>
  );
};

export default TeacherMenu;
