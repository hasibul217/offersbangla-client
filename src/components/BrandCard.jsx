/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const BrandCard = ({ image }) => {
  return (
    <div className="flex justify-center items-center bg-white hover:shadow-md transition gap-2 border border-gray-200 rounded-md mt-2 cursor-pointer w-40 aspect-square">
      <img src={image} alt="brand" className="w-38 h-38 object-contain" />
    </div>
  );
};

export default BrandCard;
