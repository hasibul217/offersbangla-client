// components/ReusableSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import BrandCard from "../BrandCard";

const categories = [
  {
    name: "Design",
    icon: "https://img.freepik.com/free-vector/colorful-abstract-shapes-background_23-2148913649.jpg",
  },
  {
    name: "Development",
    icon: "https://img.freepik.com/free-vector/programming-code-background_23-2148864534.jpg",
  },
  {
    name: "Marketing",
    icon: "https://img.freepik.com/free-vector/marketing-strategy-concept-illustration_114360-1506.jpg",
  },
  {
    name: "Writing",
    icon: "https://img.freepik.com/free-vector/writing-concept-illustration_114360-1737.jpg",
  },
  {
    name: "Finance",
    icon: "https://img.freepik.com/free-vector/business-finance-and-transaction_53876-128105.jpg",
  },
  {
    name: "Photography",
    icon: "https://img.freepik.com/free-vector/photographer-taking-photo_23-2148531131.jpg",
  },
  {
    name: "Education",
    icon: "https://img.freepik.com/free-vector/online-education-concept-illustration_114360-2833.jpg",
  },
  {
    name: "Health",
    icon: "https://img.freepik.com/free-vector/doctor-illustration-concept_114360-1173.jpg",
  },
  {
    name: "Music",
    icon: "https://img.freepik.com/free-vector/music-concept-illustration_114360-1605.jpg",
  },
  {
    name: "Travel",
    icon: "https://img.freepik.com/free-vector/travel-concept-illustration_114360-2586.jpg",
  },
];


const FeaturebrandSlider = () => {
  return (
    <div className="container mx-auto">
        <span className="mb-5 text-lg font-semibold text-teal-700">Feature Brand</span>
      <Swiper
        slidesPerView={7}
        spaceBetween={20}
        freeMode={true}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[FreeMode, Autoplay]}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
          1280: { slidesPerView: 7 },
        }}
      >
        {categories.map((cat, index) => (
          <SwiperSlide key={index}>
            
            <BrandCard image={cat.icon}/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default FeaturebrandSlider;
