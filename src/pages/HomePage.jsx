import React from "react";

import Hero from "./sections/Hero";
import FeaturedPaintings from "./sections/FeaturedPaintings";
import HomeAbout from "./sections/HomeAbout";
import HomeGallery from "../components/HomeGallery";
import HomeDescription from "./sections/HomeDescription";

import { slides } from "../content/fake-db";

function HomePage() {
  return (
    <main className="home-page" type="home-page">
      <Hero />
      <FeaturedPaintings slides={slides} />
      <HomeAbout />
      <HomeGallery slides={slides} />
      <HomeDescription />
    </main>
  );
}

export default HomePage;
