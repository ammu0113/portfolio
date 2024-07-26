import React from "react";

import { FaFolder, FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  const projects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tags: ["Algolia", "WordPress", "PHP"],
    },
    {
      title: "Time to Have More Fun",
      description:
        "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tags: ["Next.js", "Tailwind CSS", "Firebase"],
    },
    {
      title: "Building a Headless Mobile App CMS From Scratch",
      description:
        "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
      tags: ["Node", "Express", "Firebase", "Vue"],
    },
    {
      title: "OctoProfile",
      description:
        "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
      tags: ["GitHub API", "Chart.js"],
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase.",
      tags: ["Vue", "Firebase"],
    },
    {
      title: "Apple Music Embeddable Web Player Widget",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js.",
      tags: ["MusicKit.js", "JS"],
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
