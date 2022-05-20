import React from "react";
import "./css/header.css";

const Header = () => {
  return (
    <div className="header-wrap">
      <header>
        <h1>
          <button>
            <img src="" alt="hyundai" />
          </button>
        </h1>
        <nav>
          <ul className="left-nav">
            <li>
              <button>Connect wallet</button>
            </li>
            <li>
              <button>Creatives</button>
            </li>
            <li>
              <ul className="locale">
                <li>
                  <button>EN</button>
                </li>
                <li>
                  <button>KR</button>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="right-nav">
            <li>
              <button>
                <img src="" alt="discord" />
              </button>
            </li>
            <li>
              <button>
                <img src="" alt="twitter" />
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
