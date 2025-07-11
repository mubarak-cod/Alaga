import React from "react";
import "./WhatWeDo.css";
import bgImage from "../assets/image.png"; // make sure this exists

const WhatWeDo = () => {
  return (
    <section
      className="what-we-do"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="overlay" />
      <div className="content">
        <h2>What We Do</h2>
        <p>
          Create an unforgettable experience by making sure events are
          facilitated with precise execution. We meet with you and your event
          team to create a detailed program tailored for your needs and customs.
        </p>
        <button className="book-btn">Book Us Now</button>
      </div>
    </section>
  );
};

export default WhatWeDo;
