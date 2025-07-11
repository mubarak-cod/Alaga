import React, { useState, useEffect } from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
// import Headroom from "react-headroom";
import { SquareMenu, SquareX } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    // <Headroom>
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Alaga logo" />
          </Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <Link onClick={scrollToContact}>Book an Alaga</Link>
            </li>
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="/how-it-works">How It Works</Link>
            </li>
            <li>
              <Link to="/engagement-list">Engagement List</Link>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          {/* <button>Sign in</button>
          <button className="signup">Sign up</button> */}
          <a
            href="mailto:yetundeolaolu23@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Fashola Alaga%2C%20I'm%20interested%20in%20working%20with%20you..."
            style={{
              display: "inline-block",
              color: "#ffffff", // sharp white
              textDecoration: "none",
              border: "4px solid #FFD700", // thick yellow
              background: "#FFD700", // yellow fill
              padding: "0.3rem 1.2rem",
              borderRadius: "17px",
              fontWeight: 800,
              transition: "all 0.3s ease",
              fontSize: "12px",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#FFD700";
              e.target.style.borderColor = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#FFD700";
              e.target.style.color = "#ffffff";
              e.target.style.borderColor = "#FFD700";
            }}
          >
            Contact Us
          </a>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <SquareMenu size={30} />
        </button>

        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <div style={{ position: "absolute", top: 20, right: 10 }}>
            <SquareX onClick={toggleMenu} size={30} />
          </div>

          <ul>
            <li>
              <a href="#">Book an Alaga</a>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/about-us">
                About Us
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/how-it-works">
                How It Works
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} to="/engagement-list">
                Engagement List
              </Link>
            </li>
          </ul>
          <div className="auth-buttons-sidebar">
            {/* <button>Sign in</button>
            <button className="signup">Sign up</button> */}
            {/* <a
       href="mailto:artisticaxis2024@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Azeez%2C%20I%27m%20interested%20in%20working%20with%20you..."
        className="relative inline-flex h-11 w-52 sm:w-60 overflow-hidden rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
      ></a> */}
            <button>
              <a href="mailto:yetundeolaolu23@gmail.com?subject=Let's%20Work%20Together&body=Hi%20Fashola Alaga%2C%20I'm%20interested%20in%20working%20with%20you...">
                Contact Us
              </a>
            </button>
          </div>
        </nav>

        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </header>
    // </Headroom>
  );
};

export default Header;
