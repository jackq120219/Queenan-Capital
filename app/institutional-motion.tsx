'use client';

import { useEffect } from 'react';

const REVEAL_SELECTOR = [
  '.company-intro',
  '.discipline',
  '.vision-label',
  '.vision-lead',
  '.vision-body p',
  '.vision-close',
  '.mission-grid > *',
  '.mission-principles div',
  '.waterline-top',
  '.waterline-word',
  '.waterline-description > *',
  '.waterline-link',
  '.waterline-visual',
  '#expenseintel > *',
  '#expenseintel .expense-public-data > *',
  '.owners-title > *',
  '.owners-body > *',
  '.criteria div',
  '.notes-label',
  '.notes-copy > *',
  '.about-left > *',
  '.about-right > *',
  '.about-data > div',
  '.closing-section > *',
].join(',');

export default function InstitutionalMotion({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector<HTMLElement>('.header');
    const hero = document.querySelector<HTMLElement>('.masthead');
    const lineField = document.querySelector<HTMLElement>('.capital-lines');

    const revealItems = Array.from(document.querySelectorAll<HTMLElement>(REVEAL_SELECTOR));
    revealItems.forEach((item, index) => {
      item.classList.add('qc-reveal');
      item.style.setProperty('--qc-delay', `${Math.min(index % 4, 3) * 55}ms`);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).classList.add('qc-visible');
          revealObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -7% 0px' },
    );
    revealItems.forEach((item) => revealObserver.observe(item));

    const navLinks = Array.from(document.querySelectorAll<HTMLAnchorElement>('.desktop-nav a[href^="#"]'));
    const sections = navLinks
      .map((link) => document.querySelector<HTMLElement>(link.getAttribute('href') || ''))
      .filter((section): section is HTMLElement => Boolean(section));

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const id = (visible.target as HTMLElement).id;
        navLinks.forEach((link) => {
          const active = link.getAttribute('href') === `#${id}`;
          link.classList.toggle('qc-nav-active', active);
          if (active) link.setAttribute('aria-current', 'true');
          else link.removeAttribute('aria-current');
        });
      },
      { threshold: [0.18, 0.35, 0.55], rootMargin: '-18% 0px -58% 0px' },
    );
    sections.forEach((section) => sectionObserver.observe(section));

    let ticking = false;
    const updateScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const progress = Math.min(1, Math.max(0, window.scrollY / max));
      root.style.setProperty('--qc-scroll', `${progress * 100}%`);
      header?.classList.toggle('qc-header-scrolled', window.scrollY > 24);
      ticking = false;
    };
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      window.requestAnimationFrame(updateScroll);
    };
    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onPointerMove = (event: PointerEvent) => {
      if (reduceMotion || !hero || !lineField) return;
      const rect = hero.getBoundingClientRect();
      if (event.clientY < rect.top || event.clientY > rect.bottom) return;
      const x = (event.clientX / Math.max(1, window.innerWidth) - 0.5) * 2;
      const y = ((event.clientY - rect.top) / Math.max(1, rect.height) - 0.5) * 2;
      lineField.style.setProperty('--qc-parallax-x', `${x * 7}px`);
      lineField.style.setProperty('--qc-parallax-y', `${y * 5}px`);
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      revealObserver.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('pointermove', onPointerMove);
    };
  }, []);

  return (
    <>
      <div className="qc-page-progress" aria-hidden="true"><i /></div>
      <div className="qc-corner-seal" aria-hidden="true"><span>QC</span><small>EST. 2026</small></div>
      {children}
    </>
  );
}
