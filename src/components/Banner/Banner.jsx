import React from "react";
import "./css/banner.css";

const Banner = ({ subtitle }) => {
  return (
    <section className="banner-container">
      <div className="banner-inner">
        <h2>
          <div>Hyundai</div>
          <div>Metamobility</div>
          <div>Universe</div>
        </h2>
        <p>{subtitle.txt.en_value}</p>
      </div>
      <div className="scroll">
        <p>Scroll Down</p>
        <div class="mouseDown">
          <span></span>
        </div>
      </div>
    </section>
  );
};

export default Banner;
