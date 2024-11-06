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
      company: "Qualcomm",
      position: "Full-stack Developer",
      duration: "March 2023 - Present",
      responsibilities: [
        "Proficient in building comprehensive web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js) and GraphQL.",
        "Experienced in creating RESTful APIs, implementing server-side logic, and optimizing database performance using Node.js, Express.js, and MongoDB.",
        "Skilled in developing responsive, component-based user interfaces using React.js, Redux for state management, and modern HTML5/CSS3 techniques.",
        "Adept at working with both SQL and NoSQL databases, particularly MongoDB, including query optimization and data modeling.",
        "Familiar with microservices architecture, code reviews, and deploying applications on cloud platforms like OpenStack, emphasizing scalability and performance.",
      ],
    },
    {
      company: "TATA Teleservices",
      position: "React JS Developer",
      duration: "Jan 2021 - July 2022",
      responsibilities: [
        "Expertise in React.js ecosystem: Developed reusable components, implemented state management with Redux and React Hooks, and utilized React Router for seamless navigation.",
        "Full-stack proficiency: Built dynamic web applications using React.js, Node.js, and Next.js, integrating RESTful APIs and GraphQL services for robust front-end and back-end solutions.",
        "UI/UX implementation: Collaborated with designers to create responsive, pixel-perfect interfaces using HTML5, CSS3, JavaScript (ES6+), and Bootstrap, ensuring cross-browser compatibility.",
        "Modern web development practices: Employed NPM for package management, implemented AJAX for real-time updates, and utilized JSON and XML for data interchange.",
        "Performance optimization and debugging: Leveraged React DevTools and Chrome DevTools to identify and resolve issues, enhancing application performance and user experience.",
      ],
    },
    {
      company: "TecnoTree India",
      position: "Web Developer",
      duration: "June 2017 - May 2019",
      responsibilities: [
        "Full-stack development: Built RESTful APIs with Node.js and Express.js, created responsive web applications using HTML5, CSS3, JavaScript, and Angular JS.",
        "Front-end expertise: Developed Single Page Applications (SPA) and responsive designs using modern web technologies and frameworks like Bootstrap.",
        "Back-end integration: Interacted with APIs and Web Services using AJAX, JSON, and XML, integrating back-end services to enhance data-driven applications.",
        "Performance optimization: Utilized jQuery plugins for efficient data handling and implemented Docker for consistent application deployment across environments.",
        "Best practices and collaboration: Conducted code reviews, managed version control with Git/GitHub, and maintained documentation to ensure code quality and team efficiency.",
      ],
    },
    {
      company: "BT Group India",
      position: "UI Developer",
      duration: "April 2015 - May 2017",
      responsibilities: [
        "Modern framework proficiency: Developed interactive user interfaces using HTML5, CSS3, JavaScript (ES6), Angular (6, 7, 9), and React JS, ensuring efficient and responsive designs.",
        "UI/UX implementation: Translated wireframes and high-fidelity designs into well-structured code, collaborating with Product Managers and Software Engineers to establish UI design guidelines.",
        "Full-stack integration: Connected web applications with back-end services via RESTful APIs, implemented server-side JavaScript using Node.js, and developed real-time applications.",
        "Performance and SEO optimization: Fixed UI/UX bugs, optimized web pages for search engines, and improved website loading times to enhance user experience and page rankings.",
        "Cross-functional collaboration: Participated in UI reviews with architects and business units, monitored and resolved UI inconsistencies, and ensured seamless integration of front-end with back-end systems.",
      ],
    },
  ];

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
              {exp.company}
            </Button>
          ))}
        </Col>
        <Col md={9} className="job-info">
          <h3>
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
