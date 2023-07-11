import React from 'react'
import './Hero.css'
import Typed from 'react-typed';

function Hero() {
  return (
    <div className='hero-wrapper'>
        <div className='main-info'>
            <h1>Hi, I'm Anoop.</h1>
            <h3>-Front-End Developer-</h3>
            
            <Typed
                className='typed-text'
                strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
                typeSpeed={40}
                backSpeed={60}
                loop
            />
           
            <button className='main-btn'>Contact Me</button>
        </div>
    </div>
  )
}

export default Hero