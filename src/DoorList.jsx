import React, { useState, useEffect } from 'react';
import Door from './Door';

function DoorList() {
  const [doors, setDoors] = useState([]);

  useEffect(() => {
    fetch('https://saddle-children-1338.codedamn.app/doors')
      .then((response) => response.json())
      .then((data) => setDoors(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Door Status</h2>
      {doors.map((door) => (
        <Door key={door.id} name={door.name} status={door.status} />
      ))}
    </div>
  );
}

export default DoorList;
