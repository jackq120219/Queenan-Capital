import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const load = async (name) => readFile(new URL('../' + name, import.meta.url), 'utf8');
const [layout,home,companies,letter,notes,sitemap] = await Promise.all([
 'app/layout.tsx','app/page.tsx','app/companies/page.tsx',
 'app/letters/building-for-the-long-term/page.tsx','app/operating-notes/page.tsx','app/sitemap.ts'
].map(load));
test('canonical metadata points to Queenan Capital',()=>{
 assert.match(layout,/www\.queenancapital\.com/);
 assert.match(layout,/opengraph-image/);
});
test('current active ventures have accurate distinctions',()=>{
 for(const name of ['Waterline Intel','COEUS','Queenan Alpha','Financial Intelligence']){
  assert.ok(home.includes(name));
  assert.ok(companies.includes(name));
 }
 for(const old of ['ExpenseIntel','Gage Grid']){
  assert.ok(!home.includes(old));
  assert.ok(!companies.includes(old));
  assert.ok(!layout.includes(old));
  assert.ok(!notes.includes(old));
 }
});
test('first letter remains reachable from homepage',()=>{
 assert.match(home,/\/letters\/building-for-the-long-term/);
 assert.match(letter,/Building for the Long Term/);
 assert.match(letter,/October 8, 2026/);
 assert.match(letter,/profitab/);
 assert.match(sitemap,/letters\/building-for-the-long-term/);
});
test('external link to Waterline remains',()=>assert.match(home,/https:\/\/waterlineintel\.com/));
