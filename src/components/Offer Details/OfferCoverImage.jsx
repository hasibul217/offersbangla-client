/* eslint-disable react/prop-types */
import React from "react";

const OfferCoverImage = ({offer}) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-center">
        {/* Left side - col 4/6 */}
        <div className="md:col-span-5">
          <img
            src={offer.coverImage}
            alt="Cover"
            className="w-full h-100"
          />
        </div>

        {/* Right side - col 2/6 */}
        <div className="md:col-span-2">
          <img
            src={offer.cardImage}
            alt="Right Side"
            className="w-full h-100  \ object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCoverImage;
