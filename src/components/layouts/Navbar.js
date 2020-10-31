import React from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../logo.svg";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <Link className="navbar-brand ml-5" to="/">
        <img src={logo} alt="logo" style={{ width: "35px" }} />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span>
          <i className="fas fa-bars" style={{ color: "white" }}></i>
        </span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto">
          <li className="nav-item active">
            <NavLink to="/" className="nav-link text-white text-uppercase ml-5">
              Home&nbsp;<i className="fas fa-home"></i>{" "}
              <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/news"
              className="nav-link text-white text-uppercase ml-5"
            >
              News
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className="nav-link text-white text-uppercase ml-5"
            >
              contact us
            </NavLink>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-primary my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
