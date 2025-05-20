import React, { useState } from "react";
import { QrCode } from "lucide-react";
import {QRCodeSVG} from 'qrcode.react';

const OfferQR = ({ offerUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Button to open modal */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center space-x-2 px-4 py-2 mt-2 bg-teal-600 hover:bg-teal-700 text-white rounded shadow transition-colors duration-300"
        aria-label="Get QR Code for this offer"
      >
        <QrCode className="w-6 h-6" />
        <span className="font-semibold text-lg">Get QR for this offer</span>
      </button>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0  bg-opacity-30 backdrop-blur-lg flex justify-center items-center z-50"

          onClick={() => setIsOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div
            className="bg-white rounded-lg shadow-lg p-4 w-80 max-w-full"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            <h2
              id="modal-title"
              className="text-2xl font-bold mb-6 text-center text-gray-900"
            >
              Scan this
            </h2>

            <div className="flex justify-center mb-6">
              <QRCodeSVG value={offerUrl || "https://example.com"} size={200} />
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="block mx-auto px-6 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default OfferQR;
