import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function PrivateRoute() {
  const { user } = useContext(UserContext); // assuming user has `token` if logged in

  // If no user or no token, redirect to login
  if (!user || !user.token) {
    return <Navigate to="/login" replace />;

    // Redirects to /login

    // Replaces the current URL (e.g., /home) in the browser history

    // Pressing Back won’t go back to /home, because it’s not in the history anymore
  }

  // Otherwise, render nested routes
  return <Outlet />;
}
