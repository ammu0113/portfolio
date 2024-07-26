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
      duration: "August 2020 - June 2022",
      responsibilities: [
        "Developed and maintained robust and scalable web applications utilizing the MERN stack (MongoDB, Express.js, React, Node.js), ensuring high performance and reliability.",
        "Collaborated effectively with front-end and back-end developers to define, design, and implement innovative solutions that meet project requirements and business goals.",
        "Designed and implemented RESTful APIs to facilitate seamless integration between front-end and back-end systems, enhancing functionality and user experience.",
        "Partnered with UI/UX designers to create responsive, user-friendly interfaces that are visually appealing and adhere to design standards.",
        "Conducted troubleshooting, debugging, and optimization of code to resolve issues promptly and improve application performance.",
        "Applied industry best practices to implement security and data protection measures, safeguarding sensitive information and maintaining compliance.",
      ],
    },
    {
      company: "Semtosys Private limited",
      position: "Frontend Web Developer",
      duration: "October 2016 - April 2019",
      responsibilities: [
        "Working with clients to develop the overall look and design of a website",
        "Writing website code with programming languages such as HTML, CSS, JavaScript and React",
        "Producing, maintaining and modifying websites and user interfaces",
        "Creating tools that enhance the users website experience",
        "Ensuring websites are accessible across many platforms, including laptops and smartphones",
        "Routinely testing websites for ease of use, speed and other quality factors",
        "Fixing any website issues or bugs that arise",
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
