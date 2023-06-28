import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';

export const Slider = ({ slides }) => {
  return (
    <Swiper>
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          {slide.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
