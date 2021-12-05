import React, { useState, useEffect } from "react";
import axios from "axios";

import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import InfoModal from "./components/InfoModal";

export const AppContext = React.createContext({});

function App() {
  const [appData, setAppData] = useState({});
  const [news, setNews] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const [products, setProducts] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function loadAppData() {
      const BASE_URL = "https://danilo-admin.monarchy.io/wp-json/wp/v2";
      const newsPromise = axios.get(`${BASE_URL}/news?_embed`);
      const galleryPromise = axios.get(`${BASE_URL}/gallery-images?_embed`);
      const productsPromise = axios.get(
        `${BASE_URL}/products?per_page=100&_embed`
      );

      const [newsResponse, galleryResponse, productsResponse] =
        await Promise.all([newsPromise, galleryPromise, productsPromise]);

      const newsArray = newsResponse.data;
      const galleryArray = galleryResponse.data;
      const productsArray = productsResponse.data;

      for (let newPost of newsArray) {
        newPost.image =
          newPost._embedded[
            "wp:featuredmedia"
          ][0].media_details.sizes.large.source_url;
        newPost.alt = newPost._embedded["wp:featuredmedia"][0].alt_text
          ? newPost._embedded["wp:featuredmedia"][0].alt_text
          : "Some alt text";
      }

      for (let galleryPost of galleryArray) {
        galleryPost.image =
          galleryPost._embedded["wp:featuredmedia"][0].source_url;
        galleryPost.alt = galleryPost._embedded["wp:featuredmedia"][0].alt_text
          ? galleryPost._embedded["wp:featuredmedia"][0].alt_text
          : "Some alt text";
      }

      for (let productPost of productsArray) {
        try {
          productPost.image =
            productPost._embedded["wp:featuredmedia"][0].source_url;
          productPost.alt = productPost._embedded["wp:featuredmedia"][0]
            .alt_text
            ? productPost._embedded["wp:featuredmedia"][0].alt_text
            : "Some alt text";
        } catch (err) {
          console.log(err);
        }
      }

      setNews(newsArray);
      setGalleryImages(galleryArray);
      setProducts(productsArray);
    }

    loadAppData();
  }, []);

  return (
    <AppContext.Provider
      value={{ appData, setAppData, news, galleryImages, products }}
    >
      <div className="App">
        <NavBar
          className={location.pathname === "/" ? "navbar--home" : ""}
          type={location.pathname === "/" ? "home-page" : ""}
        />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/gallery" component={GalleryPage} exact />
          <Route path="/news" component={NewsPage} exact />
        </Switch>
        <Footer />
        <Cart />
        <InfoModal />
      </div>
    </AppContext.Provider>
  );
}

export default App;
