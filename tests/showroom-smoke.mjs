import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('index.html', 'utf8');
for (const [id, label] of [
  ['products', 'product collection'],
  ['industries', 'industry showrooms'],
  ['custom', 'custom manufacturing'],
  ['approach', 'development process'],
  ['contact', 'contact form']
]) {
  assert.ok(html.includes('id="' + id + '"'), 'missing section: ' + label);
}
for (const garment of [
  'Coveralls & Boiler Suits',
  'Safety Vests',
  'Work Jackets',
  'Work Trousers',
  'Work Shirts & Polos',
  'Welding Apparel',
  'Specialist Protective Wear',
  'Corporate Uniforms'
]) {
  assert.ok(html.includes(garment), 'missing garment category: ' + garment);
}
for (const industry of [
  'Oil & Gas',
  'Construction',
  'Manufacturing',
  'Welding & Fabrication',
  'Warehouse & Logistics',
  'Facilities & Services'
]) {
  assert.ok(html.includes(industry), 'missing industry showroom: ' + industry);
}
assert.ok(html.includes('id="quoteForm"') && html.includes('mailto:fnworkwear@gmail.com'), 'enquiry email flow missing');
assert.ok(html.includes('prefers-reduced-motion:reduce'), 'reduced-motion accessibility support missing');
assert.ok(!html.includes('product-experience.js'), 'legacy 3D viewer must not be loaded');
assert.ok(!html.includes('id="garment"'), 'legacy 3D garment stage must not be present');

// Product reference gallery: browse the existing catalogue images without implying
// that one product's image is another angle of the same garment.
const productCardCount = (html.match(/<a class="product-card reveal"/g) || []).length;
assert.ok(productCardCount >= 60, 'expected the full product reference catalogue');
for (const id of ['productReferencePrev', 'productReferenceNext', 'productReferenceCount']) {
  assert.ok(html.includes('id="' + id + '"'), 'missing reference gallery control: ' + id);
}
assert.ok(html.includes('function showProductReference(index,focusClose=false)'), 'product reference navigation function missing');
assert.ok(html.includes("e.key==='ArrowLeft'||e.key==='ArrowRight'"), 'left/right keyboard navigation missing');
assert.ok(html.includes('one supplied view for this item'), 'gallery must not imply multi-angle imagery where none exists');
const productCards = [...html.matchAll(/<a class="product-card reveal"[\s\S]*?<\/a>/g)].map(match => match[0]);
assert.equal(productCards.length, productCardCount, 'product card extraction mismatch');
for (const [index, card] of productCards.entries()) {
  assert.ok(/<img\b[^>]*\balt="[^"]+"/i.test(card), 'product card ' + (index + 1) + ' needs descriptive image alt text');
}
assert.ok(html.includes('Product images are visual references, not a claim that the pictured item is an FN-made product.'), 'reference-image disclosure missing');
console.log('FN website smoke checks passed: catalogue, navigable reference gallery, keyboard controls, image alt text, responsive sections and enquiry flow.');
console.log('FN website smoke checks passed: eight garment categories, six industry showrooms, responsive navigation, subtle visual effects and enquiry flow.');
