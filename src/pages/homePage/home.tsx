import React from "react";

import "./home.css";
import ProjectCard from "../../components/projectCard/projectCard";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div id="aboutMeContainer" className="splitSection">
        <div id="aboutMe" className="aboutMeText">
          <h1>Jack Lockhart</h1>
          <p className="aboutMeParagraph">
            I am studying computer science at the University of Alabama. I am
            interested in full stack development and cloud computing but also
            have experience with development in C++. I am currently working on
            making a videogame from scratch using C++.
          </p>
        </div>
        <div id="headshotSection">
          <img
            src={`${process.env.PUBLIC_URL}/myPic.jpg`}
            alt="My Picture"
            className="myPic"
          />
        </div>
      </div>
      <div className="homeProjectsSection">
        <h2>Projects</h2>
        <div className="homeProjectGrid">
          <ProjectCard
            name="StocksInSeconds.com"
            projectLink="/project/stocksinseconds"
            image={`${process.env.PUBLIC_URL}/stocksInSeconds.png`}
            skills={"Python, Flask, Javascript, AWS services, APIs"}
            description="Full stack website for a startup business"
          />
        </div>
      </div>
      <div className="homeSkillsSection">
        <h2>Skills</h2>
        <div className="homeSkillsGrid"></div>
      </div>
    </div>
  );
};

export default Home;
