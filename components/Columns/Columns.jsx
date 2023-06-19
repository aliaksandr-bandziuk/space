import { getAlignItems } from "utils/layout";

export const Columns = ({
  isStackedOnMobile,
  children,
  textColor,
  backgroundColor,
  verticalAlignment}) => {
  
  const textColorStyle = textColor ? { color: textColor } : {};
  const backgroundColorStyle = backgroundColor ? { backgroundColor } : {};
  
  return (
    <div
      className="my-10"
      style={{...textColorStyle, ...backgroundColorStyle}}
    >
      <div className={`max-w-[1220px] mx-auto ${getAlignItems(verticalAlignment)} ${isStackedOnMobile ? "flex flex-col justify-center md:flex md:flex-row" : "flex"}`}>{children}</div>
    </div>
  )
}