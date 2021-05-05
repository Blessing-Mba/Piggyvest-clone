const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');
let menuOpen = false;

menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    mobileMenu.classList.add('open');
    menuOpen = true;
  } else{
    mobileMenu.classList.remove('open');
    menuOpen = false;
  }
}); 