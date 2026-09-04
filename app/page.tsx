const notes = [
  {
    date: 'September 2026',
    title: 'Why fragmented logistics markets are worth studying',
    status: 'Working note',
  },
  {
    date: 'September 2026',
    title: 'What building Waterline is teaching us about commercial research',
    status: 'In progress',
  },
];

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Queenan Capital home">
          <span className="brand-mark">Q</span>
          <span>QUEENAN CAPITAL</span>
        </a>
        <nav className="nav" aria-label="Main navigation">
          <a href="#what-we-do">What we do</a>
          <a href="#companies">Companies</a>
          <a href="#notes">Notes</a>
          <a href="#about">About</a>
          <a className="contact-link" href="mailto:contact@queenancapital.com">Contact</a>
        </nav>
        <details className="mobile-nav">
          <summary>Menu</summary>
          <div>
            <a href="#what-we-do">What we do</a>
            <a href="#companies">Companies</a>
            <a href="#notes">Notes</a>
            <a href="#about">About</a>
            <a href="mailto:contact@queenancapital.com">Contact</a>
          </div>
        </details>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="kicker">Independent holding company · Chicago</p>
          <h1>Building businesses for the long term.</h1>
          <p className="hero-deck">
            Queenan Capital is a young holding company focused on operating businesses,
            logistics, and select investment opportunities where patient ownership can matter.
          </p>
          <div className="hero-actions">
            <a className="button solid" href="#companies">See our work</a>
            <a className="button text" href="mailto:contact@queenancapital.com">Get in touch</a>
          </div>
        </div>
        <aside className="hero-side">
          <p className="side-label">Today</p>
          <div className="side-item"><span>Waterline</span><strong>Live</strong></div>
          <div className="side-item"><span>Acquisition search</span><strong>Active</strong></div>
          <div className="side-item"><span>Research</span><strong>Ongoing</strong></div>
          <p className="side-note">We are early, and we prefer being precise about what exists.</p>
        </aside>
      </section>

      <section id="what-we-do" className="plain-section">
        <div className="section-heading">
          <p className="section-label">What we do</p>
          <h2>Own. Build. Study.</h2>
        </div>
        <div className="three-col">
          <article>
            <h3>Own</h3>
            <p>Acquire and hold businesses with understandable economics, useful products, and room for stronger long-term ownership.</p>
          </article>
          <article>
            <h3>Build</h3>
            <p>Create operating platforms when a market problem is clear enough to justify building rather than simply observing.</p>
          </article>
          <article>
            <h3>Study</h3>
            <p>Research industries before committing capital. The objective is better judgment, not more commentary.</p>
          </article>
        </div>
      </section>

      <section id="companies" className="companies-section">
        <div className="section-heading inverse-heading">
          <p className="section-label">Companies &amp; projects</p>
          <h2>Waterline</h2>
        </div>

        <div className="waterline-layout">
          <div className="waterline-main">
            <p className="project-tag">Operating project · Logistics intelligence</p>
            <p className="project-lead">
              Waterline is the first operating project built under Queenan Capital.
              It organizes logistics research, market mapping, counterparties, and commercial outreach in one place.
            </p>
            <a className="button outline" href="https://waterlineintel.com" target="_blank" rel="noreferrer">Visit Waterline ↗</a>
          </div>
          <div className="waterline-facts">
            <div><span>Focus</span><strong>Great Lakes &amp; freight markets</strong></div>
            <div><span>Status</span><strong>Live</strong></div>
            <div><span>Built</span><strong>2026</strong></div>
            <div><span>Role</span><strong>Research &amp; operating platform</strong></div>
          </div>
        </div>

        <div className="future-row">
          <span>Next</span>
          <p>Future companies will appear here only when they actually exist.</p>
        </div>
      </section>

      <section id="notes" className="notes-section">
        <div className="section-heading">
          <p className="section-label">From Queenan Capital</p>
          <h2>Notes, not noise.</h2>
        </div>
        <div className="notes-list">
          {notes.map((note) => (
            <article key={note.title}>
              <div className="note-meta"><span>{note.date}</span><span>{note.status}</span></div>
              <h3>{note.title}</h3>
            </article>
          ))}
        </div>
        <p className="notes-foot">Nothing here is published just to keep a content calendar full.</p>
      </section>

      <section className="owners-section">
        <div>
          <p className="section-label inverse">For business owners</p>
          <h2>Thinking about what comes next?</h2>
        </div>
        <div className="owners-copy">
          <p>
            We are interested in durable small businesses, especially in logistics, industrial services,
            infrastructure-adjacent operations, and other essential service categories.
          </p>
          <p>
            If you own a business and are considering a transition, we are happy to have a straightforward conversation.
          </p>
          <a className="button light" href="mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry">Contact Queenan Capital</a>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="about-intro">
          <p className="section-label">About</p>
          <h2>A long-term vehicle, built from the beginning.</h2>
        </div>
        <div className="about-copy">
          <p>
            Queenan Capital was founded in 2026 by Jack Queenan as a long-term vehicle for building,
            studying, and eventually owning operating businesses.
          </p>
          <p>
            The company is still at the beginning of that process. For now, the work is practical:
            building Waterline, learning industries directly, developing an acquisition process, and keeping the standard for future projects high.
          </p>
          <div className="about-meta">
            <div><span>Founded</span><strong>2026</strong></div>
            <div><span>Based</span><strong>Chicago, Illinois</strong></div>
            <div><span>Structure</span><strong>Queenan Capital LLC</strong></div>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <p>QUEENAN CAPITAL</p>
        <a href="mailto:contact@queenancapital.com">contact@queenancapital.com ↗</a>
      </section>

      <footer>
        <div>© 2026 Queenan Capital LLC</div>
        <div>Chicago, Illinois</div>
        <p>This website is for informational purposes only and does not constitute an offer, solicitation, or investment advice.</p>
      </footer>
    </main>
  );
}
