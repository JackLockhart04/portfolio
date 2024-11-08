import React from "react";
import "./stocksInSeconds.css";

const StocksInSeconds: React.FC = () => {
  return (
    <div className="stocksInSecondsContainer">
      <h1 className="title">StocksInSeconds.com</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/stocksInSeconds.png`}
          alt="Project"
          className="projectImage"
        />
      </div>
      <div className="linkSection">
        <a
          href="https://www.StocksInSeconds.com/"
          className="projectLink"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit stocksinseconds.com
        </a>
      </div>
      <div className="descriptionContainer">
        <p>
          StocksInSeconds.com is a website for a startup company. I developed
          the backend along with the communications on the frontend. I was able
          to use my knowledge of python and javascript but I had to learn many
          technologies for this project such as Flask API, some AWS, NoSQL, user
          authentication and authorization, cookies, domains, and more.
        </p>
      </div>
    </div>
  );
};

export default StocksInSeconds;
