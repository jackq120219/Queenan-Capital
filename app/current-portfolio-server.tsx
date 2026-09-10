import styles from './current-portfolio-server.module.css';

const portfolio = [
  {
    code: 'EI',
    name: 'ExpenseIntel',
    category: 'Pre-commitment decision intelligence',
    question: 'Should this money be committed, and what still has to be verified?',
    evidence: 'Decision Passport · NHTSA · BLS · U.S. Census',
    stage: 'Operating product',
    href: 'https://www.expenseintel.com/',
  },
  {
    code: 'WI',
    name: 'Waterline Intel',
    category: 'Great Lakes freight intelligence',
    question: 'Can this cargo move well, through which route, and with what operating constraints?',
    evidence: 'Movement · capacity · route intelligence',
    stage: 'Operating product',
    href: 'https://waterlineintel.com/',
  },
  {
    code: 'GG',
    name: 'Gage Grid',
    category: 'Industrial infrastructure intelligence',
    question: 'Can this site carry the project before capital is committed?',
    evidence: 'Power · water · wastewater · gas · fiber · USGS · EPA',
    stage: 'Active development',
    href: 'https://gage-grid.vercel.app/',
  },
];

export default function CurrentPortfolioServer() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <div className={styles.kicker}>05 / CURRENT PORTFOLIO</div>
      <div className={styles.head}>
        <h2 id="portfolio-title">Different markets. One operating discipline.</h2>
        <p>Queenan Capital builds products around decisions where fragmented information, changing conditions, or weak evidence can make capital allocation harder than it should be.</p>
      </div>
      <div className={styles.table}>
        {portfolio.map((company) => (
          <a className={styles.row} href={company.href} target="_blank" rel="noreferrer" key={company.code}>
            <div className={styles.code}>{company.code}</div>
            <div className={styles.company}><strong>{company.name}</strong><span>{company.category}</span></div>
            <div className={styles.question}>{company.question}</div>
            <div className={styles.evidence}><span>{company.evidence}</span><small>{company.stage}</small></div>
            <div className={styles.arrow} aria-hidden="true">↗</div>
          </a>
        ))}
      </div>
      <div className={styles.foot}>
        <p><b>Portfolio standard.</b> Source-backed evidence stays separate from modeled assumptions, products stay focused on a specific decision, and development follows usefulness rather than feature count.</p>
        <div><a href="/companies">Company profiles</a><a href="/research-standards">Research standards</a><a href="/operating-notes">Operating notes</a></div>
      </div>
    </section>
  );
}
