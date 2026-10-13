import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const js = readFileSync('product-experience.js', 'utf8');
const html = readFileSync('index.html', 'utf8');

for (const model of ['coverall', 'vest', 'jacket', 'trousers', 'shirt', 'welding']) {
  assert.ok(js.includes('data-garment="' + model + '"'), 'missing viewer selector: ' + model);
  assert.ok(js.includes("type==='" + model + "'"), 'missing model construction branch: ' + model);
}
for (const view of ['front', 'back', 'side', 'reset']) {
  assert.ok(js.includes('data-view="' + view + '"'), 'missing camera view: ' + view);
}
assert.ok(js.includes("function sketch(kind,view='front')"), 'missing three-elevation sketch generator');
assert.ok(js.includes("sketch(sketchKind,'front')") && js.includes("sketch(sketchKind,'back')") && js.includes("sketch(sketchKind,'side')"), 'product cards must show all three elevations');
assert.ok(js.includes('renderer.domElement.toDataURL'), 'product cards must use actual viewer renders when WebGL is available');
assert.ok(js.includes('function folds('), 'missing fabric fold detailing');
assert.ok(js.includes('function addHumanBase(type)'), 'missing human wearer mannequin');
assert.ok(js.includes('sphere(.145,0,2.39,0,skin'), 'missing mannequin head');
assert.ok(js.includes('capsule(.082,.48,-.51,1.66,0,skin'), 'missing mannequin arms');
assert.ok(js.includes('sphere(.11,x,.075,.09,boot'), 'missing mannequin work boots');
assert.ok(js.includes('bumpMap,bumpScale'), 'missing fabric surface texture');
assert.ok(js.includes('data-spin="toggle"'), 'missing automatic rotation control');
assert.ok(js.includes('DEDICATED 3D PRODUCT SHOWROOM'), 'product card must open the selected product in the showroom');
assert.ok(html.includes('id="quoteForm"') && html.includes('mailto:fnworkwear@gmail.com'), 'enquiry email flow missing');
assert.ok(html.includes('product-experience.js'), 'showroom script not linked');
console.log('FN showroom smoke checks passed: six garment families, 4 camera states, 3-view sketches, 3D card renders and enquiry flow.');
