import './Hero.css'

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">
            Mozaic is a Data Engineering Agent for Healthcare.
          </h1>
          <p className="hero-subtitle">
            Delivering end-to-end healthcare data pipelines at the speed of AI and with the wisdom of sages. 
            
          </p>

          <p className="hero-subtitle">
            Mozaic is an autonomous agent for non-technical domain experts with ironclad governance guardrails, producing inspectable, production-grade artifacts that withstand the scrutiny of your most demanding data architects.
          </p>

        </div>
      </div>
    </section>
  )
}

export default Hero
