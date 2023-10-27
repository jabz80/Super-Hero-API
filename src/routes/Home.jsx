import React from 'react';
import { Link } from 'react-router-dom';
import Container from '../components/Container';

export default function Home() {
  return (
    <Container>
      <div className='hero'>
        <h1>Welcome to a universe where Heroes, Villains, and extraordinary powers collide.</h1>
        <Link to="/search">
          <button>Explore</button>
        </Link>
      </div>
    </Container>
  );
}


  
  
  
  

