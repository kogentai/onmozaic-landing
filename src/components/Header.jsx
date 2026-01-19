import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <div className="nav-logo">
            <img src="/logo.png" alt="Mozaic" className="logo-img" />
            <span className="logo-text">Mozaic</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
