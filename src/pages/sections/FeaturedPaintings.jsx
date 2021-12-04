import React, { useState, useEffect, useContext } from "react";

import { useMediaQuery } from "react-responsive";

import TopSlide from "../../components/TopSlide";
import Carousel from "../../utils/Carousel";

import { ShopContext } from "../../context/ShopContext";

function FeaturedPaintings({ products }) {
  const [slides, setSlides] = useState([]);
  const [height, setHeight] = useState(0);
  const { addItemToCheckout, buyNowClick, handleShowInfo } =
    useContext(ShopContext);

  // eslint-disable-next-line
  const carousel = new Carousel({ transformAmount: 150 });

  carousel.slider = React.createRef(null);

  carousel.slidesData = slides;
  carousel.maxSlide = slides?.length;

  const isPhonePort = useMediaQuery({
    query: "only screen and (max-width: 28.125em)",
  });

  useEffect(() => {
    carousel.setupSlider();
    setSlides(products);

    if (!isPhonePort) return;

    if (carousel.slider.current.children.length > 0) {
      let maxHeight = 0;
      for (let element of carousel.slider.current.children) {
        const height = parseFloat(
          getComputedStyle(element).getPropertyValue("height").split("px")[0]
        );
        maxHeight = height > maxHeight ? height : maxHeight;
      }
      setHeight(maxHeight + 100);
    }
  }, [products, carousel, isPhonePort]);

  function buildSlides() {
    return carousel.slidesData?.map(
      (
        {
          images: [{ src: image }],
          title,
          descriptionHtml: description,
          url,
          variants,
          availableForSale,
        },
        i
      ) => {
        const price = variants[0].price;
        const productId = variants[0].id;
        const slideEl = (
          <TopSlide
            key={i}
            image={image}
            title={title}
            description={description}
            url={url}
            price={price}
            //available={availableForSale}
            available={false}
            handleLeftClick={carousel.handleLeftClick}
            handleRightClick={carousel.handleRightClick}
            addItemToCheckout={addItemToCheckout}
            productId={productId}
            buyNowClick={buyNowClick}
            handleShowInfo={handleShowInfo}
          />
        );

        return slideEl;
      }
    );
  }

  return (
    <div
      className="featured-paintings"
      style={{ height: height ? `${height}px` : "" }}
    >
      <div className="container">
        <div className="slider" ref={carousel.slider}>
          {buildSlides()}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPaintings;
