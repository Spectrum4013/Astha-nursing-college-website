// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
if (navToggle) {
  navToggle.addEventListener('click', () => {
    const open = mainNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open);
  });
}

// Footer year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Pulse-line divider draws itself in when scrolled into view
const pulsePaths = document.querySelectorAll('.pulse-path');
if ('IntersectionObserver' in window && pulsePaths.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('drawn');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  pulsePaths.forEach(p => io.observe(p));
} else {
  pulsePaths.forEach(p => p.classList.add('drawn'));
}
