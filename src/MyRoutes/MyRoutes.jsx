import { createBrowserRouter } from "react-router-dom";
import MyLayout from "../MyLayout/MyLayout";
import Home from "../Pages/Home/Home/Home";
import Registration from "../Pages/Registration/Registration";
import SignIn from "../Pages/SignIn/SignIn";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Dashboard from "../MyLayout/Dashboard";
import DashboardElement from "../Pages/Dashboard/DashboardElement";
import CreateTask from "../Pages/Dashboard/CreateTask";
import PreviousTask from "../Pages/Dashboard/PreviousTask";
import EditTask from "../Components/EditTask/EditTask";
import Community from "../Pages/Community";
import Blogs from "../Pages/Blogs";
import ContactUs from "../Pages/ContactUs";
import AboutUs from "../Pages/AboutUs";

const myRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MyLayout></MyLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <SignIn></SignIn>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
      {
        path: "/blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "/contactUs",
        element: <ContactUs></ContactUs>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },

  //  _____________________ Dashboard_______________________//

  {
    path: "/login/dashboard",
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/login/dashboard/dashboardElement",
        element: <DashboardElement></DashboardElement>,
      },
      {
        path: "/login/dashboard/createTask",
        element: <CreateTask></CreateTask>,
      },
      {
        path: "/login/dashboard/createTask/v1/:id",
        element: <EditTask></EditTask>,
        loader: ({ params }) =>
          fetch(`https://taskflowpro-server.vercel.app/newTasks/${params.id}`),
      },
      {
        path: "/login/dashboard/previousTask",
        element: <PreviousTask></PreviousTask>,
      },
    ],
  },
]);

export default myRoutes;
