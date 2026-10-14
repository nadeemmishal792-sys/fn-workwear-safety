import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const errors = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 }, deviceScaleFactor: 1 });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:4173', { waitUntil: 'domcontentloaded' });
  const cards = page.locator('.product-card');
  assert.ok(await cards.count() >= 60, 'catalogue cards missing');
  await cards.first().click();
  const detail = page.locator('#productDetail');
  await detail.waitFor({ state: 'visible' });
  await page.locator('#productReferenceNext').click();
  assert.match(await page.locator('#productReferenceCount').innerText(), /Reference 2 of/i);
  await page.screenshot({ path: 'artifacts/product-viewer-desktop.png' });
  await page.locator('#closeProductDetail').click();

  await page.setViewportSize({ width: 390, height: 844 });
  await cards.first().click();
  await detail.waitFor({ state: 'visible' });
  const image = page.locator('#productDetailImage');
  const imageBox = await image.boundingBox();
  assert.ok(imageBox, 'product detail image is not laid out on mobile');
  assert.ok(imageBox.x >= 0 && imageBox.x + imageBox.width <= 390, 'product detail image overflows mobile viewport');
  await page.screenshot({ path: 'artifacts/product-viewer-mobile.png' });
  await page.locator('#closeProductDetail').click();
  assert.equal(await detail.evaluate(el => el.classList.contains('open')), false, 'product viewer did not close');
  assert.deepEqual(errors, [], 'browser JavaScript errors detected');
  console.log('Responsive product viewer browser checks passed at 1440px desktop and 390px mobile.');
} finally {
  await browser.close();
}
