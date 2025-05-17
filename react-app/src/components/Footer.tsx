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
              <li className='site-nav-item'><a href="mailto:wlhberesford@gmail.com" className='site-nav-link'>Email</a></li>
              <li className='site-nav-item'><a href="https://www.linkedin.com/in/liam-beresford/" className='site-nav-link'>LinkedIn</a></li>
              <li className='site-nav-item'><a href="https://github.com/wlhberesford" className='site-nav-link'>GitHub</a></li>
          </ul>
        </div>
        
    </div>
  );
}