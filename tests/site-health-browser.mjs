import assert from 'node:assert/strict';
import { chromium } from 'playwright';

const browser = await chromium.launch({ headless: true });
const errors = [];
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 960 }, deviceScaleFactor: 1 });
  page.on('pageerror', error => errors.push(error.message));
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' });
  await page.waitForTimeout(1200);

  // Every in-page navigation target must exist.
  const anchorAudit = await page.evaluate(() => {
    const ids = new Set([...document.querySelectorAll('[id]')].map(el => el.id));
    return [...new Set([...document.querySelectorAll('a[href^="#"]')]
      .map(a => decodeURIComponent(a.getAttribute('href').slice(1)))
      .filter(Boolean))].filter(id => !ids.has(id));
  });
  assert.deepEqual(anchorAudit, [], 'broken in-page navigation links found');

  // Core sections and all six production stages must be present.
  assert.equal(await page.locator('.fn-cinema-steps [data-stage]').count(), 6, 'manufacturing journey must contain six stages');
  assert.ok(await page.locator('#quoteForm').count(), 'international enquiry form missing');
  assert.ok(await page.locator('#heroNext').count(), 'hero carousel next control missing');

  // The six-stage sequence should advance automatically after its readable display interval.
  const firstStage = await page.locator('#fnCinemaTitle').innerText();
  await page.waitForTimeout(9300);
  const secondStage = await page.locator('#fnCinemaTitle').innerText();
  assert.notEqual(secondStage, firstStage, 'manufacturing journey did not advance automatically');

  // Check phone, tablet and desktop layouts for horizontal overflow.
  for (const width of [390, 768, 1440]) {
    await page.setViewportSize({ width, height: width === 390 ? 844 : 960 });
    await page.waitForTimeout(250);
    const overflow = await page.evaluate(() => ({
      viewport: document.documentElement.clientWidth,
      page: document.documentElement.scrollWidth,
      body: document.body.scrollWidth
    }));
    assert.ok(overflow.page <= overflow.viewport + 1 && overflow.body <= overflow.viewport + 1,
      'horizontal overflow at ' + width + 'px: ' + JSON.stringify(overflow));
    await page.screenshot({ path: 'artifacts/site-' + width + 'px.png', fullPage: false });
  }

  // Mobile menu must open, expose navigation and close after a selection.
  await page.setViewportSize({ width: 390, height: 844 });
  const menuButton = page.locator('#menuBtn');
  await menuButton.click();
  assert.equal(await menuButton.getAttribute('aria-expanded'), 'true', 'mobile menu did not report expanded state');
  assert.ok(await page.locator('#mobileMenu.open a').count() > 0, 'mobile menu links are not visible');
  await page.locator('#mobileMenu a[href="#contact"]').first().click();
  assert.equal(await menuButton.getAttribute('aria-expanded'), 'false', 'mobile menu did not close after navigation');

  // Required enquiry fields must be enforced by native browser validation.
  const requiredFields = await page.locator('#quoteForm [required]').count();
  assert.ok(requiredFields >= 4, 'expected required enquiry fields are missing');

  assert.deepEqual(errors, [], 'uncaught browser JavaScript errors detected');
  console.log('FN site health checks passed: internal links, six-stage autoplay, phone/tablet/desktop overflow, mobile navigation and enquiry form.');
} finally {
  await browser.close();
}
