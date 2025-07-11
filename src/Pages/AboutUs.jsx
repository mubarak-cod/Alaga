import React from "react";
import "./AboutUs.css";
import aboutImg from "../assets/about.jpg"; // replace with your actual image path

const AboutUs = () => {
  return (
    <div className="aboutus-page">
      <div className="aboutus-hero">
        <img src={aboutImg} alt="About Us" className="aboutus-image" />
        <div className="aboutus-overlay">
          <h1>About Us</h1>
          <p>Bringing Excellence, Energy & Elegance to Your Special Moments</p>
        </div>
      </div>

      <div className="aboutus-content">
        <h2>Who We Are</h2>
        <p>
          At Sinclair Master of Ceremonies Inc, we don’t just host events – we
          create experiences. Based in Long Island, New York, we’ve become a
          trusted name in the world of professional event hosting. With our
          founder, Jessica Sinclair — also known as the “Lit MC” — at the
          forefront, we’ve redefined what it means to entertain and engage.
        </p>

        <h2>What We Do</h2>
        <p>
          From weddings to corporate functions, we provide top-tier MC services
          that ensure your event is smooth, exciting, and unforgettable. We
          bring coordination, charisma, and a crowd-first mindset to every
          gathering.
        </p>

        <h2>Why Choose Us</h2>
        <ul>
          <li>✔️ Energetic, engaging, and elegant hosting</li>
          <li>✔️ Experienced in multicultural and international events</li>
          <li>✔️ Personalized planning and coordination</li>
          <li>✔️ Award-winning customer experience</li>
          <li>✔️ A professional MC who’s also your hype woman and bestie</li>
        </ul>

        <div className="aboutus-cta">
          <button>Book Us Now</button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
