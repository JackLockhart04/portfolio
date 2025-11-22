import React from "react";
import { Link } from "react-router-dom";

// Components
import StocksInSecondsCard from "../../components/projectCards/stocksInSeconds/stocksInSecondsCard";
import CourseGeniusCard from "../../components/projectCards/courseGenius/courseGeniusCard";
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
            of Alabama while planning on getting my MBA afterwards. I am
            interested in full stack development and cloud computing, especially
            in python and Java, but also have experience with development in C++
            and JavaScript. I am currently focusing on improving my skills in
            cyber security. I just completed my CompTIA Security+ certification
            and am working towards CompTIA a+ next.
          </p>
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
          <CourseGeniusCard />
        </div>
      </div>
      <Skills />
    </div>
  );
};

export default Home;
