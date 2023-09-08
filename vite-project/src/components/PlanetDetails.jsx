import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PlanetDetails({ match }) {
    const planetId = match.params.id;
    const [planetData, setPlanetData] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        // Fetch planet data based on planetId
        axios.get(`https://swapi.dev/api/planets/${planetId}/`)
            .then((response) => {
                setPlanetData(response.data);
            })
            .catch((err) => {
                setError('These aren\'t the droids you\'re looking for');
                console.error('Error fetching planet data:', err);
            });
    }, [planetId]);

    return (
        <div>
            {error ? (
                <div>
                    <p>{error}</p>
                    <img
                        src="https://via.placeholder.com/300"
                        alt="Obi-Wan Kenobi"
                    />
                </div>
            ) : (
                <div>
                    <h2>{planetData?.name}</h2>
                    <ul>
                        <li>Climate: {planetData?.climate}</li>
                        <li>Terrain: {planetData?.terrain}</li>
                        <li>Population: {planetData?.population}</li>
                        <li>Gravity: {planetData?.gravity}</li>
                        <li>Orbital Period: {planetData?.orbital_period}</li>
                    </ul>
                </div>
            )}
            <div>
            <Link to="/">Go Back to Home</Link>
            </div>
        </div>
    );
}

export default PlanetDetails;