import React from "react";
import { Link } from "react-router-dom";

const Info = (props) => {
  const { headerTitle, headerSubTitle, headerText, img, id } = props.info;
  const { handleDetail } = props;
  return (
    <div className="col-10 col-lg-4 mx-auto mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img src={img} alt={headerTitle} className="card-img-top" />
        <div className="card-body">
          <h3 className="card-title text-uppercase">{headerTitle}</h3>
          <h5 className="card-title">{headerSubTitle}</h5>
          <p className="card-text">{headerText}</p>
          <Link
            to="/details"
            onClick={() => handleDetail(id)}
            className="btn btn-outline-primary text-uppercase"
          >
            More Info
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Info;
