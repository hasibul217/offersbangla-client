// components/FeatureOfferSlider.jsx
import React from "react";
import OfferCard from "../OfferCard";

import OfferSlider from "../OfferSlider";

const slides = [
  {
    image:
      "https://img.freepik.com/free-vector/cyber-monday-discounts_23-2147500463.jpg",
    brand: "Daraz",
    text: "Enjoy exclusive deals this Eid",
    discount: 30,
  },
  {
    image:
      "https://img.freepik.com/free-vector/cyber-monday-discounts_23-2147500463.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Daraz",
    text: "Enjoy exclusive deals this Eid",
    discount: 25,
  },
  {
    image:
      "https://img.freepik.com/free-vector/broken-paper-background-super-offers_23-2147604008.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Aarong",
    text: "Up to 50% off on all items",
    discount: 50,
  },
  {
    image:
      "https://img.freepik.com/premium-vector/winter-sale-price-tag-blue_859243-486.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Bata",
    text: "Free gifts with every purchase",
    discount: 20,
  },
  {
    image:
      "https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Unilever",
    text: "Cashback offers available now",
    discount: 35,
  },
  {
    image:
      "https://img.freepik.com/free-vector/cyber-monday-discounts_23-2147500463.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Daraz",
    text: "Enjoy exclusive deals this Eid",
    discount: 30,
  },
  {
    image:
      "https://img.freepik.com/free-vector/broken-paper-background-super-offers_23-2147604008.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Aarong",
    text: "Up to 50% off on all items",
    discount: 50,
  },
  {
    image:
      "https://img.freepik.com/premium-vector/winter-sale-price-tag-blue_859243-486.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Bata",
    text: "Free gifts with every purchase",
    discount: 20,
  },
  {
    image:
      "https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Unilever",
    text: "Cashback offers available now",
    discount: 35,
  },
];

const FeatureOfferSlider = () => {
  return (
    <div className="w-full">
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

export default FeatureOfferSlider;
