import React from "react";
import Intro from "../Intro";

const introData = {
  txt1: {
    ko_value:
      "상상 가능 이동의 범위는 어디까지일까요?\n우리가 이야기하는 Metamobility는 이동의 영역이\n무한하게 확장될 수 있는 가능성을 의미합니다.",
    en_value:
      "Have you imagined how far mobility can go?\nTo us, Metamobility means the infinite \npossibility of human reach.\n",
    Mko_value:
      "상상 가능한 이동의 범위는 어디까지일까요?\n우리가 이야기하는 Metamobility는 이동의 영역이 무한하게 확장될 수 있는 가능성을 의미합니다.",
    Men_value:
      "Have you imagined how far mobility can go?\nTo us, Metamobility means the infinite \npossibility of human reach.\n",
  },
  txt2: {
    ko_value:
      "이곳에서는 현재에서 미래로 이동해도 좋습니다.\n갑자기 지구 반대편으로 이동해도 좋습니다.\n가상과 현실의 경계가 사라지고\n과거이면서 현재, 그리고 미래일 수도 있는\n시공간의 경계가 확장된 새로운 세상.\nMetamobility universe에서 현대 Metamobility NFT들은\n당신과 함께할 탐험을 기다리고 있습니다.",
    en_value:
      "Here, you can freely move\nfrom the present to the future.\nFrom any place in the world\nto someplace else in a blink of an eye.\n\nNo more borders between imagination and\nreality, or the past, the present, and the future.\nIn this new Metamobility universe,\nwhere time and space is limitless,\nHyundai’s Metamobility NFTs will take you\non an exciting adventure.",
    Mko_value:
      "이곳에서는 현재에서 미래로 이동해도 좋습니다.\n갑자기 지구 반대편으로 이동해도 좋습니다.\n가상과 현실의 경계가 사라지고\n과거이면서 현재, 그리고 미래일 수도 있는\n시공간의 경계가 확장된 새로운 세상.\nMetamobility universe에서 현대 Metamobility NFT들은 당신과 함께할 탐험을 기다리고 있습니다.",
    Men_value:
      "Here, you can freely move from the\npresent to the future.\nFrom any place in the world\nto someplace else in a blink of an eye.\n\nNo more borders between imagination and\nreality, or the past, the present, and the future.\nIn this new Metamobility universe,\nwhere time and space is limitless,\nHyundai’s Metamobility NFTs will take you\non an exciting adventure.",
  },
  txt3: {
    ko_value:
      "5월 9일, Hyundai Metamobility universe는\n무한한 가능성을 담고 있는 별똥별 NFT로 시작됩니다.",
    en_value:
      "Come discover Hyundai’s Metamobility NFT,\ntranscending time and space.\n",
    Mko_value:
      "5월 9일, Hyundai Metamobility universe는 무한한 가능성을 담고 있는 별똥별 NFT로 시작됩니다.",
    Men_value:
      "Come discover Hyundai’s Metamobility NFT,\ntranscending time and space.\n",
  },
};

const IntroContainer = () => {
  return <Intro introData={introData} />;
};

export default IntroContainer;
