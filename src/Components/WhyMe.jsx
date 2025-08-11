import React, { useEffect } from "react";
import "./WhyMe.css";

const WhyMe = () => {
  useEffect(() => {
    // Load Instagram embed script after component mounts
    const script = document.createElement("script");
    script.setAttribute("src", "https://www.instagram.com/embed.js");
    script.setAttribute("async", "");
    script.setAttribute("defer", "");
    document.body.appendChild(script);
  }, []);

  return (
    <section className="whyme-container">
      <div className="whyme-text">
        <h2>Why Choose Me?</h2>
        <p>
          If you thought planning an event was hard, try keeping your guests off of their phones and engaged throughout the event! How exhausting, right? Well, leave it to Fashola Alaga. Sinclair Master of Ceremonies Inc is an award-winning event hosting company located in Lagos state, Nigeria.
        </p>
        <p>
          Fashola Alaga master of Ceremonies Inc is a one-of-a-kind Master of Ceremony Service. I provide events with excellent day-of coordination & facilitation, executing your event with style and grace.
        </p>
        <p>
          My commitment to excellence is crucial to achieving successful outcomes. I strive to ensure your event goals are met well beyond your expectations. I offer a versatile and high-quality service that caters to the needs of all individuals involved. I will work with you to make your event stand out.
        </p>
      </div>

      <div className="whyme-video">
        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/reel/DK7sPa3sSpW/"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            margin: "1rem auto",
            maxWidth: "400px",
            width: "100%",
          }}
        ></blockquote>
      </div>
    </section>
  );
};

export default WhyMe;
