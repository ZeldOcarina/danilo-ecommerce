import React from "react";

import logo from "../../images/logo/logo.svg";

function Hero() {
  return (
    <div className="hero">
      <div className="container hero__container">
        <img src={logo} alt="Logo Danilo d'Ignazio" className="hero__logo" />
      </div>
    </div>
  );
}

export default Hero;
