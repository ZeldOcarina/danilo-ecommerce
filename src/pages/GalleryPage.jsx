import React, { useContext } from "react";

import TextAndImage from "./sections/TextAndImage";
import GalleryPictures from "../components/GalleryPictures";
import Gallery from "../components/Gallery";

import { AppContext } from "../App";

import appContent from "../content/content";

function GalleryPage() {
  const {
    galleryPage: { title, content, image },
  } = appContent;

  const {
    appData: { slides },
  } = useContext(AppContext);

  console.log(slides);

  return (
    <main className="gallery-page">
      <TextAndImage {...{ aboutPage: true, title, content, image }} />
      <GalleryPictures slides={slides} />
      <Gallery />
    </main>
  );
}

export default GalleryPage;
