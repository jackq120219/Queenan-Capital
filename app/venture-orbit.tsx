'use client';

import { useEffect, useState } from 'react';
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
  },
];

export default function VentureOrbit() {
  const pathname = usePathname();
  const [mount, setMount] = useState<HTMLElement | null>(null);
  const [activeKey, setActiveKey] = useState('waterline');

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

  if (pathname !== '/' || !mount) return null;
  const active = ventures.find((venture) => venture.key === activeKey) || ventures[0];

  return createPortal(
    <section className={styles.section} aria-labelledby="venture-orbit-title">
      <div className={styles.head}>
        <div className={styles.kicker}>Operating constellation / click a node</div>
        <div>
          <h2 id="venture-orbit-title">One company. Different operating paths.</h2>
          <p>Queenan Capital can build internally, study a market deeply, or own an operating business. The nodes below are not a portfolio-performance graphic — they are a navigable map of what the company is actually working on and looking for.</p>
        </div>
      </div>

      <div className={styles.grid}>
        <div className={styles.orbitCard}>
          <div className={styles.stage} aria-label="Interactive Queenan Capital venture orbit">
            <div className={styles.core} aria-hidden="true"><div><strong>QC</strong><span>Queenan Capital</span></div></div>
            {ventures.map((venture) => (
              <div className={styles.orbWrap} key={venture.key}>
                <button
                  type="button"
                  className={`${styles.orb} ${activeKey === venture.key ? styles.active : ''}`}
                  onClick={() => setActiveKey(venture.key)}
                  aria-pressed={activeKey === venture.key}
                  aria-label={`Show ${venture.name}`}
                >
                  <span>{venture.short}</span>
                  <small>{venture.status === 'Open mandate' ? 'MANDATE' : 'VENTURE'}</small>
                </button>
              </div>
            ))}
          </div>
          <span className={styles.hint}>Hover to pause · click a node</span>
        </div>

        <article className={styles.detail} aria-live="polite">
          <div>
            <div className={styles.detailTop}>
              <span className={styles.kicker}>Selected / {active.short}</span>
              <span className={styles.status}>{active.status}</span>
            </div>
            <h3>{active.name}</h3>
            <p className={styles.detailLead}>{active.lead}</p>
            <div className={styles.facts}>
              <div className={styles.fact}><span>Type</span><strong>{active.type}</strong></div>
              <div className={styles.fact}><span>Focus</span><strong>{active.focus}</strong></div>
              <div className={styles.fact}><span>Horizon</span><strong>{active.horizon}</strong></div>
            </div>
          </div>
          <div className={styles.actions}>
            <a className={styles.primary} href={active.href} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined}>{active.action} →</a>
            <a href="#company">How Queenan Capital works</a>
          </div>
        </article>
      </div>
    </section>,
    mount,
  );
}
