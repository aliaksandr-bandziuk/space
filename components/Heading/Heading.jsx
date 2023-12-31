import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level, textColor, backgroundColor }) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-[1220px] px-[10px] mx-auto mb-10 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
    style: { ...textColorStyle, ...backgroundColorStyle },
    "data-aos": "fade-up"
  });
  return tag;
};