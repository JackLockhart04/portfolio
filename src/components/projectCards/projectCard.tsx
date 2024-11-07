import React from "react";

import { Link } from "react-router-dom";

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
        <img src={image} alt="Project" className="projectCardImage" />
      </div>
      <div className="projectCardSkillsSection">
        <p className="projectCardSkillsText">{skills}</p>
      </div>
      <div className="projectCardDescriptionSection">
        <h1 className="projectCardName">{name}</h1>
        <p className="projectCardDescription">{description}</p>
      </div>
      <div className="projectCardLinkSection">
        <Link to={projectLink} className="projectCardButton">
          View Project
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
