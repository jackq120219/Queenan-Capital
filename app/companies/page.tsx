import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Operating Companies | Queenan Capital' },
  description:
    'Explore Queenan Capital operating companies and internally developed businesses, including ExpenseIntel and Waterline Intel.',
  alternates: { canonical: 'https://www.queenancapital.com/companies' },
  openGraph: {
    title: 'Operating Companies | Queenan Capital',
    description:
      'ExpenseIntel and Waterline Intel are operating businesses developed under Queenan Capital LLC.',
    url: 'https://www.queenancapital.com/companies',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const companies = [
  {
    name: 'ExpenseIntel',
    href: 'https://www.expenseintel.com/',
    category: 'Decision intelligence',
    description:
      'Pre-commitment decision intelligence for understanding price, true cost, recurring burden, downside, timing, alternatives, and recoverable value before a meaningful purchase or project.',
    focus: 'Consumer and business spending decisions',
  },
  {
    name: 'Waterline Intel',
    href: 'https://waterlineintel.com/',
    category: 'Freight intelligence',
    description:
      'Great Lakes freight intelligence for route economics, market access, capacity signals, shipment planning, operators, cargo research, and logistics decisions.',
    focus: 'Great Lakes logistics and freight decision support',
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
      parentOrganization: {
        '@id': 'https://www.queenancapital.com/#organization',
      },
      description: company.description,
    },
  })),
};

export default function CompaniesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ee', color: '#151515', padding: '72px 6vw 104px', fontFamily: 'Arial, Helvetica, sans-serif' }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <nav style={{ display: 'flex', gap: 24, marginBottom: 68, fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none' }}>Queenan Capital</Link>
          <Link href="/company" style={{ color: '#6f2934', textDecoration: 'none' }}>Company information</Link>
        </nav>

        <header style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.15fr) minmax(280px,.85fr)', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>Queenan Capital portfolio</div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.3rem,7vw,7.2rem)', lineHeight: .94, letterSpacing: '-.05em' }}>Operating companies</h1>
          </div>
          <p style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.15rem,2vw,1.75rem)', lineHeight: 1.45 }}>
            Queenan Capital LLC studies industries, develops operating tools where a problem is worth solving, and intends to pursue selective long-term ownership.
          </p>
        </header>

        <section style={{ marginTop: 84, borderTop: '1px solid #151515' }}>
          {companies.map((company, index) => (
            <a key={company.name} href={company.href} style={{ display: 'grid', gridTemplateColumns: '80px minmax(0,1fr) minmax(220px,.55fr)', gap: 28, padding: '34px 0', borderBottom: '1px solid rgba(21,21,21,.28)', color: 'inherit', textDecoration: 'none' }}>
              <span style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.12em' }}>0{index + 1}</span>
              <div>
                <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 12 }}>{company.category}</div>
                <h2 style={{ margin: '0 0 14px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2rem,4vw,4.2rem)', fontWeight: 400, letterSpacing: '-.035em' }}>{company.name}</h2>
                <p style={{ margin: 0, maxWidth: 720, color: '#5f5953', lineHeight: 1.7 }}>{company.description}</p>
              </div>
              <div style={{ alignSelf: 'end', borderTop: '1px solid rgba(21,21,21,.25)', paddingTop: 14 }}>
                <span style={{ display: 'block', fontSize: 10, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 8 }}>Primary focus</span>
                <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 18, fontWeight: 400, lineHeight: 1.4 }}>{company.focus}</strong>
              </div>
            </a>
          ))}
        </section>

        <section style={{ marginTop: 88, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '7vw', borderTop: '1px solid #151515', paddingTop: 32 }}>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2.2rem,4vw,4.6rem)', fontWeight: 400, letterSpacing: '-.04em' }}>One parent. Distinct operating problems.</h2>
          <div style={{ lineHeight: 1.75, color: '#5f5953' }}>
            <p>ExpenseIntel focuses on the economics and risk behind meaningful spending commitments. Waterline Intel focuses on Great Lakes freight and logistics decisions.</p>
            <p>The businesses have separate products and audiences, while Queenan Capital provides the common ownership and operating context.</p>
            <p><Link href="/company" style={{ color: '#6f2934', fontWeight: 700 }}>Read official company information →</Link></p>
          </div>
        </section>
      </div>
    </main>
  );
}
