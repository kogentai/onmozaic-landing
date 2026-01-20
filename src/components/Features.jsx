import './Features.css'

function Features() {
  return (
    <>
      <section id="trust-loop" className="features section">
        <div className="container">
          <div className="features-header">
            <h2 className="section-title">
            Data Engineering Agent for Healthcare
            </h2>
            <p className="section-subtitle">
            Mozaic analyzes data based on user prompts and organizational context to generate execution plans, but a promotion to production requires human approval.
            </p>
            <p className="section-subtitle">
            <br/>
Non-technical Users without HIPAA clearance can work on sensitive data without any PHI/PII leakage, while giving teams a faster, safer path from request to execution.
            </p>
            <p className="section-subtitle">
            <br/>
Trust Loop delivers autonomy without a loss of control while building fast and cost effective paths to putting your data to work.
            

            </p>
          </div>
          <div className="features-grid">
            <div className="feature-card card">
              <div className="feature-icon">
                <div className="icon-circle">🧠</div>
              </div>
              <h3 className="feature-title">Organizational Context</h3>
              <p className="feature-description">
                Mozaic builds organizational context into its planning process, including your specific architectural patterns, business logic definitions, and technology standards before planning any action.
              </p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">
                <div className="icon-circle">🔒</div>
              </div>
              <h3 className="feature-title">Dry-Run Simulation</h3>
              <p className="feature-description">
                Mozaic tests the data operations in an ephemeral, completely isolated sandbox using anonymized data. It verifies schema integrity, runs compliance checks, and ensures functional stability. 
              </p>
            </div>
            <div className="feature-card card">
              <div className="feature-icon">
                <div className="icon-circle">🛡️</div>
              </div>
              <h3 className="feature-title">Impact Analysis</h3>
              <p className="feature-description">
              No surprises. Mozaic explains what will change, what it might impact, and the expected cost. Still don't get it? Ask Mozaic to explain it in a way that makes sense to you.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
