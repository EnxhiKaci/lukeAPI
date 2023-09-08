import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate } from 'react-router-dom';

function CharacterDetails() {
  const { id } = useParams(); // Use useParams to get the id from the route
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState(null);
  const [homeworldName, setHomeworldName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    axios
      .get(`https://swapi.dev/api/people/${id}/`) // Use id from useParams
      .then((response) => {
        setCharacterData(response.data);
        const homeworldId = extractIdFromUrl(response.data.homeworld);
        return axios.get(`https://swapi.dev/api/planets/${homeworldId}/`);
      })
      .then((response) => {
        setHomeworldName(response.data.name);
      })
      .catch((err) => {
        setError("These aren't the droids you're looking for");
        console.error('Error fetching character data:', err);
      });
  }, [id]); // Use id from useParams

  // Helper function to extract ID from a URL
  const extractIdFromUrl = (url) => {
    const parts = url.split('/');
    return parts[parts.length - 2];
  };

  return (
    <div>
      {error ? (
        <div>
          <p>{error}</p>
          <img src="https://via.placeholder.com/300" alt="Obi-Wan Kenobi" />
        </div>
      ) : (
        <div>
          <h2>{characterData?.name}</h2>
          <ul>
            <li>Height: {characterData?.height} cm</li>
            <li>Mass: {characterData?.mass} kg</li>
            <li>Hair Color: {characterData?.hair_color}</li>
            <li>Skin Color: {characterData?.skin_color}</li>
            <li>Eye Color: {characterData?.eye_color}</li>
            <li>Birth Year: {characterData?.birth_year}</li>
            <li>Gender: {characterData?.gender}</li>
            <li>
              Homeworld:{' '}
              <Link to={`/planet/${extractIdFromUrl(characterData?.homeworld)}`}>
                {homeworldName}
              </Link>
            </li>
          </ul>
          <div>
            <Link to="/">Go Back to Home</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CharacterDetails;