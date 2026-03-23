import LandingEnhancements from '../components/LandingEnhancements'

export default function Page() {
  return (
    <>
      <LandingEnhancements />
      <nav id="nav">
        <div className="container">
          <a href="#" className="nav-logo">
            <img src="/mozaic-wordmark.png" alt="Mozaic" className="top-wordmark" />
          </a>
          <div className="nav-links">
            <a href="#how">How It Works</a>
            <a href="#modes">Capabilities</a>
            <a href="#architecture">Architecture</a>
            <a href="mailto:pratul@kogent.ai" className="nav-cta">
              Request Early Access →
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-eyebrow">Now accepting design partners</div>
            <h1>
              Build solutions from <em>intent,</em> not instructions.
            </h1>
            <p className="hero-sub">
              Mozaic is the agentic solution lifecycle platform where enterprise teams define requirements, fix bugs,
              deliver enhancements, and inject AI into legacy systems — without writing code.
            </p>
            <div className="hero-actions">
              <a href="mailto:pratul@kogent.ai" className="btn-primary">
                Request Early Access →
              </a>
              <a href="#how" className="btn-secondary">
                See How It Works
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-bar">
        <div className="container">
          <div className="proof-stat"><div className="number">70%</div><div className="label">Faster requirement-to-code</div></div>
          <div className="proof-divider" />
          <div className="proof-stat"><div className="number">&lt;5%</div><div className="label">Regression rate on changes</div></div>
          <div className="proof-divider" />
          <div className="proof-stat"><div className="number">90%+</div><div className="label">First-pass code fidelity</div></div>
          <div className="proof-divider" />
          <div className="proof-stat"><div className="number">0</div><div className="label">Lines of code to write</div></div>
        </div>
      </section>

      <section className="problem">
        <div className="container">
          <div className="section-label reveal">The problem</div>
          <h2 className="reveal">
            Your requirements lose fidelity at <em>every handoff.</em> Your maintenance burden <em>never stops growing.</em>
          </h2>
          <div className="problem-grid">
            <div className="problem-card reveal">
              <h3>Intent evaporates</h3>
              <p>PRDs lose meaning as they pass through Jira, Slack, design tools, and code reviews. What gets built is a shadow of what was envisioned.</p>
              <div className="stat">~40% of intent lost per handoff</div>
            </div>
            <div className="problem-card reveal">
              <h3>Maintenance consumes everything</h3>
              <p>Enterprise teams spend 60–80% of engineering capacity on bugs and enhancements, with tooling designed exclusively for greenfield work.</p>
              <div className="stat">60–80% of eng budget on maintenance</div>
            </div>
            <div className="problem-card reveal">
              <h3>Legacy systems sit untouched</h3>
              <p>Massive codebases desperately need AI capabilities but can&apos;t justify a rewrite. There is no safe, incremental path to modernization.</p>
              <div className="stat">$2.5T global legacy modernization debt</div>
            </div>
          </div>
        </div>
      </section>

      <section className="how" id="how">
        <div className="container">
          <div className="section-label reveal">How it works</div>
          <h2 className="reveal">Write what you mean.<br />Mozaic builds <em>what you wrote.</em></h2>
          <div className="how-steps">
            <div className="how-step reveal"><div className="step-num">01</div><h3>Author</h3><p>Write PRDs, bug reports, and enhancement requests in a purpose-built markdown editor with guided templates and real-time completeness scoring.</p></div>
            <div className="how-step reveal"><div className="step-num">02</div><h3>Understand</h3><p>Behind the scenes, Mozaic builds an intelligent understanding of your entire system — entities, rules, relationships — without you lifting a finger.</p></div>
            <div className="how-step reveal"><div className="step-num">03</div><h3>Generate</h3><p>Claude generates production-quality code in isolated E2B sandboxes. Every operation runs in its own secure microVM with hardware-level isolation.</p></div>
            <div className="how-step reveal"><div className="step-num">04</div><h3>Validate</h3><p>Acceptance criteria are tested automatically. Impact analysis flags regressions before they reach production. Review the output, not the code.</p></div>
          </div>
        </div>
      </section>

      <section className="modes" id="modes">
        <div className="container">
          <div className="section-label reveal">Capabilities</div>
          <h2 className="reveal">One platform. <em>Four workflows.</em></h2>
          <p className="modes-subtitle reveal">Most tools optimize for building new things. Mozaic covers the entire lifecycle — because enterprise teams spend most of their time on everything else.</p>
          <div className="modes-grid reveal">
            <div className="mode-card"><div className="mode-icon"><svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg></div><h3>Build New Products</h3><p>Author PRDs in a guided editor. Claude generates data models, APIs, and UI components from your structured requirements. Iterate by editing the document, not the code.</p><div className="mode-tag">Greenfield Development</div></div>
            <div className="mode-card"><div className="mode-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><line x1="15" y1="9" x2="9" y2="15" /><line x1="9" y1="9" x2="15" y2="15" /></svg></div><h3>Fix Bugs Faster</h3><p>File a structured bug report. The platform maps it against the system&apos;s intelligence layer to identify root causes, generate fixes, and run regression tests automatically.</p><div className="mode-tag">Bug Resolution</div></div>
            <div className="mode-card"><div className="mode-icon"><svg viewBox="0 0 24 24"><path d="M12 20V10M6 20V4M18 20v-6" /></svg></div><h3>Deliver Enhancements</h3><p>Scope changes with automatic impact analysis across the entire system. See every affected component and business rule before a single line changes. Zero-regression validation built in.</p><div className="mode-tag">Enhancement Delivery</div></div>
            <div className="mode-card"><div className="mode-icon"><svg viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg></div><h3>Inject AI into Legacy Systems</h3><p>Add intelligent search, classification, predictive analytics, or NLP interfaces to existing systems — without rewriting a single line of legacy code. Safe. Incremental. Non-invasive.</p><div className="mode-tag">Legacy AI Injection</div></div>
          </div>
        </div>
      </section>

      <section className="arch" id="architecture">
        <div className="container">
          <div className="section-label reveal">Architecture</div>
          <h2 className="reveal">Enterprise security. <em>Invisible intelligence.</em></h2>
          <p className="arch-subtitle reveal">Every code operation runs in its own isolated microVM. The intelligence layer works behind the scenes. You never see the complexity — only the results.</p>
          <div className="arch-stack reveal">
            <div className="arch-layer"><h3>Mozaic Editor</h3><p>Purpose-built markdown editor with document templates, slash commands, ontology-aware autocomplete, and real-time completeness scoring.</p><div className="tech">Markdown Editor/ AI-assisted</div></div>
            <div className="arch-layer"><h3>Intelligence Engine</h3><p>Silently builds and maintains a structured world model of your system. Powers impact analysis, regression detection, and smart suggestions — automatically.</p><div className="tech">Graph Database / NLP Pipeline</div></div>
            <div className="arch-layer"><h3>Claude + E2B Sandbox</h3><p>Code generation by Claude (Anthropic). Execution in isolated E2B microVMs powered by Firecracker. Hardware-level isolation. Zero cross-contamination.</p><div className="tech">Claude API / E2B Firecracker MicroVMs</div></div>
          </div>
        </div>
      </section>

      <section className="diff" id="compare">
        <div className="container">
          <div className="section-label reveal" style={{ textAlign: 'center' }}>How Mozaic compares</div>
          <h2 className="reveal">Not another <em>AI coding tool.</em></h2>
          <div className="reveal" style={{ overflowX: 'auto' }}>
            <table className="diff-table">
              <thead><tr><th></th><th>Mozaic</th><th>8090 / DevPlan</th><th>Copilot / Cursor</th><th>Jira + Notion</th></tr></thead>
              <tbody>
                <tr><td>Structured requirements editor</td><td className="check">Purpose-built</td><td>Agent-guided</td><td className="dim">None</td><td>Unstructured</td></tr>
                <tr><td>System intelligence</td><td className="check">Invisible, automatic</td><td>Visible knowledge graph</td><td className="dim">Codebase only</td><td className="dim">None</td></tr>
                <tr><td>Code generation + execution</td><td className="check">Integrated (Claude + E2B)</td><td>External agents</td><td>IDE-level assist</td><td className="dim">None</td></tr>
                <tr><td>Bug resolution workflow</td><td className="check">First-class</td><td className="dim">Not dedicated</td><td>Developer-driven</td><td>Ticket-based</td></tr>
                <tr><td>Legacy AI injection</td><td className="check">Dedicated workflow</td><td className="dim">Rewrite-focused</td><td className="dim">None</td><td className="dim">None</td></tr>
                <tr><td>Impact analysis</td><td className="check">Automatic</td><td>Via knowledge graph</td><td className="dim">None</td><td>Manual links</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="cta" id="cta">
        <div className="container">
          <h2 className="reveal">Ready to build software<br />from <em>intent?</em></h2>
          <p className="reveal">We&apos;re accepting 10 design partners for our initial program. Enterprise PM and engineering teams with complex products and legacy systems preferred.</p>
          <a href="mailto:pratul@kogent.ai" className="btn-gold reveal">Request Early Access →</a>
          <div className="cta-note reveal">No commitment required. We&apos;ll schedule a 30-minute conversation to see if there&apos;s a fit.</div>
        </div>
      </section>

      <footer>
        <div className="container">
          <div className="footer-brand">
            <img src="/mozaic-wordmark.png" alt="Mozaic wordmark" className="footer-wordmark" />
          </div>
          <div className="footer-links">
            <a href="#">About</a>
            <a href="#">Blog</a>
            <a href="#">Careers</a>
            <a href="mailto:founders@mozaic.dev">Contact</a>
          </div>
          <div className="footer-copy">© 2026 Mozaic. All rights reserved.</div>
        </div>
      </footer>
    </>
  )
}
