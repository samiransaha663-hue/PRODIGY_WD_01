// ============================
// Navbar: change on scroll
// ============================
const nav = document.getElementById('nav');
const SCROLL_THRESHOLD = 40;

function updateNavOnScroll() {
  if (window.scrollY > SCROLL_THRESHOLD) {
    nav.classList.add('is-scrolled');
  } else {
    nav.classList.remove('is-scrolled');
  }
}

window.addEventListener('scroll', updateNavOnScroll, { passive: true });
updateNavOnScroll(); // run once in case page loads mid-scroll

// ============================
// Scroll reveal animations
// ============================
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target); // animate in once, not every scroll
      }
    });
  },
  { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
);

revealEls.forEach((el) => revealObserver.observe(el));

// ============================
// Mobile menu toggle
// ============================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.classList.toggle('is-open', isOpen);
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close the mobile menu after a link is tapped
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ============================
// CTA form (front-end only demo)
// ============================
const ctaForm = document.getElementById('ctaForm');
const ctaNote = document.getElementById('ctaNote');

ctaForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = ctaForm.querySelector('input[type="email"]').value.trim();

  if (email) {
    ctaNote.textContent = `Thanks — we'll reach out at ${email} shortly.`;
    ctaForm.reset();
  }
});