document.addEventListener('DOMContentLoaded',()=>{const h=document.querySelector('.header');const btn=document.querySelector('.mobile-toggle');if(btn&&h){btn.addEventListener('click',()=>h.classList.toggle('open'));}const r=document.querySelectorAll('.reveal,.card,.step,.timeline-item');const io=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});r.forEach(el=>{el.classList.add('reveal');io.observe(el)});});

document.addEventListener('DOMContentLoaded',()=>{
  const tabs=document.querySelectorAll('.wizard-tab');
  const panels=document.querySelectorAll('.wizard-card');
  tabs.forEach(tab=>tab.addEventListener('click',()=>{
    const step=tab.dataset.step;
    tabs.forEach(t=>t.classList.toggle('active',t===tab));
    panels.forEach(p=>p.classList.toggle('active',p.dataset.panel===step));
  }));
});
