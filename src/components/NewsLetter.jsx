import React from "react";
import { Mail } from "lucide-react"; // optional: for the email icon

const Newsletter = () => {
  return (
   <div
  className="container mx-auto mb-6 rounded-lg overflow-hidden bg-center bg-cover"
  style={{
    backgroundImage:
      "url('https://img.freepik.com/free-photo/notebook-alarm-clock-blue-background-flat-lay_169016-30347.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740')",
  }}
>
  <div className="bg-gradient-to-r from-black/70 to-black/40 w-full h-full p-6 sm:p-12">
    <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
      {/* Left Content */}
      <div className="text-white max-w-xl">
        <div className="flex items-center gap-2 mb-2 text-sm font-medium text-blue-200">
          <Mail className="w-5 h-5" />
          <span>Newsletter</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get Weekly Updates</h2>
        <p className="text-sm sm:text-base text-gray-300 mb-6">
          Subscribe to our newsletter and stay updated with the latest news, tips, and offers.
        </p>
        <form className="flex flex-col sm:flex-row items-stretch gap-4">
          <div className="flex items-center bg-white rounded-md px-3 py-2 w-full sm:w-auto">
            <Mail className="w-5 h-5 text-gray-400 mr-2" />
            <input
              type="email"
              placeholder="example@gmail.com"
              className="outline-none w-full text-gray-800 placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-gray-900 text-white font-semibold px-6 py-2 rounded-md hover:bg-gray-800 transition-all duration-200"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  </div>
</div>
  );
};

export default Newsletter;
