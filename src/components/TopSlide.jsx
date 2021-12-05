import React from "react";

function TopSlide({
  image,
  title,
  description,
  handleLeftClick,
  handleRightClick,
  handleShowInfo,
}) {
  return (
    <div className="slide">
      <img
        src={image}
        alt="Placeholder"
        className="featured-paintings__drawing"
      />
      <div className="slide__components">
        <div className="slide__buttons-container mb-2 sarabun d-flex">
          <span
            className="slide__button text-white me-4 d-block"
            onClick={handleLeftClick}
          >
            {"<"} LEFT
          </span>
          <span
            className="slide__button text-white d-block"
            onClick={handleRightClick}
          >
            RIGHT {">"}
          </span>
        </div>
        <h4 className="slide__title text-white mb-2">{title}</h4>
        <p
          className="slide__description text-white"
          dangerouslySetInnerHTML={{ __html: description }}
        ></p>
        <button
          className="slide__btn slide__btn--outline btn btn-outline-white btn-lg mt-1 me-md-3"
          onClick={() => handleShowInfo(title)}
        >
          RICHIEDI INFO
        </button>
      </div>
    </div>
  );
}

export default TopSlide;
