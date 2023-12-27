import React, { useEffect, useState } from 'react';

const Dragons = () => {
  const [dragons, setDragons] = useState([]);

  useEffect(() => {
    const fetchDragons = async () => {
      try {
        const response = await fetch('https://api.spacexdata.com/v4/dragons');
        const data = await response.json();
        setDragons(data);
      } catch (error) {
        console.error('Error fetching dragons:', error);
      }
    };

    fetchDragons();
  }, []);

};

export default Dragons;
