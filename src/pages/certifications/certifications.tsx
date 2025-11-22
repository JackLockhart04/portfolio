import React, { useState } from "react";
import "./certifications.css";

const Certifications: React.FC = () => {
  const certCode = "e864a7cf0a0e445e8c2aab65ed6cf500";
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="certificationContainer">
      <div className="certificationHeader">
        <h1>Certifications</h1>
      </div>
      <div className="certificationContent">
        <div className="securityPlusSection">
          <img
            src={`${process.env.PUBLIC_URL}/assets/certifications/security_plus_logo.png`}
            alt="CompTIA Security+ logo"
            className="certIcon"
          />
          <div className="certText">
            <h2>CompTIA Security+ | SY0-701</h2>
            <div className="certCodeRow">
              <code className="certCode">{certCode}</code>
              <button
                className="certCopyBtn"
                aria-label="Copy certification code"
                onClick={() => copyToClipboard(certCode)}
              >
                {copied ? "Copied" : "Copy"}
              </button>
              <a
                className="certVerifyLink"
                href="http://verify.CompTIA.org"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open CompTIA verification page in a new tab"
              >
                Verify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
