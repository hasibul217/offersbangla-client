// NavCategoryButton.jsx
import React, { useState } from "react";
import { Menu } from "lucide-react";
import NavSubCategoryDropdown from "./NavSubCategoryDropdown";

const categories = [
  {
    name: "Electronics",
    link: "/categories/electronics",
    subcategories: [
      {
        name: "Phones",
        link: "/categories/electronics/phones",
        subsubcategories: [
          {
            name: "Smartphones",
            link: "/categories/electronics/phones/smartphones",
          },
          {
            name: "Feature Phones",
            link: "/categories/electronics/phones/feature-phones",
          },
          {
            name: "Refurbished Phones",
            link: "/categories/electronics/phones/refurbished",
          },
        ],
      },
      {
        name: "Laptops",
        link: "/categories/electronics/laptops",
        subsubcategories: [
          {
            name: "Gaming Laptops",
            link: "/categories/electronics/laptops/gaming",
          },
          {
            name: "Business Laptops",
            link: "/categories/electronics/laptops/business",
          },
          {
            name: "2-in-1 Laptops",
            link: "/categories/electronics/laptops/2-in-1",
          },
          {
            name: "MacBooks",
            link: "/categories/electronics/laptops/macbooks",
          },
        ],
      },
      {
        name: "Cameras",
        link: "/categories/electronics/cameras",
        subsubcategories: [
          { name: "DSLR", link: "/categories/electronics/cameras/dslr" },
          {
            name: "Mirrorless",
            link: "/categories/electronics/cameras/mirrorless",
          },
          {
            name: "Action Cameras",
            link: "/categories/electronics/cameras/action",
          },
          {
            name: "Camcorders",
            link: "/categories/electronics/cameras/camcorders",
          },
        ],
      },
      {
        name: "Audio",
        link: "/categories/electronics/audio",
        subsubcategories: [
          {
            name: "Headphones",
            link: "/categories/electronics/audio/headphones",
          },
          { name: "Speakers", link: "/categories/electronics/audio/speakers" },
          {
            name: "Home Theater",
            link: "/categories/electronics/audio/home-theater",
          },
        ],
      },
    ],
  },
  {
    name: "Fashion",
    link: "/categories/fashion",
    subcategories: [
      {
        name: "Men",
        link: "/categories/fashion/men",
        subsubcategories: [
          { name: "Shirts", link: "/categories/fashion/men/shirts" },
          { name: "Pants", link: "/categories/fashion/men/pants" },
          { name: "Shoes", link: "/categories/fashion/men/shoes" },
          { name: "Accessories", link: "/categories/fashion/men/accessories" },
        ],
      },
      {
        name: "Women",
        link: "/categories/fashion/women",
        subsubcategories: [
          { name: "Dresses", link: "/categories/fashion/women/dresses" },
          { name: "Skirts", link: "/categories/fashion/women/skirts" },
          { name: "Handbags", link: "/categories/fashion/women/handbags" },
          { name: "Jewelry", link: "/categories/fashion/women/jewelry" },
          { name: "Shoes", link: "/categories/fashion/women/shoes" },
        ],
      },
      {
        name: "Kids",
        link: "/categories/fashion/kids",
        subsubcategories: [
          { name: "T-Shirts", link: "/categories/fashion/kids/t-shirts" },
          { name: "Shorts", link: "/categories/fashion/kids/shorts" },
          { name: "Toys", link: "/categories/fashion/kids/toys" },
        ],
      },
      {
        name: "Accessories",
        link: "/categories/fashion/accessories",
        subsubcategories: [
          { name: "Watches", link: "/categories/fashion/accessories/watches" },
          {
            name: "Sunglasses",
            link: "/categories/fashion/accessories/sunglasses",
          },
          { name: "Belts", link: "/categories/fashion/accessories/belts" },
        ],
      },
    ],
  },
  {
    name: "Home & Garden",
    link: "/categories/home-garden",
    subcategories: [
      {
        name: "Furniture",
        link: "/categories/home-garden/furniture",
        subsubcategories: [
          {
            name: "Living Room",
            link: "/categories/home-garden/furniture/living-room",
          },
          {
            name: "Bedroom",
            link: "/categories/home-garden/furniture/bedroom",
          },
          { name: "Office", link: "/categories/home-garden/furniture/office" },
          {
            name: "Outdoor",
            link: "/categories/home-garden/furniture/outdoor",
          },
        ],
      },
      {
        name: "Decor",
        link: "/categories/home-garden/decor",
        subsubcategories: [
          { name: "Wall Art", link: "/categories/home-garden/decor/wall-art" },
          { name: "Lighting", link: "/categories/home-garden/decor/lighting" },
          { name: "Rugs", link: "/categories/home-garden/decor/rugs" },
          { name: "Vases", link: "/categories/home-garden/decor/vases" },
        ],
      },
      {
        name: "Tools",
        link: "/categories/home-garden/tools",
        subsubcategories: [
          {
            name: "Power Tools",
            link: "/categories/home-garden/tools/power-tools",
          },
          {
            name: "Hand Tools",
            link: "/categories/home-garden/tools/hand-tools",
          },
          {
            name: "Gardening Tools",
            link: "/categories/home-garden/tools/gardening-tools",
          },
        ],
      },
      {
        name: "Kitchen",
        link: "/categories/home-garden/kitchen",
        subsubcategories: [
          {
            name: "Cookware",
            link: "/categories/home-garden/kitchen/cookware",
          },
          {
            name: "Utensils",
            link: "/categories/home-garden/kitchen/utensils",
          },
          {
            name: "Appliances",
            link: "/categories/home-garden/kitchen/appliances",
          },
        ],
      },
    ],
  },
  {
    name: "Sports & Outdoors",
    link: "/categories/sports-outdoors",
    subcategories: [
      {
        name: "Fitness",
        link: "/categories/sports-outdoors/fitness",
        subsubcategories: [
          { name: "Yoga", link: "/categories/sports-outdoors/fitness/yoga" },
          {
            name: "Cardio Equipment",
            link: "/categories/sports-outdoors/fitness/cardio",
          },
          {
            name: "Strength Training",
            link: "/categories/sports-outdoors/fitness/strength",
          },
        ],
      },
      {
        name: "Outdoor Recreation",
        link: "/categories/sports-outdoors/outdoor-recreation",
        subsubcategories: [
          {
            name: "Camping",
            link: "/categories/sports-outdoors/outdoor-recreation/camping",
          },
          {
            name: "Hiking",
            link: "/categories/sports-outdoors/outdoor-recreation/hiking",
          },
          {
            name: "Fishing",
            link: "/categories/sports-outdoors/outdoor-recreation/fishing",
          },
        ],
      },
      {
        name: "Team Sports",
        link: "/categories/sports-outdoors/team-sports",
        subsubcategories: [
          {
            name: "Basketball",
            link: "/categories/sports-outdoors/team-sports/basketball",
          },
          {
            name: "Soccer",
            link: "/categories/sports-outdoors/team-sports/soccer",
          },
          {
            name: "Baseball",
            link: "/categories/sports-outdoors/team-sports/baseball",
          },
        ],
      },
    ],
  },
];

const NavCategoryButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredCategoryIndex, setHoveredCategoryIndex] = useState(null);

  return (
    <div
      className="relative inline-block text-left"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => {
        setIsOpen(false);
        setHoveredCategoryIndex(null);
      }}
    >
      <div className="flex items-center gap-2 bg-teal-600 px-7 py-5 cursor-pointer select-none text-white font-medium rounded">
        <Menu size={20} />
        <span>Categories</span>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="absolute left-0 w-max bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl shadow-lg z-50 flex transition-all duration-300 ease-in-out"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => {
            setIsOpen(false);
            setHoveredCategoryIndex(null);
          }}
        >
          <ul className="py-2 w-64 space-y-1">
            {categories.map((cat, index) => (
              <li
                key={cat.name}
                onMouseEnter={() => setHoveredCategoryIndex(index)}
                className="transition-transform duration-200 "
              >
                <a
                  href={cat.link}
                  className="block px-5 py-2 text-gray-700 hover:bg-teal-100 hover:text-teal-900 font-medium rounded-md whitespace-nowrap"
                >
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>

          {hoveredCategoryIndex !== null &&
            categories[hoveredCategoryIndex].subcategories && (
              <NavSubCategoryDropdown
                subcategories={categories[hoveredCategoryIndex].subcategories}
              />
            )}
        </div>
      )}
    </div>
  );
};

export default NavCategoryButton;
