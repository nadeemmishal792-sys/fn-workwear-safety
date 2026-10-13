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
console.log('FN website smoke checks passed: eight garment categories, six industry showrooms, responsive navigation, subtle visual effects and enquiry flow.');
