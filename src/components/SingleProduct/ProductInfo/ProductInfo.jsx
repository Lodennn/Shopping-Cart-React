import React from "react";
import Logo from "../../UI/Logo/CategoryLogo";
import classes from "./ProductInfo.module.scss";
import ProductRate from "./ProductRate/ProductRate";
import ProductPrice from "./ProductPrice/ProductPrice";
import ProductSize from "./ProductSize/ProductSize";
import ProductColor from "./ProductColor/ProductColor";
import ProductQuantity from "./ProductQuantity/ProductQuantity";
import globalProductClasses from "../GlobalProductStyles.module.scss";
import { withRouter } from "react-router";

class ProductInfo extends React.Component {
  constructor(props) {
    super(props);
    this.addProductToCart = this.addProductToCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
    this.state = {
      productQuantity: 1,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.location !== prevProps.location) {
      this.setState({ productQuantity: 1 });
    }
  }

  addProductToCart() {
    this.props.getAddedProductToCart(
      this.props.singleProduct,
      +this.state.productQuantity
    );
    this.setState({ productQuantity: 1 });
  }

  increaseQuantity() {
    this.setState((prevState) => {
      return {
        productQuantity: prevState.productQuantity + 1,
      };
    });
  }
  decreaseQuantity() {
    if (this.state.productQuantity === 1) return 1;
    this.setState((prevState) => {
      return {
        productQuantity: prevState.productQuantity - 1,
      };
    });
  }

  render() {
    const { title, price } = this.props.singleProduct;
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
        <ProductQuantity
          productQuantity={this.state.productQuantity}
          increaseQuantity={this.increaseQuantity}
          decreaseQuantity={this.decreaseQuantity}
        />
        {/** PRODUCT CTAs */}
        <div className={classes["product-info__ctas"]}>
          <button
            className="btn btn--secondary"
            onClick={this.addProductToCart}
          >
            Add To Cart
          </button>
          <button className="btn btn--primary">Pickup From Store</button>
        </div>
      </div>
    );
  }
}

export default withRouter(ProductInfo);
