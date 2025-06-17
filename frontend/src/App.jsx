import React, { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Client/Home";
import CreatePost from "./pages/Client/CreatePost";
import Profile from "./pages/Client/Profile";
import ViewPost from "./pages/Client/ViewPost";
import UserProvider, { UserContext } from "./context/UserContext";
import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          {/* Authentication Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Conditional Root Route */}
          <Route path="/" element={<Root />} />

          {/* Protected Routes */}
          <Route path="/home" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/:id" element={<ViewPost />} />
        </Routes>
      </Router>
      <Toaster
        toastOptions={{
          className: "",
          style: {
            fontSize: "13px",
          },
        }}
      />
    </UserProvider>
  );
}

const Root = () => {
  const { user, loading } = useContext(UserContext);
  if (loading) return <div>Loading...</div>;
  return user ? <Navigate to="/home" /> : <Navigate to="/login" />;
};
