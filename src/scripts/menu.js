const menu = document.querySelector('.menu');
const navLinks = document.querySelector('.nav-links');

menu?.addEventListener('click', () => {
  const isExpanded = menu.getAttribute('aria-expanded') === 'true';
  menu.setAttribute('aria-expanded', `${!isExpanded}`);
  
  // Toggle mobile navigation visibility
  if (navLinks) {
    navLinks.classList.toggle('mobile-open');
  }
});