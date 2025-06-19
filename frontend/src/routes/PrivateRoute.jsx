import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserContext } from "../context/UserContext";

export default function PrivateRoute() {
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return (
      <div className="text-center font-mono p-4">
        <h1>🔄 Verifying User Credentials...</h1>
      </div>
    );
    // or a fancy spinner
  }

  return user ? <Outlet /> : <Navigate to="/login" replace />;
}
