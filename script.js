// Navigation elements
const nav = document.querySelector('.nav');
const menuToggle = document.querySelector('.menu-toggle');
const yearEl = document.getElementById('year');
const form = document.querySelector('.cta-form');
const note = document.querySelector('.form-note');

// Update footer year
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Mobile menu toggle
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Smooth scroll for anchor links
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;
    const target = document.querySelector(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Email validation helper
const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

// Waitlist form handling
if (form && note) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = form.querySelector('input[type="email"]');
    const message = email?.value.trim() ?? '';

    if (!message) {
      note.textContent = 'Please enter your email to join the waitlist.';
      note.style.color = '#d9534f';
      return;
    }

    if (!isValidEmail(message)) {
      note.textContent = 'Enter a valid email address (e.g., you@example.com).';
      note.style.color = '#d9534f';
      return;
    }

    note.textContent = 'Thanks for joining the waitlist. We will be in touch soon!';
    note.style.color = '#1f7ae0';
    email.value = '';
  });
}

// Fade-in on scroll
const animatedElements = document.querySelectorAll('[data-animate]');
if ('IntersectionObserver' in window && animatedElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add('visible'));
}
