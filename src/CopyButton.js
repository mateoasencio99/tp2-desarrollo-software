import React, { useState } from 'react';

const CopyButton = ({ password }) => {
  const [copyMessage, setCopyMessage] = useState('');

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      setCopyMessage('Contraseña copiada al portapapeles');
      setTimeout(() => setCopyMessage(''), 3000); // Clear message after 3 seconds
    }, (err) => {
      console.error('Error al copiar la contraseña: ', err);
    });
  };

  return (
    <div>
      <button onClick={copyToClipboard} disabled={!password}>
        Copiar Contraseña
      </button>
      {copyMessage && <div>{copyMessage}</div>}
    </div>
  );
};

export default CopyButton;
