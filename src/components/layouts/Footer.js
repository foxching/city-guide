import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/* First Column */}
            <div className="col-md-3 col-sm-6">
              <h4>Contact Us</h4>
              <ul className="list-unstyled">
                <li>Tagbilaran City</li>
                <li>Bohol,Philipines</li>
                <li>Phone: 512-74526</li>
              </ul>
            </div>
            {/* Second Column */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
              </ul>
            </div>
            {/* third Column */}
            <div className="col-md-3 col-sm-6 ">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
              </ul>
            </div>
            {/* Fourth Column */}
            <div className="col-md-3 col-sm-6">
              <h4>Lorem ipsum</h4>
              <ul className="list-unstyled">
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
                <li>
                  <Link to="/">Lorem impsuim ashasas,as</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="text-xs-center ">
              &copy;{new Date().getFullYear()}City Guide App-All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 3rem;
    color: var(--mainWhite);
  }
  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  ul li a {
    color: var(--mainGrey);
  }

  ul li a:hover {
    color: var(--mainLightGrey);
  }
`;
