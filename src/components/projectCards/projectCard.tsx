import React from "react";
import { Link } from "react-router-dom";

import "./projectCard.css";

interface ProjectCardProps {
  name: string;
  image: string;
  skills: string;
  description: string;
  projectLink: string;
  siteLink: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  skills,
  description,
  projectLink,
  siteLink,
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
        {siteLink ? (
          <a
            href={siteLink}
            target="_blank"
            rel="noopener noreferrer"
            className="projectCardNameLink"
          >
            <h2 className="projectCardName">{name}</h2>
          </a>
        ) : (
          <h2 className="projectCardName">{name}</h2>
        )}
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
