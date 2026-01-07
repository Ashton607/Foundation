import React, { useState } from 'react'
import { Globe, Menu, House,BadgeInfo,PhoneForwarded,XCircle } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu)
  }

  const buttonColor = isHomePage ? 'white' : 'black'

  return (
    <nav>
      <ul className={mobileMenu ? '' : 'hide-mobile-menu'}>
        <Link to="/">
          <button style={{ color: buttonColor }}>
            <House className="iconHouse" /> Home
          </button>
        </Link>
        <Link to="/services">
          <button style={{ color: buttonColor }}>
            <Globe className="iconServices" /> Services
          </button>
        </Link>
        <Link to="/about">
          <button style={{ color: buttonColor }}>
            <BadgeInfo className="iconAbout" /> About
          </button>
        </Link>
        <Link to="/contact">
          <button style={{ color: buttonColor }}>
            <PhoneForwarded className="iconContact" /> Connect
          </button>
        </Link>
      </ul>
      {mobileMenu ? (
        <XCircle className="menu-close" onClick={toggleMenu}style={{ color: buttonColor }} />
      ) : (
        <Menu className="menu-icon" onClick={toggleMenu} style={{ color: buttonColor }} />
      )}
    </nav>
  )
}

export default Navbar