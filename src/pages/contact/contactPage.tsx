import React from "react";
import "./contactPage.css";

const Contact: React.FC = () => {
  return (
    <div className="contactPageContainer">
      <h1>Contact Me</h1>
      <div className="contactInfo">
        <div className="contactItem">
          <h2>Phone</h2>
          <p>(205) 569-8341</p>
        </div>
        <div className="contactItem">
          <h2>Email</h2>
          <p>
            <a href="mailto:jrlockhart04@gmail.com">jrlockhart04@gmail.com</a>
          </p>
        </div>
        <div className="contactItem">
          <h2>LinkedIn</h2>
          <p>
            <a
              href="https://www.linkedin.com/in/jack-r-lockhart/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn Profile
            </a>
          </p>
        </div>
        <div className="contactItem">
          <h2>GitHub</h2>
          <p>
            <a
              href="https://github.com/JackLockhart04"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
