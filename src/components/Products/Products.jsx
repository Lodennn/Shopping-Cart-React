import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.scss";

class Products extends React.Component {
  render() {
    return (
      <div className={classes["products"]}>
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
    );
  }
}

export default Products;
