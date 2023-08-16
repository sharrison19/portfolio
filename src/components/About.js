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

  const tools = [
    { name: "GitHub", icon: faGithub },
    { name: "Heroku", icon: faCloud },
    { name: "Visual Studio", icon: faMicrosoft },
  ];

  return (
    <div className="about-container">
      <div className="about-content-container">
        <h3 className="about-heading">About Me</h3>
        <p className="about-passion">
          My passion for web development was ignited by the opportunity it
          presented to test my problem-solving skills and unleash my creativity.
          As someone deeply interested in technology and coding, I was drawn to
          the ever-evolving nature of the field, where there is always something
          new to learn and explore. During my education at{" "}
          <span className="education">Deep Dive Learning Academy</span>, I
          gained a solid foundation in web development principles and practices.
          Completing my first website was a moment of great accomplishment and
          excitement, as it allowed me to witness the tangible results of my
          efforts. What I enjoy most about web development is the constant
          challenge it presents. Each project pushes me to think critically,
          apply my skills, and discover innovative solutions. The dynamic and
          ever-changing landscape of web development keeps me engaged and
          motivated, as I embrace the opportunity to continuously grow and
          improve as a developer.
        </p>
      </div>
      <div className="about-skills-list-container">
        <h3 className="about-skills-heading">Skills</h3>
        <div className="skills-list-container">
          <div className="skills-category-container">
            <h4 className="category-title">Front-end</h4>
            <ul className="skills-list">
              {frontEndSkills.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
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
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  </div>
                  <div className="skill-name-container">{skill.name}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="skills-category-container">
            <h4 className="category-title"> Tools</h4>
            <ul className="skills-list">
              {tools.map((skill, index) => (
                <li key={index} className="skill-item">
                  <div className="icon-container">
                    <FontAwesomeIcon icon={skill.icon} className="skill-icon" />
                  </div>
                  <div className="skill-name-container">{skill.name}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
