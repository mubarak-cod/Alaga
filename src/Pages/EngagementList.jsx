import React, { useEffect } from "react";
import "./EngagementList.css";

const items = [
  "Introduction of Families",
  "Presentation of Gifts",
  "Exchange of Engagement Rings",
  "Reading of Traditional Letter",
  "Breaking of Kolanut / Sharing Wine",
  "Prayers & Blessings",
  "Dance and Entertainment",
  "Closing Remarks",
];

const EngagementList = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll(".engagement-item");
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="engagement-section">
      <div className="overlay" />
      <div className="engagement-content">
        <h1 className="title">Traditional Engagement Checklist</h1>
        <p className="subtitle">
          A well-prepared engagement sets the tone for a memorable event. Here's a curated list of must-haves for your big day.
        </p>
        <ul className="engagement-list">
          {items.map((item, index) => (
            <li key={index} className="engagement-item">
              <span className="dot" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default EngagementList;
