import React from "react";
import "./Services.css";
// import insta from "../../img/insta.jpg";

import Card from "../Card/Card";
import doc from "./doc.jpeg";
import portn from "../../img/port (2).png";
import portr from "../../img/port (2).jpg";

const Services = () => {
  return (
    <div className="services">
      <div className="awesome">
        <span>My Top </span>
        <span>Services</span>
        <span>
          I offer the services in fullstack
          <br />
          web development and also in the field
          <br />
          of app development
        </span>
        <a href={doc} download>
          {/* <button className="button s-button">Download CV</button> */}
        </a>
      </div>
      <div className="cards">
        <div style={{ left: "6rem" }}>
          <Card
            image={portr}
            heading={"UI designs"}
            detail={"Layout , web connections, navigation, animation ...."}
          />
        </div>
        <div style={{ top: "17rem", left: "6rem" }}>
          <Card
            image={portn}
            heading={"Ux designer"}
            detail={"For user experience I offer the top"}
          />
        </div>
        {/* <div style={{ left: "20rem" }}>
          <Card
            image={insta}
            heading={"Code maintanance "}
            detail={"for existing code base call,... "}
          />
        </div>
        <div style={{ left: "20rem", top: "17rem" }}>
          <Card
            image={insta}
            heading={"Code-integration"}
            detail={"Code to systems "}
          />
        </div> */}
      </div>
    </div>
  );
};

export default Services;
