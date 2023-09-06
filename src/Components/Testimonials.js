import React from "react";
import "./testimonials.css";
import img1 from "./images/testimonialsimg1.png";
import img2 from "./images/testimonialsimg2.png";

const Testimonials = () => {
  return (
    <div className="testimonialspage">
      <div className="testimonialsdiv">
        <h1 className="testimonialstitle">
          What they say about{" "}
          <span style={{ color: "rgb(50, 164, 230)" }}>Us</span>
        </h1>
        <div className="testimonialscontainer" data-aos="zoom-out-down">
          <div className="testimonial1">
            <div className="testimagecont">
              <img className="testimage" src={img1} alt="pic1" />
            </div>
            <h2>Jacob Molen</h2>
            <p>
              I was so impressed with the level of service I received from
              PropertySeekers. They were always available to answer my
              questions, and they went above and beyond to help me find the
              perfect home. I would highly recommend them to anyone looking to
              buy or sell a home.
            </p>
          </div>
          <div className="testimonial2">
            <div className="testimagecont">
              <img className="testimage" src={img2} alt="pic2" />
            </div>
            <h2> Jane Doe</h2>
            <p>
              I was a first-time homebuyer, and I was really nervous about the
              process. But PropertySeekers made it so easy for me. They were
              patient and understanding, and they always put my needs first. I
              couldn't have done it without them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
