import React from 'react';
import About from './About';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div
      style={{ backgroundColor: 'skyblue', height: '550px', padding: '72px' }}
    >
      <p> Welecome to Home Page...</p>
      <Link to={'/About'}>......To About page</Link>
    </div>
  );
}
