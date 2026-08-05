import React, { useState } from "react";
import "./certifications.css";

type Cert = {
  name: string;
  code: string;
  img: string;
  verifyLink: string;
  alt?: string;
};

const Certifications: React.FC = () => {
  const certs: Cert[] = [
    {
      name: "CompTIA Network+",
      code: "f3e2c34ab8244a2a93aa0dd151dc9a58",
      img: `${process.env.PUBLIC_URL}/assets/certifications/network_plus_logo.png`,
      verifyLink: "http://verify.CompTIA.org",
      alt: "CompTIA Network+ logo",
    },
    {
      name: "CompTIA Security+",
      code: "e864a7cf0a0e445e8c2aab65ed6cf500",
      img: `${process.env.PUBLIC_URL}/assets/certifications/security_plus_logo.png`,
      verifyLink: "http://verify.CompTIA.org",
      alt: "CompTIA Security+ logo",
    },
  ];

  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      }
      setCopiedCode(text);
      setTimeout(() => setCopiedCode(null), 2000);
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
        {certs.map((cert) => (
          <div className="securityPlusSection" key={cert.code}>
            <img src={cert.img} alt={cert.alt || cert.name} className="certIcon" />
            <div className="certText">
              <h2>{cert.name}</h2>
              <div className="certCodeRow">
                <p>Verification code: </p>
                <code className="certCode">{cert.code}</code>
                <button
                  className="certCopyBtn"
                  aria-label={`Copy certification code for ${cert.name}`}
                  onClick={() => copyToClipboard(cert.code)}
                >
                  {copiedCode === cert.code ? "Copied" : "Copy"}
                </button>
                <a
                  className="certVerifyLink"
                  href={cert.verifyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Open verification page for ${cert.name} in a new tab`}
                >
                  Verify here
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
