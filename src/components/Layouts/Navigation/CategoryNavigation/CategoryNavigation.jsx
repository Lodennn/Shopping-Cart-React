import React from "react";
import { Link } from "react-router-dom";
import classes from "./CategoryNavigation.module.scss";

class CategoryNavigation extends React.Component {
  render() {
    return (
      <div className={classes["category-navigation"]}>
        <ul
          className={`${classes["category-navigation__links"]} flex-y-container container`}
        >
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              Men
            </Link>
          </li>
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              Women
            </Link>
          </li>
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              Unisex
            </Link>
          </li>
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              Kids
            </Link>
          </li>
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              Best Sellers
            </Link>
          </li>
          <li className={classes["category-navigation__item"]}>
            <Link to="/" className={classes["category-navigation__link"]}>
              New Arrivals
            </Link>
          </li>
          <li
            className={`${classes["category-navigation__item"]} ${classes["category-navigation__item--offers"]}`}
          >
            <Link to="/" className={classes["category-navigation__link"]}>
              Offers
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default CategoryNavigation;
