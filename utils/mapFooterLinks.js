import { v4 as uuid } from "uuid";

export const mapFooterLinks = (footerLinks) => {
  return footerLinks.map((footerLink) => ({
    id: uuid(),
    destination: footerLink.footerLink.destination?.uri,
    label: footerLink.footerLink.label,
  }));
};