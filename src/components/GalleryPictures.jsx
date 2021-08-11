import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ShopContext } from "../context/ShopContext";
import { parsePrice } from "../utils/utils";

function GalleryPicture({
  images: [{ src: image }],
  alt,
  title,
  descriptionHtml: description,
  variants,
  addItemToCheckout,
  buyNowClick,
}) {
  const price = variants[0].price;
  const productId = variants[0].id;
  const available = true;

  return (
    <div className="picture">
      <div className="picture__image-container">
        <img
          src={image}
          alt={alt}
          className={
            available ? "picture__image" : "picture__image picture__image--sold"
          }
        />
        {!available && <span className="picture__sold">SOLD OUT</span>}
      </div>
      <h3 className="picture__title">{title}</h3>
      <p
        className="picture__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      {available && (
        <>
          <p className="picture__price">{parsePrice(price)}</p>
          <div className="slide__btns-container slide__btns-container--vertical d-flex mt-1">
            <button
              className="slide__btn slide__btn--outline btn btn-outline-white btn-lg"
              onClick={() => addItemToCheckout(productId, 1)}
            >
              ADD TO CART
            </button>
            <button
              className="btn btn-outline-light slide__btn slide__btn--outline picture__btn btn-lg"
              onClick={() => buyNowClick(productId)}
            >
              BUY NOW
            </button>
          </div>
        </>
      )}
    </div>
  );
}

function GalleryPictures({ type }) {
  const { products, addItemToCheckout, buyNowClick } = useContext(ShopContext);
  return (
    <section
      className={
        type ? `gallery-pictures gallery-pictures--${type}` : "gallery-pictures"
      }
    >
      <div className="container gallery-pictures__container">
        {products.map((product) => (
          <GalleryPicture
            {...product}
            addItemToCheckout={addItemToCheckout}
            buyNowClick={buyNowClick}
            key={uuidv4()}
          />
        ))}
      </div>
    </section>
  );
}

export default GalleryPictures;
