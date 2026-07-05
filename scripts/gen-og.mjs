import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, '../public/og.png');

const svg = `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0d0d10"/>
      <stop offset="1" stop-color="#08080a"/>
    </linearGradient>
    <radialGradient id="glow" cx="82%" cy="18%" r="55%">
      <stop offset="0" stop-color="#3fe68c" stop-opacity="0.22"/>
      <stop offset="1" stop-color="#3fe68c" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="glow2" cx="8%" cy="90%" r="55%">
      <stop offset="0" stop-color="#185fa5" stop-opacity="0.28"/>
      <stop offset="1" stop-color="#185fa5" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="dg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#2472c2"/>
      <stop offset="1" stop-color="#0c447c"/>
    </linearGradient>
    <pattern id="grid" width="46" height="46" patternUnits="userSpaceOnUse">
      <path d="M46 0H0V46" fill="none" stroke="#ffffff" stroke-opacity="0.04" stroke-width="1"/>
    </pattern>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <rect width="1200" height="630" fill="url(#glow2)"/>

  <!-- Logo lockup -->
  <g transform="translate(90 96)">
    <rect x="0" y="0" width="72" height="72" rx="18" fill="url(#dg)"/>
    <path d="M20 17h15c12.5 0 20 8 20 19s-7.5 19-20 19H20V17Zm11.5 10v27h3.4c6.8 0 10.2-4.5 10.2-12.4S41.7 27 34.9 27h-3.4Z" fill="#f5f5f3"/>
    <rect x="34" y="22" width="10" height="10" rx="2.2" fill="#3fe68c"/>
    <circle cx="51" cy="39" r="3.4" fill="#3fe68c"/>
    <text x="92" y="34" font-family="Space Grotesk, Arial, sans-serif" font-size="30" font-weight="700" letter-spacing="-1" fill="#f5f5f3">Devoria<tspan fill="#3fe68c">Tech</tspan></text>
    <text x="92" y="60" font-family="Arial, sans-serif" font-size="16" letter-spacing="3" fill="#8a8f96">SOLUTIONS DIGITALES — AFRIQUE</text>
  </g>

  <!-- Headline -->
  <text x="90" y="330" font-family="Space Grotesk, Arial, sans-serif" font-size="82" font-weight="700" letter-spacing="-3" fill="#f5f5f3">Bâtir le digital</text>
  <text x="90" y="420" font-family="Space Grotesk, Arial, sans-serif" font-size="82" font-weight="700" letter-spacing="-3" fill="#3fe68c">qui dure.</text>

  <!-- Sub -->
  <text x="92" y="482" font-family="Arial, sans-serif" font-size="26" fill="#b9bcc0">ERP Odoo · Sites web · Apps mobiles · Automatisation IA</text>

  <!-- Pills -->
  <g font-family="Arial, sans-serif" font-size="20" fill="#cfd3cf">
    <rect x="90" y="520" width="150" height="46" rx="23" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1"/>
    <circle cx="116" cy="543" r="5" fill="#c01d27"/>
    <text x="130" y="550">Maroc</text>
    <rect x="256" y="520" width="200" height="46" rx="23" fill="#ffffff" fill-opacity="0.05" stroke="#ffffff" stroke-opacity="0.1"/>
    <circle cx="282" cy="543" r="5" fill="#f77f00"/>
    <text x="296" y="550">Côte d’Ivoire</text>
  </g>
</svg>`;

await sharp(Buffer.from(svg)).png({ quality: 90 }).toFile(out);
console.log('OG image écrite :', out);
