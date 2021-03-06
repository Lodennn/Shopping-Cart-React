import React from "react";
import classes from "./ProductMainImage.module.scss";
import productImage360 from "../../../../images/icon-360.svg";
import globalProductClasses from "../../GlobalProductStyles.module.scss";

class ProductMainImage extends React.Component {
  render() {
    return (
      <div className={classes["product-main-image"]}>
        <img
          src={this.props.productImage}
          alt="Product Main Img"
          className={`${classes["product-main-img"]} img-fluid`}
        />
        <div className={`${globalProductClasses["image-360"]}`}>
          <img src={productImage360} alt="360 Img" />
        </div>
      </div>
    );
  }
}

export default ProductMainImage;
