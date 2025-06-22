import React from "react";
import { CiSearch } from "react-icons/ci";

export default function Search() {
  return (
    <div className="absolute sm:relative left-4 right-4 top-16 sm:top-0 sm:left-0 sm:right-0">
      <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-full w-full max-w-md mx-auto">
        <span className="text-xl text-gray-700">
          <CiSearch />
        </span>
        <input
          type="text"
          placeholder="Search..."
          aria-label="Search"
          className="bg-transparent outline-none w-full text-sm sm:text-base"
        />
      </div>
    </div>
  );
}
