import React from "react";
import "./MeetOwner.css";
import ownerImage from "../assets/owner.jpg"; // make sure the image exists in this path

const MeetOwner = () => {
  return (
    <section className="meet-owner-section">
      <div className="meet-owner-container">
       

        <div className="owner-content">
          <h2>Meet the Owner</h2>
          <h3>Olubukola Mary</h3>
          {/* <p className="quote">
            “Think of me as your event bestie — I see it, I handle it, I’ll always have your best interest in mind.”
          </p> */}

          <h4>✨ Fun Facts & Highlights</h4>
          <ul>
            <li>The “Lit MC” is what my clients call me. The name kind of stuck over the years.</li>
            <li>Before hosting, I spent a few years as a publicist in Lagos</li>
            <li>I am truly a Jackie of all Trades and I love thinking outside of the box.</li>
            <li>Avid Traveler: I’ve loved Africa, Greece, Italy, Costa Rica, and Amsterdam.</li>
            <li>I love networking and creating positive energy.</li>
            {/* <li>I’m a registered nurse — caring and advocating for others is my calling.</li> */}
            <li>Youngest of three children — I know a thing or two about commanding attention.</li>
            <li>Awarded “Couples Choice” Master of Ceremony by Wedding Wire.</li>
            {/* <li>BA in Media & Communications — voice crisp, loud (thanks to my Jamaican mom), and warm.</li> */}
            <li>Blessed to work with some of the best couples!</li>
          </ul>

          <h4>🎤 What to Expect</h4>
          <ul>
            <li>A wedding reception crafted just for YOU.</li>
            <li>I care about your outcome — this isn’t a DJ add-on.</li>
            <li>From start to finish, expect 200% dedication.</li>
            <li>Sit back, relax, and enjoy the event — or meet me on the dance floor!</li>
            <li>High frequency, energetic energy, humor + poise.</li>
            <li>Inviting personality, leader + team player.</li>
          </ul>
        </div>

         <div className="owner-image">
          <img src={ownerImage} alt="Jessica Sinclair" />
        </div>
      </div>
    </section>
  );
};

export default MeetOwner;
