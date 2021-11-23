import React from "react";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.scss";
import { ReactComponent as CloseIcon } from "../../images/icon-close.svg";
import globalProductClasses from "../SingleProduct/GlobalProductStyles.module.scss";
import CartItem from "./CartItem/CartItem";
import { isCartEmpty } from "../../helpers/cart";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
      totalAmount: 0,
    };
  }

  componentDidMount() {
    this.updateCart();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cart !== this.props.cart) {
      this.updateCart();
    }
  }

  updateCart() {
    const totalAmount = this.props.cart.reduce((acc, cur) => {
      return +cur.quantity * +cur.price + acc;
    }, 0);
    this.setState({ cart: this.props.cart, totalAmount: totalAmount });
  }

  render() {
    return (
      <Modal onHide={this.props.onHide}>
        <div className={classes.cart}>
          <span className={classes["cart__close"]} onClick={this.props.onHide}>
            <CloseIcon />
          </span>
          <h2 className="title--secondary text-center">My Cart</h2>
          <h4 className={globalProductClasses["product-info__title"]}>
            {isCartEmpty(this.state.cart) ? "Cart Is Empty" : "Cart Summary"}
          </h4>
          <div className={classes["cart__wrapper"]}>
            {!isCartEmpty(this.state.cart) &&
              this.state.cart.map((cartItem) => {
                return (
                  <CartItem
                    key={cartItem.id}
                    cartProduct={cartItem}
                    removeProductFromCart={this.props.removeProductFromCart}
                  />
                );
              })}
          </div>
          <div className={classes["cart__data--wrapper"]}>
            <div className={classes["cart__total-amount"]}>
              <h3>
                Total: <span>{this.state.totalAmount} LE</span>
              </h3>
            </div>
            {!isCartEmpty(this.state.cart) && (
              <div className={classes["cart__actions"]}>
                <button className="btn btn--primary">Review Cart</button>
                <button className="btn btn--secondary">
                  Complete Checkout
                </button>
              </div>
            )}
            {isCartEmpty(this.state.cart) && (
              <div
                className={classes["cart__actions"]}
                style={{ justifyContent: "center" }}
              >
                <button
                  className="btn btn--primary text-center"
                  onClick={this.props.onHide}
                >
                  Shop Now
                </button>
              </div>
            )}
          </div>
        </div>
      </Modal>
    );
  }
}

export default Cart;
