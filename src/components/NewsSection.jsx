import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import { Link } from "react-router-dom";
import { AppContext } from "../App";

import { parseItalianMonth } from "../utils/utils";

function NewsSection({ reference, height }) {
  const { news } = useContext(AppContext);

  return (
    <div
      className="home-square home-square--news home-artist"
      ref={reference}
      style={{ height }}
    >
      <h3 className="home-artist__title  text-uppercase ">News</h3>
      <div className="home-artist__text-container">
        {news && news.length > 0
          ? news.map((newsPost) => {
              const { date: stringDate } = newsPost;

              const initialDate = new Date(stringDate);
              const date = new Date();
              date.setTime(initialDate);

              const title = newsPost.title.rendered;

              return (
                <div className="new" key={uuidv4()}>
                  <span className="new__date">
                    {date.getDate()}
                    &nbsp;{parseItalianMonth(date.getMonth() + 1)}
                  </span>
                  <span
                    className="new__text"
                    dangerouslySetInnerHTML={{ __html: title }}
                  ></span>
                </div>
              );
            })
          : "LOADING"}
        <Link
          to="/news"
          className="btn home-artist__btn news-section__btn text-uppercase text-dark btn-lg mt-3"
        >
          VIEW ALL
        </Link>
      </div>
    </div>
  );
}

export default NewsSection;
