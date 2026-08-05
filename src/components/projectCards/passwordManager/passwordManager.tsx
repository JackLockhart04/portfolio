import React from "react";

import "./passwordManager.css";
import ProjectCard from "../projectCard";

const PasswordManagerCard: React.FC = () => {
  return (
    <ProjectCard
      name="Password Manager"
      projectLink="/projects/password-manager"
      image={`${process.env.PUBLIC_URL}/assets/projects/password-manager/password_gen.png`}
      skills={"Cryptography, Password Security, JavaScript"}
      description={
        "Browser-based generator and local vault emphasizing cryptographic correctness: Web Crypto RNG, rejection-sampled generation, PBKDF2 key derivation and AES-GCM storage. Includes strength meters and explicit, auditable generation controls."
      }
    />
  );
};

export default PasswordManagerCard;
