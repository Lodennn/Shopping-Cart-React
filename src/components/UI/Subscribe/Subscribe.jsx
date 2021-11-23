import React from "react";
import classes from "./Subscribe.module.scss";
import { ReactComponent as SubmitIcon } from "../../../images/icon-submit.svg";

class Subscribe extends React.Component {
  render() {
    return (
      <div className={classes["subscribe"]}>
        <h2 className={classes["subscribe__title"]}>
          Subscribe to our newsletter
        </h2>
        <form className={classes["subscribe__form"]}>
          <div className="form-control">
            <input
              type="text"
              className={classes["subscribe__input"]}
              placeholder="Enter Your Mail"
            />
            <button type="submit" className={classes["subscribe__submit"]}>
              <span className={classes["subscribe__submit--text"]}>
                Subscribe
              </span>
              <span className={classes["subscribe__submit--icon"]}>
                <SubmitIcon />
              </span>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Subscribe;
