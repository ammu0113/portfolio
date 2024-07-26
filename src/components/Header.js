import React, { useState, useEffect } from "react";
// import './header.scss';
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
import logo from "../assets/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isMenuOpen]);

  return (
    <header className="header">
      <div className="menu-icon" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul
          className="nav-list"
          style={{ display: "flex", alignItems: "center" }}
        >
          <li>
            <a href="/" onClick={toggleMenu}>
              <img src={logo} style={{ width: "30px", height: "30px" }} />
            </a>
          </li>
          <li>
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
          </li>
          {/* <li>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
          </li> */}
          <li>
            <a href="/experience" onClick={toggleMenu}>
              Experience
            </a>
          </li>
          <li>
            <a href="/skills" onClick={toggleMenu}>
              Skills
            </a>
          </li>
          <li>
            <a href="/education" onClick={toggleMenu}>
              Education
            </a>
          </li>
          <li>
            <a href="/projects" onClick={toggleMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" onClick={toggleMenu}>
              Contact
            </a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/amulya-bandla-666b97318/"
            target="__blank"
            className="icon"
          >
            <FaLinkedin />
          </a>
          <a href="#" className="icon">
            <FaMedium />
          </a>
          <a href="#" className="icon">
            <FaYoutube />
          </a>
          <a href="#" className="icon">
            <FaInstagram />
          </a>
        </div>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
