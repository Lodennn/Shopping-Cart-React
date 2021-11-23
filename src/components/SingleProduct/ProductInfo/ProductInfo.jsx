import React from "react";
import Logo from "../../UI/Logo/CategoryLogo";
import classes from "./ProductInfo.module.scss";
import ProductRate from "./ProductRate/ProductRate";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductSize from "./ProductSize/ProductSize";
import ProductColor from "./ProductColor/ProductColor";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import globalProductClasses from "../GlobalProductStyles.module.scss";

class ProductInfo extends React.Component {
  render() {
    const { id, title, price } = this.props.singleProduct;
    return (
      <div className={classes["product-info"]}>
        <div className="product-info--wrapper">
          <Logo type="small" />
          <h2 className={globalProductClasses["product-info__title"]}>
            {title}
          </h2>
          <p className={classes["product-info__category"]}>Men</p>
          {/** PRODUCT RATE */}
          <ProductRate />
          {/** PRODUCT PRICE */}
          <ProductPrice productPrice={price} />
        </div>
        <hr className="separator separator--light" />
        {/** PRODUCT SIZE */}
        <h2 className={globalProductClasses["product-info__title"]}>Size</h2>
        <ProductSize />
        <hr className="separator separator--light" />
        {/** PRODUCT COLOR */}
        <h2 className={globalProductClasses["product-info__title"]}>Color</h2>
        <ProductColor />
        <hr className="separator separator--light" />
        {/** PRODUCT QUANTITY */}
        <h2 className={globalProductClasses["product-info__title"]}>
          Quantity
        </h2>
        <ProductQuantity product={this.props.singleProduct} />
        {/** PRODUCT CTAs */}
        <div className={classes["product-info__ctas"]}>
          <button className="btn btn--secondary">Add To Cart</button>
          <button className="btn btn--primary">Pickup From Store</button>
        </div>
      </div>
    );
  }
}

export default ProductInfo;
