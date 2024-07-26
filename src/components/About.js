import React from "react";
import { Container, Row, Col } from "reactstrap";
// import "./About.scss";

const About = () => {
  return (
    <section className="about">
      <Container fluid>
        <Row>
          <Col md={6} className="about-image-container">
            <div className="image-background"></div>
            <div className="image-wrapper">
              <img
                src="https://ergobaby.co.uk/blog/wp-content/uploads/2023/08/Baby-with-Dad-Dummy.jpg"
                alt="Amulya Bandla"
              />
            </div>
          </Col>
          <Col md={6} className="about-content">
            <h2>About me</h2>
            <p>
              I am a full-stack developer currently pursuing my Master's degree
              in Computer Science at the State University of New York. With over
              3 years of professional experience in web development, I've had
              the opportunity to work on various exciting projects.
            </p>
            <p>
              My expertise lies in developing robust web applications using the
              MERN stack. I'm passionate about creating efficient, scalable
              solutions and always eager to take on new challenges in the
              ever-evolving field of web development.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or enjoying a good book.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
