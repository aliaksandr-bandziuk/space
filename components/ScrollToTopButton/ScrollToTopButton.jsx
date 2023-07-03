import React, { useState, useEffect } from 'react';

import styles from './ScrollToTopButton.module.scss';
import Image from 'next/image';

export const ScrollToTopButton = () => {

  const [isVisible, setIsVisible] = useState(false);

  // Показывать кнопку прокрутки, если прокручено больше 300 пикселей
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Добавляем обработчик события прокрутки при монтировании компонента
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Очищаем обработчик события при размонтировании компонента
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Прокрутка наверх при нажатии на кнопку
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button onClick={scrollToTop} className={styles.scrollToTopButton}>
          <Image src="/img/arrow-top.png" width={40} height={40} alt="arrow-up" />
        </button>
      )}
    </>
  );
};