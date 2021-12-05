import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { ShopContext } from "../context/ShopContext";

function GalleryPicture({
  image,
  title: { rendered: title },
  content: { rendered: description },
  handleShowInfo,
}) {
  return (
    <div className="picture">
      <div className="picture__image-container">
        <img src={image} alt={title} className="picture__image" />
      </div>
      <h3 className="picture__title">{title.replace("&#8211;", "-")}</h3>
      <p
        className="picture__description"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <div className="slide__btns-container slide__btns-container--vertical d-flex mt-1">
        <button
          className="slide__btn slide__btn--outline btn btn-outline-white btn-lg"
          onClick={() => handleShowInfo(title)}
        >
          RICHIEDI INFO
        </button>
      </div>
    </div>
  );
}

function GalleryPictures({ type, products, title }) {
  const { handleShowInfo } = useContext(ShopContext);
  return (
    <section
      className={
        type ? `gallery-pictures gallery-pictures--${type}` : "gallery-pictures"
      }
    >
      <h2 className="text-center text-white mb-4">{title}</h2>
      <div className="container gallery-pictures__container">
        {products &&
          products.map((product) => (
            <GalleryPicture
              {...product}
              handleShowInfo={handleShowInfo}
              key={uuidv4()}
            />
          ))}
      </div>
    </section>
  );
}

export default GalleryPictures;
