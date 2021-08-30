import React from "react";

import { parsePrice } from "../utils/utils";

function TopSlide({
  image,
  title,
  description,
  price,
  productId,
  available,
  handleLeftClick,
  handleRightClick,
  addItemToCheckout,
  buyNowClick,
  handleShowInfo,
}) {
  return (
    <div className="slide">
      <img
        src={image}
        alt="Placeholder"
        className="featured-paintings__drawing"
      />
      <div className="slide__components">
        <div className="slide__buttons-container mb-2 sarabun d-flex">
          <span
            className="slide__button text-white me-4 d-block"
            onClick={handleLeftClick}
          >
            {"<"} LEFT
          </span>
          <span
            className="slide__button text-white d-block"
            onClick={handleRightClick}
          >
            RIGHT {">"}
          </span>
        </div>
        <h4 className="slide__title text-white mb-2">{title}</h4>
        <p
          className="slide__description text-white"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        {available ? (
          <>
            <p className="slide__description text-white">{parsePrice(price)}</p>
            <button
              className="slide__btn slide__btn--outline btn btn-outline-white btn-lg mt-1 me-md-3"
              onClick={() => addItemToCheckout(productId, 1)}
            >
              ADD TO CART
            </button>
            <button
              onClick={() => buyNowClick(productId)}
              className="slide__btn btn btn-primary btn-lg mt-1"
            >
              BUY NOW
            </button>
          </>
        ) : (
          <button
            className="slide__btn slide__btn--outline btn btn-outline-white btn-lg mt-1 me-md-3"
            onClick={() => handleShowInfo(title)}
          >
            RICHIEDI INFO
          </button>
        )}
      </div>
    </div>
  );
}

export default TopSlide;
