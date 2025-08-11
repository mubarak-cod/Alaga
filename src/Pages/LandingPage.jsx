import React, { useEffect, useState } from "react";
import "./LandingPage.css";
// import alaga from "../assets/alaga2_3.mp4";

const messages = [
  "An Alaga isn't just a host – she's the soul of your celebration, guiding every moment with grace and rhythm.",
  "From heartfelt prayers to joyful chants, she weaves tradition into every second of your event.",
  "She doesn't just speak – she connects hearts, uplifts spirits, and sets the atmosphere ablaze with culture.",
  "For an event that lingers in memories, you need more than a mic – you need an Alaga who understands legacy.",
];

const LandingPage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000); // Change every 5s for better readability
    return () => clearTimeout(timeout);
  }, [index]);

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        fontFamily: "'Poppins', sans-serif",
      }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: -2,
        }}
      >
        <source src="https://res.cloudinary.com/dpsxbuxkr/video/upload/v1754906739/alaga2_3_lqmrm8.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.55)",
          zIndex: -1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 0,
          color: "white",
          textAlign: "center",
          paddingTop: "35vh",
          paddingLeft: "10vw",
          paddingRight: "10vw",
          fontSize: "1.3rem",
          fontWeight: "500",
          minHeight: "7rem",
        }}
      >
        <div className="fade-in-slide" key={index}>
          {messages[index]}
        </div>

        {/* CTA Button */}
        <button
          className="alaga-button"
          onClick={() => {
            const contact = document.getElementById("contact");
            if (contact) {
              contact.scrollIntoView({ behavior: "smooth" });
            }
          }}
        >
          Book an Alaga
        </button>
      </div>
    </div>
  );
};

export default LandingPage;
