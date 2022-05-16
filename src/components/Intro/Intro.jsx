import React from "react";

const Intro = ({ introData }) => {
  return (
    <div className="intro-wrap">
      <div className="intro-inner">
        <h2>Into the Metamobility Universe</h2>
        <div>
          <p>{introData.txt1.en_value}</p>
          <p>{introData.txt2.en_value}</p>
          <p>{introData.txt3.en_value}</p>
        </div>
      </div>
      <div className="intro-background">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Intro;
