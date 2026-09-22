import React from "react";
import { Link } from "react-router-dom";

import "./projectCard.css";

interface ProjectCardProps {
  name: string;
  image: string;
  skills: string;
  description: string;
  projectLink: string;
  siteLink?: string;
  nativeProjectLink?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  image,
  skills,
  description,
  projectLink,
  siteLink,
  nativeProjectLink = false,
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
        <h2 className="projectCardName">{name}</h2>
        <p className="projectCardDescription">{description}</p>
      </div>
      <div className="projectCardLinkSection">
		{nativeProjectLink ? (
          <a href={projectLink} className="projectCardButton">
            View Project Page
          </a>
        ) : (
          <Link to={projectLink} className="projectCardButton">
            View Project Page
          </Link>
        )}
		{siteLink ? (
          <p className="projectCardSiteLinkText">
            <span>Visit site here:</span>
            <a
              href={siteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projectCardSiteLink"
            >
              {siteLink}
            </a>
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default ProjectCard;
