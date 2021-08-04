import React, { useContext } from "react";
import { v4 as uuidv4 } from "uuid";

import NewsPost from "../components/NewsPost";

import { AppContext } from "../App";

function NewsPage() {
  const { news } = useContext(AppContext);

  return (
    <main className="news-page">
      <div className="container news-page__container">
        {news ? (
          news.map((newsPost) => {
            return <NewsPost newsPost={newsPost} key={uuidv4()} />;
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </main>
  );
}

export default NewsPage;
