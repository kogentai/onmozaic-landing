import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            AI-Powered Solutions for Modern Data Teams
          </h1>
          <p className="hero-subtitle">
            Transform the way you build data infrastructure with intelligent AI-powered solutions that streamline operations, enhance decision-making, and drive growth.
          </p>
          <p className="hero-tagline">
            The Trusted Data Engineer — AI-Native Governance with Guardrails
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary btn-hero">
              Get Started
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#features" className="btn btn-hero">
              Learn More
            </a>
          </div>
        </div>
        <div className="hero-preview">
          <div className="preview-card">
            <div className="preview-content">
              <div className="preview-header">
                <span className="preview-badge">Mozaic Platform</span>
              </div>
              <div className="preview-body">
                <p>Autonomous data infrastructure with enterprise governance</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
