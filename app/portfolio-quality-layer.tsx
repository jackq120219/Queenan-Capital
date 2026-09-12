'use client';

import { useEffect, useMemo, useState } from 'react';
import { createPortal } from 'react-dom';

const OPTIONS = [
  { key: 'repeat', label: 'Repeat customers', low: 'Mostly one-off', mid: 'Mixed', high: 'Strong repeat base' },
  { key: 'concentration', label: 'Customer concentration', low: 'One customer dominates', mid: 'Some concentration', high: 'Diversified' },
  { key: 'dependence', label: 'Owner dependence', low: 'Owner runs everything', mid: 'Shared with team', high: 'Team can operate' },
  { key: 'records', label: 'Financial / operating records', low: 'Limited', mid: 'Usable', high: 'Clean + current' },
  { key: 'transition', label: 'Transition flexibility', low: 'Immediate exit needed', mid: 'Short handoff', high: 'Flexible handoff' },
] as const;

type Key = typeof OPTIONS[number]['key'];
type Scores = Record<Key, number>;

export default function PortfolioQualityLayer() {
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [scores, setScores] = useState<Scores>({ repeat: 1, concentration: 1, dependence: 1, records: 1, transition: 1 });

  useEffect(() => {
    const ownerBody = document.querySelector<HTMLElement>('.owners-body');
    if (ownerBody) {
      let node = ownerBody.querySelector<HTMLElement>('[data-owner-readiness-mount]');
      if (!node) {
        node = document.createElement('div');
        node.dataset.ownerReadinessMount = '1';
        ownerBody.insertBefore(node, ownerBody.querySelector('.owners-link'));
      }
      setMount(node);
    }

    const replaceVisibleText = () => {
      const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        if (!node.nodeValue) continue;
        const parent = node.parentElement;
        if (!parent || parent.closest('script,style')) continue;
        let next = node.nodeValue;
        next = next.replace(/Research \/ under development/g, 'Operating pilot');
        next = next.replace(/Research → pilot/g, 'Pilot → verification');
        next = next.replace(/research-stage industrial infrastructure intelligence project exploring whether/gi, 'industrial infrastructure operating pilot testing whether');
        next = next.replace(/research-stage project/gi, 'operating pilot');
        next = next.replace(/Live work \+ research \+ open direction/g, 'Operating companies + open ownership mandate');
        if (next !== node.nodeValue) node.nodeValue = next;
      }
    };
    replaceVisibleText();
    const observer = new MutationObserver(replaceVisibleText);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  const result = useMemo(() => {
    const total = Object.values(scores).reduce((sum, value) => sum + value, 0);
    const pct = Math.round((total / 10) * 100);
    const label = pct >= 80 ? 'STRONG CONVERSATION FIT' : pct >= 55 ? 'WORTH A CONVERSATION' : 'EARLY FIT';
    const note = pct >= 80
      ? 'The business appears to match several traits Queenan Capital values: durability, transferability and understandable economics.'
      : pct >= 55
        ? 'There is enough here to justify a conversation, but transferability or business quality still depends on a few important facts.'
        : 'The business may still be interesting, but a sale would likely depend on reducing owner dependence, improving records or proving customer durability.';
    return { pct, label, note };
  }, [scores]);

  return (
    <>
      <style>{`
        .company-section .discipline-list{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));border:1px solid rgba(21,21,21,.28);background:#efeae1;gap:0}
        .company-section .discipline{min-height:290px;display:flex;flex-direction:column;align-items:flex-start;justify-content:space-between;gap:22px;padding:28px 30px;border:0;border-right:1px solid rgba(21,21,21,.18);background:linear-gradient(180deg,rgba(255,255,255,.42),rgba(255,255,255,.12));transition:background .2s ease,transform .2s ease}
        .company-section .discipline:last-child{border-right:0}.company-section .discipline:hover{background:#f7f4ee;transform:translateY(-2px)}
        .company-section .discipline-num{width:36px;height:36px;display:grid;place-items:center;border:1px solid rgba(21,21,21,.35);border-radius:0;color:#6f2934;font-weight:800}
        .company-section .discipline h3{font-family:Georgia,'Times New Roman',serif;font-size:clamp(2.5rem,4vw,4.7rem);font-weight:400;letter-spacing:-.045em}
        .company-section .discipline p{font-size:.82rem;line-height:1.7;max-width:360px}
        [data-venture-orbit-mount] button[aria-label^='Explore']{border-radius:6px!important;box-shadow:0 16px 36px rgba(0,0,0,.22)!important;backdrop-filter:blur(12px);transition:transform .18s ease,border-color .18s ease,background .18s ease!important}
        [data-venture-orbit-mount] button[aria-label^='Explore']:hover{transform:translateY(-3px) scale(1.015)!important}
        [data-venture-orbit-mount] button[aria-label^='Explore Long-term ownership']{border-color:rgba(239,231,218,.76)!important;background:linear-gradient(145deg,#5e2631,#321920)!important}
        [data-venture-orbit-mount] button[aria-label^='Explore Gage Grid']{border-style:solid!important;border-color:rgba(239,231,218,.42)!important;background:rgba(29,27,23,.96)!important}
        [data-venture-orbit-mount] button[aria-label*='research-stage']{border-style:solid!important}
        .qc-corner-seal{border-radius:2px!important;box-shadow:none!important}
        .owners-section{background:#5f2832}.owners-body{justify-content:center}.owners-title h2{font-size:clamp(3rem,5.1vw,5.8rem)}
        .qc-owner-desk{margin:4px 0 34px;border:1px solid rgba(255,255,255,.42);background:rgba(24,11,14,.18)}
        .qc-owner-desk-head{display:grid;grid-template-columns:1fr auto;gap:24px;padding:20px;border-bottom:1px solid rgba(255,255,255,.2)}
        .qc-owner-desk-head span{font-size:.55rem;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:rgba(255,255,255,.58)}
        .qc-owner-desk-head h3{margin:7px 0 0;font-family:Georgia,'Times New Roman',serif;font-size:1.7rem;font-weight:400}
        .qc-owner-score{text-align:right}.qc-owner-score b{display:block;font:700 2.3rem/1 ui-monospace,SFMono-Regular,Menlo,monospace}.qc-owner-score small{font-size:.53rem;letter-spacing:.1em;color:rgba(255,255,255,.62)}
        .qc-owner-grid{display:grid;grid-template-columns:1fr 1fr}.qc-owner-controls{padding:18px 20px;border-right:1px solid rgba(255,255,255,.18)}
        .qc-owner-control{padding:12px 0;border-bottom:1px solid rgba(255,255,255,.12)}.qc-owner-control:last-child{border-bottom:0}.qc-owner-control>span{display:block;margin-bottom:8px;font-size:.64rem;font-weight:700}
        .qc-owner-options{display:grid;grid-template-columns:repeat(3,1fr);gap:5px}.qc-owner-options button{border:1px solid rgba(255,255,255,.18);background:transparent;color:rgba(255,255,255,.62);padding:8px 6px;font-size:.54rem;cursor:pointer}.qc-owner-options button[data-active='true']{background:white;color:#4d2029;border-color:white}
        .qc-owner-result{display:flex;flex-direction:column;justify-content:space-between;padding:20px}.qc-owner-result strong{font-size:.68rem;letter-spacing:.09em}.qc-owner-result p{margin:15px 0;color:rgba(255,255,255,.77);font-size:.76rem;line-height:1.65}.qc-owner-meter{height:7px;background:rgba(255,255,255,.14);overflow:hidden}.qc-owner-meter i{display:block;height:100%;background:white;transition:width .2s ease}.qc-owner-result small{margin-top:13px;color:rgba(255,255,255,.52);font-size:.56rem;line-height:1.5}
        @media(max-width:900px){.company-section .discipline-list{grid-template-columns:1fr}.company-section .discipline{min-height:0;border-right:0;border-bottom:1px solid rgba(21,21,21,.18)}.qc-owner-grid{grid-template-columns:1fr}.qc-owner-controls{border-right:0;border-bottom:1px solid rgba(255,255,255,.18)}}
      `}</style>
      {mount && createPortal(
        <section className="qc-owner-desk" aria-label="Business transition readiness desk">
          <div className="qc-owner-desk-head">
            <div><span>OWNER READINESS DESK / SELF-SCREEN</span><h3>Would this business be easy to understand and transfer?</h3></div>
            <div className="qc-owner-score"><b>{result.pct}</b><small>/ 100 READINESS</small></div>
          </div>
          <div className="qc-owner-grid">
            <div className="qc-owner-controls">
              {OPTIONS.map((option) => (
                <div className="qc-owner-control" key={option.key}>
                  <span>{option.label}</span>
                  <div className="qc-owner-options">
                    {[option.low, option.mid, option.high].map((label, index) => (
                      <button key={label} type="button" data-active={scores[option.key] === index} onClick={() => setScores((current) => ({ ...current, [option.key]: index }))}>{label}</button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="qc-owner-result">
              <div><strong>{result.label}</strong><p>{result.note}</p><div className="qc-owner-meter"><i style={{ width: `${result.pct}%` }} /></div></div>
              <small>This is a conversation screen, not a valuation or offer. It is designed to surface transferability questions before either side spends time on diligence.</small>
            </div>
          </div>
        </section>,
        mount,
      )}
    </>
  );
}
