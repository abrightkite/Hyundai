import React from "react";
import AdvertisementContainer from "../Advertisement/containers/AdvertisementContainer";
import BannerContainer from "../Banner/containers/BannerContainer";
import FaqContainer from "../Faq/containers/FaqContainer";
import HeaderContainer from "../Header/containers/HeaderContainer";
import IntroContainer from "../Intro/containers/IntroContainer";
import PartnersContainer from "../Partners/containers/PartnersContainer";
import ProductContainer from "../Product/containers/ProductContainer";
import RoadMapContainer from "../RoadMap/containers/RoadMapContainer";
import SaleContainer from "../Sale/containers/SaleContainer";
// import "./css/main.css";

const Main = () => {
  return (
    <div className="main-wrap">
      <div className="banner-wrap">
        <HeaderContainer />
        <BannerContainer />
      </div>
      <IntroContainer />
      <ProductContainer />
      <AdvertisementContainer />
      <SaleContainer />
      <RoadMapContainer />
      <PartnersContainer />
      <FaqContainer />
    </div>
  );
};

export default Main;
