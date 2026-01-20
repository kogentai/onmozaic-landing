import './Capabilities.css'

function Capabilities() {
  const capabilities = [
    {
      title: 'Production-Grade Modeling',
      description: 'Generates multi-layer dbt projects (staging, intermediate, marts) complete with comprehensive data quality tests and documentation.'
    },
    {
      title: 'Intelligent Ingestion',
      description: 'Autonomously map complex schemas from sources like Salesforce or Workday, instantly flagging sensitive data and generating resilient incremental load logic.'
    },
    {
      title: 'Proactive Optimization',
      description: 'An autonomous agent that constantly profiles high-cost queries, proactively engineering partitioning and clustering strategies to slash infrastructure spend.'
    },
    {
      title: 'Enterprise Orchestration',
      description: 'Automatically integrates validated pipelines into your existing Airflow, Prefect, or dbt Cloud schedules.'
    }
  ]

  return (
    <section id="capabilities" className="capabilities section">
      <div className="container">
        <div className="capabilities-header">
          <h2 className="section-title">
            Integrated into Your Data Stack.
          </h2>
          <p className="section-subtitle">
            Mozaic integrates seamlessly into sophisticated modern data stacks, expertly managing the lifecycle of complex data.
          </p>
        </div>
        <div className="capabilities-grid">
          {capabilities.map((capability, index) => (
            <div key={index} className="capability-card card">
              <h3 className="capability-title">{capability.title}</h3>
              <p className="capability-description">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
