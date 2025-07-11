import React from "react";
import { Facebook, Instagram, Phone, Mail } from "lucide-react";
import "./BookNowSection.css";

const contacts = [
  {
    icon: <Facebook size={28} />,
    label: "FACEBOOK",
    subtext: "Her EXCELLENCY Fashola Alaga",
    action: "Follow Us",
    url: "https://facebook.com/herexcellencyalaga", // ✅ Update with real FB URL
  },
  {
    icon: <Instagram size={28} />,
    label: "INSTAGRAM",
    subtext: "Her EXCELLENCY Fashola Alaga",
    action: "Follow Us",
    url: "https://www.instagram.com/fasholaalaga1?igsh=YzljYTk1ODg3Zg==", // ✅ Update with real IG URL
  },
  {
    icon: <Phone size={28} />,
    label: "PHONE",
    subtext: "+234 8136560642",
  },
  {
    icon: <Mail size={28} />,
    label: "E-MAIL",
    subtext: "yetundeolaolu23@g.mail.com",
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
          Thank You for Your Interest and We Hope to be a Part of Your Next
          Special Occasion. Contact Us Below!
        </p>

        <div className="contact-grid">
          {contacts.map((item, idx) => {
            const CardWrapper = item.url ? "a" : "div";

            return (
              <CardWrapper
                key={idx}
                className="contact-card"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="icon-circle">{item.icon}</div>
                <div className="label">{item.label}</div>
                <div className="subtext">{item.subtext}</div>
                {item.action && <div className="action">{item.action}</div>}
              </CardWrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BookNowSection;
