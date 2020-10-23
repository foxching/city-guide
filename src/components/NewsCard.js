import React from "react";
import { Link } from "react-router-dom";

const NewsCard = (props) => {
  const { newsTitle, newsText } = props.news;

  return (
    <div className="card container mt-2 mb-3 p-5">
      <div className="card-body">
        <h5 className="card-title">{newsTitle}</h5>
        <p className="card-text">{newsText}</p>
        <Link to="/" className="card-link">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
