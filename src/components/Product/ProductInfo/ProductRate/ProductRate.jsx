import React from "react";
import classes from "./ProductRate.module.scss";
import { ReactComponent as StarIcon } from "../../../../images/icon-star.svg";
import { ReactComponent as StarFillIcon } from "../../../../images/icon-star-fill.svg";

class ProductRate extends React.Component {
  render() {
    return (
      <div className={`${classes["product-rate"]} flex-y-container`}>
        <ul className={classes["product-rate__stars"]}>
          <li className={classes["product-rate__stars--star"]}>
            <span className="icon">
              <StarFillIcon />
            </span>
          </li>
          <li className={classes["product-rate__stars--star"]}>
            <span className="icon">
              <StarFillIcon />
            </span>
          </li>
          <li className={classes["product-rate__stars--star"]}>
            <span className="icon">
              <StarFillIcon />
            </span>
          </li>
          <li className={classes["product-rate__stars--star"]}>
            <span className="icon">
              <StarFillIcon />
            </span>
          </li>
          <li
            className={`${classes["product-rate__stars--star"]} ${classes["product-rate__stars--star-active"]}`}
          >
            <span className="icon">
              <StarIcon />
            </span>
          </li>
        </ul>
        <div className={classes["product-rate__rate-value"]}>
          <span className={classes["product-rate__rate-value--val"]}>4.9</span>{" "}
          of 5
        </div>
        <div className={classes["product-rate__rate-counter"]}>22 Rates</div>
      </div>
    );
  }
}

export default ProductRate;
