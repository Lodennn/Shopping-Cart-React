import React from "react";
import classes from "./ProductImagesSlider.module.scss";
import { ReactComponent as SliderLeftArrow } from "../../../../images/icon-chevron-left-small.svg";
import { ReactComponent as SliderRightArrow } from "../../../../images/icon-chevron-right-small.svg";
import imageSlider1 from "../../../../images/slider-img-1@2x.png";
import imageSlider2 from "../../../../images/slider-img-2@2x.png";
import imageSlider3 from "../../../../images/slider-img-3@2x.png";
import imageSlider4 from "../../../../images/slider-img-4@2x.png";

class ProductImagesSlider extends React.Component {
  render() {
    return (
      <div className={classes["product-images-slider"]}>
        {/** SLIDER IMAGES */}
        <div className={classes["product-images-slider__images"]}>
          <div className={classes["product-images-slider__images--image"]}>
            <img src={imageSlider1} alt="Img Preview 1" className="img-fluid" />
          </div>
          <div className={classes["product-images-slider__images--image"]}>
            <img src={imageSlider2} alt="Img Preview 2" className="img-fluid" />
          </div>
          <div className={classes["product-images-slider__images--image"]}>
            <img src={imageSlider3} alt="Img Preview 3" className="img-fluid" />
          </div>
          <div className={classes["product-images-slider__images--image"]}>
            <img src={imageSlider4} alt="Img Preview 4" className="img-fluid" />
          </div>
        </div>
        {/** SLIDER CONTROLLERS */}
        <div className={classes["product-images-slider__controllers"]}>
          <span className={classes["product-images-slider__controllers--left"]}>
            <SliderLeftArrow />
          </span>
          <span
            className={classes["product-images-slider__controllers--right"]}
          >
            <SliderRightArrow />
          </span>
        </div>
      </div>
    );
  }
}

export default ProductImagesSlider;
