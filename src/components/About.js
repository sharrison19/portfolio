import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faMdb,
  faNodeJs,
  faGithub,
  faMicrosoft,
  faNode,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import {
  faDatabase,
  faCloud,
  faNetworkWired,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const frontEndSkills = [
    { name: "React", icon: faReact },
    { name: "Redux", icon: faCodepen },
    { name: "JavaScript", icon: faJs },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
  ];

  const backEndSkills = [
    { name: "Node", icon: faNode },
    { name: "SQL", icon: faDatabase },
    { name: "MongoDB", icon: faMdb },
    { name: "Mongoose", icon: faMdb },
    { name: "REST APIs ", icon: faNetworkWired },
    { name: "Express", icon: faNodeJs },
  ];

  const additionalTools = [
    { name: "GitHub", icon: faGithub },
    { name: "Heroku", icon: faCloud },
    { name: "Visual Studio", icon: faMicrosoft },
  ];

  return (
    <div className="about-container">
      <div className="about-profile">
        <div className="about-content">
          <h3>About Me</h3>
          <p className="about-info">Education: Deep Dive Learning Academy</p>
          <h3>Skills:</h3>
          <div className="skills-list-container">
            <div className="skills-category-container">
              <h4 className="category-title">Front-end</h4>
              <ul className="skills-list">
                {frontEndSkills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <div className="icon-container">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-name-container">{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-category-container">
              <h4 className="category-title">Back-end</h4>
              <ul className="skills-list">
                {backEndSkills.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <div className="icon-container">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-name-container">{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="skills-category-container">
              <h4 className="category-title">Additional Tools</h4>
              <ul className="skills-list">
                {additionalTools.map((skill, index) => (
                  <li key={index} className="skill-item">
                    <div className="icon-container">
                      <FontAwesomeIcon
                        icon={skill.icon}
                        className="skill-icon"
                      />
                    </div>
                    <div className="skill-name-container">{skill.name}</div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
