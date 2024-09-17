import React, { useState } from "react";
import AdvancedSettings from "./AdvancedSettings/AdvancedSettings";
import "./App.css";
import CopyButton from "./CopyButton/CopyButton";
import PasswordInput from "./PasswordInput/PasswordInput";
import PasswordStrength from "./PasswordStrenght/PasswordStrength";
import PasswordGenerator from "./PasswordGenerator/PasswordGenerator";

const App = () => {
  const [password, setPassword] = useState("");
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [settings, setSettings] = useState({
    length: 12,
    includeUpper: true,
    includeLower: true,
    includeNumbers: true,
    includeSpecial: true,
  });

  const handlePasswordChange = (newPassword) => {
    setPassword(newPassword);
  };

  const toggleAdvancedSettings = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div className="container p-4">
      <div className="row shadow-lg p-4 border-radious">
        <div className="col-md-12 text-center mb-4">
          <h1>TU CONTRASEÑA SEGURA - MATEO ASENCIO</h1>
        </div>
        <div className="col-md-12 mb-4">
          <PasswordInput
            password={password}
            onPasswordChange={handlePasswordChange}
          />
        </div>
        <div className="col-md-12 mb-4">
          <PasswordGenerator
            settings={settings}
            onPasswordChange={handlePasswordChange}
          />
        </div>
        <div className="col-md-12 mb-4">
          <CopyButton password={password} />
        </div>
        <div className="col-md-12 mb-4">
          <PasswordStrength password={password} />
        </div>
        <div className="col-md-12 mb-4">
          <button className="btn btn-info" onClick={toggleAdvancedSettings}>
            {showAdvanced
              ? "Ocultar Configuración Avanzada"
              : "Mostrar Configuración Avanzada"}
          </button>
        </div>
        {showAdvanced && (
          <AdvancedSettings settings={settings} setSettings={setSettings} />
        )}
      </div>
    </div>
  );
};

export default App;
