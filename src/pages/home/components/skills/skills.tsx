import React from "react";
import "./skills.css";

const Skills: React.FC = () => {
  return (
    <div className="homeSkillsSection">
      <h2 className="homeSkillsHeader">Skills</h2>
      <div className="homeSkillsGroupContainer">
        <div className="homeSkillsGroup">
          <div className="homeSkillsGroupHeader">
            <img
              src={`${process.env.PUBLIC_URL}/logos/frontend-icon.png`}
              alt="Frontend"
              className="homeSkillsGroupIcon"
            />
            <h3>Frontend</h3>
          </div>
          <div className="homeSkillsList">
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
          </div>
        </div>
        <div className="homeSkillsGroup">
          <div className="homeSkillsGroupHeader">
            <img
              src={`${process.env.PUBLIC_URL}/logos/backend-icon.png`}
              alt="Backend"
              className="homeSkillsGroupIcon"
            />
            <h3>Backend</h3>
          </div>
          <div className="homeSkillsList">
            <span>Python</span>
            <span>Java</span>
            <span>C++</span>
          </div>
        </div>
        <div className="homeSkillsGroup">
          <div className="homeSkillsGroupHeader">
            <img
              src={`${process.env.PUBLIC_URL}/logos/other-icon.png`}
              alt="Cloud Computing"
              className="homeSkillsGroupIcon"
            />
            <h3>Other Technologies</h3>
          </div>
          <div className="homeSkillsList">
            <span>Git</span>
            <span>AWS (Lambda, CloudFront)</span>
            <span>Oracle Cloud</span>
            <span>Docker</span>
            <span>SQL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
