import React from "react";
import "./contact.css";
import cardbgimg from "./images/contactbg.jpg";
import agentimg from "./images/potrait.jpg";

const contact = () => {
  return (
    <div className="contactpage">
      <div className="conleftside" data-aos="fade-right">
        <div
          className="coninerleft"
          style={{
            backgroundImage: `url(${cardbgimg})`,
            backgroundSize: "cover",
          }}
        >
          <div className="conlefttiltdiv">
            <div className="agentpic">
              <img src={agentimg} alt="Agent's Image" />
            </div>
            <p className="agentname">Dianne Russell</p>
            <p className="agentdesc">
              More than 20 years of experience in the field Real estate and has
              worked with clients up to 100+
            </p>
          </div>
        </div>
      </div>
      <div className="contactright" data-aos="fade-left">
        <h1 style={{ cursor: "default" }}>
          Meet and talk with our best real estate agent
        </h1>
        <p style={{ cursor: "default" }}>
          Our experienced real estate agent will guide you through the entire
          home buying, selling, or renting process, regardless of your level of
          knowledge. We will work with you to understand your needs and goals,
          and we will provide you with the expert advice and support you need to
          achieve your real estate goals.
        </p>
        <div className="contbuttondiv">
          <button className="shine7">Contact</button>
        </div>
      </div>
    </div>
  );
};

export default contact;
