import React from "react";
import classes from "./ProductColor.module.scss";

class ProductColor extends React.Component {
  render() {
    return (
      <div className={`${classes.colors} flex-y-container`}>
        <div
          className={`${classes["colors__color"]} ${classes["colors__color--1"]} ${classes["colors__color--active"]}`}
        ></div>
        <div
          className={`${classes["colors__color"]} ${classes["colors__color--2"]}`}
        ></div>
      </div>
    );
  }
}

export default ProductColor;
