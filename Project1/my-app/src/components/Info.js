/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

export default function Info() {
  return (
    <div className='info'>
      <img className='info-image' src='../images/my_image.jpg' />
      <h1 className='info-name'>Laura Smith</h1>
      <h3 className='info-role'>Frontend Developer</h3>
      <div className='info-buttons'>
        <a href='#'>
          <img className='info-email' src='../images/email.jpg' />
        </a>
        <a href='#'>
          <img className='info-linkedin' src='../images/linkedin.png' />
        </a>
      </div>
    </div>
  );
}
