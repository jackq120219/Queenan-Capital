'use client';

import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

const ventures = [
  { code: 'EI', name: 'ExpenseIntel', descriptor: 'Pre-commitment decision intelligence', question: 'Should you spend the money?', href: 'https://expenseintel.com', status: 'Operating product' },
  { code: 'WI', name: 'Waterline Intel', descriptor: 'Great Lakes freight intelligence', question: 'Can this cargo move well?', href: 'https://waterlineintel.com', status: 'Operating product' },
  { code: 'GG', name: 'Gage Grid', descriptor: 'Industrial site infrastructure intelligence', question: 'Can this site carry the project?', href: 'https://gage-grid.vercel.app', status: 'Active development' },
];

export default function PortfolioCurrent() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (pathname !== '/') return;
    const owners = document.getElementById('owners');
    if (!owners) return;
    const node = document.createElement('div');
    node.dataset.currentPortfolio = '1';
    owners.insertAdjacentElement('beforebegin', node);
    setMount(node);

    const railName = document.querySelector<HTMLElement>('.rail-name');
    if (railName && /LLC/i.test(railName.textContent || '')) railName.textContent = 'QUEENAN CAPITAL';
    document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a,.mobile-nav a').forEach((link) => {
      if ((link.textContent || '').trim() === 'Projects') link.textContent = 'Portfolio';
    });
    const about = document.querySelector<HTMLElement>('.about-lead');
    if (about && about.textContent?.includes('Waterline Intel and ExpenseIntel')) about.textContent = 'Queenan Capital was founded in Chicago in 2026 by Jack Queenan. Its current operating field includes ExpenseIntel, Waterline Intel, and Gage Grid.';
    const notes = document.querySelector<HTMLElement>('.notes-copy p');
    if (notes && notes.textContent?.includes('Waterline Intel and ExpenseIntel')) notes.textContent = 'Occasional notes from researching markets and building ExpenseIntel, Waterline Intel, and Gage Grid.';

    return () => { node.remove(); setMount(null); };
  }, [pathname]);

  if (!mount || pathname !== '/') return null;

  return createPortal(
    <section className="qc-current-portfolio" aria-labelledby="qc-current-title">
      <style>{`
        .qc-current-portfolio{padding:76px 4.2vw 82px;border-bottom:1px solid #151515;background:#f0ece5;color:#151515}
        .qc-current-head{display:grid;grid-template-columns:.7fr 1.3fr;gap:8vw;align-items:end;margin-bottom:34px}.qc-current-kicker{font-size:.58rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#6f2934}.qc-current-head h2{margin:0;max-width:820px;font:400 clamp(2.3rem,4.2vw,5rem)/1 Georgia,'Times New Roman',serif;letter-spacing:-.045em}
        .qc-current-grid{display:grid;grid-template-columns:repeat(3,1fr);border-top:1px solid #151515;border-bottom:1px solid #151515}.qc-current-card{position:relative;min-height:230px;padding:24px 24px 26px;color:inherit;text-decoration:none;border-right:1px solid rgba(21,21,21,.28);transition:background .18s ease}.qc-current-card:last-child{border-right:0}.qc-current-card:hover{background:rgba(255,255,255,.42)}
        .qc-current-top{display:flex;justify-content:space-between;gap:16px;align-items:center;font-size:.55rem;font-weight:800;letter-spacing:.1em;text-transform:uppercase}.qc-current-top span:first-child{color:#6f2934}.qc-current-top span:last-child{color:#726b64}.qc-current-card h3{margin:44px 0 9px;font:400 clamp(1.8rem,2.7vw,3rem)/1 Georgia,'Times New Roman',serif;letter-spacing:-.035em}.qc-current-card p{margin:0;max-width:330px;color:#66605a;font-size:.75rem;line-height:1.55}.qc-current-card em{display:block;margin-top:13px;color:#292522;font:400 .86rem/1.45 Georgia,'Times New Roman',serif}.qc-current-card b{position:absolute;right:24px;bottom:23px;font-size:1.2rem;font-weight:400}
        .qc-current-foot{display:flex;justify-content:space-between;gap:20px;align-items:center;padding-top:18px;font-size:.64rem}.qc-current-foot p{margin:0;max-width:760px;color:#6b655f;line-height:1.55}.qc-current-links{display:flex;gap:18px;flex-wrap:wrap}.qc-current-links a{color:#151515;text-decoration:none;border-bottom:1px solid rgba(21,21,21,.45);font-weight:700}
        @media(max-width:820px){.qc-current-head{grid-template-columns:1fr;gap:18px}.qc-current-grid{grid-template-columns:1fr}.qc-current-card{min-height:190px;border-right:0;border-bottom:1px solid rgba(21,21,21,.24)}.qc-current-card:last-child{border-bottom:0}.qc-current-card h3{margin-top:34px}.qc-current-foot{align-items:flex-start;flex-direction:column}}
      `}</style>
      <div className="qc-current-head"><div className="qc-current-kicker">05 / CURRENT PORTFOLIO</div><h2 id="qc-current-title">Three products. Different markets. One operating discipline.</h2></div>
      <div className="qc-current-grid">
        {ventures.map((venture) => <a className="qc-current-card" href={venture.href} target="_blank" rel="noreferrer" key={venture.code}><div className="qc-current-top"><span>{venture.code}</span><span>{venture.status}</span></div><h3>{venture.name}</h3><p>{venture.descriptor}</p><em>{venture.question}</em><b aria-hidden="true">↗</b></a>)}
      </div>
      <div className="qc-current-foot"><p>Queenan Capital keeps each operating company distinct while applying the same standard: evidence before claims, useful decisions before feature count, and long-term operating discipline.</p><div className="qc-current-links"><a href="/companies">Company profiles</a><a href="/operating-notes">Operating notes</a></div></div>
    </section>, mount,
  );
}
