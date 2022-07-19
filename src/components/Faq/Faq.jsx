import React from "react";
// import "./css/faq.css";

const Faq = ({ faqData }) => {
  return (
    <section className="faq">
      <div className="faq-inner">
        <h2 className="tit2">FAQ</h2>
        <div className="faq-content">
          {faqData.map((data, key) => {
            return (
              <details key={key}>
                <summary className="question">{data.title.en_value}</summary>
                <div className="answers">
                  <div className="item">
                    <p>{data.content1.en_value}</p>
                  </div>
                  <div className="item">
                    <p>{data.content2.en_value}</p>
                  </div>
                  <div className="item">
                    <p>{data.content3.en_value}</p>
                  </div>
                </div>
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Faq;
