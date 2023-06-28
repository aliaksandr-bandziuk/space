import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './MainMenu.module.scss';

import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export const MainMenu = ({ items, logo, icons }) => {
  const [isNavVisible, setNavVisible] = useState(false);
  const [openSubMenus, setOpenSubMenus] = useState([]);

  const toggleSubMenu = (itemId) => {
    if (openSubMenus.includes(itemId)) {
      setOpenSubMenus(openSubMenus.filter((id) => id !== itemId));
    } else {
      setOpenSubMenus([...openSubMenus, itemId]);
    }
  };

  const closeMenus = () => {
    setNavVisible(false);
    setOpenSubMenus([]);
  };

  useEffect(() => {
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.bgPrimaryScrolled,
        targets: `.${styles.bgPrimary}`
      }
    });
  
    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.destinationScrolled,
        targets: `.${styles.destination}`
      }
    });

    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.iconsScrolled,
        targets: `.${styles.icons}`
      }
    });

    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.logoImageScrolled,
        targets: `.${styles.logoImage}`
      }
    });

    ScrollTrigger.create({
      start: 'top -70',
      end: 99999,
      toggleClass: {
        className: styles.logoScrolled,
        targets: `.${styles.logo}`
      }
    });
  }, []);
  
  

  return (
    <div className={styles.bgPrimary}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link href="/">
            <div className={styles.logoLink}>
              <Image alt="Logo" src={logo} width={50} height={50} className={styles.logoImage} />
            </div>
          </Link>
        </div>
        <nav className={`${styles.nav} ${isNavVisible ? styles.navVisible : ''}`} onClick={closeMenus}>
          {(items || []).map((item) => (
            <div key={item.id} className={styles['nav-item']}>
              <div className={styles['nav-item-wrapper']}>
                <div className={styles.linkWrapper}>
                  <div className={styles.destination}>
                    <Link
                      href={item.destination || ""}
                      className={styles.navLink}
                      onClick={closeMenus}
                    >
                      {item.label}
                    </Link>
                  </div>
                  {!!item.subMenuItems && item.subMenuItems.length > 0 && (
                    <div
                      className={`${styles['sub-menu-arrow']} ${
                        openSubMenus.includes(item.id) ? styles.open : ''
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubMenu(item.id);
                      }}
                    />
                  )}
                </div>
                {!!item.subMenuItems && item.subMenuItems.length > 0 && (
                  <div
                    className={`${styles['sub-menu']} ${
                      openSubMenus.includes(item.id) ? styles['sub-menu-open'] : ''
                    }`}
                  >
                    {item.subMenuItems.map((subMenuItem) => (
                      <Link
                        href={subMenuItem.destination}
                        key={subMenuItem.id}
                        className={styles['sub-menu-item']}
                        onClick={closeMenus}
                      >
                        {subMenuItem.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          <div className={styles.icons}>
            {(icons || []).map((icon) => (
              <Link
                key={icon.id}
                href={icon.destination}
                target='_blank'
                className={styles.iconLink}
                dangerouslySetInnerHTML={{ __html: icon.label }}
              />
            ))}
          </div>
        </nav>
        <div
          className={`${styles.burgerMenu} ${isNavVisible ? styles.open : ''}`}
          onClick={() => {
            setNavVisible(!isNavVisible);
          }}
        >
          {isNavVisible ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};
