import expenseStyles from './expense.module.css';

const disciplines = [
  {
    verb: 'Study',
    text: 'Learn the market before risking money. We look at customers, competitors, costs, regulation, and how the work is done.',
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

const expenseQuestions = [
  'What should this location cost to operate today?',
  'Which recurring expenses are most likely to change?',
  'How does the full cost compare with another address?',
];

const expenseSpecs = [
  ['Primary inputs', 'Property address, use, and size'],
  ['Cost layers', 'Utilities, property tax, insurance, waste, and relevant infrastructure costs'],
  ['Core outputs', 'Annual operating cost, cost per square foot, forecast movement, and risk drivers'],
  ['Decision horizon', 'Current estimate with a 12–36 month forward view'],
  ['Current stage', 'Active development; public product currently uses an illustrative preview model'],
];

const electricityData = [
  ['2020', 10.59, 6.67],
  ['2021', 11.22, 7.18],
  ['2022', 12.41, 8.32],
  ['2023', 12.59, 8.04],
  ['2024', 12.75, 8.13],
  ['2025', 13.41, 8.62],
];

export default function Home() {
  return (
    <main id="top" className="site">
      <style>{`
        .mission-section {
          scroll-margin-top: 78px;
          padding: 86px 4.2vw 96px;
          background: #f7f4ee;
          border-bottom: 1px solid #151515;
          color: #151515;
        }
        .mission-kicker {
          margin-bottom: 54px;
          color: #6f2934;
          font-size: .6rem;
          font-weight: 800;
          letter-spacing: .15em;
          text-transform: uppercase;
        }
        .mission-grid {
          display: grid;
          grid-template-columns: minmax(0, .95fr) minmax(420px, 1.05fr);
          gap: 8vw;
          align-items: start;
        }
        .mission-grid h2 {
          margin: 0;
          max-width: 780px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(3rem, 5.2vw, 6.2rem);
          line-height: .98;
          letter-spacing: -.045em;
          font-weight: 400;
        }
        .mission-copy {
          border-top: 1px solid #151515;
          padding-top: 24px;
        }
        .mission-lead {
          margin: 0;
          max-width: 760px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(1.35rem, 2vw, 2rem);
          line-height: 1.42;
        }
        .mission-principles {
          margin-top: 38px;
          border-top: 1px solid rgba(21,21,21,.28);
        }
        .mission-principles div {
          min-height: 56px;
          display: grid;
          grid-template-columns: 54px 1fr;
          align-items: center;
          border-bottom: 1px solid rgba(21,21,21,.16);
          font-size: .78rem;
          font-weight: 600;
        }
        .mission-principles span {
          color: #8b4852;
          font-size: .58rem;
          font-weight: 800;
          letter-spacing: .1em;
        }
        .waterline-word { margin: 56px 0 34px; }
        .waterline-visual {
          margin-top: 34px;
          padding-top: 18px;
          border-top: 1px solid rgba(255,255,255,.34);
        }
        .waterline-photo-frame {
          position: relative;
          height: clamp(290px, 38vw, 560px);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.28);
          background: #111;
        }
        .waterline-photo-frame img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center center;
          filter: saturate(.82) contrast(1.04) brightness(.94);
          transition: transform .5s ease;
        }
        .waterline-photo-frame:hover img { transform: scale(1.012); }
        .waterline-photo-caption {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          padding-top: 11px;
          color: rgba(255,255,255,.52);
          font-size: .56rem;
          line-height: 1.5;
          letter-spacing: .06em;
          text-transform: uppercase;
        }
        .waterline-photo-caption a {
          color: rgba(255,255,255,.72);
          border-bottom: 1px solid rgba(255,255,255,.3);
        }
        .expense-public-data {
          margin-top: 54px;
          padding-top: 42px;
          border-top: 1px solid #151515;
        }
        .expense-data-heading {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6vw;
          align-items: end;
          margin-bottom: 28px;
        }
        .expense-data-eyebrow {
          display: block;
          margin-bottom: 18px;
          color: #6f2934;
          font-size: .57rem;
          font-weight: 800;
          letter-spacing: .14em;
          text-transform: uppercase;
        }
        .expense-data-heading h3 {
          margin: 0;
          max-width: 760px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 3.4vw, 4rem);
          line-height: 1.02;
          letter-spacing: -.04em;
          font-weight: 400;
        }
        .expense-data-heading p {
          margin: 0;
          max-width: 660px;
          color: #67615b;
          font-size: .86rem;
          line-height: 1.72;
        }
        .expense-data-grid {
          display: grid;
          grid-template-columns: minmax(0, 1.45fr) minmax(260px, .55fr);
          border: 1px solid rgba(21,21,21,.35);
          background: rgba(255,255,255,.34);
        }
        .expense-chart-card {
          padding: 26px 28px 22px;
          border-right: 1px solid rgba(21,21,21,.22);
        }
        .expense-chart-meta {
          display: flex;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 14px;
          font-size: .58rem;
          font-weight: 800;
          letter-spacing: .1em;
          text-transform: uppercase;
        }
        .expense-chart-meta span:last-child { color: #67615b; }
        .expense-chart-card svg {
          width: 100%;
          height: auto;
          display: block;
          overflow: visible;
        }
        .expense-chart-card .grid-line { stroke: rgba(21,21,21,.13); stroke-width: 1; }
        .expense-chart-card .axis-text { fill: #77716b; font-size: 12px; font-family: Helvetica, Arial, sans-serif; }
        .expense-chart-card .commercial-line { fill: none; stroke: #6f2934; stroke-width: 3; }
        .expense-chart-card .industrial-line { fill: none; stroke: #96908a; stroke-width: 2.4; }
        .expense-chart-card .commercial-dot { fill: #6f2934; }
        .expense-chart-card .industrial-dot { fill: #96908a; }
        .expense-chart-legend {
          display: flex;
          gap: 22px;
          flex-wrap: wrap;
          margin-top: 8px;
          color: #56504b;
          font-size: .68rem;
        }
        .expense-chart-legend span { display: inline-flex; align-items: center; gap: 7px; }
        .expense-chart-legend i {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          display: inline-block;
          background: #6f2934;
        }
        .expense-chart-legend span:last-child i { background: #96908a; }
        .expense-data-stats {
          display: grid;
          grid-template-rows: repeat(3, 1fr);
        }
        .expense-data-stat {
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          border-bottom: 1px solid rgba(21,21,21,.18);
        }
        .expense-data-stat:last-child { border-bottom: 0; }
        .expense-data-stat strong {
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(2rem, 3.2vw, 3.7rem);
          line-height: 1;
          letter-spacing: -.04em;
          font-weight: 400;
          color: #6f2934;
        }
        .expense-data-stat span {
          margin-top: 16px;
          color: #67615b;
          font-size: .68rem;
          line-height: 1.5;
        }
        .expense-data-source {
          display: flex;
          justify-content: space-between;
          gap: 28px;
          margin-top: 13px;
          color: #77716b;
          font-size: .58rem;
          line-height: 1.55;
        }
        .expense-data-source a {
          color: #6f2934;
          border-bottom: 1px solid rgba(111,41,52,.34);
          white-space: nowrap;
        }
        @media (max-width: 1050px) {
          .mission-grid,
          .expense-data-heading,
          .expense-data-grid { grid-template-columns: 1fr; }
          .mission-grid { gap: 44px; }
          .expense-chart-card { border-right: 0; border-bottom: 1px solid rgba(21,21,21,.22); }
          .expense-data-stats { grid-template-columns: repeat(3, 1fr); grid-template-rows: auto; }
          .expense-data-stat { border-bottom: 0; border-right: 1px solid rgba(21,21,21,.18); }
          .expense-data-stat:last-child { border-right: 0; }
        }
        @media (max-width: 780px) {
          .mission-section { padding: 72px 5vw 80px; scroll-margin-top: 70px; }
          .mission-grid { grid-template-columns: 1fr; }
          .waterline-word { margin: 44px 0 28px; }
          .waterline-photo-frame { height: 290px; }
          .waterline-photo-caption { flex-direction: column; gap: 7px; }
          .expense-data-stats { grid-template-columns: 1fr; }
          .expense-data-stat { min-height: 130px; border-right: 0; border-bottom: 1px solid rgba(21,21,21,.18); }
          .expense-data-source { flex-direction: column; gap: 8px; }
          .expense-chart-card { padding: 20px 14px 18px; }
        }
      `}</style>

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
            <a href="#mission">Mission</a>
            <a href="#waterline">Projects</a>
            <a href="#owners">For Owners</a>
            <a href="#about">About</a>
          </nav>
          <a className="header-contact" href="mailto:contact@queenancapital.com">Contact</a>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <div>
              <a href="#company">Company</a>
              <a href="#vision">Vision</a>
              <a href="#mission">Mission</a>
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
              <p>Queenan Capital combines direct industry research, operating work, and long-term ownership.</p>
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
            <span className="vision-year">2026 / FORWARD</span>
          </div>

          <div className="vision-statement">
            <p className="vision-lead">
              Queenan Capital is built to operate through volatile markets with a long time horizon: to create businesses and capabilities that can strengthen one another over time.
            </p>

            <div className="vision-body">
              <p>
                We simply cannot afford to be myopic. Temporary market conditions matter, but they should not dictate permanent decisions. We try to distinguish noise from changes worth pursuing.
              </p>
              <p>
                Research comes before commitment. We study markets, products, industries, and operating systems to decide what deserves capital, time, or neither.
              </p>
              <p>
                Over time, that discipline should help us build businesses that share knowledge, relationships, infrastructure, and purpose.
              </p>
            </div>

            <div className="vision-close">
              <span>2026 is not the destination.</span>
              <strong>It is the beginning.</strong>
            </div>
          </div>
        </section>

        <section id="mission" className="mission-section">
          <div className="mission-kicker">03 / MISSION</div>
          <div className="mission-grid">
            <h2>Find the operating problem. Understand it. Build something useful.</h2>
            <div className="mission-copy">
              <p className="mission-lead">
                Queenan Capital exists to identify practical information and operating problems that are still harder to solve than they should be.
              </p>
              <div className="mission-principles">
                <div><span>01</span>Evidence before conviction</div>
                <div><span>02</span>Useful products before broad promises</div>
                <div><span>03</span>Long-term operating value over short-term attention</div>
              </div>
            </div>
          </div>
        </section>

        <section id="waterline" className="waterline-section">
          <div className="waterline-top">
            <span>04A / OPERATING PROJECT</span>
            <span className="live-dot"><i /> LIVE</span>
          </div>

          <div className="waterline-word">WATERLINE</div>

          <div className="waterline-bottom">
            <div className="waterline-description">
              <p className="waterline-lead">
                Waterline Intel was the first project developed by Queenan Capital, built to make fragmented Great Lakes freight information easier to find, compare, and use.
              </p>
              <p>
                Small shippers evaluating a Great Lakes move often have to piece together ports, routes, cargo, vessel data, and market context from disconnected sources. Waterline brings that information together before time and money are committed.
              </p>
            </div>
            <a className="waterline-link" href="https://waterlineintel.com" target="_blank" rel="noreferrer">
              <span>Visit Waterline Intel</span>
              <b aria-hidden="true">→</b>
            </a>
          </div>

          <figure className="waterline-visual">
            <div className="waterline-photo-frame">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/MV_Atlantic_Erie_enters_the_Duluth_Harbor_und_the_Aerial_Lift_Bridge.jpg/1280px-MV_Atlantic_Erie_enters_the_Duluth_Harbor_und_the_Aerial_Lift_Bridge.jpg"
                alt="Great Lakes freighter Atlantic Erie entering Duluth Harbor beneath the Aerial Lift Bridge"
                loading="lazy"
              />
            </div>
            <figcaption className="waterline-photo-caption">
              <span>Great Lakes freight in the physical world — Duluth, Minnesota</span>
              <span>
                Photo: Pete Markham / Wikimedia Commons ·{' '}
                <a href="https://commons.wikimedia.org/wiki/File:MV_Atlantic_Erie_enters_the_Duluth_Harbor_und_the_Aerial_Lift_Bridge.jpg" target="_blank" rel="noreferrer">CC BY-SA 2.0</a>
              </span>
            </figcaption>
          </figure>
        </section>

        <section id="expenseintel" className={expenseStyles.section} aria-labelledby="expenseintel-title">
          <div className={expenseStyles.topline}>
            <span>04B / OPERATING PROJECT</span>
            <span className={expenseStyles.status}>Active development</span>
          </div>

          <div className={expenseStyles.hero}>
            <div>
              <h2 id="expenseintel-title" className={expenseStyles.name}>ExpenseIntel</h2>
              <p className={expenseStyles.category}>Location operating-cost intelligence</p>
            </div>

            <div>
              <p className={expenseStyles.lead}>
                ExpenseIntel is Queenan Capital&apos;s second internally developed project, built around a simple problem: the true recurring cost of a location is difficult to understand before a commitment is made.
              </p>
              <p className={expenseStyles.copy}>
                It brings utilities, property taxes, insurance, waste, infrastructure, and other recurring costs into one operating view.
              </p>
            </div>
          </div>

          <div className={expenseStyles.grid}>
            <div className={expenseStyles.panel}>
              <span className={expenseStyles.eyebrow}>Operating thesis</span>
              <p className={expenseStyles.thesis}>
                Rent or purchase price is only one part of a location decision. Recurring costs can materially change the economics after the commitment is made.
              </p>
            </div>

            <div className={expenseStyles.panel}>
              <span className={expenseStyles.eyebrow}>What the product is designed to answer</span>
              <div className={expenseStyles.questions}>
                {expenseQuestions.map((question, index) => (
                  <div className={expenseStyles.question} key={question}>
                    <span>0{index + 1}</span>
                    <strong>{question}</strong>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="expense-public-data" aria-labelledby="expense-data-title">
            <div className="expense-data-heading">
              <div>
                <span className="expense-data-eyebrow">Public cost signal / source-backed data</span>
                <h3 id="expense-data-title">The cost beneath a location can move materially.</h3>
              </div>
              <p>
                Electricity is one example. The U.S. commercial average rose from 10.59¢ per kWh in 2020 to 13.41¢ in 2025. ExpenseIntel is built around the broader reality that recurring location costs move over time.
              </p>
            </div>

            <div className="expense-data-grid">
              <div className="expense-chart-card">
                <div className="expense-chart-meta">
                  <span>U.S. average electricity price</span>
                  <span>Cents per kilowatthour</span>
                </div>
                <svg viewBox="0 0 720 290" role="img" aria-label="Line chart showing U.S. commercial and industrial electricity prices from 2020 through 2025">
                  <line className="grid-line" x1="60" y1="50" x2="660" y2="50" />
                  <line className="grid-line" x1="60" y1="150" x2="660" y2="150" />
                  <line className="grid-line" x1="60" y1="250" x2="660" y2="250" />
                  <text className="axis-text" x="16" y="54">15¢</text>
                  <text className="axis-text" x="16" y="154">10¢</text>
                  <text className="axis-text" x="24" y="254">5¢</text>

                  <polyline className="commercial-line" points="60,138.2 180,125.6 300,101.8 420,98.2 540,95 660,81.8" />
                  <polyline className="industrial-line" points="60,216.6 180,206.4 300,183.6 420,189.2 540,187.4 660,177.6" />

                  {electricityData.map(([year], index) => {
                    const x = 60 + index * 120;
                    return <text className="axis-text" key={year} x={x} y="278" textAnchor="middle">{year}</text>;
                  })}

                  <circle className="commercial-dot" cx="60" cy="138.2" r="5" />
                  <circle className="commercial-dot" cx="180" cy="125.6" r="5" />
                  <circle className="commercial-dot" cx="300" cy="101.8" r="5" />
                  <circle className="commercial-dot" cx="420" cy="98.2" r="5" />
                  <circle className="commercial-dot" cx="540" cy="95" r="5" />
                  <circle className="commercial-dot" cx="660" cy="81.8" r="5" />

                  <circle className="industrial-dot" cx="60" cy="216.6" r="4.5" />
                  <circle className="industrial-dot" cx="180" cy="206.4" r="4.5" />
                  <circle className="industrial-dot" cx="300" cy="183.6" r="4.5" />
                  <circle className="industrial-dot" cx="420" cy="189.2" r="4.5" />
                  <circle className="industrial-dot" cx="540" cy="187.4" r="4.5" />
                  <circle className="industrial-dot" cx="660" cy="177.6" r="4.5" />
                </svg>
                <div className="expense-chart-legend">
                  <span><i />Commercial</span>
                  <span><i />Industrial</span>
                </div>
              </div>

              <div className="expense-data-stats" aria-label="Electricity price summary statistics">
                <div className="expense-data-stat">
                  <strong>+26.6%</strong>
                  <span>U.S. commercial average, 2020–2025.</span>
                </div>
                <div className="expense-data-stat">
                  <strong>13.41¢</strong>
                  <span>2025 U.S. commercial average per kWh.</span>
                </div>
                <div className="expense-data-stat">
                  <strong>8.62¢</strong>
                  <span>2025 U.S. industrial average per kWh.</span>
                </div>
              </div>
            </div>

            <div className="expense-data-source">
              <span>Public market context, not an ExpenseIntel quote or forecast for a specific property.</span>
              <a href="https://www.eia.gov/electricity/monthly/epm_table_grapher.php?t=epmt_5_03" target="_blank" rel="noreferrer">Source: U.S. EIA, Electric Power Monthly, Table 5.3</a>
            </div>
          </section>

          <div className={expenseStyles.specs}>
            <div className={expenseStyles.specHead}>
              <h3>Current product direction</h3>
              <span>ExpenseIntel / 2026</span>
            </div>
            <div className={expenseStyles.specTable}>
              {expenseSpecs.map(([label, value]) => (
                <div className={expenseStyles.specRow} key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className={expenseStyles.footer}>
            <p className={expenseStyles.note}>
              ExpenseIntel is an early-stage operating project of Queenan Capital. The current public version is a product preview; modeled outputs should not be treated as live utility quotes, tax determinations, insurance quotations, or professional advice.
            </p>
            <a className={expenseStyles.link} href="https://expenseintel.com" target="_blank" rel="noreferrer">
              <span>Visit ExpenseIntel</span>
              <b aria-hidden="true">→</b>
            </a>
          </div>
        </section>

        <section id="owners" className="owners-section">
          <div className="owners-title">
            <span>05 / FOR BUSINESS OWNERS</span>
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
              Contact Queenan Capital <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="notes-section">
          <div className="notes-label">06 / NOTES</div>
          <div className="notes-copy">
            <h2>Notes, when useful.</h2>
            <p>
              Occasional notes from researching markets and building Waterline Intel and ExpenseIntel.
            </p>
            <span className="notes-status">FIRST LETTER — FORTHCOMING</span>
          </div>
        </section>

        <section id="about" className="about-section">
          <div className="about-left">
            <span>07 / ABOUT</span>
            <h2>Queenan Capital LLC.</h2>
          </div>

          <div className="about-right">
            <p className="about-lead">
              Queenan Capital was founded in Chicago in 2026 by Jack Queenan. Its current operating projects are Waterline Intel and ExpenseIntel.
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
          <a href="mailto:contact@queenancapital.com">contact@queenancapital.com</a>
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
