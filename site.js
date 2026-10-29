(function(){
var d=document,root=d.documentElement;
root.classList.remove("nojs");
var burger=d.querySelector(".burger"),drawer=d.querySelector(".mob-drawer"),ov=d.querySelector(".mob-overlay");
function setNav(open){
  d.body.classList.toggle("mob-open",open);
  root.style.overflow=open?"hidden":"";
  if(burger){burger.setAttribute("aria-expanded",open?"true":"false");}
  if(drawer){drawer.setAttribute("aria-hidden",open?"false":"true");}
}
if(burger){burger.addEventListener("click",function(){setNav(!d.body.classList.contains("mob-open"));});}
if(ov){ov.addEventListener("click",function(){setNav(false);});}
var cl=d.querySelector(".mob-drawer .close");
if(cl){cl.addEventListener("click",function(){setNav(false);});}
d.addEventListener("keydown",function(e){if(e.key==="Escape"){setNav(false);}});
d.querySelectorAll(".faq button").forEach(function(b){
  b.addEventListener("click",function(){
    var f=b.parentNode,a=f.querySelector(".ans"),open=f.classList.toggle("open");
    b.setAttribute("aria-expanded",open?"true":"false");
    a.style.maxHeight=open?a.scrollHeight+"px":"0px";
  });
});
})();
