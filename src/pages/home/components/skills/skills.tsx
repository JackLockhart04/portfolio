import React from "react";
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
              <a href="/certifications" className="homeSkillsGroupLink">
                Certifications
              </a>
            </h3>
          </div>
          <div className="homeSkillsList">
            <span>CompTIA Security+ (SY0-701)</span>
            <span>CompTIA Network+ (N10-009)</span>
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
            <h3>Development</h3>
          </div>
          <div className="homeSkillsList">
            <span>Python</span>
            <span>Java</span>
            <span>C++</span>
            <span>Rust</span>
            <span>JavaScript</span>
            <span>TypeScript</span>
            <span>React</span>
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
            <span>Linux</span>
            <span>Cryptography</span>
            <span>Networks</span>
            <span>Git</span>
            <span>Docker</span>
            <span>SQL</span>
			      <span>AI Models</span>
            <span>AWS (Lambda, CloudFront, IAM)</span>
            <span>Microsoft Azure</span>
            <span>Oracle Cloud</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
