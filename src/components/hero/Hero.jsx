import React, { useEffect, useState } from 'react'
import logo from '../../assets/logo.png'
import './Hero.css'

const Hero = () => {
    useEffect(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const h1 = entry.target.querySelector('h1');
      const p = entry.target.querySelector('p');
      const h3 = entry.target.querySelector('h3.logo1');
      
      if (entry.isIntersecting) {
        h3.classList.add('animate-in');
        h1.classList.add('animate-in');
        p.classList.add('animate-in');
      } else {
        h3.classList.remove('animate-in');
        h1.classList.remove('animate-in');
        p.classList.remove('animate-in');
      }
    });
  }, { threshold: 0.1 });

  const heroText = document.querySelector('.hero-text');
  if (heroText) {
    observer.observe(heroText);
  }

  return () => observer.disconnect();
}, []);
  return (
    <div className='hero'>
      <div className="hero-text">
        <h3 className='logo1'><img src={logo} alt="" /><br />Deon Ellison Foundation</h3>
        <h1>Ensuring a better future for others</h1>
        <p>The debt we owe to the next generation is to give them the tools, the hope, and the 
        opportunity to create a better world.</p>

      </div>
    </div>
  )
}

export default Hero
