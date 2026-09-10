import type { Metadata } from 'next';
import Link from 'next/link';
import CurrentPortfolioServer from '../current-portfolio-server';
import styles from './portfolio.module.css';

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'The current Queenan Capital portfolio: ExpenseIntel, Waterline Intel, and Gage Grid, with each company focused on a distinct operating decision.',
  alternates: { canonical: 'https://www.queenancapital.com/portfolio' },
};

export default function PortfolioPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">QUEENAN CAPITAL</Link>
        <span>PORTFOLIO / 2026</span>
      </header>
      <section className={styles.intro}>
        <div>OPERATING COMPANIES</div>
        <h1>Build carefully.<br />Keep the thesis clear.</h1>
        <p>The portfolio is intentionally small. Each company should answer a distinct question, keep evidence separate from assumptions, and become more useful before it becomes more complicated.</p>
      </section>
      <CurrentPortfolioServer />
      <section className={styles.discipline} aria-labelledby="discipline-title">
        <div className={styles.disciplineHead}><span>PORTFOLIO DISCIPLINE</span><h2 id="discipline-title">What earns continued investment.</h2></div>
        <div className={styles.disciplineGrid}>
          <article><b>01</b><h3>Useful decisions</h3><p>The product should materially improve a real decision, not simply display information.</p></article>
          <article><b>02</b><h3>Evidence discipline</h3><p>Public evidence, user facts, model output, and unresolved questions should remain distinguishable.</p></article>
          <article><b>03</b><h3>Focused expansion</h3><p>New capabilities should deepen the company&apos;s thesis rather than turn it into a collection of unrelated tools.</p></article>
          <article><b>04</b><h3>Long horizon</h3><p>Queenan Capital is built to study, operate, and improve businesses over time rather than optimize for a launch moment.</p></article>
        </div>
      </section>
      <footer className={styles.footer}><span>Queenan Capital · Chicago, Illinois</span><Link href="/">Return to company</Link></footer>
    </main>
  );
}
