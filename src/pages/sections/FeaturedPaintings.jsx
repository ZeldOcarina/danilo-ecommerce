import React from "react";

import TopSlide from "../../components/TopSlide";
import Carousel from "../../utils/Carousel";

class FeaturedPaintings extends React.Component {
  constructor({ slides }) {
    super();
    /*this.btnsLeft = slider.querySelectorAll(".slider__btn--left");
    this.btnsRight = slider.querySelectorAll(".slider__btn--right");
    this.dotContainer = slider.querySelector(".dots");*/
    this.carousel = new Carousel({ transformAmount: 120 });
    this.carousel.slider = React.createRef(null);

    this.carousel.slidesData = slides;
    this.carousel.maxSlide = slides?.length;

    this.state = {
      slides: [],
    };
  }

  componentDidMount() {
    this.carousel.setupSlider();
  }

  buildSlides() {
    return this.carousel.slidesData?.map(
      ({ image, title, description, url }, i) => {
        const slideEl = (
          <TopSlide
            key={i}
            image={image}
            title={title}
            description={description}
            url={url}
            handleLeftClick={this.carousel.handleLeftClick}
            handleRightClick={this.carousel.handleRightClick}
          />
        );

        return slideEl;
      }
    );
  }

  render() {
    return (
      <div className="featured-paintings">
        <div className="container">
          <div className="slider" ref={this.carousel.slider}>
            {this.buildSlides()}
          </div>
        </div>
      </div>
    );
  }
}

export default FeaturedPaintings;
