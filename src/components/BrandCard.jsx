import React from "react";

const BrandCard = ({ image }) => {
  return (
    <div className="flex justify-center items-center bg-white  hover:shadow-md transition gap-2 border border-gray-200 rounded-md mt-2 cursor-pointer w-40 h-40">
      <img src={image} alt="brand" className="w-40 h-40 object-contain" />
    </div>
  );
};

export default BrandCard;
