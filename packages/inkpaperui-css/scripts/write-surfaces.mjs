/** Rebuild paper, wood and bamboo in tokens.css.
   Textures stay quiet colour grain. The pen changes with the board: black ink, walnut
   ink (heavier stroke), or bamboo green (finer stroke), each with its own scribble.
   Corners stay so the components do not change shape. */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const paperFill = `
    --ip-bg-page: radial-gradient(rgba(70, 62, 54, 0.055) 0.6px, transparent 0.7px) 0 0 / 5px 7px, radial-gradient(rgba(70, 62, 54, 0.04) 0.45px, transparent 0.55px) 2px 3px / 9px 11px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(rgba(70, 62, 54, 0.07) 0.6px, transparent 0.7px) 0 0 / 5px 7px, radial-gradient(rgba(70, 62, 54, 0.05) 0.45px, transparent 0.55px) 2px 3px / 9px 11px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(rgba(70, 62, 54, 0.08) 0.6px, transparent 0.7px) 0 0 / 5px 7px, radial-gradient(rgba(70, 62, 54, 0.05) 0.45px, transparent 0.55px) 2px 3px / 9px 11px, var(--color-ip-paper-deep);`;

const tile = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

/* Filled colour only. Strokes and dark flecks read as dirt or as lines through the type. */
const oakTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="280" height="168" viewBox="0 0 280 168">
  <path fill="rgba(150,98,46,0.14)" d="M0 26c46-14 92 16 150 1s86-16 130 6v7c-44-18-96 12-150 0S52 20 0 36z"/>
  <path fill="rgba(128,82,34,0.12)" d="M0 72c54-18 96 20 158 2s78-12 122 10v5c-48-16-96 10-150-1S58 64 0 80z"/>
  <path fill="rgba(168,116,58,0.11)" d="M0 118c48-10 104 16 162 2s78-8 118 7v7c-44-12-100 12-160 0S54 112 0 128z"/>
  <path fill="rgba(140,90,42,0.1)" d="M78 168c18-46 36-86 62-128 26 42 44 82 62 128 6 0-8-36-28-74-18-34-28-42-34-42s-16 8-34 42c-20 38-34 74-28 74z"/>
  <path fill="rgba(160,108,52,0.09)" d="M104 168c12-34 24-64 36-96 12 32 24 62 36 96 4 0-6-26-16-54-10-26-16-32-20-32s-10 6-20 32c-10 28-20 54-16 54z"/>
  <g fill="rgba(120,76,34,0.22)">
    <ellipse cx="28" cy="40" rx="1.5" ry="0.7"/><ellipse cx="62" cy="44" rx="1.2" ry="0.55"/>
    <ellipse cx="118" cy="30" rx="1.4" ry="0.6"/><ellipse cx="176" cy="86" rx="1.5" ry="0.65"/>
    <ellipse cx="214" cy="48" rx="1.2" ry="0.5"/><ellipse cx="246" cy="122" rx="1.4" ry="0.6"/>
    <ellipse cx="84" cy="104" rx="1.3" ry="0.55"/><ellipse cx="150" cy="140" rx="1.2" ry="0.5"/>
  </g>
</svg>`);

const pineTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="280" viewBox="0 0 240 280">
  <defs>
    <linearGradient id="plank" x1="0" x2="1">
      <stop offset="0" stop-color="rgba(110,86,54,0.2)"/>
      <stop offset="0.05" stop-color="rgba(110,86,54,0)"/>
      <stop offset="0.46" stop-color="rgba(150,120,78,0.05)"/>
      <stop offset="0.5" stop-color="rgba(96,74,46,0.22)"/>
      <stop offset="0.55" stop-color="rgba(110,86,54,0)"/>
      <stop offset="0.94" stop-color="rgba(110,86,54,0)"/>
      <stop offset="1" stop-color="rgba(96,74,46,0.22)"/>
    </linearGradient>
  </defs>
  <rect width="240" height="280" fill="url(#plank)"/>
  <path fill="rgba(124,92,52,0.13)" d="M28 0c3 40-4 86 2 150s-3 80 2 130h5c-2-44 5-92-1-146S32 44 30 0z"/>
  <path fill="rgba(132,100,60,0.1)" d="M78 0c-4 52 6 104-2 176s5 68-1 104h4c2-32-4-76 2-132s-4-96 1-148z"/>
  <path fill="rgba(124,92,52,0.12)" d="M156 0c4 48-5 100 2 168s-3 72 1 112h5c-1-36 4-80-2-140S158 48 160 0z"/>
  <path fill="rgba(140,108,68,0.09)" d="M204 0c5 44-3 108 3 180s-4 60 1 100h6c-2-32 4-72-2-128S202 48 206 0z"/>
  <ellipse cx="74" cy="64" rx="18" ry="14" fill="rgba(138,94,48,0.18)"/>
  <ellipse cx="74" cy="64" rx="8" ry="6" fill="rgba(112,72,34,0.16)"/>
  <ellipse cx="186" cy="188" rx="15" ry="12" fill="rgba(138,94,48,0.16)"/>
  <ellipse cx="186" cy="188" rx="6" ry="5" fill="rgba(112,72,34,0.15)"/>
</svg>`);

const teakTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="240" height="52" viewBox="0 0 240 52">
  <path fill="rgba(168,108,40,0.16)" d="M0 8c44-6 78 8 124 1s74-8 116 4v4c-42-10-80 6-124 0S48 10 0 16z"/>
  <path fill="rgba(146,90,28,0.13)" d="M0 24c36 5 86-7 132 0s74 7 108-2v4c-36 6-78-5-124 0S40 32 0 30z"/>
  <path fill="rgba(180,122,48,0.12)" d="M0 40c52-4 90 6 146 0s64-5 94 3v4c-36-6-90 5-146 0S48 42 0 48z"/>
  <g fill="rgba(130,82,30,0.2)">
    <ellipse cx="36" cy="18" rx="1.3" ry="0.55"/><ellipse cx="92" cy="30" rx="1.2" ry="0.5"/>
    <ellipse cx="150" cy="14" rx="1.4" ry="0.55"/><ellipse cx="204" cy="36" rx="1.2" ry="0.5"/>
  </g>
</svg>`);

const woodFill = `
    --ip-bg-page: ${oakTile} 0 0 / 240px 100px, var(--color-ip-paper);
    --ip-bg-paper: ${oakTile} 0 0 / 240px 100px, var(--color-ip-paper);
    --ip-bg-paper-deep: linear-gradient(rgba(90, 60, 30, 0.05), rgba(90, 60, 30, 0.05)), ${oakTile} 0 0 / 240px 100px, var(--color-ip-paper-deep);`;

const pinewoodFill = `
    --ip-bg-page: ${pineTile} 0 0 / 240px 280px, var(--color-ip-paper);
    --ip-bg-paper: ${pineTile} 0 0 / 240px 280px, var(--color-ip-paper);
    --ip-bg-paper-deep: linear-gradient(rgba(80, 64, 40, 0.05), rgba(80, 64, 40, 0.05)), ${pineTile} 0 0 / 240px 280px, var(--color-ip-paper-deep);`;

const teakFill = `
    --ip-bg-page: ${teakTile} 0 0 / 240px 52px, var(--color-ip-paper);
    --ip-bg-paper: ${teakTile} 0 0 / 240px 52px, var(--color-ip-paper);
    --ip-bg-paper-deep: linear-gradient(rgba(120, 80, 30, 0.05), rgba(120, 80, 30, 0.05)), ${teakTile} 0 0 / 240px 52px, var(--color-ip-paper-deep);`;

const bambooTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="78" height="132" viewBox="0 0 78 132">
  <defs>
    <linearGradient id="culm" x1="0" x2="1">
      <stop offset="0" stop-color="#e6d4b6"/>
      <stop offset="0.14" stop-color="#f6efe2"/>
      <stop offset="0.4" stop-color="#fbf6ee"/>
      <stop offset="0.72" stop-color="#efe2cc"/>
      <stop offset="1" stop-color="#e4d2b6"/>
    </linearGradient>
  </defs>
  <rect width="78" height="132" fill="url(#culm)"/>
  <rect y="60" width="78" height="7" fill="#e2d0b0"/>
  <rect y="62.5" width="78" height="2" fill="#f8f3ea"/>
  <rect width="2" height="132" fill="#e6d4b6"/>
</svg>`);

const matTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="180" height="36" viewBox="0 0 180 36">
  <defs>
    <linearGradient id="skin" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#fbf6ee"/>
      <stop offset="0.38" stop-color="#f4ead8"/>
      <stop offset="0.82" stop-color="#eadcc6"/>
      <stop offset="1" stop-color="#e4d4bc"/>
    </linearGradient>
  </defs>
  <rect width="180" height="36" fill="url(#skin)"/>
  <rect y="33" width="180" height="3" fill="#e2d0b0"/>
  <rect x="86" y="5" width="2" height="7" rx="1" fill="rgba(120,82,40,0.35)"/>
  <rect x="86" y="22" width="2" height="7" rx="1" fill="rgba(120,82,40,0.35)"/>
</svg>`);

const weaveTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="96" height="40" viewBox="0 0 96 40">
  <rect width="96" height="40" fill="#e6d4b6"/>
  <rect y="4" width="96" height="12" rx="2" fill="#f8f1e4"/>
  <rect y="24" width="96" height="12" rx="2" fill="#f8f1e4"/>
  <rect x="18" width="8" height="20" rx="2" fill="#e2d0b0"/>
  <rect x="62" width="8" height="20" rx="2" fill="#e2d0b0"/>
  <rect x="40" y="20" width="8" height="20" rx="2" fill="#e2d0b0"/>
  <rect x="84" y="20" width="8" height="20" rx="2" fill="#e2d0b0"/>
</svg>`);

const bambooFill = `
    --ip-bg-page: ${bambooTile} 0 0 / 78px 132px;
    --ip-bg-paper: ${bambooTile} 0 0 / 78px 132px;
    --ip-bg-paper-deep: linear-gradient(rgba(100, 70, 30, 0.06), rgba(100, 70, 30, 0.06)), ${bambooTile} 0 0 / 78px 132px;`;

const xuanFill = `
    --ip-bg-page: radial-gradient(ellipse at 30% 40%, rgba(150, 120, 70, 0.07), transparent 62%) 0 0 / 200px 150px, radial-gradient(ellipse at 72% 62%, rgba(120, 90, 50, 0.055), transparent 58%) 60px 40px / 240px 170px, radial-gradient(rgba(50, 40, 28, 0.05) 0.4px, transparent 0.5px) 0 0 / 6px 8px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 30% 40%, rgba(150, 120, 70, 0.09), transparent 62%) 0 0 / 200px 150px, radial-gradient(ellipse at 72% 62%, rgba(120, 90, 50, 0.07), transparent 58%) 60px 40px / 240px 170px, radial-gradient(rgba(50, 40, 28, 0.06) 0.4px, transparent 0.5px) 0 0 / 6px 8px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 30% 40%, rgba(150, 120, 70, 0.1), transparent 62%) 0 0 / 200px 150px, radial-gradient(ellipse at 72% 62%, rgba(120, 90, 50, 0.08), transparent 58%) 60px 40px / 240px 170px, radial-gradient(rgba(50, 40, 28, 0.07) 0.4px, transparent 0.5px) 0 0 / 6px 8px, var(--color-ip-paper-deep);`;

const gridFill = `
    --ip-bg-page: repeating-linear-gradient(to right, transparent 0 19px, rgba(86, 126, 176, 0.28) 19px 20px), repeating-linear-gradient(to bottom, transparent 0 19px, rgba(86, 126, 176, 0.28) 19px 20px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to right, transparent 0 19px, rgba(86, 126, 176, 0.34) 19px 20px), repeating-linear-gradient(to bottom, transparent 0 19px, rgba(86, 126, 176, 0.34) 19px 20px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to right, transparent 0 19px, rgba(86, 126, 176, 0.3) 19px 20px), repeating-linear-gradient(to bottom, transparent 0 19px, rgba(86, 126, 176, 0.3) 19px 20px), var(--color-ip-paper-deep);`;

const jiugongFill = `
    --ip-bg-page: repeating-linear-gradient(to right, transparent 0 11px, rgba(176, 48, 42, 0.18) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.18) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.42) 35px 36px), repeating-linear-gradient(to bottom, transparent 0 11px, rgba(176, 48, 42, 0.18) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.18) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.42) 35px 36px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to right, transparent 0 11px, rgba(176, 48, 42, 0.24) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.24) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.5) 35px 36px), repeating-linear-gradient(to bottom, transparent 0 11px, rgba(176, 48, 42, 0.24) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.24) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.5) 35px 36px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to right, transparent 0 11px, rgba(176, 48, 42, 0.2) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.2) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.44) 35px 36px), repeating-linear-gradient(to bottom, transparent 0 11px, rgba(176, 48, 42, 0.2) 11px 12px, transparent 12px 23px, rgba(176, 48, 42, 0.2) 23px 24px, transparent 24px 35px, rgba(168, 36, 32, 0.44) 35px 36px), var(--color-ip-paper-deep);`;

const vellumFill = `
    --ip-bg-page: radial-gradient(ellipse at 28% 36%, rgba(170, 130, 60, 0.1), transparent 60%) 0 0 / 220px 160px, radial-gradient(ellipse at 74% 68%, rgba(140, 100, 40, 0.08), transparent 58%) 50px 30px / 260px 180px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 28% 36%, rgba(170, 130, 60, 0.13), transparent 60%) 0 0 / 220px 160px, radial-gradient(ellipse at 74% 68%, rgba(140, 100, 40, 0.1), transparent 58%) 50px 30px / 260px 180px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 28% 36%, rgba(170, 130, 60, 0.14), transparent 60%) 0 0 / 220px 160px, var(--color-ip-paper-deep);`;

const matFill = `
    --ip-bg-page: ${matTile} 0 0 / 180px 36px;
    --ip-bg-paper: ${matTile} 0 0 / 180px 36px;
    --ip-bg-paper-deep: linear-gradient(rgba(100, 70, 30, 0.05), rgba(100, 70, 30, 0.05)), ${matTile} 0 0 / 180px 36px;`;

const weaveFill = `
    --ip-bg-page: ${weaveTile} 0 0 / 96px 40px;
    --ip-bg-paper: ${weaveTile} 0 0 / 96px 40px;
    --ip-bg-paper-deep: linear-gradient(rgba(100, 70, 30, 0.05), rgba(100, 70, 30, 0.05)), ${weaveTile} 0 0 / 96px 40px;`;

const steelTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="32" height="80" viewBox="0 0 32 80"><defs><linearGradient id="st" x1="0" x2="1"><stop offset="0" stop-color="#dde3ea"/><stop offset="0.18" stop-color="#f4f6f9"/><stop offset="0.45" stop-color="#e6ebf1"/><stop offset="0.72" stop-color="#f7f8fa"/><stop offset="1" stop-color="#e0e5eb"/></linearGradient></defs><rect width="32" height="80" fill="url(#st)"/></svg>`);

const brushTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="80" height="14" viewBox="0 0 80 14"><defs><linearGradient id="br" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f7f7f8"/><stop offset="0.45" stop-color="#e6e8eb"/><stop offset="1" stop-color="#f3f4f5"/></linearGradient></defs><rect width="80" height="14" fill="url(#br)"/></svg>`);

const silverTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="48" height="100" viewBox="0 0 48 100"><defs><linearGradient id="sv" x1="0" x2="1"><stop offset="0" stop-color="#e7ebf0"/><stop offset="0.28" stop-color="#fbfcfe"/><stop offset="0.55" stop-color="#eef1f5"/><stop offset="1" stop-color="#e3e7ed"/></linearGradient></defs><rect width="48" height="100" fill="url(#sv)"/></svg>`);

const brassTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="90" height="18" viewBox="0 0 90 18"><defs><linearGradient id="bs" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf6e8"/><stop offset="0.5" stop-color="#e8d7b4"/><stop offset="1" stop-color="#f6edd8"/></linearGradient></defs><rect width="90" height="18" fill="url(#bs)"/></svg>`);

const bronzeTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="90" height="20" viewBox="0 0 90 20"><defs><linearGradient id="bz" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f6ebe2"/><stop offset="0.48" stop-color="#e4d2b6"/><stop offset="1" stop-color="#f0e2d4"/></linearGradient></defs><rect width="90" height="20" fill="url(#bz)"/></svg>`);

const giltTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="16" viewBox="0 0 120 16"><defs><linearGradient id="gi" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fbf6e6"/><stop offset="0.45" stop-color="#ead6a8"/><stop offset="1" stop-color="#f6ecd4"/></linearGradient></defs><rect width="120" height="16" fill="url(#gi)"/></svg>`);

const linenTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><rect width="8" height="8" fill="#f7f2ea"/><rect width="4" height="4" fill="#e8e0d2"/><rect x="4" y="4" width="4" height="4" fill="#e8e0d2"/></svg>`);

const canvasTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><rect width="24" height="24" fill="#efe4d4"/><rect y="2" width="24" height="8" rx="1" fill="#f6efe4"/><rect y="14" width="24" height="8" rx="1" fill="#f6efe4"/><rect x="2" width="6" height="12" rx="1" fill="#e4d8c4"/><rect x="14" y="12" width="6" height="12" rx="1" fill="#e4d8c4"/></svg>`);

const glossFill = `
    --ip-bg-page: repeating-linear-gradient(118deg, #fbfcfe 0px, #e6edf5 70px, #f8fafc 120px, #e4ebf3 180px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(118deg, #f7f9fc 0px, #e3eaf3 70px, #f6f8fb 120px, #e0e7f0 180px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(118deg, #eef2f7 0px, #e4e8ee 70px, #eef2f7 140px), var(--color-ip-paper-deep);`;

const matteFill = `
    --ip-bg-page: radial-gradient(rgba(70, 80, 100, 0.09) 0.45px, transparent 0.6px) 0 0 / 3px 4px, radial-gradient(rgba(70, 80, 100, 0.05) 0.35px, transparent 0.5px) 1px 2px / 5px 6px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(rgba(70, 80, 100, 0.11) 0.45px, transparent 0.6px) 0 0 / 3px 4px, radial-gradient(rgba(70, 80, 100, 0.06) 0.35px, transparent 0.5px) 1px 2px / 5px 6px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(rgba(70, 80, 100, 0.12) 0.45px, transparent 0.6px) 0 0 / 3px 4px, var(--color-ip-paper-deep);`;

const ribFill = `
    --ip-bg-page: repeating-linear-gradient(to bottom, #f7f9fb 0px, #e6ebf2 8px, #f7f9fb 16px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to bottom, #f5f7fa 0px, #e3e8f0 8px, #f5f7fa 16px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to bottom, #eef1f5 0px, #e4e8ee 8px, #eef1f5 16px), var(--color-ip-paper-deep);`;

const steelFill = `
    --ip-bg-page: ${steelTile} 0 0 / 32px 80px;
    --ip-bg-paper: ${steelTile} 0 0 / 32px 80px;
    --ip-bg-paper-deep: linear-gradient(rgba(60, 70, 90, 0.05), rgba(60, 70, 90, 0.05)), ${steelTile} 0 0 / 32px 80px;`;

const brushedFill = `
    --ip-bg-page: ${brushTile} 0 0 / 80px 14px;
    --ip-bg-paper: ${brushTile} 0 0 / 80px 14px;
    --ip-bg-paper-deep: linear-gradient(rgba(60, 64, 72, 0.05), rgba(60, 64, 72, 0.05)), ${brushTile} 0 0 / 80px 14px;`;

const silverFill = `
    --ip-bg-page: ${silverTile} 0 0 / 48px 100px;
    --ip-bg-paper: ${silverTile} 0 0 / 48px 100px;
    --ip-bg-paper-deep: linear-gradient(rgba(70, 80, 100, 0.05), rgba(70, 80, 100, 0.05)), ${silverTile} 0 0 / 48px 100px;`;

const brassFill = `
    --ip-bg-page: ${brassTile} 0 0 / 90px 18px;
    --ip-bg-paper: ${brassTile} 0 0 / 90px 18px;
    --ip-bg-paper-deep: linear-gradient(rgba(120, 90, 30, 0.05), rgba(120, 90, 30, 0.05)), ${brassTile} 0 0 / 90px 18px;`;

const bronzeFill = `
    --ip-bg-page: ${bronzeTile} 0 0 / 90px 20px;
    --ip-bg-paper: ${bronzeTile} 0 0 / 90px 20px;
    --ip-bg-paper-deep: linear-gradient(rgba(110, 70, 40, 0.05), rgba(110, 70, 40, 0.05)), ${bronzeTile} 0 0 / 90px 20px;`;

const giltFill = `
    --ip-bg-page: ${giltTile} 0 0 / 120px 16px;
    --ip-bg-paper: ${giltTile} 0 0 / 120px 16px;
    --ip-bg-paper-deep: linear-gradient(rgba(120, 90, 30, 0.05), rgba(120, 90, 30, 0.05)), ${giltTile} 0 0 / 120px 16px;`;

const linenFill = `
    --ip-bg-page: ${linenTile} 0 0 / 8px 8px;
    --ip-bg-paper: ${linenTile} 0 0 / 8px 8px;
    --ip-bg-paper-deep: linear-gradient(rgba(90, 70, 40, 0.05), rgba(90, 70, 40, 0.05)), ${linenTile} 0 0 / 8px 8px;`;

const silkFill = `
    --ip-bg-page: repeating-linear-gradient(118deg, #fbf8f4 0px, #f0e6da 22px, #fbf8f4 44px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(118deg, #faf6f2 0px, #eadfd2 22px, #faf6f2 44px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(118deg, #f3ece4 0px, #e6ddd0 22px, #f3ece4 44px), var(--color-ip-paper-deep);`;

const brickTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="56" height="32" viewBox="0 0 56 32"><rect width="56" height="32" fill="#e8d4c6"/><rect x="1" y="1" width="26" height="14" fill="#f7eee6"/><rect x="29" y="1" width="26" height="14" fill="#f3e6da"/><rect x="-12" y="17" width="26" height="14" fill="#f3e6da"/><rect x="16" y="17" width="26" height="14" fill="#f7eee6"/><rect x="44" y="17" width="26" height="14" fill="#f3e6da"/></svg>`);

const glassFill = `
    --ip-bg-page: linear-gradient(128deg, rgba(255, 255, 255, 0.55), transparent 42%), repeating-linear-gradient(128deg, #f7fbfe 0px, #dceaf6 90px, #f4f8fc 150px), var(--color-ip-paper);
    --ip-bg-paper: linear-gradient(128deg, rgba(255, 255, 255, 0.5), transparent 42%), repeating-linear-gradient(128deg, #f5f9fd 0px, #d5e4f0 90px, #f2f7fb 150px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(128deg, #eaf2f8 0px, #d5e4f0 90px, #eaf2f8 150px), var(--color-ip-paper-deep);`;

const fireFill = `
    --ip-bg-page: radial-gradient(ellipse at 14% 16%, rgba(240, 110, 30, 0.18), transparent 30%), radial-gradient(ellipse at 72% 28%, rgba(220, 70, 20, 0.14), transparent 26%), radial-gradient(ellipse at 48% 108%, rgba(210, 70, 16, 0.22), transparent 52%), var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 20% 24%, rgba(230, 90, 20, 0.2), transparent 32%), radial-gradient(ellipse at 80% 70%, rgba(210, 70, 16, 0.14), transparent 30%), var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 80%, rgba(190, 60, 16, 0.18), transparent 48%), var(--color-ip-paper-deep);`;

const waterFill = `
    --ip-bg-page: repeating-linear-gradient(to bottom, #f7fbfe 0px, #d4e6f2 16px, #f4f9fc 32px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to bottom, #f5fafd 0px, #cfe0ef 16px, #f2f8fc 32px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to bottom, #e8f2f8 0px, #d4e6f2 16px, #e8f2f8 32px), var(--color-ip-paper-deep);`;

const windFill = `
    --ip-bg-page: repeating-linear-gradient(102deg, transparent 0 34px, rgba(80, 100, 90, 0.07) 34px 58px, transparent 58px 96px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(102deg, transparent 0 34px, rgba(70, 90, 80, 0.09) 34px 58px, transparent 58px 96px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(102deg, transparent 0 34px, rgba(70, 90, 80, 0.1) 34px 58px, transparent 58px 96px), var(--color-ip-paper-deep);`;

const earthFill = `
    --ip-bg-page: radial-gradient(ellipse at 28% 40%, rgba(120, 80, 40, 0.1), transparent 62%) 0 0 / 180px 140px, radial-gradient(ellipse at 72% 68%, rgba(90, 60, 30, 0.08), transparent 58%) 40px 30px / 220px 160px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 28% 40%, rgba(120, 80, 40, 0.13), transparent 62%) 0 0 / 180px 140px, radial-gradient(ellipse at 72% 68%, rgba(90, 60, 30, 0.1), transparent 58%) 40px 30px / 220px 160px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 28% 40%, rgba(110, 70, 30, 0.14), transparent 62%) 0 0 / 180px 140px, var(--color-ip-paper-deep);`;

const ruledFill = `
    --ip-bg-page: repeating-linear-gradient(to bottom, #fbf8f1 0 26px, #d4e2f0 26px 28px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to bottom, #f7f3ea 0 26px, #cfe0ef 26px 28px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to bottom, #f0eadc 0 26px, #d4e2f0 26px 28px), var(--color-ip-paper-deep);`;

const marbleFill = `
    --ip-bg-page: radial-gradient(ellipse at 18% 22%, rgba(150, 160, 172, 0.2), transparent 34%), radial-gradient(ellipse at 72% 16%, rgba(168, 174, 182, 0.16), transparent 26%), radial-gradient(ellipse at 58% 78%, rgba(140, 150, 162, 0.18), transparent 40%), radial-gradient(ellipse at 88% 58%, rgba(160, 168, 176, 0.12), transparent 30%), var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 22% 30%, rgba(140, 150, 162, 0.22), transparent 36%), radial-gradient(ellipse at 76% 70%, rgba(150, 158, 168, 0.16), transparent 32%), var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 40%, rgba(130, 140, 152, 0.16), transparent 46%), var(--color-ip-paper-deep);`;

const stoneFill = `
    --ip-bg-page: radial-gradient(circle at 20% 30%, rgba(80, 78, 70, 0.1) 0 1px, transparent 1.6px) 0 0 / 8px 10px, radial-gradient(circle at 70% 60%, rgba(70, 68, 60, 0.08) 0 1px, transparent 1.4px) 3px 4px / 11px 9px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(circle at 20% 30%, rgba(80, 78, 70, 0.13) 0 1px, transparent 1.6px) 0 0 / 8px 10px, radial-gradient(circle at 70% 60%, rgba(70, 68, 60, 0.1) 0 1px, transparent 1.4px) 3px 4px / 11px 9px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(circle at 20% 30%, rgba(70, 68, 60, 0.14) 0 1px, transparent 1.6px) 0 0 / 8px 10px, var(--color-ip-paper-deep);`;

const ceramicFill = `
    --ip-bg-page: radial-gradient(ellipse at 28% 0%, rgba(255, 255, 255, 0.85), transparent 46%), linear-gradient(165deg, rgba(255, 255, 255, 0.45), transparent 42%), var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 30% 0%, rgba(255, 255, 255, 0.8), transparent 48%), var(--color-ip-paper);
    --ip-bg-paper-deep: linear-gradient(165deg, #f7f4f0, #efeae3), var(--color-ip-paper-deep);`;

const terracottaFill = `
    --ip-bg-page: radial-gradient(ellipse at 30% 40%, rgba(160, 70, 40, 0.1), transparent 62%) 0 0 / 180px 140px, radial-gradient(ellipse at 74% 70%, rgba(140, 60, 30, 0.08), transparent 55%) 30px 20px / 200px 150px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 30% 40%, rgba(160, 70, 40, 0.13), transparent 62%) 0 0 / 180px 140px, radial-gradient(ellipse at 74% 70%, rgba(140, 60, 30, 0.1), transparent 55%) 30px 20px / 200px 150px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 50%, rgba(140, 55, 28, 0.12), transparent 60%), var(--color-ip-paper-deep);`;

const corkFill = `
    --ip-bg-page: radial-gradient(circle at 30% 40%, rgba(120, 80, 30, 0.14) 0 1.2px, transparent 2px) 0 0 / 7px 7px, radial-gradient(circle at 70% 60%, rgba(100, 70, 30, 0.1) 0 1px, transparent 1.6px) 3px 2px / 9px 8px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(circle at 30% 40%, rgba(120, 80, 30, 0.16) 0 1.2px, transparent 2px) 0 0 / 7px 7px, radial-gradient(circle at 70% 60%, rgba(100, 70, 30, 0.12) 0 1px, transparent 1.6px) 3px 2px / 9px 8px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(circle at 30% 40%, rgba(110, 70, 24, 0.16) 0 1.2px, transparent 2px) 0 0 / 7px 7px, var(--color-ip-paper-deep);`;

const sandTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="220" height="120" viewBox="0 0 220 120"><rect width="220" height="120" fill="#f7f0d8"/><path fill="#f3e6c0" d="M0 34c44-16 78 10 124-6s68-8 96 8v16c-32-12-70 10-116 2S48 46 0 54z"/><path fill="#efe0b4" d="M0 78c40-18 72 8 118-10s64 2 102 10v14c-40-10-78 12-122 2S46 86 0 96z"/><path fill="#f1e4ba" d="M0 108c50-12 86 8 132-6s58 2 88 8v10H0z"/></svg>`);

const sandFill = `
    --ip-bg-page: ${sandTile} 0 0 / 220px 120px;
    --ip-bg-paper: ${sandTile} 0 0 / 220px 120px;
    --ip-bg-paper-deep: linear-gradient(rgba(140, 110, 40, 0.05), rgba(140, 110, 40, 0.05)), ${sandTile} 0 0 / 220px 120px;`;

const iceFill = `
    --ip-bg-page: repeating-linear-gradient(132deg, #f7fcfe 0 22px, #d9e8ef 22px 40px, #f4fafc 40px 78px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(132deg, #f4fafc 0 22px, #d4e4ee 22px 40px, #f2f8fc 40px 78px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(132deg, #eaf3f7 0 22px, #d9e8ef 22px 40px, #eaf3f7 40px 78px), var(--color-ip-paper-deep);`;

const denimFill = `
    --ip-bg-page: repeating-linear-gradient(45deg, #eef3fa 0 7px, #e3ecf6 7px 9px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(45deg, #eaf0f8 0 7px, #dce7f4 7px 9px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(45deg, #e4ecf6 0 7px, #d8e3f2 7px 9px), var(--color-ip-paper-deep);`;

const leatherTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="72" height="52" viewBox="0 0 72 52"><rect width="72" height="52" fill="#f4e8d8"/><ellipse cx="12" cy="12" rx="8" ry="6" fill="#efe0cc"/><ellipse cx="32" cy="10" rx="7" ry="5" fill="#f7eee2"/><ellipse cx="52" cy="14" rx="9" ry="6" fill="#ead8c2"/><ellipse cx="18" cy="32" rx="8" ry="6" fill="#f3e4d2"/><ellipse cx="40" cy="34" rx="9" ry="6" fill="#efe0cc"/><ellipse cx="60" cy="36" rx="7" ry="5" fill="#f6ebe0"/></svg>`);

const wickerTile = tile(`<svg xmlns="http://www.w3.org/2000/svg" width="120" height="64" viewBox="0 0 120 64"><rect width="120" height="64" fill="#f7f0e2"/><rect y="8" width="120" height="16" fill="#f1e6d0"/><rect y="40" width="120" height="16" fill="#efe2cc"/><rect x="10" width="16" height="64" fill="#f4ead8"/><rect x="52" width="16" height="64" fill="#f0e4ce"/><rect x="94" width="16" height="64" fill="#f3e8d4"/></svg>`);

const leatherFill = `
    --ip-bg-page: ${leatherTile} 0 0 / 72px 52px;
    --ip-bg-paper: ${leatherTile} 0 0 / 72px 52px;
    --ip-bg-paper-deep: linear-gradient(rgba(110, 70, 30, 0.05), rgba(110, 70, 30, 0.05)), ${leatherTile} 0 0 / 72px 52px;`;

const feltFill = `
    --ip-bg-page: radial-gradient(circle at 25% 35%, rgba(100, 80, 60, 0.07) 0 0.6px, transparent 1px) 0 0 / 6px 9px, radial-gradient(circle at 70% 60%, rgba(90, 70, 55, 0.05) 0 0.5px, transparent 0.9px) 3px 4px / 8px 7px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(circle at 25% 35%, rgba(100, 80, 60, 0.09) 0 0.6px, transparent 1px) 0 0 / 6px 9px, radial-gradient(circle at 70% 60%, rgba(90, 70, 55, 0.06) 0 0.5px, transparent 0.9px) 3px 4px / 8px 7px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(circle at 25% 35%, rgba(90, 70, 50, 0.1) 0 0.6px, transparent 1px) 0 0 / 6px 9px, var(--color-ip-paper-deep);`;

const concreteFill = `
    --ip-bg-page: radial-gradient(circle at 30% 40%, #e3e5e7 0 1.1px, transparent 1.3px) 0 0 / 11px 13px, radial-gradient(circle at 75% 25%, #e7e9eb 0 0.7px, transparent 0.9px) 5px 6px / 15px 11px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(circle at 30% 40%, #e0e2e4 0 1.1px, transparent 1.3px) 0 0 / 11px 13px, radial-gradient(circle at 75% 25%, #e4e6e8 0 0.7px, transparent 0.9px) 5px 6px / 15px 11px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(circle at 30% 40%, #dfe1e3 0 1.1px, transparent 1.3px) 0 0 / 11px 13px, var(--color-ip-paper-deep);`;

const plasterFill = `
    --ip-bg-page: radial-gradient(ellipse at 28% 36%, rgba(120, 110, 100, 0.07), transparent 58%) 0 0 / 200px 150px, radial-gradient(ellipse at 74% 70%, rgba(140, 130, 118, 0.06), transparent 52%) 40px 20px / 220px 160px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 28% 36%, rgba(120, 110, 100, 0.09), transparent 58%) 0 0 / 200px 150px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 50%, rgba(110, 100, 90, 0.08), transparent 55%), var(--color-ip-paper-deep);`;

const rustFill = `
    --ip-bg-page: radial-gradient(ellipse at 22% 30%, rgba(180, 90, 40, 0.12), transparent 42%) 0 0 / 160px 120px, radial-gradient(ellipse at 72% 64%, rgba(160, 70, 30, 0.1), transparent 46%) 30px 20px / 180px 130px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 24% 34%, rgba(170, 80, 30, 0.14), transparent 44%) 0 0 / 160px 120px, radial-gradient(ellipse at 76% 68%, rgba(150, 60, 24, 0.1), transparent 46%) 30px 20px / 180px 130px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 50%, rgba(150, 60, 24, 0.12), transparent 50%), var(--color-ip-paper-deep);`;

const wickerFill = `
    --ip-bg-page: ${wickerTile} 0 0 / 120px 64px;
    --ip-bg-paper: ${wickerTile} 0 0 / 120px 64px;
    --ip-bg-paper-deep: linear-gradient(rgba(120, 90, 40, 0.05), rgba(120, 90, 40, 0.05)), ${wickerTile} 0 0 / 120px 64px;`;

const cardboardFill = `
    --ip-bg-page: repeating-linear-gradient(to bottom, #f6ecde 0 12px, #e8d8c0 12px 16px, #f3e6d4 16px 28px), var(--color-ip-paper);
    --ip-bg-paper: repeating-linear-gradient(to bottom, #f3e8d8 0 12px, #e4d4bc 12px 16px, #f0e2d0 16px 28px), var(--color-ip-paper);
    --ip-bg-paper-deep: repeating-linear-gradient(to bottom, #efe2d2 0 12px, #e4d4bc 12px 16px, #eadcc8 16px 28px), var(--color-ip-paper-deep);`;

const snowFill = `
    --ip-bg-page: radial-gradient(ellipse at 18% 78%, rgba(170, 190, 200, 0.16), transparent 46%), radial-gradient(ellipse at 74% 28%, rgba(190, 206, 214, 0.12), transparent 40%), var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 24% 70%, rgba(160, 184, 196, 0.16), transparent 48%), radial-gradient(ellipse at 80% 24%, rgba(180, 198, 208, 0.12), transparent 38%), var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 80%, rgba(150, 176, 188, 0.14), transparent 50%), var(--color-ip-paper-deep);`;

const bricksFill = `
    --ip-bg-page: ${brickTile} 0 0 / 56px 32px;
    --ip-bg-paper: ${brickTile} 0 0 / 56px 32px;
    --ip-bg-paper-deep: linear-gradient(rgba(110, 70, 40, 0.05), rgba(110, 70, 40, 0.05)), ${brickTile} 0 0 / 56px 32px;`;

const canvasFill = `
    --ip-bg-page: ${canvasTile} 0 0 / 24px 24px;
    --ip-bg-paper: ${canvasTile} 0 0 / 24px 24px;
    --ip-bg-paper-deep: linear-gradient(rgba(90, 70, 40, 0.05), rgba(90, 70, 40, 0.05)), ${canvasTile} 0 0 / 24px 24px;`;

const kraftFill = `
    --ip-bg-page: radial-gradient(ellipse at 40% 45%, rgba(90, 55, 25, 0.1), transparent 65%) 0 0 / 180px 140px, radial-gradient(ellipse at 75% 30%, rgba(70, 40, 15, 0.08), transparent 60%) 40px 70px / 220px 160px, var(--color-ip-paper);
    --ip-bg-paper: radial-gradient(ellipse at 40% 45%, rgba(90, 55, 25, 0.13), transparent 65%) 0 0 / 180px 140px, radial-gradient(ellipse at 75% 30%, rgba(70, 40, 15, 0.1), transparent 60%) 40px 70px / 220px 160px, var(--color-ip-paper);
    --ip-bg-paper-deep: radial-gradient(ellipse at 40% 45%, rgba(90, 55, 25, 0.14), transparent 65%) 0 0 / 180px 140px, radial-gradient(ellipse at 75% 30%, rgba(70, 40, 15, 0.11), transparent 60%) 40px 70px / 220px 160px, var(--color-ip-paper-deep);`;


const enc = (svg) => `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
const scribble = (d, width, cap = 'round') =>
  enc(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 16" preserveAspectRatio="none"><path d="${d}" fill="none" stroke="black" stroke-width="${width}" stroke-linecap="${cap}" stroke-linejoin="${cap}"/></svg>`,
  );
const pen = scribble('M2 9C18 6 30 12 48 8S78 4 96 10 112 6 118 8', '1.6');
const walnut = scribble('M2 11 L18 4 L34 12 L50 3 L66 12 L82 4 L98 12 L116 5', '7', 'square');
const brush = scribble('M0 8C40 7 80 9 120 8', '1.2');
const maobi = scribble('M0 9C20 1 40 15 60 6S95 0 120 8', '10');
const oilStroke = scribble('M2 10C16 4 32 13 50 6S82 3 104 11 118 5', '4');
const silverStroke = scribble('M0 8C30 7.4 60 8.6 90 8S110 7.6 120 8', '1.4');
const bronzeStroke = scribble('M2 10C18 5 32 12 52 7S82 4 104 11 118 6', '3.2');
const pastelStroke = scribble('M0 9C16 3 28 13 48 7S78 2 100 9 116 12 120 7', '6');
const crayonStroke = scribble('M2 11C12 3 20 14 36 6S58 14 78 5 100 13 118 7', '5', 'square');
const pencilStroke = scribble('M0 8C24 7 40 9 64 8S96 7 120 8', '1.3');
const chalkStroke = enc(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 16" preserveAspectRatio="none"><path d="M2 8h22M32 9h20M60 7h24M92 8h22" fill="none" stroke="black" stroke-width="4" stroke-linecap="round"/></svg>`,
);
const glassStroke = scribble('M0 8C30 7 50 9 80 8S110 7 120 8', '1.4');
const fireStroke = scribble('M2 12C10 2 18 14 30 4S48 15 64 3 82 14 100 5 114 12 118 6', '5');
const waterStroke = scribble('M0 10C16 4 28 14 48 8S78 3 100 10 116 6 120 9', '3.2');
const windStroke = scribble('M0 9C40 4 70 12 120 6', '1.8');
const earthStroke = scribble('M4 9h28M40 8h22M70 10h20M98 8h16', '5', 'square');
const bricksStroke = scribble('M2 8h18M28 8h18M54 8h18M80 8h18M106 8h12', '4', 'square');
const ruledStroke = scribble('M0 8C40 7.5 80 8.5 120 8', '1.6');
const marbleStroke = scribble('M0 10C24 4 48 12 72 6S100 4 120 9', '2.2');
const stoneStroke = scribble('M4 10h16M28 7h12M48 11h18M74 8h10M92 10h14', '4.5', 'square');
const ceramicStroke = scribble('M0 8C36 6 72 10 120 8', '1.4');
const terracottaStroke = scribble('M2 10C14 3 26 14 42 6S70 14 92 5 112 12 118 8', '4.5');
const corkStroke = scribble('M2 9C10 4 16 13 26 7S40 13 52 6 68 13 82 7 98 12 118 8', '3.5');
const sandStroke = scribble('M0 11C18 6 34 13 54 8S86 5 108 11 120 8', '2.4');
const iceStroke = scribble('M0 8 L20 5 L40 10 L60 4 L80 9 L100 6 L120 8', '1.3');
const denimStroke = scribble('M2 11 L18 5 L34 11 L50 5 L66 11 L82 5 L98 11 L114 5', '2.6');
const leatherStroke = scribble('M2 10C14 4 24 14 40 6S64 14 84 5 104 13 118 8', '4.2');
const feltStroke = scribble('M0 9C20 5 40 13 60 8S90 4 120 9', '5');
const concreteStroke = scribble('M4 8h18M30 9h14M52 7h16M76 9h12M96 8h16', '3', 'square');
const plasterStroke = scribble('M0 8C30 6 60 10 90 8S110 7 120 8', '2.2');
const rustStroke = scribble('M2 11C12 3 22 14 36 5S56 14 74 4 96 13 118 7', '3.6');
const wickerStroke = scribble('M2 6h20M28 10h18M52 5h16M74 11h18M98 6h16', '2.6');
const cardboardStroke = scribble('M0 8h120', '3.2', 'square');
const snowStroke = scribble('M0 8C36 7 72 9 120 8', '1.3');
const sketchStroke = enc(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 16" preserveAspectRatio="none"><path d="M2 9h14M22 7h10M40 10h18M66 8h8M82 9h16M104 7h12" fill="none" stroke="black" stroke-width="2.2" stroke-linecap="square"/></svg>`,
);
/** A filled 橫: thin at the press, thick through the belly, lifting at the tail. */
const brushStroke = enc(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 28" preserveAspectRatio="none"><path fill="black" d="M3 15c2-1 4 3 9 3 10 0 18 4 36 3 22-1 42 1 56-1 8-1 12-5 11-3-4 3-16 2-28 3-18 1-38-3-56-2-8 0-16-3-22-2-4 1-6 0-6-1z"/></svg>`,
);

const block = `    /* Surfaces: data-ip-surface="paper|xuan|kraft|wood|bamboo" on .ip-paper.
       Grain stays behind the type. The pen follows the board.
       揮春 keeps its own red and gold; it does not follow the page surface. */
    --ip-faichun: #9a1c24;
    --ip-faichun-ink: #fff6e0;
${paperFill}
`;

const themes = `
  /* Pale oak, grain across the board. */
  [data-ip-surface="wood"] {
    --color-ip-paper: #f4e7d6;
    --color-ip-paper-deep: #ead9c4;${woodFill}
  }

  /* Pale pine, grain running down the board. */
  [data-ip-surface="pinewood"] {
    --color-ip-paper: #f3f0e8;
    --color-ip-paper-deep: #e7e2d6;${pinewoodFill}
  }

  /* Honey teak, a tighter grain than oak. */
  [data-ip-surface="teak"] {
    --color-ip-paper: #f6e6cc;
    --color-ip-paper-deep: #edd4b0;${teakFill}
  }

  /* Bamboo slats. */
  [data-ip-surface="bamboo"] {
    --color-ip-paper: #efe2cc;
    --color-ip-paper-deep: #e6d4b6;${bambooFill}
  }

  /* A bamboo mat: strips across, wider and quieter than the slats. */
  [data-ip-surface="mat"] {
    --color-ip-paper: #f4ead8;
    --color-ip-paper-deep: #e4d4bc;${matFill}
  }

  /* A loose bamboo weave. The crossings stay faint so they do not cut the type. */
  [data-ip-surface="weave"] {
    --color-ip-paper: #f3e6d0;
    --color-ip-paper-deep: #e6d4b6;${weaveFill}
  }

  /* Gloss plastic: one soft diagonal sheen. */
  [data-ip-surface="gloss"] {
    --color-ip-paper: #f4f7fb;
    --color-ip-paper-deep: #e6ebf2;${glossFill}
  }

  /* Matte plastic: a cool even pepper, no shine. */
  [data-ip-surface="matte"] {
    --color-ip-paper: #eef0f3;
    --color-ip-paper-deep: #e4e7ec;${matteFill}
  }

  /* Ribbed plastic. The ridge is a colour band, not a line through the type. */
  [data-ip-surface="rib"] {
    --color-ip-paper: #f2f4f7;
    --color-ip-paper-deep: #e4e8ee;${ribFill}
  }

  /* Cool steel, a fine vertical brush. */
  [data-ip-surface="steel"] {
    --color-ip-paper: #eef1f4;
    --color-ip-paper-deep: #e3e7ed;${steelFill}
  }

  /* Brushed aluminium, grain across the board. */
  [data-ip-surface="brushed"] {
    --color-ip-paper: #f3f4f5;
    --color-ip-paper-deep: #e6e8eb;${brushedFill}
  }

  /* Bright silver, cooler and lighter than steel. */
  [data-ip-surface="silver"] {
    --color-ip-paper: #f6f7f9;
    --color-ip-paper-deep: #e7eaef;${silverFill}
  }

  /* Pale brass. Stops stay light enough for dark pens. */
  [data-ip-surface="brass"] {
    --color-ip-paper: #f6edd8;
    --color-ip-paper-deep: #ead9b8;${brassFill}
  }

  /* Duller, redder metal than brass. */
  [data-ip-surface="bronze"] {
    --color-ip-paper: #f0e2d4;
    --color-ip-paper-deep: #e6d4bc;${bronzeFill}
  }

  /* Antique gold sheet. Darker than cream so it still reads as metal. */
  [data-ip-surface="gilt"] {
    --color-ip-paper: #f6e8c4;
    --color-ip-paper-deep: #ead6a8;${giltFill}
  }

  /* Linen: a fine plain weave in two close creams. */
  [data-ip-surface="linen"] {
    --color-ip-paper: #f3eee6;
    --color-ip-paper-deep: #e7e0d2;${linenFill}
  }

  /* Silk: a diagonal satin sheen. */
  [data-ip-surface="silk"] {
    --color-ip-paper: #faf6f1;
    --color-ip-paper-deep: #f0e6da;${silkFill}
  }

  /* Canvas: a coarser tan weave. */
  [data-ip-surface="canvas"] {
    --color-ip-paper: #efe6d8;
    --color-ip-paper-deep: #e4d8c4;${canvasFill}
  }

  /* Glass: a cool pane with one long reflection. */
  [data-ip-surface="glass"] {
    --color-ip-paper: #f4f8fc;
    --color-ip-paper-deep: #e4eef6;${glassFill}
  }

  /* Fire: a pale hearth glow, no flame drawn through the type. */
  [data-ip-surface="fire"] {
    --color-ip-paper: #fff1e4;
    --color-ip-paper-deep: #f6d7c0;${fireFill}
  }

  /* Water: wide soft ripples. */
  [data-ip-surface="water"] {
    --color-ip-paper: #eef6fb;
    --color-ip-paper-deep: #dceaf4;${waterFill}
  }

  /* Wind: long faint streaks. */
  [data-ip-surface="wind"] {
    --color-ip-paper: #f6f7f4;
    --color-ip-paper-deep: #e8ebe4;${windFill}
  }

  /* Earth: quiet packed clay. */
  [data-ip-surface="earth"] {
    --color-ip-paper: #f0e6d8;
    --color-ip-paper-deep: #e7d8c8;${earthFill}
  }

  /* Bricks: a pale running bond. Mortar stays close to the brick so it does not cut the type. */
  [data-ip-surface="bricks"] {
    --color-ip-paper: #f3e6da;
    --color-ip-paper-deep: #e8d4c6;${bricksFill}
  }

  /* Ruled: exercise-book lines, wide enough to sit behind the type. */
  [data-ip-surface="ruled"] {
    --color-ip-paper: #fbf8f1;
    --color-ip-paper-deep: #f0eadc;${ruledFill}
  }

  /* Marble: cloudy veins, not cracks. */
  [data-ip-surface="marble"] {
    --color-ip-paper: #f6f7f8;
    --color-ip-paper-deep: #e7eaed;${marbleFill}
  }

  /* Stone: a warm grey pepper. */
  [data-ip-surface="stone"] {
    --color-ip-paper: #eeece8;
    --color-ip-paper-deep: #e2dfd8;${stoneFill}
  }

  /* Ceramic: a warm porcelain glaze. */
  [data-ip-surface="ceramic"] {
    --color-ip-paper: #fbf9f6;
    --color-ip-paper-deep: #f1ebe4;${ceramicFill}
  }

  /* Terracotta: pale fired clay. */
  [data-ip-surface="terracotta"] {
    --color-ip-paper: #f8e6da;
    --color-ip-paper-deep: #edd4c6;${terracottaFill}
  }

  /* Cork: a coarse tan grain. */
  [data-ip-surface="cork"] {
    --color-ip-paper: #f4ead8;
    --color-ip-paper-deep: #e8dcc4;${corkFill}
  }

  /* Sand: pale dunes in close colours. Dark flecks read as dirt. */
  [data-ip-surface="sand"] {
    --color-ip-paper: #f7f0d8;
    --color-ip-paper-deep: #efe2c0;${sandFill}
  }

  /* Ice: wide cool facets. */
  [data-ip-surface="ice"] {
    --color-ip-paper: #f4fafc;
    --color-ip-paper-deep: #e4f1f6;${iceFill}
  }

  /* Denim: a pale twill. The two blues stay close so the diagonal does not cut the type. */
  [data-ip-surface="denim"] {
    --color-ip-paper: #e7eef8;
    --color-ip-paper-deep: #d8e2f2;${denimFill}
  }

  /* Leather: a pale pebbled hide. The pebbles stay close so they do not read as dirt. */
  [data-ip-surface="leather"] {
    --color-ip-paper: #f4e8d8;
    --color-ip-paper-deep: #eadcc8;${leatherFill}
  }

  /* Felt: a soft nap. */
  [data-ip-surface="felt"] {
    --color-ip-paper: #f4f0ea;
    --color-ip-paper-deep: #e8e3db;${feltFill}
  }

  /* Concrete: cool grey aggregate. */
  [data-ip-surface="concrete"] {
    --color-ip-paper: #f1f3f4;
    --color-ip-paper-deep: #e4e6e8;${concreteFill}
  }

  /* Plaster: a smooth trowel cloud. */
  [data-ip-surface="plaster"] {
    --color-ip-paper: #f4f1ec;
    --color-ip-paper-deep: #e8e4dc;${plasterFill}
  }

  /* Rust: a pale orange bloom, not pits through the type. */
  [data-ip-surface="rust"] {
    --color-ip-paper: #f8ebe0;
    --color-ip-paper-deep: #f0ddd0;${rustFill}
  }

  /* Wicker: an open straw weave. */
  [data-ip-surface="wicker"] {
    --color-ip-paper: #f6edd8;
    --color-ip-paper-deep: #efe0c4;${wickerFill}
  }

  /* Cardboard: wide flutes. The darker band stays broad so it does not cut the type. */
  [data-ip-surface="cardboard"] {
    --color-ip-paper: #f4e8d8;
    --color-ip-paper-deep: #eadcc8;${cardboardFill}
  }

  /* Snow: soft drifts, quieter than ice. */
  [data-ip-surface="snow"] {
    --color-ip-paper: #f8fbfc;
    --color-ip-paper-deep: #eef3f6;${snowFill}
  }

  /* 宣紙: ivory, soft clouds and fibre. */
  [data-ip-surface="xuan"] {
    --color-ip-paper: #f7f3ea;
    --color-ip-paper-deep: #efe8d8;${xuanFill}
  }

  /* Kraft wrap: a mottled brown sheet. */
  [data-ip-surface="kraft"] {
    --color-ip-paper: #d8c4a2;
    --color-ip-paper-deep: #cbb892;${kraftFill}
  }

  /* 格仔簿: a cool exercise-book grid. The lines stay light so they sit behind the type. */
  [data-ip-surface="grid"] {
    --color-ip-paper: #f4f7fb;
    --color-ip-paper-deep: #e7eef6;${gridFill}
  }

  /* 九宮格: one 36px square per character, split into nine. The outer line is the character box. */
  [data-ip-surface="jiugong"] {
    --color-ip-paper: #fff6f2;
    --color-ip-paper-deep: #f6e6e0;${jiugongFill}
  }

  /* Vellum: a warmer, cloudier sheet than the notebook speckle. */
  [data-ip-surface="vellum"] {
    --color-ip-paper: #f6ecd4;
    --color-ip-paper-deep: #efe2c4;${vellumFill}
  }

  /* Explicit paper matches :root, so a game can reset without clearing the attribute. */
  [data-ip-surface="paper"] {
    --color-ip-paper: #f2f0ec;
    --color-ip-paper-deep: #e8e5df;${paperFill}
  }
`;

const inks = `
  /* Inks: data-ip-ink on the same element as the surface. Listed after the surfaces so the
     pen wins when both are set. Colour, weight and corner each jump, and text stays ≥ 4.5:1
     on the darkest sheet (kraft). */
  [data-ip-ink="lamp"] {
    --color-ip-ink: #111111;
    --color-ip-ink-soft: #5e5a55;
    --color-ip-ink-faint: #d9d6d1;
    --color-ip-veil: #1111114d;
    --color-ip-accent: #e6392b;
    --color-ip-accent-ink: #c42a1e;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 6px 4px 7px 3px / 4px 7px 3px 6px;
    --ip-shape-b: 4px 7px 3px 6px / 7px 3px 6px 4px;
    --ip-shape-c: 7px 3px 5px 6px / 3px 6px 7px 4px;
    --ip-scribble: ${pen};
  }

  /* 松煙: a clearly blue brush, thick and round. */
  [data-ip-ink="pine"] {
    --color-ip-ink: #1a3f90;
    --color-ip-ink-soft: #2a4a9e;
    --color-ip-ink-faint: #c5d0ea;
    --color-ip-veil: #1a3f9066;
    --color-ip-accent: #2a56c4;
    --color-ip-accent-ink: #1a3f90;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4px;
    --ip-line-thin: 2.5px;
    --ip-line-bold: 5px;
    --ip-shape-a: 16px 12px 18px 14px / 12px 18px 14px 16px;
    --ip-shape-b: 14px 18px 12px 16px / 18px 12px 16px 14px;
    --ip-shape-c: 18px 14px 16px 12px / 14px 16px 18px 12px;
    --ip-scribble: ${maobi};
  }

  /* 油煙: brick sepia, a middle weight. */
  [data-ip-ink="oil"] {
    --color-ip-ink: #6b2e24;
    --color-ip-ink-soft: #7a3a32;
    --color-ip-ink-faint: #e4cfc8;
    --color-ip-veil: #6b2e2466;
    --color-ip-accent: #8d4034;
    --color-ip-accent-ink: #6b2e24;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2.5px;
    --ip-line-thin: 2px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 8px 6px 9px 5px / 6px 9px 5px 8px;
    --ip-shape-b: 6px 9px 5px 8px / 9px 5px 8px 6px;
    --ip-shape-c: 9px 5px 7px 8px / 5px 8px 9px 6px;
    --ip-scribble: ${oilStroke};
  }

  /* Walnut: orange-brown, the heaviest cut stroke, sharp corners. */
  [data-ip-ink="walnut"] {
    --color-ip-ink: #6b3a12;
    --color-ip-ink-soft: #6b3e1f;
    --color-ip-ink-faint: #e6d0b4;
    --color-ip-veil: #6b3a1266;
    --color-ip-accent: #8a4c18;
    --color-ip-accent-ink: #6b3a12;
    --color-ip-on-accent: #ffffff;
    --ip-line: 5px;
    --ip-line-thin: 3px;
    --ip-line-bold: 6px;
    --ip-shape-a: 2px 3px 2px 4px / 3px 2px 4px 2px;
    --ip-shape-b: 3px 2px 4px 2px / 2px 4px 2px 3px;
    --ip-shape-c: 2px 4px 3px 2px / 4px 2px 3px 2px;
    --ip-scribble: ${walnut};
  }

  /* Bamboo green: a hairline. */
  [data-ip-ink="green"] {
    --color-ip-ink: #0f4d22;
    --color-ip-ink-soft: #1a5c30;
    --color-ip-ink-faint: #c5dcc8;
    --color-ip-veil: #0f4d2266;
    --color-ip-accent: #1a6a32;
    --color-ip-accent-ink: #0f4d22;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 18px 4px 20px 6px / 4px 20px 6px 18px;
    --ip-shape-b: 6px 20px 4px 18px / 20px 6px 18px 4px;
    --ip-shape-c: 20px 6px 16px 4px / 6px 18px 20px 4px;
    --ip-scribble: ${brush};
  }

  /* 毛筆: soot black, a stroke that swells and lifts, with a round turn. */
  [data-ip-ink="brush"] {
    --color-ip-ink: #161410;
    --color-ip-ink-soft: #3a342e;
    --color-ip-ink-faint: #d9d3cc;
    --color-ip-veil: #16141066;
    --color-ip-accent: #4a433c;
    --color-ip-accent-ink: #161410;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3.5px;
    --ip-line-thin: 2px;
    --ip-line-bold: 5px;
    --ip-shape-a: 18px 14px 22px 12px / 14px 22px 12px 18px;
    --ip-shape-b: 14px 22px 12px 20px / 22px 12px 20px 14px;
    --ip-shape-c: 22px 12px 18px 14px / 12px 20px 22px 14px;
    --ip-scribble: ${brushStroke};
  }

  /* 泥金: antique gold dark enough for a light board. 揮春 keeps its own cream. */
  [data-ip-ink="gold"] {
    --color-ip-ink: #5e4c10;
    --color-ip-ink-soft: #624e12;
    --color-ip-ink-faint: #e4d4a4;
    --color-ip-veil: #5e4c1066;
    --color-ip-accent: #a6842e;
    --color-ip-accent-ink: #5e4c10;
    --color-ip-on-accent: #fff8e6;
    --ip-line: 2.5px;
    --ip-line-thin: 1.75px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 8px 6px 10px 5px / 6px 10px 5px 8px;
    --ip-shape-b: 6px 10px 5px 8px / 10px 5px 8px 6px;
    --ip-shape-c: 10px 5px 8px 6px / 5px 8px 10px 6px;
    --ip-scribble: ${pen};
  }

  /* Cool grey, dark enough for a light board. A hairline, like lamp in metal. */
  [data-ip-ink="silver"] {
    --color-ip-ink: #3a4150;
    --color-ip-ink-soft: #4a5260;
    --color-ip-ink-faint: #c8ccd4;
    --color-ip-veil: #3a415066;
    --color-ip-accent: #4a5260;
    --color-ip-accent-ink: #3a4150;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 5px 4px 6px 3px / 4px 6px 3px 5px;
    --ip-shape-b: 4px 6px 3px 5px / 6px 3px 5px 4px;
    --ip-shape-c: 6px 3px 5px 4px / 3px 5px 6px 3px;
    --ip-scribble: ${silverStroke};
  }

  /* Red-brown metal, between oil and walnut. */
  [data-ip-ink="bronze"] {
    --color-ip-ink: #6b3a22;
    --color-ip-ink-soft: #734028;
    --color-ip-ink-faint: #e4cfc4;
    --color-ip-veil: #6b3a2266;
    --color-ip-accent: #7a4630;
    --color-ip-accent-ink: #6b3a22;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3px;
    --ip-line-thin: 2px;
    --ip-line-bold: 4px;
    --ip-shape-a: 4px 3px 5px 3px / 3px 5px 3px 4px;
    --ip-shape-b: 3px 5px 3px 4px / 5px 3px 4px 3px;
    --ip-shape-c: 5px 3px 4px 3px / 3px 4px 5px 3px;
    --ip-scribble: ${bronzeStroke};
  }

  /* Dusty plum, a soft powdery stroke. */
  [data-ip-ink="pastel"] {
    --color-ip-ink: #584058;
    --color-ip-ink-soft: #5c4060;
    --color-ip-ink-faint: #ddd0dc;
    --color-ip-veil: #58405866;
    --color-ip-accent: #6a5070;
    --color-ip-accent-ink: #584058;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3.5px;
    --ip-line-thin: 2.5px;
    --ip-line-bold: 4.5px;
    --ip-shape-a: 18px 16px 20px 14px / 16px 20px 14px 18px;
    --ip-shape-b: 16px 20px 14px 18px / 20px 14px 18px 16px;
    --ip-shape-c: 20px 14px 18px 16px / 14px 18px 20px 14px;
    --ip-scribble: ${pastelStroke};
  }

  /* Waxy and uneven, a little thicker than pastel. */
  [data-ip-ink="crayon"] {
    --color-ip-ink: #7a3820;
    --color-ip-ink-soft: #8a3018;
    --color-ip-ink-faint: #e8c8bc;
    --color-ip-veil: #7a382066;
    --color-ip-accent: #a04428;
    --color-ip-accent-ink: #7a3820;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4.5px;
    --ip-line-thin: 3px;
    --ip-line-bold: 6px;
    --ip-shape-a: 10px 8px 12px 7px / 8px 12px 7px 10px;
    --ip-shape-b: 8px 12px 7px 10px / 12px 7px 10px 8px;
    --ip-shape-c: 12px 7px 10px 8px / 7px 10px 12px 7px;
    --ip-scribble: ${crayonStroke};
  }

  /* Dry gaps in the stroke. The grey stays dark enough on a light board. */
  [data-ip-ink="chalk"] {
    --color-ip-ink: #4e4c48;
    --color-ip-ink-soft: #544a46;
    --color-ip-ink-faint: #d4d0c8;
    --color-ip-veil: #4e4c4866;
    --color-ip-accent: #5e5c58;
    --color-ip-accent-ink: #4e4c48;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3px;
    --ip-line-thin: 2px;
    --ip-line-bold: 4px;
    --ip-shape-a: 14px 12px 16px 10px / 12px 16px 10px 14px;
    --ip-shape-b: 12px 16px 10px 14px / 16px 10px 14px 12px;
    --ip-shape-c: 16px 10px 14px 12px / 10px 14px 16px 10px;
    --ip-scribble: ${chalkStroke};
  }

  /* Fine coloured pencil. */
  [data-ip-ink="pencil"] {
    --color-ip-ink: #245068;
    --color-ip-ink-soft: #2a5670;
    --color-ip-ink-faint: #c5d4de;
    --color-ip-veil: #24506866;
    --color-ip-accent: #2a5670;
    --color-ip-accent-ink: #245068;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 3px 2px 4px 2px / 2px 4px 2px 3px;
    --ip-shape-b: 2px 4px 2px 3px / 4px 2px 3px 2px;
    --ip-shape-c: 4px 2px 3px 2px / 2px 3px 4px 2px;
    --ip-scribble: ${pencilStroke};
  }

  /* Graphite, a broken line, sharper than chalk. */
  [data-ip-ink="sketch"] {
    --color-ip-ink: #2e2e2c;
    --color-ip-ink-soft: #4a4844;
    --color-ip-ink-faint: #d0ceca;
    --color-ip-veil: #2e2e2c66;
    --color-ip-accent: #4a4844;
    --color-ip-accent-ink: #2e2e2c;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.75px;
    --ip-line-thin: 1.25px;
    --ip-line-bold: 2.5px;
    --ip-shape-a: 2px 2px 3px 2px / 2px 3px 2px 2px;
    --ip-shape-b: 2px 3px 2px 2px / 3px 2px 2px 2px;
    --ip-shape-c: 3px 2px 2px 2px / 2px 2px 3px 2px;
    --ip-scribble: ${sketchStroke};
  }

  /* Cool grey-blue, a hairline, like a mark on glass. */
  [data-ip-ink="glass"] {
    --color-ip-ink: #2c4558;
    --color-ip-ink-soft: #3a5264;
    --color-ip-ink-faint: #c9d6e0;
    --color-ip-veil: #2c455866;
    --color-ip-accent: #3a5264;
    --color-ip-accent-ink: #2c4558;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 4px;
    --ip-shape-b: 6px 4px 6px 4px;
    --ip-shape-c: 4px 6px 4px 6px;
    --ip-scribble: ${glassStroke};
  }

  /* Ember, a thick uneven stroke. */
  [data-ip-ink="fire"] {
    --color-ip-ink: #7a3820;
    --color-ip-ink-soft: #8a3018;
    --color-ip-ink-faint: #efcfc0;
    --color-ip-veil: #7a382066;
    --color-ip-accent: #a04428;
    --color-ip-accent-ink: #7a3820;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3.5px;
    --ip-line-thin: 2.5px;
    --ip-line-bold: 5px;
    --ip-shape-a: 10px 4px 12px 6px / 6px 12px 4px 10px;
    --ip-shape-b: 6px 12px 4px 8px / 12px 4px 10px 6px;
    --ip-shape-c: 12px 6px 8px 4px / 4px 10px 6px 12px;
    --ip-scribble: ${fireStroke};
  }

  /* Deep water, a smooth flowing line. */
  [data-ip-ink="water"] {
    --color-ip-ink: #1a4a68;
    --color-ip-ink-soft: #245068;
    --color-ip-ink-faint: #c5d8e6;
    --color-ip-veil: #1a4a6866;
    --color-ip-accent: #245068;
    --color-ip-accent-ink: #1a4a68;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2.5px;
    --ip-line-thin: 1.75px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 16px 12px 18px 14px / 14px 18px 12px 16px;
    --ip-shape-b: 14px 18px 12px 16px / 18px 12px 16px 14px;
    --ip-shape-c: 18px 14px 16px 12px / 12px 16px 14px 18px;
    --ip-scribble: ${waterStroke};
  }

  /* Cool air, a long thin sweep. */
  [data-ip-ink="wind"] {
    --color-ip-ink: #3a4844;
    --color-ip-ink-soft: #44504c;
    --color-ip-ink-faint: #d0d6d2;
    --color-ip-veil: #3a484466;
    --color-ip-accent: #44504c;
    --color-ip-accent-ink: #3a4844;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.5px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2.25px;
    --ip-shape-a: 18px 8px 20px 10px / 10px 20px 8px 18px;
    --ip-shape-b: 10px 20px 8px 16px / 20px 8px 18px 10px;
    --ip-shape-c: 20px 10px 16px 8px / 8px 18px 10px 20px;
    --ip-scribble: ${windStroke};
  }

  /* Clay, a heavy blunt stroke. */
  [data-ip-ink="earth"] {
    --color-ip-ink: #5c4032;
    --color-ip-ink-soft: #6a4a3a;
    --color-ip-ink-faint: #e4d4c6;
    --color-ip-veil: #5c403266;
    --color-ip-accent: #6a4a3a;
    --color-ip-accent-ink: #5c4032;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4px;
    --ip-line-thin: 3px;
    --ip-line-bold: 5.5px;
    --ip-shape-a: 3px;
    --ip-shape-b: 4px 2px 3px 2px;
    --ip-shape-c: 2px 4px 2px 3px;
    --ip-scribble: ${earthStroke};
  }

  /* Brick red, a squared stroke. */
  [data-ip-ink="bricks"] {
    --color-ip-ink: #7a3a2c;
    --color-ip-ink-soft: #6f382c;
    --color-ip-ink-faint: #efd4c8;
    --color-ip-veil: #7a3a2c66;
    --color-ip-accent: #8a4534;
    --color-ip-accent-ink: #7a3a2c;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3px;
    --ip-line-thin: 2px;
    --ip-line-bold: 4px;
    --ip-shape-a: 2px;
    --ip-shape-b: 2px 3px 2px 2px;
    --ip-shape-c: 3px 2px 2px 2px;
    --ip-scribble: ${bricksStroke};
  }

  /* Fountain blue, a steady line for ruled paper. */
  [data-ip-ink="ruled"] {
    --color-ip-ink: #1a3f6e;
    --color-ip-ink-soft: #2a4a78;
    --color-ip-ink-faint: #c5d4e6;
    --color-ip-veil: #1a3f6e66;
    --color-ip-accent: #2a4a78;
    --color-ip-accent-ink: #1a3f6e;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.5px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2.25px;
    --ip-shape-a: 6px;
    --ip-shape-b: 8px 5px 8px 5px;
    --ip-shape-c: 5px 8px 5px 8px;
    --ip-scribble: ${ruledStroke};
  }

  /* Cool stone grey, a slow curve. */
  [data-ip-ink="marble"] {
    --color-ip-ink: #3a424c;
    --color-ip-ink-soft: #434e58;
    --color-ip-ink-faint: #d0d4d8;
    --color-ip-veil: #3a424c66;
    --color-ip-accent: #434e58;
    --color-ip-accent-ink: #3a424c;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2px;
    --ip-line-thin: 1.25px;
    --ip-line-bold: 3px;
    --ip-shape-a: 10px 6px 12px 8px / 8px 12px 6px 10px;
    --ip-shape-b: 8px 12px 6px 10px / 12px 6px 10px 8px;
    --ip-shape-c: 12px 8px 10px 6px / 6px 10px 8px 12px;
    --ip-scribble: ${marbleStroke};
  }

  /* Granite, a heavy broken stroke. */
  [data-ip-ink="stone"] {
    --color-ip-ink: #3e4440;
    --color-ip-ink-soft: #4a524c;
    --color-ip-ink-faint: #d2d4d0;
    --color-ip-veil: #3e444066;
    --color-ip-accent: #4a524c;
    --color-ip-accent-ink: #3e4440;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3.5px;
    --ip-line-thin: 2.5px;
    --ip-line-bold: 5px;
    --ip-shape-a: 2px;
    --ip-shape-b: 3px 2px 2px 3px;
    --ip-shape-c: 2px 3px 3px 2px;
    --ip-scribble: ${stoneStroke};
  }

  /* Celadon, a fine glaze line. */
  [data-ip-ink="ceramic"] {
    --color-ip-ink: #1f4a44;
    --color-ip-ink-soft: #2a5850;
    --color-ip-ink-faint: #c8ddd6;
    --color-ip-veil: #1f4a4466;
    --color-ip-accent: #2a5850;
    --color-ip-accent-ink: #1f4a44;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 14px;
    --ip-shape-b: 16px 12px 16px 12px;
    --ip-shape-c: 12px 16px 12px 16px;
    --ip-scribble: ${ceramicStroke};
  }

  /* Burnt clay, heavier and rounder than brick. */
  [data-ip-ink="terracotta"] {
    --color-ip-ink: #6b3024;
    --color-ip-ink-soft: #7a3a28;
    --color-ip-ink-faint: #efd0c4;
    --color-ip-veil: #6b302466;
    --color-ip-accent: #7a3a28;
    --color-ip-accent-ink: #6b3024;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4px;
    --ip-line-thin: 3px;
    --ip-line-bold: 5.5px;
    --ip-shape-a: 12px 8px 14px 8px / 8px 14px 8px 12px;
    --ip-shape-b: 8px 14px 8px 10px / 14px 8px 12px 8px;
    --ip-shape-c: 14px 8px 10px 8px / 8px 12px 8px 14px;
    --ip-scribble: ${terracottaStroke};
  }

  /* Umber, a bumpy stroke. */
  [data-ip-ink="cork"] {
    --color-ip-ink: #5c4024;
    --color-ip-ink-soft: #6a4c2c;
    --color-ip-ink-faint: #e6d6c0;
    --color-ip-veil: #5c402466;
    --color-ip-accent: #6a4c2c;
    --color-ip-accent-ink: #5c4024;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3px;
    --ip-line-thin: 2px;
    --ip-line-bold: 4.5px;
    --ip-shape-a: 8px 4px 6px 5px / 5px 8px 4px 6px;
    --ip-shape-b: 5px 8px 4px 6px / 8px 4px 6px 5px;
    --ip-shape-c: 6px 5px 8px 4px / 4px 6px 5px 8px;
    --ip-scribble: ${corkStroke};
  }

  /* Ochre, a low dune. */
  [data-ip-ink="sand"] {
    --color-ip-ink: #5c4018;
    --color-ip-ink-soft: #644418;
    --color-ip-ink-faint: #ead8b0;
    --color-ip-veil: #5c401866;
    --color-ip-accent: #644418;
    --color-ip-accent-ink: #5c4018;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.75px;
    --ip-line-thin: 1.25px;
    --ip-line-bold: 2.5px;
    --ip-shape-a: 4px 6px 3px 5px / 5px 3px 6px 4px;
    --ip-shape-b: 5px 3px 6px 4px / 3px 6px 4px 5px;
    --ip-shape-c: 3px 5px 4px 6px / 6px 4px 5px 3px;
    --ip-scribble: ${sandStroke};
  }

  /* Cold blue, a sharp hairline. */
  [data-ip-ink="ice"] {
    --color-ip-ink: #1c4a62;
    --color-ip-ink-soft: #2a5060;
    --color-ip-ink-faint: #c8dce6;
    --color-ip-veil: #1c4a6266;
    --color-ip-accent: #2a5060;
    --color-ip-accent-ink: #1c4a62;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 2px;
    --ip-shape-b: 3px 2px 2px 3px;
    --ip-shape-c: 2px 3px 3px 2px;
    --ip-scribble: ${iceStroke};
  }

  /* Indigo, a twill stroke. */
  [data-ip-ink="denim"] {
    --color-ip-ink: #24305a;
    --color-ip-ink-soft: #2e3a68;
    --color-ip-ink-faint: #c8d0e4;
    --color-ip-veil: #24305a66;
    --color-ip-accent: #2e3a68;
    --color-ip-accent-ink: #24305a;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2.5px;
    --ip-line-thin: 1.75px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 4px;
    --ip-shape-b: 6px 3px 5px 3px;
    --ip-shape-c: 3px 6px 3px 5px;
    --ip-scribble: ${denimStroke};
  }

  /* Cognac, a heavy hide stroke. */
  [data-ip-ink="leather"] {
    --color-ip-ink: #5c3418;
    --color-ip-ink-soft: #6a3c1c;
    --color-ip-ink-faint: #e8d4c0;
    --color-ip-veil: #5c341866;
    --color-ip-accent: #6a3c1c;
    --color-ip-accent-ink: #5c3418;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4px;
    --ip-line-thin: 3px;
    --ip-line-bold: 5.5px;
    --ip-shape-a: 6px 3px 5px 3px;
    --ip-shape-b: 3px 6px 3px 5px;
    --ip-shape-c: 5px 3px 6px 3px;
    --ip-scribble: ${leatherStroke};
  }

  /* Wool, a thick soft stroke. */
  [data-ip-ink="felt"] {
    --color-ip-ink: #4e403c;
    --color-ip-ink-soft: #5a4842;
    --color-ip-ink-faint: #ddd4cc;
    --color-ip-veil: #4e403c66;
    --color-ip-accent: #5a4842;
    --color-ip-accent-ink: #4e403c;
    --color-ip-on-accent: #ffffff;
    --ip-line: 4.5px;
    --ip-line-thin: 3.5px;
    --ip-line-bold: 6px;
    --ip-shape-a: 16px;
    --ip-shape-b: 18px 14px 18px 14px;
    --ip-shape-c: 14px 18px 14px 18px;
    --ip-scribble: ${feltStroke};
  }

  /* Cool grey, a squared aggregate stroke. */
  [data-ip-ink="concrete"] {
    --color-ip-ink: #3a4450;
    --color-ip-ink-soft: #45505a;
    --color-ip-ink-faint: #d0d4d8;
    --color-ip-veil: #3a445066;
    --color-ip-accent: #45505a;
    --color-ip-accent-ink: #3a4450;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2.5px;
    --ip-line-thin: 1.75px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 2px;
    --ip-shape-b: 3px 2px 2px 2px;
    --ip-shape-c: 2px 3px 2px 2px;
    --ip-scribble: ${concreteStroke};
  }

  /* Warm grey, a smooth trowel line. */
  [data-ip-ink="plaster"] {
    --color-ip-ink: #4a453e;
    --color-ip-ink-soft: #564e46;
    --color-ip-ink-faint: #ddd6ce;
    --color-ip-veil: #4a453e66;
    --color-ip-accent: #564e46;
    --color-ip-accent-ink: #4a453e;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2px;
    --ip-line-thin: 1.25px;
    --ip-line-bold: 3px;
    --ip-shape-a: 8px;
    --ip-shape-b: 10px 6px 10px 6px;
    --ip-shape-c: 6px 10px 6px 10px;
    --ip-scribble: ${plasterStroke};
  }

  /* Orange-brown, an uneven pit. */
  [data-ip-ink="rust"] {
    --color-ip-ink: #6a3414;
    --color-ip-ink-soft: #7a4018;
    --color-ip-ink-faint: #efd4bc;
    --color-ip-veil: #6a341466;
    --color-ip-accent: #7a4018;
    --color-ip-accent-ink: #6a3414;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3.5px;
    --ip-line-thin: 2.5px;
    --ip-line-bold: 5px;
    --ip-shape-a: 8px 3px 10px 4px / 4px 10px 3px 8px;
    --ip-shape-b: 4px 10px 3px 8px / 10px 3px 8px 4px;
    --ip-shape-c: 10px 4px 8px 3px / 3px 8px 4px 10px;
    --ip-scribble: ${rustStroke};
  }

  /* Straw, a woven stroke. */
  [data-ip-ink="wicker"] {
    --color-ip-ink: #5a4420;
    --color-ip-ink-soft: #644c28;
    --color-ip-ink-faint: #e6d8bc;
    --color-ip-veil: #5a442066;
    --color-ip-accent: #644c28;
    --color-ip-accent-ink: #5a4420;
    --color-ip-on-accent: #ffffff;
    --ip-line: 2.5px;
    --ip-line-thin: 1.75px;
    --ip-line-bold: 3.5px;
    --ip-shape-a: 4px 8px 4px 8px;
    --ip-shape-b: 8px 4px 8px 4px;
    --ip-shape-c: 4px 6px 8px 4px;
    --ip-scribble: ${wickerStroke};
  }

  /* Flat brown, a straight flute. */
  [data-ip-ink="cardboard"] {
    --color-ip-ink: #5a4030;
    --color-ip-ink-soft: #644838;
    --color-ip-ink-faint: #e6d6c6;
    --color-ip-veil: #5a403066;
    --color-ip-accent: #644838;
    --color-ip-accent-ink: #5a4030;
    --color-ip-on-accent: #ffffff;
    --ip-line: 3px;
    --ip-line-thin: 2px;
    --ip-line-bold: 4px;
    --ip-shape-a: 3px;
    --ip-shape-b: 4px 2px 3px 2px;
    --ip-shape-c: 2px 4px 2px 3px;
    --ip-scribble: ${cardboardStroke};
  }

  /* Cold grey, a hairline on snow. */
  [data-ip-ink="snow"] {
    --color-ip-ink: #3e4c58;
    --color-ip-ink-soft: #45505a;
    --color-ip-ink-faint: #d2d8de;
    --color-ip-veil: #3e4c5866;
    --color-ip-accent: #45505a;
    --color-ip-accent-ink: #3e4c58;
    --color-ip-on-accent: #ffffff;
    --ip-line: 1.25px;
    --ip-line-thin: 1px;
    --ip-line-bold: 2px;
    --ip-shape-a: 3px;
    --ip-shape-b: 4px 2px 4px 2px;
    --ip-shape-c: 2px 4px 2px 4px;
    --ip-scribble: ${snowStroke};
  }

  /* Set on the ink element. A var() on :root is substituted there, so buttons would keep the lamp corners. */
  [data-ip-ink] {
    --ip-shape: var(--ip-shape-a);
  }
`;

const tokensPath = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'tokens.css');
let css = readFileSync(tokensPath, 'utf8');

const grain = css.indexOf('    /* Paper grain:');
const surfaces = css.indexOf('    /* Surfaces:');
const mark = grain >= 0 ? grain : surfaces;
if (mark < 0) throw new Error('surface block marker not found in tokens.css');

const end = css.indexOf('    /* Pen marks used as masks', mark);
if (end < 0) throw new Error('pen marks marker not found');
css = `${css.slice(0, mark)}${block}\n${css.slice(end)}`;

css = css.replace(/\n  \/\* (?:Walnut ink|Pale oak)[\s\S]*?\[data-ip-surface="paper"\] \{[\s\S]*?\}\n/, '\n');
css = css.replace(/\n  \/\* Warm timber:[\s\S]*?\[data-ip-surface="paper"\] \{[\s\S]*?\}\n/, '\n');
css = css.replace(/\n  \/\* Inks:[\s\S]*?(?=\n  :lang)/, '\n');

const lang = css.indexOf('  :lang(zh-Hans)');
if (lang < 0) throw new Error(':lang(zh-Hans) not found');
css = `${css.slice(0, lang)}${themes}\n${inks}\n${css.slice(lang)}`;

writeFileSync(tokensPath, css);
console.log('Wrote quiet paper, wood and bamboo surfaces');
