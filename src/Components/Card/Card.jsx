import React from "react";
import "./Card.css";

const Card = ({ image, heading, detail }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <span>{heading}</span>
      <span>{detail}</span>
    </div>
  );
};

export default Card;
