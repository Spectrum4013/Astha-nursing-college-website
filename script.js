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

// ============================================
// Interactive layer — simple, restrained
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ---- Scroll reveal (fade+rise) — the one consistent animation used everywhere ----
if (!prefersReducedMotion && 'IntersectionObserver' in window) {
  const revealTargets = document.querySelectorAll('.reveal, .reveal-stagger');
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  document.querySelectorAll('.reveal, .reveal-stagger').forEach(el => el.classList.add('revealed'));
}

// ---- Count-up numbers (₹36,000 / 2011 / 20 / 3 yr) ----
if ('IntersectionObserver' in window) {
  const countTargets = document.querySelectorAll('[data-count-to]');
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      countObserver.unobserve(el);
      const target = parseInt(el.getAttribute('data-count-to'), 10);
      const prefix = el.getAttribute('data-prefix') || '';
      const suffix = el.getAttribute('data-suffix') || '';

      if (prefersReducedMotion) {
        el.textContent = prefix + target.toLocaleString('en-IN') + suffix;
        return;
      }

      const duration = 1000;
      const start = performance.now();
      function tick(now){
        const progress = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(target * eased);
        el.textContent = prefix + current.toLocaleString('en-IN') + suffix;
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          el.classList.add('count-pop');
        }
      }
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.5 });
  countTargets.forEach(el => countObserver.observe(el));
}

// ---- Gallery lightbox ----
const lightboxOverlay = document.getElementById('lightboxOverlay');
const lightboxImg = document.getElementById('lightboxImg');
if (lightboxOverlay && lightboxImg) {
  document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      lightboxOverlay.classList.add('open');
    });
  });
  lightboxOverlay.addEventListener('click', () => {
    lightboxOverlay.classList.remove('open');
  });
}

// ---- Reusable button loading-state helper ----
// setBtnLoading(buttonEl, true)  -> shows spinner, disables button
// setBtnLoading(buttonEl, false, "Original Text") -> restores it
function setBtnLoading(btn, loading, restoreText){
  if (!btn) return;
  if (loading) {
    if (!btn.dataset.originalText) btn.dataset.originalText = btn.textContent;
    btn.classList.add('btn-loading');
    btn.disabled = true;
  } else {
    btn.classList.remove('btn-loading');
    btn.disabled = false;
    btn.textContent = restoreText || btn.dataset.originalText || btn.textContent;
  }
}
