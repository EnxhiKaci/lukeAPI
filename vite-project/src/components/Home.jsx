import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const characters = [
    { id: 1, name: 'Luke Skywalker' },
    { id: 2, name: 'Darth Vader' },
   
  ];

  const planets = [
    { id: 1, name: 'Tatooine' },
    { id: 2, name: 'Alderaan' },
 
  ];

  return (
    <div>
      <h1>Welcome to Star Wars App</h1>
      <h2>Characters:</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <Link to={`/character/${character.id}`}>{character.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Planets:</h2>
      <ul>
        {planets.map((planet) => (
          <li key={planet.id}>
            <Link to={`/planet/${planet.id}`}>{planet.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;