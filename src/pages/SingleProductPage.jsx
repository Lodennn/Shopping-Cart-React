import React, { Fragment } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import SingleProduct from "../components/SingleProduct/SingleProduct";

class SingleProductPage extends React.Component {
  render() {
    return (
      <Fragment>
        <Breadcrumb />
        <SingleProduct
          products={this.props.products}
          getAddedProductToCart={this.props.getAddedProductToCart}
        />
        <SimilarProducts products={this.props.products} />
      </Fragment>
    );
  }
}

export default SingleProductPage;
