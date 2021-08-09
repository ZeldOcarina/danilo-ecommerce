import React, { useState, useContext, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Carousel from "../utils/Carousel";
import HomeBottomSlide from "../components/HomeBottomSlide";

import { ShopContext } from "../context/ShopContext";

function HomeGallery() {
  const [slides, setSlides] = useState([]);
  const { products, addItemToCheckout, buyNowClick } = useContext(ShopContext);

  const isLaptop = useMediaQuery({
    query: "only screen and (max-width: 102.18em)",
  });
  const isTabLand = useMediaQuery({
    query: "only screen and (max-width: 75em)",
  });

  console.log(isTabLand);
  function setTransformAmount() {
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
      (
        {
          images: [{ src: image }],
          title,
          descriptionHtml: description,
          url,
          variants,
        },
        i
      ) => {
        const price = variants[0].price;
        const productId = variants[0].id;
        const slideEl = (
          <HomeBottomSlide
            key={i}
            image={image}
            title={title}
            description={description}
            url={url}
            price={price}
            handleLeftClick={carousel.handleLeftClick}
            handleRightClick={carousel.handleRightClick}
            addItemToCheckout={addItemToCheckout}
            productId={productId}
            buyNowClick={buyNowClick}
          />
        );

        return slideEl;
      }
    );
  }

  return (
    <div className="home-gallery">
      <div className="container">
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
