import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

const layout = await readFile(new URL('../app/layout.tsx', import.meta.url), 'utf8');
const page = await readFile(new URL('../app/page.tsx', import.meta.url), 'utf8');

test('production metadata stays on the Queenan Capital domain', () => {
  assert.match(layout, /https:\/\/queenancapital\.com/);
  assert.match(layout, /opengraph-image/);
});

test('operating company links remain present', () => {
  assert.match(page, /https:\/\/waterlineintel\.com/);
  assert.match(page, /https:\/\/expenseintel\.com/);
});

test('emoji-style external-link arrows do not return', () => {
  assert.equal(page.includes('↗'), false);
});
