const currentWork = [
  {
    title: 'Waterline',
    status: 'Live',
    body: 'Logistics intelligence and commercial research for the Great Lakes and adjacent freight markets.',
    href: 'https://waterlineintel.com',
  },
  {
    title: 'Acquisition Research',
    status: 'In development',
    body: 'Building a disciplined process for evaluating durable small and lower-middle-market operating businesses.',
  },
  {
    title: 'Research Desk',
    status: 'Active',
    body: 'Direct market research on infrastructure, transportation, industrial services, and capital allocation.',
  },
];

const focusAreas = [
  {
    number: '01',
    title: 'Operating businesses',
    body: 'Businesses with understandable economics, essential customers, and room for better systems, stronger execution, or patient ownership.',
  },
  {
    number: '02',
    title: 'Logistics & infrastructure',
    body: 'The physical networks behind commerce — freight, terminals, distribution, industrial services, and the infrastructure around them.',
  },
  {
    number: '03',
    title: 'Decision intelligence',
    body: 'Research that is useful because it changes what we do: who we call, what we avoid, where we look next, and when we act.',
  },
];

const researchThemes = [
  ['Great Lakes freight', 'Where small shippers, ports, carriers, and commodity flows create overlooked commercial opportunities.'],
  ['Industrial services', 'What makes a local service business durable, defensible, and worth owning for a long time.'],
  ['Capital structure', 'How debt, ownership, and operating cash flow interact when the objective is durability rather than financial engineering.'],
];

export default function Home() {
  return (
    <main id="top">
      <div className="topline">
        <span>Queenan Capital LLC</span>
        <span>Independent · Established 2026</span>
      </div>

      <header className="header">
        <a className="wordmark" href="#top" aria-label="Queenan Capital home">
          <span className="monogram">QC</span>
          <span>QUEENAN CAPITAL</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          <a href="#work">Current Work</a>
          <a href="#focus">Focus</a>
          <a href="#research">Research</a>
          <a href="#letter">About</a>
          <a className="nav-cta" href="mailto:contact@queenancapital.com">Contact</a>
        </nav>

        <details className="mobile-nav">
          <summary>Menu</summary>
          <div className="mobile-menu">
            <a href="#work">Current Work</a>
            <a href="#focus">Focus</a>
            <a href="#research">Research</a>
            <a href="#letter">About</a>
            <a href="mailto:contact@queenancapital.com">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero">
        <div className="hero-main">
          <p className="eyebrow">Independent holding &amp; research company</p>
          <h1>Queenan Capital</h1>
          <p className="hero-copy">
            We are building a long-term platform around logistics, industrial services,
            operating businesses, and the research required to understand them well.
          </p>
          <div className="hero-links">
            <a className="primary-link" href="#work">See what we are building</a>
            <a className="quiet-link" href="mailto:contact@queenancapital.com">contact@queenancapital.com</a>
          </div>
        </div>

        <aside className="thesis-panel">
          <div className="panel-rule" />
          <p className="panel-label">Working thesis</p>
          <p className="panel-quote">
            Better ownership starts with understanding the system before trying to optimize it.
          </p>
          <dl>
            <div><dt>Time horizon</dt><dd>Long</dd></div>
            <div><dt>Geography</dt><dd>United States</dd></div>
            <div><dt>Bias</dt><dd>Real economy</dd></div>
            <div><dt>Method</dt><dd>Research first</dd></div>
          </dl>
        </aside>
      </section>

      <section id="work" className="work-section">
        <div className="section-top">
          <p className="section-label">Current Work</p>
          <p className="section-note">What exists now — not a hypothetical portfolio.</p>
        </div>

        <div className="work-list">
          {currentWork.map((item, index) => {
            const content = (
              <>
                <span className="work-index">0{index + 1}</span>
                <div className="work-title-wrap">
                  <h2>{item.title}</h2>
                  <span className="status">{item.status}</span>
                </div>
                <p>{item.body}</p>
                <span className="work-arrow">{item.href ? '↗' : '—'}</span>
              </>
            );

            return item.href ? (
              <a className="work-row" href={item.href} target="_blank" rel="noreferrer" key={item.title}>{content}</a>
            ) : (
              <div className="work-row" key={item.title}>{content}</div>
            );
          })}
        </div>
      </section>

      <section id="focus" className="focus-section">
        <div className="focus-heading">
          <p className="section-label inverse">What belongs here</p>
          <h2>Focused enough to build expertise. Broad enough to follow a real opportunity.</h2>
        </div>

        <div className="focus-list">
          {focusAreas.map((item) => (
            <article key={item.number}>
              <span>{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="waterline-feature">
        <div className="waterline-copy">
          <p className="section-label">Featured platform</p>
          <div className="waterline-title-row">
            <h2>Waterline</h2>
            <span>01</span>
          </div>
          <p className="waterline-deck">
            Waterline is the first operating project under Queenan Capital. It began with a simple problem:
            commercial logistics information is fragmented, relationship-driven, and often difficult to use.
          </p>
          <p>
            The platform is being built to make research, market mapping, outreach, and opportunity tracking
            more useful for real commercial decisions.
          </p>
          <a className="primary-link dark" href="https://waterlineintel.com" target="_blank" rel="noreferrer">
            Visit Waterline
          </a>
        </div>

        <div className="route-graphic" aria-label="Abstract logistics route diagram">
          <svg viewBox="0 0 720 520" role="img" aria-hidden="true">
            <path className="route faint" d="M38 400 C170 320 244 352 334 240 S534 98 682 140" />
            <path className="route" d="M52 410 C170 360 228 286 328 280 S516 214 664 92" />
            <path className="route secondary" d="M72 102 C190 116 220 212 348 214 S558 308 670 406" />
            <circle cx="52" cy="410" r="7" />
            <circle cx="328" cy="280" r="7" />
            <circle cx="664" cy="92" r="7" />
            <circle cx="72" cy="102" r="5" />
            <circle cx="348" cy="214" r="5" />
            <circle cx="670" cy="406" r="5" />
            <text x="42" y="444">ORIGIN</text>
            <text x="302" y="315">MARKET</text>
            <text x="612" y="74">DESTINATION</text>
          </svg>
          <div className="graphic-caption">
            <span>MARKET MAP / ROUTE INTELLIGENCE</span>
            <span>WATERLINE 2026</span>
          </div>
        </div>
      </section>

      <section id="research" className="research-section">
        <div className="research-heading">
          <p className="section-label">Research Desk</p>
          <h2>Questions worth staying with.</h2>
          <p>
            We would rather publish fewer conclusions and spend more time finding out what is actually true.
            These are the areas currently receiving attention.
          </p>
        </div>

        <div className="research-grid">
          {researchThemes.map(([title, body], index) => (
            <article key={title}>
              <div className="research-meta"><span>Theme 0{index + 1}</span><span>Active</span></div>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="letter" className="letter-section">
        <div className="letter-label">
          <p className="section-label inverse">A note on being early</p>
          <span>Queenan Capital · 2026</span>
        </div>
        <div className="letter-copy">
          <p className="letter-lead">Queenan Capital is early. That is part of the point.</p>
          <p>
            There is no reason to manufacture the appearance of a giant institution before one exists.
            The better use of this stage is to build habits, research capability, operating judgment, and a record of doing useful work.
          </p>
          <p>
            Waterline is one expression of that approach. Future projects may look very different. The standard should stay the same:
            understand the system, be specific about the problem, and create something that works outside a presentation deck.
          </p>
          <p>
            The ambition is substantial. The process should still be patient.
          </p>
          <div className="signature">QC</div>
        </div>
      </section>

      <section className="contact-section">
        <p className="section-label">Contact</p>
        <h2>Have a business, market, or idea worth discussing?</h2>
        <a href="mailto:contact@queenancapital.com?subject=Queenan%20Capital%20Inquiry">
          contact@queenancapital.com <span>↗</span>
        </a>
      </section>

      <footer>
        <div className="footer-main">
          <div className="footer-wordmark">QUEENAN CAPITAL</div>
          <div className="footer-links">
            <a href="#work">Current Work</a>
            <a href="#focus">Focus</a>
            <a href="#research">Research</a>
            <a href="https://waterlineintel.com" target="_blank" rel="noreferrer">Waterline ↗</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Queenan Capital LLC</span>
          <span>Chicago · Massachusetts</span>
          <p>
            This website is for informational purposes only and does not constitute an offer to sell,
            a solicitation to buy, or investment advice.
          </p>
        </div>
      </footer>
    </main>
  );
}
