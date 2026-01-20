import './FinalCTA.css'

function FinalCTA() {
  return (
    <section id="final-cta" className="final-cta section">
      <div className="container">
        <div className="final-cta-content">
          <h2 className="section-title">
            Stop compromising between speed and security.
          </h2>
          <p className="section-subtitle">
            See how forward-thinking enterprises use Mozaic to increase engineering throughput by 40% while hardening their governance posture.
          </p>
          <div className="final-cta-button">
            <a href="#contact" className="btn btn-primary btn-hero">
              Request a Strategic Demo
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginLeft: '8px' }}>
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
          <p className="final-cta-subtext">
            See a live dry-run on complex, regulated data scenarios.
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalCTA
