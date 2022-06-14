import React from 'react';
import github from '../images/github.jpg';
import meta from '../images/meta.jpg';
import instagram from '../images/instagram.png';

export default function Footer() {
  return (
    <footer className='footer'>
      <a href=''>
        <img className='footer-github' src={github} />
      </a>
      <a href=''>
        <img className='footer-meta' src={meta} />
      </a>
      <a href=''>
        <img className='footer-instagram' src={instagram} />
      </a>
    </footer>
  );
}
