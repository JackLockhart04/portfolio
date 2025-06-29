import React from "react";

import "./courseGeniusCard.css";
import ProjectCard from "../projectCard";

const CourseGeniusCard: React.FC = () => {
  return (
    <ProjectCard
      name="CourseGenius.free.nf"
      projectLink="/projects/coursegenius"
      image={`${process.env.PUBLIC_URL}/projects/course-genius/courseGenius.png`}
      skills={"Java, TypeScript, React, AWS services, Oracle Cloud, MySql"}
      description="Full stack web app PROTOTYPE that allows users to track their classes and grades."
      siteLink="https://coursegenius.free.nf/"
    />
  );
};

export default CourseGeniusCard;
