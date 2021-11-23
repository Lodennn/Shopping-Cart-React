import React from "react";
import classes from "./ProductQuantity.module.scss";
import { ReactComponent as PlusIcon } from "../../../../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../../../images/icon-minus.svg";

class ProductQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.state = {
      quantity: 1,
    };
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.quantity !== this.state.quantity) {
      this.props.getProductQuantity(this.state.quantity);
    }
  }
  increaseQuantity() {
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity + 1,
      };
    });
  }
  decreaseQuantity() {
    if (this.state.quantity === 1) return 1;
    this.setState((prevState) => {
      return {
        quantity: prevState.quantity - 1,
      };
    });
  }
  render() {
    return (
      <div className={`${classes.quantity} flex-y-container`}>
        <button
          className={classes["quantity__controller"]}
          onClick={this.decreaseQuantity}
        >
          <MinusIcon />
        </button>
        <div className={classes["quantity__value"]}>{this.state.quantity}</div>
        <button
          className={classes["quantity__controller"]}
          onClick={this.increaseQuantity}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
}

export default ProductQuantity;
