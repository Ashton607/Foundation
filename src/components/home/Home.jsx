import React from 'react'
import './Home.css'
import Hero from '../hero/Hero'

const Home = () => {
  return (
     <div className="home-page">
      <Hero />
      <div className="footer">
        <p>© 2025 Deon Ellison Foundation. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Home
