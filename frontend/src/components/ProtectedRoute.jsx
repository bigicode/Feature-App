import { Navigate, Outlet, useLocation } from "react-router";

import { useAuth } from "../context/AuthContext";

export function ProtectedRoute() {
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return (
      <Navigate
        to="/admin/login"
        replace
        state={{ from: `${location.pathname}${location.search}` }}
      />
    );
  }

  return <Outlet />;
}
