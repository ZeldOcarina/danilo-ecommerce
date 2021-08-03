import React from "react";

import logo from "../images/logo/logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <img src={logo} alt="Logo Danilo d'Ignazio" className="footer__logo" />
        <span className="footer__copy">
          &copy; {new Date().getFullYear()} Danilo D'Ignazio. Tutti i diritti
          riservati.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
