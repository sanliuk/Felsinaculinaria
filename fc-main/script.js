// script.js

const hambuger = document.querySelector('.hambuger');
const navMenu = document.querySelector('.nav-menu');

hambuger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hambuger.classList.toggle("active");
  navMenu.classList.toggle("active");
  
  // Aggiungi o rimuovi la classe per lo sfondo giallo
  navMenu.classList.toggle("mobile-menu-active");
}

const navLink = document.querySelectorAll('.nav-link');
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hambuger.classList.remove("active");
  navMenu.classList.remove("active");
  
  // Rimuovi la classe per lo sfondo giallo
  navMenu.classList.remove("mobile-menu-active");
}
