import React from "react";

import "./projects.css";

import StocksInSecondsCard from "../../components/projectCards/stocksInSeconds/stocksInSecondsCard";

const Projects: React.FC = () => {
  return (
    <div className="projectsContainer">
      <h2>Projects</h2>
      <div className="projectsGrid">
        <StocksInSecondsCard />
      </div>
    </div>
  );
};

export default Projects;
