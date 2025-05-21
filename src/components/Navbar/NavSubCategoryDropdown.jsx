import React from "react";

const NavSubCategoryDropdown = ({ subcategories }) => {
  return (
    <div className="absolute top-0 left-full bg-gray-50 rounded z-50 p-10 border-1 border-teal-600">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 w-max">
      {subcategories.map((sub) => (
      <div key={sub.name}>
        {/* Subcategory title */}
        <p className="font-bold text-teal-800 mb-2 border-b-2 border-teal-600 pb-1">
          {sub.name}
        </p>

        {/* Subsubcategories */}
        <ul className="space-y-2">
          {sub.subsubcategories && sub.subsubcategories.length > 0 ? (
            sub.subsubcategories.map((subsub) => (
              <li key={subsub.name}>
                <a
                  href={subsub.link}
                  className="block text-gray-700 hover:bg-teal-50 hover:text-teal-900 rounded-md  py-1  transition-all"
                >
                  {subsub.name}
                </a>
              </li>
            ))
          ) : (
            <li className="text-gray-400 italic text-sm">No subcategories</li>
          )}
        </ul>
      </div>
    ))}
      </div>
    </div>
  );
};

export default NavSubCategoryDropdown;
