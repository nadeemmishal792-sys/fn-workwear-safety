/* FN motion controller — progressive enhancement, touch + keyboard accessible */
(()=>{'use strict';
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const cards=[...document.querySelectorAll('.product-card,.industry-card,.process')];
cards.forEach((card,index)=>{
 if(card.dataset.fnMotionReady)return;
 const original=[...card.childNodes],front=document.createElement('div'),inner=document.createElement('div'),back=document.createElement('div');
 front.className='fn-motion-face fn-motion-front';inner.className='fn-motion-inner';back.className='fn-motion-face fn-motion-back';
 original.forEach(node=>front.appendChild(node));
 const title=front.querySelector('h3')?.textContent.trim()||front.querySelector('.product-info h3')?.textContent.trim()||'FN Workwear';
 const desc=front.querySelector('p')?.textContent.trim()||'Explore garment options, materials, construction details and customisation for your requirements.';
 const kicker=front.querySelector('small')?.textContent.trim()||front.querySelector('b')?.textContent.trim()||'FN WORKWEAR & SAFETY';
 const isLink=card.tagName==='A';
 back.innerHTML='<small></small><h3></h3><p></p><span class="fn-motion-action"></span><span class="fn-motion-hint">Flip back to view</span>';
 back.querySelector('small').textContent=kicker;
 back.querySelector('h3').textContent=title;
 back.querySelector('p').textContent=desc;
 back.querySelector('.fn-motion-action').textContent=isLink?'Explore this range ↗':'View front ↻';
 inner.append(front,back);card.append(inner);
 card.classList.add('fn-motion-card');card.dataset.fnMotionReady='true';
 card.style.setProperty('--fn-card-index',index);
 if(!isLink){card.tabIndex=0;card.setAttribute('role','button');card.setAttribute('aria-label',title+' card. Activate to flip.');}
 card.setAttribute('aria-expanded','false');
 const flip=()=>{const active=card.classList.toggle('is-flipped');card.setAttribute('aria-expanded',String(active));};
 if(!isLink){card.addEventListener('click',e=>{if(e.target.closest('a,button'))return;flip()});card.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();flip()}})}
 else if(window.matchMedia('(hover: none)').matches){card.addEventListener('click',e=>{if(!card.classList.contains('is-flipped')){e.preventDefault();flip()}else{card.classList.remove('is-flipped');card.setAttribute('aria-expanded','false')}},{passive:false})}
 if(!reduce&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
  card.addEventListener('pointermove',e=>{const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;card.style.setProperty('--fn-tilt-x',(-y*3.2).toFixed(2)+'deg');card.style.setProperty('--fn-tilt-y',(x*3.2).toFixed(2)+'deg')});
  card.addEventListener('pointerleave',()=>{card.style.setProperty('--fn-tilt-x','0deg');card.style.setProperty('--fn-tilt-y','0deg')});
 }
});
if(reduce)return;
const revealTargets=document.querySelectorAll('.section .eyebrow,.section .headline,.section .lead,.section .body-copy,.feature-image,.manifesto h2,.manifesto p,.contact-list,.form');
if('IntersectionObserver'in window){
 const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('fn-motion-visible');io.unobserve(entry.target)}}),{threshold:.12,rootMargin:'0px 0px -35px 0px'});
 revealTargets.forEach((el,i)=>{if(el.closest('.product-card,.industry-card,.process'))return;el.classList.add('fn-motion-reveal');el.style.transitionDelay=Math.min(i%4,3)*65+'ms';io.observe(el)});
}
const heroImage=document.querySelector('.hero-media img');
if(heroImage&&window.matchMedia('(hover:hover) and (pointer:fine)').matches){
 let raf=0;window.addEventListener('pointermove',e=>{if(raf)return;raf=requestAnimationFrame(()=>{const x=(e.clientX/window.innerWidth-.5)*5,y=(e.clientY/window.innerHeight-.5)*4;heroImage.style.transform='scale(1.055) translate3d('+x+'px,'+y+'px,0)';raf=0})},{passive:true});
}
})();