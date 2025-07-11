import React from "react";
import "./OurPromise.css";
import promiseImage from "../assets/promis.jpg"; // update path if needed

const OurPromise = () => {
  const scrollToContact = () => {
  const el = document.getElementById("contact");
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <section className="our-promise-section">
      <div className="overlay" />
      <div className="promise-container">
        <div className="promise-image">
          <img src={promiseImage} alt="Our Promise" />
        </div>

        <div className="promise-content">
          <h2>My Promise to You</h2>
          <ul>
            <li>Coordinate with your event team and staff to ensure delivery of your vision</li>
            <li>Keep everyone updated on what is happening at the event</li>
            <li>Keep the event timely and free-flowing</li>
            <li>Create a fun and energetic atmosphere, keeping audience engaged</li>
            <li>Make sure guests feel respected and accommodated</li>
            <li>Make guests feel secure by promptly addressing any concerns or issues that may arise</li>
            <li>Keep the focus on you and the guests</li>
            <li>Create an enjoyable customer experience</li>
            <li>Live streaming of your event — this will amplify the experience</li>
          </ul>

          <button onClick={scrollToContact} className="book-btn">Book Us Now</button>
        </div>
      </div>
    </section>
  );
};

export default OurPromise;
