import React from "react";
import AdvertisementContainer from "../Advertisement/containers/AdvertisementContainer";
import BannerContainer from "../Banner/containers/BannerContainer";
import HeaderContainer from "../Header/containers/HeaderContainer";
import IntroContainer from "../Intro/containers/IntroContainer";
import ProductContainer from "../Product/containers/ProductContainer";
import SaleContainer from "../Sale/containers/SaleContainer";

const Main = () => {
  return (
    <div className="main-wrap">
      <div style={{ backgroundColor: "#ddd" }}>
        <HeaderContainer />
        <BannerContainer />
      </div>
      <IntroContainer />
      <ProductContainer />
      <AdvertisementContainer />
      <SaleContainer />
    </div>
  );
};

export default Main;
