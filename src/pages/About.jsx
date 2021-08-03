import React from "react";

import TextAndImage from "./sections/TextAndImage";
import Gallery from "../components/Gallery";

import appContent from "../content/content";

function About() {
  const {
    aboutPage: { title, content, image },
  } = appContent;
  return (
    <main className="about-page">
      <TextAndImage aboutPage={true} {...{ title, content, image }} />
      <Gallery />
    </main>
  );
}

export default About;
