import React, { useState, useEffect } from "react";
import axios from "axios";

import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";

import { slides, gallery } from "./content/fake-db";

export const AppContext = React.createContext({});

function App() {
  const [appData, setAppData] = useState({ slides, gallery });
  const [news, setNews] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function buildNewsArray() {
      const BASE_URL = "https://danilo-admin.monarchy.io/wp-json/wp/v2";
      const response = await axios.get(`${BASE_URL}/news`);
      const newsArray = response.data;

      for(let newPost of newsArray) {
        const promise1 = axios.get(`${BASE_URL}/users/${newPost.author}`);
        const promise2 = axios.get(newPost._links["wp:featuredmedia"][0].href);

        const data = await Promise.all([ promise1, promise2 ]);

        newPost.author = data[0].data.name;
        newPost.image = data[1].data.media_details.sizes.large.source_url;
        newPost.alt = data[1].data.alt_text ? data[1].data.alt_text : "Alternative text";
      }

      setNews(newsArray);

      console.log(newsArray);
    };

    buildNewsArray();
  }, [])

  return (
    <AppContext.Provider value={{ appData, setAppData, news }}>
      <div className="App">
        <NavBar className={location.pathname === '/' ? "navbar--home" : "" } type={location.pathname === '/' ? "home-page" : "" } />
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/about" component={About} exact />
          <Route path="/gallery" component={GalleryPage} exact />
          <Route path="/news" component={NewsPage} exact />
        </Switch>
        <Footer />
      </div>
    </AppContext.Provider>
  );
}

export default App;
