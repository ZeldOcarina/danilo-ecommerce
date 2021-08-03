import React from "react";

function TheArtist({ reference, height }) {
  console.log(reference);
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
          Fu durante un soggiorno a New York che Danilo iniziò il suo percorso
          artistico utilizzando una street-pop art
        </p>

        <a
          href="/about"
          className="btn home-artist__btn text-uppercase text-dark btn-light btn-lg mt-3"
        >
          Read More
        </a>
      </div>
    </div>
  );
}

export default TheArtist;