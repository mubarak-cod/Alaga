import React from "react";
import {
  Facebook,
  Instagram,
  Phone,
  Mail,
} from "lucide-react";
import "./BookNowSection.css";

const contacts = [
  {
    icon: <Facebook size={28} />,
    label: "FACEBOOK",
    subtext: "Jessica Sinclair",
    action: "Follow Us",
  },
  {
    icon: <Instagram size={28} />,
    label: "INSTAGRAM",
    subtext: "It's Jessica Sinclair",
    action: "Follow Us",
  },
  {
    icon: <Phone size={28} />,
    label: "PHONE",
    subtext: "(516) 603-5667",
  },
  {
    icon: <Mail size={28} />,
    label: "E-MAIL",
    subtext: "info@sinclairmasterofceremonies.com",
  },
];

const BookNowSection = () => {
  return (
    <section className="book-now-section">
      <div className="overlay" />
      <div className="content">
        <h2 className="heading">BOOK NOW!</h2>
        <div className="underline" />
        <p className="description">
          Thank You for Your Interest and We Hope to be a Part of Your Next Special Occasion. Contact Us Below!
        </p>

        <div className="contact-grid">
          {contacts.map((item, idx) => (
            <div key={idx} className="contact-card">
              <div className="icon-circle">{item.icon}</div>
              <div className="label">{item.label}</div>
              <div className="subtext">{item.subtext}</div>
              {item.action && <div className="action">{item.action}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BookNowSection;
