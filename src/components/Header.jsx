import React from "react";
import { Phone } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-gray-700 h-20 relative overflow-hidden">
      {/* Inline style for marquee animation */}
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }
        `}
      </style>

      <div className="container mx-auto h-full grid grid-cols-6 items-center text-white">
        {/* Logo - 1 col */}
        <div className="col-span-1 flex items-center">
          <img
            src="/assets/Logo_design-offers_white.png"
            alt="Logo"
            className="object-contain"
          />
        </div>

        {/* Scrolling Text - 4 cols */}
        <div className="col-span-4 overflow-hidden">
          <div
            style={{
              animation: "marquee 20s linear infinite",
              whiteSpace: "nowrap",
            }}
          >
            <p className="text-lg  antialiased tracking-tight text-white drop-shadow-sm">
              আপনার পছন্দের ব্রান্ড এর পণ্যের উপর, সেরা অফারটির খোঁজ পেতে চোখ
              রাখুন
              <span className="text-teal-300 font-extrabold pl-1">
                offersbangla.xyz
              </span>{" "}
              এ!
            </p>
          </div>
        </div>

        {/* Phone - 1 col */}
        <div className="col-span-1 flex items-center justify-end gap-2 pr-4">
          <Phone size={20} />
          <a
            href="tel:+88019739449"
            className="text-white text font-semibold hover:underline"
          >
            +88 01973-9449
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
