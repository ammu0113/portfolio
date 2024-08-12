import React, { useState, useEffect } from "react";
// import './header.scss';
import {
  FaLinkedin,
  FaYoutube,
  FaInstagram,
  FaBars,
  FaTimes,
  FaGithub,
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
            <a
              href={`${window.location.origin}${window.location.pathname}#`}
              onClick={toggleMenu}
            >
              <img src={logo} style={{ width: "30px", height: "30px" }} />
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#`}
              onClick={toggleMenu}
            >
              Home
            </a>
          </li>
          {/* <li>
            <a href="/about" onClick={toggleMenu}>
              About
            </a>
          </li> */}
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#/experience`}
              onClick={toggleMenu}
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#/skills`}
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#/education`}
              onClick={toggleMenu}
            >
              Education
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#/projects`}
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href={`${window.location.origin}${window.location.pathname}#/contact`}
              onClick={toggleMenu}
            >
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
          <a href="https://github.com/ammu0113" className="icon">
            <FaGithub />
          </a>
          {/* <a href="#" className="icon">
            <FaYoutube />
          </a>
          <a href="#" className="icon">
            <FaInstagram />
          </a> */}
        </div>
      </nav>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Header;
