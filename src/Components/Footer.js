import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footerdiv">
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col">
              <h4 style={{ cursor: "default" }}>PropertySeekers</h4>
              <ul>
                <li>
                  <a>About Us</a>
                </li>
                <li>
                  <a>Our Services</a>
                </li>
                <li>
                  <a>Browse Properties</a>
                </li>
                <li>
                  <a>Contact us</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ cursor: "default" }}>get help</h4>
              <ul>
                <li>
                  <a>FAQ</a>
                </li>
                <li>
                  <a>Team</a>
                </li>
                <li>
                  <a>Projects</a>
                </li>
                <li>
                  <a>Operating dates</a>
                </li>
                <li>
                  <a>Ongoing projects</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ cursor: "default" }}>Other services</h4>
              <ul>
                <li>
                  <a>Building</a>
                </li>
                <li>
                  <a>Renovating</a>
                </li>
                <li>
                  <a>Buying</a>
                </li>
                <li>
                  <a>Selling</a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 style={{ cursor: "default" }}>follow us</h4>
              <div className="social-links">
                <a>
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a>
                  <i className="fab fa-twitter"></i>
                </a>
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
                <a>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
