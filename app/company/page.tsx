import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Queenan Capital | Independent Holding Company in Chicago' },
  description: 'Queenan Capital is an independent holding company based in Chicago and developing Waterline Intel alongside internal intelligence, quantitative research and API experiments.',
  alternates: {
    canonical: 'https://www.queenancapital.com/company',
  },
  openGraph: {
    title: 'Queenan Capital | Company Information',
    description: 'Official company information for Queenan Capital, an independent holding company based in Chicago.',
    url: 'https://www.queenancapital.com/company',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const cardStyle: React.CSSProperties = {
  borderTop: '1px solid rgba(21,21,21,.28)',
  paddingTop: 20,
};

const operatingCompanies = [
  { name: 'Waterline Intel', href: 'https://waterlineintel.com/', copy: 'Commercial freight intelligence and logistics decision support.' },
  { name: 'COEUS', href: null, copy: 'An internal research and engineering platform currently in development.' },
  { name: 'Queenan Alpha', href: null, copy: 'Experimental quantitative research; no proven profitable trading edge is claimed.' },
  { name: 'Project Endeavour', href: null, copy: 'Early API and information-product exploration, not an established fintech company.' },
];

export default function CompanyPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f7f4ee',
        color: '#151515',
        padding: '72px 6vw 96px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        overflowX: 'hidden',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <div style={{ display: 'flex', gap: 24, marginBottom: 64, flexWrap: 'wrap' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none', fontSize: 12, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase' }}>← Queenan Capital</Link>
          <Link href="/companies" style={{ color: '#6f2934', textDecoration: 'none', fontSize: 12, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase' }}>Current initiatives →</Link>
          <Link href="/operating-notes" style={{ color: '#6f2934', textDecoration: 'none', fontSize: 12, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase' }}>Operating notes →</Link>
        </div>

        <section style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>Official company information</div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.4rem,7vw,7rem)', lineHeight: .94, letterSpacing: '-.05em' }}>Queenan Capital</h1>
          </div>
          <p style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.25rem,2vw,1.8rem)', lineHeight: 1.45 }}>
            Queenan Capital is an independent holding company based in Chicago. It is developing commercial products and internal research capabilities while evaluating long-term ownership opportunities.
          </p>
        </section>

        <section style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 28 }}>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Operating name</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>Queenan Capital</strong>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Base</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>Chicago, Illinois</strong>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Established</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>2026</strong>
          </div>
        </section>

        <section style={{ marginTop: 88, borderTop: '1px solid #151515', paddingTop: 32 }}>
          <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 24 }}>Operating companies</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', gap: 28 }}>
            {operatingCompanies.map((company) => (
              <div key={company.name} style={{ ...cardStyle, color: 'inherit', textDecoration: 'none', display: 'block' }}>
                <h2 style={{ margin: '0 0 12px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 32, fontWeight: 400 }}>{company.name}</h2>
                <p style={{ margin: 0, maxWidth: 520, lineHeight: 1.65, color: '#5f5953' }}>{company.copy}</p>
                {company.href ? <a href={company.href} target="_blank" rel="noreferrer" style={{display:'inline-block',marginTop:15,color:'#6f2934',fontSize:13,fontWeight:700}}>Visit {company.name} →</a> : null}
              </div>
            ))}
          </div>
          <p style={{ marginTop: 30 }}><Link href="/companies" style={{ color: '#6f2934', fontWeight: 800 }}>View the initiatives page →</Link></p>
        </section>

        <section style={{ marginTop: 80, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '7vw', borderTop: '1px solid #151515', paddingTop: 30 }}>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2.2rem,4vw,4.4rem)', fontWeight: 400, letterSpacing: '-.04em' }}>Operating discipline</h2>
          <div style={{ color: '#5f5953', lineHeight: 1.75 }}>
            <p><strong style={{ color: '#151515' }}>Study before building.</strong> Understand the market, source quality, economics, and failure modes first.</p>
            <p><strong style={{ color: '#151515' }}>Keep businesses distinct.</strong> Shared ownership should not force separate products into the same visual or operating template.</p>
            <p><strong style={{ color: '#151515' }}>Prefer evidence to appearance.</strong> Models are useful, but they remain labeled until real quotes, source records, or operating outcomes replace them.</p>
            <p><strong style={{ color: '#151515' }}>Build for a better next decision.</strong> Product usefulness matters more than feature count.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
