window.addEventListener('scroll', () => {
  const header = document.getElementById('navbar');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
    document.getElementById('nav-menu').classList.remove('show');
  });
});

document.getElementById('menu-toggle').addEventListener('click', () => {
  document.getElementById('nav-menu').classList.toggle('show');
});
