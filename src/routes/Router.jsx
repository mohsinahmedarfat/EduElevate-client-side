import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import AllClasses from "../pages/AllClasses/AllClasses";
import TeachOnEEForm from "../pages/teachOnEE/TeachOnEEForm";

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
]);

export default Router;
