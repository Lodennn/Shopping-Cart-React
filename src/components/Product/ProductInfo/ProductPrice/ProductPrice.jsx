import React from "react";
import classes from "./ProductPrice.module.scss";

class ProductPrice extends React.Component {
  render() {
    return (
      <div className={`${classes["product-price"]} flex-y-container`}>
        <p className={classes["product-price__main"]}>
          9,999{" "}
          <span className={classes["product-price__main--currency"]}>L.E</span>
        </p>
        <p className={classes["product-price__old"]}>
          <del>9,999 L.E</del>
        </p>
        <p className={classes["product-price__discount"]}>30% Off</p>
      </div>
    );
  }
}

export default ProductPrice;
