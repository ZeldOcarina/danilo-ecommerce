import React, { useContext } from "react";

import TextAndImage from "./sections/TextAndImage";
import GalleryPictures from "../components/GalleryPictures";
import Gallery from "../components/Gallery";
import Seo from "../components/Seo";
import { ShopContext } from "../context/ShopContext";

import appContent from "../content/content";

function GalleryPage() {
  const {
    galleryPage: { title, content, image },
  } = appContent;

  const { collections } = useContext(ShopContext);

  console.log(collections);

  return (
    <main className="gallery-page">
      <Seo title="Danilo D'Ignazio | Gallery" />
      <TextAndImage {...{ aboutPage: true, title, content, image }} />
      <GalleryPictures
        type="gallery-page"
        products={collections.tiratureLimitate}
        title="Tirature Limitate"
      />
      <GalleryPictures
        type="gallery-page"
        products={collections.stampeUniche}
        title="Stampe Uniche"
      />
      <GalleryPictures
        type="gallery-page"
        products={collections.opereOriginali}
        title="Opere Originali"
      />
      <Gallery />
    </main>
  );
}

export default GalleryPage;
