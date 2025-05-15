import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer'>
        <div className='footer-title-container'>
            <h1 className='footer-title'>Contact</h1>
        </div>
        <div className='contact-list-container'>
          <ul className='contact-list'>
              <li className='site-nav-item'><a href="#landing" className='site-nav-link'>Landing Page</a></li>
              <li className='site-nav-item'><a href="#about-me" className='site-nav-link'>About Me</a></li>
              <li className='site-nav-item'><a href="#projects" className='site-nav-link'>Projects</a></li>
          </ul>
        </div>
        
    </div>
  );
}