import { Navigate, Outlet } from "react-router-dom";

import { useAuth } from "../context/AuthContext";
import Loading from "../components/common/Loading";

function RoleRoute({ allowedRoles }) {
  const {
    user,
    loading,
    isAuthenticated,
  } = useAuth();

  if (loading) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(user.role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
}

export default RoleRoute;