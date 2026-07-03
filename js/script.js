// Header background on scroll
const header = document.getElementById('site-header');
const hasHero = !!document.querySelector('.hero');
const onScroll = () => {
  header.classList.toggle('is-scrolled', !hasHero || window.scrollY > 30);
};
onScroll();
if (hasHero) window.addEventListener('scroll', onScroll, { passive: true });

// Mobile nav toggle
const navToggle = document.getElementById('nav-toggle');
const mainNav = document.getElementById('main-nav');
navToggle.addEventListener('click', () => {
  const isOpen = mainNav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});
mainNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Menu flip card (index page only)
const menuFlip = document.getElementById('menu-flip');
const menuFlipBtn = document.getElementById('menu-flip-btn');
if (menuFlip && menuFlipBtn) {
  const menuFlipLabel = menuFlipBtn.querySelector('.menu-flip-btn-label');
  menuFlipBtn.addEventListener('click', () => {
    const flipped = menuFlip.classList.toggle('is-flipped');
    menuFlipLabel.textContent = flipped ? 'Voir la carte' : 'Voir les boissons';
    menuFlipBtn.setAttribute('aria-pressed', String(flipped));
  });
}

// Gallery carousel arrows (index page only)
const galleryTrack = document.getElementById('gallery-track');
const galleryPrev = document.getElementById('gallery-prev');
const galleryNext = document.getElementById('gallery-next');
if (galleryTrack && galleryPrev && galleryNext) {
  const galleryStep = () => galleryTrack.querySelector('img').getBoundingClientRect().width + 18;
  galleryPrev.addEventListener('click', () => galleryTrack.scrollBy({ left: -galleryStep(), behavior: 'smooth' }));
  galleryNext.addEventListener('click', () => galleryTrack.scrollBy({ left: galleryStep(), behavior: 'smooth' }));
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
