import React, { useState, useEffect, useContext } from "react";
import axios from "axios";

import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

import { ShopContext } from './context/ShopContext';

import { slides } from "./content/fake-db";

export const AppContext = React.createContext({});

function App() {
  const [appData, setAppData] = useState({ slides });
  const [news, setNews] = useState([]);
  const [galleryImages, setGalleryImages] = useState([]);
  const location = useLocation();

  const { fetchAllProducts } = useContext(ShopContext);

  useEffect(() => {
    async function loadAppData() {
      const BASE_URL = "https://danilo-admin.monarchy.io/wp-json/wp/v2";
      const newsPromise = axios.get(`${BASE_URL}/news?_embed`);
      const galleryPromise = axios.get(`${BASE_URL}/gallery-images?_embed`);
      
      const [ newsResponse, galleryResponse ] = await Promise.all([ newsPromise, galleryPromise ]);
      
      const newsArray = newsResponse.data;      
      const galleryArray = galleryResponse.data;

      for(let newPost of newsArray) {
        newPost.image = newPost._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url;
        newPost.alt = newPost._embedded["wp:featuredmedia"][0].alt_text ? newPost._embedded["wp:featuredmedia"][0].alt_text : "Some alt text";
      }

      for(let galleryPost of galleryArray) {
        galleryPost.image = galleryPost._embedded["wp:featuredmedia"][0].source_url;
        galleryPost.alt = galleryPost._embedded["wp:featuredmedia"][0].alt_text ? galleryPost._embedded["wp:featuredmedia"][0].alt_text : "Some alt text";
      }

      setNews(newsArray);
      setGalleryImages(galleryArray);

      fetchAllProducts();
    };

    loadAppData();
  }, [fetchAllProducts])

  return (
    <AppContext.Provider value={{ appData, setAppData, news, galleryImages }}>
        <div className="App">
          <NavBar className={location.pathname === '/' ? "navbar--home" : "" } type={location.pathname === '/' ? "home-page" : "" } />
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/about" component={About} exact />
            <Route path="/gallery" component={GalleryPage} exact />
            <Route path="/news" component={NewsPage} exact />
          </Switch>
          <Footer />
          <Cart />
        </div>
    </AppContext.Provider>
  );
}

export default App;
