import React from "react";

export default function AuthLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-screen h-screen md:w-[60vw] px-12 pt-8">
        <h2 className="">Blog Post</h2>
        {children}
      </div>
      <div className=""></div>
    </div>
  );
}
