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
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757844236/image_xhxelr.png",
  },
  {
    heading: "Prayer & Blessings",
    text: "From heartfelt prayers to joyful chants, the Alaga sets the tone for blessings that last a lifetime.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757844286/image_evlhah.png",
  },
  {
    heading: "Cultural Storyteller",
    text: "She carries heritage in her voice – connecting families, uniting spirits, and honoring tradition.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757844395/image_ucyxam.png",
  },
  {
    heading: "Legacy in Every Word",
    text: "For an unforgettable event, you need more than music – you need an Alaga who understands legacy and culture.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757844438/image_zg4xvi.png",
  },
  {
    heading: "Celebrate with Dignity",
    text: "With poise, respect, and rhythm, the Alaga ensures your day is joyful, structured, and forever memorable.",
    image: "https://res.cloudinary.com/dgznrfgvc/image/upload/v1757844514/image_akkpyq.png",
  },
];

const variants = {
  enter: { opacity: 0, x: 50 },
  center: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.6 } },
};

const LandingPage = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => setIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 10000); // auto change every 10s
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
          className="slide-background"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          {/* Overlay */}
          <div className="overlay" />

          {/* Content */}
          <div className="slide-text">
            <h1>{slides[index].heading}</h1>
            <p>{slides[index].text}</p>

            <div className="cta-buttons">
              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="alaga-button"
              >
                <Phone size={18} />
                Book Us Now
              </button>

              <button
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="alaga-button-secondary"
              >
                <Mail size={18} />
                Contact Us
              </button>

            </div>

            {/* Prev / Next */}
            <div className="slide-controls">
              <button onClick={handlePrev} className="alaga-nav-btn">
                <ArrowLeft size={20} />
              </button>
              <button onClick={handleNext} className="alaga-nav-btn">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default LandingPage;
