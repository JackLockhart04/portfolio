import React from "react";
import { Link } from "react-router-dom";

// Components
import StocksInSecondsCard from "../../components/projectCards/stocksInSeconds/stocksInSecondsCard";
import BuildingEnergyPredictor from "../../components/projectCards/buildingEnergyPredictor/buildingEnergyPredictor";
import PasswordManagerCard from "../../components/projectCards/passwordManager/passwordManager";
import Skills from "./components/skills/skills";

// Styles
import "./home.css";

const Home: React.FC = () => {
  return (
    <div className="homeContainer">
      <div id="aboutMeContainer" className="splitSection">
        <div id="aboutMe" className="aboutMeText">
          <h1>Jack Lockhart</h1>
          <p className="aboutMeParagraph">
            I am studying computer science and cyber security at the University
            of Alabama and plan on getting my MBA afterwards. I am
            interested in cloud computing, cyber security, and AI systems. 
            I have experience with a variety of programming languages and security technologies.
            I just completed my Network+ and Security+ certifications and working towards my 
            CCNA certification.
          </p>
          <div className="heroCtas" style={{ marginTop: 16 }}>
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <a href="/resume" className="btn outline">
              Resume
            </a>
          </div>
        </div>
        <div id="headshotSection">
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile/myPic.jpg`}
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
		  <BuildingEnergyPredictor />
		  <PasswordManagerCard />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
