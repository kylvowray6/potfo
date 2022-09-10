import React from "react";
import ddg from "../../img/ddg.mp4";
import dugg from "../../img/dugg.mp4";
import zuk from "../../img/zuk.mp4";
import duk from "../../img/duk.mp4";
import tuk from "../../img/tuk.mp4";
import fuk from "../../img/fuk.mp4";
import kra from "../../img/kra.mp4";

import "./Video.css";
import { Swiper, SwiperSlide } from "swiper/react";

function Video() {
  return (
    <div className="vidy">
      <span className="spany">Trap</span>
      <span className="spany">slide</span>

      <Swiper
        spaceBetween={3}
        slidesPerView={2.65}
        grabCursor={true}
        className="videsli"
      >
        <SwiperSlide className="swipere">
          <video src={kra} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={dugg} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={zuk} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={fuk} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={duk} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={ddg} controls alt="" />
        </SwiperSlide>
        <SwiperSlide className="swipere">
          <video src={tuk} controls alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Video;
