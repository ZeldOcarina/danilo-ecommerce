import React, { useState, useEffect, useContext } from "react";

import TopSlide from "../../components/TopSlide";
import Carousel from "../../utils/Carousel";

import { ShopContext } from "../../context/ShopContext";

function FeaturedPaintings() {
  const [slides, setSlides] = useState([]);
  const { products, addItemToCheckout, buyNowClick } = useContext(ShopContext);

  // eslint-disable-next-line
  const carousel = new Carousel({ transformAmount: 150 });

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
          <TopSlide
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
    <div className="featured-paintings">
      <div className="container">
        <div className="slider" ref={carousel.slider}>
          {buildSlides()}
        </div>
      </div>
    </div>
  );
}

export default FeaturedPaintings;
