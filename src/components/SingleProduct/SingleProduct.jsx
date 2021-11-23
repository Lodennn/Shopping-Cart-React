import React from "react";
import ProductImagesPreview from "./ProductImagesPreview/ProductImagesPreview";
import ProductInfo from "./ProductInfo/ProductInfo";
import classes from "./SingleProduct.module.scss";
import { withRouter } from "react-router-dom";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      singleProduct: {},
    };
  }
  componentDidMount() {
    const products = this.props.products;
    const { productId } = this.props.match.params;
    const singleProduct = products.find((product) => product.id === +productId);
    this.setState({ singleProduct: singleProduct });
  }

  componentDidUpdate(prevProps, prevState) {
    const { productId } = this.props.match.params;
    const { productId: prevProductId } = prevProps.match.params;
    if (prevProductId !== productId) {
      const singleProduct = this.props.products.find(
        (product) => product.id === +productId
      );
      this.setState({ singleProduct: singleProduct });
    }
  }

  render() {
    return (
      <div className={`${classes["product"]} container`}>
        {this.state.singleProduct.id && (
          <ProductImagesPreview singleProduct={this.state.singleProduct} />
        )}
        {this.state.singleProduct.id && (
          <ProductInfo
            singleProduct={this.state.singleProduct}
            getAddedProductToCart={this.props.getAddedProductToCart}
          />
        )}
      </div>
    );
  }
}

export default withRouter(Product);
