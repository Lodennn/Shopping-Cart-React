import React from "react";
import classes from "./Backdrop.module.scss";
import ReactDOM from "react-dom";

const BackdropEl = (props) => {
  return <div className={classes.backdrop} onClick={props.onHide}></div>;
};

class Backdrop extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <BackdropEl onHide={this.props.onHide} />,
      document.getElementById("backdrop")
    );
  }
}

export default Backdrop;
