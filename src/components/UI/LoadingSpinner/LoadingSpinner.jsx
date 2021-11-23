import React from "react";
import classes from "./LoadingSpinner.module.scss";

class LoadingSpinner extends React.Component {
  render() {
    return (
      <div className={classes["lds-ring"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
}

export default LoadingSpinner;
