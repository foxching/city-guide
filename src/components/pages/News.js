import React, { useContext } from "react";
import { InfoContext } from ".././context";
import NewsCard from "../NewsCard";

const News = () => {
  const { news } = useContext(InfoContext);

  return (
    <div>
      {news.map((news) => (
        <NewsCard key={news.id} news={news} />
      ))}
    </div>
  );
};

export default News;
