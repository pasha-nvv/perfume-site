const burgerBtn = document.querySelector('.burger__btn');
const mobileMenu = document.querySelector('.mobile__menu');

burgerBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  burgerBtn.classList.toggle('active');
});