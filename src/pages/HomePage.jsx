import React, { useContext } from "react";

import Hero from "./sections/Hero";
import FeaturedPaintings from "./sections/FeaturedPaintings";
import HomeAbout from "./sections/HomeAbout";
import HomeGallery from "../components/HomeGallery";
import TextAndImage from "./sections/TextAndImage";
import Gallery from "../components/Gallery";

import { AppContext } from "../App";
import { ShopContext } from "../context/ShopContext";

import appContent from "../content/content";

function HomePage() {
  const {
    homeAbout: { title, content, image },
  } = appContent;

  const {
    appData: { slides },
  } = useContext(AppContext);

  const { products } = useContext(ShopContext);

  return (
    <main className="home-page" type="home-page">
      <Hero />
      <FeaturedPaintings slides={products} />
      <HomeAbout />
      <HomeGallery slides={slides} />
      <TextAndImage {...{ aboutPage: false, title, content, image }} />
      <Gallery />
    </main>
  );
}

export default HomePage;
