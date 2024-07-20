let menu = document.querySelector('#menubtn');
let navlist = document.querySelector('.side-nav');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
menu.scroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}