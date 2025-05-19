import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    image: "https://img.freepik.com/free-vector/cyber-monday-discounts_23-2147500463.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Daraz",
    text: "Enjoy exclusive deals this Eid"
  },
  {
    image: "https://img.freepik.com/free-vector/broken-paper-background-super-offers_23-2147604008.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Aarong",
    text: "Up to 50% off on all items"
  },
  {
    image: "https://img.freepik.com/premium-vector/winter-sale-price-tag-blue_859243-486.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Bata",
    text: "Free gifts with every purchase"
  },
  {
    image: "https://img.freepik.com/free-vector/super-sale-banner-design-vector-illustration_1035-14931.jpg?ga=GA1.1.1213500636.1747635848&semt=ais_hybrid&w=740",
    brand: "Unilever",
    text: "Cashback offers available now"
  }
];

export default function HeroSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10">
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={2.5}
        centeredSlides={true}
        loop={true}
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 }
        }}
        className="pb-10"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <div
                className={`transform transition-transform duration-500 ease-in-out ${
                  isActive ? "scale-110  shadow-xl" : "scale-95 opacity-80"
                } bg-white rounded-2xl overflow-hidden text-center`}
              >
                <img
                  src={slide.image}
                  alt={slide.brand}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-bold text-gray-800">
                    {slide.brand}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{slide.text}</p>
                </div>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
