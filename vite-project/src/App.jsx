import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import CharacterDetails from './components/CharacterDetail';
import PlanetDetails from './components/PlanetDetails';
import SearchForm from './components/SearchForm';
import ResourceDetails from './components/ResourceDetails';
import ErrorMessage from './components/ErrorMessage';
import CharacterHomeworld from './components/CharacterHomeworld';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/character/:id" element={<CharacterDetails />} />
        <Route path="/planet/:id" element={<PlanetDetails />} />
      </Routes>
      <div>
        <SearchForm />
        <ResourceDetails />
        <ErrorMessage />
        <CharacterHomeworld />
      </div>
    </Router>
  );
}

export default App;
