import { v4 as uuid } from "uuid";

export const mapMainSlider = (slides) => {
  return slides.map((slide) => ({
    id: uuid(),
    title: slide.slide.slide_title,
    link: slide.slide.slide_link,
    image: slide.slide.slide_image,
  }));
};