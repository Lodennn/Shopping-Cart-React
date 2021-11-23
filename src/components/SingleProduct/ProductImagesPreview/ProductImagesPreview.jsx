import React from "react";
import ProductMainImage from "./ProductMainImage/ProductMainImage";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";

class ProductImagesPreview extends React.Component {
  render() {
    const { image } = this.props.singleProduct;
    return (
      <div>
        <ProductMainImage productImage={image} />
        <ProductImagesSlider />
      </div>
    );
  }
}

export default ProductImagesPreview;
