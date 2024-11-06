import React from "react";
import "./projectCard.css";

interface ProjectCardProps {
  name: string;
  image: string;
  skills: string;
  description: string;
  projectLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  skills,
  description,
  projectLink,
}) => {
  return (
    <div className="projectCard">
      <div className="projectCardImageSection">
        <img src={image} alt="Project Image" className="projectCardImage" />
      </div>
      <div className="projectCardSkillsSection">
        <p className="projectCardSkillsText">{skills}</p>
      </div>
      <div className="projectCardDescriptionSection">
        <h1 className="projectCardName">{name}</h1>
        <p className="projectCardDescription">{description}</p>
      </div>
      <div className="projectCardLinkSection">
        <a href={projectLink} className="projectCardButton">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
