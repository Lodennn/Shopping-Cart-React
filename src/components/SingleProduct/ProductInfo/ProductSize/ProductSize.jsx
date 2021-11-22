import React from "react";
import classes from "./ProductSize.module.scss";

class ProductSize extends React.Component {
  render() {
    return (
      <div className="product-info--wrapper">
        <ul className={`${classes.sizes} flex-y-container`}>
          <li
            className={`${classes["sizes__size"]} ${classes["sizes__size--active"]}`}
          >
            Small
          </li>
          <li className={classes["sizes__size"]}>Medium</li>
          <li className={classes["sizes__size"]}>Large</li>
          <li className={classes["sizes__size"]}>X-Large</li>
          <li className={classes["sizes__size"]}>XX-Large</li>
        </ul>
      </div>
    );
  }
}

export default ProductSize;
