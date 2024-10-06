import React, { useContext, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { SlBasket } from "react-icons/sl";
import { Context } from "../../Context/CardContext";
import styles from "./styles.module.scss";

const Card = () => {
  const { cardElements, setCardElements } = useContext(Context);

  const card = cardElements.map((item) => {
    const { id, title, season, name, description, size, img, complect } = item;
    return (
      <div className={styles.card} key={id}>
        <h2 className={styles.card_title}>{title}</h2>
        <div className={styles.card_season}>{season}</div>
        <div className={styles.card_blocks}>
          <div className={styles.card_main}>
            <div className={styles.card_price}>50€</div>
            <div className={styles.card_main_info}>
              <div className={styles.sizes}>
                {size.map((item) => (
                  <p className={styles.size}>{item}</p>
                ))}
              </div>
              <div className={styles.card_complect}>
                {complect.map((item) => (
                  <>{item}</>
                ))}
              </div>
            </div>
            <Swiper
              className={styles.card_images}
              effect={"cards"}
              grabCursor={true}
              modules={[EffectCards]}
            >
              {img.map((item) => (
                <SwiperSlide className={styles.card_image}>
                  <img src={item} alt={name} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.card_aside}>
            <a
              className={styles.card_link}
              href="https://wa.me/393509955046"
              target="_blank"
              rel="noreferrer"
            >
              <SlBasket />
            </a>
            <div className={styles.card_aside_info}>
              <h3 className={styles.card_name}>{name}</h3>
              <div className={styles.card_description}>{description}</div>
            </div>
          </div>
        </div>
      </div>
    );
  });

  return <>{card}</>;
};

export default Card;

// 1.   npm install gh-pages --save-dev
// 2.   создайте репозиторий на gh
// 3.   git init
// 4.   git commit -m "first commit"
// 5.   git add .
// 6.   git status
// 7.   git commit -m "first commit"
// 8.   git branch -M "main"
// 9.   git remote add origin "ссылка"
// 10.  git push -u origin "main"
//      выводится:
//      branch "main" set up to track "origin/main"
// 11.  в packcage.json перед "name" напишите:
//      "homepage": "https://aibekbbic.github.io/имя репозитория"
// 12.  в packcage.json, внутри "scripts", после "start" напишите:
//      "predeploy": "npm run build",
//      "deploy": "gh-pages -d build",
// 13.  npm run deploy
//      выводятся:
//      the build folder is ready to be deployed
//      Published
//      перезагружайте стр. gh с репозиторием
// 11.  переходите settings  -> pages
//      перезагружайте стр. gh с репозиторием
//      выводится ссылка на репозиторий
