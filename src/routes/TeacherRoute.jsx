import { Navigate } from "react-router-dom";
import useRole from "../hooks/useRole";
import LoadingSpinner from "../pages/shared/LoadingSpinner";

const TeacherRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading || role === null) return <LoadingSpinner></LoadingSpinner>;

  if (role === "teacher") return children;

  return <Navigate to="/dashboard"></Navigate>;
};

export default TeacherRoute;
