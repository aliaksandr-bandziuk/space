import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Navigation } from 'swiper';
import 'swiper/swiper.min.css';
import SwiperCore, { Autoplay } from 'swiper';
import Image from 'next/image';

import styles from './Slider.module.scss';

SwiperCore.use([Autoplay, Navigation]);

export const Slider = ({ slides }) => {

  return (
    <div>
      <Swiper
        loop={true}
        autoplay={{ delay: 3000 }}
        modules={[EffectFade, Navigation]}
        navigation={{
          nextEl: '.buttonNext',
          prevEl: '.buttonPrev',
        }}
        className={styles.slider}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className={styles.slide}>
              <div className={styles.imageContainer}>
                <img className={styles.slideImage} src={slide.image} alt={slide.title} />
              </div>
              <div className={styles.slideContent}>
                <div className={styles.slideSubcontent}>
                  <h2 className={styles.slideTitle}>{slide.title}</h2>
                  <p className={styles.slideText}>{slide.text}</p>
                  <Link className='btn' href={slide.link.url}>{slide.link_text}</Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.buttons}>
          <div className='buttonPrev'>
            <button className={`${styles.sliderButton} ${styles.buttonLeft}`}>
              <Image src='/img/arrow-left.png' alt='arrow' width={30} height={30} />
            </button>
          </div>
          <div className='buttonNext'>
            <button className={`${styles.sliderButton} ${styles.buttonRight}`}>
              <Image src='/img/arrow-right.png' alt='arrow' width={30} height={30} />
            </button>
          </div>
        </div>
      </Swiper>
    </div>
  );
};
