import React from 'react';

const AdvancedSettings = ({ settings, setSettings }) => {
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setSettings(prevSettings => ({
      ...prevSettings,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div>
      <h2>Configuración Avanzada</h2>
      <label>
        Longitud:
        <input
          type="number"
          name="length"
          value={settings.length}
          min="8"
          onChange={handleChange}
        />
      </label>
      <label>
        Incluir mayúsculas:
        <input
          type="checkbox"
          name="includeUpper"
          checked={settings.includeUpper}
          onChange={handleChange}
        />
      </label>
      <label>
        Incluir minúsculas:
        <input
          type="checkbox"
          name="includeLower"
          checked={settings.includeLower}
          onChange={handleChange}
        />
      </label>
      <label>
        Incluir números:
        <input
          type="checkbox"
          name="includeNumbers"
          checked={settings.includeNumbers}
          onChange={handleChange}
        />
      </label>
      <label>
        Incluir caracteres especiales:
        <input
          type="checkbox"
          name="includeSpecial"
          checked={settings.includeSpecial}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default AdvancedSettings;
