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
 * Hero Play — pattern Wilderness adapté Mali :
 * - Poster visible par défaut (et si lecture échoue / pause)
 * - Vidéo preload=none : téléchargement seulement au 1er Play
 * - États loading / playing / idle sur le bouton
 */
function initHeroPlay() {
  const section = document.getElementById('home-hero');
  if (!section) return;

  const btn = section.querySelector<HTMLButtonElement>('[data-hero-play]');
  const video = section.querySelector<HTMLVideoElement>('[data-hero-video]');
  const iconPlay = section.querySelector<HTMLElement>('[data-icon-play]');
  const iconPause = section.querySelector<HTMLElement>('[data-icon-pause]');
  const iconLoading = section.querySelector<HTMLElement>('[data-icon-loading]');

  if (!btn || !video) return;

  let loadStarted = false;

  const setIcons = (state: 'idle' | 'loading' | 'playing') => {
    iconPlay?.classList.toggle('hidden', state !== 'idle');
    iconPause?.classList.toggle('hidden', state !== 'playing');
    iconLoading?.classList.toggle('hidden', state !== 'loading');
  };

  const setPlaying = (playing: boolean) => {
    section.dataset.heroPlaying = playing ? 'true' : 'false';
    section.dataset.heroLoading = 'false';
    btn.setAttribute('aria-pressed', playing ? 'true' : 'false');
    btn.setAttribute('aria-label', playing ? 'Mettre la vidéo en pause' : 'Lire la vidéo');
    btn.disabled = false;
    setIcons(playing ? 'playing' : 'idle');
  };

  const setLoading = (loading: boolean) => {
    section.dataset.heroLoading = loading ? 'true' : 'false';
    if (loading) {
      btn.setAttribute('aria-label', 'Chargement de la vidéo');
      setIcons('loading');
    }
  };

  const showPoster = () => {
    section.dataset.heroPlaying = 'false';
    video.classList.add('opacity-0');
    video.classList.remove('opacity-100');
  };

  const ensureLoaded = () =>
    new Promise<void>((resolve, reject) => {
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        resolve();
        return;
      }

      const onReady = () => {
        cleanup();
        resolve();
      };
      const onError = () => {
        cleanup();
        reject(new Error('video load failed'));
      };
      const cleanup = () => {
        video.removeEventListener('canplay', onReady);
        video.removeEventListener('loadeddata', onReady);
        video.removeEventListener('error', onError);
      };

      video.addEventListener('canplay', onReady, { once: true });
      video.addEventListener('loadeddata', onReady, { once: true });
      video.addEventListener('error', onError, { once: true });

      if (!loadStarted) {
        loadStarted = true;
        video.load();
      }
    });

  btn.addEventListener('click', async () => {
    if (!video.paused && !video.ended) {
      video.pause();
      setPlaying(false);
      showPoster();
      return;
    }

    setLoading(true);
    try {
      await ensureLoaded();
      await video.play();
      // Ne masquer le poster qu’une fois la lecture réelle démarrée
      setPlaying(true);
      video.classList.remove('opacity-0');
      video.classList.add('opacity-100');
    } catch {
      video.pause();
      setPlaying(false);
      showPoster();
    }
  });

  video.addEventListener('playing', () => {
    setPlaying(true);
    video.classList.remove('opacity-0');
    video.classList.add('opacity-100');
  });

  video.addEventListener('pause', () => {
    if (video.ended) return;
    setPlaying(false);
    showPoster();
  });

  video.addEventListener('ended', () => {
    setPlaying(false);
    showPoster();
  });

  video.addEventListener('waiting', () => {
    if (section.dataset.heroPlaying === 'true') setLoading(true);
  });

  video.addEventListener('canplay', () => {
    if (section.dataset.heroLoading === 'true' && !video.paused) {
      setPlaying(true);
    }
  });
}

/**
 * La nav reprend la couleur de fond exacte de la section sous le header.
 * Sections : data-nav="dark" | data-nav="light"
 */
function initNavTheme() {
  const header = document.getElementById('site-header');
  if (!header) return;

  const root = document.documentElement;
  const craie =
    getComputedStyle(root).getPropertyValue('--color-craie').trim() ||
    getComputedStyle(root).getPropertyValue('--color-ivoire').trim() ||
    '#f5efe0';
  const nuit =
    getComputedStyle(root).getPropertyValue('--color-azur-profond').trim() ||
    getComputedStyle(root).getPropertyValue('--color-nuit').trim() ||
    '#123f70';

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
      bg = theme === 'light' ? craie : nuit;
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
  initHeroPlay();
  initNavTheme();
});
