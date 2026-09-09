import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Research Standards',
  description: 'How Queenan Capital operating products separate public evidence, user facts, models, unknowns, and verified outcomes.',
};

const standards = [
  ['Source before claim', 'A public or external claim should point back to an identifiable source, publisher, observation date, or retrieval date whenever practical.'],
  ['Observed is not verified', 'A nearby asset, market observation, public listing, benchmark, or model input is context until the decision-specific fact is confirmed.'],
  ['Retrieval date is not observation date', 'Products preserve when a source was observed separately from when Queenan Capital retrieved it so stale data cannot appear current.'],
  ['Models stay labeled', 'Modeled estimates can guide screening and stress tests, but they do not become quotes, utility commitments, capacity confirmations, or executed outcomes.'],
  ['Written evidence supersedes assumptions', 'A written quote, utility response, public record, or user-confirmed outcome should replace weaker modeled assumptions rather than sit beside them as an equal fact.'],
  ['Negative evidence is retained', 'Contradictory, stale, rejected, or failed evidence should remain visible when it materially changes a decision.'],
  ['Outcomes close the loop', 'The strongest future moat is not more features. It is the growing record of what was quoted, verified, executed, paid, delivered, and changed.'],
];

export default function ResearchStandardsPage() {
  return (
    <main style={{minHeight:'100vh',background:'#f3efe8',color:'#151515',padding:'72px 6vw 96px'}}>
      <Link href="/" style={{fontSize:12,fontWeight:800,letterSpacing:'.12em',textTransform:'uppercase',color:'#6f2934',textDecoration:'none'}}>← Queenan Capital</Link>
      <section style={{maxWidth:1120,margin:'72px auto 0'}}>
        <div style={{fontSize:11,fontWeight:800,letterSpacing:'.14em',textTransform:'uppercase',color:'#6f2934',marginBottom:22}}>Portfolio research standards / 2026</div>
        <h1 style={{fontFamily:'Georgia, Times New Roman, serif',fontWeight:400,fontSize:'clamp(3rem,7vw,7rem)',lineHeight:.92,letterSpacing:'-.05em',margin:'0 0 34px'}}>Evidence before claims.</h1>
        <p style={{maxWidth:760,fontFamily:'Georgia, Times New Roman, serif',fontSize:'clamp(1.25rem,2vw,1.9rem)',lineHeight:1.45,margin:'0 0 56px'}}>ExpenseIntel, Waterline Intel, and Gage Grid work in different markets, but they should follow the same evidence discipline: know what is observed, what is modeled, what is still unknown, and what has actually been verified.</p>
        <div style={{borderTop:'1px solid #151515'}}>
          {standards.map(([title,text],i)=>(
            <article key={title} style={{display:'grid',gridTemplateColumns:'80px minmax(180px,.75fr) minmax(280px,1.25fr)',gap:24,padding:'24px 0',borderBottom:'1px solid rgba(21,21,21,.22)'}}>
              <span style={{fontSize:10,fontWeight:800,color:'#6f2934'}}>0{i+1}</span>
              <strong style={{fontSize:15}}>{title}</strong>
              <p style={{margin:0,color:'#615c56',fontSize:13,lineHeight:1.65}}>{text}</p>
            </article>
          ))}
        </div>
        <section style={{marginTop:64,paddingTop:28,borderTop:'1px solid #151515',display:'grid',gridTemplateColumns:'1fr 1fr',gap:48}}>
          <div><span style={{fontSize:10,fontWeight:800,letterSpacing:'.12em',color:'#6f2934'}}>EVIDENCE CLASSES</span><h2 style={{fontFamily:'Georgia, Times New Roman, serif',fontWeight:400,fontSize:'clamp(2rem,4vw,4rem)',lineHeight:1,letterSpacing:'-.04em'}}>User. Public. Verified. Modeled. Unknown.</h2></div>
          <p style={{margin:0,color:'#615c56',fontSize:14,lineHeight:1.75}}>The goal is not to eliminate modeling. The goal is to make the hierarchy legible. Direct, written and outcome evidence should outrank generalized public context; public context should outrank unsupported assumptions; and unresolved facts should remain unknown until they are replaced.</p>
        </section>
      </section>
    </main>
  );
}
