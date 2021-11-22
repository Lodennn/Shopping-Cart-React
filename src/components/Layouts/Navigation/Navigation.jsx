import React, { Fragment } from "react";
import CategoryNavigation from "./CategoryNavigation/CategoryNavigation";
import MainNavigation from "./MainNavigation/MainNavigation";
import Uppernav from "./Uppernav/Uppernav";

class Navigation extends React.Component {
  render() {
    return (
      <Fragment>
        <Uppernav />
        <MainNavigation />
        <CategoryNavigation />
      </Fragment>
    );
  }
}

export default Navigation;
