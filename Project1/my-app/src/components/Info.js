/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import my_image from '../images/my_image.jpg';
import email from '../images/email.jpg';
import linkedin from '../images/linkedin.png';

export default function Info() {
  return (
    <div className='info'>
      <img className='info-image' src={my_image} />
      <h1 className='info-name'>Laura Smith</h1>
      <h3 className='info-role'>Frontend Developer</h3>
      <div className='info-buttons'>
        <a href='#'>
          <img className='info-email' src={email} />
        </a>
        <a href='#'>
          <img className='info-linkedin' src={linkedin} />
        </a>
      </div>
    </div>
  );
}
