import React, { useState, useEffect } from "react";
import axios from "axios";

import newsConstants from "../../constants/newsConstants";

const News = () => {
  const [news, setNews] = useState(null);

  const getNews = async () => {
    try {
      const res = await axios.get(
        newsConstants.baseUrl +
          newsConstants.country +
          newsConstants.categoryUrl +
          newsConstants.category +
          newsConstants.pageSizeUrl +
          newsConstants.pageSize +
          newsConstants.suffix +
          import.meta.env.VITE_NEWS_API
      );
      setNews(res.data.articles);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div className="inner">
      {news ? (
        <div className="col">
          {news.map(({ title, url }) => (
            <a
              key={title}
              className="text text-md text-link text-no-line"
              href={url}
              target="_blank"
            >
              {title}
            </a>
          ))}
        </div>
      ) : (
        <>
          <p className="text text-lg text-error">Could not fetch the news</p>
        </>
      )}
    </div>
  );
};

export default News;
