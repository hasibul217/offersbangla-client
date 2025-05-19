import React from "react";
import HeroText from "./HeroText";
import HeroSlider from "./HeroSlider";

const HeroSection = () => {
  return (
    <div
      className="bg-cover bg-center max-h-[500px] h-screen w-full text-white"
      style={{ backgroundImage: `url('/assets/hero.jpg')` }}
    >
      <div className="container mx-auto flex flex-col md:flex-row h-full">
        {/* HeroText Centered */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <HeroText />
        </div>

        {/* HeroSlider Independent */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
