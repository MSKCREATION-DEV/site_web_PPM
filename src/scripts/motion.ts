/**
 * Reveal au scroll + léger parallax hero
 */
function initReveal() {
  const nodes = document.querySelectorAll('.reveal');
  if (!nodes.length) return;

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      }
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.12 },
  );

  nodes.forEach((el) => io.observe(el));
}

function initHeroMotion() {
  const media = document.querySelector('.hero-media');
  if (!media || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  let ticking = false;
  window.addEventListener(
    'scroll',
    () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = Math.min(window.scrollY * 0.25, 120);
        (media as HTMLElement).style.transform = `scale(1.08) translate3d(0, ${y}px, 0)`;
        ticking = false;
      });
    },
    { passive: true },
  );
}

document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeroMotion();
});
