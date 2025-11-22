import React from "react";
import { Link } from "react-router-dom";
import "./skills.css";

const Skills: React.FC = () => {
  return (
    <div className="homeSkillsSection">
      {/* Skills Header */}
      <h2 className="homeSkillsHeader">Skills</h2>
      {/* Skills Groups */}
      <div className="homeSkillsGroupContainer">
        {/* Certifications */}
        <div className="homeSkillsGroup">
          <div className="homeSkillsGroupHeader">
            <img
              src={`${process.env.PUBLIC_URL}/logos/certifications-icon.png`}
              alt="Certifications"
              className="homeSkillsGroupIcon"
            />
            <h3>
              <Link to="/certifications" className="homeSkillsGroupLink">
                Certifications
              </Link>
            </h3>
          </div>
          <div className="homeSkillsList">
            <span>CompTIA Security+ (SY0-701)</span>
          </div>
        </div>
        {/* Frontend Skills */}
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
        {/* Backend Skills */}
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
            <span>Rust</span>
          </div>
        </div>
        {/* Other Technologies */}
        <div className="homeSkillsGroup">
          <div className="homeSkillsGroupHeader">
            <img
              src={`${process.env.PUBLIC_URL}/logos/other-icon.png`}
              alt="Other Technologies"
              className="homeSkillsGroupIcon"
            />
            <h3>Other Technologies</h3>
          </div>
          <div className="homeSkillsList">
            <span>Git</span>
            <span>AWS (Lambda, CloudFront)</span>
            <span>Microsoft Azure</span>
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
