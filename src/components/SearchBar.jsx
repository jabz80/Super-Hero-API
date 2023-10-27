import React, { useRef } from 'react';


export default function SearchBar({ setHeroName }) {
     const input = useRef(null); // Create a ref to access the input value
  
    // Function to handle the click event of the search button
    const handleClick = async (e) => {
      e.preventDefault(); // Prevent the default form submission behavior
      const value = input.current.value; // Get the value from the input field
  
      if (!value) return; // If the search bar is empty, don't make the API call
      setHeroName(value)
    };
  
    return (
      <form className="SearchBar">
        <input type="text" placeholder="Search Character" ref={input} />
        <button onClick={handleClick}>Search</button>
      </form>
    );
  }

