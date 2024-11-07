import React from "react";

import "./skills.css";

const Skills: React.FC = () => {
  return (
    <div className="homeSkillsSection">
      <h2 className="homeSkillsHeader">Skills</h2>
      <div className="homeSkillsCategory">
        <h3>Frontend</h3>
        <div className="homeSkillsGrid">
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/javascript-logo.png`}
              alt="JavaScript"
              className="homeSkillLogo"
            />
            <span>JavaScript</span>
          </div>
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/typescript-logo.png`}
              alt="TypeScript"
              className="homeSkillLogo"
            />
            <span>TypeScript</span>
          </div>
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/react-logo.png`}
              alt="React"
              className="homeSkillLogo"
            />
            <span>React</span>
          </div>
        </div>
      </div>
      <div className="homeSkillsCategory">
        <h3>Backend</h3>
        <div className="homeSkillsGrid">
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/C++-logo.png`}
              alt="C++"
              className="homeSkillLogo"
            />
            <span>C++</span>
          </div>
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/python-logo.png`}
              alt="Python"
              className="homeSkillLogo"
            />
            <span>Python</span>
          </div>
        </div>
      </div>
      <div className="homeSkillsCategory">
        <h3>Cloud Computing</h3>
        <div className="homeSkillsGrid">
          <div className="homeSkillItem">
            <img
              src={`${process.env.PUBLIC_URL}/logos/aws-logo.png`}
              alt="AWS"
              className="homeSkillLogo"
            />
            <span>AWS</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
