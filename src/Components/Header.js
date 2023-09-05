import React from "react";
import "./header.css";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseClick = () => {
    setIsMenuOpen(false);
  };
  return (
    <div className="navbar">
      <div className="leftside">
        <h1 className="logo">
          <span>PROPERTY</span>SEEKERS
        </h1>
      </div>
      <div className="rightsidebig rightside">
        <ul className="list">
          <li className="li">HOME</li>
          <li className="li">ABOUT</li>
          <li className="li">SERVICES</li>
          <li className="li">CONTACT</li>
          <li className="li">SOURCE</li>
        </ul>
        <button className="shine">LOGIN</button>
        <div className="closebutton">
          <CloseIcon fontSize="large" onClick={handleCloseClick} />
        </div>
      </div>
      <div
        className="rightside"
        style={{
          right: isMenuOpen ? "0" : "-60vw",
          display: isMenuOpen ? "flex" : "none",
        }}
      >
        <ul className="list">
          <li className="li">HOME</li>
          <li className="li">ABOUT</li>
          <li className="li">SERVICES</li>
          <li className="li">CONTACT</li>
          <li className="li">SOURCE</li>
        </ul>
        <button className="shine">LOGIN</button>
        <div className="closebutton">
          <CloseIcon fontSize="large" onClick={handleCloseClick} />
        </div>
      </div>
      <div className="menu" onClick={handleMenuClick}>
        <MenuIcon fontSize="large" />
      </div>
    </div>
  );
};

export default Header;
