import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <div className='header'>
        <div className='site-title-container'>
            
        </div>
        <ul className='site-nav'>
            <li className='site-nav-item'><a href="#home" className='site-nav-link'>Home</a></li>
            <li className='site-nav-item'><a href="#about-me" className='site-nav-link'>About Me</a></li>
            <li className='site-nav-item'><a href="#projects" className='site-nav-link'>Projects</a></li>
            <li className='site-nav-item'><a href="#resume" className='site-nav-link'>Resume</a></li>
        </ul>
        
    </div>
  );
}