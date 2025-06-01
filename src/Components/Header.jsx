import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import Headroom from "react-headroom";
import { SquareMenu, SquareX } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Headroom>
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Alaga logo" />
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#">Book an Alaga</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Engagement List</a>
            </li>
          </ul>
        </nav>

        <div className="auth-buttons">
          <button>Sign in</button>
          <button className="signup">Sign up</button>
        </div>

        <button
          className="hamburger"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <SquareMenu size={30} />
        </button>

        <nav className={`sidebar ${isMenuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="#">Book an Alaga</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">How It Works</a>
            </li>
            <li>
              <a href="#">Engagement List</a>
            </li>
          </ul>
          <div className="auth-buttons-sidebar">
            <button>Sign in</button>
            <button className="signup">Sign up</button>
          </div>
        </nav>

        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
      </header>
    </Headroom>
  );
};

export default Header;
