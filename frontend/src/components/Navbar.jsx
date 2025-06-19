import React from "react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between px-10 py-3 bg-white shadow">
      <h1 className="text-xl font-bold">MyApp</h1>
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <a href="#">Home</a>
        <a href="#">Blog</a>
        <a href="#">About</a>
      </nav>
      <button className="md:hidden text-gray-700">☰</button>
    </header>
  );
}
