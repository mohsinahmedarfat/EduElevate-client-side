import { NavLink } from "react-router-dom";

const MenuItem = ({ address, icon: Icon, label }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-[#B9D7EA]   hover:text-gray-700 ${
          isActive ? "bg-[#B9D7EA]  text-gray-700" : "text-gray-600"
        }`
      }
    >
      <Icon className="w-5 h-5" />

      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

export default MenuItem;
