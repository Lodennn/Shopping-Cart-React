import React from "react";
import classes from "./ProductPrice.module.scss";
import globalProductClasses from "../../GlobalProductStyles.module.scss";

class ProductPrice extends React.Component {
  render() {
    return (
      <div className={`${classes["product-price"]} flex-y-container`}>
        <p className={globalProductClasses["product-info__price"]}>
          9,999{" "}
          <span
            className={globalProductClasses["product-info__price--currency"]}
          >
            L.E
          </span>
        </p>
        <p className={globalProductClasses["product-info__old-price"]}>
          <del>9,999 L.E</del>
        </p>
        <p className={globalProductClasses["product-info__discount"]}>
          30% Off
        </p>
      </div>
    );
  }
}

export default ProductPrice;
