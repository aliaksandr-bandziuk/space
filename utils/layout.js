export const getAlignItems = (verticalAlignment) => {
  const getAlignItemsMap = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
  };

  return `${getAlignItemsMap[verticalAlignment] || ""}`;
};

export const getAlignImage = (align) => {
  const getAlignImageMap = {
    left: "mr-auto",
    center: "mx-auto",
    right: "ml-auto",
  };

  return `${getAlignImageMap[align] || ""}`;
};