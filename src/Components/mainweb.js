import React from "react";
import About from "./About";
import Header from "./Header";
import Mainpage from "./Mainpage";
import Services from "./Services";
import Properties from "./Properties";
import Sell from "./Sell";
import Contact from "./Contactpage";

const Mainweb = () => {
  return (
    <>
      <Header />
      <Mainpage />
      <About />
      <Services />
      <Properties />
      <Sell />
      <Contact />
    </>
  );
};

export default Mainweb;
