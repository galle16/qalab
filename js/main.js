/* ============================================
   QA·LAB — Quality Assurance Engineering
   main.js
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* ── Custom Cursor ──────────────────────── */
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursorRing');
  let mx = 0, my = 0, rx = 0, ry = 0;

  if (finePointer) document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    cursor.style.left = (mx - 4) + 'px';
    cursor.style.top  = (my - 4) + 'px';
  });

  function animateRing() {
    rx += (mx - rx - 18) * 0.12;
    ry += (my - ry - 18) * 0.12;
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateRing);
  }
  if (finePointer && !reduceMotion) animateRing();

  /* Cursor hover effect on interactive elements */
  if (finePointer) document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform   = 'scale(2.5)';
      ring.style.width         = '56px';
      ring.style.height        = '56px';
      ring.style.borderColor   = 'rgba(0,229,160,0.6)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform   = 'scale(1)';
      ring.style.width         = '36px';
      ring.style.height        = '36px';
      ring.style.borderColor   = 'rgba(0,229,160,0.4)';
    });
  });

  /* ── Scroll Reveal ──────────────────────── */
  const reveals  = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), 100);
      }
    });
  }, { threshold: 0.1 });

  if (reduceMotion) {
    reveals.forEach(el => el.classList.add('visible'));
  } else {
    reveals.forEach(el => observer.observe(el));
  }

  /* ── Mobile navigation ─────────────────── */
  const menuToggle = document.querySelector('.menu-toggle');
  const navLinks = document.getElementById('navLinks');
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.querySelector('.sr-only').textContent = 'Abrir menú';
    navLinks.classList.remove('is-open');
  };
  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.querySelector('.sr-only').textContent = isOpen ? 'Abrir menú' : 'Cerrar menú';
    navLinks.classList.toggle('is-open', !isOpen);
  });
  navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });

  /* ── Smooth Scroll for anchor links ──────── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
      }
    });
  });

  /* ── Pricing intent + contact form ─────── */
  const planSelect = document.getElementById('planSelect');
  document.querySelectorAll('[data-plan]').forEach(button => {
    button.addEventListener('click', () => {
      planSelect.value = button.dataset.plan;
    });
  });

  document.getElementById('contactForm').addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const subject = `Consulta QA·LAB — ${data.get('plan')}`;
    const body = [
      'Hola QA·LAB,',
      '',
      `Soy ${data.get('name')} (${data.get('email')}).`,
      `Me interesa: ${data.get('plan')}.`,
      '',
      data.get('message'),
      '',
      'Gracias.'
    ].join('\n');
    window.location.href = `mailto:hola@qalab.dev?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  /* ── Nav background on scroll ─────────────
     (optional enhancement already handled by CSS backdrop-filter)
  ─────────────────────────────────────────── */

});
