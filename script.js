'use strict';
const videos=[...document.querySelectorAll('video')];
videos.forEach(video=>{
 video.addEventListener('play',()=>videos.forEach(other=>{if(other!==video)other.pause();}));
 video.addEventListener('error',()=>{
  if(video.nextElementSibling?.classList.contains('video-fallback'))return;
  const a=document.createElement('a');a.className='video-fallback';a.href=video.querySelector('source').getAttribute('src');a.textContent='Otwórz film';a.style.cssText=video.style.cssText+';position:absolute;height:auto;background:#191f1b;color:#d5fa48;padding:8px;z-index:2';video.after(a);
 });
});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(!entry.isIntersecting)entry.target.pause();}),{threshold:0});videos.forEach(video=>observer.observe(video));}
const zoom=document.getElementById('zoom');zoom.addEventListener('click',()=>{const current=[...document.querySelectorAll('.slide')].find(s=>s.getBoundingClientRect().bottom>80);const active=document.body.classList.toggle('zoomed');zoom.setAttribute('aria-pressed',String(active));zoom.textContent=active?'Dopasuj':'Powiększ';if(current)current.scrollIntoView({behavior:'instant',block:'start'});});
