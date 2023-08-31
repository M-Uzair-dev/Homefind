import React, { useState } from "react";
import "./properties.css";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

const Services = () => {
  const [data, setData] = useState([
    {
      title: "Amazing archetectual House",
      price: "2.5Cr Pkr",
      location: "Baldia town, Karachi",
      image: image1,
    },
    {
      title: "Corner house with amazing location",
      price: "85.3Lac Pkr",
      location: "Saddar, Karachi",
      image: image2,
    },
    {
      title: "Beautiful Home with big area",
      price: "1.7Cr Pkr",
      location: "Bahria Town, Karachi",
      image: image3,
    },
    {
      title: "Multi story House with amazing design",
      price: "3.5Cr Pkr",
      location: "Defence, Karachi",
      image: image4,
    },
    {
      title: "Big home with big open garden",
      price: "2Cr Pkr",
      location: "Bahria town, Karachi",
      image: image5,
    },
    {
      title:
        "Modern home with minimal and Sleek design Modern home with minimal and Sleek designModern home with minimal and Sleek design",
      price: "4Cr Pkr 4Cr Pkr4Cr Pkr4Cr Pkr4Cr Pkr4Cr Pkr4Cr Pkr4Cr Pkr4Cr Pkr",
      location:
        "Saddar, Karachi Saddar, KarachiSaddar, KarachiSaddar, KarachiSaddar, KarachiSaddar, KarachiSaddar, KarachiSaddar, Karachi",
      image: image6,
    },
  ]);
  return (
    <div className="propertiespage">
      <div className="headingdiv">
        <h1>
          Available{" "}
          <span style={{ color: "rgb(50, 164, 230)" }}>Properties</span>
        </h1>
      </div>
      <div className="propertycards">
        {data.map((e, i) => {
          return (
            <div className="property">
              <div className="imagecontainer">
                <img src={e.image} alt="cardimage" />
              </div>
              <div className="textcotainer">
                <div className="titlecontainer">
                  <strong>
                    <p className="title">{e.title}</p>
                  </strong>
                </div>
                <div className="linecontainer">
                  <p className="location">{e.location}</p>
                </div>
                <div className="linecontainer">
                  <h3>{e.price}</h3>
                </div>
              </div>
            </div>
          );
        })}
        <button className="shine4">Browse More</button>
      </div>
    </div>
  );
};

export default Services;
