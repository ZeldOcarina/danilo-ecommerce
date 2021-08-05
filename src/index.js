import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import reportWebVitals from "./reportWebVitals";

import { BrowserRouter } from "react-router-dom";

import ShopProvider from "./context/ShopContext";

import "./sass/index.scss";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <ShopProvider>
          <App />
        </ShopProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
