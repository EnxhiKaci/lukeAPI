import React from 'react';

function ResourceDetails({ resource }) {
  return (
    <div>
      <h2>{resource.name}</h2>
      <ul>
        <li>Attribute 1: {resource.attribute1}</li>
        <li>Attribute 2: {resource.attribute2}</li>
        <li>Attribute 3: {resource.attribute3}</li>
      </ul>
    </div>
  );
}

export default ResourceDetails;