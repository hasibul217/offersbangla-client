import React from "react";

const OfferCard = ({ image, brand, text, discount }) => {
  return (
    <div className="bg-white rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative group rounded-lg overflow-hidden shadow-md">
        <img
          src={image}
          alt={brand}
          className="w-full h-64 object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />
        <div className="absolute bottom-1  right-1 bg-teal-500 text-white font-semibold  px-3 py-2 rounded shadow">
          {discount}% OFF
        </div>
      </div>

      <div className="p-5 space-y-2">
        <h3 className="text-base  text-gray-600">{brand}</h3>
        <p className="text-lg font-semibold text-gray-600 line-clamp-2">
          {text}
        </p>
      </div>
    </div>
  );
};

export default OfferCard;
