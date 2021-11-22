import React from "react";
import Logo from "../../../UI/Logo/CategoryLogo";
import Search from "../../../UI/Search/Search";
import { ReactComponent as CartIcon } from "../../../../images/icon-cart.svg";
import { ReactComponent as HeartIcon } from "../../../../images/icon-heart.svg";
import { ReactComponent as UserIcon } from "../../../../images/icon-user.svg";
import classes from "./MainNavigation.module.scss";

class MainNavigation extends React.Component {
  render() {
    return (
      <div className={`${classes["main-navigation"]} container`}>
        {/** SEARCH */}
        <Search />

        {/** MAIN LOGO */}
        <Logo type="main" />

        {/** LINKS */}
        <ul className={`${classes["main-navigation__links"]} flex-y-container`}>
          <li
            className={`${classes["main-navigation__link"]}  flex-y-container`}
          >
            <span
              className={`${classes["main-navigation__link--icon"]} ${classes["main-navigation__cart-icon"]} icon`}
            >
              <CartIcon />
              <span className={classes["main-navigation__cart-icon--counter"]}>
                0
              </span>
            </span>
            <span className={classes["main-navigation__link--text"]}>Cart</span>
          </li>
          <li
            className={`${classes["main-navigation__link"]} flex-y-container`}
          >
            <span
              className={`${classes["main-navigation__link--icon"]} icon fix-icon`}
            >
              <HeartIcon />
            </span>
            <span className={classes["main-navigation__link--text"]}>
              Wishlist
            </span>
          </li>
          <li
            className={`${classes["main-navigation__link"]} flex-y-container`}
          >
            <span className={`${classes["main-navigation__link--icon"]} icon`}>
              <UserIcon />
            </span>
            <span className={classes["main-navigation__link--text"]}>
              Login
            </span>
          </li>
        </ul>
      </div>
    );
  }
}

export default MainNavigation;
