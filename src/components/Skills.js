import React from "react";

const SkillTag = ({ name }) => (
  <span
    style={{
      display: "inline-block",
      backgroundColor: "#319795",
      color: "white",
      padding: "6px 12px",
      margin: "4px",
      borderRadius: "16px",
      fontSize: "14px",
      fontWeight: "bold",
    }}
  >
    {name}
  </span>
);

const SkillCategory = ({ title, skills }) => (
  <div style={{ marginBottom: "30px" }}>
    <h3
      style={{
        color: "#2c7a7b",
        fontSize: "20px",
        marginBottom: "10px",
        borderBottom: "2px solid #2c7a7b",
        paddingBottom: "5px",
      }}
    >
      {title}
    </h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {skills.map((skill, index) => (
        <SkillTag key={index} name={skill} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillsData = {
    languages: ["Java", "SQL", "PL/SQL", "Python", "C", "Go (Golang)"],
    cloudTechnologies: [
      "AWS",
      "EC2",
      "Lambda",
      "S3",
      "API Gateway",
      "RDS",
      "DynamoDB",
      "CloudWatch",
      "CloudFront",
      "Route53",
      "SQS",
      "SNS",
      "Elastic Beanstalk",
      "Docker",
      "Kubernetes",
      "Jenkins",
      "CI/CD",
      "Terraform",
      "Ansible",
    ],
    webTechnologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "ES6+",
      "React.js",
      "Angular",
      "Vue.js",
      "jQuery",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS",
      "AJAX",
      "DOJO",
      "XML",
      "SOAP",
      "REST",
      "WSDL",
      "GraphQL",
      "JSON",
      "Next.js",
    ],
    databaseEnvironments: [
      "Oracle 10g/9i",
      "SQL Server",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Cassandra",
      "DynamoDB",
      "Redis",
      "Firebase",
      "Influx DB",
    ],
    versionControl: [
      "Git",
      "GitHub",
      "GitLab",
      "Bitbucket",
      "SVN",
      "Visual Source Safe",
      "CVS",
      "Tortoise SVN",
    ],
    automationTesting: [
      "Selenium",
      "Cucumber",
      "Jest",
      "JUnit",
      "TestNG",
      "Mockito",
      "Karma",
      "Jasmine",
    ],
    javaJ2EETechnologies: [
      "JavaBeans",
      "MVC",
      "ANT",
      "MAVEN",
      "Log4j",
      "JAXP",
      "DOM",
      "JNDI",
      "ETL",
      "Microservices",
      "Multithreading",
      "JAX-RS",
      "JAX-WS",
      "Java 8/11",
    ],
    operatingSystems: [
      "Windows",
      "MacOS",
      "Linux",
      "Ubuntu",
      "CentOS",
      "Red Hat",
      "UNIX",
    ],
  };

  return (
    <div
      style={{
        padding: "20px",
        // backgroundColor: "#f0f4f8",
        fontFamily: "Arial, sans-serif",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1
        style={{
          color: "#234e52",
          fontSize: "28px",
          marginBottom: "20px",
          textAlign: "center",
        }}
      >
        My Skills
      </h1>
      {Object.entries(skillsData).map(([category, skills]) => (
        <SkillCategory
          key={category}
          title={category.charAt(0).toUpperCase() + category.slice(1)}
          skills={skills}
        />
      ))}
    </div>
  );
};

export default Skills;
