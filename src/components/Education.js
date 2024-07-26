// Education.js
import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
} from "reactstrap";
import { FaGraduationCap, FaCalendarAlt } from "react-icons/fa";

const Education = () => {
  const education = {
    degree: "Master's degree, Computer Science",
    school: "State University of New York",
    duration: "August 2022 - May 2024",
    grade: 3.36,
  };

  return (
    <Container fluid className="education-container">
      <h2 className="section-heading">
        <FaGraduationCap /> Education
      </h2>
      <Row>
        <Col md={12}>
          <Card className="education-card">
            <CardBody>
              <CardTitle tag="h3">
                {education.degree}
                <small className=""> C.G.P.A :{education.grade}</small>
              </CardTitle>
              <CardSubtitle tag="h4" className="mb-2 text-muted">
                {education.school}
              </CardSubtitle>
              <CardText>
                <FaCalendarAlt /> {education.duration}
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
