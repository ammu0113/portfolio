import React from "react";
// import "./Skills.scss";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", proficiency: 90 },
      { name: "Python", proficiency: 80 },
      { name: "Java", proficiency: 70 },
    ],
  },
  {
    category: "Frameworks",
    skills: [
      { name: "React", proficiency: 85 },
      { name: "Node.js", proficiency: 75 },
      { name: "Django", proficiency: 65 },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", proficiency: 90 },
      { name: "Docker", proficiency: 70 },
      { name: "Webpack", proficiency: 60 },
    ],
  },
];

function Skills() {
  return (
    <div className="skills">
      <div className="skills__header">
        <h1 className="skills__title">My Skills</h1>
      </div>
      <div className="skills__content">
        {skillsData.map((category) => (
          <div key={category.category} className="skills__category">
            <h2 className="skills__category-title">{category.category}</h2>
            {category.skills.map((skill) => (
              <div key={skill.name} className="skills__skill">
                <span className="skills__skill-name">{skill.name}</span>
                <div className="skills__skill-bar">
                  <div
                    className="skills__skill-level"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
