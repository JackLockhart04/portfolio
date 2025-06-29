import React from "react";

import "./stocksInSecondsCard.css";
import ProjectCard from "../projectCard";

const StocksInSecondsCard: React.FC = () => {
  return (
    <ProjectCard
      name="StocksInSeconds.com"
      projectLink="/projects/stocksinseconds"
      image={`${process.env.PUBLIC_URL}/projects/stocks-in-seconds/stocksInSeconds.png`}
      skills={"Python, Flask, Javascript, AWS services, APIs"}
      description="Full stack website for a startup business"
      siteLink="https://stocksinseconds.com/"
    />
  );
};

export default StocksInSecondsCard;
