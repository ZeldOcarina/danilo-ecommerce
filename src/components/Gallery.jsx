import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { AppContext } from "../App";

function GalleryItem({ title: { rendered: title }, image }) {
  return (
    <div className="gallery-item">
      <h3 className="gallery-item__title">{title}</h3>
      <img src={image} alt="" className="gallery-item__image" />
    </div>
  );
}

function Gallery() {
  const { galleryImages: gallery } = useContext(AppContext);

  return (
    <section className="gallery">
      <div className="gallery__container">
        {gallery.map((item) => {
          return <GalleryItem {...item} key={uuidv4()} />;
        })}
      </div>
    </section>
  );
}

export default Gallery;
