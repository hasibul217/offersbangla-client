/* eslint-disable react/prop-types */
import React from "react";
import OfferQR from "./OfferQR";
import ShareOffer from "./ShareOffer";
import BrandInfoCard from "../BrandInfoCard";
import { Clock } from "lucide-react";

const OfferCoverImage = ({ offer, brand }) => {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-7 gap-4 items-start">

        {/* 1st Part: Cover Image (5 cols) */}
        <div className="md:col-span-5 bg-gray-100 rounded flex items-center justify-center">
          <img
            src={offer.coverImage}
            alt="Cover"
            className="w-full md:h-100 object-cover rounded"
          />
        </div>

        {/* 2nd Part: Card Image (2 cols) */}
        <div className="md:col-span-2 bg-gray-100 rounded flex items-center justify-center">
          <img
            src={offer.cardImage}
            alt="Card"
            className="w-full md:h-100 object-cover rounded"
          />
        </div>

        {/* 3rd Part: OfferQR & ShareOffer (below Cover Image, 5 cols) */}
        <div className="md:col-span-5 bg-white rounded">
          {/* Row for QR and Share */}
          <div className="flex items-center justify-between mb-2">
            <OfferQR offer={offer} />
            <ShareOffer />
          </div>

          {/* Start and End time below */}
          <div className="">
            <p className="flex items-center space-x-2 rounded-md py-1">
              <Clock className="w-5 h-5 text-green-600" />
              <span className="font-semibold text-green-800 min-w-[90px]">
                Start Time:
              </span>
              <span className="text-gray-700">
                {new Date(offer.startTime).toLocaleString()}
              </span>
            </p>

            <p className="flex items-center space-x-2 rounded-md py-1">
              <Clock className="w-5 h-5 text-red-600" />
              <span className="font-semibold text-red-800 min-w-[90px]">
                End Time:
              </span>
              <span className="text-gray-700">
                {offer.endTime
                  ? new Date(offer.endTime).toLocaleString()
                  : "N/A"}
              </span>
            </p>
          </div>
        </div>

        {/* 4th Part: BrandInfoCard (below Card Image, 2 cols) */}
        <div className="md:col-span-2 bg-white rounded">
          <BrandInfoCard brand={brand} />
        </div>
      </div>
    </div>
  );
};

export default OfferCoverImage;
