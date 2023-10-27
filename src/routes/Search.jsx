import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';

export default function Search() {
  const [heroes, setHeroes] = useState([]); // stores the hero data from fetch call.
  const [heroName, setHeroName] = useState(''); //grabs name from search bar.
  const [isLoading, setIsLoading] = useState(false); // loader to view in between fetch calls.

  useEffect(() => {
    if (heroName) {
      const fetchHeroes = async () => {
        try {
          setIsLoading(true);
          const response = await fetch(`https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/${import.meta.env.VITE_API_KEY}/search/${heroName}`);
          const data = await response.json();
          setHeroes(data);
        } catch (err) {
          console.error(err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchHeroes();
    }
  }, [heroName]);

  // SearchBar is given a prop of setHeroesName. Returns with a hero name from the search bar which activates the useEffect.
  return (
    <div>
      <SearchBar setHeroName={setHeroName} /> 
      <div className="heroes">
        {isLoading ? (
          <div className='loader'></div>
        ) : (
          heroes.results && heroes.results.map((hero) => (
            <div className="hero" key={hero.id}>
              <img src={hero.image.url} alt={hero.name} />
              <h4>{hero.name}</h4>
              <p><strong>Full Name:</strong> {hero.biography['full-name']}</p>
              <p>{hero.name} was born in {hero.biography['place-of-birth']}. He is {hero.appearance.height[0]} tall. Also known as {hero.biography.aliases.join(', ')}.</p>            
              <p><strong>First Appeared:</strong> {hero.biography['first-appearance']}</p>            
              <p><strong>Intelligence:</strong> {hero.powerstats['intelligence']}</p>            
              <p><strong>Power:</strong> {hero.powerstats['power']}</p>            
              <p><strong>Speed:</strong> {hero.powerstats['speed']}</p>            
              <p><strong>Strength:</strong> {hero.powerstats['strength']}</p>            
            </div>
          ))
        )}
      </div>
    </div>
  );
}
