import Link from "next/link"
import Image from "next/image"

import styles from "./Footer.module.scss";

export const Footer = ({
  logo,
  links,
  icons,
  copyright,
  developerLabel,
  developerDestination }) => {

  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div data-aos="fade-up" className={styles.links}>
          {(links || []).map((link) => (
            <div key={link.id}>
              <Link href={link.destination || "/"} className={styles.link}>
                {link.label}
              </Link>
            </div>
          ))}
        </div>
        <div className={styles.icons}>
          {(icons || []).map((icon) => (
            <Link
              key={icon.id}
              href={icon.destination}
              className={styles.iconLink}
              dangerouslySetInnerHTML={{ __html: icon.label }}
            />
          ))}
        </div>
        <div className={styles.footerData}>
          <div className={styles.dataItem}>
            <p className={styles.copyrightTxt}>{copyright}</p>
          </div>
          <div className={styles.dataItem}>
            <Image
              alt="Logo"
              src={logo}
              width={50}
              height={50}
            />
          </div>
          <div className={styles.dataItem}>
            <p className={styles.developerLabel}>Developed by:</p>
            <Link href={developerDestination || "/"} className={styles.developerDestination}>
              {developerLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}