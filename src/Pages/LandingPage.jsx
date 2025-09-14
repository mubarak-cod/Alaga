"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight, Phone, Mail } from "lucide-react";
import "./LandingPage.css";

const slides = [
  {
    heading: "The Heart of Tradition",
    text: "An Alaga isn’t just a host – she’s the heartbeat of your celebration, weaving culture and grace into every moment.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1754906739/alaga1.png",
  },
  {
    heading: "Prayer & Blessings",
    text: "From heartfelt prayers to joyful chants, the Alaga sets the tone for blessings that last a lifetime.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1754906739/alaga2.png",
  },
  {
    heading: "Cultural Storyteller",
    text: "She carries heritage in her voice – connecting families, uniting spirits, and honoring tradition.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1754906739/alaga3.png",
  },
  {
    heading: "Legacy in Every Word",
    text: "For an unforgettable event, you need more than music – you need an Alaga who understands legacy and culture.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1754906739/alaga4.png",
  },
  {
    heading: "Celebrate with Dignity",
    text: "With poise, respect, and rhythm, the Alaga ensures your day is joyful, structured, and forever memorable.",
    image: "https://res.cloudinary.com/dpsxbuxkr/image/upload/v1754906739/alaga5.png",
  },
];

const variants = {
  enter: { opacity: 0, x: 100 },
  center: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -100, transition: { duration: 0.6 } },
};

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // auto-slide every 10s
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="landing-container">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          className="slide"
        >
          {/* Left Side (Text) */}
          <div className="slide-text">
            <h1>{slides[index].heading}</h1>
            <p>{slides[index].text}</p>

            <div className="cta-buttons">
              <button onClick={() => navigate("/Contactform#book")} className="alaga-button">
                <Phone className="w-5 h-5" />
                Book Us Now
              </button>
              <button onClick={() => navigate("/Contactform#contact")} className="alaga-button-secondary">
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
            </div>

            {/* Prev / Next just icons */}
            <div className="slide-controls">
              <button onClick={handlePrev} className="alaga-nav-btn">
                <ArrowLeft className="w-6 h-6" />
              </button>
              <button onClick={handleNext} className="alaga-nav-btn">
                <ArrowRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Right Side (Image) */}
          <div className="slide-image">
            <img src={slides[index].image} alt={slides[index].heading} />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
