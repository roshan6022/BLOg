import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Auth/Login";
import SignUp from "./pages/Auth/SignUp";
import Home from "./pages/Client/Home";
import CreatePost from "./pages/Client/CreatePost";
import Profile from "./pages/Client/Profile";
import ViewPost from "./pages/Client/ViewPost";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/create-post" element={<CreatePost />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/:id" element={<ViewPost />}></Route>
      </Routes>
    </Router>
  );
}
