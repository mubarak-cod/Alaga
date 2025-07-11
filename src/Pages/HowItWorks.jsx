import React, { useEffect } from "react";
import "./HowItWorks.css";

const steps = [
  {
    title: "1. Book a Consultation",
    description:
      "Reach out to discuss your event details, vision, and how we can best serve you. We’ll answer your questions and walk you through our process.",
  },
  {
    title: "2. Personalize Your Program",
    description:
      "We’ll work closely with you to design a ceremony or event flow that aligns with your culture, preferences, and goals.",
  },
  {
    title: "3. Day-Of Coordination",
    description:
      "Leave the execution to us. From start to finish, we guide your event, ensure seamless transitions, and keep everything flowing beautifully.",
  },
  {
    title: "4. Memorable Experience",
    description:
      "Your guests will stay engaged and entertained while you stay relaxed and celebrated. Expect an energetic, elegant, and unforgettable experience.",
  },
];

const HowItWorks = () => {
  useEffect(() => {
    const observers = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = document.querySelectorAll(".step");
    elements.forEach(el => observers.observe(el));
  }, []);

  return (
    <section className="howitworks-container">
      <h1 className="howitworks-title">How It Works</h1>
      <div className="steps-wrapper">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-number">{step.title}</div>
            <p className="step-description">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
