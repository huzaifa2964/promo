// Animations: Preloader, Scroll reveals, Parallax, Lenis, Swiper
document.addEventListener('DOMContentLoaded', () => {
  gsap.registerPlugin(ScrollTrigger);

  // Preloader timeline
  const preloader = document.getElementById('preloader');
  if (preloader) {
    let percent = 0;
    const percentEl = document.getElementById('preloader-percent');
    const bar = document.querySelector('#preloader-bar span');
    const interval = setInterval(() => {
      percent = Math.min(percent + Math.random() * 14, 100);
      if (percentEl) percentEl.textContent = `${Math.floor(percent)}%`;
      if (bar) bar.style.width = `${percent}%`;
      if (percent >= 100) {
        clearInterval(interval);
        gsap.to(preloader, { autoAlpha: 0, duration: 0.6, delay: 0.1 });
      }
    }, 120);
  }

  // Lenis smooth scroll
  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false,
    gestureOrientation: 'vertical'
  });
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);

  // Fade-up utility
  document.querySelectorAll('.fade-up, .card3d').forEach((el) => {
    gsap.fromTo(
      el,
      { y: 60, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 80%' }
      }
    );
  });

  // Parallax subtle depth on hero image
  const heroImg = document.querySelector('section img[alt="Hero"]');
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 10,
      ease: 'none',
      scrollTrigger: { trigger: heroImg, scrub: true }
    });
  }

  // Swiper init
  if (typeof Swiper !== 'undefined') {
    new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 20,
      pagination: { el: '.swiper-pagination', clickable: true },
      breakpoints: { 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }
    });
  }
});


