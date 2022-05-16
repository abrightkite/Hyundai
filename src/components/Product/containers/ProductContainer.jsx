import React from "react";
import Product from "../Product";

const productData = {
  txt1: {
    ko_value:
      "어느날 무한한 에너지를 가진 별똥별 1만개가\n지구에 떨어지게 됩니다.",
    en_value:
      "One night, 10,000 shooting stars suddenly fell on Earth, \n" +
      "bursting with infinite energy.\n",
    Mko_value:
      "어느날 무한한 에너지를 가진 별똥별 1만개가\n지구에 떨어지게 됩니다.",
    Men_value:
      "One night, 10,000 shooting stars suddenly fell on Earth, bursting with infinite energy.\n",
  },
  txt2: {
    ko_value:
      "시공간을 넘어 우리에게 다가온 이 별똥별들은 어떤 모험을 하게 될까요?\n그리고 별똥별들을 품게 된 지구는 어떤 새로운 세상을 보여줄 수 있을까요?",
    en_value:
      "Transcending time and space, on what exciting\nadventure will these shooting stars take us?\nAnd what amazing new world will Earth show us\nwith these shooting stars?",
    Mko_value:
      "시공간을 넘어 우리에게 다가온 이 별똥별들은 어떤 모험을 하게 될까요?\n그리고 별똥별들을 품게 된 지구는 어떤 새로운 세상을 보여줄 수 있을까요?",
    Men_value:
      "Transcending time and space, on what exciting\nadventure will these shooting stars take us?\nAnd what amazing new world will Earth show us with these shooting stars?",
  },
  txt3: {
    ko_value:
      "5월 9일, Hyundai Metamobility universe는\n무한한 가능성을 담고 있는 별똥별 NFT로 시작됩니다.",
    en_value:
      "May 9th, 2022.\nHyundai Metamobility universe comes to life with \nShooting star NFTs - full of infinite possibility.",
    Mko_value:
      "5월 9일, Hyundai Metamobility universe는 무한한 가능성을 담고 있는 별똥별 NFT로 시작됩니다.",
    Men_value:
      "May 9th, 2022.\nHyundai Metamobility universe comes to life with Shooting star NFTs - full of infinite possibility.",
  },
};

const ProductContainer = () => {
  return <Product productData={productData} />;
};

export default ProductContainer;
