import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const categories = [
  {
    name: "Design",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055687.png",
  },
  {
    name: "Development",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055672.png",
  },
  {
    name: "Marketing",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055673.png",
  },
  {
    name: "Writing",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055666.png",
  },
  {
    name: "Finance",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055676.png",
  },
  {
    name: "Photography",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055678.png",
  },
  {
    name: "Education",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055669.png",
  },
  {
    name: "Health",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055667.png",
  },
  {
    name: "Music",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055675.png",
  },
  {
    name: "Travel",
    icon: "https://cdn-icons-png.flaticon.com/128/1055/1055679.png",
  },
];

export default function CategorySlider() {
  return (
    <div className="container mx-auto ">
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
            <div className="flex justify-center items-center bg-white p-3  hover:shadow-md transition gap-2 border border-gray-200 my-2">
              <img src={cat.icon} alt={cat.name} className="w-6 h-6 " />
              <span className="text-sm font-medium">{cat.name}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
