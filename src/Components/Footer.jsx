import React from "react";
import "./Footer.css";
import logo from "../assets/logo.jpg";
import { Facebook, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo */}
        <div className="footer-logo">
          <img src={logo} alt="Logo" />
          <p>Alaga Event Services</p>
        </div>

        {/* Navigation */}
        <div className="footer-nav">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        {/* Socials */}
        <div className="footer-socials">
          <a href="#"><Facebook size={18} /></a>
          <a href="#"><Instagram size={18} /></a>
          <a href="mailto:you@example.com"><Mail size={18} /></a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Alaga MC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
