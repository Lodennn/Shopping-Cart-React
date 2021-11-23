import React from "react";
import classes from "./CartItem.module.scss";
import globalProductClasses from "../../SingleProduct/GlobalProductStyles.module.scss";

class CartItem extends React.Component {
  render() {
    return (
      <div className={`${classes["cart-item"]} flex-y-container`}>
        <div className={classes["cart-item__image"]}>
          <img
            src={this.props.cartProduct.image}
            alt="cart img"
            className="img-fluid"
          />
        </div>
        <div className={classes["cart-item__data"]}>
          <h2
            className={`${globalProductClasses["product-info__title"]} ${classes["cart-item__data--title"]}`}
          >
            {this.props.cartProduct.title}
          </h2>
          <div
            className={`${classes["cart-item__data--quantity"]} flex-y-container`}
          >
            <span className={classes["cart-item__data--quantity--label"]}>
              Quantity
            </span>
            <span className={classes["cart-item__data--quantity--value"]}>
              {this.props.cartProduct.quantity}
            </span>
          </div>
          <div
            className={`${classes["cart-item__data--wrapper"]} flex-y-container`}
          >
            <p
              className={`${globalProductClasses["product-info__price"]} ${classes["cart-item__data--price"]}`}
            >
              {this.props.cartProduct.price}{" "}
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
              onClick={() =>
                this.props.removeProductFromCart(this.props.cartProduct)
              }
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
