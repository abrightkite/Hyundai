import React from "react";
import { productData } from "../../../locale/localeData";
import Product from "../Product";

const ProductContainer = () => {
  return <Product productData={productData} />;
};

export default ProductContainer;
