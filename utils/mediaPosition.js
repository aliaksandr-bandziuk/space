export const getMediaPosition = (mediaPosition) => {
  const getMediaPositionMap = {
    right: "md:flex-row-reverse",
  };

  return `${getMediaPositionMap[mediaPosition] || ""}`;
};