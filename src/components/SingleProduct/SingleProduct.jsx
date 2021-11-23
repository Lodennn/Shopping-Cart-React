import React from "react";
import ProductImagesPreview from "./ProductImagesPreview/ProductImagesPreview";
import ProductInfo from "./ProductInfo/ProductInfo";
import classes from "./SingleProduct.module.scss";

class Product extends React.Component {
  render() {
    console.log("SingleProduct: ", this.props);
    return (
      <div className={`${classes["product"]} container`}>
        <ProductImagesPreview />
        <ProductInfo />
      </div>
    );
  }
}

export default Product;
