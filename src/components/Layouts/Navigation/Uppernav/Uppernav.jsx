import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as BurgerIcon } from "../../../../images/icon-burger.svg";
import { ReactComponent as OfferLeftArrow } from "../../../../images/icon-chevron-left-small.svg";
import { ReactComponent as OfferRightArrow } from "../../../../images/icon-chevron-right-small.svg";
import { ReactComponent as PhoneIcon } from "../../../../images/icon-phone.svg";
import { ReactComponent as ShoppingCartIcon } from "../../../../images/icon-shopping-cart.svg";
import { ReactComponent as LocationIcon } from "../../../../images/icon-location.svg";
import classes from "./Uppernav.module.scss";
import MainLogo from "../../../UI/Logo/MainLogo";

class Uppernav extends React.Component {
  render() {
    return (
      <div className={`${classes.uppernav}`}>
        {/** MOB OFFER BAR */}
        {/** OFFER */}
        <div
          className={`${classes["uppernav__offer"]} ${classes["uppernav__offer--mob"]}`}
        >
          <span className={`fix-icon`}>
            <OfferLeftArrow className="small-mob-svg" />
          </span>
          <p className={classes["uppernav__offer--text"]}>
            Valentine’s Day Offers! Buy Two Get One Free Shop Now{" "}
            <Link to="/" className={classes["uppernav__offer--shop"]}>
              Shop Now
            </Link>
          </p>
          <span className={`fix-icon`}>
            <OfferRightArrow className="small-mob-svg" />
          </span>
        </div>
        {/** MOB OFFER BAR */}
        <div
          className={`${classes["uppernav__container"]} container flex-y-container`}
        >
          {/** LOGO */}
          <div className={classes["uppernav__logo"]}>
            <span className={`${classes["uppernav__logo--burger"]} icon`}>
              <BurgerIcon className="small-mob-svg" />
            </span>
            <span className={`${classes["uppernav__logo--main"]} icon`}>
              <MainLogo type="main" />
            </span>
          </div>
          {/** OFFER */}
          <div className={`${classes["uppernav__offer"]} hidden-md`}>
            <span className={`fix-icon`}>
              <OfferLeftArrow className="small-mob-svg" />
            </span>
            <p className={classes["uppernav__offer--text"]}>
              Valentine’s Day Offers! Buy Two Get One Free Shop Now{" "}
              <Link to="/" className={classes["uppernav__offer--shop"]}>
                Shop Now
              </Link>
            </p>
            <span className={`fix-icon`}>
              <OfferRightArrow className="small-mob-svg" />
            </span>
          </div>
          {/** LINKS */}
          <ul className={classes["uppernav__links"]}>
            <li className={classes["uppernav__item"]}>
              <Link to="/" className={classes["uppernav__link"]}>
                <span
                  className={`${classes["uppernav__link--icon"]} icon fix-icon`}
                >
                  <PhoneIcon className="small-mob-svg" />
                </span>
                <span className={classes["uppernav__link--text"]}>
                  Contact Us
                </span>
              </Link>
            </li>
            <li className={classes["uppernav__item"]}>
              <Link to="/" className={classes["uppernav__link"]}>
                <span className={`${classes["uppernav__link--icon"]} icon`}>
                  <ShoppingCartIcon className="small-mob-svg" />
                </span>
                <span className={classes["uppernav__link--text"]}>
                  Track Order
                </span>
              </Link>
            </li>
            <li className={classes["uppernav__item"]}>
              <Link to="/" className={classes["uppernav__link"]}>
                <span
                  className={`${classes["uppernav__link--icon"]} icon fix-icon`}
                >
                  <LocationIcon className="small-mob-svg" />
                </span>
                <span className={classes["uppernav__link--text"]}>
                  Find A Store
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Uppernav;
