(function(){
  var header=document.querySelector('.nav'),btn=document.querySelector('.nav-toggle');
  if(!header||!btn)return;
  function set(open){header.classList.toggle('open',open);btn.setAttribute('aria-expanded',String(open));btn.setAttribute('aria-label',open?'Close menu':'Open menu');}
  btn.addEventListener('click',function(){set(btn.getAttribute('aria-expanded')!=='true');});
  document.addEventListener('keydown',function(e){if(e.key==='Escape'&&header.classList.contains('open')){set(false);btn.focus();}});
  window.matchMedia('(min-width:901px)').addEventListener('change',function(m){if(m.matches)set(false);});
})();
