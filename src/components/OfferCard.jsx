import React from "react";

const OfferCard = ({ image, brand, text, discount }) => {
  return (
    <div className="bg-gray-100 rounded shadow-md hover:shadow-xl transition duration-300 overflow-hidden w-full max-w-sm mx-auto">
      <div className="relative group rounded overflow-hidden shadow-md aspect-square">
        <img
          src={image}
          alt={brand}
          className="w-full h-full object-cover transition-transform duration-400 ease-in-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-in-out" />
        <div className="absolute bottom-1 right-1 bg-teal-500 text-white font-semibold px-3 py-2 rounded shadow">
          {discount}% OFF
        </div>
      </div>

      <div className="flex items-center gap-2">
        <img
          className="h-15 w-15 object-cover"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRN_gsZpUih4WiOFmDBPEHUNLvKFfMzlr6qig&s"
          alt="Brand Logo"
        />

        <div className="mt-2">
          <h3 className="text-base text-red-600 font-semibold">{brand}</h3>
          <p className="text-lg font-semibold text-gray-600 line-clamp-1">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;
