import './About.css'

function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">
            A Unified Platform for Technical Authority and Strategic Speed.
          </h2>
        </div>
        
        <div className="about-content">
          <div className="value-props">
          <div className="value-prop">
              <h3 className="value-prop-title">Agility Without Technical Debt.</h3>
              <p className="value-prop-intro">
                Product owners and analysts need rapid insights to compete, but speed cannot come at the cost of stability or compliance.
              </p>
              <ul className="value-prop-list">
                <li><strong>Natural Language Infrastructure:</strong> Initiate sophisticated projects—integrating new regulated data sources or building cross-functional data marts—simply by describing the business need.</li>
                <li><strong>Radical Transparency:</strong> Understand the precise scope, impact, and cost of your data requests before they are built.</li>
                <li><strong>Unblock Innovation:</strong> Achieve 10x faster time-to-insight on complex requests without bypassing the necessary engineering guardrails.</li>
              </ul>
            </div>
            <div className="value-prop">
              <h3 className="value-prop-title">Force Multiplier for Your Senior Talent.</h3>
              <p className="value-prop-intro">
                Mozaic handles the massive volume of foundational engineering with the precision of a principal engineer, freeing your team for high-leverage architecture.
              </p>
              <ul className="value-prop-list">
                <li><strong>Inspectable Artifacts:</strong> No black boxes. Mozaic generates standardized, highly readable SQL and dbt models ready for rigorous peer review.</li>
                <li><strong>Autonomous Heavy Lifting:</strong> Delegate entire end-to-end workflows—from complex ingestion to staging models and transformations.</li>
                <li><strong>Governance Hardcoded:</strong> PII detection, naming conventions, and access controls are intrinsic to the generation process, not retrofitted after the fact.</li>
              </ul>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
