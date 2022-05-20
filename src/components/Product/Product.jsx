import React from "react";

const Product = ({ productData }) => {
  return (
    <div className="product-wrap">
      <div className="product-content">
        <h2>Shooting star</h2>
        <div>
          {Object.values(productData).map((item, index) => {
            return <p key={index}>{item.en_value}</p>;
          })}
        </div>
      </div>
      <div className="product-background">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Product;
