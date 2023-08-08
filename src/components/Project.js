import React from "react";
import { useParams } from "react-router-dom";

const Project = ({ projectsData }) => {
  const { projectId } = useParams();
  const project = projectsData.find((project) => project.id === projectId);
  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project-background">
      <div className="project-container">
        <br />
        <h2 className="project-title">{project.title}</h2>
        <br />
        <div className="project-technologies">
          <div className="project-technologies-heading">Technologies used:</div>
          {project.technologies.map((technology) => (
            <span key={technology} className="technology-tag">
              {technology}
            </span>
          ))}
        </div>
        <br />
        <div className="project-long-description">
          {project.longDescription}
        </div>
      </div>
    </div>
  );
};

export default Project;
