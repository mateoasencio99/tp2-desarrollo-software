import React from 'react';

const PasswordStrength = ({ password }) => {
  const calculateStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (lengthCriteria && hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChars) {
      return 'Muy segura';
    }
    if (lengthCriteria && hasUpperCase && hasLowerCase && (hasNumbers || hasSpecialChars)) {
      return 'Segura';
    }
    return 'Poco segura';
  };

  return (
    <div>
      <p>Fortaleza: {calculateStrength(password)}</p>
    </div>
  );
};

export default PasswordStrength;
