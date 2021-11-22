import React from "react";
import { Link } from "react-router-dom";
import classes from "./Breadcrumb.module.scss";

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className={classes.breadcrumb}>
        <div className="container">
          <ul className={`${classes["breadcrumb__links"]} flex-y-container`}>
            <li className={classes["breadcrumb__link"]}>
              <Link to="/">Men</Link>
            </li>
            <li className={classes["breadcrumb__link"]}>
              <Link to="/">Clothing</Link>
            </li>
            <li className={classes["breadcrumb__link"]}>
              <Link to="/">Tops</Link>
            </li>
            <li className={classes["breadcrumb__link"]}>
              <Link to="/">Adidas</Link>
            </li>
            <li
              className={`${classes["breadcrumb__link"]} ${classes["breadcrumb__link--active"]}`}
            >
              Adidas Black T-Shirt
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Breadcrumb;
