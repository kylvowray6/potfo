import React from "react";
import "./Work.css";
import inst from "../../img/port (3).png";
// import github from "../../img/github.png";
// import twitter from "../../img/twitter.png";
import twitt from "../../img/port (1).png";
import twitte from "../../img/port (1).webp";

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>works for your </span>
        <span>top companies</span>
        <spane>
          a skilled coder and worker,
          <br />
          Your all day a call away,
          <br />
          best of all ,,,
        </spane>
        {/* <button className="button s-button ">Hire me </button> */}
        <div></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={inst} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={twitte} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={twitt} alt="" />
          </div>
        </div>
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
