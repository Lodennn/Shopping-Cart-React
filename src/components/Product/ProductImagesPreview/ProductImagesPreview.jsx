import React from "react";
import ProductMainImage from "./ProductMainImage/ProductMainImage";
import ProductImagesSlider from "./ProductImagesSlider/ProductImagesSlider";

class ProductImagesPreview extends React.Component {
  render() {
    return (
      <div>
        <ProductMainImage />
        <ProductImagesSlider />
      </div>
    );
  }
}

export default ProductImagesPreview;
