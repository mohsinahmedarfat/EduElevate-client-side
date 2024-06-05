import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const NavBar = () => {
  const { user, logout } = useAuth();

  const navLinks = (
    <>
      <li>
        <NavLink
          className={`${({ isActive }) =>
            isActive
              ? "text-[#769FCD] px-3 py-2 mx-3"
              : "px-3 py-2 mx-3 hover:text-[#769FCD]"}`}
          to="/"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#769FCD] px-3 py-2 mx-3"
              : "px-3 py-2 mx-3 hover:text-[#769FCD]"
          }
          to="/all-classes"
        >
          All Classes
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#769FCD] px-3 py-2 mx-3"
              : "px-3 py-2 mx-3 hover:text-[#769FCD]"
          }
          to="/teach-on-eduelevate"
        >
          Teach on EduElevate
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 px-5 shadow sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost pl-0 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-[#769FCD] to-[#B9D7EA] inline-block text-transparent bg-clip-text">
            EduElevate
          </h1>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="hidden lg:flex">
          <ul className="menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* profile picture */}
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="Profile Picture"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <p>{user?.displayName}</p>
                </li>
                <li>
                  <Link to="/dashboard">
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li>
                  <button onClick={logout}>Log out</button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <button className="btn btn-sm bg-[#769FCD] text-white hover:bg-[#B9D7EA]">
            <Link to="/login">Sign In</Link>
          </button>
        )}
      </div>
    </div>
  );
};

export default NavBar;
