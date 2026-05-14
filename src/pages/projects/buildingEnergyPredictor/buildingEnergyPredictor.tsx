import React from "react";
import "./buildingEnergyPredictor.css";

const BuildingEnergyPredictor: React.FC = () => {
  return (
    <div className="buildingEnergyPredictorContainer">
      <h1 className="title">Building Energy Predictor</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/building-energy-predictor/buildingEnergyPredictor.png`}
          alt="Project"
          className="projectImage"
        />
      </div>
      <div className="linkSection">
        <a
          href="https://jacklockhart04.github.io/building_energy_predictor/"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit site
        </a>
      </div>
      <div className="descriptionContainer">
        <p>
			This project focuses on forecasting electricity usage in commercial 
			buildings using machine learning. Utilizing an energy data set with over 17 million data points
			from Kaggle, I performed comprehensive data cleaning, feature engineering, 
			and exploratory visualization within Python and Jupyter Notebooks. The 
			goal was to identify patterns in power demand to help optimize utility 
			efficiency and resource allocation.
        </p>
        <p>
        	I evaluated the performance of multiple algorithms, specifically comparing 
			XGBoost and Linear Regression. While the linear model struggled to capture 
			the complex, non linear relationships of energy fluctuations, the XGBoost 
			model delivered high predictive accuracy. This gradient boosting approach 
			effectively handled the seasonal trends and variance inherent in the 
			time series data.
        </p>
        <p>
        	To demonstrate real world utility, I deployed the model using building 
			data from the University of Alabama. This demo illustrates how the trained 
			model can generate actionable insights for specific institutional campuses 
			by predicting load requirements. The final implementation serves as a 
			functional tool for visualizing expected energy consumption based on 
			historical building profiles.
        </p>
      </div>
    </div>
  );
};

export default BuildingEnergyPredictor;
