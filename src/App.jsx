import { useEffect, useState } from "react";
import "@fontsource/poppins";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

import LandingPage from "./Pages/LandingPage";
import AboutUs from "./Pages/AboutUs";
import HowItWorks from "./Pages/HowItWorks";
import WhyMe from "./Components/WhyMe";
import OurPromise from "./Components/OurPromise";
import MeetOwner from "./Components/MeetOwner";
import WhatWeDo from "./Components/WhatWeDo";
import PhotoGallery from "./Components/PhotoGallery";
import TestimonialSection from "./Components/TestimonialSection";
import BookNowSection from "./Components/BookNowSection";
import ContactForm from "./Components/ContactForm";

import EngagementList from "./Pages/EngagementList";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time (e.g., fetching or assets)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200); // show loader for 1.2s minimum

    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <WhyMe />
              <OurPromise />
              <MeetOwner />
              <WhatWeDo />
              <PhotoGallery />
              <TestimonialSection />
              <BookNowSection />
              <section id="contact">
                <ContactForm />
              </section>
            </>
          }
        />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/engagement-list" element={<EngagementList />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
