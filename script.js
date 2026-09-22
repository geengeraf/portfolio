'use strict';
const menuButton=document.getElementById('menu-toggle');
const nav=document.getElementById('navigation');
function closeMenu(){nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.querySelector('span').textContent='+';}
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.querySelector('span').textContent=open?'−':'+';});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMenu();});
document.addEventListener('click',e=>{if(!e.target.closest('.site-header'))closeMenu();});
const dialog=document.getElementById('media-dialog');
const view=document.getElementById('media-view');
const title=document.getElementById('media-title');
const file=document.getElementById('media-file');
let opener=null;
function clearMedia(){const video=view.querySelector('video');if(video){video.pause();video.removeAttribute('src');video.load();}view.replaceChildren();document.body.classList.remove('modal-open');if(opener)opener.focus({preventScroll:true});}
dialog.addEventListener('close',clearMedia);
document.getElementById('close-media').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});
document.querySelectorAll('[data-media]').forEach(button=>button.addEventListener('click',()=>{
 opener=button;title.textContent=button.dataset.title;file.href=button.dataset.src;
 const isVideo=button.dataset.media==='video';const element=document.createElement(isVideo?'video':'img');
 if(isVideo){element.controls=true;element.playsInline=true;element.preload='metadata';element.poster=button.dataset.poster;element.setAttribute('aria-label',button.dataset.title);}
 else{element.alt=button.dataset.title;}
 element.src=button.dataset.src;
 element.addEventListener('error',()=>{const message=document.createElement('p');message.textContent='Nie udało się otworzyć podglądu. Skorzystaj z linku „Otwórz plik” poniżej.';view.replaceChildren(message);},{once:true});
 view.replaceChildren(element);dialog.showModal();document.body.classList.add('modal-open');
 if(isVideo)element.play().catch(()=>{});
}));
const sectionLinks=[...nav.querySelectorAll('a')];const sections=[...document.querySelectorAll('main>section[id]')];
let scheduled=false;
function setActive(){scheduled=false;let current=sections[0];for(const section of sections){if(section.getBoundingClientRect().top<=160)current=section;}const id={bobbie:'projekty','smak-nostalgii':'projekty',netflix:'projekty'}[current.id]||current.id;sectionLinks.forEach(a=>{if(a.getAttribute('href')==='#'+id)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current');});}
window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(setActive);}},{passive:true});setActive();
if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){const reveal=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');reveal.unobserve(entry.target);}});},{threshold:.05});document.querySelectorAll('.section-heading,.featured-card').forEach(el=>{el.classList.add('reveal-ready');reveal.observe(el);});}
const legacy={1:'start',2:'o-mnie',3:'specjalizacje',4:'projekty',5:'social-media',6:'social-media',7:'netflix',8:'netflix',9:'wideo',10:'wideo',11:'rtmy',12:'konkursy',13:'wspolprace',14:'bobbie',15:'bobbie',16:'koncepty',17:'koncepty',18:'smak-nostalgii',19:'smak-nostalgii',20:'moderacja',21:'moderacja',22:'kontakt'};
const old=location.hash.match(/^#slajd-(\d+)$/);if(old&&legacy[old[1]]){const section=document.getElementById(legacy[old[1]]);if(section)requestAnimationFrame(()=>section.scrollIntoView());}
