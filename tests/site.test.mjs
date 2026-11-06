import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const read = (name) => readFile(new URL('../' + name, import.meta.url), 'utf8');
const [layout, home, portfolio, orbit, companies, letter, sitemap] = await Promise.all([
  'app/layout.tsx',
  'app/page.tsx',
  'app/current-portfolio-server.tsx',
  'app/venture-orbit.tsx',
  'app/companies/page.tsx',
  'app/letters/building-for-the-long-term/page.tsx',
  'app/sitemap.ts',
].map(read));

test('production metadata stays on the canonical Queenan Capital domain', () => {
  assert.match(layout, /https:\/\/www\.queenancapital\.com/);
  assert.match(layout, /opengraph-image/);
});

test('original site identity and prominent Waterline section remain', () => {
  assert.match(home, /className="masthead"/);
  assert.match(home, /className="waterline-section"/);
  assert.match(home, /https:\/\/waterlineintel\.com/);
  assert.match(layout, /<VentureOrbit \/>/);
});

test('outdated oversized content and duplicate dashboard are removed', () => {
  assert.doesNotMatch(home, /id="expenseintel"/);
  assert.doesNotMatch(layout, /PortfolioCommandCenter|PortfolioQualityLayer/);
  assert.doesNotMatch(home, /FIRST LETTER — FORTHCOMING/);
});

test('new initiatives have honest maturity descriptions', () => {
  for (const name of ['Waterline Intel','COEUS','Queenan Alpha','Project Endeavour']) {
    assert.ok(companies.includes(name), name);
    assert.ok(portfolio.includes(name), name);
  }
  assert.match(portfolio, /Experimental/);
  assert.match(portfolio, /Early exploration/);
  assert.match(orbit, /COEUS/);
  assert.match(orbit, /Queenan Alpha/);
});

test('first letter is dated, linked, and avoids fintech launch claims', () => {
  assert.match(home, /\/letters\/building-for-the-long-term/);
  assert.match(sitemap, /\/letters\/building-for-the-long-term/);
  assert.match(letter, /Building for the Long Term/);
  assert.match(letter, /October 8, 2026/);
  assert.match(letter, /2026-11-06/);
  assert.match(letter, /not an established fintech company/);
});

test('emoji-style external-link arrows do not return to the homepage', () => {
  assert.equal(home.includes('↗'), false);
});
