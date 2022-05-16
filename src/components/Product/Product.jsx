import React from "react";

const Product = ({ productData }) => {
  return (
    <div className="product-wrap">
      <div className="product-content">
        <h2>Shooting star</h2>
        <div>
          <p>{productData.txt1.en_value}</p>
          <p>{productData.txt2.en_value}</p>
          <p>{productData.txt3.en_value}</p>
        </div>
      </div>
      <div className="product-background">
        <img src="" alt="" />
      </div>
    </div>
  );
};

export default Product;
