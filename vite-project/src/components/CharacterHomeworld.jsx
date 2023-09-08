import React from 'react';
import { Link } from 'react-router-dom';

function CharacterHomeworld({ homeworldName, homeworldId }) {
  return (
    <div>
      <p>Homeworld: {homeworldName}</p>
      <p>
        <Link to={`/planet/${homeworldId}`}>View Homeworld</Link>
      </p>
    </div>
  );
}

export default CharacterHomeworld;