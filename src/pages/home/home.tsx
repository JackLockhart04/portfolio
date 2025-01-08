import React from "react";

import { Link } from "react-router-dom";

import "./home.css";
import StocksInSecondsCard from "../../components/projectCards/stocksInSeconds/stocksInSecondsCard";
import Skills from "./components/skills/skills";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div id="aboutMeContainer" className="splitSection">
        <div id="aboutMe" className="aboutMeText">
          <h1>Jack Lockhart</h1>
          <p className="aboutMeParagraph">
            I am studying computer science at the University of Alabama. I am
            interested in full stack development and cloud computing, especially
            in python, but also have experience with development in C++. I am
            currently working on a website to help me keep track of my classes
            and grades while I am in school. I am using java and deploying to
            AWS lambda and configuring by hand to learn AWS better.
          </p>
        </div>
        <div id="headshotSection">
          <img
            src={`${process.env.PUBLIC_URL}/myPic.jpg`}
            alt="Me"
            className="myPic"
          />
        </div>
      </div>
      <div className="homeProjectsSection">
        <div className="homeProjectsHeader">
          <h2>Projects</h2>
          <Link to="/projects" className="seeAllProjectsLink">
            See all projects
          </Link>
        </div>
        <div className="homeProjectGrid">
          <StocksInSecondsCard />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
