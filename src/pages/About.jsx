import React from "react";

import TextAndImage from "./sections/TextAndImage";
import Gallery from "../components/Gallery";
import Seo from "../components/Seo";

import appContent from "../content/content";

function About() {
  const {
    aboutPage: { title, content, image },
  } = appContent;
  return (
    <main className="about-page">
      <Seo title="Danilo D'Ignazio | About" />
      <TextAndImage aboutPage={true} {...{ title, content, image }} />
      <Gallery />
    </main>
  );
}

export default About;
