//  Mobile Menu

let menuIcon = document.querySelector('.menu-icon');
let closeIcon = document.querySelector('.mobile-menu-close');
let mobileMenu = document.querySelector('.mobile-menu');

function openMenu() {
  mobileMenu.style.display = 'block';
}

function closeMenu() {
  mobileMenu.style.display = 'none';
}

menuIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);