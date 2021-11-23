import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import { ReactComponent as CloseIcon } from "../../images/icon-close.svg";
import globalProductClasses from "../SingleProduct/GlobalProductStyles.module.scss";
import CartItem from "./CartItem/CartItem";

class Cart extends React.Component {
  render() {
    return (
      <Modal onHide={this.props.onHide}>
        <div className={classes.cart}>
          <span className={classes["cart__close"]} onClick={this.props.onHide}>
            <CloseIcon />
          </span>
          <h2 className="title--secondary text-center">My Cart</h2>
          <h4 className={globalProductClasses["product-info__title"]}>
            Cart Summary
          </h4>
          <div className={classes["cart__wrapper"]}>
            <CartItem />
            <CartItem />
          </div>
          <div className={classes["cart__data--wrapper"]}>
            <div className={classes["cart__total-amount"]}>
              <h3>
                Total: <span>19,333 LE</span>
              </h3>
            </div>
            <div className={classes["cart__actions"]}>
              <button className="btn btn--secondary">Review Cart</button>
              <button className="btn btn--primary">Complete Checkout</button>
            </div>
          </div>
        </div>
      </Modal>
    );
  }
}

export default Cart;
