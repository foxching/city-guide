import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="my-3 py-5">
      <div className="container">
        <div className="well well-sm">
          <h3>
            <strong>Our Location</strong>
          </h3>
        </div>
        <div className="row">
          <div className="col-md-7">
            <iframe
              title="map"
              src="https://www.google.com/maps/d/embed?mid=1gFfB4iQZ87vcV3usW90czNCGObXiMgN_"
              style={{
                border: 0,
                width: "100%",
                height: "315px",
                frameBorder: "0"
              }}
              allowFullScreen
            ></iframe>
          </div>
          <div className="col-md-5">
            <h4>
              <strong>Contact Us</strong>
            </h4>
            <form>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="tel"
                  className="form-control"
                  placeholder="Telephone"
                />
              </div>
              <textarea
                className="form-control"
                cols="30"
                rows="3"
                placeholder="Comments"
              />
              <Link
                to="/"
                className="btn btn-outline-primary text-uppercase mt-2"
              >
                <i className="fa fa-papper-plane-0" aria-hidden="true" />
                <i className="fab fa-telegram-plane" />
                &nbsp; Send
              </Link>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
