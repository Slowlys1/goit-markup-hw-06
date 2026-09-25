const mobileMenu = document.querySelector('[data-menu]');
const openMenuButton = document.querySelector('[data-menu-open]');
const closeMenuButton = document.querySelector('[data-menu-close]');
const menuLinks = document.querySelectorAll(
  '.mobile-nav-link, .mobile-menu-contacts-link'
);

const closeMenu = () => {
  mobileMenu.classList.remove('is-open');
  document.body.style.overflow = '';
};

const openMenu = () => {
  mobileMenu.classList.add('is-open');
  document.body.style.overflow = 'hidden';
};

openMenuButton.addEventListener('click', openMenu);
closeMenuButton.addEventListener('click', closeMenu);

menuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileMenu.classList.contains('is-open')) {
    closeMenu();
  }
});
