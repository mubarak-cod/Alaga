// ContactForm.jsx
// "use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { X } from "lucide-react";
import "./ContactForm.css"; // create this file for custom styling
// import react from "@vitejs/plugin-react-swc";

const ContactForm = () => {
    // const showMaintenance = false;
    const [showMaintenance, setShowMaintenance] = useState(false)
  const form = useRef();

  const handleMaintenance = () => {
      setShowMaintenance(true)
  }
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2h1m3sw",  
        "template_e0tznir", 
        form.current,
        "BVMhPkH1WmTCQ-O5a"   
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          // alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-form-wrapper">
{showMaintenance && (
  <div className="maintenance-overlay">
    <X className="close-icon" onClick={() => setShowMaintenance(false)} />
    
    <div className="maintenance-lottie">
      <DotLottieReact
        src="https://lottie.host/823e2d1d-2916-44bf-b3a6-4ec99fc00a49/KvokVSkIuc.lottie"
        autoplay
        loop
      />
    </div>

    <div className="maintenance-text">
      <h1>App in maintenance</h1>
      <p>Our team is currently working on this.</p>
    </div>
  </div>
)}


      <h2 className="form-title">Your Contact Information:</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="firstname" placeholder="Full Name" required />
        <input type="email" name="email" placeholder="Email Address" required />
        <input type="text" name="event_date" placeholder="Event Date" required />
        <input type="text" name="location" placeholder="Event Location" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button onClick={handleMaintenance} type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
