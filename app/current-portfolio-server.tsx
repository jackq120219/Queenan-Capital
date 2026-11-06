import styles from './current-portfolio-server.module.css';

const portfolio = [
  {
    code: 'WI',
    name: 'Waterline Intel',
    category: 'Freight intelligence',
    question: 'How can shippers understand and evaluate freight decisions more confidently?',
    evidence: 'Routes · market context · quotes',
    stage: 'Operating product',
    stageNote: 'Waterline focuses on Great Lakes freight decisions, gathering market evidence and offering decision-support tools. Commercial adoption and pricing remain active priorities.',
    surface: 'Route intelligence · vessel context · quote evaluation · freight research',
    href: 'https://waterlineintel.com/',
  },
  {
    code: 'CO',
    name: 'COEUS',
    category: 'Internal intelligence and engineering',
    question: 'Can technical research and software missions be made more reliable and repeatable?',
    evidence: 'Local models · tool testing · source review',
    stage: 'In development',
    stageNote: 'COEUS is an internal platform under active development, not a separately commercialized product. Research, supervised engineering, and mission execution are being tested.',
    surface: 'Local intelligence · technical workflows · mission control · verification',
    href: null,
  },
  {
    code: 'QA',
    name: 'Queenan Alpha',
    category: 'Quantitative research',
    question: 'Do any market hypotheses survive independent tests and realistic trading costs?',
    evidence: 'Backtests · model evaluation · risk',
    stage: 'Experimental',
    stageNote: 'This is an experimental research program. Its forecasting and trading methods have not demonstrated a dependable, profitable edge.',
    surface: 'Model tests · market signals · execution-cost analysis',
    href: null,
  },
  {
    code: 'EN',
    name: 'Project Endeavour',
    category: 'API and data-product exploration',
    question: 'Where can a focused API solve a commercially valuable problem?',
    evidence: 'Opportunity research · prototypes',
    stage: 'Early exploration',
    stageNote: 'Endeavour investigates potential data and API products. It is not presented as an established fintech company or revenue-generating operation.',
    surface: 'API product research · early experiments · potential distribution',
    href: null,
  },
];

export default function CurrentPortfolioServer() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <div className={styles.kicker}>04 / CURRENT INITIATIVES</div>
      <div className={styles.head}>
        <h2 id="portfolio-title">Current work. One operating discipline.</h2>
        <p>Our commercial work and internal research are at different stages. We distinguish live products from experiments and future opportunities.</p>
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
                {company.href ? <a href={company.href} target="_blank" rel="noreferrer">Open {company.name} <span aria-hidden="true">↗</span></a> : <span>Internal work — no public product page</span>}
              </div>
            </div>
          </details>
        ))}
      </div>

      <div className={styles.foot}>
        <p><b>Operating standard.</b> Source-backed evidence stays separate from modeled assumptions, products stay focused on a specific decision, and development follows usefulness rather than feature count.</p>
        <div><a href="/companies">Company profiles</a><a href="/research-standards">Research standards</a><a href="/operating-notes">Operating notes</a></div>
      </div>
    </section>
  );
}
