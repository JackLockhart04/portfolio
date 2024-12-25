import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navLeft">
        <div className="navLinkBox">
          <Link to="/" className="navLink">
            Home
          </Link>
        </div>
        <div className="navLinkBox">
          <Link to="/contact" className="navLink">
            Contact
          </Link>
        </div>
      </div>
      <div className="navRight">
        <div className="navLinkBox">
          <Link to="/resume" className="navLink">
            Resume
          </Link>
        </div>
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
