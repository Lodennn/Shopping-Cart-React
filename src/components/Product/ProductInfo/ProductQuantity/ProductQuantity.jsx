import React from "react";
import classes from "./ProductQuantity.module.scss";
import { ReactComponent as PlusIcon } from "../../../../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../../../images/icon-minus.svg";

class ProductQuantity extends React.Component {
  render() {
    return (
      <div className={`${classes.quantity} flex-y-container`}>
        <button className={classes["quantity__controller"]}>
          <MinusIcon />
        </button>
        <div className={classes["quantity__value"]}>1</div>
        <button className={classes["quantity__controller"]}>
          <PlusIcon />
        </button>
      </div>
    );
  }
}

export default ProductQuantity;
