import React from 'react';
import Navbar from './components/Navbar';
import Card from './components/Card';
import Hero from './components/Hero';
import data from './data';

import './style.css';

export default function App() {
  const cards = data.map((card) => <Card key={card.id} {...card} />);

  return (
    <div className='container'>
      <Navbar />
      <Hero />
      <section className='cards-list'>{cards}</section>
    </div>
  );
}
