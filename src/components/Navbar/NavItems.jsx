import React from "react";
import {
  Tags,
  Gift,
  Handshake,
  Newspaper,
} from "lucide-react";

const navLinks = [
  { name: "Brands", icon: <Tags size={18} /> },        
  { name: "Offer", icon: <Gift size={18} /> },          
  { name: "Deal", icon: <Handshake size={18} /> },      
  { name: "Blog", icon: <Newspaper size={18} /> },      
];

const NavItems = () => {
  return (
    <div className="flex gap-6">
  {navLinks.map((link, index) => (
    <div
      key={index}
      className="group relative flex items-center gap-1 px-3 py-1 rounded-md cursor-pointer text-gray-700 transition-all duration-300"
    >
      {link.icon}
      <span className="font-bold">{link.name}</span>
      <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
    </div>
  ))}
</div>

  );
};

export default NavItems;
