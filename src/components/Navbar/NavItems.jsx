import React from "react";
import { Link } from "react-router-dom";
import { Tags, Gift, Handshake, Newspaper } from "lucide-react";
import DropdownMenu from "./DropdownMenu"; // make sure the path is correct

const navLinks = [
  { name: "Brands", icon: <Tags size={18} />, path: "/brands" },
  { name: "Offer", icon: <Gift size={18} />, path: "/offers" },
  { name: "Deal", icon: <Handshake size={18} />, path: "/deals" },
  { name: "Blog", icon: <Newspaper size={18} />, path: "/blog_dashboard" },
];

const dropdownItems = {
  Brands: [
    { name: "Add Brand", path: "/brands/add" },
    { name: "All Brands", path: "/brands/all" },
    { name: "Brand Categories", path: "/brands/categories" },
    { name: "Top Brands", path: "/brands/top" },
    { name: "Brand Reports", path: "/brands/reports" },
    { name: "Brand Analytics", path: "/brands/analytics" },
    { name: "Brand Reviews", path: "/brands/reviews" },
    { name: "Pending Brands", path: "/brands/pending" },
    { name: "Archived Brands", path: "/brands/archived" },
    { name: "Brand Settings", path: "/brands/settings" },
  ],
  
  Offer: [
    { name: "New Offer", path: "/offers/new" },
    { name: "Offer List", path: "/offers/list" },
    { name: "Expired Offers", path: "/offers/expired" },
    { name: "Upcoming Offers", path: "/offers/upcoming" },
    { name: "Offer Categories", path: "/offers/categories" },
    { name: "Offer Analytics", path: "/offers/analytics" },
    { name: "Top Offers", path: "/offers/top" },
    { name: "Offer Settings", path: "/offers/settings" },
    { name: "Offer Reviews", path: "/offers/reviews" },
    { name: "Offer Reports", path: "/offers/reports" },
  ],

  Deal: [
    { name: "New Deal", path: "/deals/new" },
    { name: "Deal List", path: "/deals/list" },
    { name: "Pending Deals", path: "/deals/pending" },
    { name: "Expired Deals", path: "/deals/expired" },
    { name: "Top Deals", path: "/deals/top" },
    { name: "Deal Categories", path: "/deals/categories" },
    { name: "Deal Analytics", path: "/deals/analytics" },
    { name: "Deal Reviews", path: "/deals/reviews" },
    { name: "Archived Deals", path: "/deals/archived" },
    { name: "Deal Settings", path: "/deals/settings" },
  ],

  Blog: [
    { name: "Add Blog", path: "/blog_dashboard/add" },
    { name: "All Blogs", path: "/blog_dashboard/all" },
    { name: "Draft Blogs", path: "/blog_dashboard/drafts" },
    { name: "Published Blogs", path: "/blog_dashboard/published" },
    { name: "Blog Categories", path: "/blog_dashboard/categories" },
    { name: "Blog Tags", path: "/blog_dashboard/tags" },
    { name: "Blog Analytics", path: "/blog_dashboard/analytics" },
    { name: "Featured Blogs", path: "/blog_dashboard/featured" },
    { name: "Blog Comments", path: "/blog_dashboard/comments" },
    { name: "Blog Settings", path: "/blog_dashboard/settings" },
  ],
};


const NavItems = () => {
  return (
    <div className="flex gap-6">
      {navLinks.map((link, index) => {
        const dropdown = dropdownItems[link.name] || [];

        return (
          <div key={index} className="relative group">
            <Link
              to={link.path}
              className="flex items-center gap-1 px-3 py-2 rounded-md cursor-pointer text-gray-700 transition-all duration-300"
            >
              {link.icon}
              <span className="font-bold">{link.name}</span>
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <DropdownMenu items={dropdown} />
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;
