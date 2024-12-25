import React from "react";
import "./resume.css";

const Resume: React.FC = () => {
  return (
    <div className="resumeContainer">
      <div className="resumeHeader">
        <a
          href={`${process.env.PUBLIC_URL}/Resume.pdf`}
          download
          className="downloadButton"
        >
          Download Resume
        </a>
      </div>
      <div className="resumeContent">
        <img
          src={`${process.env.PUBLIC_URL}/Resume.png`}
          alt="Resume"
          className="resumeImage"
        />
      </div>
    </div>
  );
};

export default Resume;
