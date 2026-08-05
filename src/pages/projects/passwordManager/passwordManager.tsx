import React from "react";
import "./passwordManager.css";

const PasswordManager: React.FC = () => {
  return (
    <div className="passwordManagerContainer">
      <h1 className="title">Password Manager</h1>
      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/password-manager/password_gen.png`}
          alt="Password Generator UI"
          className="stackImage top single"
        />
      </div>

      <div className="descriptionContainer">
        <p>
          This project is a school project around copying the core functionality of BitWarden.
		  It is a browser-based password generator and local vault
          that focuses on cryptographic correctness and usable controls. The
          generator exposes explicit options for length (5–128), inclusion of
          uppercase, lowercase, digits, and special characters, minimum counts
          for digits and specials, and an option to avoid ambiguous
          characters. The UI rejects impossible configurations and provides
          regenerate and copy actions for immediate use.
        </p>
        <p>
          Passwords are constructed by placing required characters, filling the
          remainder from the enabled pool, and securely shuffling the result to
          avoid predictable positions. Randomness and cryptography are sourced
          from the browser Web Crypto API (e.g. <code>crypto.getRandomValues()</code>),
          and the generator uses rejection sampling to prevent modulo bias.
        </p>
      </div>

      <div className="imageSection">
        <img
          src={`${process.env.PUBLIC_URL}/assets/projects/password-manager/vault.png`}
          alt="Password Manager Vault"
          className="stackImage bottom single"
        />
      </div>

      <div className="descriptionContainer">
        <p>
          Stored credentials are encrypted locally: each record uses AES-GCM
          with a 256-bit key derived from the user’s vault key via
          PBKDF2-SHA-256 and a high iteration count. Each entry receives a
          fresh salt and IV, and the vault key is not persisted to browser
          storage.
        </p>
        <p>
          The interface includes two strength indicators: a zxcvbn-style
          score that BitWarden uses, and a my own project's
          score that considers length, variety,
          repeats, sequences, and dictionary matches. Features shown here are
          intentionally focused and auditable; unsupported items (sync,
          cloud sharing, passphrases) are out of scope for this prototype.
        </p>
      </div>
    </div>
  );
};

export default PasswordManager;
