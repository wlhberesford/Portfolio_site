import React from 'react';
import './LandingField.css';


export default function LandingField({img, title, body, text_left}:{img: string, title: string, body: string, text_left?: boolean}) {
  
  if (text_left || text_left === undefined) {
    return (
      <div className='LandingField'>
          <div className='LF-left'>
              <div className='LF-text'>
                  <h1 className='LF-title'>{title}</h1>
                  <p className='LF-body'>{body}</p>
              </div>
          </div>
          <div className='LF-right'>
                  <img src={img} alt='This Should be an Img :(' />
              
          </div>
          
      </div>
    );
  }
  else if(!text_left) {
    return (
      <div className='LandingField'>
          <div className='LF-left'>
                  <img src={img} alt='This Should be an Img :(' />
              
          </div>
          <div className='LF-right'>
              <div className='LF-text'>
                  <h1 className='LF-title'>{title}</h1>
                  <p className='LF-body'>{body}</p>
              </div>
          </div>
          
      </div>
    );
  }
}