import React, { useState } from "react";

const CopyButton = ({ password }) => {
  const [copyMessage, setCopyMessage] = useState("");

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(
      () => {
        setCopyMessage("Contraseña copiada al portapapeles");
        setTimeout(() => setCopyMessage(""), 3000);
      },
      (err) => {
        console.error("Error al copiar la contraseña: ", err);
      }
    );
  };

  return (
    <div>
      <button
        className="btn btn-warning w-100"
        onClick={copyToClipboard}
        disabled={!password}
      >
        Copiar Contraseña
      </button>
      {copyMessage && (
        <div className="w-100 mt-2 alert alert-success text-center">
          {copyMessage}
        </div>
      )}
    </div>
  );
};

export default CopyButton;
