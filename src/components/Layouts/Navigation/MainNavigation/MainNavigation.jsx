import React from "react";
import Logo from "../../../UI/Logo/CategoryLogo";
import Search from "../../../UI/Search/Search";
import { ReactComponent as CartIcon } from "../../../../images/icon-cart.svg";
import { ReactComponent as HeartIcon } from "../../../../images/icon-heart.svg";
import { ReactComponent as UserIcon } from "../../../../images/icon-user.svg";
import classes from "./MainNavigation.module.scss";

class MainNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showModal: false,
    };
  }

  render() {
    return (
      <div className={`${classes["main-navigation"]} container`}>
        {/** SEARCH */}
        <Search />

        {/** MAIN LOGO */}
        <div className={classes["main-navigation__category-logo"]}>
          <Logo type="main" />
        </div>

        {/** LINKS */}
        <ul className={`${classes["main-navigation__links"]} flex-y-container`}>
          <li
            className={`${classes["main-navigation__link"]}  flex-y-container`}
            onClick={this.props.onShowCartModal}
          >
            <span
              className={`${classes["main-navigation__link--icon"]} ${classes["main-navigation__cart-icon"]} icon`}
            >
              <CartIcon />
              <span className={classes["main-navigation__cart-icon--counter"]}>
                {this.props.cartLength}
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
        {/** CART COMPONENT */}
        {/* {this.state.showModal && (
          <Cart onHide={this.hideCartModal.bind(this)} />
        )} */}
        {/** CART COMPONENT */}
      </div>
    );
  }
}

export default MainNavigation;
