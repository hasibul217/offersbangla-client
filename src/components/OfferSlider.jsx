/* eslint-disable react/prop-types */
// components/ReusableSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const defaultBreakpoints = {
  320: { slidesPerView: 2 },
  640: { slidesPerView: 3 },
  768: { slidesPerView: 4 },
  1024: { slidesPerView: 4 },
  1280: { slidesPerView: 7 },
};

const OfferSlider = ({
  slides = [],
  renderSlide,
  slidesPerView = 4,
  spaceBetween = 20,
  breakpoints = defaultBreakpoints,
  loop = true,
  autoplayDelay = 4000,
}) => {
  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={spaceBetween}
      freeMode={true}
      loop={loop}
      autoplay={{
        delay: autoplayDelay,
        disableOnInteraction: false,
      }}
      modules={[FreeMode, Autoplay]}
      className="w-full"
      breakpoints={breakpoints}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {renderSlide(slide, index)}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OfferSlider;
 