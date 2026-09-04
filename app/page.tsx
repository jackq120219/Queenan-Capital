const mandates = [
  {
    number: '01',
    title: 'Capital',
    body: 'A long-term ownership mindset focused on durable businesses, strategic assets, and opportunities where patient capital can compound.'
  },
  {
    number: '02',
    title: 'Operations',
    body: 'A preference for the real economy: logistics, infrastructure, industrial services, and the systems that quietly keep commerce moving.'
  },
  {
    number: '03',
    title: 'Intelligence',
    body: 'Research built for decisions — combining public data, direct industry outreach, competitive analysis, and first-principles thinking.'
  }
];

const principles = [
  ['01', 'Think in decades', 'Optimize for durable value rather than short-term attention.'],
  ['02', 'Know the system', 'Understand how a business actually works before deciding what it is worth.'],
  ['03', 'Stay independent', 'Build conviction from evidence, not consensus.'],
  ['04', 'Keep it useful', 'Research should end in a clearer decision, a better process, or a real operating advantage.']
];

export default function Home() {
  return (
    <main className="site-shell">
      <div className="utility-bar">
        <span>QUEENAN CAPITAL LLC</span>
        <span>CHICAGO · MASSACHUSETTS</span>
      </div>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Queenan Capital home">
          <span className="brand-mark">Q</span>
          <span className="brand-name">QUEENAN CAPITAL</span>
        </a>
        <nav>
          <a href="#mandate">Mandate</a>
          <a href="#platform">Platform</a>
          <a href="#principles">Principles</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="mailto:contact@queenancapital.com">Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="overline">Independent holding &amp; research platform</div>
            <h1>
              Build patiently.<br />
              <em>Act decisively.</em>
            </h1>
            <p className="hero-deck">
              Queenan Capital is being built as a long-term home for operating ideas,
              strategic research, and future investments in the systems that power the real economy.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#mandate">Explore the mandate</a>
              <a className="text-link" href="#platform">View the platform <span>↗</span></a>
            </div>
          </div>

          <aside className="hero-brief" aria-label="Queenan Capital brief">
            <div className="brief-topline">
              <span>THE MANDATE</span>
              <span>2026 —</span>
            </div>
            <p>
              Find overlooked systems. Understand them deeply. Build the capability to own,
              improve, and compound them over time.
            </p>
            <div className="brief-grid">
              <div><small>HORIZON</small><strong>Long-term</strong></div>
              <div><small>ORIENTATION</small><strong>Owner-minded</strong></div>
              <div><small>FOCUS</small><strong>Real economy</strong></div>
              <div><small>METHOD</small><strong>Research first</strong></div>
            </div>
          </aside>
        </div>
        <div className="hero-footer">
          <span>QUEENANCAPITAL.COM</span>
          <span>EST. 2026</span>
        </div>
      </section>

      <section id="mandate" className="section mandate-section">
        <div className="section-heading">
          <div className="section-kicker">I. MANDATE</div>
          <h2>A platform for building,<br />not trading attention.</h2>
          <p>
            Queenan Capital is deliberately broad enough to follow opportunity, but disciplined
            enough to know what belongs inside the platform.
          </p>
        </div>

        <div className="mandate-list">
          {mandates.map((item) => (
            <article className="mandate-row" key={item.number}>
              <span className="mandate-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span className="row-arrow">→</span>
            </article>
          ))}
        </div>
      </section>

      <section id="platform" className="platform-section">
        <div className="platform-monogram" aria-hidden="true">W</div>
        <div className="platform-content">
          <div className="section-kicker inverse">II. OPERATING PLATFORM</div>
          <h2>Waterline</h2>
          <p className="platform-lead">
            The first operating platform under Queenan Capital — focused on logistics intelligence,
            commercial research, and making fragmented market information more actionable.
          </p>
          <div className="platform-meta">
            <div>
              <span>01</span>
              <p>Research commercial shipping and logistics markets.</p>
            </div>
            <div>
              <span>02</span>
              <p>Organize fragmented counterparties, routes, and opportunities.</p>
            </div>
            <div>
              <span>03</span>
              <p>Create an operating base for future logistics execution.</p>
            </div>
          </div>
          <a className="button button-outline" href="#about">Inside Queenan Capital</a>
        </div>
      </section>

      <section id="principles" className="section principles-section">
        <div className="principles-intro">
          <div className="section-kicker">III. PRINCIPLES</div>
          <p className="statement">
            The advantage is not knowing everything. It is knowing what matters — and staying with it long enough to be right.
          </p>
        </div>
        <div className="principles-list">
          {principles.map(([number, title, body]) => (
            <div className="principle" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-label">
          <div className="section-kicker inverse">IV. ABOUT</div>
          <span>QUEENAN CAPITAL</span>
        </div>
        <div className="about-copy">
          <h2>Built as a long-term institution from day one.</h2>
          <div className="about-columns">
            <p>
              Queenan Capital is an independent holding and research platform in development.
              Today, the work centers on building operating capability, studying markets directly,
              and creating useful tools before pursuing larger ownership opportunities.
            </p>
            <p>
              The objective is simple: build a disciplined institution that can move between
              research, operations, and capital without losing the patience required to do any of them well.
            </p>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div>
          <div className="section-kicker">INQUIRIES</div>
          <h2>Start with a conversation.</h2>
        </div>
        <a href="mailto:contact@queenancapital.com">contact@queenancapital.com <span>↗</span></a>
      </section>

      <footer>
        <div className="footer-brand">QUEENAN CAPITAL</div>
        <div>Capital · Operations · Intelligence</div>
        <div>© 2026 Queenan Capital LLC</div>
      </footer>
    </main>
  );
}
