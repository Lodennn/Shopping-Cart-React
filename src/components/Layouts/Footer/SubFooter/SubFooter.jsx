import React from "react";
import classes from "./SubFooter.module.scss";
import visaImage from "../../../../images/visa.png";
import masterCardImage from "../../../../images/master-card.png";
import cashImage from "../../../../images/cash-delivery.png";
import NasNavLogo from "../../../../images/FIX_IMAGES/nasnav-logo.png";

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
        <div className={`${classes["sub-footer__poweredby"]} flex-y-container`}>
          <span className={classes["sub-footer__powereby--text"]}>
            Powered By
          </span>
          <span className={classes["sub-footer__powereby--img"]}>
            <img
              src={NasNavLogo}
              alt="Nasnav Logo"
              className="img-fluid fix-icon"
            />
          </span>
        </div>
      </div>
    );
  }
}

export default SubFooter;
