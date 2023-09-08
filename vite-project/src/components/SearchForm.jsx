import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SearchForm() {
  const [resourceType, setResourceType] = useState('people');
  const [resourceId, setResourceId] = useState('');
  const navigate = useNavigate();

  const handleResourceChange = (e) => {
    setResourceType(e.target.value);
  };

  const handleIdChange = (e) => {
    setResourceId(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/${resourceType}/${resourceId}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select a resource:
          <select value={resourceType} onChange={handleResourceChange}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
          </select>
        </label>
        <label>
          Enter ID:
          <input
            type="number"
            value={resourceId}
            onChange={handleIdChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default SearchForm;
