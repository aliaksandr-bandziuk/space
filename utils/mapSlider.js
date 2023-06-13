import { v4 as uuid } from "uuid";

export const mapMainSlider = (slides) => {
  return slides.map((slide) => ({
    id: uuid(),
    title: slide.slide.label,
    link: slide.slide.destination,
    image: slide.slide.image,
  }));
};