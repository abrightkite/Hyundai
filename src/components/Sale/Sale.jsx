import React from "react";

const Sale = ({ preSaleData }) => {
  return (
    <div className="sale-wrap">
      <div className="sale-left">
        <div className="sale-inner">
          <h2>Pre-sale</h2>
          <p>Sold dut</p>
          <div className="sale-content">{preSaleData.Soldtxt1.en_value}</div>
          <div className="sale-button-container">
            <button>Contract address</button>
            <button>OPENSEA</button>
          </div>
        </div>
      </div>
      <div className="sale-right">
        <p>General sale</p>
        <div className="sale-content">{preSaleData.Saletxt1.en_value}</div>
        <div className="sale-info-content">
          <div>
            <span>{preSaleData.quantity.en_value}</span>
            <span>6,500</span>
          </div>
          <div>
            <span>{preSaleData.price.en_value}</span>
            <span>0.15ETH</span>
          </div>
        </div>
        <div className="sale-button-container">
          <button>Mint now</button>
        </div>
      </div>
    </div>
  );
};

export default Sale;
