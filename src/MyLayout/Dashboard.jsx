import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import useAuth from "../CustomHooks/useAuth";
import { MdDashboard } from "react-icons/md";
import { FaTasks } from "react-icons/fa";
import { CgMoveTask } from "react-icons/cg";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex">
      <div className="w-64 min-h-screen bg-gradient-to-b dark:bg-gray-900 dark:text-gray-100 pt-12">
        <div className="flex flex-col items-center justify-center">
          <img
            src={user?.photoURL}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <span className=" mr-2 font-poppins">{user?.displayName}</span>
          <span className=" hover:text-white "> {user?.email}</span>
        </div>

        <ul className="menu mt-5 p-4">
          <li>
            <NavLink to="/login/dashboard/dashboardElement">
              <MdDashboard></MdDashboard> Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/login/dashboard/createTask">
              <FaTasks></FaTasks> Create Task
            </NavLink>
          </li>
          <li>
            <NavLink to="/login/dashboard/previousTask">
              <CgMoveTask></CgMoveTask> Previous Task
            </NavLink>
          </li>

          {/* shared and divider */}
          <div className="border"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <button className="mt-3" onClick={handleLogout}>
              <span className="px-7 py-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f2454] duration-300 ... bg-[#2095AE] border-none text-white mt-4">
                Log Out
              </span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
