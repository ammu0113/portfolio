import React from "react";

import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { Col, Row } from "reactstrap";

const Project = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      description:
        "This ia dynamic mukltiple page portfolio applictaion developed in react",
      live: "https://ammu0113.github.io/portfolio/#",
      sourcecode: "https://github.com/ammu0113/portfolio",
      target: "_blank",
      tags: ["React", "sass", "javascript", "reactstrap", "react-router"],
    },
  ];

  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      {/* <a href="#" className="view-archive">
        view the archive
      </a> */}
      <Row className="projects-grid">
        {projects.map((project, index) => (
          <Col xs={12} md={2} key={index} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <span className="folder-icon">
                  <FaFolder size={20} />
                </span>
                <div className="project-links">
                  {project.sourcecode && (
                    <span className="github-icon">
                      <a href={`${project.sourcecode}`} target="__blank">
                        <FaGithub size={20} />
                      </a>
                    </span>
                  )}
                  {project.live && (
                    <span className="external-link-icon">
                      <a href={`${project.live}`} target="__blank">
                        <FaExternalLinkAlt size={20} />
                      </a>
                    </span>
                  )}
                </div>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
            <div className="project-tags">
              {project.tags.map((tag, tagIndex) => (
                <span key={tagIndex} className="tag">
                  {tag}
                </span>
              ))}
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Project;
