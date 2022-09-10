import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">K~KARANI</div>
      </div>
      <div className="n-right">
        <div className="n-list">
          {/* <ul style={{ listStyleType: "none" }}>
            <li>Home</li>
            <li>Services</li>
            <li>Experiences</li>
            <li>Portfolio</li>
            <li>Testimonials</li>
          </ul> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
