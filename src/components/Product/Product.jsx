import React from "react";
import classes from "./Product.module.scss";
import ProductImagesPreview from "./ProductImagesPreview/ProductImagesPreview";
import ProductInfo from "./ProductInfo/ProductInfo";

class Product extends React.Component {
  render() {
    return (
      <div className={`${classes["product"]} container`}>
        <ProductImagesPreview />
        <ProductInfo />
      </div>
    );
  }
}

export default Product;
