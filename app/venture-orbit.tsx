'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import styles from './venture-orbit.module.css';

type Venture = {
  key: string;
  short: string;
  name: string;
  status: string;
  lead: string;
  type: string;
  focus: string;
  horizon: string;
  href: string;
  action: string;
  vectors: [string, string, string];
  stage: 'operating' | 'research' | 'mandate';
};

const ventures: Venture[] = [
  {
    key: 'waterline',
    short: 'WI',
    name: 'Waterline Intel',
    status: 'Operating project',
    lead: 'Great Lakes freight intelligence built to make fragmented port, route, cargo and vessel information easier to find and use before a shipment is committed.',
    type: 'Logistics intelligence',
    focus: 'Great Lakes freight',
    horizon: 'Build + expand',
    href: 'https://waterlineintel.com',
    action: 'Visit Waterline',
    vectors: ['Deeper freight data', 'Workflow intelligence', 'Adjacent physical markets'],
    stage: 'operating',
  },
  {
    key: 'expenseintel',
    short: 'EI',
    name: 'ExpenseIntel',
    status: 'Operating project',
    lead: 'Pre-commitment cost and decision intelligence for meaningful purchases, quotes, properties, projects and other decisions where the sticker price is not enough.',
    type: 'Decision intelligence',
    focus: 'Cost + evidence',
    horizon: 'Build + deepen data',
    href: 'https://expenseintel.com',
    action: 'Visit ExpenseIntel',
    vectors: ['Deeper evidence', 'Decision memory', 'New cost surfaces'],
    stage: 'operating',
  },
  {
    key: 'gagegrid',
    short: 'GG',
    name: 'Gage Grid',
    status: 'Research / under development',
    lead: 'A research-stage industrial infrastructure intelligence project exploring whether a site can actually support a proposed project across power, water, wastewater, gas and fiber before development capital is committed.',
    type: 'Infrastructure intelligence',
    focus: 'Site capacity + serviceability',
    horizon: 'Research → pilot',
    href: 'https://gage-grid.vercel.app',
    action: 'Preview Gage Grid',
    vectors: ['Source-backed utility data', 'Serviceability evidence', 'Pilot site coverage'],
    stage: 'research',
  },
  {
    key: 'ownership',
    short: 'OWN',
    name: 'Long-term ownership',
    status: 'Open mandate',
    lead: 'Queenan Capital is interested in understandable small businesses with useful products or services, repeat customers and a reason to own them for years rather than quarters.',
    type: 'Selective acquisition',
    focus: 'Operating businesses',
    horizon: 'Long-term ownership',
    href: 'mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry',
    action: 'Start a conversation',
    vectors: ['Find the right business', 'Learn the operation', 'Compound patiently'],
    stage: 'mandate',
  },
];

const paths: Record<string, string> = {
  waterline: 'M500 326 C420 276 340 201 220 212',
  expenseintel: 'M500 326 C590 235 690 167 783 204',
  gagegrid: 'M500 326 C430 392 350 468 270 510',
  ownership: 'M500 326 C586 403 660 486 744 492',
};

const sectionTargets: Record<string, string> = {
  waterline: 'waterline',
  expenseintel: 'expenseintel',
  ownership: 'owners',
};

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState<string | null>('waterline');
  const stageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (pathname !== '/') return;
    const masthead = document.querySelector('.masthead');
    if (!masthead) return;
    const existing = document.querySelector<HTMLElement>('[data-venture-orbit-mount]');
    const node = existing || document.createElement('div');
    node.dataset.ventureOrbitMount = '1';
    if (!existing) masthead.insertAdjacentElement('afterend', node);
    setMount(node);
    return () => {
      if (!existing) node.remove();
      setMount(null);
    };
  }, [pathname]);

  useEffect(() => {
    if (!mount || pathname !== '/' || !window.location.hash) return;
    const id = decodeURIComponent(window.location.hash.slice(1));
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'auto', block: 'start' });
    }, 120);
    return () => window.clearTimeout(timer);
  }, [mount, pathname]);

  const moveField = (event: React.PointerEvent<HTMLDivElement>) => {
    const stage = stageRef.current;
    if (!stage) return;
    const rect = stage.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    stage.style.setProperty('--field-x', `${(x * 14).toFixed(2)}px`);
    stage.style.setProperty('--field-y', `${(y * 10).toFixed(2)}px`);
    stage.style.setProperty('--glow-x', `${((x + 0.5) * 100).toFixed(1)}%`);
    stage.style.setProperty('--glow-y', `${((y + 0.5) * 100).toFixed(1)}%`);
  };

  const resetField = () => {
    const stage = stageRef.current;
    if (!stage) return;
    stage.style.setProperty('--field-x', '0px');
    stage.style.setProperty('--field-y', '0px');
    stage.style.setProperty('--glow-x', '50%');
    stage.style.setProperty('--glow-y', '50%');
  };

  const jumpToVenture = (key: string) => {
    const targetId = sectionTargets[key];
    if (!targetId) return;
    const target = document.getElementById(targetId);
    if (!target) return;
    window.history.replaceState(null, '', `#${targetId}`);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  if (pathname !== '/' || !mount) return null;
  const active = activeKey ? ventures.find((venture) => venture.key === activeKey) || null : null;

  return createPortal(
    <section id="operating-field" className={styles.section} aria-labelledby="venture-orbit-title">
      <div className={styles.head}>
        <div>
          <div className={styles.kicker}>Operating field / 04 objects in motion</div>
          <div className={styles.signal}><i /> Live work + research + open direction</div>
        </div>
        <div>
          <h2 id="venture-orbit-title">The company is not a diagram. <em>It moves.</em></h2>
          <p>
            Queenan Capital can build, study, or own. Follow a node to see what exists now, what is still being researched, and where an open mandate may lead. The fading paths beyond each node remain deliberately unresolved—not a promised roadmap.
          </p>
        </div>
      </div>

      <div className={styles.fieldShell}>
        <div
          ref={stageRef}
          className={styles.stage}
          onPointerMove={moveField}
          onPointerLeave={resetField}
          aria-label="Interactive Queenan Capital operating field"
        >
          <div className={styles.ambient} aria-hidden="true" />
          <div className={styles.coordinates} aria-hidden="true"><span>41.8781° N</span><span>2026 / FORWARD</span></div>

          <svg className={styles.flow} viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="qc-flow-live" x1="0" x2="1">
                <stop offset="0" stopColor="#efe7da" stopOpacity=".18" />
                <stop offset=".48" stopColor="#8a3947" stopOpacity=".9" />
                <stop offset="1" stopColor="#efe7da" stopOpacity=".28" />
              </linearGradient>
              <linearGradient id="qc-flow-open" x1="0" x2="1">
                <stop offset="0" stopColor="#b99298" stopOpacity=".45" />
                <stop offset="1" stopColor="#b99298" stopOpacity="0" />
              </linearGradient>
              <linearGradient id="qc-flow-research" x1="0" x2="1">
                <stop offset="0" stopColor="#d6c7b8" stopOpacity=".12" />
                <stop offset=".52" stopColor="#c99a66" stopOpacity=".9" />
                <stop offset="1" stopColor="#d6c7b8" stopOpacity=".18" />
              </linearGradient>
            </defs>

            <path className={styles.fieldLine} d="M-40 468 C185 334 302 475 480 322 S775 103 1040 221" />
            <path className={styles.fieldLine} d="M-80 174 C197 299 305 92 497 327 S781 572 1070 408" />
            <path className={styles.fieldLineSoft} d="M62 624 C262 509 371 552 504 329 S790 25 981 64" />

            {ventures.map((venture) => (
              <g key={venture.key} className={activeKey === venture.key ? styles.pathActive : styles.pathDormant}>
                <path
                  className={styles.livePath}
                  d={paths[venture.key]}
                  pathLength="100"
                  style={venture.stage === 'research' ? { stroke: 'url(#qc-flow-research)', strokeDasharray: '5 5' } : undefined}
                />
                <circle
                  className={styles.particle}
                  r={venture.stage === 'research' ? '3.2' : '3.8'}
                  style={venture.stage === 'research' ? { fill: '#d4a56f' } : undefined}
                >
                  <animateMotion
                    dur={venture.key === 'waterline' ? '5.8s' : venture.key === 'expenseintel' ? '6.6s' : venture.key === 'gagegrid' ? '7s' : '7.4s'}
                    repeatCount="indefinite"
                    path={paths[venture.key]}
                  />
                </circle>
              </g>
            ))}

            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C120 160 55 113 -45 77" />
            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C130 264 55 321 -50 360" />
            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C174 339 170 507 84 690" />

            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C883 115 935 71 1048 33" />
            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C915 218 973 259 1060 302" />
            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C858 310 886 388 969 434" />

            <path className={`${styles.openPath} ${activeKey === 'gagegrid' ? styles.openActive : ''}`} d="M270 510 C165 535 84 585 -46 617" />
            <path className={`${styles.openPath} ${activeKey === 'gagegrid' ? styles.openActive : ''}`} d="M270 510 C210 587 185 632 154 699" />
            <path className={`${styles.openPath} ${activeKey === 'gagegrid' ? styles.openActive : ''}`} d="M270 510 C145 461 67 431 -49 402" />

            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C820 530 904 572 1051 594" />
            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C733 566 725 619 708 689" />
            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C873 436 946 418 1054 410" />
          </svg>

          <button
            type="button"
            className={styles.core}
            onClick={() => setActiveKey(null)}
            aria-label="Clear selected venture and close detail panel"
            title="Clear selection"
            style={{ border: 0, background: 'transparent', padding: 0, cursor: 'pointer' }}
          >
            <i className={styles.coreRing} aria-hidden="true" />
            <div><strong>QC</strong><span>{active ? 'click to clear' : 'gravity / not destination'}</span></div>
          </button>

          {ventures.map((venture, index) => {
            const researchNode = venture.stage === 'research';
            const nodeShellStyle = researchNode
              ? { left: '20%', top: '69%', animation: 'none' }
              : undefined;
            const nodeStyle = researchNode
              ? {
                  borderStyle: 'dashed' as const,
                  borderColor: activeKey === venture.key ? '#e2bc8f' : 'rgba(226,188,143,.7)',
                  background: activeKey === venture.key
                    ? 'radial-gradient(circle at 38% 30%, #8f6442, #5c3d29 62%, #38261b)'
                    : 'rgba(31,27,22,.88)',
                  boxShadow: activeKey === venture.key ? '0 0 0 12px rgba(201,154,102,.07), 0 22px 60px rgba(0,0,0,.34), 0 0 46px rgba(201,154,102,.18)' : undefined,
                }
              : undefined;

            return (
              <div
                className={`${styles.nodeShell} ${!researchNode ? styles[`node${index + 1}`] : ''}`}
                key={venture.key}
                style={nodeShellStyle}
              >
                <button
                  type="button"
                  className={`${styles.node} ${activeKey === venture.key ? styles.nodeActive : ''}`}
                  style={nodeStyle}
                  onClick={() => setActiveKey(venture.key)}
                  onDoubleClick={() => jumpToVenture(venture.key)}
                  aria-pressed={activeKey === venture.key}
                  aria-label={`Explore ${venture.name}${researchNode ? ', a research-stage project' : ''}.`}
                  title={sectionTargets[venture.key] ? `Click to explore · double click to jump to ${venture.name}` : 'Click to explore this research-stage project'}
                >
                  <span className={styles.nodeIndex}>0{index + 1}</span>
                  <strong>{venture.short}</strong>
                  <span className={styles.nodeName}>{venture.name}</span>
                  <small style={researchNode ? { color: '#d1a474' } : undefined}>{venture.status}</small>
                  {researchNode && (
                    <span
                      aria-hidden="true"
                      style={{
                        position: 'absolute',
                        top: -12,
                        right: -15,
                        padding: '5px 7px',
                        border: '1px solid rgba(226,188,143,.65)',
                        background: '#181714',
                        color: '#d8ad7b',
                        fontSize: '.38rem',
                        fontWeight: 800,
                        letterSpacing: '.12em',
                        textTransform: 'uppercase',
                        transform: 'rotate(4deg)',
                      }}
                    >R&amp;D / coming soon</span>
                  )}
                </button>
              </div>
            );
          })}

          {active && active.key !== 'gagegrid' && (
            <div className={`${styles.vectorLabels} ${styles[`vectors_${active.key}`]}`} aria-hidden="true">
              {active.vectors.map((vector, index) => (
                <div className={`${styles.vector} ${styles[`vector${index + 1}`]}`} key={vector}>
                  <span>OPEN VECTOR 0{index + 1}</span>
                  <strong>{vector}</strong>
                  <i>?</i>
                </div>
              ))}
            </div>
          )}

          {active && (
            <article key={active.key} className={styles.inspector} aria-live="polite">
              <div className={styles.inspectorTop}>
                <div><span>{active.stage === 'research' ? 'Research object' : 'Selected object'}</span><strong>{active.short}</strong></div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <small style={active.stage === 'research' ? { borderColor: 'rgba(226,188,143,.45)', color: '#d8ad7b' } : undefined}>{active.status}</small>
                  <button
                    type="button"
                    onClick={() => setActiveKey(null)}
                    aria-label="Close venture details"
                    title="Close"
                    style={{
                      width: 28,
                      height: 28,
                      border: '1px solid rgba(255,255,255,.24)',
                      background: 'rgba(255,255,255,.025)',
                      color: '#d8d0c7',
                      cursor: 'pointer',
                      fontSize: 16,
                      lineHeight: 1,
                    }}
                  >×</button>
                </div>
              </div>
              <h3>{active.name}</h3>
              <p>{active.lead}</p>
              {active.stage === 'research' && (
                <p style={{ marginTop: 12, color: '#d1a474' }}>
                  Not presented as a mature operating business. Current work is focused on research, product testing, data standards, and pilot development.
                </p>
              )}
              <div className={styles.facts}>
                <div><span>Type</span><strong>{active.type}</strong></div>
                <div><span>Focus</span><strong>{active.focus}</strong></div>
                <div><span>Horizon</span><strong>{active.horizon}</strong></div>
              </div>
              <div className={styles.actions}>
                <a className={styles.primary} href={active.href} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined}>{active.action} →</a>
                {sectionTargets[active.key] && (
                  <button
                    type="button"
                    onClick={() => jumpToVenture(active.key)}
                    style={{
                      border: '1px solid rgba(255,255,255,.28)',
                      background: 'transparent',
                      color: '#f0ebe3',
                      padding: '9px 11px',
                      fontSize: '.49rem',
                      fontWeight: 800,
                      letterSpacing: '.08em',
                      textTransform: 'uppercase',
                      cursor: 'pointer',
                    }}
                  >View section below ↓</button>
                )}
              </div>
            </article>
          )}

          <div className={styles.legend}>
            <span><i className={styles.legendLive} /> Existing</span>
            <span><i style={{ background: '#c99a66', borderTop: '1px dashed #c99a66' }} /> Research-stage</span>
            <span><i className={styles.legendOpen} /> Open vector</span>
            <span className={styles.legendHint}>Move through the field · click to inspect</span>
          </div>
        </div>
      </div>

      <div className={styles.disclosure}>
        <span>STAGE LABELS MATTER</span>
        <p>Operating projects, research-stage work, and open directions are intentionally separated. Gage Grid is currently under development; unresolved paths describe capabilities Queenan Capital could deepen if the evidence and opportunity justify it.</p>
      </div>
    </section>,
    mount,
  );
}