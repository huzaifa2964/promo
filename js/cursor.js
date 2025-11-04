// Custom animated cursor with GSAP
let cursorEl = document.querySelector('.custom-cursor');
if (!cursorEl) {
  cursorEl = document.createElement('div');
  cursorEl.className = 'custom-cursor';
  document.body.appendChild(cursorEl);
}

const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
const mouse = { x: pos.x, y: pos.y };

const xTo = gsap.quickTo(cursorEl, 'x', { duration: 0.25, ease: 'power3' });
const yTo = gsap.quickTo(cursorEl, 'y', { duration: 0.25, ease: 'power3' });

window.addEventListener('mousemove', (e) => {
  mouse.x = e.clientX - 10;
  mouse.y = e.clientY - 10;
  xTo(mouse.x);
  yTo(mouse.y);
});

// Hover states
const hoverables = ['a', 'button', 'input', 'textarea', '[data-hover]'];
document.querySelectorAll(hoverables.join(',')).forEach((el) => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cursorEl, { scale: 1.8, opacity: 0.7, duration: 0.2 });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(cursorEl, { scale: 1, opacity: 1, duration: 0.2 });
  });
});

// Magnetic effect for buttons
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    gsap.to(el, { x: relX * 0.1, y: relY * 0.1, duration: 0.2, ease: 'power2' });
  });
  el.addEventListener('mouseleave', () => {
    gsap.to(el, { x: 0, y: 0, duration: 0.3, ease: 'power3' });
  });
});


