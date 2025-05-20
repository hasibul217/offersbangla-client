import React from "react";
import { Facebook, Instagram, Mail, MessageCircle } from "lucide-react";

const socialLinks = [
  {
    icon: Facebook,
    label: "Share on Facebook",
    color: "text-blue-600 hover:text-white bg-white hover:bg-blue-600",
  },
  {
    icon: MessageCircle,
    label: "Share via Messenger",
    color: "text-green-500 hover:text-white bg-white hover:bg-green-500",
  },
  {
    icon: Instagram,
    label: "Share on Instagram",
    color: "text-pink-600 hover:text-white bg-white hover:bg-pink-600",
  },
  {
    icon: Mail,
    label: "Share via Email",
    color: "text-red-600 hover:text-white bg-white hover:bg-red-600",
  },
];

const ShareOffer = () => {
  return (
    <div className="mt-4 flex items-center gap-4 flex-wrap">
      <p className="font-semibold text-base sm:text-lg text-gray-700">
        Share this offer:
      </p>
      <div className="flex gap-3 sm:gap-4">
        {socialLinks.map(({ icon: Icon, label, color }, index) => (
          <button
            key={index}
            aria-label={label}
            title={label}
            className={`p-2 sm:p-2.5 rounded-full shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 cursor-pointer focus:ring-offset-2 focus:ring-blue-300 ${color}`}
          >
            <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ShareOffer;
