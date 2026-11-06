import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './letter.module.css';

export const metadata: Metadata = {
  title: 'Building for the Long Term — Our First Letter',
  description: 'A first letter from Queenan Capital on its strategy, operating initiatives, and long-term financial objectives.',
  alternates: { canonical: 'https://www.queenancapital.com/letters/building-for-the-long-term' },
  openGraph: {
    title: 'Building for the Long Term | Queenan Capital',
    description: 'An introduction to Queenan Capital and the principles behind its long-term strategy.',
    url: 'https://www.queenancapital.com/letters/building-for-the-long-term',
    siteName: 'Queenan Capital',
    type: 'article',
  },
};

export default function FirstLetter() {
  return (
    <main className={styles.page}>
      <div className={styles.wrap}>
        <nav className={styles.nav} aria-label="Page navigation">
          <Link href="/">← Queenan Capital</Link>
          <Link href="/companies">Current initiatives</Link>
          <Link href="/operating-notes">Operating notes</Link>
        </nav>

        <header className={styles.header}>
          <div className={styles.eyebrow}>QUEENAN CAPITAL LLC / FIRST CORPORATE LETTER</div>
          <h1>Building for the Long Term</h1>
          <p className={styles.subtitle}>A First Letter from Queenan Capital</p>
          <div className={styles.meta}><time dateTime="2026-11-06">November 6, 2026</time><span>Chicago, Illinois</span></div>
        </header>

        <article className={styles.article}>
          <p className={styles.opening}>Queenan Capital was formally established on October 8, 2026. As we approach our first month, I want to explain what we are building, why our different initiatives belong together, and what we intend to achieve over the years ahead.</p>
          <p>Our ambition is straightforward, even if the work required is not: <strong>to build, develop, and own profitable businesses that create lasting economic value.</strong></p>
          <p>We intend to develop Queenan Capital into a diversified holding company grounded in disciplined capital allocation, independent research, proprietary technology, and sound operating judgment. The goal is not simply to assemble a collection of projects, but to build an enterprise in which useful capabilities and successful operations can reinforce one another.</p>

          <h2>Our Strategy</h2>
          <p>We see three complementary paths to long-term growth.</p>
          <p><strong>Build and commercialize useful businesses.</strong> We look for identifiable market problems where better information, software, or execution can create measurable value for customers and sustainable revenue for our companies.</p>
          <p><strong>Develop shared intelligence and engineering capabilities.</strong> Research, software infrastructure, and operating knowledge should become reusable assets. Over time, we want those capabilities to improve existing products and support new ones.</p>
          <p><strong>Invest and acquire selectively.</strong> As our financial position and operating capacity develop, we intend to consider businesses with understandable economics, durable demand, and opportunities for long-term improvement.</p>
          <p>These activities are intended to reinforce one another: operating experience informs research, research improves technology, and commercially successful work creates capacity for further investment.</p>

          <h2>Our Current Work</h2>
          <p><strong>Waterline Intel</strong> is our initial commercial product, focused on freight intelligence and logistics decision support. It reflects a practical starting point: understand a fragmented information problem and build tools that help customers make better decisions.</p>
          <p><strong>COEUS</strong> is an internal research and engineering platform under development. Its purpose is to support analytical work and increasingly reliable, supervised technical execution across our efforts.</p>
          <p><strong>Queenan Alpha</strong> is experimental quantitative research. We are evaluating market hypotheses, predictive models, costs, and risk controls. We do not regard experimentation as proof of a profitable trading advantage.</p>
          <p><strong>Project Endeavour</strong> is our early exploration of focused data and API products, including opportunities related to financial and commercial information. It is a research initiative, not an established fintech company.</p>
          <p>These efforts are at different stages of maturity. Technical progress matters, but it does not establish market demand or profitability. We intend to judge each by the evidence it produces and the value it may ultimately deliver.</p>

          <h2>The Financial Objective</h2>
          <p>Queenan Capital is being built with the long-term objective of becoming a profitable, financially self-sustaining enterprise.</p>
          <p>Our aim is to earn revenue through products and services customers value, maintain discipline over operating costs, and reinvest capital where expected returns justify the risks.</p>
          <p>We will distinguish ambition from achievement. A working product is not proof of customer demand. A model is not proof of an economic advantage. Expansion is not automatically progress.</p>
          <p><strong>The standard is sustainable economic value.</strong></p>

          <h2>Our Commitment</h2>
          <p>We are at the beginning, working with limited resources and a long horizon. That makes focus, financial discipline, and honest evaluation especially important.</p>
          <p>We believe meaningful advantages are developed through accumulated knowledge, consistent execution, and a willingness to improve what works while setting aside what does not.</p>
          <p>Queenan Capital will be measured not by the number of initiatives it announces, but by the businesses it builds, the value they provide, the earnings they generate, and the durability of what they become.</p>
          <p>We intend to build carefully, think independently, and pursue opportunities with conviction supported by evidence.</p>
          <p className={styles.closing}>The work is just beginning.</p>

          <div className={styles.signature}>
            <strong>Jack Queenan</strong>
            <span>Founder</span>
            <span>Queenan Capital LLC</span>
          </div>
        </article>

        <footer className={styles.footer}>
          <Link href="/">← Return to Queenan Capital</Link>
          <span>© 2026 Queenan Capital LLC</span>
        </footer>
      </div>
    </main>
  );
}
