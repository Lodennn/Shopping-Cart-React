import React from "react";
import classes from "./CartItem.module.scss";
import globalProductClasses from "../../SingleProduct/GlobalProductStyles.module.scss";
import cartItemImage from "../../../images/product-main-image.png";

class CartItem extends React.Component {
  render() {
    return (
      <div className={`${classes["cart-item"]} flex-y-container`}>
        <div className={classes["cart-item__image"]}>
          <img src={cartItemImage} alt="cart img" className="img-fluid" />
        </div>
        <div className={classes["cart-item__data"]}>
          <h2
            className={`${globalProductClasses["product-info__title"]} ${classes["cart-item__data--title"]}`}
          >
            Lorem ipsum dolor sit amet, consecte adipiscing elit.
          </h2>
          <div
            className={`${classes["cart-item__data--quantity"]} flex-y-container`}
          >
            <span className={classes["cart-item__data--quantity--label"]}>
              Quantity
            </span>
            <span className={classes["cart-item__data--quantity--value"]}>
              1
            </span>
          </div>
          <div
            className={`${classes["cart-item__data--wrapper"]} flex-y-container`}
          >
            <p
              className={`${globalProductClasses["product-info__price"]} ${classes["cart-item__data--price"]}`}
            >
              9,999{" "}
              <span
                className={
                  globalProductClasses["product-info__price--currency"]
                }
              >
                L.E
              </span>
            </p>
            <button
              className={`${classes["cart-item__btn-remove"]} btn btn--primary`}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CartItem;
