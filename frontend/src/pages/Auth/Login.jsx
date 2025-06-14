import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Input";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper.js";
import axiosInstance from "../../utils/axiosInstance.js";
import { API_PATHS } from "../../utils/apiPaths.js";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  return <div className="">Login</div>;
}
