// components/ReusableSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import BrandCard from "../BrandCard";

const categories = [
  
  {
    name: "Development",
    icon: "https://logowik.com/content/uploads/images/t_google-g-icon-202583427.logowik.com.webp",
  },
  {
    name: "Marketing",
    icon: "https://logowik.com/content/uploads/images/t_adobe781.logowik.com.webp",
  },
  {
    name: "Writing",
    icon: "https://logowik.com/content/uploads/images/t_amazon4327.logowik.com.webp",
  },
  {
    name: "Finance",
    icon: "https://logowik.com/content/uploads/images/t_danet2741.logowik.com.webp",
  },
  {
    name: "Photography",
    icon: "https://logowik.com/content/uploads/images/t_591_winstar.jpg",
  },
  {
    name: "Education",
    icon: "https://logowik.com/content/uploads/images/t_bold-rooster-design-for-food-poultry-businesses3937.logowik.com.webp",
  },
  {
    name: "Health",
    icon: "https://logowik.com/content/uploads/images/t_food-delivery-scooter-person-illustration9534.logowik.com.webp",
  },
  {
    name: "Music",
    icon: "https://logowik.com/content/uploads/images/t_google-g-icon-202583427.logowik.com.webp",
  },
  {
    name: "Travel",
    icon: "https://logowik.com/content/uploads/images/t_amazon4327.logowik.com.webp",
  },
];



const FeaturebrandSlider = () => {
  return (
    <div className="container mx-auto py-2">
        <span className="mb-5 text-lg font-semibold text-teal-700">Feature Brand</span>
      <Swiper
        slidesPerView={8}
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
