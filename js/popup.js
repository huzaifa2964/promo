// Live sticky call banner with localStorage persistence
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('.live-banner');
  if (!banner) return;

  const closed = localStorage.getItem('promo_live_banner_closed') === '1';
  if (!closed) {
    banner.classList.remove('hidden');
    gsap.fromTo(
      banner,
      { y: 40, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.6, ease: 'back.out(1.6)' }
    );
  }

  const closeBtn = banner.querySelector('[data-close-banner]');
  closeBtn?.addEventListener('click', () => {
    gsap.to(banner, {
      y: 20,
      autoAlpha: 0,
      duration: 0.3,
      onComplete: () => {
        banner.classList.add('hidden');
        localStorage.setItem('promo_live_banner_closed', '1');
      }
    });
  });
});


