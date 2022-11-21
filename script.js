const close = document.querySelector('.close');
const mobileMenu = document.querySelector('.menu-icon');
const menu = document.querySelector('.headerNavList');

mobileMenu.addEventListener('click', () => {
    menu.style.display="flex";
    mobileMenu.style.visibility="hidden";
});

close.addEventListener('click', () => {
    menu.style.display="none";
    mobileMenu.style.visibility="visible";
});

