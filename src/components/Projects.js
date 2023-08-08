import React from "react";
import { Link } from "react-router-dom";

const Projects = ({ projectsData }) => {
  return (
    <div className="projects-container">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-list-container">
        {projectsData.map((project) => (
          <Link
            to={`/projects/${project.id}`}
            key={project.id}
            style={{ textDecoration: "none" }}
          >
            <div
              className="project-item project-background-image"
              style={{ backgroundImage: project.backgroundImage }}
            >
              <h3 className="projects-title">{project.cardTitle}</h3>
              <p className="project-short-description">
                {project.shortDescritpion}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
