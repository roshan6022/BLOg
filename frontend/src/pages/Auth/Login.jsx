import React, { useContext, useState } from "react";
import Input from "../../components/Inputs/Input";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper.js";
import axiosInstance from "../../utils/axiosInstance.js";
import { API_PATHS } from "../../utils/apiPaths.js";
import { UserContext } from "../../context/UserContext";
import AuthWindow from "../../components/AuthWindow";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  // Handle Login Form Submit
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!password) {
      setError("Please enter the password");
      return;
    }

    setError("");

    //Login API Call
    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token } = response.data;

      if (token) {
        localStorage.setItem("token", token);

        // updateUser(response.data);
        updateUser({ ...response.data.user, token: response.data.token });
        // Redirect based on role

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
        <AuthWindow title="Login - BlogPost">
          <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
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
              placeholder="Min 8 Character"
              type="password"
            />

            {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
            <button
              type="submit"
              className="bg-gray-300 border-2 border-black py-1 hover:bg-gray-400 active:translate-y-[1px]"
            >
              Login
            </button>
            <p className="text-center mt-2">
              <Link to="/signup" className="underline text-blue-800">
                Create a new account
              </Link>
            </p>
          </form>
        </AuthWindow>
      </div>
    </div>
  );
};

export default Login;
