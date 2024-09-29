import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import styles from "./styles.module.scss";
import argentina from "../../images/argentina_2024_home_1.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.card_title}>FC Barcelona</h2>
      <div className={styles.card_season}>2024-2025</div>
      <div className={styles.card_blocks}>
        <div className={styles.card_main}>
          <div className={styles.card_main_info}>
            <div className={styles.sizes}>
              <p className={styles.size_active}>S</p>
              <p className={styles.size}>M</p>
              <p className={styles.size}>L</p>
              <p className={styles.size}>XL</p>
            </div>
            <div className={styles.card_complect}>maglia, pantaloncini</div>
          </div>
          <Swiper
            className={styles.card_images}
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
          >
            <SwiperSlide className={styles.card_image}>Slide 1</SwiperSlide>
            <SwiperSlide className={styles.card_image}>Slide 2</SwiperSlide>
            <SwiperSlide className={styles.card_image}>Slide 3</SwiperSlide>
          </Swiper>
        </div>
        <div className={styles.card_aside}>
          <h3 className={styles.card_name}>Jersey del FC Barcelona</h3>
          <div className={styles.card_description}>
            text text text text text text text text text text text text text
            text text text text text text text text text text text text text
          </div>
          <a href="wa.me/393509955046" target="_blank">
            Ordina ora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
