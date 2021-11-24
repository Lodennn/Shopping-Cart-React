import React from "react";
import classes from "./ProductQuantity.module.scss";
import { ReactComponent as PlusIcon } from "../../../../images/icon-plus.svg";
import { ReactComponent as MinusIcon } from "../../../../images/icon-minus.svg";

class ProductQuantity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      animate: false,
    };
  }
  render() {
    const animatedClass = this.state.animate ? `${classes["animate"]}` : ``;
    return (
      <div className={`${classes.quantity} flex-y-container`}>
        <button
          className={classes["quantity__controller"]}
          onClick={() => {
            this.setState({ animate: true });
            this.props.decreaseQuantity();
          }}
        >
          <MinusIcon className="small-mob-svg" />
        </button>
        <div
          className={`${classes["quantity__value"]} ${animatedClass}`}
          onAnimationEnd={() => this.setState({ animate: false })}
        >
          {this.props.productQuantity}
        </div>
        <button
          className={classes["quantity__controller"]}
          onClick={() => {
            this.setState({ animate: true });
            this.props.increaseQuantity();
          }}
        >
          <PlusIcon className="small-mob-svg" />
        </button>
      </div>
    );
  }
}

export default ProductQuantity;
