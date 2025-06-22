import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import Search from "./Search";

export default function NavBar() {
  const [isOpen, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm sticky top-0 z-50">
      {/* Logo + Search */}
      <div className="flex items-center gap-4 w-full max-w-xl">
        <Link to="/home">
          <span className="text-3xl font-bold text-gray-800">Whispwrite</span>
        </Link>
        <Search />
      </div>

      {/* Desktop Nav Options */}
      <nav className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <Link to="/create-post" className="flex items-center gap-1">
          <FontAwesomeIcon icon={faFeather} />
          <span>Write</span>
        </Link>
        <Link to="/profile">Profile</Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>

      {/*Mobile dropdown menu*/}

      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-40 bg-white rounded shadow-md flex flex-col gap-2 p-2 text-gray-700">
          <Link to="/create-post" className="flex items-center gap-2">
            <FontAwesomeIcon icon={faFeather} />
            <span>Write</span>
          </Link>
          <Link to="/profile">Profile</Link>
        </div>
      )}
    </header>
  );
}
