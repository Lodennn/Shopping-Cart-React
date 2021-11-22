import React from "react";
import classes from "./SubFooter.module.scss";
import visaImage from "../../../../images/visa.png";
import masterCardImage from "../../../../images/master-card.png";
import cashImage from "../../../../images/cash-delivery.png";
import { ReactComponent as NasNavLogo } from "../../../../images/logo-nasnav.svg";

class SubFooter extends React.Component {
  render() {
    return (
      <div className={`${classes["sub-footer"]} flex-y-container`}>
        <p className="copyright">&copy; 2021 yeshtery, all rights reserved.</p>
        <ul className={classes["sub-footer__payments"]}>
          <li className={classes["sub-footer__payment"]}>
            <img
              src={cashImage}
              alt="Payment 1 Img"
              className={`${classes["sub-footer__payment--img"]} img-fluid`}
            />
          </li>
          <li className={classes["sub-footer__payment"]}>
            <img
              src={visaImage}
              alt="Payment 2 Img"
              className={`${classes["sub-footer__payment--img"]} img-fluid`}
            />
          </li>
          <li className={classes["sub-footer__payment"]}>
            <img
              src={masterCardImage}
              alt="Payment 3 Img"
              className={`${classes["sub-footer__payment--img"]} img-fluid`}
            />
          </li>
        </ul>
        <div className={classes["sub-footer__poweredby"]}>
          <span className={classes["sub-footer__powereby--text"]}>
            Powered By
          </span>
          <span className={classes["sub-footer__powereby--img"]}>
            <NasNavLogo />
          </span>
        </div>
      </div>
    );
  }
}

export default SubFooter;
