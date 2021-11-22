import React from "react";
import classes from "./CategoryNavigation.module.scss";

class CategoryNavigation extends React.Component {
  render() {
    return (
      <div className={classes["category-navigation"]}>
        <ul
          className={`${classes["category-navigation__links"]} flex-y-container container`}
        >
          <li className={classes["category-navigation__link"]}>Men</li>
          <li className={classes["category-navigation__link"]}>Women</li>
          <li className={classes["category-navigation__link"]}>Unisex</li>
          <li className={classes["category-navigation__link"]}>Kids</li>
          <li className={classes["category-navigation__link"]}>Best Sellers</li>
          <li className={classes["category-navigation__link"]}>New Arrivals</li>
          <li
            className={`${classes["category-navigation__link"]} ${classes["category-navigation__link--offers"]}`}
          >
            Offers
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryNavigation;
