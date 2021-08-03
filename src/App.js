import React from "react";

import { Route, Switch, useLocation } from "react-router-dom";

import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <NavBar className={location.pathname === '/' ? "navbar--home" : "" } />
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
