import React from 'react';

const Slider = ({ sliderData }) => {
  return (
    <div className="slider">
      {sliderData.map((slide) => (
        <div className="slide" key={slide.title}>
          <h2>{slide.title}</h2>
          <img src={slide.image} alt={slide.title} />
          <a>{slide.link}</a>
        </div>
      ))}
    </div>
  );
};

export default Slider;