import React from "react";
import "./sell.css";
import sellimage from "./images/sellimg.png";

const Sell = () => {
  return (
    <div className="sellpagefull">
      <div className="sellpage">
        <div className="sellimage">
          <img src={sellimage} alt="sellimg" />
        </div>
        <div className="sellcontent">
          <h1 style={{ cursor: "default" }}>Selling your Property ?</h1>
          <p style={{ cursor: "default" }}>
            Are you thinking of selling your home? PropertySeekers is the best
            place to start. Our team of experienced real estate agents will work
            with you every step of the way to get the best possible price for
            your home. We know the market inside and out, and we'll use our
            expertise to market your home to the right buyers. We'll also
            negotiate on your behalf to get you the highest possible offer.We
            have a proven track record of success. We've helped thousands of
            homeowners sell their homes for top dollar. We're experts in the
            local market, and we know what buyers are looking for and how to
            price your home to attract the most interest. We're committed to
            providing you with excellent customer service. We'll be there every
            step of the way to answer your questions and make sure the sale goes
            smoothly.
          </p>
          <div className="buttondiv">
            <button className="shine6">Start the Selling Process</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
