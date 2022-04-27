
console.log("javascript linked")

/////////////////////////////////////// toggle navigation

let toggle = document.getElementById("toggle")
let menu = document.querySelector(".navBar ul")

toggle.onclick = ()=>{
    toggle.classList.toggle("active");
    menu.classList.toggle("active");
}

/////////////////////////////////////// change cursor format 

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




/////////////////////////////////////// Skills 

// create variables
let html = document.querySelector(".html span");
let css = document.querySelector(".css span");
let php = document.querySelector(".php span");
let javascript = document.querySelector(".javascript span");
let python = document.querySelector(".python span");
let react = document.querySelector(".react span");

// crate keyFrames
let keyFrames = document.createElement("style");

keyFrames.innerHTML = `
@keyframes html {
    100% {
        width: ${html.innerHTML};
    }
}
@keyframes css {
    100% {
        width: ${css.innerHTML};
    }
}
@keyframes php {
    100% {
        width: ${php.innerHTML};
    }
}
@keyframes javascript {
    100% {
        width: ${javascript.innerHTML};
    }
}
@keyframes python {
    100% {
        width: ${python.innerHTML};
    }
}
@keyframes react {
    100% {
        width: ${react.innerHTML};
    }
}

`;

// append keyFrames

html.appendChild(keyFrames);
css.appendChild(keyFrames);
php.appendChild(keyFrames);
javascript.appendChild(keyFrames);
python.appendChild(keyFrames);
react.appendChild(keyFrames);
