import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "../../firebase.config";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  if (!auth?.currentUser) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
