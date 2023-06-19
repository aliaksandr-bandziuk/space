import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

export const Slider = ({ slides }) => {
  const formattedSlides = Array.isArray(slides) ? slides : [];

  return (
    <Swiper>
      {/* Рендеринг слайдов */}
      {formattedSlides.map((slide, index) => (
        <SwiperSlide key={index}>
          {/* Рендеринг содержимого слайда */}
          <img src={slide.image} alt={slide.label} />
          <h3>{slide.label}</h3>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
