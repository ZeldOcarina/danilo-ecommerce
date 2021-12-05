import React, { useContext } from "react";

import TextAndImage from "./sections/TextAndImage";
import GalleryPictures from "../components/GalleryPictures";
import Gallery from "../components/Gallery";
import Seo from "../components/Seo";

import appContent from "../content/content";
import { AppContext } from "../App";

function GalleryPage() {
  const {
    galleryPage: { title, content, image },
  } = appContent;

  const { products } = useContext(AppContext);

  const tiratureLimitate = products.filter(
    (product) => product.acf.Tipologia === "Tirature Limitate"
  );
  const stampeUniche = products.filter(
    (product) => product.acf.Tipologia === "Stampe Uniche"
  );
  const opereOriginali = products.filter(
    (product) => product.acf.Tipologia === "Opere Originali"
  );

  console.log(tiratureLimitate);
  console.log(stampeUniche);
  console.log(opereOriginali);
  console.log(products);

  return (
    <main className="gallery-page">
      <Seo title="Danilo D'Ignazio | Gallery" />
      <TextAndImage {...{ aboutPage: true, title, content, image }} />
      <GalleryPictures
        type="gallery-page"
        products={tiratureLimitate}
        title="Tirature Limitate"
      />
      <GalleryPictures
        type="gallery-page"
        products={stampeUniche}
        title="Stampe Uniche"
      />
      <GalleryPictures
        type="gallery-page"
        products={opereOriginali}
        title="Opere Originali"
      />
      <Gallery />
    </main>
  );
}

export default GalleryPage;
