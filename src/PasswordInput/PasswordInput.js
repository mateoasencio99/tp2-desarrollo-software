import React, { useState } from "react";
import "./PasswordInput.css";

const PasswordInput = ({ password, onPasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };

  return (
    <div className="d-flex">
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={handleChange}
        placeholder="Ingrese su contraseña"
        className="form-control font-size-30 border border-dark"
      />
      <button
        className="btn btn-primary"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? "Ocultar" : "Mostrar"}
        <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
      </button>
    </div>
  );
};

export default PasswordInput;
