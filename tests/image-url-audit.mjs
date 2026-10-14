import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync('index.html', 'utf8');
const urls = [...html.matchAll(/<img\b[^>]*?\bsrc=["']([^"']+)["'][^>]*>/gi)]
  .map(match => match[1])
  .filter(url => /^https?:\/\//i.test(url));
const uniqueUrls = [...new Set(urls)];
assert.ok(uniqueUrls.length > 0, 'no external product image URLs found');

async function check(url) {
  try {
    let response = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: AbortSignal.timeout(15000),
      headers: { 'user-agent': 'FN-Workwear-Image-Audit/1.0' }
    });
    if ([403, 405, 429].includes(response.status)) {
      response = await fetch(url, {
        method: 'GET',
        redirect: 'follow',
        signal: AbortSignal.timeout(15000),
        headers: { 'user-agent': 'FN-Workwear-Image-Audit/1.0', range: 'bytes=0-1023' }
      });
    }
    const type = response.headers.get('content-type') || '';
    if ([403, 429].includes(response.status)) return { url, status: response.status, result: 'host-restricted' };
    if (response.status >= 500 || response.status === 404 || response.status === 410) {
      return { url, status: response.status, result: 'broken' };
    }
    if (!response.ok) return { url, status: response.status, result: 'inconclusive' };
    if (type && !type.toLowerCase().startsWith('image/')) {
      return { url, status: response.status, type, result: 'not-image' };
    }
    return { url, status: response.status, type, result: 'reachable' };
  } catch (error) {
    return { url, result: 'network-error', detail: error.message };
  }
}

const results = [];
let cursor = 0;
async function worker() {
  while (cursor < uniqueUrls.length) {
    const current = uniqueUrls[cursor++];
    results.push(await check(current));
  }
}
await Promise.all(Array.from({ length: 6 }, worker));
for (const item of results) console.log(JSON.stringify(item));
const counts = Object.groupBy(results, item => item.result);
console.log('Image URL audit:', Object.fromEntries(Object.entries(counts).map(([key, value]) => [key, value.length])));
const definiteFailures = results.filter(item => ['broken', 'not-image'].includes(item.result));
assert.equal(definiteFailures.length, 0, 'one or more product image URLs are definitely broken or return non-image content');
