import { useState } from 'react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="Mozaic" className="logo-img" />
            <span className="logo-text">Mozaic</span>
          </div>
          <button 
            className="menu-toggle"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? 'hamburger open' : 'hamburger'}>
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>
          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={closeMenu}>Home</a></li>
            <li><a href="#about" onClick={closeMenu}>About</a></li>
            <li><a href="#trust-loop" onClick={closeMenu}>Features</a></li>
            <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
