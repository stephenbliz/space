const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.headerNavList');
const logo = document.querySelector('.logo');
// console.log(logo);

mobileMenu.addEventListener('click', () => {
    menu.style.display="flex";
    mobileMenu.style.visibility="hidden";
});

close.addEventListener('click', () => {
    menu.style.display="none";
    mobileMenu.style.visibility="visible";
});

logo.addEventListener('click', () => {
    window.location='../index.html';
});
