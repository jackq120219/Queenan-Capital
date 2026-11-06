import type { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
  title: 'Initiatives',
  description: 'Queenan Capital initiatives: Waterline Intel, COEUS, Queenan Alpha, and financial intelligence development.',
  alternates: { canonical: 'https://www.queenancapital.com/companies' },
};
const ventures = [
  {name:'Waterline Intel',kind:'Freight intelligence',stage:'Operating product',description:'A commercial freight intelligence and decision-support platform focused on Great Lakes transportation, market information, and quote evaluation.',focus:'Useful freight decisions supported by better evidence.',href:'https://waterlineintel.com/'},
  {name:'COEUS',kind:'Shared intelligence and engineering',stage:'Internal development',description:'Queenan Capital’s evolving local research and engineering platform. The objective is to organize technical work, preserve evidence, and support more capable supervised execution across ventures.',focus:'Reusable intelligence and engineering capabilities.'},
  {name:'Queenan Alpha',kind:'Quantitative financial research',stage:'Experimental research',description:'Infrastructure for testing market hypotheses and evaluating predictive models against historical evidence, execution costs, and risk controls. A profitable advantage has not been established.',focus:'Independent evaluation before strategy deployment.'},
  {name:'Financial Intelligence',kind:'Fintech and alternative data',stage:'Venture exploration',description:'An early-stage direction focused on analytical products, alternative-data infrastructure, and specialized financial information services. Commercial product scope remains under evaluation.',focus:'Identify valuable financial decisions that better data can serve.'},
];
export default function CompaniesPage() {
 return <main className="qc-shell qc-inner">
  <nav className="qc-inner-nav" aria-label="Section navigation"><Link href="/">Queenan Capital</Link><Link href="/company">Company</Link><Link href="/letters/building-for-the-long-term">First letter</Link></nav>
  <header className="qc-inner-hero"><div><span className="qc-eyebrow">Current work / November 2026</span><h1>One direction.<br/>Several disciplines.</h1></div><p>Our initiatives are not all operating companies. We distinguish commercial products, internal capabilities, financial research, and ventures still taking shape. Each must ultimately prove its usefulness and economic value.</p></header>
  <section aria-label="Queenan Capital initiatives">
   {ventures.map((v,i)=><article key={v.name} className="qc-venture-row">
    <div><span className="qc-eyebrow">{String(i+1).padStart(2,'0')} / {v.kind}</span><h2>{v.name}</h2><span className="qc-stage">{v.stage}</span></div>
    <div className="qc-venture-copy"><p>{v.description}</p><small>Current focus</small><strong>{v.focus}</strong>{v.href?<a href={v.href} target="_blank" rel="noreferrer">Visit {v.name} ↗</a>:null}</div>
   </article>)}
  </section>
  <div className="qc-inner-foot"><p>We measure progress by verified work, commercial usefulness, and economic outcomes—not by announcements or the number of prototypes.</p><Link href="/">Back to Queenan Capital ↗</Link></div>
 </main>;
}
