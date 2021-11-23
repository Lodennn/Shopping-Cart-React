import React, { Fragment } from "react";
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";
import SimilarProducts from "../components/SimilarProducts/SimilarProducts";
import SingleProduct from "../components/SingleProduct/SingleProduct";

class SingleProductPage extends React.Component {
  render() {
    console.log("SingleProductPage.js");
    return (
      <Fragment>
        <Breadcrumb />
        <SingleProduct />
        <SimilarProducts products={this.props.products} />
      </Fragment>
    );
  }
}

export default SingleProductPage;
