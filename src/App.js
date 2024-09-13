import React, { useState } from 'react';
import PasswordInput from './PasswordInput';
import PasswordStrength from './PasswordStrength';
import CopyButton from './CopyButton';
import AdvancedSettings from './AdvancedSettings';

const App = () => {
  const [password, setPassword] = useState('');
  const [history, setHistory] = useState([]);
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

  const generateRandomPassword = () => {
    const { length, includeUpper, includeLower, includeNumbers, includeSpecial } = settings;
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const specialChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allChars = '';
    if (includeUpper) allChars += upperCaseChars;
    if (includeLower) allChars += lowerCaseChars;
    if (includeNumbers) allChars += numbers;
    if (includeSpecial) allChars += specialChars;

    let password = '';
    if (includeUpper) password += upperCaseChars.charAt(Math.floor(Math.random() * upperCaseChars.length));
    if (includeLower) password += lowerCaseChars.charAt(Math.floor(Math.random() * lowerCaseChars.length));
    if (includeNumbers) password += numbers.charAt(Math.floor(Math.random() * numbers.length));
    if (includeSpecial) password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));

    for (let i = password.length; i < length; i++) {
      password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    // Shuffle password to ensure randomness
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    setPassword(password);
    setHistory((prevHistory) => [password, ...prevHistory]);
  };

  const toggleAdvancedSettings = () => {
    setShowAdvanced(!showAdvanced);
  };

  return (
    <div>
      <PasswordInput password={password} onPasswordChange={handlePasswordChange} />
      <PasswordStrength password={password} />
      <button onClick={generateRandomPassword}>Generar Contraseña Aleatoria</button>
      <CopyButton password={password} />
      <button onClick={toggleAdvancedSettings}>
        {showAdvanced ? 'Ocultar Configuración Avanzada' : 'Mostrar Configuración Avanzada'}
      </button>
      {showAdvanced && <AdvancedSettings settings={settings} setSettings={setSettings} />}
    </div>
  );
};

export default App;
