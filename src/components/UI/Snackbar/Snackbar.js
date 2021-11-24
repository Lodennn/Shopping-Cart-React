import React from "react";
import ReactDOM from "react-dom";
import { FaCheck } from "react-icons/fa";
import classes from "./SnackBar.module.scss";

const SnackBarEl = (props) => {
  return (
    <div
      className={`${classes.snackbar} ${classes[`snackbar--${props.type}`]}`}
    >
      <div
        className={`${classes["snackbar__icon"]} ${
          classes[`snackbar__icon--${props.type}`]
        }`}
      >
        {props.type === "success" && <FaCheck />}
      </div>
      <p className={classes["snackbar__message"]}>{props.message}</p>
    </div>
  );
};
class SnackBar extends React.Component {
  render() {
    return ReactDOM.createPortal(
      <SnackBarEl type={this.props.type} message={this.props.message} />,
      document.getElementById("snackbar-overlay")
    );
  }
}
export default React.memo(SnackBar);
