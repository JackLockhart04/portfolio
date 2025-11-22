import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      {/* Left half of navbar */}
      <div className="navLeft">
        {/* Home Link */}
        <div className="navLinkBox">
          <Link to="/" className="navLink">
            Home
          </Link>
        </div>
        {/* Contact Link */}
        <div className="navLinkBox">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </div>
      </div>
      {/* Right half of navbar */}
      <div className="navRight">
        {/* Resume Link */}
        <div className="navLinkBox">
          <Link to="/resume" className="navLink">
            Resume
          </Link>
        </div>
        {/* Certifications Link */}
        <div className="navLinkBox">
          <Link to="/certifications" className="navLink">
            Certifications
          </Link>
        </div>
        {/* Projects Link */}
        <div className="navLinkBox">
          <Link to="/projects" className="navLink">
            Projects
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
