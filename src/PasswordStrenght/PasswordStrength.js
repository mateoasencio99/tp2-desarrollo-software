import React from "react";
import "./PasswordsStrength.css";

const PasswordStrength = ({ password }) => {
  const calculateStrength = (password) => {
    if (!password.length) return { strength: "Sin contraseña", level: 0 };

    const lengthCriteria = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      lengthCriteria &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChars
    ) {
      return { strength: "Muy segura", level: 100 };
    }
    if (
      lengthCriteria &&
      hasUpperCase &&
      hasLowerCase &&
      (hasNumbers || hasSpecialChars)
    ) {
      return { strength: "Segura", level: 60 };
    }
    return { strength: "Poco segura", level: 30 };
  };

  const { strength, level } = calculateStrength(password);

  return (
    <div className="mt-3 font-size-30">
      <div className="d-flex justify-content-between mb-1">
        <span>Fortaleza:</span>
        <span>{strength}</span>
      </div>
      <div className="progress">
        <div
          className={`progress-bar ${
            level === 100
              ? "bg-success"
              : level >= 60
              ? "bg-warning"
              : "bg-danger"
          }`}
          role="progressbar"
          style={{ width: `${level}%` }}
          aria-valuenow={level}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default PasswordStrength;
