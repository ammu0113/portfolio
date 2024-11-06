import React from "react";
import { Container } from "reactstrap";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";
// import "./Education.scss";

const Education = () => {
  const education = {
    degree: "Master's degree, Computer Science",
    school: "State University of New York",
    duration: "August 2022 - May 2024",
    grade: "3.36",
  };

  return (
    <div className="education-container">
      <h2 className="section-heading">
        <FaGraduationCap /> Education
      </h2>
      <div className="education-content">
        <div className="education-card">
          <div className="card-body">
            <div className="title-section">
              <h3>{education.degree}</h3>
              <span className="gpa">C.G.P.A: {education.grade}</span>
            </div>
            <div className="school-name">{education.school}</div>
            <div className="duration">
              <FaCalendarAlt /> {education.duration}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
