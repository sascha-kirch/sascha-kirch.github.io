// Single scroll-to-top button logic
// Appears after user scrolls past threshold; clicking returns smoothly to top.
(function() {
  const container = document.getElementById('scroll-buttons');
  const topBtn = document.getElementById('scroll-top');
  if (!container || !topBtn) return;

  const threshold = 200; // px scrolled before showing button
  let ticking = false;

  const update = () => {
    const shouldShow = window.scrollY > threshold;
    if (shouldShow) {
      if (container.classList.contains('is-hidden')) {
        container.classList.remove('is-hidden');
        container.setAttribute('aria-hidden', 'false');
      }
    } else {
      if (!container.classList.contains('is-hidden')) {
        container.classList.add('is-hidden');
        container.setAttribute('aria-hidden', 'true');
      }
    }
    ticking = false;
  };

  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  const scrollToTop = () => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  };

  topBtn.addEventListener('click', scrollToTop);
  topBtn.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      scrollToTop();
    }
  });

  window.addEventListener('scroll', onScroll, { passive: true });
  update(); // initial
})();
