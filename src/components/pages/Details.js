import React, { useContext } from "react";
import styled from "styled-components";
import { InfoContext } from "../context";

import Reviews from "../Reviews";

const Details = () => {
  const { detailInfo } = useContext(InfoContext);
  return (
    <>
      <HeaderDetails className="container-fluid align-items-center">
        <h1 className="display-1 font-wieght-bold">{detailInfo.headerTitle}</h1>
        <h4 className="display-5 ">{detailInfo.headerSubTitle}</h4>
        <p>{detailInfo.headerText}</p>

        {/* Social Icons */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-2">
              <i className="fab fa-facebook-f"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-twitter"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-google-plus-g"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-reddit"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="col-2">
              <i className="fab fa-facebook-messenger"></i>
            </div>
          </div>
        </div>
      </HeaderDetails>

      <div className="container mb-5">
        {/* <!-- Nav Links --> */}
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#about">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#reviews">
              Reviews
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#map">
              Map
            </a>
          </li>
        </ul>

        {/* <!-- Tab panes --> */}
        <div className="tab-content">
          <div
            id="about"
            className="container tab-pane active text-center mt-5"
          >
            <h3 className="mb-3">{detailInfo.title}</h3>
            <p>{detailInfo.description}</p>
            <img
              src={detailInfo.img}
              alt={detailInfo.title}
              className="img-thumbnail img-fluid"
            />
          </div>
          <div id="reviews" className="container tab-pane fade">
            <Reviews />
          </div>
          <div id="map" className="container tab-pane fade">
            <iframe
              title="map"
              src={detailInfo.maps}
              style={{
                border: 0,
                height: "28.14rem",
                width: "100%",
                frameBorder: 0
              }}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Details;

const HeaderDetails = styled.header`
  background: linear-gradient(rgba(109, 109, 109), rgba(255, 255, 255));
  height: 100vh;
  text-transform: uppercase;
  color: var(--mainWhite);
  text-align: center;

  h1 {
    padding-top: 10%;
    color: var(--mainDark);
  }

  h4 {
    color: var(--mainDark);
  }

  p {
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10%;
    color: var(--mainDark);
  }

  i {
    font-size: 1.875rem;
    color: var(--mainDark);
  }

  i:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }

  .nav-item {
    height: 18.75rem;
  }

  @media (max-width: 760px) {
    h1,
    h4 {
      color: var(--mainWhite);
    }
  }
`;
