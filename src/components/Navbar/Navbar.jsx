import React from "react";
import NavCategories from "./NavCategories";
import NavItems from "./NavItems";
import NavSearchbar from "./NavSearchbar";

const Navbar = () => {
  return (
    <div className="bg-gray-300 h-16 flex items-center sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Left side: NavCategories + NavItems */}
        <div className="flex items-center gap-20">
          <NavCategories />
          <NavItems />
        </div>

        {/* Right side: NavSearchbar inside its own div */}
        <div className="flex items-center">
          <NavSearchbar />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
