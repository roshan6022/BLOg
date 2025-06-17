import React, { useContext, useState } from "react";
import { validateEmail } from "../../utils/helper";
import Input from "../../components/Inputs/Input";
import { API_PATHS } from "../../utils/apiPaths";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext.jsx";
import AuthWindow from "../../components/AuthWindow.jsx";
import axiosInstance from "../../utils/axiosInstance.js";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();
  // Handle SignUp Form Submit
  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!fullName) {
      setError("Please enter full name.");
      return;
    }
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //SignUp API Call

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        name: fullName,
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        // updateUser(response.data);
        updateUser({ ...response.data.user, token: response.data.token });

        navigate("/home");
      }
    } catch (error) {
      if (error.response && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError("Something went wrong, Please try again.");
      }
    }
  };
  return (
    <div className="auth">
      <div className="min-h-screen flex items-center justify-center bg-[#C0C0C0]">
        <AuthWindow title="SignUp - BlogPost">
          <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="name"
              type="text"
            />
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="xyz@gmail.com"
              type="text"
            />
            <Input
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              label="Password"
              placeholder="Min 8 Characters"
              type="password"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button
              type="submit"
              className="bg-gray-300 border-2 border-black py-1 hover:bg-gray-400 active:translate-y-[1px]"
            >
              Sign Up
            </button>
            <p className="text-center mt-2">
              <Link to="/login" className="underline text-blue-800">
                Login
              </Link>
            </p>
          </form>
        </AuthWindow>
      </div>
    </div>
  );
}
