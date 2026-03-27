import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ role }) {
  const isAuth = localStorage.getItem("isAuth"); // true/false
  const userRole = localStorage.getItem("role"); // "admin" or "user"

  // Not logged in
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }

  // Role check (if required)
  if (role && userRole !== role) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;