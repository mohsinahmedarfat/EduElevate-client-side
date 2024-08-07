import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import useRole from "../../../hooks/useRole";
import MenuItem from "./menu/MenuItem";
import TeacherMenu from "./menu/TeacherMenu";
import StudentMenu from "./menu/StudentMenu";
import AdminMenu from "./menu/AdminMenu";

const Sidebar = () => {
  const { logout } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-[#D6E6F2] text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to="/">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#769FCD] to-[#B9D7EA] inline-block text-transparent bg-clip-text">
                EduElevate
              </h1>
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-[#B9D7EA]"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-[#D6E6F2] w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-[#F7FBFC] mx-auto">
              <Link to="/">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-[#769FCD] to-[#B9D7EA] inline-block text-transparent bg-clip-text">
                  EduElevate
                </h1>
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            {role === "student" && <StudentMenu></StudentMenu>}
            {role === "teacher" && <TeacherMenu></TeacherMenu>}
            {role === "admin" && <AdminMenu></AdminMenu>}
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <MenuItem
            address="/dashboard"
            icon={CgProfile}
            label="Profile"
          ></MenuItem>

          <button
            onClick={logout}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-[#B9D7EA]   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
