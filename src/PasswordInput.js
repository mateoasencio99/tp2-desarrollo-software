import React, { useState } from 'react';

const PasswordInput = ({ password, onPasswordChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    onPasswordChange(e.target.value);
  };

  return (
    <div>
      <input
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handleChange}
        placeholder="Ingrese su contraseña"
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? 'Ocultar' : 'Mostrar'}
      </button>
    </div>
  );
};

export default PasswordInput;
