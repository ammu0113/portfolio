import React from "react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
// import "./HeroPage.scss";
import image from "../assets/images/ammu_image.jpg";
import resume from "../assets/files/AmulyaBandla.docx";

const HeroPage = () => {
  return (
    <div className="hero-page">
      <div className="hero-container">
        <div className="image-section">
          <div className="image-container">
            <img
              src={image}
              alt="Amulya Bandla - Full Stack Developer"
              className="profile-image"
            />
            {/* <div className="color-block"></div> */}
          </div>
        </div>
        <div className="content-section">
          <h1>Amulya Bandla</h1>
          <h2>Full-stack Developer</h2>
          <p>
            Senior Full Stack Developer with 7+ years of expertise crafting
            scalable web solutions. Skilled in modern JavaScript ecosystems
            (MERN Stack), cloud architecture, and microservices. Proven track
            record at Qualcomm and TATA of transforming complex requirements
            into elegant, user-centric applications that drive business growth.
          </p>
          {/* <div className="social-links">
            <a href="mailto:amulya.bandla01@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/amulya-bandla-666b97318"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div> */}

          <a href={resume} download="AmulyaResume" className="custom-button">
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
