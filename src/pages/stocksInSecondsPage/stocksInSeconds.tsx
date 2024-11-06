import React from "react";
import "./stocksInSeconds.css";

const StocksInSeconds: React.FC = () => {
  return (
    <div className="mainContainer">
      <h1 className="title">StocksInSeconds.com</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/stocksInSeconds.png`}
          alt="Project Image"
          className="projectImage"
        />
      </div>
      <div className="descriptionContainer"></div>
    </div>
  );
};

export default StocksInSeconds;
