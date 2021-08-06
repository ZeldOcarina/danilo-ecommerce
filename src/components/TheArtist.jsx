import React from "react";

import { Link } from "react-router-dom";

function TheArtist({ reference, height }) {
  return (
    <div
      className="home-square home-square--artist home-artist text-white"
      ref={reference}
      style={{ height }}
    >
      <h3 className="home-artist__title  text-uppercase text-white">
        The Artist
      </h3>
      <div className="home-artist__text-container">
        <p className="home-artist__description">
          Una volta che riusciamo ad acquisire la nostra vera consapevolezza, a
          prescindere da quali siano gli eventi, la vita è, e diventerà, sempre
          più meravigliosa.
        </p>

        <Link
          to="/about"
          className="btn home-artist__btn text-uppercase text-dark btn-light btn-lg mt-3"
        >
          Read More
        </Link>
      </div>
    </div>
  );
}

export default TheArtist;
