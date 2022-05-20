import React from "react";
import Sale from "../Sale";

const preSaleData = {
  Saletxt1: {
    ko_value:
      "5월 9일, Metamobility universe 커뮤니티 활성화에 도움을 준\n화이트리스트 등록자 3,000명을 대상으로 Pre-sale이 진행될 예정입니다.",
    en_value:
      "On May 9th, 2022, a pre-sale will take place for 3,000 \n" +
      "registered whitelist members with the most active \n" +
      "engagement building up our Metamobility universe.\n" +
      "Please check our Discord for more details about the whitelist.",
    Mko_value:
      "5월 9일, Metamobility universe 커뮤니티 활성화에\n도움을 준 화이트리스트 등록자 3,000명을 대상으로\n" +
      "Pre-sale이 진행될 예정입니다. 화이트리스트에 대한\n" +
      "자세한 내용은 디스코드를 통해 확인하세요.\n",
    Men_value:
      "On May 9th, 2022, a pre-sale will take place for 3,000\nregistered whitelist members with the most active\nengagement building up our Metamobility universe.\n",
  },
  Saletxt2: {
    ko_value: "화이트리스트에 대한 자세한 내용은 디스코드를 통해 확인하세요.",
    en_value: "",
    Mko_value: "",
    Men_value:
      "Please check our Discord for more details about the whitelist.\n",
  },
  Soldtxt1: {
    ko_value:
      "별똥별 NFT 프리세일 물량 3,000개는 민트 완료되었습니다.\n" +
      "별똥별 NFT들은 5월 말에 첫번째 Metamobility NFT로 \n" +
      "자동 변환됩니다. \n",
    en_value:
      "The minting of all 3,000 pre-sale Shooting star NFTs is now\ncompleted.In late May, Shooting star NFTs will be automatically\nconverted into Metamobility NFTs.\n",
  },
  Soldtxt2: {
    ko_value: "",
    en_value: "",
  },
  quantity: {
    ko_value: "수량",
    en_value: "Quantity",
  },
  price: {
    ko_value: "가격",
    en_value: "Price",
  },
};

const SaleContainer = () => {
  return <Sale preSaleData={preSaleData} />;
};

export default SaleContainer;
