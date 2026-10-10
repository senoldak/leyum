import fs from 'node:fs';
import path from 'node:path';

function parseMd(text) {
  const parts = text.split(/^---$/m);
  if (parts.length < 3) return { data: {}, body: text };
  const yaml = parts[1];
  const body = parts.slice(2).join('---').trim();
  const data = {};
  for (const line of yaml.split('\n')) {
    const match = line.match(/^(\w+):\s*(.*)$/);
    if (match) {
      let val = match[2].trim();
      if ((val.startsWith("'") && val.endsWith("'")) || (val.startsWith('"') && val.endsWith('"'))) {
        val = val.slice(1, -1);
      }
      data[match[1]] = val;
    }
  }
  return { data, body };
}

const noDir = 'src/content/yazilar/no';
const trDir = 'src/content/yazilar/tr';
const imgDir = 'public/images/yazilar';

const noFiles = fs.readdirSync(noDir).filter((f) => f.endsWith('.md'));
const trFiles = fs.readdirSync(trDir).filter((f) => f.endsWith('.md'));

console.log(`\n========================================`);
console.log(`DERİN REDAKSİYON DENETİMİ (240 İKİZ KONU)`);
console.log(`========================================\n`);

let symmetryErrors = 0;
let typographyIssues = 0;
let missingImages = 0;
let formattingIssues = 0;

// 1. Simetri ve Eşleşme Kontrolü
const noSlugs = new Set(noFiles.map((f) => f.replace('.md', '')));
const trSlugs = new Set(trFiles.map((f) => f.replace('.md', '')));

for (const slug of noSlugs) {
  if (!trSlugs.has(slug)) {
    console.error(`[EŞLEŞME HATASI] NO'da var ama TR'de yok: ${slug}`);
    symmetryErrors++;
  }
}
for (const slug of trSlugs) {
  if (!noSlugs.has(slug)) {
    console.error(`[EŞLEŞME HATASI] TR'de var ama NO'da yok: ${slug}`);
    symmetryErrors++;
  }
}

// 2. Kapak Görselleri Kontrolü
for (const slug of noSlugs) {
  const imgPath = path.join(imgDir, `${slug}.png`);
  if (!fs.existsSync(imgPath)) {
    console.error(`[GÖRSEL EKSİK] PNG kartı bulunamadı: ${imgPath}`);
    missingImages++;
  }
}

// 3. İçerik ve Tipografi İncelemesi
const typoReports = [];

for (const f of noFiles) {
  const slug = f.replace('.md', '');
  const noContent = fs.readFileSync(path.join(noDir, f), 'utf8');
  const trContent = fs.readFileSync(path.join(trDir, f), 'utf8');

  const noParsed = parseMd(noContent);
  const trParsed = parseMd(trContent);

  // Kategori ve Yaş Eşleşmesi
  if (noParsed.data.category !== trParsed.data.category) {
    console.error(`[METADATA FARK] Kategori uyuşmazlığı (${slug}): NO=${noParsed.data.category}, TR=${trParsed.data.category}`);
    formattingIssues++;
  }
  const noNormAge = String(noParsed.data.ageRange ?? '').replace(/\s*(år|yaş)/gi, '').trim();
  const trNormAge = String(trParsed.data.ageRange ?? '').replace(/\s*(år|yaş)/gi, '').trim();
  if (noNormAge !== trNormAge) {
    console.error(`[METADATA FARK] Yaş grubu uyuşmazlığı (${slug}): NO=${noParsed.data.ageRange}, TR=${trParsed.data.ageRange}`);
    formattingIssues++;
  }

  // NO Tipografi: Düz tırnak kontrolü (markdown haricinde)
  const noBodyLines = noParsed.body.split('\n');
  for (const line of noBodyLines) {
    if (line.startsWith('>') || line.startsWith('#')) continue;
    // Düz tırnak " kullanımı var mı?
    if (line.includes('"') && !line.includes('`')) {
      typoReports.push({ file: `no/${f}`, line, issue: 'Bokmål metinde düz çift tırnak (") yerine « » kullanılmalı' });
      typographyIssues++;
    }
  }

  // TR Tipografi: Düz tırnak kontrolü
  const trBodyLines = trParsed.body.split('\n');
  for (const line of trBodyLines) {
    if (line.startsWith('>') || line.startsWith('#')) continue;
    if (line.includes('"') && !line.includes('`')) {
      typoReports.push({ file: `tr/${f}`, line, issue: 'Türkçe metinde düz çift tırnak (") yerine “ ” kullanılmalı' });
      typographyIssues++;
    }
  }

  // Paragraf zenginliği kontrolü
  const noParagraphs = noParsed.body.split(/\n\s*\n/).filter((p) => p.trim() && !p.startsWith('>'));
  const trParagraphs = trParsed.body.split(/\n\s*\n/).filter((p) => p.trim() && !p.startsWith('>'));

  if (noParagraphs.length < 3) {
    console.warn(`[YETERSİZ PARAGRAF] ${f} sadece ${noParagraphs.length} paragrafa sahip.`);
    formattingIssues++;
  }
  if (trParagraphs.length < 3) {
    console.warn(`[YETERSİZ PARAGRAF] tr/${f} sadece ${trParagraphs.length} paragrafa sahip.`);
    formattingIssues++;
  }
}

console.log(`\nSONUÇ:`);
console.log(`- İkiz Konu Sayısı: ${noSlugs.size}`);
console.log(`- Simetri Hataları: ${symmetryErrors}`);
console.log(`- Eksik Görseller: ${missingImages}`);
console.log(`- Tipografi Hataları: ${typographyIssues}`);
console.log(`- Format Uyuşmazlıkları: ${formattingIssues}`);

if (typoReports.length > 0) {
  console.log(`\nİlk 10 Tipografi Sorunu:`);
  console.log(JSON.stringify(typoReports.slice(0, 10), null, 2));
}
