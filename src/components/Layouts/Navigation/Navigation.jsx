import React, { Fragment } from "react";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import MainNavigation from "./MainNavigation/MainNavigation";
import Uppernav from "./Uppernav/Uppernav";

class Navigation extends React.Component {
  render() {
    return (
      <Fragment>
        <Uppernav />
        <MainNavigation
          onShowCartModal={this.props.onShowCartModal}
          cartLength={this.props.cartLength}
        />
        <CategoryNavigation />
      </Fragment>
    );
  }
}

export default Navigation;
