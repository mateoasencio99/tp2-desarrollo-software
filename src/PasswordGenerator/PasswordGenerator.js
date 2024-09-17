// PasswordGenerator.js
import React from "react";

const PasswordGenerator = ({ settings, onPasswordChange }) => {
  const generateRandomPassword = () => {
    const {
      length,
      includeUpper,
      includeLower,
      includeNumbers,
      includeSpecial,
    } = settings;
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let allChars = "";
    if (includeUpper) allChars += upperCaseChars;
    if (includeLower) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numbers;
    if (includeSpecial) allChars += specialChars;

    let password = "";
    if (includeUpper)
      password += upperCaseChars.charAt(
        Math.floor(Math.random() * upperCaseChars.length)
      );
    if (includeLower)
      password += lowerCaseChars.charAt(
        Math.floor(Math.random() * lowerCaseChars.length)
      );
    if (includeNumbers)
      password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    if (includeSpecial)
      password += specialChars.charAt(
        Math.floor(Math.random() * specialChars.length)
      );

    for (let i = password.length; i < length; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    password = password
      .split("")
      .sort(() => Math.random() - 0.5)
      .join("");

    onPasswordChange(password);
  };

  return (
    <div>
      <button
        className="btn btn-success w-100"
        onClick={generateRandomPassword}
      >
        Generar Contraseña Aleatoria
      </button>
    </div>
  );
};

export default PasswordGenerator;
