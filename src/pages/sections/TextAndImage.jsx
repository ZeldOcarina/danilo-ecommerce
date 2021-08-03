import React from "react";

import { Link } from "react-router-dom";

function TextAndImage({ aboutPage, title, content, image }) {
  return (
    <section
      className={
        aboutPage ? "text-and-image text-and-image--about" : "text-and-image"
      }
    >
      <div className="container text-and-image__container">
        <div className="text-and-image__left-container">
          <h2 className="text-and-image__title">{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }}></div>
          {!aboutPage && (
            <Link to="/about" className="btn btn-lg text-and-image__btn">
              Scopri di pi&ugrave;
            </Link>
          )}
        </div>
        <img src={image} alt="" className="text-and-image__image" />
      </div>
    </section>
  );
}

export default TextAndImage;
