/* =========================================
   DevoriaTech — Global JavaScript
   ========================================= */

/* ── LANG SWITCH ── */
function setLang(lang) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
  document.querySelectorAll('[data-fr]').forEach(el => {
    const val = el.getAttribute('data-' + lang);
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') el.placeholder = val;
    else el.innerHTML = val;
  });
  document.documentElement.lang = lang;
  localStorage.setItem('dt-lang', lang);
}

/* ── MOBILE MENU ── */
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

/* ── NAV SHADOW ON SCROLL ── */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  if (nav) nav.style.boxShadow = window.scrollY > 10 ? '0 2px 20px rgba(44,44,42,0.08)' : 'none';
});

/* ── SCROLL REVEAL ── */
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.1 });

/* ── ACTIVE NAV LINK ── */
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(a => {
    const href = a.getAttribute('href')?.split('/').pop();
    a.classList.toggle('active', href === path);
  });
}

/* ── INIT ── */
document.addEventListener('DOMContentLoaded', () => {
  // Reveal elements
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));
  // Restore language
  const savedLang = localStorage.getItem('dt-lang') || 'fr';
  setLang(savedLang);
  // Active nav
  setActiveNav();
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
});
