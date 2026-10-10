import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const KATEGORI_FARGER = {
  oppdager: { surface: '#E0F2FE', ink: '#0284C7', labelNo: 'Nysgjerrig Oppdager', labelTr: 'Meraklı Kaşif' },
  natur: { surface: '#DCFCE7', ink: '#16A34A', labelNo: 'Natur & Dyr', labelTr: 'Doğa & Hayvanlar' },
  eventyr: { surface: '#F3E8FF', ink: '#7C3AED', labelNo: 'Eventyr & Fortellinger', labelTr: 'Masal & Hikaye' },
  gater: { surface: '#D1FAE5', ink: '#059669', labelNo: 'Gåter & Moro', labelTr: 'Zeka & Bilmece' },
  aktiviteter: { surface: '#FFEDD5', ink: '#EA580C', labelNo: 'Aktiviteter & Kunst', labelTr: 'Etkinlik & Sanat' },
  historie: { surface: '#FEF3C7', ink: '#B45309', labelNo: 'Historie & Sivilisasjoner', labelTr: 'Tarih & Medeniyet' },
  rommet: { surface: '#E0E7FF', ink: '#4338CA', labelNo: 'Rommet & Universet', labelTr: 'Uzay & Evren' },
  musikk: { surface: '#FFE4E6', ink: '#E11D48', labelNo: 'Musikk & Rytme', labelTr: 'Müzik & Ritim' },
  filosofi: { surface: '#CCFBF1', ink: '#0D9488', labelNo: 'Filosofi & Store Spørsmål', labelTr: 'Düşünce & Felsefe' },
  kultur: { surface: '#FFEDD5', ink: '#C2410C', labelNo: 'Verden & Kulturer', labelTr: 'Dünya & Kültürler' },
  // Geriye dönük uyumluluk
  'merakli-kasif': { surface: '#E0F2FE', ink: '#0284C7', labelNo: 'Nysgjerrig Oppdager', labelTr: 'Meraklı Kaşif' },
  'masal-hikaye': { surface: '#F3E8FF', ink: '#7C3AED', labelNo: 'Eventyr & Fortellinger', labelTr: 'Masal & Hikaye' },
  'etkinlik-sanat': { surface: '#FFEDD5', ink: '#EA580C', labelNo: 'Aktiviteter & Kunst', labelTr: 'Etkinlik & Sanat' },
  'zeka-bilmece': { surface: '#D1FAE5', ink: '#059669', labelNo: 'Gåter & Moro', labelTr: 'Zeka & Bilmece' },
  'doga-hayvanlar': { surface: '#EBFBEE', ink: '#1B5E20', labelNo: 'Natur & Dyr', labelTr: 'Doğa & Hayvanlar' },
};

function escapeXml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

export function lagFolioSvg({ title = '', category = 'merakli-kasif', ageRange = '7-9' }) {
  const kat = KATEGORI_FARGER[category] ?? KATEGORI_FARGER['merakli-kasif'];
  const safeTitle = escapeXml(title);
  const safeKatUpper = escapeXml(String(kat.labelNo).toUpperCase());

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630" width="1200" height="630">
  <defs>
    <radialGradient id="bg" cx="50%" cy="30%" r="70%">
      <stop offset="0%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#FAF6ED" />
    </radialGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#bg)" />

  <!-- Dış Çerçeve ve Kitap Dokusu -->
  <rect x="30" y="30" width="1140" height="570" rx="24" fill="none" stroke="${kat.surface}" stroke-width="12" />
  <rect x="42" y="42" width="1116" height="546" rx="16" fill="none" stroke="${kat.ink}" stroke-opacity="0.1" stroke-width="2" />

  <!-- Kategori Etiketi -->
  <rect x="80" y="90" width="280" height="48" rx="24" fill="${kat.surface}" />
  <text x="220" y="121" fill="${kat.ink}" font-family="system-ui, -apple-system, sans-serif" font-weight="700" font-size="18" text-anchor="middle" letter-spacing="1">
    ${safeKatUpper}
  </text>

  <!-- Yaş Grubu Rozeti -->
  <rect x="380" y="90" width="130" height="48" rx="24" fill="#FFFFFF" stroke="${kat.ink}" stroke-opacity="0.2" />
  <text x="445" y="121" fill="#1C2333" font-family="system-ui, -apple-system, sans-serif" font-weight="600" font-size="18" text-anchor="middle">
    ${escapeXml(ageRange)} år
  </text>

  <!-- Başlık -->
  <foreignObject x="80" y="180" width="1040" height="300">
    <div xmlns="http://www.w3.org/1999/xhtml" style="font-family: 'Fraunces', Georgia, serif; font-size: 54px; font-weight: 700; color: #1C2333; line-height: 1.25; word-wrap: break-word;">
      ${safeTitle}
    </div>
  </foreignObject>

  <!-- Alt Bilgi: leyum markası ve yıldız -->
  <circle cx="90" cy="530" r="14" fill="#F59F00" />
  <text x="120" y="538" fill="#D9480F" font-family="'Fraunces', Georgia, serif" font-weight="800" font-size="32">
    leyum
  </text>
  <text x="210" y="536" fill="#6B7280" font-family="system-ui, -apple-system, sans-serif" font-size="18">
    · barnemagasin &amp; çocuk dergisi
  </text>
</svg>`;
}

export async function genererKortPng(opts) {
  const svg = lagFolioSvg(opts);
  return sharp(Buffer.from(svg)).png().toBuffer();
}

export async function lagBilde({ slug, title, category, ageRange }) {
  const dir = path.resolve('public/images/yazilar');
  await mkdir(dir, { recursive: true });
  const filNavn = `${slug}.png`;
  const fullSti = path.join(dir, filNavn);

  const png = await genererKortPng({ title, category, ageRange });
  await writeFile(fullSti, png);

  return `/images/yazilar/${filNavn}`;
}
