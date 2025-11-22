import React from "react";

import "./interpreterCard.css";
import ProjectCard from "../projectCard";

const InterpreterCard: React.FC = () => {
  return (
    <ProjectCard
      name="Lisp Interpreter"
      projectLink="/projects/lisp-interpreter"
      image={`${process.env.PUBLIC_URL}/assets/projects/lisp-interpreter/lispInterpreter.png`}
      skills={"C++, Lisp"}
      description="Lisp interpreter implemented in C++."
    />
  );
};

export default InterpreterCard;
