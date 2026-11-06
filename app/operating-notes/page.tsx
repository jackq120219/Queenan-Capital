import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: { absolute: 'Operating Notes | Queenan Capital' },
  description: 'Selected product and operating milestones from Queenan Capital and its operating companies.',
  alternates: { canonical: 'https://www.queenancapital.com/operating-notes' },
  openGraph: {
    title: 'Operating Notes | Queenan Capital',
    description: 'Selected product and operating milestones from Queenan Capital and its operating companies.',
    url: 'https://www.queenancapital.com/operating-notes',
    siteName: 'Queenan Capital',
    type: 'website',
  },
};

const notes = [
  {
    company: 'Queenan Capital',
    title: 'Building for the Long Term',
    body: 'Our first corporate letter sets out the holding company’s purpose, operating principles, long-term financial objective and current areas of work.',
  },
  {
    company: 'Waterline Intel',
    title: 'The commercial starting point',
    body: 'Waterline remains focused on freight decisions, useful evidence, and earning customer trust through practical shipping and quote-evaluation tools.',
  },
  {
    company: 'COEUS',
    title: 'Improving internal technical capability',
    body: 'COEUS is a research and engineering platform in development. Reliable task execution and verification are the next milestones, not capabilities we claim are complete.',
  },
  {
    company: 'Research initiatives',
    title: 'Queenan Alpha and Project Endeavour',
    body: 'Quantitative market research and early API product exploration are being evaluated. Neither is presented as a profitable, independently operating financial technology company.',
  },
];

export default function OperatingNotesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ee', color: '#151515', padding: '72px 6vw 104px', fontFamily: 'Arial, Helvetica, sans-serif', overflowX: 'hidden' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <nav style={{ display: 'flex', gap: 24, marginBottom: 66, flexWrap: 'wrap', fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none' }}>Queenan Capital</Link>
          <Link href="/companies" style={{ color: '#6f2934', textDecoration: 'none' }}>Initiatives</Link>
          <Link href="/company" style={{ color: '#6f2934', textDecoration: 'none' }}>Company information</Link>
        </nav>

        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 18 }}>November 2026 / Operating notes</div>
            <h1 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontWeight: 400, fontSize: 'clamp(3.4rem,7vw,7rem)', lineHeight: .94, letterSpacing: '-.05em' }}>What is actually being built.</h1>
          </div>
          <p style={{ margin: 0, color: '#5f5953', lineHeight: 1.75 }}>
            A restrained record of product and operating progress. These are development milestones, not financial performance claims, customer commitments, or audited operating results.
          </p>
        </header>

        <section style={{ marginTop: 82, borderTop: '1px solid #151515' }}>
          {notes.map((note, index) => (
            <article key={note.company} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, padding: '34px 0', borderBottom: '1px solid rgba(21,21,21,.24)' }}>
              <div>
                <span style={{ display: 'block', color: '#6f2934', fontSize: 11, fontWeight: 800, marginBottom: 14 }}>0{index + 1}</span>
                <div style={{ color: '#6f2934', fontSize: 10, fontWeight: 800, letterSpacing: '.12em', textTransform: 'uppercase' }}>{note.company}</div>
                <h2 style={{ margin: '12px 0 0', fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(1.7rem,3vw,3rem)', fontWeight: 400, lineHeight: 1.05 }}>{note.title}</h2>
                {note.company === 'Queenan Capital' ? <Link href="/letters/building-for-the-long-term" style={{ display: 'inline-block', marginTop: 17, color: '#6f2934', fontWeight: 700, fontSize: 13, borderBottom: '1px solid #6f2934' }}>Read the first letter →</Link> : null}
              </div>
              <p style={{ margin: 0, color: '#5f5953', fontSize: 16, lineHeight: 1.75 }}>{note.body}</p>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '7vw', borderTop: '1px solid #151515', paddingTop: 30 }}>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 400 }}>The next threshold is evidence.</h2>
          <div style={{ color: '#5f5953', lineHeight: 1.75 }}>
            <p>Our near-term priority is to turn technical work into independently verified capabilities and useful products with customers.</p>
            <p>We intend to test commercial demand and economics before treating early initiatives as established businesses.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
