import React from "react";

import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from "../images/logo/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <span className="footer__terms">
          <Link to="/sales-terms">Termini e Condizioni</Link>
        </span>
        <div className="footer__icons-container">
          <a className="icon" href="https://www.facebook.com/danilodigna/">
            <FaFacebookF className="footer__icon" />
          </a>
          <a
            className="icon"
            href="https://www.instagram.com/danilo_dignazio/?hl=it"
          >
            <FaInstagram className="footer__icon" />
          </a>
        </div>
        <div className="footer__container">
          <img
            src={logo}
            alt="Logo Danilo D'Ignazio"
            className="footer__logo"
          />
          <span className="footer__copy">
            &copy; {new Date().getFullYear()} Danilo D'Ignazio. Tutti i diritti
            riservati.
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
