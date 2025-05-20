/* eslint-disable react/prop-types */
import React from "react";
import OfferQR from "./OfferQR";
import ShareOffer from "./ShareOffer";

const OfferCoverImage = ({ offer }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-start">
        {/* Left side - Cover image and buttons */}
        <div className="md:col-span-5">
          <img src={offer.coverImage} alt="Cover" className="w-full h-100" />

          {/* QR & Share below cover image */}
          <div className="flex items-center gap-4 justify-between">
            <OfferQR offer={offer} />
            <ShareOffer />
          </div>
        </div>

        {/* Right side - Card image */}
        <div className="md:col-span-2">
          <img
            src={offer.cardImage}
            alt="Right Side"
            className="w-full h-100 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferCoverImage;
