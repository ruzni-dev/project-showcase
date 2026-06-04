/* script.js
   Final version: typing cursor effect + fade, theme, tooltips bottom,
   particles, GSAP, AOS, project modal, testimonials, smooth scroll, contact mock.
*/

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');
  const header = document.getElementById('site-header');
  const yearEl = document.getElementById('year');
  const skillFills = document.querySelectorAll('.skill-fill');
  const profileGlow = document.querySelector('.profile-wrap .profile-glow');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const testimonials = document.querySelectorAll('.testimonial');
  const prevTest = document.getElementById('prevTest');
  const nextTest = document.getElementById('nextTest');

  /* YEAR */
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* THEME */
  const saved = localStorage.getItem('aw_theme') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  setTheme(saved, false);

  function setTheme(theme, save = true) {
    if (theme === 'dark') {
      body.classList.add('dark');
      themeIcon.className = 'fa-solid fa-sun';
    } else {
      body.classList.remove('dark');
      themeIcon.className = 'fa-solid fa-moon';
    }
    if (profileGlow) profileGlow.style.transform = theme === 'dark' ? 'scale(1.02)' : 'scale(1)';
    if (save) localStorage.setItem('aw_theme', theme);
  }

  themeToggle.addEventListener('click', () => {
    const next = body.classList.contains('dark') ? 'light' : 'dark';
    setTheme(next, true);
  });

  /* HEADER SCROLL */
  function onScroll() {
    if (window.scrollY > 40) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  /* AOS init */
  if (window.AOS) AOS.init({ duration: 700, once: true, easing: 'ease-out-cubic' });

  /* TIPPY (tooltips) placement bottom */
  if (window.tippy) {
    tippy('[data-tippy-content]', {
      theme: 'light-border',
      animation: 'shift-away',
      delay: [70, 0],
      placement: 'bottom',
      maxWidth: 220
    });
  }

  /* TYPING EFFECT (typing style with blinking cursor) */
  const typedEl = document.getElementById('typed-text');
  const roles = ['Full Stack Developer', 'WordPress Developer', 'Graphic Designer'];
  let roleIndex = 0, charIndex = 0, typing = true;

  function typeLoop() {
    const current = roles[roleIndex];
    if (typing) {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        typing = false;
        setTimeout(typeLoop, 900);
        return;
      }
      setTimeout(typeLoop, 70);
    } else {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        typing = true;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(typeLoop, 300);
        return;
      }
      setTimeout(typeLoop, 30);
    }
  }
  if (typedEl) typeLoop();

  /* GSAP intro */
  if (window.gsap) {
    gsap.from('.logo', { y: -12, opacity: 0, duration: .6, delay: .12 });
    gsap.from('.hero-title', { x: -30, opacity: 0, duration: .8, delay: .2 });
    gsap.from('.typed-text, .hero-actions .btn', { opacity: 0, y: 12, stagger: .08, duration: .6, delay: .35 });
    gsap.from('.profile-img', { scale: .95, opacity: 0, duration: .9, delay: .5, ease: 'power3.out' });
  }

  /* SKILL BARS */
  window.addEventListener('load', () => {
    skillFills.forEach(el => {
      const v = el.getAttribute('data-value') || 0;
      setTimeout(()=> el.style.width = v + '%', 500);
    });
  });

  /* PARTICLES */
  if (window.tsParticles) {
    tsParticles.load('particles-container', {
      fpsLimit: 60,
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'repulse' },
          onClick: { enable: true, mode: 'push' }
        },
        modes: { repulse: { distance: 80 }, push: { quantity: 2 } }
      },
      particles: {
        color: { value: ['#E11D2E', '#3F51B5', '#FF7A8A'] },
        links: { enable: false },
        move: { enable: true, speed: .6, outModes: 'bounce' },
        number: { value: 22, density: { enable: true, area: 800 } },
        opacity: { value: .12 },
        shape: { type: 'circle' },
        size: { value: { min: 3, max: 9 } }
      }
    });
  }

  /* PROJECT MODAL */
  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.getAttribute('data-project') || 'Project';
      const img = card.querySelector('img') ? card.querySelector('img').src : 'img2.png';
      const link = card.querySelector('a') ? card.querySelector('a').href : 'https://darkbeast2003.github.io/39-login/';
      openProjectModal(title, img, link, card.querySelector('.proj-body')?.innerHTML || '');
    });
  });

  function openProjectModal(title, img, link, html) {
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    modalBody.innerHTML = `
      <h3>${title}</h3>
      <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:12px">
        <img decoding="async" src="${img}" style="width:260px;border-radius:8px;object-fit:cover;">
        <div style="flex:1">${html}</div>
      </div>
      <div style="margin-top:14px">
        <a href="${link}" class="btn hire">View Live</a>
      </div>
    `;
  }

  // close modal clicking outside or pressing Escape
  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  function closeModal() {
    modal.classList.remove('show');
    modal.setAttribute('aria-hidden', 'true');
    modalBody.innerHTML = '';
  }

  document.getElementById('modal-close')?.addEventListener('click', closeModal);

  /* TESTIMONIALS */
  let tIndex = 0;
  const testEls = Array.from(document.querySelectorAll('.testimonial'));
  function showTest(i) {
    testEls.forEach((t, idx) => t.classList.toggle('active', idx === i));
  }
  if (testEls.length) showTest(0);
  document.getElementById('prevTest')?.addEventListener('click', () => { tIndex = (tIndex - 1 + testEls.length) % testEls.length; showTest(tIndex); });
  document.getElementById('nextTest')?.addEventListener('click', () => { tIndex = (tIndex + 1) % testEls.length; showTest(tIndex); });

  /* SMOOTH SCROLL */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const href = a.getAttribute('href');
      if (href.length > 1) {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* CONTACT FORM (demo) */
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = contactForm.querySelector('button[type="submit"]') || contactForm.querySelector('.btn.hire');
      btn.setAttribute('disabled', 'disabled');
      btn.textContent = 'Sending...';
      setTimeout(() => {
        btn.removeAttribute('disabled');
        btn.textContent = 'Send Message';
        contactForm.reset();
        if (window.gsap) gsap.fromTo('#contact .btn.hire', { scale: .98 }, { scale: 1, duration: .2 });
        alert('Message sent (demo). Integrate EmailJS or your backend to send real messages.');
      }, 1100);
    });
  }

});