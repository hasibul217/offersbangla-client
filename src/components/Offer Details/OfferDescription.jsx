/* eslint-disable react/prop-types */
import React from "react";
import { Clock } from "lucide-react";

const OfferDescription = ({ offer }) => {
  return (
    <div className=" mt-2 grid grid-cols-1 md:grid-cols-7 gap-6 mb-5">
      {/* Left section (could be image or empty for now) */}

      {/* Right section: Offer details */}
      <div className="md:col-span-5 flex flex-col justify-between">
        <div>
          {/* Bigger Title */}
          {/* <h2 className="text-3xl font-bold  text-gray-700 mb-2">
            {offer.title}
          </h2> */}
          

          {/* Highlighted box */}
          <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-300 text-lg space-y-4">
          <h2 className="text-3xl font-bold  text-gray-700 mb-2">
            {offer.title}
          </h2>
            <p className="text-gray-700 whitespace-pre-line">
              {offer.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferDescription;
