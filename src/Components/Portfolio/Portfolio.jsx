import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";

import rust from "../../img/rust.png";
import movo from "../../img/movo.png";
import soko from "../../img/soko.png";
// import ddg from "../../img/ddg.mp4";

import "swiper/css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <span>Projects i have </span>
      <span>worked on</span>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide className="swiper-slide">
          <img src={soko} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={rust} alt="" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={movo} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
