import React from "react";
import { Link } from "react-router-dom";
import {
  Tags,
  Gift,
  Handshake,
  Newspaper,
} from "lucide-react";

const navLinks = [
  { name: "Brands", icon: <Tags size={18} />, path: "/brands" },
  { name: "Offer", icon: <Gift size={18} />, path: "/offers" },
  { name: "Deal", icon: <Handshake size={18} />, path: "/deals" },
  { name: "Blog", icon: <Newspaper size={18} />, path: "/blog_dashboard" },
];

const NavItems = () => {
  return (
    <div className="flex gap-6">
      {navLinks.map((link, index) => (
        <Link
          key={index}
          to={link.path}
          className="group relative flex items-center gap-1 px-3 py-1 rounded-md cursor-pointer text-gray-700 transition-all duration-300"
        >
          {link.icon}
          <span className="font-bold">{link.name}</span>
          <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
        </Link>
      ))}
    </div>
  );
};

export default NavItems;
