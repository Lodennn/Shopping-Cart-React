import React from "react";
import classes from "./ProductItem.module.scss";
import globalProductClasses from "../../SingleProduct/GlobalProductStyles.module.scss";
import Logo from "../../UI/Logo/CategoryLogo";
import productImage360 from "../../../images/icon-360.svg";
import { ReactComponent as StarIcon } from "../../../images/icon-star.svg";
import { ReactComponent as StarFillIcon } from "../../../images/icon-star-fill.svg";
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
  render() {
    const productTitle =
      this.props.product.title.length <= 50
        ? this.props.product.title
        : `${this.props.product.title.substring(0, 50)}..`;

    return (
      <div className={classes["similar-product"]}>
        <div className={classes["similar-product__image"]}>
          <img
            src={this.props.product.image}
            alt="similar product img"
            className={`${classes["similar-product__img"]} img-fluid`}
          />
          <div className={`${globalProductClasses["image-360"]}`}>
            <img src={productImage360} alt="360 Img" />
          </div>
        </div>
        <Link to={`/products/${this.props.product.id}`}>
          <h2
            className={`${classes["similar-product__title"]} ${globalProductClasses["product-info__title"]}`}
          >
            {productTitle}
          </h2>
        </Link>
        <div className={classes["similar-product__data-wrapper"]}>
          <div className={classes["similar-product__price"]}>
            <p className={globalProductClasses["product-info__price"]}>
              {this.props.product.price}{" "}
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
                <del>{this.props.product.price} L.E</del>
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
          <div
            className={`${classes["similar-product__rate-value"]} ${globalProductClasses["product-info__rate-value"]}`}
          >
            <span>4.2</span> of 5
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
        {/* <div
          className={`${classes["similar-product__pickedup"]} flex-y-container`}
        >
          <div
            className={`${classes["similar-product__pickedup--wrapper"]} flex-y-container`}
          >
            <h4 className={classes["similar-product__pickup--label"]}>From:</h4>
            <p className={classes["similar-product__pickup--value"]}>UK</p>
          </div>
          <div
            className={`${classes["similar-product__pickedup--wrapper"]} flex-y-container`}
          >
            <h4 className={classes["similar-product__pickup--label"]}>To:</h4>
            <p className={classes["similar-product__pickup--value"]}>Egypt</p>
          </div>
          <div
            className={`${classes["similar-product__pickedup--wrapper"]} flex-y-container`}
          >
            <h4 className={classes["similar-product__pickup--label"]}>in:</h4>
            <p className={classes["similar-product__pickup--value"]}>10</p>
          </div>
        </div> */}
      </div>
    );
  }
}

export default ProductItem;
