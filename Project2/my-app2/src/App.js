import React from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import data from './data.js';
import './style.css';

export default function App() {
  const cards = data.map((card, index) => {
    return <Card key={index} {...card} />;
  });
  return (
    <div>
      <Navbar />
      {cards}
    </div>
  );
}
