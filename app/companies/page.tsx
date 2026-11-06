import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Current Initiatives | Queenan Capital' },
  description:
    'Explore the software, intelligence and data systems behind Waterline Intel, COEUS, Queenan Alpha and Project Endeavour.',
  alternates: { canonical: 'https://www.queenancapital.com/companies' },
  openGraph: {
    title: 'Operating Companies | Queenan Capital',
    description:
      'Waterline Intel is our commercial product; COEUS, Queenan Alpha and Project Endeavour develop software, data infrastructure and applied research.',
    url: 'https://www.queenancapital.com/companies',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const companies = [
  {
    name: 'Waterline Intel',
    href: 'https://waterlineintel.com/',
    logo: '/waterline-mark.svg',
    category: 'Commercial product · Freight intelligence',
    description: 'Freight intelligence and logistics decision support, initially focused on Great Lakes shipping and the information needed to evaluate routes, rates and operational constraints.',
    focus: 'Turning complex freight information into useful decisions',
    operatingQuestion: 'What does a shipper need to know before committing to a move?',
  },
  {
    name: 'COEUS',
    href: null,
    logo: null,
    category: 'AI software platform · In development',
    description: 'An internal AI software and engineering platform combining local models, research tools, knowledge workflows and supervised coding missions. Designed to help our teams investigate, build and verify technical work.',
    focus: 'AI-assisted research, software engineering and workflow automation',
    operatingQuestion: 'How can connected tools turn research and code into reliable, repeatable workflows?',
  },
  {
    name: 'Queenan Alpha',
    href: null,
    logo: null,
    category: 'Quantitative software · Experimental',
    description: 'A quantitative software research system developing market-data pipelines, predictive-model experiments, signal analysis, backtesting and fee-aware risk controls.',
    focus: 'Market-data engineering, model evaluation and trading-system software',
    operatingQuestion: 'How can software turn market signals into measurable, rigorously tested strategies?',
  },
  {
    name: 'Project Endeavour',
    href: null,
    logo: null,
    category: 'API development · Early exploration',
    description: 'An early-stage software initiative exploring focused APIs, developer-facing data tools and information products for commercially important workflows.',
    focus: 'Useful APIs and developer-focused data infrastructure',
    operatingQuestion: 'Which information problem would customers actually pay to solve?',
  },
];

export default function CompaniesPage() {
  return (
    <main className="initiatives-page" style={{ minHeight: '100vh', background: '#f7f4ee', color: '#151515', padding: '72px 6vw 104px', fontFamily: 'Arial, Helvetica, sans-serif', overflowX: 'hidden' }}>
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <nav style={{ display: 'flex', gap: 24, marginBottom: 68, fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none' }}>Queenan Capital</Link>
          <Link href="/company" style={{ color: '#6f2934', textDecoration: 'none' }}>Company information</Link>
          <Link href="/operating-notes" style={{ color: '#6f2934', textDecoration: 'none' }}>Operating notes</Link>
        </nav>

        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>Queenan Capital / current initiatives</div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.3rem,7vw,7.2rem)', lineHeight: .94, letterSpacing: '-.05em' }}>Distinct initiatives.<br />One operating discipline.</h1>
          </div>
          <p style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.15rem,2vw,1.75rem)', lineHeight: 1.45 }}>
            Queenan Capital builds practical software, data systems and intelligence tools. Our commercial products and developing technologies each have a distinct role.
          </p>
        </header>

        <section style={{ marginTop: 84, borderTop: '1px solid #151515' }}>
          {companies.map((company, index) => (
            <article key={company.name} className="initiative-row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, padding: '34px 0', borderBottom: '1px solid rgba(21,21,21,.28)', color: 'inherit', textDecoration: 'none' }}>
              <div>
                <span style={{ display: 'block', color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.12em', marginBottom: 12 }}>0{index + 1}</span>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 12 }}>{company.category}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 14, flexWrap: 'wrap' }}>
                  {company.logo ? <img src={company.logo} alt={`${company.name} logo`} width={62} height={62} style={{ width: 62, height: 62, flex: '0 0 62px' }} /> : null}
                  <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2rem,4vw,4.2rem)', fontWeight: 400, letterSpacing: '-.035em' }}>{company.name}</h2>
                </div>
                <p style={{ margin: 0, maxWidth: 720, color: '#5f5953', lineHeight: 1.7 }}>{company.description}</p>
                {company.href ? <a href={company.href} target="_blank" rel="noreferrer" style={{ display: 'inline-block', marginTop: 18, fontSize: 13, fontWeight: 700, color: '#6f2934', borderBottom: '1px solid #6f2934', paddingBottom: 4 }}>Visit {company.name} →</a> : null}
              </div>
              <div style={{ alignSelf: 'end', borderTop: '1px solid rgba(21,21,21,.25)', paddingTop: 14 }}>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 8 }}>Primary focus</span>
                <strong style={{ display: 'block', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 18, fontWeight: 400, lineHeight: 1.4 }}>{company.focus}</strong>
                <span style={{ display: 'block', marginTop: 16, fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 7 }}>Core question</span>
                <p style={{ margin: 0, color: '#5f5953', lineHeight: 1.55, fontSize: 13 }}>{company.operatingQuestion}</p>
              </div>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 88, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '7vw', borderTop: '1px solid #151515', paddingTop: 32 }}>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2.2rem,4vw,4.6rem)', fontWeight: 400, letterSpacing: '-.04em' }}>Study → Build → Own.</h2>
          <div style={{ lineHeight: 1.75, color: '#5f5953' }}>
            <p><strong style={{ color: '#151515' }}>Study:</strong> understand the industry, economics, data constraints, and decision failures before building.</p>
            <p><strong style={{ color: '#151515' }}>Build:</strong> create a focused operating product that makes a hard decision clearer, faster, or more defensible.</p>
            <p><strong style={{ color: '#151515' }}>Own:</strong> improve useful businesses patiently rather than forcing them into one visual identity or one market.</p>
          </div>
        </section>

        <section style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, borderTop: '1px solid rgba(21,21,21,.28)', paddingTop: 28 }}>
          <div><span style={{ color: '#6f2934', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>01 / Separate identities</span><p style={{ color: '#5f5953', lineHeight: 1.65 }}>Each company is designed around its own customer, workflow, data, and visual language rather than functioning as a reskinned portfolio template.</p></div>
          <div><span style={{ color: '#6f2934', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>02 / Evidence before claims</span><p style={{ color: '#5f5953', lineHeight: 1.65 }}>Models, public evidence, user inputs, and verified facts are kept distinct. A planning estimate is not presented as an executable quote or commitment.</p></div>
          <div><span style={{ color: '#6f2934', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>03 / Decision usefulness</span><p style={{ color: '#5f5953', lineHeight: 1.65 }}>Product depth is measured by whether a user can make a better next decision—not by the number of dashboards, features, or decorative metrics.</p></div>
        </section>

        <p style={{ marginTop: 48 }}><Link href="/operating-notes" style={{ color: '#6f2934', fontWeight: 800 }}>Read current operating notes →</Link></p>
      </div>
    </main>
  );
}
