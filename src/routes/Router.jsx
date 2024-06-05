import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import AllClasses from "../pages/AllClasses/AllClasses";
import TeachOnEEForm from "../pages/teachOnEE/TeachOnEEForm";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import DashboardLayout from "../layout/DashboardLayout";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-classes",
        element: <AllClasses></AllClasses>,
      },
      {
        path: "/teach-on-eduelevate",
        element: <TeachOnEEForm></TeachOnEEForm>,
      },
    ],
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [],
  },
]);

export default Router;
