import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Accelerate Growth Through Actionable Intelligence</h2>
          <p className="section-subtitle">
            Unlock the full potential of your data with our advanced AI analytics and reporting tools.
          </p>
        </div>
        
        <div className="about-content">
          <div className="about-description">
            <p className="about-text">
              Mozaic is a B2B SaaS platform that autonomously designs, builds, and operates data infrastructure while maintaining organizational governance, cost controls, and compliance standards. Built for enterprise data engineering teams, Mozaic transforms how organizations manage data pipelines by combining autonomous task execution with rigorous safety controls and organizational context awareness.
            </p>
            
            <div className="value-props">
              <div className="value-prop">
                <h3 className="value-prop-title">For Data Engineers</h3>
                <ul className="value-prop-list">
                  <li>Eliminate repetitive work — No more manual pipeline scaffolding, SQL boilerplate, or dbt model setup</li>
                  <li>Instant organizational knowledge — Mozaic knows your naming conventions, tech preferences, and business logic</li>
                  <li>Safe autonomy — Every deployment is backed by visible impact analysis and cost estimates</li>
                  <li>Self-correction — Failures are caught in dry runs, not production; the agent auto-fixes common errors</li>
                </ul>
              </div>
              
              <div className="value-prop">
                <h3 className="value-prop-title">For Data Managers</h3>
                <ul className="value-prop-list">
                  <li>Accelerated delivery — Ship data solutions in days, not weeks</li>
                  <li>Cost predictability — Know query costs before they're incurred; enforce team-wide budgets</li>
                  <li>Compliance by default — PII detection, governance rules, and audit trails embedded</li>
                  <li>Team amplification — One manager + 3 engineers can deliver the throughput of 2x team</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
