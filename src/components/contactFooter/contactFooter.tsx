import React from "react";
import "./contactFooter.css";

const ContactFooter: React.FC = () => {
  return (
    <footer className="contactFooter">
      <h2 className="contactFooterHeader">Contact Information</h2>
      <div className="contactFooterItem">
        <h3>Phone</h3>
        <p>(205) 569-8341</p>
      </div>
      <div className="contactFooterItem">
        <h3>Email</h3>
        <p>
          <a href="mailto:jrlockhart04@gmail.com">jrlockhart04@gmail.com</a>
        </p>
      </div>
      <div className="contactFooterItem">
        <h3>LinkedIn</h3>
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
    </footer>
  );
};

export default ContactFooter;
