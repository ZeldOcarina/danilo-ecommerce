import React, { useState } from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import GalleryPage from "./pages/GalleryPage";
import NewsPage from "./pages/NewsPage";
import Footer from "./components/Footer";

import { slides, gallery, news } from "./content/fake-db";

export const AppContext = React.createContext({});

function App() {
  const [appData, setAppData] = useState({ slides, gallery, news });
  const location = useLocation();

  return (
    <AppContext.Provider value={{ appData, setAppData }}>
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
