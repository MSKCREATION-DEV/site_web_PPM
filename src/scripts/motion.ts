/**
 * Reveal au scroll + parallax hero + nav qui suit la section
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

/**
 * La nav reprend la couleur de fond exacte de la section sous le header.
 * Sections : data-nav="dark" | data-nav="light"
 */
function initNavTheme() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const root = document.documentElement;
  const sable =
    getComputedStyle(root).getPropertyValue('--color-sable').trim() || '#eadfc8';
  const nuit =
    getComputedStyle(root).getPropertyValue('--color-nuit').trim() || '#0d1330';

  const sections = Array.from(
    document.querySelectorAll<HTMLElement>('[data-nav]'),
  );
  if (!sections.length) return;

  const isTransparent = (bg: string) =>
    !bg ||
    bg === 'transparent' ||
    bg === 'rgba(0, 0, 0, 0)' ||
    /^rgba\(\s*0\s*,\s*0\s*,\s*0\s*,\s*0\s*\)$/.test(bg);

  let ticking = false;

  const update = () => {
    const probeY = Math.max(header.offsetHeight - 2, 1);
    let theme: 'dark' | 'light' = 'dark';
    let active: HTMLElement | null = null;

    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top <= probeY && rect.bottom > probeY) {
        active = section;
        const value = section.dataset.nav;
        if (value === 'light' || value === 'dark') theme = value;
        break;
      }
    }

    let bg = active ? getComputedStyle(active).backgroundColor : '';

    // Hero / image : fond calculé transparent → tokens palette
    if (isTransparent(bg)) {
      bg = theme === 'light' ? sable : nuit;
    }

    // En haut du hero sombre : nav transparente pour laisser l’image
    const atHeroTop = theme === 'dark' && window.scrollY < 40 && active?.querySelector('.hero-media');
    header.style.setProperty('--nav-bg', atHeroTop ? 'transparent' : bg);

    header.dataset.theme = theme;
    header.dataset.scrolled = window.scrollY > 24 ? 'true' : 'false';
    ticking = false;
  };

  const onScroll = () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
}


document.addEventListener('DOMContentLoaded', () => {
  initReveal();
  initHeroMotion();
  initNavTheme();
});
