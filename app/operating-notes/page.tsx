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
    company: 'ExpenseIntel',
    title: 'Decision Passport expanded from analysis to action',
    body: 'Check now connects the initial decision to optimization targets, negotiation preparation, evidence quality, Decision Delta history, and outcome tracking. The product continues to distinguish modeled values from user-entered or supported evidence.',
  },
  {
    company: 'Waterline Intel',
    title: 'Freight Lab moved closer to execution',
    body: 'Shipment feasibility now compares marine, rail, and truck on one screen, keeps stale market observations visibly stale, and can turn the selected lane into an RFQ brief and written-quote comparison without presenting modeled economics as executable rates.',
  },
  {
    company: 'Gage Grid',
    title: 'Industrial site screening became a diligence workflow',
    body: 'The Midwest pilot now combines project-first site ranking, preference-sensitive screening, evidence provenance, a persistent proof register, and a screening queue so the product can move from “which site looks best?” toward “what must be proven before more capital is committed?”',
  },
];

export default function OperatingNotesPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#f7f4ee', color: '#151515', padding: '72px 6vw 104px', fontFamily: 'Arial, Helvetica, sans-serif', overflowX: 'hidden' }}>
      <div style={{ maxWidth: 1120, margin: '0 auto' }}>
        <nav style={{ display: 'flex', gap: 24, marginBottom: 66, flexWrap: 'wrap', fontSize: 12, fontWeight: 800, letterSpacing: '.1em', textTransform: 'uppercase' }}>
          <Link href="/" style={{ color: '#6f2934', textDecoration: 'none' }}>Queenan Capital</Link>
          <Link href="/companies" style={{ color: '#6f2934', textDecoration: 'none' }}>Operating companies</Link>
          <Link href="/company" style={{ color: '#6f2934', textDecoration: 'none' }}>Company information</Link>
        </nav>

        <header style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '8vw', alignItems: 'end' }}>
          <div>
            <div style={{ color: '#6f2934', fontSize: 11, fontWeight: 800, letterSpacing: '.14em', textTransform: 'uppercase', marginBottom: 18 }}>September 2026 / Operating notes</div>
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
              </div>
              <p style={{ margin: 0, color: '#5f5953', fontSize: 16, lineHeight: 1.75 }}>{note.body}</p>
            </article>
          ))}
        </section>

        <section style={{ marginTop: 72, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: '7vw', borderTop: '1px solid #151515', paddingTop: 30 }}>
          <h2 style={{ margin: 0, fontFamily: 'Georgia, Times New Roman, serif', fontSize: 'clamp(2rem,4vw,4rem)', fontWeight: 400 }}>The next threshold is evidence.</h2>
          <div style={{ color: '#5f5953', lineHeight: 1.75 }}>
            <p>Across the portfolio, the next phase is less about adding visible surface area and more about replacing modeled assumptions with supported inputs, written quotes, source records, and observed outcomes.</p>
            <p>That makes the products more useful while also making them harder to imitate with a generic interface or one-off AI response.</p>
          </div>
        </section>
      </div>
    </main>
  );
}
