const disciplines = [
  {
    verb: 'Own',
    text: 'Acquire and hold useful businesses with understandable economics and room for patient ownership.',
  },
  {
    verb: 'Build',
    text: 'Start operating projects when we understand a problem well enough to make something better.',
  },
  {
    verb: 'Study',
    text: 'Do the industry work first. Research is part of deciding where capital and time should go.',
  },
];

const ownerCriteria = [
  'Essential or recurring demand',
  'Understandable operations',
  'Strong customer relationships',
  'A reason to own for years, not quarters',
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
            <a href="#waterline">Waterline</a>
            <a href="#owners">For Owners</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="mailto:contact@queenancapital.com">Contact ↗</a>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              <a href="#company">Company</a>
              <a href="#waterline">Waterline</a>
              <a href="#owners">For Owners</a>
              <a href="#about">About</a>
              <a href="mailto:contact@queenancapital.com">Contact</a>
            </div>
          </details>
        </header>

        <section className="masthead" aria-labelledby="masthead-title">
          <div className="masthead-meta">
            <span>Independent holding company</span>
            <span>Chicago, Illinois</span>
          </div>

          <h1 id="masthead-title" aria-label="Queenan Capital">
            <span>QUEENAN</span>
            <span>CAPITAL</span>
          </h1>

          <div className="masthead-bottom">
            <p className="masthead-line">
              Building and studying businesses with a long time horizon.
            </p>
            <div className="masthead-note">
              <span className="red-rule" aria-hidden="true" />
              <p>
                Queenan Capital is in its first chapter. Waterline is the first operating project.
                Acquisition work is active. The rest will be built deliberately.
              </p>
            </div>
          </div>
        </section>

        <section id="company" className="company-section">
          <div className="section-index">01 / COMPANY</div>
          <div className="company-intro">
            <h2>Three things.<br />Done seriously.</h2>
            <p>
              Queenan Capital is not trying to be every kind of investment firm. The work is simple to describe:
              own businesses, build useful operating projects, and study industries before making commitments.
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

        <section id="waterline" className="waterline-section">
          <div className="waterline-top">
            <span>02 / OPERATING PROJECT</span>
            <span className="live-dot"><i /> LIVE</span>
          </div>

          <div className="waterline-word">WATERLINE</div>

          <div className="waterline-bottom">
            <div className="waterline-description">
              <p className="waterline-lead">Logistics intelligence built from a real attempt to move freight.</p>
              <p>
                Waterline grew out of direct work in Great Lakes shipping and freight research. It is a separate
                product with its own identity, built under Queenan Capital.
              </p>
            </div>
            <a className="waterline-link" href="https://waterlineintel.com" target="_blank" rel="noreferrer">
              <span>Visit Waterline</span>
              <b>↗</b>
            </a>
          </div>
        </section>

        <section id="owners" className="owners-section">
          <div className="owners-title">
            <span>03 / FOR BUSINESS OWNERS</span>
            <h2>A straightforward conversation is enough.</h2>
          </div>

          <div className="owners-body">
            <p className="owners-lead">
              We are interested in durable small businesses where continuity, patient ownership,
              and operating attention can matter.
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
          <div className="notes-label">04 / NOTES</div>
          <div className="notes-copy">
            <h2>No content calendar.</h2>
            <p>
              Queenan Capital will publish notes when there is something useful to say.
              Until then, an empty shelf is better than manufactured expertise.
            </p>
            <span className="notes-status">FIRST LETTER — FORTHCOMING</span>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-left">
            <span>05 / ABOUT</span>
            <h2>Built at the beginning.</h2>
          </div>

          <div className="about-right">
            <p className="about-lead">
              Queenan Capital was founded in 2026 by Jack Queenan as a long-term vehicle for building,
              studying, and eventually owning operating businesses.
            </p>
            <p>
              The company is early. That means the job today is not to imitate a mature portfolio.
              It is to build judgment, operating capability, relationships, and a record of useful work.
            </p>
            <div className="about-data">
              <div><span>Founded</span><strong>2026</strong></div>
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
          <span>queenancapital.com</span>
          <p>
            For informational purposes only. Nothing on this website constitutes an offer,
            solicitation, or investment advice.
          </p>
        </footer>
      </div>
    </main>
  );
}
