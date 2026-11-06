import Link from 'next/link';

const ventures = [
  {
    number: '01',
    title: 'Waterline Intel',
    stage: 'Operating product',
    summary: 'Freight intelligence and logistics decision support, built around the questions that matter before a shipment is committed.',
    href: 'https://waterlineintel.com',
  },
  {
    number: '02',
    title: 'COEUS',
    stage: 'Internal development',
    summary: 'An evolving research and engineering platform intended to support analysis, technical work, and shared capabilities across the enterprise.',
  },
  {
    number: '03',
    title: 'Queenan Alpha',
    stage: 'Experimental research',
    summary: 'Quantitative research infrastructure for evaluating financial-market hypotheses, model performance, and real execution costs.',
  },
  {
    number: '04',
    title: 'Financial Intelligence',
    stage: 'Venture exploration',
    summary: 'Our emerging fintech direction: proprietary data, analytical tools, and useful financial information products with commercial potential.',
  },
];

function SiteHeader() {
  return <header className="qc-sitebar">
    <div className="qc-shell qc-navbar">
      <Link className="qc-wordmark" href="/" aria-label="Queenan Capital home"><i aria-hidden="true"/>QUEENAN CAPITAL</Link>
      <nav className="qc-navlinks" aria-label="Primary navigation">
        <a className="qc-hide-mobile" href="#strategy">Strategy</a>
        <Link href="/companies">Initiatives</Link>
        <Link className="qc-hide-mobile" href="/letters/building-for-the-long-term">Founder's letter</Link>
        <a className="qc-contact" href="mailto:contact@queenancapital.com">Contact</a>
      </nav>
    </div>
  </header>;
}

function Network() {
  return <div className="qc-network">
    <svg viewBox="0 0 560 510" role="img" aria-label="Queenan Capital at the center of four connected initiatives">
      <g fill="none" stroke="#becdc0" strokeWidth="1.25">
        <circle cx="280" cy="245" r="174" strokeDasharray="3 8"/>
        <line x1="280" y1="245" x2="119" y2="126"/>
        <line x1="280" y1="245" x2="445" y2="126"/>
        <line x1="280" y1="245" x2="116" y2="389"/>
        <line x1="280" y1="245" x2="445" y2="389"/>
      </g>
      <circle cx="280" cy="245" r="95" fill="#193c2b"/>
      <text x="280" y="229" textAnchor="middle" fontFamily="Georgia,serif" fontSize="23" fill="#fcfff9">QUEENAN</text>
      <text x="280" y="259" textAnchor="middle" fontFamily="Arial,sans-serif" fontSize="13" letterSpacing="4" fill="#e4ece5">CAPITAL</text>
      <g fontFamily="Arial,sans-serif" fontSize="15" fill="#244a36" textAnchor="middle">
        <circle cx="119" cy="126" r="65" fill="#f9fcf7" stroke="#c8d6cb"/>
        <text x="119" y="122" fontWeight="700">WATERLINE</text><text x="119" y="140" fontSize="11">INTEL</text>
        <circle cx="445" cy="126" r="65" fill="#f9fcf7" stroke="#c8d6cb"/>
        <text x="445" y="132" fontWeight="700">COEUS</text>
        <circle cx="116" cy="389" r="65" fill="#f9fcf7" stroke="#c8d6cb"/>
        <text x="116" y="384" fontWeight="700">QUEENAN</text><text x="116" y="401" fontSize="11">ALPHA</text>
        <circle cx="445" cy="389" r="65" fill="#f9fcf7" stroke="#c8d6cb"/>
        <text x="445" y="384" fontWeight="700">FINANCIAL</text><text x="445" y="402" fontSize="11">INTELLIGENCE</text>
      </g>
      <circle cx="280" cy="146" r="3" fill="#a87952"/>
      <text x="280" y="477" textAnchor="middle" fontSize="10" fontFamily="Arial,sans-serif" letterSpacing="2" fill="#799084">SHARED CAPABILITY · DISTINCT VENTURES</text>
    </svg>
  </div>;
}

export default function Home() {
  return <main id="top">
    <SiteHeader />
    <div className="qc-shell">
      <section className="qc-hero" aria-labelledby="hero-title">
        <div>
          <span className="qc-eyebrow">Independent holding company / Chicago</span>
          <h1 id="hero-title">Building for the <em>long term.</em></h1>
          <p className="qc-lead">Queenan Capital develops businesses and technical capabilities with a common objective: create lasting economic value through independent research, useful products, and disciplined capital allocation.</p>
          <div className="qc-hero-actions">
            <Link className="qc-primary-link" href="/companies">Explore our initiatives <span aria-hidden="true">↗</span></Link>
            <Link className="qc-secondary-link" href="/letters/building-for-the-long-term">Read our first letter</Link>
          </div>
        </div>
        <Network/>
      </section>
      <hr className="qc-divider"/>
      <div className="qc-stateline">
        <span>Founded October 8, 2026</span><span>Research · Engineering · Operations · Ownership</span>
      </div>
    </div>
    <section id="initiatives" className="qc-section">
      <div className="qc-shell">
        <div className="qc-section-head">
          <div><span className="qc-eyebrow">01 / Our initiatives</span><h2>Different work.<br/>Shared ambition.</h2></div>
          <p>Our efforts span different stages, from a live freight product to internal engineering and early fintech research. We present each as it is—not as a proven business before the evidence supports that claim.</p>
        </div>
        <div className="qc-ventures">
          {ventures.map((v) => <article className="qc-venture" key={v.title}>
            <div className="qc-venture-top"><span>{v.number} / INITIATIVE</span><span className="qc-stage">{v.stage}</span></div>
            <h3>{v.title}</h3><p>{v.summary}</p>
            {v.href ? <a href={v.href} target="_blank" rel="noreferrer">Visit Waterline Intel ↗</a> : null}
          </article>)}
        </div>
      </div>
    </section>
    <section id="strategy" className="qc-strategy">
      <div className="qc-shell">
        <div className="qc-strategy-head">
          <div><span className="qc-eyebrow">02 / Our approach</span><h2>Research. Build.<br/>Own responsibly.</h2></div>
          <p>Technical work alone is not a business model. Our objective is to develop useful products, earn sustainable revenue, and selectively reinvest capital where the economic case is strong.</p>
        </div>
        <div className="qc-strategy-grid">
          <div className="qc-strategy-item"><small>01 / UNDERSTAND</small><h3>Research before commitment.</h3><p>Study the market, customer problem, competition and economics. Distinguish measured outcomes from assumptions.</p></div>
          <div className="qc-strategy-item"><small>02 / EXECUTE</small><h3>Build what creates value.</h3><p>Develop focused products and shared technical capabilities that can make our businesses stronger over time.</p></div>
          <div className="qc-strategy-item"><small>03 / COMPOUND</small><h3>Allocate for the long run.</h3><p>Retain discipline over spending, pursue profitability, and evaluate investments and acquisitions selectively.</p></div>
        </div>
      </div>
    </section>
    <section className="qc-shell qc-letter-preview" aria-labelledby="letter-title">
      <div><span className="qc-eyebrow">03 / From the founder</span><p>November 2026<br/>Queenan Capital's first corporate letter.</p><Link href="/letters/building-for-the-long-term">Read the full letter ↗</Link></div>
      <blockquote id="letter-title">“Our ambition is straightforward, even if the work required is not: <strong>to build, develop, and own profitable businesses that create lasting economic value.</strong>”</blockquote>
    </section>
    <footer className="qc-footer">
      <div className="qc-shell">
        <div className="qc-footer-top"><div><span className="qc-eyebrow">Queenan Capital LLC</span><h2>Built with a long horizon.</h2></div><a href="mailto:contact@queenancapital.com">contact@queenancapital.com ↗</a></div>
        <div className="qc-footer-line"><span>© 2026 Queenan Capital LLC · Chicago, Illinois</span><span><Link href="/company">Company information</Link> · <Link href="/operating-notes">Operating notes</Link> · <Link href="/research-standards">Research standards</Link></span><span>Information only. No investment offer or advice.</span></div>
      </div>
    </footer>
  </main>;
}
