import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import NewsPost from "../components/NewsPost";

import { AppContext } from "../App";

function NewsPage() {
  const {
    appData: { news },
  } = useContext(AppContext);

  return (
    <main className="news-page">
      <div className="container news-page__container">
        {news.map((newsPost) => {
          console.log(newsPost);
          return <NewsPost {...newsPost} key={uuidv4()} />;
        })}
      </div>
    </main>
  );
}

export default NewsPage;
