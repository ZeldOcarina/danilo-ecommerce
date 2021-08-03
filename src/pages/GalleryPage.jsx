import React from "react";

import TextAndImage from "./sections/TextAndImage";
import Gallery from "../components/Gallery";

import appContent from "../content/content";

function GalleryPage() {
  const {
    galleryPage: { title, content, image },
  } = appContent;

  return (
    <main className="gallery-page">
      <TextAndImage {...{ aboutPage: true, title, content, image }} />
      <Gallery />
    </main>
  );
}

export default GalleryPage;
