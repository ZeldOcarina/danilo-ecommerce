import React from "react";

import { parsePrice } from "../utils/utils";

function HomeBottomSlide({
  image,
  title,
  description,
  price,
  addItemToCheckout,
  productId,
  buyNowClick,
}) {
  return (
    <div className="slide bottom-slide">
      <img src={image} alt="Placeholder" className="bottom-slide__image mb-2" />
      <h4 className="slide__title text-white mb-2">{title}</h4>
      <p
        className="slide__description text-white"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <p className="slide__description text-white">{parsePrice(price)}</p>
      <div className="slide__btns-container d-flex">
        <button
          onClick={() => addItemToCheckout(productId, 1)}
          className="btn btn-lg mt-1 btn-outline-light bottom-slide__buy"
        >
          ADD TO CART
        </button>
        <button
          onClick={() => buyNowClick(productId)}
          className="btn btn-lg mt-1 btn-outline-light bottom-slide__buy"
        >
          BUY NOW
        </button>
      </div>
    </div>
  );
}

export default HomeBottomSlide;
