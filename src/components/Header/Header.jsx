import React from "react";
import images from "../../assets/images";
import "./css/header.css";

const Header = ({ setLangauge }) => {
  return (
    <header className="header-wrap">
      <h1>
        <button onClick={() => window.location.reload()}>
          <img src={images.logo} className="logo" alt="hyundai" />
        </button>
      </h1>
      <nav className="gnb">
        <ul className="nav">
          <li>
            <button
              onClick={() => window.open("https://metamask.io/download/")}
            >
              Connect wallet
            </button>
          </li>
          <li>
            <button
              onClick={() =>
                (window.location.href = "https://www.hyundai-nft.com/creatives")
              }
            >
              Creatives
            </button>
          </li>
        </ul>
        <ul className="locale">
          <li className="lang">
            <button
              className={sessionStorage.getItem("@lang") !== "en" ? "gray" : ""}
              onClick={() => setLangauge("en")}
            >
              EN
            </button>
          </li>
          <li className="lang">
            <button
              className={sessionStorage.getItem("@lang") !== "ko" ? "gray" : ""}
              onClick={() => setLangauge("ko")}
            >
              KR
            </button>
          </li>
        </ul>
        <ul className="sns">
          <li>
            <a href="https://discord.gg/hyundai-nft">
              <span className="discord blind_txt">discord</span>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/hyundai_nft">
              <span className="twitter blind_txt">twitter</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
