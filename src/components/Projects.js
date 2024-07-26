import React from "react";

import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

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
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-content">
              <div className="project-header">
                <span className="folder-icon">
                  <FaFolder size={20} />
                </span>
                <div className="project-links">
                  {index % 2 === 1 && (
                    <span className="github-icon">
                      <FaGithub size={20} />
                    </span>
                  )}
                  <span className="external-link-icon">
                    <FaExternalLinkAlt size={20} />
                  </span>
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
