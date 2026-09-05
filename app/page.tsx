const disciplines = [
  {
    verb: 'Study',
    text: 'Learn the market before risking money. We look at customers, competitors, costs, regulation, and how the work is actually done.',
  },
  {
    verb: 'Own',
    text: 'Buy businesses we can understand and improve, then hold them long enough for good decisions to matter.',
  },
  {
    verb: 'Build',
    text: 'Create something ourselves when the problem is clear and existing options are not good enough.',
  },
];

const ownerCriteria = [
  'Customers who come back',
  'A business model we can understand',
  'A useful product or service',
  'A reason to own it for years',
];

export default function Home() {
  return (
    <main id="top" className="site">
      <aside className="rail" aria-label="Queenan Capital identity">
        <a className="rail-mark" href="#top" aria-label="Queenan Capital home">Q</a>
        <span className="rail-name">QUEENAN CAPITAL LLC</span>
        <span className="rail-year">2026</span>
      </aside>

      <div className="page">
        <header className="header">
          <a className="header-name" href="#top">QUEENAN CAPITAL</a>
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#company">Company</a>
            <a href="#vision">Vision</a>
            <a href="#waterline">Projects</a>
            <a href="#owners">For Owners</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="mailto:contact@queenancapital.com">Contact ↗</a>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              <a href="#company">Company</a>
              <a href="#vision">Vision</a>
              <a href="#waterline">Projects</a>
              <a href="#owners">For Owners</a>
              <a href="#about">About</a>
              <a href="mailto:contact@queenancapital.com">Contact</a>
            </div>
          </details>
        </header>

        <section className="masthead" aria-labelledby="masthead-title">
          <div className="masthead-meta">
            <span>Independent holding company</span>
            <span>Founded 2026 · Chicago, Illinois · Jack Queenan, Founder</span>
          </div>

          <h1 id="masthead-title" aria-label="Queenan Capital">
            <span>QUEENAN</span>
            <span>CAPITAL</span>
          </h1>

          <div className="capital-lines" aria-hidden="true">
            <svg viewBox="0 0 980 190" preserveAspectRatio="none">
              <path className="line-a" d="M8 142 C138 44 222 178 350 84 S590 44 712 121 S862 176 972 51" />
              <path className="line-b" d="M12 91 C150 178 242 21 384 113 S612 169 740 76 S858 22 970 121" />
              <path className="line-c" d="M20 158 C164 127 267 70 402 76 S624 96 744 151 S878 127 963 31" />
              <circle cx="350" cy="84" r="5" />
              <circle cx="740" cy="76" r="5" />
              <circle cx="963" cy="31" r="5" />
            </svg>
            <div className="capital-lines-caption">
              <span>Capital · Operations · Research</span>
              <span>Queenan Capital / 2026</span>
            </div>
          </div>

          <div className="masthead-bottom">
            <p className="masthead-line">
              Building and studying businesses with a long time horizon.
            </p>
            <div className="masthead-note">
              <span className="red-rule" aria-hidden="true" />
              <p>
                Queenan Capital is being built deliberately around operating work, direct industry research,
                and long-term ownership. Waterline Intel and ExpenseIntel are current operating projects under the company.
              </p>
            </div>
          </div>
        </section>

        <section id="company" className="company-section">
          <div className="section-index">01 / COMPANY</div>
          <div className="company-intro">
            <h2>Study.<br />Own. Build.</h2>
            <p>
              The order matters. We study an industry first, own when the case is strong,
              and build when a problem is worth solving ourselves.
            </p>
          </div>

          <div className="discipline-list">
            {disciplines.map((item, index) => (
              <article className="discipline" key={item.verb}>
                <span className="discipline-num">0{index + 1}</span>
                <h3>{item.verb}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="vision" className="vision-section">
          <div className="vision-label">
            <span>02 / VISION</span>
            <span className="vision-year">2026 →</span>
          </div>

          <div className="vision-statement">
            <p className="vision-lead">
              Queenan Capital is built to operate through volatile markets with a long time horizon and a stable objective: to create businesses and capabilities that can strengthen one another over time.
            </p>

            <div className="vision-body">
              <p>
                We simply cannot afford to be myopic. Temporary market conditions matter, but they should not dictate permanent decisions. The goal is not to react to every movement; it is to understand which changes are noise and which reveal something worth pursuing.
              </p>
              <p>
                Research therefore comes before commitment. We study markets, products, industries, and operating systems carefully enough to decide which opportunities deserve capital, which deserve time, and which are better left alone.
              </p>
              <p>
                Over time, that discipline should allow Queenan Capital to build toward vertical integration where it creates a real operating advantage — not a collection of disconnected assets, but businesses that share knowledge, relationships, infrastructure, and purpose.
              </p>
            </div>

            <div className="vision-close">
              <span>2026 is not the destination.</span>
              <strong>It is the beginning.</strong>
            </div>
          </div>
        </section>

        <section id="waterline" className="waterline-section">
          <div className="waterline-top">
            <span>03 / CURRENT PROJECTS</span>
            <span className="live-dot"><i /> LIVE</span>
          </div>

          <div className="waterline-word">WATERLINE</div>

          <div className="waterline-bottom">
            <div className="waterline-description">
              <p className="waterline-lead">
                Waterline Intel is a Great Lakes freight intelligence platform for finding, comparing, and planning freight opportunities.
              </p>
              <p>
                Waterline Intel began with a practical question: can a small shipper find a workable freight move without piecing the answer together across dozens of sources? It was Queenan Capital&apos;s first operating project. Queenan Capital also operates ExpenseIntel, a location expense intelligence platform built to estimate recurring occupancy costs before a commitment is made.
              </p>
            </div>
            <div style={{ display: 'grid', gap: '12px' }}>
              <a className="waterline-link" href="https://waterlineintel.com" target="_blank" rel="noreferrer">
                <span>Visit Waterline Intel</span>
                <b>↗</b>
              </a>
              <a className="waterline-link" href="https://expenseintel.com" target="_blank" rel="noreferrer">
                <span>Visit ExpenseIntel</span>
                <b>↗</b>
              </a>
            </div>
          </div>
        </section>

        <section id="owners" className="owners-section">
          <div className="owners-title">
            <span>04 / FOR BUSINESS OWNERS</span>
            <h2>If you are thinking about a sale, we are open to a conversation.</h2>
          </div>

          <div className="owners-body">
            <p className="owners-lead">
              We are most interested in small businesses that do something useful, have repeat customers,
              and can be understood from the ground up.
            </p>
            <div className="criteria">
              {ownerCriteria.map((criterion) => (
                <div key={criterion}><span>—</span>{criterion}</div>
              ))}
            </div>
            <a href="mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry" className="owners-link">
              Contact Queenan Capital <span>↗</span>
            </a>
          </div>
        </section>

        <section className="notes-section">
          <div className="notes-label">05 / NOTES</div>
          <div className="notes-copy">
            <h2>Notes, when useful.</h2>
            <p>
              Occasional notes on what we learn while researching markets, studying businesses,
              and building Waterline Intel and ExpenseIntel.
            </p>
            <span className="notes-status">FIRST LETTER — FORTHCOMING</span>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-left">
            <span>06 / ABOUT</span>
            <h2>Queenan Capital LLC.</h2>
          </div>

          <div className="about-right">
            <p className="about-lead">
              Queenan Capital was founded in Chicago in 2026 by Jack Queenan.
              Waterline Intel and ExpenseIntel are the company&apos;s current operating projects.
            </p>
            <p>
              The plan is simple: learn industries closely, acquire businesses selectively,
              and build toward a group of companies that can work better together than apart.
            </p>
            <div className="about-data">
              <div><span>Founded</span><strong>2026</strong></div>
              <div><span>Founder</span><strong>Jack Queenan</strong></div>
              <div><span>Base</span><strong>Chicago, Illinois</strong></div>
              <div><span>Entity</span><strong>Queenan Capital LLC</strong></div>
            </div>
          </div>
        </section>

        <section className="closing-section">
          <span>QUEENAN</span>
          <span>CAPITAL</span>
          <a href="mailto:contact@queenancapital.com">contact@queenancapital.com ↗</a>
        </section>

        <footer>
          <span>© 2026 Queenan Capital LLC</span>
          <span>Founded by Jack Queenan · Chicago, Illinois</span>
          <p>
            For informational purposes only. Nothing on this website constitutes an offer,
            solicitation, or investment advice.
          </p>
        </footer>
      </div>
    </main>
  );
}
