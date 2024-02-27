import React from 'react';

function Door({ name, status }) {
  return (
    <div>
      <h3>{name}</h3>
      <p>Status: {status}</p>
    </div>
  );
}

export default Door;
