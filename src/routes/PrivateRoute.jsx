import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../pages/shared/LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (user) {
    return children;
  }

  if (loading) {
    return <LoadingSpinner></LoadingSpinner>;
  }

  return (
    <Navigate to="/login" state={location.pathname} replace="true"></Navigate>
  );
};

export default PrivateRoute;
