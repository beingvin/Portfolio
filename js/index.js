
console.log("javascript linked")

let loader = document.getElementById('preloader');
window.addEventListener('load', () => {
  loader.style.display = "none";
});


let mouseCurser = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.navBar ul li')

window.addEventListener('mousemove', (e) => {
  mouseCurser.style.top = e.pageY + 'px';
  mouseCurser.style.left = e.pageX + 'px';
  console.log(e);
});

navLinks.forEach((link) => {
  link.addEventListener("mouseleave",()=>{
    mouseCurser.classList.remove('link-bubble')
  });
  link.addEventListener("mouseover",()=>{
    mouseCurser.classList.add('link-bubble')
  });
});

