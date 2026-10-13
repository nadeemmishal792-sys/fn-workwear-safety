(() => {
const css=".fn-product-studio{background:#f7f6f0;padding:100px 0;color:#171b1c}.fn-studio-head{display:flex;justify-content:space-between;align-items:end;gap:30px;margin-bottom:38px}.fn-studio-head p{max-width:390px;color:#69716e;font-size:12px;line-height:1.8}.fn-product-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.fn-product-tile{background:#fff;border:1px solid #e1e2db;min-width:0}.fn-product-photo{height:250px;overflow:hidden;background:#d7d9d1;position:relative}.fn-product-photo img{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s}.fn-product-tile:hover .fn-product-photo img{transform:scale(1.045)}.fn-product-photo span{position:absolute;left:14px;bottom:14px;background:#c8df36;padding:8px 10px;font-size:8px;letter-spacing:.13em;font-weight:800}.fn-product-meta{padding:18px 18px 20px}.fn-product-meta small{font-size:8px;letter-spacing:.16em;color:#84902b;font-weight:800}.fn-product-meta h3{font:800 20px Manrope,sans-serif;letter-spacing:-.04em;margin:8px 0}.fn-product-meta p{font-size:11px;line-height:1.7;color:#69716e;min-height:38px;margin:0 0 13px}.fn-product-meta ul{padding-left:16px;margin:0;color:#535d57;font-size:10px;line-height:1.9}.fn-sketch-label{display:flex;align-items:center;justify-content:space-between;margin-top:18px;padding-top:12px;border-top:1px solid #e2e4dc;font-size:8px;letter-spacing:.13em;color:#778078}.fn-sketch{background:#f2f2eb;margin-top:14px;padding:10px;height:132px;display:grid;place-items:center}.fn-sketch svg{height:100%;width:100%;max-width:180px}.fn-studio-note{margin-top:22px;color:#727b74;font-size:10px;line-height:1.7}.fn-3d-shell{position:relative;width:100%;height:470px;touch-action:none;cursor:grab}.fn-3d-shell:active{cursor:grabbing}.fn-3d-shell canvas{width:100%;height:100%;display:block}.fn-3d-controls{position:absolute;right:18px;bottom:18px;display:flex;gap:7px;flex-wrap:wrap;justify-content:flex-end}.fn-3d-controls button{border:1px solid #778078;background:#202927;color:#f4f4eb;padding:9px 11px;font-size:8px;letter-spacing:.1em;text-transform:uppercase;cursor:pointer}.fn-3d-controls button.active{background:#c8df36;color:#171b1c;border-color:#c8df36}.fn-3d-caption{position:absolute;left:20px;bottom:20px;color:#c6cec6;font-size:8px;letter-spacing:.12em;pointer-events:none}@media(max-width:900px){.fn-product-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.fn-product-photo{height:220px}}@media(max-width:600px){.fn-product-studio{padding:72px 0}.fn-studio-head{display:block}.fn-product-grid{grid-template-columns:1fr}.fn-product-photo{height:260px}.fn-3d-shell{height:390px}}";
const st=document.createElement('style');st.textContent=css+"\n.fn-product-tile{transform-style:preserve-3d;perspective:1100px;transition:box-shadow .35s,border-color .35s;will-change:transform}\n.fn-product-tile:hover{box-shadow:0 26px 55px rgba(16,25,20,.16);border-color:#b8c2a0}\n.fn-product-photo{transform-style:preserve-3d;perspective:900px}\n.fn-product-photo img{transform:translateZ(18px) scale(1.025);filter:saturate(.9) contrast(1.04);will-change:transform;transition:transform .18s ease-out,filter .4s}\n.fn-product-photo:after{content:\"\";position:absolute;inset:0;pointer-events:none;background:linear-gradient(125deg,rgba(255,255,255,.22),transparent 35%,transparent 70%,rgba(10,18,13,.16));mix-blend-mode:screen;opacity:.75}\n.fn-depth-mark{position:absolute;top:14px;right:14px;padding:7px 9px;background:rgba(15,22,19,.76);color:#e9f0df;font-style:normal;font-size:7px;letter-spacing:.15em;transform:translateZ(32px);backdrop-filter:blur(8px)}\n.fn-sketch{position:relative;transform-style:preserve-3d;perspective:700px;overflow:hidden;box-shadow:0 10px 0 -6px #d5d8ce,0 17px 22px -14px rgba(25,35,28,.38);transition:transform .25s,box-shadow .25s}\n.fn-sketch:before{content:\"\";position:absolute;inset:7px;border:1px solid rgba(91,105,92,.2);transform:translateZ(-12px);pointer-events:none}\n.fn-sketch svg{filter:drop-shadow(3px 4px 0 rgba(52,66,59,.14)) drop-shadow(8px 10px 7px rgba(25,35,28,.13));transform:translateZ(22px) rotateY(-5deg);transition:transform .35s,filter .35s}\n.fn-product-tile:hover .fn-sketch svg{transform:translateZ(34px) rotateY(4deg) scale(1.035);filter:drop-shadow(5px 6px 0 rgba(52,66,59,.18)) drop-shadow(12px 15px 9px rgba(25,35,28,.17))}\n.fn-open-model{width:100%;margin-top:17px;padding:14px 15px;border:1px solid #27342d;background:#202a25;color:#f4f4ec;text-align:left;font-size:8px;letter-spacing:.14em;font-weight:800;cursor:pointer;transition:background .25s,color .25s,transform .25s}\n.fn-open-model:hover{background:#c8df36;color:#171b1c;transform:translateY(-2px)}\n.fn-image-depth{transform-style:preserve-3d;perspective:1000px;overflow:hidden}\n.fn-image-depth img{transition:transform .2s ease-out,filter .35s;will-change:transform;backface-visibility:hidden}\n.fn-3d-shell{background:radial-gradient(ellipse at 50% 34%,#56645b 0%,#28332e 48%,#151d19 100%);border:1px solid rgba(200,223,54,.25);box-shadow:inset 0 0 90px rgba(0,0,0,.24),0 28px 60px rgba(12,18,14,.2)}\n.fn-3d-shell canvas{filter:drop-shadow(0 22px 18px rgba(0,0,0,.24))}\n.fn-3d-controls{z-index:2;max-width:72%}\n.fn-3d-caption{z-index:2}\n@media(prefers-reduced-motion:reduce){.fn-product-photo img,.fn-sketch svg,.fn-product-tile,.fn-image-depth img{transition:none!important;transform:none!important}}\n@media(max-width:600px){.fn-open-model{padding:16px}.fn-3d-controls{max-width:100%;left:12px;right:12px;bottom:12px}.fn-3d-controls button{padding:10px 9px}}\n";document.head.appendChild(st);
function sketch(kind){const c='fill="none" stroke="#36423b" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"';let d='';
if(kind==='coverall')d='M65 22 82 13h36l17 9 27 22-13 35-17-8-2 90H70l-2-90-17 8-13-35z M82 13l18 21 18-21 M100 34v120 M76 75h18v24H76z M108 75h18v24h-18z M73 111h20v19H73z M107 111h20v19h-20z M67 45 45 89l15 7 17-36 M135 45l22 44-15 7-17-36';
else if(kind==='vest')d='M75 18 91 10h18l16 8 22 30-17 20-9-12v91H79V56l-9 12-17-20z M91 10l9 25 9-25 M79 56l21 22 21-22 M79 86h42 M79 99h42 M79 112h42 M100 78v69';
else if(kind==='jacket')d='M76 20 91 12h18l15 8 24 30-18 20-10-12v91H72V58L62 70 44 50z M91 12l9 24 9-24 M72 58l28 20 24-20 M100 36v113 M76 88h18v20H76z M106 88h18v20h-18z M72 122h56';
else if(kind==='trousers')d='M69 15h62l-5 135H99l-4-78-4 78H66z M69 29h62 M98 29v23 M68 88h26 M101 88h28 M67 116h26 M100 116h28';
else d='M73 18h54v128H73z M73 18l27 20 27-20 M100 38v108 M73 68h54 M73 91h54 M73 114h54 M83 18v128 M117 18v128';
return '<svg viewBox="0 0 200 170" role="img" aria-label="Technical line sketch of '+kind+' garment"><path '+c+' d="'+d+'"/><path d="M16 155H184" stroke="#c8df36" stroke-width="2"/><text x="100" y="166" text-anchor="middle" fill="#7c867e" font-size="6" letter-spacing="1">CONCEPT / FRONT VIEW</text></svg>';}
function tile(photo,alt,tag,num,title,desc,items,sketchKind,label){return '<article class="fn-product-tile"><div class="fn-product-photo"><img loading="lazy" src="'+photo+'" alt="'+alt+'"><span>'+tag+'</span><i class="fn-depth-mark">DEPTH VIEW / FN</i></div><div class="fn-product-meta"><small>'+num+'</small><h3>'+title+'</h3><p>'+desc+'</p><ul>'+items.map(x=>'<li>'+x+'</li>').join('')+'</ul><div class="fn-sketch">'+sketch(sketchKind)+'</div><div class="fn-sketch-label"><span>'+label+'</span><span>FRONT VIEW / CONCEPT</span></div><button type="button" class="fn-open-model" data-open-garment="'+sketchKind+'">EXPLORE THIS GARMENT IN 3D ↗</button></div></article>';}
const products=[
['https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85','Industrial work environment','INDUSTRIAL WORKWEAR','01 / CORE GARMENTS','Coveralls & Boiler Suits','One-piece workwear directions for industrial and workshop teams.',['Coveralls and boiler suits','Work shirts and trousers','Industrial jackets and workshop uniforms'],'coverall','TECHNICAL SKETCH'],
['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=85','Construction worksite and safety clothing','HIGH-VISIBILITY','02 / VISIBILITY RANGE','Reflective Vests','Visibility-led garment concepts for teams working around active sites.',['Reflective vests and jackets','Reflective trousers','High-visibility coveralls'],'vest','TECHNICAL SKETCH'],
['https://images.unsplash.com/photo-1581093458791-9d42e3c9f7a2?auto=format&fit=crop&w=900&q=85','Industrial technical work setting','PROTECTIVE APPAREL','03 / PROTECTIVE RANGE','Protective Jackets','Protective garment directions shaped around the intended task and requirements.',['Industrial protective garments','Safety uniforms','Protective jackets'],'jacket','TECHNICAL SKETCH'],
['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85','Professional team collaborating','CORPORATE WORKWEAR','04 / TEAM IDENTITY','Corporate Uniforms','Coordinated clothing concepts for professional and service teams.',['Business and maintenance uniforms','Hospitality workwear','Custom company clothing'],'shirt','TECHNICAL SKETCH'],
['https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=85','Garment design workspace','CUSTOM MANUFACTURING','05 / MADE TO YOUR BRIEF','Custom Development','Discuss your own garment programme, branding direction and design requirements.',['Private label and garment branding','Custom colours and fabric selection','Embroidery and printing'],'shirt','DESIGN DIRECTION'],
['https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=900&q=85','Industrial equipment detail','DETAIL & CONSTRUCTION','06 / SPECIFICATION FIRST','Details That Matter','Use your brief to define practical garment details before sampling.',['Pockets, closures and reinforcement','Trims and branding placement','Fit, sizing and intended use'],'trousers','TECHNICAL SKETCH']];
const section=document.createElement('section');section.className='fn-product-studio';section.id='product-range';
section.innerHTML='<div class="wrap"><div class="fn-studio-head"><div><span class="eyebrow">05 / THE PRODUCT RANGE</span><h2 class="headline">GARMENTS FOR<br><em>EVERY SHIFT.</em></h2></div><p>Explore the garment types in the FN product brief. Each sketch is a design-direction illustration; final construction, materials, fit and performance are confirmed against an approved specification.</p></div><div class="fn-product-grid">'+products.map(p=>tile(...p)).join('')+'</div><p class="fn-studio-note">Image and sketch disclaimer: photographs are illustrative references, not verified FN factory or product photography. Technical drawings are conceptual front-view sketches, not production patterns, certified PPE drawings or final specifications. Product availability and all technical details are confirmed project by project.</p></div>';
const cat=document.querySelector('#products');if(cat)cat.insertAdjacentElement('afterend',section);

const sector=document.createElement('section');sector.className='fn-product-studio fn-sector-studio';sector.id='industry-workwear';
const sectors=[
['https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&w=1000&q=85','Oil and gas industrial site','OIL & GAS','01 / HARSH WORK ENVIRONMENTS','Oil, Gas & Energy Workwear','Workwear concepts for energy, refinery, petrochemical and field-service teams.',['FR coveralls and boiler suits','Flame-resistant jackets and trousers','High-visibility layers and utility pockets'],'coverall'],
['https://images.unsplash.com/photo-1567789884554-0b844b597180?auto=format&fit=crop&w=1000&q=85','Manufacturing production floor','MANUFACTURING','02 / FACTORY & PRODUCTION','Manufacturing Workwear','Practical uniforms for production lines, workshops, assembly and maintenance operations.',['Factory coats and work shirts','Industrial trousers and jackets','Coveralls for maintenance teams'],'jacket'],
['https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=85','Construction site workers','CONSTRUCTION','03 / SITE & INFRASTRUCTURE','Construction & Civil Workwear','Visibility and workwear concepts for construction, roadwork and infrastructure crews.',['Hi-vis vests and jackets','Reflective trousers and coveralls','Utility and site-work garments'],'vest'],
['https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=85','Metal fabrication and welding','WELDING & FABRICATION','04 / HOT-WORK TASKS','Welding & Fabrication Wear','Garment concepts for fabrication shops and welding environments, subject to task-specific specification.',['Welding jackets and trousers','Workshop coveralls','Reinforced workwear details'],'welding'],
['https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=85','Warehouse and logistics operation','WAREHOUSE & LOGISTICS','05 / MOVEMENT & HANDLING','Warehouse & Logistics Wear','Coordinated work clothing for warehouse, transport, distribution and handling teams.',['Work shirts and trousers','Hi-vis vests and outerwear','Team uniforms and jackets'],'shirt'],
['https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1000&q=85','Outdoor field maintenance work','UTILITIES & FIELD SERVICE','06 / OUTDOOR OPERATIONS','Utilities & Field Service Wear','Workwear concepts for outdoor maintenance, technical service and utility crews.',['Weather-ready work jackets','Utility trousers and coveralls','High-visibility options'],'trousers']
];
sector.innerHTML='<div class="wrap"><div class="fn-studio-head"><div><span class="eyebrow">06 / BUILT AROUND THE WORK</span><h2 class="headline">WORKWEAR BY<br><em>INDUSTRY.</em></h2></div><p>Different workplaces demand different garment designs. Explore the sectors FN can discuss with buyers and specify against each project brief.</p></div><div class="fn-product-grid">'+sectors.map(p=>tile(...p.slice(0,7),p[7],'SECTOR GARMENT SKETCH')).join('')+'</div><p class="fn-studio-note">Flame-resistant, welding, high-visibility and other protective performance requirements must be defined by the buyer and verified against applicable material, garment and certification requirements. No protection rating or certification is implied by these concepts.</p></div>';

section.insertAdjacentElement('afterend',sector);

// Pointer-responsive 3D depth for existing site photos and technical sketches.
document.querySelectorAll('main img').forEach(img=>{
 const host=img.parentElement;
 if(host&&!host.classList.contains('fn-product-photo'))host.classList.add('fn-image-depth');
});
function depthMove(el,e){
 const r=el.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
 const rx=(.5-py)*7,ry=(px-.5)*9;
 el.style.transform='perspective(1000px) rotateX('+rx+'deg) rotateY('+ry+'deg) translateZ(3px)';
 const im=el.querySelector('img');
 if(im)im.style.transform='translateZ(22px) scale(1.055) translateX('+((px-.5)*-8)+'px) translateY('+((py-.5)*-8)+'px)';
}
function depthReset(el){el.style.transform='';const im=el.querySelector('img');if(im)im.style.transform='';}
document.querySelectorAll('.fn-product-photo,.fn-sketch,.fn-image-depth').forEach(el=>{
 el.addEventListener('pointermove',e=>{if(e.pointerType!=='touch')depthMove(el,e);});
 el.addEventListener('pointerleave',()=>depthReset(el));
});


const stage=document.querySelector('.garment-wrap');
if(stage){const old=stage.querySelector('.garment');if(old)old.style.display='none';const hint=stage.querySelector('.garment-hint');if(hint)hint.textContent='INTERACTIVE 3D COVERALL STUDY · DRAG TO ROTATE · CONCEPT ONLY';
const shell=document.createElement('div');shell.className='fn-3d-shell';shell.innerHTML='<div class="fn-3d-caption">FN / COVERALL STUDY · 3D VIEW</div><div class="fn-3d-controls"><button type="button" data-view="front" class="active">Front</button><button type="button" data-view="back">Back</button><button type="button" data-view="side">Side</button><button type="button" data-view="reset">Reset</button><button type="button" data-garment="coverall" class="active">Coverall</button><button type="button" data-garment="vest">Vest</button><button type="button" data-garment="jacket">Jacket</button><button type="button" data-garment="trousers">Trousers</button><button type="button" data-garment="shirt">Shirt</button><button type="button" data-garment="welding">Welding</button><button type="button" data-colour="lime">Hi-vis</button><button type="button" data-colour="charcoal">Charcoal</button><button type="button" data-zoom="in">Zoom +</button><button type="button" data-zoom="out">Zoom −</button><button type="button" data-spin="toggle">Auto 360°</button></div>';stage.appendChild(shell);
document.querySelectorAll('[data-open-garment]').forEach(btn=>btn.addEventListener('click',()=>{
 const type=btn.dataset.openGarment;
 const selector=shell.querySelector('[data-garment="'+type+'"]');
 if(selector)selector.click();
 stage.scrollIntoView({behavior:'smooth',block:'center'});
}));
import('https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js').then(T=>{
const scene=new T.Scene();scene.background=new T.Color(0x27312e);const camera=new T.PerspectiveCamera(34,1,.1,100);camera.position.set(0,1.35,5.6);const renderer=new T.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio||1,2));renderer.outputColorSpace=T.SRGBColorSpace;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;shell.prepend(renderer.domElement);scene.add(new T.HemisphereLight(0xe5f0df,0x202821,2.1));const key=new T.DirectionalLight(0xffffff,3);key.position.set(3,5,5);key.castShadow=true;scene.add(key);const rim=new T.DirectionalLight(0xc8df36,1.8);rim.position.set(-4,2,-3);scene.add(rim);

const group=new T.Group();scene.add(group);let activeType='coverall';let autoSpin=false;
 // Locally generated woven fabric: warp/weft detail, subtle colour grain and bump response.
 const fabricCanvas=document.createElement('canvas');fabricCanvas.width=256;fabricCanvas.height=256;
 const fctx=fabricCanvas.getContext('2d');fctx.fillStyle='#777';fctx.fillRect(0,0,256,256);
 for(let y=0;y<256;y+=4){for(let x=0;x<256;x+=4){const n=105+Math.floor(Math.random()*48);fctx.fillStyle='rgb('+n+','+n+','+n+')';fctx.fillRect(x,y,2,2);}}
 fctx.globalAlpha=.16;fctx.strokeStyle='#fff';fctx.lineWidth=1;
 for(let i=0;i<256;i+=5){fctx.beginPath();fctx.moveTo(i,0);fctx.lineTo(i,256);fctx.stroke();fctx.beginPath();fctx.moveTo(0,i);fctx.lineTo(256,i);fctx.stroke();}
 const fabricMap=new T.CanvasTexture(fabricCanvas);fabricMap.wrapS=fabricMap.wrapT=T.RepeatWrapping;fabricMap.repeat.set(3,4);fabricMap.colorSpace=T.SRGBColorSpace;
 const bumpMap=new T.CanvasTexture(fabricCanvas);bumpMap.wrapS=bumpMap.wrapT=T.RepeatWrapping;bumpMap.repeat.set(3,4);
 const cloth=new T.MeshStandardMaterial({color:0x45534a,map:fabricMap,bumpMap,bumpScale:.035,roughness:.94});
 const trim=new T.MeshStandardMaterial({color:0x222b26,roughness:.9}),seam=new T.MeshStandardMaterial({color:0x9ca99b,roughness:1}),hi=new T.MeshStandardMaterial({color:0xd0e934,roughness:.72}),leather=new T.MeshStandardMaterial({color:0x6b3825,roughness:.83});
function box(w,h,d,x,y,z,mat){const m=new T.Mesh(new T.BoxGeometry(w,h,d),mat);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
function capsule(r,len,x,y,z,mat,rz=0){const m=new T.Mesh(new T.CapsuleGeometry(r,len,5,10),mat);m.position.set(x,y,z);m.rotation.z=rz;m.castShadow=true;group.add(m);return m;}
function tapered(wTop,wBottom,h,x,y,z,mat,rz=0){const m=new T.Mesh(new T.CylinderGeometry(wTop,wBottom,h,28,1,false),mat);m.position.set(x,y,z);m.rotation.z=rz;m.castShadow=true;m.receiveShadow=true;group.add(m);return m;}
function stitch(x1,y1,x2,y2,z=.145){const len=Math.hypot(x2-x1,y2-y1);const m=box(.009,len,.008,(x1+x2)/2,(y1+y2)/2,z,seam);m.rotation.z=-Math.atan2(x2-x1,y2-y1);return m;}
function upper(type){
 const vest=type==='vest', shirt=type==='shirt', jacket=type==='jacket';
 // Shaped torso, shoulder yoke and side panels give the garment a recognisable silhouette.
 tapered(.43,.48,.98,0,1.66,0,cloth);
 box(.84,.22,.255,0,2.04,0,cloth);
 if(!vest){
   tapered(.135,.105,.68,-.57,1.64,0,cloth,.22);
   tapered(.135,.105,.68,.57,1.64,0,cloth,-.22);
   box(.23,.11,.24,-.65,1.25,0,trim);box(.23,.11,.24,.65,1.25,0,trim);
   box(.18,.12,.23,-.57,1.34,.01,cloth);box(.18,.12,.23,.57,1.34,.01,cloth);
 }
 // Collar, centre fastening, storm flap and chest pockets.
 box(.25,.13,.29,0,2.18,.015,trim);
 box(.11,.32,.025,0,1.86,.148,trim);
 box(.025,.83,.018,0,1.68,.165,seam);
 box(.34,.045,.035,0,2.03,.16,trim);
 for(const x of [-.235,.235]){
   box(.27,.23,.035,x,1.83,.155,trim);
   box(.29,.065,.045,x,1.96,.17,cloth);
   box(.025,.18,.012,x,1.83,.18,seam);
   box(.24,.018,.012,x,1.72,.18,seam);
 }
 // Waist shaping and articulated lower hem.
 box(.78,.06,.27,0,1.22,.01,trim);
 box(.88,.075,.27,0,1.13,.01,cloth);
 if(!shirt){
   box(.88,.065,.28,0,1.42,.01,hi);
   box(.88,.055,.28,0,1.29,.01,hi);
 }
 // Shoulder yoke seams and sleeve panel lines.
 stitch(-.39,2.02,-.12,1.91);stitch(.39,2.02,.12,1.91);
 stitch(-.4,1.98,-.4,1.48);stitch(.4,1.98,.4,1.48);
 if(vest){
   box(.09,.88,.035,-.27,1.66,.17,hi);box(.09,.88,.035,.27,1.66,.17,hi);
   box(.09,.08,.04,0,2.03,.17,hi);
 }
 if(jacket){
   box(.78,.11,.28,0,1.05,.01,trim);
   box(.31,.2,.035,-.22,1.54,.16,trim);box(.31,.2,.035,.22,1.54,.16,trim);
 }
}
function lower(){
 // Separate tapered legs with knee articulation, cargo storage and reinforced hems.
 for(const x of [-.225,.225]){
   tapered(.205,.145,.92,x,.58,0,cloth);
   box(.34,.29,.035,x, .69,.145,trim);
   box(.31,.065,.045,x,.85,.16,cloth);
   box(.31,.025,.012,x,.53,.17,seam);
   box(.31,.24,.025,x,.37,.15,trim);
   box(.31,.055,.035,x,.24,.17,cloth);
   box(.33,.075,.28,x,.09,.02,trim);
   // Cargo pocket and flap.
   box(.27,.23,.04,x,.94,.16,cloth);
   box(.29,.07,.045,x,1.07,.18,trim);
   box(.018,.18,.012,x-.12,.94,.19,seam);
   box(.018,.18,.012,x+.12,.94,.19,seam);
   // Knee reinforcement panel and hem seam.
   box(.29,.19,.035,x,.59,.17,trim);
   box(.25,.025,.012,x,.49,.19,seam);
   box(.31,.055,.035,x,.19,.17,hi);
 }
}
function backDetails(type){
 // Rear yoke, centre seam and pocket construction for a recognisable back elevation.
 box(.7,.13,.035,0,2.01,-.15,trim);box(.018,.72,.014,0,1.65,-.17,seam);
 for(const x of [-.22,.22]){box(.25,.2,.035,x,1.55,-.16,cloth);box(.27,.045,.04,x,1.66,-.18,trim);box(.015,.14,.012,x,1.55,-.19,seam);}
 if(type==='vest'){box(.78,.09,.045,0,1.42,-.16,hi);box(.78,.09,.045,0,1.27,-.16,hi);}
 if(type==='welding'){box(.76,.55,.045,0,1.62,-.17,leather);box(.8,.045,.05,0,1.9,-.18,trim);}
}
function build(type){
 group.clear();
 if(type==='trousers'){lower();box(.78,.12,.28,0,1.12,0,trim);}
 else if(type==='welding'){
   upper('jacket');backDetails('welding');
   // Distinct leather apron and hot-work sleeve overlays; a concept, not certified PPE.
   box(.62,.64,.055,0,1.48,.19,leather);box(.72,.08,.06,0,1.83,.22,trim);
   for(const x of [-.57,.57]){box(.19,.58,.16,x,1.62,.01,leather);box(.22,.08,.17,x,1.3,.02,trim);}
   lower();box(.48,.34,.05,-.22,.65,.19,leather);box(.48,.34,.05,.22,.65,.19,leather);
 }else{
   upper(type);backDetails(type);
   if(type==='coverall'){lower();box(.9,.07,.28,0,1.25,.015,hi);box(.9,.055,.28,0,1.36,.015,hi);}
 }
}
build('coverall');
const floor=new T.Mesh(new T.CircleGeometry(1.8,64),new T.MeshStandardMaterial({color:0x202925,roughness:1}));floor.rotation.x=-Math.PI/2;floor.position.y=-.22;floor.scale.set(1.25,1,1);scene.add(floor);
let ty=0,tx=0,down=false,lx=0,ly=0;const resize=()=>{const w=shell.clientWidth,h=shell.clientHeight;renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();};new ResizeObserver(resize).observe(shell);resize();shell.addEventListener('wheel',e=>{e.preventDefault();camera.position.z=Math.max(3.7,Math.min(7.2,camera.position.z+e.deltaY*.004));},{passive:false});shell.querySelectorAll('[data-zoom]').forEach(b=>b.addEventListener('click',()=>{camera.position.z=Math.max(3.7,Math.min(7.2,camera.position.z+(b.dataset.zoom==='in' ? -.35 : .35)));}));shell.querySelector('[data-spin]').addEventListener('click',e=>{autoSpin=!autoSpin;e.currentTarget.classList.toggle('active',autoSpin);e.currentTarget.textContent=autoSpin?'Stop 360°':'Auto 360°';});shell.addEventListener('pointerdown',e=>{down=true;lx=e.clientX;ly=e.clientY;shell.setPointerCapture(e.pointerId);});shell.addEventListener('pointermove',e=>{if(!down)return;ty+=(e.clientX-lx)*.012;tx=Math.max(-.25,Math.min(.25,tx+(e.clientY-ly)*.006));lx=e.clientX;ly=e.clientY;});shell.addEventListener('pointerup',()=>down=false);shell.addEventListener('pointercancel',()=>down=false);
shell.querySelectorAll('[data-garment]').forEach(b=>b.addEventListener('click',()=>{activeType=b.dataset.garment;build(activeType);shell.querySelectorAll('[data-garment]').forEach(x=>x.classList.toggle('active',x===b));}));let viewX=0;shell.querySelectorAll('[data-view]').forEach(b=>b.addEventListener('click',()=>{const v=b.dataset.view;if(v==='front'){ty=0;tx=0;}if(v==='back'){ty=Math.PI;tx=0;}if(v==='side'){ty=Math.PI/2;tx=0;}if(v==='reset'){ty=0;tx=0;camera.position.set(0,1.35,5.6);}shell.querySelectorAll('[data-view]').forEach(x=>x.classList.toggle('active',x===b));}));shell.querySelectorAll('[data-colour]').forEach(b=>b.addEventListener('click',()=>{const lime=b.dataset.colour==='lime';cloth.color.setHex(lime?0x899a37:0x45534a);hi.color.setHex(lime?0xe5f43c:0x9ca99b);shell.querySelectorAll('[data-colour]').forEach(x=>x.classList.toggle('active',x===b));}));
const draw=()=>{requestAnimationFrame(draw);if(autoSpin&&!down)ty+=.003;group.rotation.y+=(ty-group.rotation.y)*.08;group.rotation.x+=(tx-group.rotation.x)*.08;renderer.render(scene,camera);};draw();
}).catch(()=>{shell.innerHTML='<div style="padding:55px 25px;color:#e5e9df;text-align:center;font-size:12px;line-height:1.8">Interactive 3D viewer unavailable in this browser. Please check the connection and reload.</div>';});
}
})();