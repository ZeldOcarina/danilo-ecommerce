import React from "react";

import homeDescriptionImage from "../../images/home-description-image.png";

import { Link } from "react-router-dom";

function HomeDescription() {
  return (
    <section className="home-description">
      <div className="container home-description__container">
        <div className="home-description__left-container">
          <h2 className="home-description__title">Danilo D'Ignazio</h2>
          <p className="home-description__text">
            Danilo D’Ignazio nasce a Giulianova nel 1985 e sin dai primi anni di
            scuola dimostra un’innata passione per il disegno. La sua passione
            si traduce in lavoro, quando diventa Graphic designer, sino alla
            creazione, nel 2012, di un suo Brand ‘’Made in Italy’’.
          </p>
          <p className="home-description__text">
            Durante un soggiorno a New York, rapito dalla cultura urbana e dalle
            strade newyorkesi inizia il suo percorso artistico utilizzando un
            linguaggio ‘’street-pop’’.
          </p>

          <p className="home-description__text">
            Le sue tele raccontano dialoghi tra linguaggi artistici diversi,
            D’Ignazio si esprime attraverso la Street-art con l’uso di
            bombolette spray e tecniche "graffitiche". Nelle sue tele troviamo
            anche alcuni simboli della Pop-art come la mano di Topolino, come
            icona di un suo dialogo costante col mondo.
          </p>
          <p className="home-description__text">
            Le opere di Danilo D’Ignazio sono inni alla vita, all’amore, alla
            bellezza, attraverso le quali affronta anche temi sociali.
          </p>
          <p className="home-description__text">
            Le sue opere sono presenti in collezioni private in Italia, Francia
            e Giappone.
          </p>
          <Link to="/about" className="btn btn-lg home-description__btn">
            Scopri di pi&ugrave;
          </Link>
        </div>
        <img
          src={homeDescriptionImage}
          alt=""
          className="home-description__image"
        />
      </div>
    </section>
  );
}

export default HomeDescription;
