/* eslint-disable react/prop-types */
import React from "react";

export default function BrandInfoCard({ brand }) {
  return (
    <div className="flex items-center gap-4 bg-white p-4 rounded h-28 shadow max-w-xl mx-auto border border-gray-200">
      {/* Image Section */}
      <div className="w-25 h-25   overflow-hidden ">
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-full "
        />
      </div>

      {/* Info Section */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900">{brand.name}</h2>
        <p className="text-sm text-gray-500 mt-1">
          <span className="font-semibold">Founded:</span> {brand.date}
        </p>
      </div>
    </div>
  );
}
