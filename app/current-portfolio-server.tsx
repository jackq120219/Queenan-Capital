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
    category: 'AI software and engineering',
    question: 'How can AI tools make research and software development more capable and repeatable?',
    evidence: 'Local AI · knowledge workflows · code verification',
    stage: 'In development',
    stageNote: 'COEUS is our internal AI software workspace under active development, connecting local models, research tools, knowledge systems and supervised engineering workflows. Reliability and task execution remain active engineering goals.',
    surface: 'Local AI · research workspace · engineering missions · verification',
    href: null,
  },
  {
    code: 'QA',
    name: 'Queenan Alpha',
    category: 'Quantitative software',
    question: 'How can market data and predictive models be evaluated in a rigorous software pipeline?',
    evidence: 'Market data · backtests · model evaluation',
    stage: 'Experimental',
    stageNote: 'Queenan Alpha develops market-data pipelines, predictive-model experiments, backtesting, fee-aware evaluation and risk-controlled execution components. Strategies are refined and assessed through ongoing research.',
    surface: 'Signal engineering · model testing · strategy backtests · risk tooling',
    href: null,
  },
  {
    code: 'EN',
    name: 'Project Endeavour',
    category: 'API software and data products',
    question: 'Where can a focused API solve a commercially valuable problem?',
    evidence: 'Opportunity research · prototypes',
    stage: 'Early exploration',
    stageNote: 'Endeavour is early-stage development and market research into focused APIs and developer-facing data products, with product and commercial validation still underway.',
    surface: 'API prototypes · data packaging · developer workflows · distribution research',
    href: null,
  },
];

export default function CurrentPortfolioServer() {
  return (
    <section id="portfolio" className={styles.section} aria-labelledby="portfolio-title">
      <div className={styles.kicker}>04 / CURRENT INITIATIVES</div>
      <div className={styles.head}>
        <h2 id="portfolio-title">Current work. One operating discipline.</h2>
        <p>We build software and data systems around real operating problems. Each initiative is shown at its current stage, from commercial delivery to internal engineering and research.</p>
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
