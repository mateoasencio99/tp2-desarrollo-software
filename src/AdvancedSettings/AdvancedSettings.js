import React from "react";

const AdvancedSettings = ({ settings, setSettings }) => {
  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="advanced-settings">
      <h2>Configuración Avanzada</h2>
      <div className="row">
        <div className="form-group col-md-4 mt-1">
          <label htmlFor="length">Cantidad de caracteres</label>
          <input
            id="length"
            className="form-control"
            type="number"
            name="length"
            value={settings.length}
            min="8"
            onChange={handleChange}
          />
        </div>
        <div className="form-group col-md-4 mt-1">
          <div className="checkbox-group">
            <div className="form-check">
              <input
                id="includeUpper"
                className="form-check-input"
                type="checkbox"
                name="includeUpper"
                checked={settings.includeUpper}
                onChange={handleChange}
              />
              <label htmlFor="includeUpper" className="form-check-label">
                Incluir mayúsculas
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                id="includeLower"
                className="form-check-input"
                type="checkbox"
                name="includeLower"
                checked={settings.includeLower}
                onChange={handleChange}
              />
              <label htmlFor="includeLower" className="form-check-label">
                Incluir minúsculas
              </label>
            </div>
          </div>
        </div>
        <div className="form-group col-md-4 mt-1">
          <div className="checkbox-group">
            <div className="form-check">
              <input
                id="includeNumbers"
                className="form-check-input"
                type="checkbox"
                name="includeNumbers"
                checked={settings.includeNumbers}
                onChange={handleChange}
              />
              <label htmlFor="includeNumbers" className="form-check-label">
                Incluir números
              </label>
            </div>
            <div className="form-check mt-3">
              <input
                id="includeSpecial"
                className="form-check-input"
                type="checkbox"
                name="includeSpecial"
                checked={settings.includeSpecial}
                onChange={handleChange}
              />
              <label htmlFor="includeSpecial" className="form-check-label">
                Incluir caracteres especiales
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSettings;
