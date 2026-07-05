/* =========================================
   DevoriaTech — Nav & Footer Components
   Inclure AVANT main.js
   ========================================= */

function renderNav(activePage) {
  const pages = [
    { href: "../pages/services.html", fr: "Services", en: "Services" },
    {
      href: "../pages/solutions.html",
      fr: "Solutions Odoo",
      en: "Odoo Solutions",
    },
    { href: "../pages/realisations.html", fr: "Réalisations", en: "Portfolio" },
    { href: "../pages/a-propos.html", fr: "À propos", en: "About" },
  ];

  const links = pages
    .map(
      (p) => `
    <li><a href="${p.href}" data-fr="${p.fr}" data-en="${p.en}" ${activePage === p.fr ? 'class="active"' : ""}>${p.fr}</a></li>
  `,
    )
    .join("");

  document.getElementById("nav-placeholder").innerHTML = `
  <nav>
    <a href="../index.html" class="logo"><img src="../media/logo.png" alt="DevoriaTech" style="height: 48px; width: auto;"></a>
    <ul class="nav-links" id="navLinks">
      ${links}
      <li><a href="../pages/contact.html" class="nav-cta" data-fr="Devis gratuit" data-en="Free quote">Devis gratuit</a></li>
    </ul>
    <div class="nav-right">
      <div class="lang-toggle">
        <button class="lang-btn active" data-lang="fr" onclick="setLang('fr')">FR</button>
        <button class="lang-btn" data-lang="en" onclick="setLang('en')">EN</button>
      </div>
      <button class="hamburger" onclick="toggleMenu()" aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  </nav>
  <div class="mobile-menu" id="mobileMenu">
    ${pages.map((p) => `<a href="${p.href}" data-fr="${p.fr}" data-en="${p.en}" onclick="toggleMenu()">${p.fr}</a>`).join("")}
    <a href="../pages/contact.html" data-fr="Devis gratuit" data-en="Free quote" onclick="toggleMenu()">Devis gratuit</a>
  </div>`;
}

function renderFooter() {
  document.getElementById("footer-placeholder").innerHTML = `
  <footer>
    <div class="footer-inner">
      <a href="../index.html" class="footer-logo"><img src="../media/logo.png" alt="DevoriaTech" style="height: 40px; width: auto;"></a>
      <div class="footer-links">
        <a href="../pages/services.html"     data-fr="Services"     data-en="Services">Services</a>
        <a href="../pages/solutions.html"    data-fr="Solutions Odoo" data-en="Odoo Solutions">Solutions Odoo</a>
        <a href="../pages/realisations.html" data-fr="Réalisations"  data-en="Portfolio">Réalisations</a>
        <a href="../pages/a-propos.html"     data-fr="À propos"      data-en="About">À propos</a>
        <a href="../pages/contact.html"      data-fr="Contact"       data-en="Contact">Contact</a>
        <a href="https://linkedin.com/in/maxwilfred-gak" target="_blank">LinkedIn</a>
      </div>
      <span class="footer-copy">© 2025 DevoriaTech. <span data-fr="Tous droits réservés." data-en="All rights reserved.">Tous droits réservés.</span></span>
    </div>
  </footer>`;
}
