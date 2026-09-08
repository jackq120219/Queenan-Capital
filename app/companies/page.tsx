import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Operating Companies | Queenan Capital' },
  description:
    'Explore Queenan Capital operating companies and internally developed businesses: ExpenseIntel, Waterline Intel, and Gage Grid.',
  alternates: { canonical: 'https://www.queenancapital.com/companies' },
  openGraph: {
    title: 'Operating Companies | Queenan Capital',
    description:
      'ExpenseIntel, Waterline Intel, and Gage Grid are distinct operating businesses developed under Queenan Capital.',
    url: 'https://www.queenancapital.com/companies',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const companies = [
  {
    name: 'ExpenseIntel',
    href: 'https://www.expenseintel.com/',
    logo: '/expenseintel-mark.svg',
    category: 'Pre-commitment decision intelligence',
    description:
      'A decision system for understanding price, true cost, recurring burden, downside, timing, alternatives, evidence, and negotiation leverage before a meaningful purchase or project.',
    focus: 'Consumer and business spending decisions',
    operatingQuestion: 'Should the money be committed, and how can the terms be improved first?',
  },
  {
    name: 'Waterline Intel',
    href: 'https://waterlineintel.com/',
    logo: '/waterline-mark.svg',
    category: 'Great Lakes freight intelligence',
    description:
      'Freight decision intelligence for route economics, market access, cargo opportunity signals, shipment feasibility, corridor conditions, RFQ preparation, and logistics execution support.',
    focus: 'Great Lakes logistics and freight decisions',
    operatingQuestion: 'Can this cargo move well, what route fits, and what must the market confirm?',
  },
  {
    name: 'Gage Grid',
    href: 'https://gage-grid.vercel.app/',
    logo: '/gage-grid-mark.svg',
    category: 'Industrial site infrastructure intelligence',
    description:
      'Project-first industrial site screening across power, water, wastewater, gas, fiber, timing, redundancy, evidence quality, and diligence sequencing before site capital hardens.',
    focus: 'Industrial siting and infrastructure diligence',
    operatingQuestion: 'Can this site carry the project, what breaks first, and what must be proven next?',
  },
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Queenan Capital operating companies',
  url: 'https://www.queenancapital.com/companies',
  itemListElement: companies.map((company, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    item: {
      '@type': 'Organization',
      name: company.name,
      url: company.href,
      logo: `https://www.queenancapital.com${company.logo}`,
      parentOrganization: {
        '@id': 'https://www.queenancapital.com/#organization',
      },
      description: company.description,
    },
  })),
};

export default function CompaniesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ee', color: '#151515', padding: '72px 6vw 104px', fontFamily: 'Arial, Helvetica, sans-serif', overflowX: 'hidden' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <nav style={{ display: 'flex', gap: 24, marginBottom: 68, fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none' }}>Queenan Capital</Link>
          <Link href="/company" style={{ color: '#6f2934', textDecoration: 'none' }}>Company information</Link>
          <Link href="/operating-notes" style={{ color: '#6f2934', textDecoration: 'none' }}>Operating notes</Link>
        </nav>

        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>Queenan Capital portfolio</div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.3rem,7vw,7.2rem)', lineHeight: .94, letterSpacing: '-.05em' }}>Distinct companies.<br />One operating discipline.</h1>
          </div>
          <p style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.15rem,2vw,1.75rem)', lineHeight: 1.45 }}>
            Queenan Capital studies industries, builds focused operating tools where a decision problem is worth solving, and develops those products with a long-term ownership mindset.
          </p>
        </header>

        <section style={{ marginTop: 84, borderTop: '1px solid #151515' }}>
          {companies.map((company, index) => (
            <a key={company.name} href={company.href} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, padding: '34px 0', borderBottom: '1px solid rgba(21,21,21,.28)', color: 'inherit', textDecoration: 'none' }}>
              <div>
                <span style={{ display: 'block', color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.12em', marginBottom: 12 }}>0{index + 1}</span>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 12 }}>{company.category}</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 14, flexWrap: 'wrap' }}>
                  <img src={company.logo} alt={`${company.name} logo`} width={62} height={62} style={{ width: 62, height: 62, flex: '0 0 62px' }} />
                  <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2rem,4vw,4.2rem)', fontWeight: 400, letterSpacing: '-.035em' }}>{company.name}</h2>
                </div>
                <p style={{ margin: 0, maxWidth: 720, color: '#5f5953', lineHeight: 1.7 }}>{company.description}</p>
              </div>
              <div style={{ alignSelf: 'end', borderTop: '1px solid rgba(21,21,21,.25)', paddingTop: 14 }}>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 8 }}>Primary focus</span>
                <strong style={{ display: 'block', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 18, fontWeight: 400, lineHeight: 1.4 }}>{company.focus}</strong>
                <span style={{ display: 'block', marginTop: 16, fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 7 }}>Core question</span>
                <p style={{ margin: 0, color: '#5f5953', lineHeight: 1.55, fontSize: 13 }}>{company.operatingQuestion}</p>
              </div>
            </a>
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
