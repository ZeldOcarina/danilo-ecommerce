import React, { useContext, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { v4 as uuidv4 } from "uuid";

import { NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { ShopContext } from "../context/ShopContext";

import logo from "../images/logo/logo.svg";
import navbarBg from "../images/navbar-bg.jpg";

import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

function NavBar({ className, type }) {
  const navItems = ["about", "gallery", "news"];
  const [open, setOpen] = useState(false);
  const { openCart } = useContext(ShopContext);

  const isTabPort = useMediaQuery({
    query: "only screen and (max-width: 56.25em)",
  });

  function toggleNavbar() {
    setOpen(!open);
  }
  function closeNavbar() {
    setOpen(false);
  }

  return (
    <>
      <nav
        className={
          open ? "mobile-navbar mobile-navbar--visible" : "mobile-navbar"
        }
      >
        <ul className="mobile-navbar__ul">
          {navItems.map((page) => (
            <li className="mobile-navbar__item" key={uuidv4()}>
              <NavLink
                className="navbar__link"
                activeClassName="navbar__link--active"
                to={`/${page}`}
                onClick={closeNavbar}
              >
                {page}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <nav
        className={`navbar${className && " " + className}${
          type !== "home-page" ? ` navbar--internal` : ""
        }`}
        style={{
          backgroundImage: type === "home-page" ? "" : `url(${navbarBg})`,
        }}
      >
        <div className="container navbar__container">
          <NavLink to="/">
            <img src={logo} alt="Danilo Logo" className="navbar__logo" />
          </NavLink>
          <ul className="navbar__menu">
            <button onClick={toggleNavbar} className="navbar__hamburger ms-5">
              {open ? (
                <MdClose color="primary" size={30} />
              ) : (
                <GiHamburgerMenu size={30} />
              )}
            </button>
            <div className="navbar__pages-container">
              {navItems.map((page) => (
                <li className="navbar__item" key={uuidv4()}>
                  <NavLink
                    className="navbar__link"
                    activeClassName="navbar__link--active"
                    to={`/${page}`}
                  >
                    {page}
                  </NavLink>
                </li>
              ))}
            </div>
            <li className="navbar__item">
              <button onClick={openCart} className="navbar__shopping-cart">
                <FaShoppingCart
                  color={"primary"}
                  size={isTabPort ? 30 : "1em"}
                />
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
