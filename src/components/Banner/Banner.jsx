import React from "react";

const Banner = ({ subtitle }) => {
  return (
    <div className="banner-wrap">
      <div className="banner-inner">
        <h2>
          <div>Hyundai</div>
          <div>Metamobility</div>
          <div>Universe</div>
        </h2>
        <p>{subtitle.txt.en_value}</p>
      </div>
    </div>
  );
};

export default Banner;
