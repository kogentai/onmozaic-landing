import './Features.css'

function Features() {
  const features = [
    {
      icon: '🔒',
      title: 'The Trust Loop',
      description: 'Dry-run verification before any production change. Every deployment is backed by visible impact analysis and cost estimates—never risking hallucinated deletions or runaway costs.'
    },
    {
      icon: '💰',
      title: 'Cost & Quota Manager',
      description: 'Pre-flight cost estimation and budget enforcement. Know query costs before they\'re incurred and enforce team-wide budgets with transparent financial control.'
    },
    {
      icon: '🧠',
      title: 'Organizational Memory',
      description: 'Learns your company conventions, tech stack, and business logic. Mozaic knows your naming conventions, tech preferences, and generates production-ready code that fits seamlessly.'
    }
  ]

  return (
    <section id="features" className="features section">
      <div className="container">
        <div className="features-header">
          <h2 className="section-title">Simplify Complex Data Operations with AI</h2>
          <p className="section-subtitle">
            Leverage AI to automate repetitive tasks, gain deeper insights, and optimize workflows for unparalleled efficiency.
          </p>
        </div>
        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card card">
              <div className="feature-icon">
                <div className="icon-circle">{feature.icon}</div>
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
