import React from "react";
import Banner from "../Banner";

const subtitle = {
  txt: {
    ko_value: "무한한 이동의 자유가 펼쳐질 새로운 세상",
    en_value: "A new world with infinite freedom of mobility",
  },
};

const BannerContainer = () => {
  return <Banner subtitle={subtitle} />;
};

export default BannerContainer;
