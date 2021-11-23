import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.scss";

class Products extends React.Component {
  render() {
    return (
      <div className={classes["products"]}>
        {this.props.products.slice(0, 10).map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    );
  }
}

export default Products;
