import React from "react";
import Products from "../Products/Products";
import classes from "./SimilarProducts.module.scss";

class SimilarProducts extends React.Component {
  render() {
    return (
      <div className={`${classes["similar-products"]} container`}>
        <h2 className="title--secondary">Similar Products</h2>
        <p className={classes["similar-products__description"]}>
          You may like these products also
        </p>
        {/** SIMILAR PRODUCTS */}
        <Products products={this.props.products} />
      </div>
    );
  }
}

export default SimilarProducts;
