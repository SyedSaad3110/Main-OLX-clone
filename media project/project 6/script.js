const header = document.querySelector("header");

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky", window.scrollY > 200)
});
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.nav');
menu.oneclick = () => {
    menu.classList.toggle('bx-x');
    nav.classList.toggle('open')
}

