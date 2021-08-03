import React, { Component } from "react";

import Carousel from "../utils/Carousel";
import HomeBottomSlide from "../components/HomeBottomSlide";

class HomeGallery extends Component {
  constructor({ slides }) {
    super();
    /*this.btnsLeft = slider.querySelectorAll(".slider__btn--left");
      this.btnsRight = slider.querySelectorAll(".slider__btn--right");
      this.dotContainer = slider.querySelector(".dots");*/
    this.carousel = new Carousel({ transformAmount: 40 });
    this.carousel.slider = React.createRef(null);

    this.carousel.slidesData = slides;
    this.carousel.maxSlide = slides.length;
    this.state = {
      slides: [],
    };
  }

  componentDidMount() {
    this.carousel.setupSlider();
  }

  buildSlides() {
    return this.carousel.slidesData.map(
      ({ image, title, description, url }, i) => {
        const slideEl = (
          <HomeBottomSlide
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
      <div className="home-gallery">
        <div className="container">
          <div className="slider" ref={this.carousel.slider}>
            {this.buildSlides()}
          </div>
          <div className="home-gallery__btns-container container">
            <span
              className="home-gallery__btn text-white me-4 home-gallery__btn--left"
              onClick={this.carousel.handleLeftClick}
            >
              {"<"}
            </span>
            <span
              className="home-gallery__btn text-white home-gallery__btn--left--right"
              onClick={this.carousel.handleRightClick}
            >
              {">"}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default HomeGallery;
