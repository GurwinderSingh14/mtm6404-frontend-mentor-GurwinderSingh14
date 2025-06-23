// Toggle mobile nav
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('nav');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('open');
});

// Toggle dark mode
document.getElementById('dark-toggle').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
