import React from "react";
import classes from "./ProductItem.module.scss";
import globalProductClasses from "../../SingleProduct/GlobalProductStyles.module.scss";
import Logo from "../../UI/Logo/CategoryLogo";
import productImage360 from "../../../images/icon-360.svg";
import { ReactComponent as StarIcon } from "../../../images/icon-star.svg";
import { ReactComponent as StarFillIcon } from "../../../images/icon-star-fill.svg";

class ProductItem extends React.Component {
  render() {
    return (
      <div className={classes["similar-product"]}>
        <div className={classes["similar-product__image"]}>
          <div className={`${globalProductClasses["image-360"]}`}>
            <img src={productImage360} alt="360 Img" />
          </div>
        </div>
        <h2 className={globalProductClasses["product-info__title"]}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        </h2>
        <div className={classes["similar-product__data-wrapper"]}>
          <div className={classes["similar-product__price"]}>
            <p className={globalProductClasses["product-info__price"]}>
              9,999{" "}
              <span
                className={
                  globalProductClasses["product-info__price--currency"]
                }
              >
                L.E
              </span>
            </p>
            <div
              className={`${classes["similar-product__price--old"]} flex-y-container`}
            >
              <p className={globalProductClasses["product-info__old-price"]}>
                <del>9,999 L.E</del>
              </p>
              <p className={globalProductClasses["product-info__discount"]}>
                50%
              </p>
            </div>
          </div>
          <div className={classes["similar-product__category-logo"]}>
            <Logo type="small" />
          </div>
        </div>
        <div
          className={`${classes["similar-product__product-rate"]} flex-y-container`}
        >
          <ul className={globalProductClasses["product-info__stars"]}>
            <li className={globalProductClasses["product-info__stars--star"]}>
              <span className="icon">
                <StarFillIcon />
              </span>
            </li>
            <li className={globalProductClasses["product-info__stars--star"]}>
              <span className="icon">
                <StarFillIcon />
              </span>
            </li>
            <li className={globalProductClasses["product-info__stars--star"]}>
              <span className="icon">
                <StarFillIcon />
              </span>
            </li>
            <li className={globalProductClasses["product-info__stars--star"]}>
              <span className="icon">
                <StarFillIcon />
              </span>
            </li>
            <li
              className={`${globalProductClasses["product-info__stars--star"]} ${globalProductClasses["product-info__stars--star-active"]}`}
            >
              <span className="icon">
                <StarIcon />
              </span>
            </li>
          </ul>
          <div className={globalProductClasses["product-info__rate-value"]}>
            <span className={classes["product-rate__rate-value--val"]}>
              4.9
            </span>{" "}
            of 5
          </div>
        </div>
        <div
          className={`${classes["similar-product__pickup"]} flex-y-container`}
        >
          <h4 className={classes["similar-product__pickup--label"]}>
            Pickup From:
          </h4>
          <p className={classes["similar-product__pickup--value"]}>
            Genena Mall
          </p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
