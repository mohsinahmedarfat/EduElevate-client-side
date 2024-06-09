import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Home from "../pages/home/Home";
import Root from "../layout/Root";
import AllClasses from "../pages/AllClasses/AllClasses";
import Register from "../pages/authentication/Register";
import Login from "../pages/authentication/Login";
import DashboardLayout from "../layout/dashboard/DashboardLayout";
import Profile from "../pages/dashboard/common/Profile";
import AddClass from "../pages/dashboard/teacher/add-class/AddClass";
import ClassDetails from "../pages/AllClasses/ClassDetails";
import PrivateRoute from "./PrivateRoute";
import MyClasses from "../pages/dashboard/teacher/my-classes/MyClasses";
import TeachOnEE from "../pages/teachOnEE/TeachOnEE";
import EnrolledClasses from "../pages/dashboard/student/my-enroll-class/EnrolledClasses";
import TeacherRequest from "../pages/dashboard/admin/teacher-request/TeacherRequest";
import AllUsers from "../pages/dashboard/admin/all-users/AllUsers";
import AllClassesAdmin from "../pages/dashboard/admin/all-classes/AllClassesAdmin";

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
        path: "/classes/:id",
        element: (
          <PrivateRoute>
            <ClassDetails></ClassDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/teach-on-eduelevate",
        element: (
          <PrivateRoute>
            <TeachOnEE></TeachOnEE>
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        index: true,
        element: <Profile></Profile>,
      },
      // student
      {
        path: "enroll-class",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      // teacher
      {
        path: "add-class",
        element: <AddClass></AddClass>,
      },
      {
        path: "my-classes",
        element: <MyClasses></MyClasses>,
      },
      // admin
      {
        path: "teacher-request",
        element: <TeacherRequest></TeacherRequest>,
      },
      {
        path: "all-users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "all-classes-admin",
        element: <AllClassesAdmin></AllClassesAdmin>,
      },
    ],
  },
]);

export default Router;
