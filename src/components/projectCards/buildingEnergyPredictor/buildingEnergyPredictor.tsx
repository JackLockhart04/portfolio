import React from "react";

import "./buildingEnergyPredictor.css";
import ProjectCard from "../projectCard";

const BuildingEnergyPredictor: React.FC = () => {
  return (
    <ProjectCard
      name="Building Energy Predictor"
      projectLink="/projects/buildingenergypredictor"
      image={`${process.env.PUBLIC_URL}/assets/projects/building-energy-predictor/buildingEnergyPredictor.png`}
      skills={"Python, Jupyter Notebook, Machine Learning, APIs"}
      description="A machine learning model that predicts the energy usage of a building based on various features such as weather data and building characteristics."
      siteLink="https://jacklockhart04.github.io/building_energy_predictor/"
    />
  );
};

export default BuildingEnergyPredictor;
