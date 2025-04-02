import React from "react";

import "./projects.css";

import StocksInSecondsCard from "../../components/projectCards/stocksInSeconds/stocksInSecondsCard";
import CourseGeniusCard from "../../components/projectCards/courseGenius/courseGeniusCard";

const Projects: React.FC = () => {
  return (
    <div className="projectsContainer">
      <h1>Projects</h1>
      <div className="githubLinkContainer">
        <a
          href="https://github.com/JackLockhart04"
          target="_blank"
          rel="noopener noreferrer"
          className="githubLink"
        >
          View My GitHub
        </a>
      </div>
      <div className="projectsGrid">
        <StocksInSecondsCard />
        <CourseGeniusCard />
      </div>
    </div>
  );
};

export default Projects;
