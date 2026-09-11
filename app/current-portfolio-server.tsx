import styles from './current-portfolio-server.module.css';

const portfolio = [
  {
    code: 'EI',
    name: 'ExpenseIntel',
    category: 'Pre-commitment decision intelligence',
    question: 'Should this money be committed, and what still has to be verified?',
    evidence: 'Decision Passport · NHTSA · BLS · U.S. Census',
    stage: 'Operating product',
    stageNote: 'Built for pre-commitment decisions where price, recurring burden, evidence, terms, timing and alternatives need to be separated before capital becomes hard to reverse.',
    surface: 'Decision Passport · modeled burden · evidence gaps · comparison · Change Watch',
    href: 'https://www.expenseintel.com/',
  },
  {
    code: 'WI',
    name: 'Waterline Intel',
    category: 'Great Lakes freight intelligence',
    question: 'Can this cargo move well, through which route, and with what operating constraints?',
    evidence: 'Movement · capacity · route intelligence',
    stage: 'Operating product',
    stageNote: 'Built around Great Lakes freight decisions: route economics, shipment feasibility, market access, capacity signals and the operating constraints that can change execution.',
    surface: 'Cargo screening · route planning · vessel context · shipment workspace · market signals',
    href: 'https://waterlineintel.com/',
  },
  {
    code: 'GG',
    name: 'Gage Grid',
    category: 'Industrial infrastructure intelligence',
    question: 'Can this site carry the project before capital is committed?',
    evidence: 'Power · water · wastewater · gas · fiber · USGS · EPA',
    stage: 'Operating pilot',
    stageNote: 'An operating pilot for project-first industrial site screening. Pilot capacity records are simulated; live public evidence is labeled separately and utility verification is required before an executable decision.',
    surface: 'Project screen · reverse rank · shortlist compare · capacity registry · change detection',
    href: 'https://gage-grid.vercel.app/',
  },
];

export default function CurrentPortfolioServer() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <div className={styles.kicker}>04 / CURRENT PORTFOLIO</div>
      <div className={styles.head}>
        <h2 id="portfolio-title">Different markets. One operating discipline.</h2>
        <p>Queenan Capital builds products around decisions where fragmented information, changing conditions, or weak evidence can make capital allocation harder than it should be.</p>
      </div>

      <div className={styles.table}>
        {portfolio.map((company) => (
          <details className={styles.item} key={company.code}>
            <summary className={styles.row} aria-label={`${company.name} — expand project details`}>
              <div className={styles.code}>{company.code}</div>
              <div className={styles.company}>
                <strong>{company.name}</strong>
                <span>{company.category}</span>
              </div>
              <div className={styles.question}>{company.question}</div>
              <div className={styles.evidence}>
                <span>{company.evidence}</span>
                <small>{company.stage}</small>
              </div>
              <div className={styles.toggle} aria-hidden="true"><span>+</span></div>
            </summary>

            <div className={styles.expanded}>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Operating view</span>
                <p>{company.stageNote}</p>
              </div>
              <div className={styles.detailBlock}>
                <span className={styles.detailLabel}>Current surface</span>
                <p>{company.surface}</p>
              </div>
              <div className={styles.detailAction}>
                <a href={company.href} target="_blank" rel="noreferrer">Open {company.name} <span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className={styles.foot}>
        <p><b>Portfolio standard.</b> Source-backed evidence stays separate from modeled assumptions, products stay focused on a specific decision, and development follows usefulness rather than feature count.</p>
        <div><a href="/companies">Company profiles</a><a href="/research-standards">Research standards</a><a href="/operating-notes">Operating notes</a></div>
      </div>
    </section>
  );
}
