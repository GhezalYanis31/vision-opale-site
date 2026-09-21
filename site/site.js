document.addEventListener('DOMContentLoaded',function(){
 var b=document.querySelector('.burger'),n=document.querySelector('header nav');
 if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o)})}
 var v=document.querySelector('video[data-hd]');
 if(v&&window.innerWidth>900&&!(navigator.connection&&navigator.connection.saveData)){
  v.setAttribute('src',v.getAttribute('data-hd'));v.load();var p=v.play();if(p&&p.catch){p.catch(function(){})}}
 document.querySelectorAll('.filmbtn').forEach(function(btn){
  var t=document.getElementById(btn.dataset.target);
  btn.addEventListener('click',function(){
   if(t.paused){t.play();btn.textContent=btn.dataset.pause}else{t.pause();btn.textContent=btn.dataset.play}})});
 var f=document.getElementById('devis');
 if(f){f.addEventListener('submit',function(e){
  e.preventDefault();var d=new FormData(f),l=[];
  d.forEach(function(val,key){if(String(val).trim()){l.push(key+' : '+val)}});
  window.location.href='mailto:contact@visionopale.fr?subject='+encodeURIComponent('Demande d\u2019Aper\u00e7u — '+(d.get('Société')||''))+'&body='+encodeURIComponent(l.join('\n\n'));
  var m=document.getElementById('sent');if(m){m.hidden=false}})}
});
