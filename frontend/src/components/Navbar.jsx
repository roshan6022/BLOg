import {
  Avatar,
  Button,
  Dropdown,
  DropdownDivider,
  TextInput,
} from "flowbite-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeather } from "@fortawesome/free-solid-svg-icons";
import Hamburger from "hamburger-react";
import { AiOutlineSearch } from "react-icons/ai";

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    // Header
    <header className="flex items-center justify-between px-4 py-3 bg-white ">
      <h1 className="text-3xl font-bold">
        <Link to="/home">Whispwrite</Link>
      </h1>

      {/* Search Bar */}
      <div>
        <form className="">
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
          <Button className="w-12 h-10 lg:hidden" color="gray " pill>
            <AiOutlineSearch />
          </Button>
        </form>
      </div>

      {/* Navbar options */}
      <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
        <Link to="/create-post">
          {" "}
          <FontAwesomeIcon icon={faFeather} />
          <span className="px-1"> Write</span>
        </Link>
        <Link to="/profile">About</Link>
      </nav>

      {/* Hamburger Menu */}
      <button className="md:hidden  text-slate-700 " onClick={toggleMenu}>
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </button>
    </header>
  );
}
