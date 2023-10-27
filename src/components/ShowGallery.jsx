import React, { useEffect, useState } from 'react';

export default function ShowGallery() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await fetch(
          "https://api.tvmaze.com/shows"
        );
        const data = await response.json();
        setShows(data);
        
      } catch (error) {
        console.error("Error fetching shows:", error);
      }
    }

    fetchShows();
  }, []);

  return (
    <div className="all-show-cards">
      {shows.map((show) => (
        <div key={show.id} className="show-card">
          <img src={show.image.medium} alt={show.name} />
          <h3>{show.name}</h3>
        </div>
      ))}
    </div>
  );
}





