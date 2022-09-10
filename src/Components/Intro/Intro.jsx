import React from "react";
import "./Intro.css";
import insta from "../../img/insta.jpg";
// import github from "../../img/github.png";
import twitter from "../../img/twitter.png";
import kk from "../../img/kk.jpg";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import fity from "../../img/fity.jpg";
import portm from "../../img/portm.png";
import portr from "../../img/port (2).jpg";

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! i am </span>
          <span>Kelvin Karani</span>
          <span>Guantai</span>
          <span>
            a fullstack developer with top notch skills always making the most{" "}
          </span>
        </div>
        {/* <button className="button i-button">Hire me</button> */}
        <div className="i-icons">
          <a href="http://www.instagram.com/k.qei/">
            <img src={insta} alt="" />
          </a>
          {/* <img src={github} alt="" /> */}
          <a href="https://twitter.com/Kylvowray6Top">
            <img src={twitter} alt="" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={fity} alt="" />
        <img src={kk} alt="" />
        <div className="i-rutu" style={{ top: "-170px", left: "40%" }}>
          <FloatingDiv
            image={portm}
            className="jez"
            txt1="fullstack"
            txt2="developer"
          />
        </div>
        <div className="jutu" style={{ bottom: "200px" }}>
          <FloatingDiv image={portr} txt1="app" txt2="Developing Guru" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
