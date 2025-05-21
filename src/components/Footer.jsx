import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-teal-600  container mx-auto    py-8">
      <div className=" mx-auto px-4 text-center space-y-8">
        {/* Logo */}
        <div>
          <img
            src="/assets/logo_black_offers_bangla.png"
            alt="OffersBangla Logo"
            className="mx-auto h-10"
          />
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-5 text-base text-gray-700 font-semibold">
          {[
            "About Us",
            "Careers",
            "Contact",
            "FAQ",
            "Privacy Policy",
            "Terms of Use",
          ].map((item, idx, arr) => (
            <span key={item} className="flex items-center gap-4">
              <a
                href="#"
                className="hover:text-teal-600 transition duration-200"
              >
                {item}
              </a>
              {idx < arr.length - 1 && <span className="text-gray-600">|</span>}
            </span>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-pink-500 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-sky-500 transition">
            <Twitter className="w-6 h-6" />
          </a>
          <a href="#" className="hover:text-blue-800 transition">
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-500 font-medium">
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-semibold text-teal-700">OffersBangla</span> |
          ICITY. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
