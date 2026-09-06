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
  },
];

const paths: Record<string, string> = {
  waterline: 'M500 326 C420 276 340 201 220 212',
  expenseintel: 'M500 326 C590 235 690 167 783 204',
  ownership: 'M500 326 C586 403 660 486 744 492',
};

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState('waterline');
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

  if (pathname !== '/' || !mount) return null;
  const active = ventures.find((venture) => venture.key === activeKey) || ventures[0];

  return createPortal(
    <section className={styles.section} aria-labelledby="venture-orbit-title">
      <div className={styles.head}>
        <div>
          <div className={styles.kicker}>Operating field / 03 objects in motion</div>
          <div className={styles.signal}><i /> Live map of current work + open direction</div>
        </div>
        <div>
          <h2 id="venture-orbit-title">The company is not a diagram. <em>It moves.</em></h2>
          <p>
            Queenan Capital can build, study, or own. Follow a live node to see what exists now; the fading paths beyond it are deliberately unresolved. They show where a capability could compound next, not a promised roadmap.
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
            </defs>

            <path className={styles.fieldLine} d="M-40 468 C185 334 302 475 480 322 S775 103 1040 221" />
            <path className={styles.fieldLine} d="M-80 174 C197 299 305 92 497 327 S781 572 1070 408" />
            <path className={styles.fieldLineSoft} d="M62 624 C262 509 371 552 504 329 S790 25 981 64" />

            {ventures.map((venture) => (
              <g key={venture.key} className={activeKey === venture.key ? styles.pathActive : styles.pathDormant}>
                <path className={styles.livePath} d={paths[venture.key]} pathLength="100" />
                <circle className={styles.particle} r="3.8">
                  <animateMotion dur={venture.key === 'waterline' ? '5.8s' : venture.key === 'expenseintel' ? '6.6s' : '7.4s'} repeatCount="indefinite" path={paths[venture.key]} />
                </circle>
              </g>
            ))}

            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C120 160 55 113 -45 77" />
            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C130 264 55 321 -50 360" />
            <path className={`${styles.openPath} ${activeKey === 'waterline' ? styles.openActive : ''}`} d="M220 212 C174 339 170 507 84 690" />

            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C883 115 935 71 1048 33" />
            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C915 218 973 259 1060 302" />
            <path className={`${styles.openPath} ${activeKey === 'expenseintel' ? styles.openActive : ''}`} d="M783 204 C858 310 886 388 969 434" />

            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C820 530 904 572 1051 594" />
            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C733 566 725 619 708 689" />
            <path className={`${styles.openPath} ${activeKey === 'ownership' ? styles.openActive : ''}`} d="M744 492 C873 436 946 418 1054 410" />
          </svg>

          <div className={styles.core} aria-hidden="true">
            <i className={styles.coreRing} />
            <div><strong>QC</strong><span>gravity / not destination</span></div>
          </div>

          {ventures.map((venture, index) => (
            <div className={`${styles.nodeShell} ${styles[`node${index + 1}`]}`} key={venture.key}>
              <button
                type="button"
                className={`${styles.node} ${activeKey === venture.key ? styles.nodeActive : ''}`}
                onClick={() => setActiveKey(venture.key)}
                aria-pressed={activeKey === venture.key}
                aria-label={`Explore ${venture.name}`}
              >
                <span className={styles.nodeIndex}>0{index + 1}</span>
                <strong>{venture.short}</strong>
                <span className={styles.nodeName}>{venture.name}</span>
                <small>{venture.status}</small>
              </button>
            </div>
          ))}

          <div className={`${styles.vectorLabels} ${styles[`vectors_${activeKey}`]}`} aria-hidden="true">
            {active.vectors.map((vector, index) => (
              <div className={`${styles.vector} ${styles[`vector${index + 1}`]}`} key={vector}>
                <span>OPEN VECTOR 0{index + 1}</span>
                <strong>{vector}</strong>
                <i>?</i>
              </div>
            ))}
          </div>

          <article className={styles.inspector} aria-live="polite">
            <div className={styles.inspectorTop}>
              <div><span>Selected object</span><strong>{active.short}</strong></div>
              <small>{active.status}</small>
            </div>
            <h3>{active.name}</h3>
            <p>{active.lead}</p>
            <div className={styles.facts}>
              <div><span>Type</span><strong>{active.type}</strong></div>
              <div><span>Focus</span><strong>{active.focus}</strong></div>
              <div><span>Horizon</span><strong>{active.horizon}</strong></div>
            </div>
            <div className={styles.actions}>
              <a className={styles.primary} href={active.href} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined}>{active.action} →</a>
              <a href="#company">Operating logic</a>
            </div>
          </article>

          <div className={styles.legend}>
            <span><i className={styles.legendLive} /> Existing</span>
            <span><i className={styles.legendOpen} /> Open vector</span>
            <span className={styles.legendHint}>Move your cursor through the field · click any object</span>
          </div>
        </div>
      </div>

      <div className={styles.disclosure}>
        <span>OPEN DIRECTION ≠ ANNOUNCED PROJECT</span>
        <p>The unresolved paths are intentionally speculative. They describe capabilities Queenan Capital could deepen if the evidence and opportunity justify it.</p>
      </div>
    </section>,
    mount,
  );
}
