import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./Products.module.scss";

class Products extends React.Component {
  render() {
    console.log("Products: ", this.props);
    return (
      <div className={classes["products"]}>
        {this.props.products.slice(0, 10).map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
        {/* <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem /> */}
      </div>
    );
  }
}

export default Products;
