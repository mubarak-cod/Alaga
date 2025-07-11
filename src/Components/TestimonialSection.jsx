import React, { useEffect, useState } from "react";
import "./TestimonialSection.css";

const testimonials = [
  "“Sinclair made my wedding feel like a fairytale. Every guest was engaged and entertained.”",
  "“Professional, energetic, and truly unforgettable. The best MC we’ve ever worked with.”",
  "“She turned a stressful day into pure joy. We danced, we laughed — it was perfect.”",
  "“Our guests still talk about how interactive and warm she made the event feel.”",
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000); // Change testimonial every 4s

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="testimonial-section">
      <div className="testimonial-overlay" />
      <div className="testimonial-content">
        <h2 className="testimonial-heading">What Our Clients Are Saying</h2>
        <p className="testimonial-text animate-fade">{testimonials[index]}</p>
        <button className="testimonial-button">Book Us Now</button>
      </div>
    </section>
  );
};

export default TestimonialSection;
