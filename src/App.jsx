import { Suspense, lazy } from "react";
import "@fontsource/poppins";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Loader from "./Components/Loader";

// Lazy-loaded pages & components
const LandingPage = lazy(() => import("./Pages/LandingPage"));
const AboutUs = lazy(() => import("./Pages/AboutUs"));
const HowItWorks = lazy(() => import("./Pages/HowItWorks"));
const EngagementList = lazy(() => import("./Pages/EngagementList"));
const WhyMe = lazy(() => import("./Components/WhyMe"));
const OurPromise = lazy(() => import("./Components/OurPromise"));
const MeetOwner = lazy(() => import("./Components/MeetOwner"));
const WhatWeDo = lazy(() => import("./Components/WhatWeDo"));
const PhotoGallery = lazy(() => import("./Components/PhotoGallery"));
const TestimonialSection = lazy(() => import("./Components/TestimonialSection"));
const BookNowSection = lazy(() => import("./Components/BookNowSection"));
const ContactForm = lazy(() => import("./Components/ContactForm"));

function App() {
  return (
    <Router>
      <Header />
      <Suspense fallback={<Loader />}>
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
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;
