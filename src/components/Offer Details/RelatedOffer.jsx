// components/FeatureOfferSlider.jsx
import React from "react";
import OfferCard from "../OfferCard";

import OfferSlider from "../OfferSlider";
import OfferType from "../OfferType";

const slides = [
  {
    image:
      "https://img.freepik.com/free-photo/grey-comfortable-armchair-isolated-white-background_181624-25295.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "IKEA",
    text: "Modern armchair for your cozy corner",
    discount: 15,
  },
  {
    image:
      "https://img.freepik.com/free-photo/scandinavian-vintage-wood-cabinet-with-chair-by-dark-blue-wall_53876-98164.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "HATIL",
    text: "Scandinavian vibes for your space",
    discount: 20,
  },
  {
    image:
      "https://img.freepik.com/free-photo/vertical-shot-wooden-chair-white_181624-33157.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Navana",
    text: "Elegant wooden chair design",
    discount: 18,
  },
  {
    image:
      "https://img.freepik.com/premium-photo/modern-living-room-interior-design_469760-24687.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Otobi",
    text: "Complete modern living room set",
    discount: 25,
  },
  {
    image:
      "https://img.freepik.com/free-photo/velvet-interior-classic-cushion-relax_1203-4733.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Regal",
    text: "Velvet interiors for a royal touch",
    discount: 30,
  },
];


const type = {
  type: "Related Offer",
};

const RelatedOffer = () => {
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

export default RelatedOffer;
