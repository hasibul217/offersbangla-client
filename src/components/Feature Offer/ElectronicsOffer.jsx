// components/FeatureOfferSlider.jsx
import React from "react";
import OfferCard from "../OfferCard";

import OfferSlider from "../OfferSlider";
import OfferType from "../OfferType";

const slides = [
  {
    image:
      "https://img.freepik.com/free-photo/wireless-earbuds-with-neon-cyberpunk-style-lighting_23-2151074297.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Sony",
    text: "Experience music in cyberpunk style",
    discount: 20,
  },
  {
    image:
      "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072202.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "JBL",
    text: "Futuristic sound, retro design",
    discount: 22,
  },
  {
    image:
      "https://img.freepik.com/premium-photo/laptop-accessories_1067349-6315.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Dell",
    text: "Laptop essentials at your fingertips",
    discount: 18,
  },
  {
    image:
      "https://img.freepik.com/free-photo/still-life-wireless-cyberpunk-headphones_23-2151072206.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Beats",
    text: "Bold design meets booming bass",
    discount: 25,
  },
  {
    image:
      "https://img.freepik.com/premium-photo/laptop-computer-apps-icons-interface_118047-549.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "HP",
    text: "Smart interface for smarter work",
    discount: 30,
  },
  {
    image:
      "https://img.freepik.com/free-photo/compass-lying-near-drone_23-2147833252.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "DJI",
    text: "Adventure-ready drone tech",
    discount: 28,
  },
];


const type = {
  type: "Electronics",
};

const ElectronicsOffer = () => {
  return (
    <div className="container mx-auto py-4">
      <OfferType type={type.type} />
      <OfferSlider
        slides={slides}
        renderSlide={(slide) => (
          <OfferCard
            image={slide.image}
            brand={slide.brand}
            text={slide.text}
            discount={slide.discount}
          />
        )}
        // Optional: override default breakpoints
        breakpoints={{
          320: { slidesPerView: 1.5 },
          640: { slidesPerView: 2.5 },
          768: { slidesPerView: 3.5 },
          1024: { slidesPerView: 4 },
        }}
      />
    </div>
  );
};

export default ElectronicsOffer;
