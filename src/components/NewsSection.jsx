import React from "react";
import { v4 as uuidv4 } from "uuid";

import { news } from "../content/fake-db";

import { parseItalianMonth } from "../utils/utils";

function NewsSection({ reference, height }) {
  return (
    <div
      className="home-square home-square--news home-artist"
      ref={reference}
      style={{ height }}
    >
      <h3 className="home-artist__title  text-uppercase ">News</h3>
      <div className="home-artist__text-container">
        {news.map(({ date, title }) => {
          return (
            <div className="new" key={uuidv4()}>
              <span className="new__date">
                {date.getDate()}
                &nbsp;{parseItalianMonth(date.getMonth() + 1)}
              </span>
              <span className="new__text">{title}</span>
            </div>
          );
        })}
        <a
          href="/news"
          className="btn home-artist__btn news-section__btn text-uppercase text-dark btn-lg mt-3"
        >
          VIEW ALL
        </a>
      </div>
    </div>
  );
}

export default NewsSection;
