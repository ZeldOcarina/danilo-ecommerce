import React from "react";

import { parseItalianMonth } from "../utils/utils";

function NewsPost({ newsPost }) {
  const { date: stringDate, author, image, alt } = newsPost;

  const initialDate = new Date(stringDate);
  const date = new Date();
  date.setTime(initialDate);

  const title = newsPost.title.rendered;
  const content = newsPost.content.rendered;

  return (
    <div className="news-post">
      <img src={image} alt={alt} className="news-post__image" />
      <h3
        className="news-post__title"
        dangerouslySetInnerHTML={{ __html: title }}
      ></h3>
      <p className="news-post__author">
        Scritto da {author} | {date.getDate()}{" "}
        {parseItalianMonth(date.getMonth() + 1)} {date.getFullYear()}
      </p>
      <div
        className="news-post__text"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>
  );
}

export default NewsPost;
