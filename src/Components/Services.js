import React from "react";
import homelogo from "./images/house logo.png";
import sellogo from "./images/money logo.png";
import rentlogo from "./images/rent logo.png";
import "./services.css";

const Services = () => {
  return (
    <div className="servicespagefull">
      <div className="servicespage">
        <div className="headingdiv">
          <h1 style={{ cursor: "default" }}>
            Our <span style={{ color: "rgb(50, 164, 230)" }}>Excellent</span>{" "}
            <br /> Services
          </h1>
        </div>
        <div className="cards" style={{ cursor: "default" }}>
          <div className="card">
            <div className="logodiv">
              <img src={homelogo} alt="logo" />
            </div>
            <h2>Buying</h2>
            <p>
              Looking to buy a home? HomeFind can help you find the perfect
              property for your needs and budget. We have a wide variety of
              homes for sale.
            </p>
          </div>
          <div className="card">
            <div className="logodiv">
              <img src={sellogo} alt="logo" />
            </div>
            <h2>Selling</h2>
            <p>
              Looking to buy a home? HomeFind can help you find the perfect
              property for your needs and budget. We have a wide variety of
              homes for sale.
            </p>
          </div>
          <div className="card">
            <div className="logodiv">
              <img src={rentlogo} alt="logo" />
            </div>
            <h2>Renting</h2>
            <p>
              Looking for a place to rent? HomeFind can help you find the
              perfect rental for your needs. We have a wide variety of rental
              properties available.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
