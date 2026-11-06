import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata={
 title:'Operating Notes',
 description:'Research and operating updates from Queenan Capital.',
 alternates:{canonical:'https://www.queenancapital.com/operating-notes'}
};
export default function OperatingNotes(){
 return <main className="qc-shell qc-inner">
  <nav className="qc-inner-nav"><Link href="/">Queenan Capital</Link><Link href="/companies">Initiatives</Link></nav>
  <header className="qc-inner-hero"><div><span className="qc-eyebrow">Operating notes / November 2026</span><h1>Progress, recorded carefully.</h1></div><p>Selected reflections and development updates. These notes describe work in progress, not audited performance or commercial outcomes.</p></header>
  <section className="qc-venture-row">
   <div><span className="qc-eyebrow">November 2026 / Founding letter</span><h2>Building for the Long Term</h2><span className="qc-stage">First corporate letter</span></div>
   <div className="qc-venture-copy"><p>Our first letter introduces Queenan Capital's purpose, current initiatives, financial objectives, and the principles behind our long-term strategy.</p><Link href="/letters/building-for-the-long-term">Read the letter ↗</Link></div>
  </section>
  <section className="qc-venture-row">
   <div><span className="qc-eyebrow">November 2026 / Portfolio direction</span><h2>Connecting the work.</h2></div>
   <div className="qc-venture-copy"><p>Our immediate focus is strengthening Waterline Intel and developing COEUS as a shared intelligence and engineering capability, while evaluating quantitative research and a possible financial-data venture. The next standard is reliable execution and demonstrated customer value.</p></div>
  </section>
  <div className="qc-inner-foot"><p>Company statements are aspirational unless identified as observed results.</p><Link href="/">Return home ↗</Link></div>
 </main>;
}
