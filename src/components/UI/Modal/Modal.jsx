import React, { Fragment } from "react";
import classes from "./Modal.module.scss";
import ReactDOM from "react-dom";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
  render() {
    return (
      <Fragment>
        <Backdrop onHide={this.props.onHide} />
        {ReactDOM.createPortal(
          <div className={classes.modal}>{this.props.children}</div>,
          document.getElementById("cart-modal")
        )}
      </Fragment>
    );
  }
}

export default Modal;
