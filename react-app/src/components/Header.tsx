import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className='site-title-container'>
            <h1 className='site-title'>Liam's Portfolio</h1>
        </div>
        <ul className='site-nav'>
            <li className='site-nav-item'><a href="#landing" className='site-nav-link'>Landing Page</a></li>
            <li className='site-nav-item'><a href="#about-me" className='site-nav-link'>About Me</a></li>
            <li className='site-nav-item'><a href="#projects" className='site-nav-link'>Projects</a></li>
        </ul>
        
    </div>
  );
}