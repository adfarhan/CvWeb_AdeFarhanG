const menu = document.getElementById('menu');
const navbarNav = document.querySelector('.navbar-nav');

// Tampilkan atau sembunyikan menu saat ikon diklik
menu.addEventListener('click', (event) => {
  event.stopPropagation(); // Mencegah klik dari bubbling ke document
  navbarNav.classList.toggle('active');
});

// Tutup menu jika klik di luar menu
document.addEventListener('click', (event) => {
  if (!navbarNav.contains(event.target) && !menu.contains(event.target)) {
    navbarNav.classList.remove('active');
  }
});