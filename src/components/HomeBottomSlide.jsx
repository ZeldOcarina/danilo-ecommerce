import React from "react";

function HomeBottomSlide({ image, title, description, url }) {
  return (
    <div className="slide bottom-slide">
      <img src={image} alt="Placeholder" className="bottom-slide__image mb-2" />
      <h4 className="slide__title text-white mb-2">{title}</h4>
      <p
        className="slide__description text-white"
        dangerouslySetInnerHTML={{ __html: description }}
      ></p>
      <a
        href={url}
        className="btn btn-lg mt-1 btn-outline-light bottom-slide__buy"
      >
        BUY NOW
      </a>
    </div>
  );
}

export default HomeBottomSlide;
