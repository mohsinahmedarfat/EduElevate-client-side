import { useState } from "react";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { BsFillHouseAddFill, BsFingerprint } from "react-icons/bs";
import { GrUserAdmin } from "react-icons/gr";
import { AiOutlineBars, AiOutlineVideoCameraAdd } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { Link } from "react-router-dom";
import { MdHomeWork, MdOutlineClass } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);

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
            <nav>
              {/* Statistics */}
              <NavLink
                to="statistics"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#B9D7EA]   hover:text-gray-700 ${
                    isActive ? "bg-[#B9D7EA]  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <BsGraphUp className="w-5 h-5" />

                <span className="mx-4 font-medium">Statistics</span>
              </NavLink>

              {/* Add Room */}
              <NavLink
                to="add-class"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#B9D7EA]   hover:text-gray-700 ${
                    isActive ? "bg-[#B9D7EA]  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <AiOutlineVideoCameraAdd className="w-5 h-5" />

                <span className="mx-4 font-medium">Add Class</span>
              </NavLink>
              {/* My Class */}
              <NavLink
                to="my-classes"
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#B9D7EA]   hover:text-gray-700 ${
                    isActive ? "bg-[#B9D7EA]  text-gray-700" : "text-gray-600"
                  }`
                }
              >
                <MdOutlineClass className="w-5 h-5" />

                <span className="mx-4 font-medium">My Classes</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <NavLink
            to="/dashboard"
            end
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#B9D7EA]   hover:text-gray-700 ${
                isActive ? "bg-[#B9D7EA]  text-gray-700" : "text-gray-600"
              }`
            }
          >
            <CgProfile className="w-5 h-5" />

            <span className="mx-4 font-medium">Profile</span>
          </NavLink>
          <button
            onClick={logOut}
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
