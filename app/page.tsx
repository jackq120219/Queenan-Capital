export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="brand">QUEENAN CAPITAL</div>
        <nav>
          <a href="#focus">Focus</a>
          <a href="#platforms">Platforms</a>
          <a href="#about">About</a>
          <a className="contact" href="mailto:contact@queenancapital.com">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <div className="eyebrow">CAPITAL · LOGISTICS · INTELLIGENCE</div>
        <h1>Built to identify, understand, and pursue overlooked opportunities.</h1>
        <p>
          Queenan Capital is an independent platform focused on operating businesses,
          logistics, market intelligence, and disciplined long-term investment.
        </p>
        <div className="hero-actions">
          <a className="primary" href="#focus">Explore our focus</a>
          <a className="secondary" href="#about">About Queenan Capital</a>
        </div>
      </section>

      <section id="focus" className="section">
        <div className="section-label">01 / FOCUS</div>
        <div className="grid three">
          <article>
            <span>Capital</span>
            <h2>Acquire and build durable businesses.</h2>
            <p>We look for practical opportunities where thoughtful ownership, patience, and operational focus can create enduring value.</p>
          </article>
          <article>
            <span>Logistics</span>
            <h2>Study the systems that move the economy.</h2>
            <p>Freight, industrial infrastructure, sourcing, and transportation are central to how we evaluate markets and operating opportunities.</p>
          </article>
          <article>
            <span>Intelligence</span>
            <h2>Turn fragmented information into decisions.</h2>
            <p>We combine market research, competitive analysis, public data, and direct industry outreach to uncover what is easy to miss.</p>
          </article>
        </div>
      </section>

      <section id="platforms" className="section dark-section">
        <div className="section-label">02 / PLATFORMS</div>
        <div className="platform-row">
          <div>
            <div className="kicker">OPERATING PLATFORM</div>
            <h2>Waterline</h2>
          </div>
          <p>A logistics intelligence platform built to make commercial shipping research and outreach faster, clearer, and more useful.</p>
          <a href="#">View platform →</a>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-label">03 / ABOUT</div>
        <div className="about-grid">
          <h2>Independent by design.</h2>
          <div>
            <p>Queenan Capital was created to serve as a long-term home for projects, operating companies, and investment ideas that sit at the intersection of commerce, infrastructure, and strategy.</p>
            <p>We favor rigorous research, direct communication, and an owner’s mindset over unnecessary complexity.</p>
          </div>
        </div>
      </section>

      <footer>
        <div>QUEENAN CAPITAL</div>
        <div>Chicago · Massachusetts</div>
        <div>© 2026 Queenan Capital LLC</div>
      </footer>
    </main>
  );
}
