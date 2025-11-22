import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="siteHeader">
      <div className="siteHeaderInner">
        <div className="heroText">
          <h1 className="heroName">Jack Lockhart</h1>
          <p className="heroTagline">
            Full‑Stack Developer crafting reliable, secure applications
          </p>
          <div className="heroCtas">
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/resume" className="btn outline">
              Resume
            </Link>
          </div>
        </div>
        <div className="heroImage">
          <img
            src={`${process.env.PUBLIC_URL}/assets/profile/myPic.jpg`}
            alt="Headshot"
            className="heroHeadshot"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
