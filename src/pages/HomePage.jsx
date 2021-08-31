import React, { useContext } from "react";

import Hero from "./sections/Hero";
import FeaturedPaintings from "./sections/FeaturedPaintings";
import HomeAbout from "./sections/HomeAbout";
import HomeGallery from "../components/HomeGallery";
import TextAndImage from "./sections/TextAndImage";
import Gallery from "../components/Gallery";
import Seo from "../components/Seo";

import { ShopContext } from "../context/ShopContext";

import appContent from "../content/content";

function HomePage() {
  const {
    homeAbout: { title, content, image },
  } = appContent;

  const { products, collections } = useContext(ShopContext);

  return (
    <main className="home-page" type="home-page">
      <Seo title="Danilo D'Ignazio | Home Page" />
      <Hero />
      <FeaturedPaintings products={collections.opereOriginali} />
      <HomeAbout />
      <HomeGallery products={products} />
      <TextAndImage {...{ aboutPage: false, title, content, image }} />
      <Gallery />
    </main>
  );
}

export default HomePage;
