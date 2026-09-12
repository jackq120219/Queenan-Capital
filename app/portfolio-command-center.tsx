"use client";

import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type DecisionKey = "freight" | "commitment" | "site";

const decisions: Record<DecisionKey, {
  code: string;
  company: string;
  title: string;
  question: string;
  input: string;
  output: string;
  href: string;
  action: string;
}> = {
  freight: {
    code: "WI",
    company: "Waterline Intel",
    title: "Move physical freight",
    question: "How should this cargo move, and what could break execution?",
    input: "Cargo · origin · destination · quantity · timing",
    output: "Route economics · capacity context · vessel / market evidence · execution risk",
    href: "https://waterlineintel.com/",
    action: "OPEN WATERLINE",
  },
  commitment: {
    code: "EI",
    company: "ExpenseIntel",
    title: "Commit money intelligently",
    question: "Should this money be committed, and what still needs to be verified?",
    input: "Price · quote · listing · project · property · constraints",
    output: "Decision Passport · true cost · exposure · evidence gaps · next diligence action",
    href: "https://www.expenseintel.com/",
    action: "OPEN EXPENSEINTEL",
  },
  site: {
    code: "GG",
    company: "Gage Grid",
    title: "Screen an industrial site",
    question: "Can this site carry the project before diligence capital hardens into sunk cost?",
    input: "Power · water · wastewater · gas · fiber · timing · redundancy",
    output: "Feasibility · bottleneck · evidence quality · shortlist · diligence sequence",
    href: "https://gage-grid.vercel.app/",
    action: "OPEN GAGE GRID",
  },
};

export default function PortfolioCommandCenter() {
  const [target, setTarget] = useState<HTMLElement | null>(null);
  const [active, setActive] = useState<DecisionKey>("freight");

  useEffect(() => {
    const owners = document.getElementById("owners");
    if (!owners?.parentElement) return;
    let host = document.getElementById("qcOperatingSystemHost") as HTMLElement | null;
    if (!host) {
      host = document.createElement("div");
      host.id = "qcOperatingSystemHost";
      owners.parentElement.insertBefore(host, owners);
    }
    setTarget(host);
    return () => {
      setTarget(null);
      if (host?.parentElement) host.parentElement.removeChild(host);
    };
  }, []);

  if (!target) return null;
  const current = decisions[active];

  return createPortal(
    <section className="qc-os" aria-labelledby="qc-os-title">
      <style>{`
        .qc-os{padding:88px 4.2vw 96px;background:#11100f;color:#f5f0e7;border-bottom:1px solid #2e2b28}.qc-os-top{display:grid;grid-template-columns:minmax(0,1.05fr) minmax(340px,.95fr);gap:8vw;align-items:end}.qc-os-kicker{font-size:.6rem;font-weight:800;letter-spacing:.15em;text-transform:uppercase;color:#a55a66}.qc-os h2{margin:16px 0 0;max-width:980px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(3rem,6vw,7rem);font-weight:400;line-height:.92;letter-spacing:-.055em}.qc-os-intro{border-top:1px solid rgba(255,255,255,.28);padding-top:22px;color:#bbb3a8;font-size:.9rem;line-height:1.75}.qc-os-grid{display:grid;grid-template-columns:minmax(0,.72fr) minmax(0,1.28fr);gap:14px;margin-top:48px}.qc-os-menu{border:1px solid #373330}.qc-os-choice{width:100%;display:grid;grid-template-columns:46px 1fr auto;gap:14px;align-items:center;padding:19px 18px;border:0;border-bottom:1px solid #373330;background:#171513;color:#cfc7bc;text-align:left;cursor:pointer;transition:.18s ease}.qc-os-choice:last-child{border-bottom:0}.qc-os-choice:hover,.qc-os-choice[data-active="true"]{background:#f1ece3;color:#151311}.qc-os-choice span:first-child{font-size:.6rem;font-weight:800;letter-spacing:.12em;color:#a55a66}.qc-os-choice strong{display:block;font-family:Georgia,"Times New Roman",serif;font-size:1.25rem;font-weight:400}.qc-os-choice small{display:block;margin-top:5px;font-size:.66rem;opacity:.62}.qc-os-choice b{font-size:.7rem}.qc-os-panel{border:1px solid #373330;background:#171513;min-height:430px;display:flex;flex-direction:column}.qc-os-panel-head{display:flex;justify-content:space-between;gap:20px;padding:18px 20px;border-bottom:1px solid #373330;font-size:.58rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#8f877d}.qc-os-panel-head b{color:#a55a66}.qc-os-question{padding:28px 24px 30px}.qc-os-question span{font-size:.57rem;font-weight:800;letter-spacing:.13em;text-transform:uppercase;color:#a55a66}.qc-os-question h3{margin:12px 0 0;max-width:900px;font-family:Georgia,"Times New Roman",serif;font-size:clamp(2rem,3.5vw,4.2rem);font-weight:400;line-height:1;letter-spacing:-.04em}.qc-os-flow{display:grid;grid-template-columns:1fr 1fr;border-top:1px solid #373330;border-bottom:1px solid #373330}.qc-os-flow div{padding:20px 22px;min-height:145px}.qc-os-flow div+div{border-left:1px solid #373330}.qc-os-flow span{display:block;margin-bottom:12px;font-size:.55rem;font-weight:800;letter-spacing:.12em;text-transform:uppercase;color:#7f776e}.qc-os-flow p{margin:0;color:#d0c8bc;font-size:.78rem;line-height:1.6}.qc-os-launch{margin-top:auto;display:flex;justify-content:space-between;gap:24px;align-items:center;padding:20px 22px}.qc-os-launch p{margin:0;max-width:650px;color:#8f877e;font-size:.68rem;line-height:1.55}.qc-os-launch a{flex:0 0 auto;border:1px solid #f1ece3;padding:12px 15px;color:#f1ece3;font-size:.62rem;font-weight:800;letter-spacing:.09em;text-decoration:none}.qc-os-launch a:hover{background:#f1ece3;color:#151311}.qc-os-rules{display:grid;grid-template-columns:repeat(3,1fr);margin-top:14px;border:1px solid #373330}.qc-os-rules div{padding:16px 18px;border-right:1px solid #373330}.qc-os-rules div:last-child{border-right:0}.qc-os-rules span{display:block;color:#a55a66;font-size:.55rem;font-weight:800;letter-spacing:.11em}.qc-os-rules b{display:block;margin-top:8px;font-family:Georgia,"Times New Roman",serif;font-size:1.05rem;font-weight:400}.qc-os-rules p{margin:7px 0 0;color:#837b72;font-size:.62rem;line-height:1.5}@media(max-width:960px){.qc-os-top,.qc-os-grid{grid-template-columns:1fr;gap:32px}.qc-os-panel{min-height:0}}@media(max-width:700px){.qc-os{padding:70px 5vw 76px}.qc-os-flow,.qc-os-rules{grid-template-columns:1fr}.qc-os-flow div+div,.qc-os-rules div{border-left:0;border-right:0;border-top:1px solid #373330}.qc-os-rules div:first-child{border-top:0}.qc-os-choice{grid-template-columns:38px 1fr}.qc-os-choice b{display:none}.qc-os-launch{display:block}.qc-os-launch a{display:inline-block;margin-top:16px}}
      `}</style>

      <div className="qc-os-top">
        <div>
          <div className="qc-os-kicker">05 / OPERATING SYSTEM</div>
          <h2 id="qc-os-title">Start with the decision. Then choose the company.</h2>
        </div>
        <p className="qc-os-intro">Queenan Capital is not trying to make three unrelated software products. Each operating company is built around a different expensive decision where fragmented information, weak evidence or poor sequencing can cause avoidable mistakes.</p>
      </div>

      <div className="qc-os-grid">
        <div className="qc-os-menu" role="tablist" aria-label="Portfolio decision routes">
          {(Object.entries(decisions) as [DecisionKey, typeof decisions[DecisionKey]][]).map(([key, item]) => (
            <button key={key} type="button" className="qc-os-choice" data-active={active === key} onClick={() => setActive(key)} role="tab" aria-selected={active === key}>
              <span>{item.code}</span>
              <span><strong>{item.title}</strong><small>{item.company}</small></span>
              <b>→</b>
            </button>
          ))}
        </div>

        <div className="qc-os-panel" role="tabpanel">
          <div className="qc-os-panel-head"><span>{current.company}</span><b>{current.code} / ACTIVE PATH</b></div>
          <div className="qc-os-question"><span>CORE QUESTION</span><h3>{current.question}</h3></div>
          <div className="qc-os-flow">
            <div><span>START WITH</span><p>{current.input}</p></div>
            <div><span>LEAVE WITH</span><p>{current.output}</p></div>
          </div>
          <div className="qc-os-launch">
            <p>The operating company owns the decision workflow. Queenan Capital supplies the shared discipline: separate evidence from assumptions, make uncertainty visible and do not confuse a model with an executable fact.</p>
            <a href={current.href} target="_blank" rel="noreferrer">{current.action} ↗</a>
          </div>
        </div>
      </div>

      <div className="qc-os-rules" aria-label="Shared portfolio operating rules">
        <div><span>01 / EVIDENCE</span><b>Source before story.</b><p>Observed or reported facts stay separate from modeled outputs.</p></div>
        <div><span>02 / UNCERTAINTY</span><b>Unknown is an output.</b><p>Missing evidence becomes the next diligence task instead of fake precision.</p></div>
        <div><span>03 / CAPITAL</span><b>Sequence before spend.</b><p>Resolve the highest-consequence dependency before committing more time or money.</p></div>
      </div>
    </section>,
    target
  );
}
