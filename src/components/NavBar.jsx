import React from "react";

import { NavLink } from "react-router-dom";

import logo from "../images/logo/logo.svg";
import navbarBg from "../images/navbar-bg.jpg";

function NavBar({ className, type }) {
  return (
    <nav
      className={`navbar${className && " " + className}`}
      style={{
        backgroundImage: type === "home-page" ? "" : `url(${navbarBg})`,
      }}
    >
      <div className="container navbar__container">
        <NavLink to="/">
          <img src={logo} alt="Danilo Logo" className="navbar__logo" />
        </NavLink>
        <ul className="navbar__menu">
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/gallery"
            >
              Gallery
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              className="navbar__link"
              activeClassName="navbar__link--active"
              to="/news"
            >
              News
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
