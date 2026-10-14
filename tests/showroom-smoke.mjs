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
assert.ok(html.includes('name="robots" content="index,follow,max-image-preview:large"'), 'search indexing metadata missing');
assert.ok(html.includes('name="twitter:card" content="summary_large_image"'), 'social card metadata missing');
assert.ok(html.includes('property="og:site_name" content="FN Workwear & Safety"'), 'Open Graph site identity missing');
assert.ok(html.includes('"@type": "Organization"'), 'organization structured data missing');
assert.ok(html.includes('"addressCountry": "PK"'), 'structured business location missing');
assert.ok(html.includes('prefers-reduced-motion:reduce'), 'reduced-motion accessibility support missing');
assert.ok(html.includes("document.querySelectorAll('.product-card img[src]')"), 'responsive product-image enhancement missing');
assert.ok(html.includes('searchParams.set(\'width\',String(width))'), 'Shopify width variants missing');
assert.ok(html.includes("bigCommerceMatch[1]+width+'x'+width+bigCommerceMatch[2]"), 'BigCommerce stencil width variants missing');
assert.ok(html.includes("img.setAttribute('srcset',candidates.join(', '))"), 'responsive srcset assignment missing');
assert.ok(html.includes("img.setAttribute('sizes','(max-width: 720px) 50vw, (max-width: 1050px) 33vw, 25vw')"), 'responsive image sizes missing');
assert.ok(html.includes('cdn\\.shopify\\.com') && html.includes('bigCommerceMatch=raw.match'), 'responsive image enhancement must use explicit supported CDN transformations only');
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
  const image = card.match(/<img\b[^>]*>/i)?.[0] || '';
  assert.ok(/loading="lazy"/i.test(image), 'product card ' + (index + 1) + ' should lazy-load below-the-fold imagery');
}
for (const [index, card] of productCards.entries()) {
  assert.ok(/<img\b[^>]*\balt="[^"]+"/i.test(card), 'product card ' + (index + 1) + ' needs descriptive image alt text');
}
assert.ok(html.includes('Product images are visual references, not a claim that the pictured item is an FN-made product.'), 'reference-image disclosure missing');
console.log('FN website smoke checks passed: catalogue, navigable reference gallery, keyboard controls, image alt text, responsive sections and enquiry flow.');
