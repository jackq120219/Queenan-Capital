import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
 title:'Company Information',
 description:'Queenan Capital LLC is an independent holding company founded in October 2026 and based in Chicago, Illinois.',
 alternates:{canonical:'https://www.queenancapital.com/company'}
};
export default function CompanyPage(){
 return <main className="qc-shell qc-inner">
  <nav className="qc-inner-nav"><Link href="/">Queenan Capital</Link><Link href="/companies">Initiatives</Link><Link href="/letters/building-for-the-long-term">First letter</Link></nav>
  <header className="qc-inner-hero"><div><span className="qc-eyebrow">Company / Official information</span><h1>Queenan Capital.</h1></div><p>Queenan Capital LLC is an independent holding company founded in Chicago in 2026. We are developing a long-term enterprise through operating businesses, proprietary technical capabilities, and selective capital allocation.</p></header>
  <section className="qc-venture-row"><div><span className="qc-eyebrow">01 / Identity</span><h2>Company details</h2></div><div className="qc-venture-copy"><p><strong>Entity:</strong> Queenan Capital LLC<br/><strong>Established:</strong> October 8, 2026<br/><strong>Base:</strong> Chicago, Illinois<br/><strong>Founder:</strong> Jack Queenan</p></div></section>
  <section className="qc-venture-row"><div><span className="qc-eyebrow">02 / Operating approach</span><h2>Build. Improve. Own.</h2></div><div className="qc-venture-copy"><p>Our work includes freight intelligence, internal research and engineering, experimental quantitative analysis, and the early development of financial intelligence products. Those initiatives are at different stages; not all have reached commercial viability.</p><p>We intend to develop profitable operating businesses and, over time, evaluate selective investments and acquisitions where the economics and capabilities justify the commitment.</p></div></section>
  <section className="qc-venture-row"><div><span className="qc-eyebrow">03 / Contact</span><h2>Start a conversation.</h2></div><div className="qc-venture-copy"><p>For business inquiries and introductions, contact Queenan Capital directly.</p><a href="mailto:contact@queenancapital.com">contact@queenancapital.com ↗</a></div></section>
  <div className="qc-inner-foot"><p>Nothing on this site constitutes an offer of securities or investment advice.</p><Link href="/">Return home ↗</Link></div>
 </main>
}
