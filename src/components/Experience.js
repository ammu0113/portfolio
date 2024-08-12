// Experience.js
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { FaBriefcase, FaCalendarAlt, FaCaretRight } from "react-icons/fa";
// import "./Experience.scss";

const Experience = () => {
  const [activeCompany, setActiveCompany] = useState(0);

  useEffect(() => {
    setActiveCompany(0);
  }, []);

  const experiences = [
    {
      company: "ENDIVITE Technologies",
      position: "Full-stack Developer",
      duration: "September 2020 - June 2022",
      responsibilities: [
        "Developed full-stack web applications using JavaScript, React, HTML, and CSS, increasing user engagement by 30%",
        "Designed and implemented RESTful APIs, improving data retrieval efficiency by 25%",
        "Led integration between frontend and backend systems, enhancing overall system cohesion",
        "Mentored junior developers in frontend technologies, increasing team productivity by 20%",
        "Implemented responsive designs and optimized web interfaces for performance across devices",
      ],
    },
    {
      company: "Semtosys Private limited",
      position: "Frontend Web Developer",
      duration: "October 2016 - April 2019",
      responsibilities: [
        "Built and maintained web applications using JavaScript, React, HTML, and CSS",
        "Implemented responsive designs, improving mobile user experience by 35%",
        "Collaborated with backend team to integrate frontend with company APIs",
        "Contributed to company's component library, accelerating development cycles by 25%",
        "Kept tech stack current by researching and implementing emerging frontend trends",
      ],
    },
  ];

  console.log("activeCompany", activeCompany);

  return (
    <Container fluid className="experience-container">
      <h2 className="section-heading">
        <FaBriefcase /> Where I've Worked
      </h2>
      <Row className="experience-content">
        <Col md={2} className="company-tabs">
          {experiences.map((exp, index) => (
            <Button
              key={index}
              className={`company-tab ${
                activeCompany === index ? "active" : ""
              }`}
              onClick={() => setActiveCompany(index)}
            >
              {exp.company.slice(0, 20)}...
            </Button>
          ))}
        </Col>
        <Col md={9} className="job-info">
          <h3 className="m-0">
            <span className="job-title">
              {experiences[activeCompany].position}
            </span>
            <span className="company-name">
              {" "}
              @ {experiences[activeCompany].company}
            </span>
          </h3>
          <p className="job-duration">
            <FaCalendarAlt /> {experiences[activeCompany].duration}
          </p>
          <ul className="job-responsibilities">
            {experiences[activeCompany].responsibilities.map(
              (details, index) => (
                <li key={index}>
                  <FaCaretRight className="bullet-icon" />
                  {details}
                </li>
              )
            )}
          </ul>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
