import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import reelnortheastimage1 from "../images/reelnortheastimage1.png";
import reelnortheastimage2 from "../images/reelnortheastimage2.png";
import reelnortheastimage3 from "../images/reelnortheastimage3.png";
import reelnortheastimage4 from "../images/reelnortheastimage4.png";
import reelnortheastimage5 from "../images/reelnortheastimage5.png";
import reelnortheastimage6 from "../images/reelnortheastimage6.png";
import seastheday1 from "../images/seastheday1.png";
import seastheday2 from "../images/seastheday2.png";

const projectsData = [
  {
    title: "Reel Northeast",
    description:
      "Reel Northeast is a fishing forum website where anglers can connect, share fishing experiences, and exchange tips and tricks. The site features a comprehensive fish species section and state-specific information on fishing regulations and popular spots. Additionally, users can create their own personalized profile pages to showcase their fishing adventures and connect with like-minded enthusiasts.",
    technologies: [
      "React",
      "CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JSON Web Token",
    ],
    githubLink: "https://github.com/sharrison19/reelnortheast-db",
    appLink: "https://reel-northeast-ee6588df16dc.herokuapp.com/",
    screenshots: [
      reelnortheastimage1,
      reelnortheastimage2,
      reelnortheastimage3,
      reelnortheastimage4,
      reelnortheastimage5,
      reelnortheastimage6,
    ],
  },
  {
    title: "Seas the Day",
    description: "Description of Seas the Day project.",
    technologies: ["React", "Firebase", "Redux", "CSS"],
    githubLink: "https://github.com/your-github/seas-the-day",
    appLink: "https://seas-the-day-app.com",
    screenshots: [seastheday1, seastheday2],
  },
  {
    title: "Contacts",
    description: "Description of Contacts project.",
    technologies: ["React", "JavaScript", "HTML", "CSS"],
    githubLink: "https://github.com/your-github/contacts",
    appLink: "https://contacts-app.com",
    screenshots: [
      // Add images for Contacts project
    ],
  },
];

const Projects = () => {
  const [currentScreenshotIndexes, setCurrentScreenshotIndexes] = useState(
    projectsData.map(() => 0)
  );

  const handlePrevScreenshot = (index) => {
    setCurrentScreenshotIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index
          ? prevIndex > 0
            ? prevIndex - 1
            : projectsData[i].screenshots.length - 1
          : prevIndex
      )
    );
  };

  const handleNextScreenshot = (index) => {
    setCurrentScreenshotIndexes((prevIndexes) =>
      prevIndexes.map((prevIndex, i) =>
        i === index
          ? prevIndex < projectsData[i].screenshots.length - 1
            ? prevIndex + 1
            : 0
          : prevIndex
      )
    );
  };

  return (
    <div className="projects-container">
      {projectsData.map((project, index) => (
        <div key={index} className="project-item">
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-technologies">
            Technologies Used: {project.technologies.join(", ")}
          </p>
          <p className="project-links">
            GitHub:{" "}
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Repository
            </a>
            App:{" "}
            <a href={project.appLink} target="_blank" rel="noopener noreferrer">
              Live App
            </a>
          </p>
          <div className="project-screenshot-container">
            <div className="screenshot-button-left">
              <button
                className="screenshot-buttons"
                onClick={() => handlePrevScreenshot(index)}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
            </div>
            <img
              src={project.screenshots[currentScreenshotIndexes[index]]}
              alt={`${project.title} Screenshot`}
              className="project-screenshot"
            />
            <div className="screenshot-button-right">
              <button
                className="screenshot-buttons"
                onClick={() => handleNextScreenshot(index)}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
