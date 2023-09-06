import React from "react";
import "./about.css";
import aboutimage from "./images/aboutimg.png";

const About = () => {
  return (
    <div className="aboutpagefull">
      <div className="aboutpage">
        <div className="aboutimage" data-aos="fade-right">
          <img src={aboutimage} alt="aboutimg" />
        </div>
        <div className="aboutcontent" data-aos="fade-left">
          <h1 style={{ cursor: "default" }}>ABOUT PropertySeekers</h1>
          <p style={{ cursor: "default" }}>
            <span style={{ color: "rgb(50, 164, 230)" }}>PropertySeekers</span>{" "}
            is a real estate agency dedicated to helping people find their dream
            homes. We are a team of experienced professionals with a passion for
            helping our clients achieve their goals. We understand that buying
            or selling a home is a big decision, and we are committed to making
            the process as smooth and stress-free as possible. Our goal is to
            provide our clients with the best possible service, from finding the
            right property to closing the deal. We will work with you every step
            of the way to ensure that you are happy with your decision. We are
            committed to giving back to our community, and we donate a portion
            of our profits to local charities. We are also members of the
            National Association of Realtors and the California Association of
            Realtors.
          </p>
          <div className="buttondiv">
            <button className="shine3">Browse Properties</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
