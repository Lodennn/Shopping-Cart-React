import React from "react";
import classes from "./ProductQuantity.module.scss";
import { ReactComponent as PlusIcon } from "../../../../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../../../images/icon-minus.svg";

class ProductQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
  }
  addProductToCart() {
    console.log(this.props.product);
  }
  render() {
    return (
      <div className={`${classes.quantity} flex-y-container`}>
        <button className={classes["quantity__controller"]}>
          <MinusIcon />
        </button>
        <div className={classes["quantity__value"]}>1</div>
        <button
          className={classes["quantity__controller"]}
          onClick={this.addProductToCart}
        >
          <PlusIcon />
        </button>
      </div>
    );
  }
}

export default ProductQuantity;
