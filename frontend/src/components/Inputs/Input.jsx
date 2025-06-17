import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

export default function Input({ value, onChange, label, placeholder, type }) {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  return (
    <div className="flex flex-col space-y-1 w-full">
      <label className="text-[13px] text-slate-800">{label}</label>
      <div className="relative w-full">
        <input
          type={
            type === "password" ? (showPassword ? "text" : "password") : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="px-3 py-2 border-2 border-black w-full pr-8 bg-white"
        />
        {type === "password" && (
          <span
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
            onClick={toggleShowPassword}
          >
            {showPassword ? (
              <FaRegEyeSlash size={16} className="text-slate-500" />
            ) : (
              <FaRegEye size={16} className="text-slate-500" />
            )}
          </span>
        )}
      </div>
    </div>
  );
}
