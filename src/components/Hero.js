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
            I am a full-stack developer currently pursuing my Master's degree in
            Computer Science at the State University of New York. With over 3
            years of professional experience in web development, I've had the
            opportunity to work on various exciting projects.
          </p>
          <p>
            My expertise lies in developing robust web applications using the
            MERN stack. I'm passionate about creating efficient, scalable
            solutions and always eager to take on new challenges in the
            ever-evolving field of web development.
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
