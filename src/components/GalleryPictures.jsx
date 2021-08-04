import React from "react";
import { v4 as uuidv4 } from "uuid";

import { parsePrice } from "../utils/utils";

function GalleryPicture({
  picture: { image, alt, availability, title, description, price },
}) {
  const available = availability > 0;

  return (
    <div class="picture">
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
          <a className="btn btn-outline-light picture__btn" href="/buy">
            BUY NOW
          </a>
        </>
      )}
    </div>
  );
}

function GalleryPictures({ slides: pictures }) {
  return (
    <section class="gallery-pictures">
      <div className="container gallery-pictures__container">
        {pictures.map((picture) => (
          <GalleryPicture picture={picture} key={uuidv4()} />
        ))}
      </div>
    </section>
  );
}

export default GalleryPictures;
