// ContactForm.jsx
"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css"; // create this file for custom styling

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",   // Replace with your actual ID
        "your_template_id",  // Replace with your actual ID
        form.current,
        "your_public_key"    // Replace with your actual Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Try again.");
          console.error(error.text);
        }
      );
  };

  return (
    <section className="contact-form-wrapper">
      <h2 className="form-title">Your Contact Information:</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input type="text" name="user_name" placeholder="Full Name" required />
        <input type="email" name="user_email" placeholder="Email Address" required />
        <input type="text" name="event_date" placeholder="Event Date" required />
        <input type="text" name="location" placeholder="Event Location" required />
        <textarea name="message" placeholder="Your Message" rows="4" required />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
