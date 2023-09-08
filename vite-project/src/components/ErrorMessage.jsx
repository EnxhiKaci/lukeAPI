import React from 'react';

function ErrorMessage({ message }) {
  return (
    <div>
      <p>{message}</p>
      <img
        src="https://via.placeholder.com/300"
        alt="Obi-Wan Kenobi"
      />
    </div>
  );
}

export default ErrorMessage;
