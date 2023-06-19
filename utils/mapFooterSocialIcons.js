import { v4 as uuid } from "uuid";

export const mapFooterSocialIcons = (footerSocialIcons) => {
  return footerSocialIcons.map((footerSocialIcon) => ({
    id: uuid(),
    destination: footerSocialIcon.footerSocialIcon.destination?.url,
    label: footerSocialIcon.footerSocialIcon.label,
  }));
};