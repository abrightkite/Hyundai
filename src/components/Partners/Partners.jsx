import React from "react";
// import "./css/partners.css";

const Partners = () => {
  return (
    <section className="partners">
      <div className="partners-inner">
        <h2 className="tit2">Partners</h2>
        <div className="partners-content">
          <button
            className="innocean ir_pm"
            onClick={() => window.open("http://www.innocean.com/ww-ko/")}
          >
            innocean
          </button>
          <button
            className="witchwitch ir_pm"
            onClick={() => window.open("https://witchwitch.io/")}
          >
            witchwitch
          </button>
          <button
            className="lennon ir_pm"
            onClick={() => window.open("https://lennon.co.kr")}
          >
            lennon
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partners;
