import React from "react";
// import "./css/banner.css";

const subtitle = {
  txt: {
    ko_value: "무한한 이동의 자유가 펼쳐질 새로운 세상",
    en_value: "A new world with infinite freedom of mobility",
  },
};

const Banner = () => {
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
