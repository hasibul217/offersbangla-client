import React from "react";
import { Link } from "react-router-dom";

const DropdownMenu = ({ items = [] }) => {
  if (items.length === 0) return null;

  return (
    <div
      className="
    absolute left-0 w-60 bg-white rounded-md shadow-lg
    opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
    group-hover:visible invisible
    transition-all duration-300 ease-in-out
    z-20
    border border-gray-200
  "
    >
      {items.map((item, idx) => (
        <Link
          key={idx}
          to={item.path}
          className="
  block px-5 py-3 text-sm text-gray-700
  hover:bg-gray-100 hover:text-teal-600 hover:underline
  transition-colors duration-200
  cursor-pointer
  select-none
"
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DropdownMenu;
