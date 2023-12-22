import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
// import useAuth from "../../../hook/useAuth";

const Navbar = () => {
  // const { user, logOut } = useAuth();

  // const handleLogout = () => {
  //   logOut()
  //     .then(console.log("logged out"))
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  return (
    <div className="navbar w-11/12 mx-auto px-8">
      <div className="navbar-start z-10 ">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                    : ""
                }
              >
                <span className="text-black hover:text-white "> Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/community"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                    : ""
                }
              >
                <span className="text-black hover:text-white ">Community</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                    : ""
                }
              >
                <span className="text-black hover:text-white ">Blogs</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/aboutUs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                    : ""
                }
              >
                <span className="text-black hover:text-white ">About Us</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactUs"
                className={({ isActive, isPending }) =>
                  isPending
                    ? "pending"
                    : isActive
                    ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                    : ""
                }
              >
                <span className="text-black hover:text-white ">Contact Us</span>
              </NavLink>
            </li>

            {/* <li>
              {user ? (
                <button
                  onClick={handleLogout}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                      : ""
                  }
                >
                  Log Out
                </button>
              ) : (
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                      : ""
                  }
                >
                  <span className="text-black hover:text-white ">Login</span>
                </NavLink>
              )}
            </li> */}
          </ul>
        </div>

        {/* website logo */}

        <Link to="/">
          <img className="w-52 h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/community"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">Community</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">Blogs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/aboutUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">About Us</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactUs"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">Contact Us</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/login"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                  : ""
              }
            >
              <span className="text-black hover:text-white ">Login</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {/* dropdwon */}
        {/* {user && (
          <div className="dropdown z-10">
            <div tabIndex={0} role="button" className="btn m-1">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} alt="" />
                </div>
              </label>
              <span className=" mr-2 ">{user.displayName}</span>
            </div>
            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink
                  to="/dashboard/myProfile"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                      : ""
                  }
                >
                  <span className="text-black hover:text-white ">
                    Dashboard
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                      : ""
                  }
                >
                  <span className="text-black hover:text-white ">
                    {" "}
                    Offer Announcements
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " underline text-[#0f2454] font-light decoration-2 text-sm underline-offset-4"
                      : ""
                  }
                >
                  <span className="text-black hover:text-white ">
                    {" "}
                    {user.email}
                  </span>
                </NavLink>
              </li>

              <button className="mt-3" onClick={handleLogout}>
                <span className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f2454] duration-300 ... bg-[#2095AE] border-none text-white mt-4">
                  Log Out
                </span>
              </button>
            </ul>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default Navbar;
