import React, { useEffect, useRef } from 'react'
import './Services.css'
import service1 from '../../assets/service1.jpg'
import service2 from '../../assets/service2.jpg'
import service3 from '../../assets/service3.jpg'
import service1_icon from '../../assets/program-icon-1.png'
import service3_icon from '../../assets/program-icon-3.png'

const Services = () => {
  const serviceRefs = [useRef(null), useRef(null), useRef(null)]

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

    serviceRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current)
      }
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <div className='services'>
        {/* First service */}
        <div className="service" ref={serviceRefs[0]}>
          <div className="image-container">
            <img src={service1} alt="Teaching Service" />
            <div className="caption">
              <img src={service1_icon} alt="Service Icon" />
              <p>Teaching</p>
            </div>
          </div>
          <div className="service-right">
            <p>At the Deon Ellison Foundation, we are dedicated to empowering students through a range of comprehensive services designed to support their academic and personal growth.</p>
          </div>
        </div>

        {/* Second service */}
        <div className="service" ref={serviceRefs[1]}>
          <div className="image-container">
            <img src={service2} alt="Cultivating Future Success" />
            <div className="caption">
              <img src={service1_icon} alt="Service Icon" />
              <p>Cultivating Future Success</p>
            </div>
          </div>
          <div className="service-right">
            <p>We strive to create a nurturing environment where students can thrive, build confidence, and achieve their full potential. Join us in our mission to inspire and equip the next generation for success.</p>
          </div>
        </div>

        {/* Third service */}
        <div className="service" ref={serviceRefs[2]}>
          <div className="image-container">
            <img src={service3} alt="Graduating Service" />
            <div className="caption">
              <img src={service3_icon} alt="Service Icon" />
              <p>Graduating</p>
            </div>
          </div>
          <div className="service-right">
            <p>Our comprehensive approach ensures that students are well-prepared for their future careers and academic pursuits. We provide the tools and support needed for successful graduation and beyond.</p>
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

export default Services