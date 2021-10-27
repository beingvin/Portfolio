console.log("javascript linked")

let mouseCurser = document.querySelector('.cursor');
let navLinks = document.querySelectorAll('.header ul li')

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
