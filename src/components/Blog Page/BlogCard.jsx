/* eslint-disable react/prop-types */
import { ArrowRight } from "lucide-react";

const BlogCard = ({ image, title, category }) => {
  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 overflow-hidden w-full max-w-sm mx-auto ">
      {/* Image with fixed 4:3 ratio */}
      <div className="relative aspect-4/3 overflow-hidden group">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <span className="absolute bottom-2 right-2 bg-teal-600 text-white text-sm font-medium px-3 py-1 rounded shadow-md">
          {category}
        </span>
      </div>

      {/* Title & Button */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
          {title}
        </h2>
        <button className="mt-2 flex items-center gap-1  text-teal-600 font-semibold hover:underline hover:text-teal-800 transition duration-200 cursor-pointer">
          Read More <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
