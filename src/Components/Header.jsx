import React, { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.jpg";
import Headroom from "react-headroom";
import { SquareMenu, SquareX } from "lucide-react";
import { Link } from "react-router-dom"; 


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Headroom>
      <header className="header">
        <div className="logo">
         <Link to="/">
  <img src={logo} alt="Alaga logo" />
</Link>
        </div>

        <nav className="nav">
          <ul>
            <li>
              <a href="#">Book an Alaga</a>
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
         <div style={{ position: "absolute", top: 20, right: 10 }}>
  <SquareX  onClick={toggleMenu} size={30} />
</div>

          <ul>
            <li>
              <a href="#">Book an Alaga</a>
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
