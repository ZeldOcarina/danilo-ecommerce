import React, { useState, useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import slideIcon from "../images/icons/swipe-icon.svg";

import Carousel from "../utils/Carousel";
import HomeBottomSlide from "../components/HomeBottomSlide";

import { ShopContext } from "../context/ShopContext";

function HomeGallery({ products }) {
  const [slides, setSlides] = useState([]);
  const { handleShowInfo } = useContext(ShopContext);

  const isLaptop = useMediaQuery({
    query: "only screen and (max-width: 102.18em)",
  });
  const isTabLand = useMediaQuery({
    query: "only screen and (max-width: 75em)",
  });
  const isPhonePort = useMediaQuery({
    query: "only screen and (max-width: 28.125em)",
  });

  function setTransformAmount() {
    if (isPhonePort) return 100;
    if (isTabLand) return 55;
    if (isLaptop) return 35;
    return 40;
  }

  const transformAmount = setTransformAmount();

  // eslint-disable-next-line
  const carousel = new Carousel({ transformAmount });

  carousel.slider = React.createRef(null);

  carousel.slidesData = slides;
  carousel.maxSlide = slides?.length;

  useEffect(() => {
    carousel.setupSlider();
    setSlides(products);
  }, [products, carousel]);

  function buildSlides() {
    return carousel.slidesData?.map(
      ({
        id,
        image,
        title: { rendered: title },
        content: { rendered: description },
      }) => {
        const slideEl = (
          <HomeBottomSlide
            key={id}
            image={image}
            title={title}
            description={description}
            handleLeftClick={carousel.handleLeftClick}
            handleRightClick={carousel.handleRightClick}
            handleShowInfo={handleShowInfo}
          />
        );

        return slideEl;
      }
    );
  }

  return (
    <div className="home-gallery">
      <div className="container">
        <img
          className="home-gallery__slide-icon"
          src={slideIcon}
          alt="swipe icon"
        />
        <div className="slider" ref={carousel.slider}>
          {buildSlides()}
        </div>
        <div className="home-gallery__btns-container container">
          <span
            className="home-gallery__btn text-white me-4 home-gallery__btn--left"
            onClick={carousel.handleLeftClick}
          >
            {"<"}
          </span>
          <span
            className="home-gallery__btn text-white home-gallery__btn--left--right"
            onClick={carousel.handleRightClick}
          >
            {">"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomeGallery;
