import React from "react";
import { getFontSizeForHeading, getTextAlign } from "utils/fonts";

export const Heading = ({ textAlign, content, level, textColor, backgroundColor }) => {

  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};

  const tag = React.createElement(`h${level}`, {
    dangerouslySetInnerHTML: { __html: content },
    className: `font-heading max-w-5xl mx-auto my-5 ${getFontSizeForHeading(
      level
    )} ${getTextAlign(textAlign)}`,
    style:{...textColorStyle, ...backgroundColorStyle}
  });
  return tag;
};