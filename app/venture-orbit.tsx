'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import styles from './venture-orbit-v2.module.css';

type Venture = {
  key: 'waterline' | 'expenseintel' | 'gagegrid' | 'ownership';
  short: string;
  name: string;
  status: string;
  lead: string;
  type: string;
  focus: string;
  horizon: string;
  href: string;
  action: string;
  stage: 'operating' | 'pilot' | 'mandate';
  image?: string;
  micro?: [string, string, string];
  useNow: [string, string, string];
};

const ventures: Venture[] = [
  {
    key: 'waterline',
    short: 'WI',
    name: 'Waterline Intel',
    status: 'Operating project',
    lead: 'Great Lakes freight intelligence for planning movements, comparing route economics, finding capacity signals, and making better logistics decisions before freight is committed.',
    type: 'Logistics intelligence',
    focus: 'Great Lakes freight',
    horizon: 'Build + expand',
    href: 'https://waterlineintel.com',
    action: 'Open Waterline',
    stage: 'operating',
    image: '/orbit-waterline.svg',
    micro: ['Freight', 'Intelligence', 'Real impact'],
    useNow: ['Plan a Great Lakes move', 'Compare freight quotes', 'Stress-test disruptions'],
  },
  {
    key: 'expenseintel',
    short: 'EI',
    name: 'ExpenseIntel',
    status: 'Operating project',
    lead: 'Pre-commitment decision intelligence for purchases, quotes, properties, projects, and other decisions where the sticker price is not enough.',
    type: 'Decision intelligence',
    focus: 'Cost + evidence',
    horizon: 'Build + deepen data',
    href: 'https://expenseintel.com',
    action: 'Open ExpenseIntel',
    stage: 'operating',
    image: '/orbit-expense.svg',
    micro: ['Procurement', 'Discipline', 'Higher margins'],
    useNow: ['Build a Decision Passport', 'Compare three quotes', 'Find the highest-value negotiation lever'],
  },
  {
    key: 'gagegrid',
    short: 'GG',
    name: 'Gage Grid',
    status: 'Operating pilot',
    lead: 'Industrial infrastructure intelligence for screening whether a site can support a proposed project across power, water, wastewater, gas, and fiber before development capital is committed.',
    type: 'Infrastructure intelligence',
    focus: 'Site capacity + serviceability',
    horizon: 'Pilot + expand coverage',
    href: 'https://gage-grid.vercel.app',
    action: 'Open Gage Grid',
    stage: 'pilot',
    image: '/orbit-gage.svg',
    micro: ['Infrastructure', 'Visibility', 'Lasting value'],
    useNow: ['Screen infrastructure fit', 'Rank candidate sites', 'Sequence diligence spend'],
  },
  {
    key: 'ownership',
    short: 'OWN',
    name: 'Long-term ownership',
    status: 'Open mandate',
    lead: 'Queenan Capital is interested in understandable businesses with useful products or services, repeat customers, sound economics, and a reason to own them for years rather than quarters.',
    type: 'Selective acquisition',
    focus: 'Operating businesses',
    horizon: 'Long-term ownership',
    href: 'mailto:contact@queenancapital.com?subject=Business%20Owner%20Inquiry',
    action: 'Start a conversation',
    stage: 'mandate',
    useNow: ['Test transition readiness', 'Share an owner situation', 'Start a confidential conversation'],
  },
];

const companyVentures = ventures.filter((venture) => venture.key !== 'ownership');
const ownership = ventures.find((venture) => venture.key === 'ownership')!;

const paths: Record<string, string> = {
  waterline: 'M500 326 C420 268 334 191 229 188',
  expenseintel: 'M500 326 C596 245 675 184 790 186',
  gagegrid: 'M500 326 C420 401 344 503 243 521',
};

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState<Venture['key'] | null>(null);
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
    const x = (event.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
    const y = (event.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    stage.style.setProperty('--field-x', `${(x * 10).toFixed(2)}px`);
    stage.style.setProperty('--field-y', `${(y * 8).toFixed(2)}px`);
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
  const active = activeKey ? ventures.find((venture) => venture.key === activeKey) || null : null;

  return createPortal(
    <section id="operating-field" className={styles.section} aria-labelledby="venture-orbit-title">
      <div className={styles.head}>
        <div>
          <div className={styles.kicker}>Operating field / Queenan Capital</div>
          <div className={styles.signal}><i /> Three operating projects + one ownership mandate</div>
        </div>
        <div>
          <h2 id="venture-orbit-title">Built to move. <em>Built to compound.</em></h2>
          <p>
            Queenan Capital builds operating systems around decisions that matter, then follows the evidence into deeper products, durable businesses, and long-term ownership.
          </p>
        </div>
      </div>

      <div className={styles.fieldShell}>
        <div
          ref={stageRef}
          className={styles.stage}
          onPointerMove={moveField}
          onPointerLeave={resetField}
          aria-label="Interactive Queenan Capital operating company field"
        >
          <div className={styles.coordinates} aria-hidden="true"><span>Chicago / operating field</span><span>2026 / forward</span></div>

          <svg className={styles.flow} viewBox="0 0 1000 650" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <linearGradient id="qc-live-v2" x1="0" x2="1">
                <stop offset="0" stopColor="#f0e7da" stopOpacity=".14" />
                <stop offset=".52" stopColor="#c99a66" stopOpacity=".95" />
                <stop offset="1" stopColor="#f0e7da" stopOpacity=".24" />
              </linearGradient>
            </defs>
            <path className={styles.fieldLine} d="M-40 467 C175 335 310 472 486 322 S786 105 1040 216" />
            <path className={styles.fieldLine} d="M-70 171 C186 292 320 92 500 326 S792 572 1060 416" />
            <path className={styles.fieldSoft} d="M32 628 C255 505 370 555 502 329 S786 28 985 64" />
            <ellipse className={styles.fieldSoft} cx="500" cy="326" rx="356" ry="260" />
            {companyVentures.map((venture) => (
              <g key={venture.key} className={activeKey === venture.key ? styles.pathActive : styles.pathDormant}>
                <path className={styles.livePath} d={paths[venture.key]} pathLength="100" />
                <circle className={styles.particle} r="3.4">
                  <animateMotion dur={venture.key === 'waterline' ? '6s' : venture.key === 'expenseintel' ? '6.8s' : '7.5s'} repeatCount="indefinite" path={paths[venture.key]} />
                </circle>
              </g>
            ))}
            <path className={styles.ownershipPath} d="M500 326 C630 395 760 479 920 474" />
          </svg>

          <button type="button" className={styles.core} onClick={() => setActiveKey(null)} aria-label="Clear selected company">
            <div><strong>QC</strong><span>gravity / not destination</span></div>
          </button>

          {companyVentures.map((venture, index) => (
            <div key={venture.key} className={`${styles.cluster} ${styles[venture.key === 'waterline' ? 'waterline' : venture.key === 'expenseintel' ? 'expense' : 'gage']}`}>
              <img className={styles.photo} src={venture.image} alt="" aria-hidden="true" />
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
                <small className={styles.status}>{venture.status}</small>
              </button>
              {venture.micro && (
                <span className={styles.microLabel} aria-hidden="true">
                  {venture.micro.map((line) => <span key={line}>{line}<br /></span>)}
                </span>
              )}
            </div>
          ))}

          <button
            type="button"
            className={styles.ownershipSatellite}
            onClick={() => setActiveKey('ownership')}
            aria-pressed={activeKey === 'ownership'}
            aria-label="Explore long-term ownership mandate"
          >
            <strong>{ownership.short}</strong>
            <span>Long-term ownership</span>
            <small>{ownership.status}</small>
          </button>

          {active && (
            <article className={styles.inspector} aria-live="polite">
              <div className={styles.inspectorTop}>
                <span className={styles.eyebrow}>{active.stage === 'mandate' ? 'Ownership mandate' : active.stage === 'pilot' ? 'Operating pilot' : 'Operating company'}</span>
                <button type="button" onClick={() => setActiveKey(null)} aria-label="Close details">×</button>
              </div>
              <h3>{active.name}</h3>
              <p>{active.lead}</p>
              <div className={styles.facts}>
                <div><span>Type</span><strong>{active.type}</strong></div>
                <div><span>Focus</span><strong>{active.focus}</strong></div>
                <div><span>Horizon</span><strong>{active.horizon}</strong></div>
              </div>
              <div className={styles.facts} style={{ marginTop: 10 }}>
                {active.useNow.map((item, index) => (
                  <div key={item}><span>Use now 0{index + 1}</span><strong>{item}</strong></div>
                ))}
              </div>
              <div className={styles.actions}>
                <a className={styles.primary} href={active.href} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined}>{active.action} →</a>
              </div>
            </article>
          )}

          <div className={styles.legend} aria-hidden="true">
            <span><i className={styles.legendLive} /> Operating company</span>
            <span><i className={styles.legendCapital} /> Capital connection</span>
            <span><i className={styles.legendOpen} /> Ownership path</span>
          </div>
        </div>
      </div>

      <div className={styles.disclosure}>
        <span>OPERATING DISCIPLINE</span>
        <p>Waterline Intel, ExpenseIntel, and Gage Grid are presented as active operating projects at different levels of maturity. Long-term ownership remains an open mandate rather than a fourth software product.</p>
      </div>
    </section>,
    mount,
  );
}
