import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Queenan Capital LLC | Chicago Independent Holding Company',
  description: 'Queenan Capital LLC is an Illinois limited liability company based in Chicago and the parent company behind Waterline Intel and ExpenseIntel.',
  alternates: {
    canonical: 'https://www.queenancapital.com/company',
  },
  openGraph: {
    title: 'Queenan Capital LLC | Company Information',
    description: 'Official company information for Queenan Capital LLC, an independent holding company based in Chicago.',
    url: 'https://www.queenancapital.com/company',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const cardStyle: React.CSSProperties = {
  borderTop: '1px solid rgba(21,21,21,.28)',
  paddingTop: 20,
};

export default function CompanyPage() {
  return (
    <main
      style={{
        minHeight: '100vh',
        background: '#f7f4ee',
        color: '#151515',
        padding: '72px 6vw 96px',
        fontFamily: 'Arial, Helvetica, sans-serif',
      }}
    >
      <div style={{ maxWidth: 1180, margin: '0 auto' }}>
        <Link
          href="/"
          style={{
            display: 'inline-block',
            marginBottom: 64,
            color: '#6f2934',
            textDecoration: 'none',
            fontSize: 12,
            fontWeight: 800,
            letterSpacing: '.12em',
            textTransform: 'uppercase',
          }}
        >
          ← Queenan Capital
        </Link>

        <section style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1.2fr) minmax(280px,.8fr)', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 20 }}>
              Official company information
            </div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.4rem,7vw,7rem)', lineHeight: .94, letterSpacing: '-.05em' }}>
              Queenan Capital LLC
            </h1>
          </div>
          <p style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.25rem,2vw,1.8rem)', lineHeight: 1.45 }}>
            Queenan Capital LLC is an Illinois limited liability company based in Chicago. Queenan Capital is the company&apos;s public-facing name.
          </p>
        </section>

        <section style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 28 }}>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Legal name</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>Queenan Capital LLC</strong>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Jurisdiction / base</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>Illinois / Chicago</strong>
          </div>
          <div style={cardStyle}>
            <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase', color: '#6f2934', marginBottom: 14 }}>Established</div>
            <strong style={{ fontFamily: 'Georgia, Times New Roman, serif', fontSize: 24, fontWeight: 400 }}>2026</strong>
          </div>
        </section>

        <section style={{ marginTop: 88, borderTop: '1px solid #151515', paddingTop: 32 }}>
          <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 24 }}>
            Operating projects
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 28 }}>
            <a href="https://waterlineintel.com/" style={{ ...cardStyle, color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 34, fontWeight: 400 }}>Waterline Intel</h2>
              <p style={{ margin: 0, maxWidth: 520, lineHeight: 1.65, color: '#5f5953' }}>Great Lakes freight intelligence for route economics, market access, capacity signals, and shipment decisions.</p>
            </a>
            <a href="https://www.expenseintel.com/" style={{ ...cardStyle, color: 'inherit', textDecoration: 'none', display: 'block' }}>
              <h2 style={{ margin: '0 0 12px', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 34, fontWeight: 400 }}>ExpenseIntel</h2>
              <p style={{ margin: 0, maxWidth: 520, lineHeight: 1.65, color: '#5f5953' }}>Decision intelligence for physical places, projects, real-world costs, constraints, and failure risk.</p>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
