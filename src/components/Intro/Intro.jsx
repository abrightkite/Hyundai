import React from "react";

const Intro = ({ introData }) => {
  return (
    <div className="intro-wrap">
      <div className="intro-inner">
        <h2>Into the Metamobility Universe</h2>
        <div>
          {introData &&
            Object.values(introData).map((item, index) => {
              return <p key={index}>{item.en_value}</p>;
            })}
        </div>
      </div>
      <div className="intro-background">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Intro;
