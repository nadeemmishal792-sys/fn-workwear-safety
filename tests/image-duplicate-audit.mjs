import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('index.html', 'utf8');
const cards = [...html.matchAll(/<a class="product-card reveal"[\\s\\S]*?<\\/a>/g)].map(match => match[0]);
const occurrences = new Map();
for (const [index, card] of cards.entries()) {
  const title = (card.match(/<h3[^>]*>([\\s\\S]*?)<\\/h3>/i)?.[1] || '').replace(/<[^>]+>/g, '').trim();
  const src = card.match(/<img\\b[^>]*?\\bsrc=["']([^"']+)["']/i)?.[1];
  if (!src) continue;
  const entries = occurrences.get(src) || [];
  entries.push({ product: title || 'Untitled product', card: index + 1 });
  occurrences.set(src, entries);
}
const duplicates = [...occurrences.entries()].filter(([, entries]) => entries.length > 1);
console.log('Product cards scanned:', cards.length);
console.log('Unique image URLs:', occurrences.size);
console.log('Repeated image URLs:', duplicates.length);
for (const [url, entries] of duplicates) {
  console.log(JSON.stringify({ url, usedBy: entries }));
}
// Duplicates are reported for human review, not automatically removed:
// the same reference garment can legitimately appear in more than one showroom.
assert.ok(cards.length >= 60, 'catalogue unexpectedly incomplete');
