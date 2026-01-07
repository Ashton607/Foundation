import React, { useEffect, useRef } from 'react'
import './About.css'
import about from '../../assets/About3.jpg'
import about2 from '../../assets/About2.jpg'
import about1 from '../../assets/About1.jpg'

const About = () => {
  const aboutRefs = [useRef(null), useRef(null), useRef(null)]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    aboutRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
    <div className='about-container'>
      {/* First about row */}
      <div className="about" ref={aboutRefs[0]}>
        <div className="about-left">
          <img src={about} alt="Our Work"/>
        </div>

        <div className="about-right">
          <h2>Nurturing Tomorrow's Leaders Today</h2>
          <p>Nurturing children and teaching the next generation is the most vital investment
          we can make in the future. It goes beyond simple instruction; it is about empowering young minds
          by instilling not just knowledge, but also resilience, empathy, and critical thinking.
          </p>
        </div>
      </div>

      {/* Second about row */}
      <div className="about" ref={aboutRefs[1]}>
        <div className="about-left">
          <img src={about2} alt="Our Work"/>
        </div>

        <div className="about-right">
          <h2>Building a Brighter Future, One Step at a Time</h2>
          <p>At our foundation, we are committed to creating lasting change by addressing the root causes of inequality
          and providing sustainable solutions. Through education, community engagement, and resource allocation,
          we strive to empower individuals to break the cycle of poverty and build a brighter future for themselves
          and their communities.</p>
        </div>
      </div>

      {/* Third about row */}
      <div className="about" ref={aboutRefs[2]}>
        <div className="about-left">
          <img src={about1} alt="Our Work"/>
        </div>

        <div className="about-right">
          <h2>Empowering Communities Through Education and Support</h2>
          <p>Our foundation is dedicated to uplifting communities by providing access to quality education,
          essential resources, and unwavering support. We believe that every individual, regardless of their background,
          deserves the opportunity to reach their full potential and contribute to a thriving society.</p>
        </div>
      </div>
    </div>
     {/* Add Footer here */}
      <div className="services-footer">
        <p>© 2025 Deon Ellison Foundation. All rights reserved.</p>
      </div>
    </>
  )
}

export default About