import fs from 'node:fs';
import path from 'node:path';
import { deterministiskSjekk } from './sjekker.mjs';

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

function getAllMdFiles(dir) {
  const results = [];
  for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const fullPath = path.join(dir, item.name);
    if (item.isDirectory()) {
      for (const sub of fs.readdirSync(fullPath)) {
        if (sub.endsWith('.md')) {
          results.push({ relPath: path.join(item.name, sub), fullPath: path.join(fullPath, sub) });
        }
      }
    } else if (item.name.endsWith('.md')) {
      results.push({ relPath: item.name, fullPath });
    }
  }
  return results;
}

const noFiles = getAllMdFiles('src/content/yazilar/no');
const trFiles = getAllMdFiles('src/content/yazilar/tr');

console.log(`Toplam taranan dosya: NO=${noFiles.length}, TR=${trFiles.length}`);

const report = [];

const BEBEKSI_KELIMELER_TR = [
  'tatlım', 'bebeğim', 'minik dostum', 'küçük dostum', 'canlarım', 'cici',
  'minnoş', 'bıcır', 'ufaklık', 'minikler', 'miniğim', 'minik kaşifim'
];
const BEBEKSI_KELIMELER_NO = [
  'lille venn', 'søte venn', 'bitteliten venn', 'kjære lille'
];

for (const { relPath, fullPath } of noFiles) {
  const content = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseMd(content);
  const sjekk = deterministiskSjekk({ title: data.title, description: data.description, body }, { lang: 'no', alder: data.ageRange });
  const feil = [...sjekk.feil];

  // Çocuksu dil denetimi
  const lower = (data.title + ' ' + data.description + ' ' + body).toLowerCase();
  for (const b of BEBEKSI_KELIMELER_NO) {
    if (lower.includes(b)) {
      feil.push(`Aşırı çocuksu/bebeksi ifade: «${b}»`);
    }
  }

  // Kısa gövde denetimi
  const wordCount = (body.match(/[\p{L}\p{N}]+/gu) ?? []).length;
  if (wordCount < 60) {
    feil.push(`Gövde metni çok kısa (${wordCount} kelime)`);
  }

  // Çağrı kutusu denetimi
  if (!body.includes('> **')) {
    feil.push(`Eksik çağrı kutusu (> **...**)`);
  }

  if (feil.length > 0) {
    report.push({ file: 'no/' + relPath, age: data.ageRange, feil });
  }
}

for (const { relPath, fullPath } of trFiles) {
  const content = fs.readFileSync(fullPath, 'utf8');
  const { data, body } = parseMd(content);
  const sjekk = deterministiskSjekk({ title: data.title, description: data.description, body }, { lang: 'tr', alder: data.ageRange });
  const feil = [...sjekk.feil];

  // Çocuksu dil denetimi
  const lower = (data.title + ' ' + data.description + ' ' + body).toLowerCase();
  for (const b of BEBEKSI_KELIMELER_TR) {
    if (lower.includes(b)) {
      feil.push(`Aşırı çocuksu/bebeksi ifade: «${b}»`);
    }
  }

  // Kısa gövde denetimi
  const wordCount = (body.match(/[\p{L}\p{N}]+/gu) ?? []).length;
  if (wordCount < 60) {
    feil.push(`Gövde metni çok kısa (${wordCount} kelime)`);
  }

  // Çağrı kutusu denetimi
  if (!body.includes('> **')) {
    feil.push(`Eksik çağrı kutusu (> **...**)`);
  }

  if (feil.length > 0) {
    report.push({ file: 'tr/' + relPath, age: data.ageRange, feil });
  }
}

console.log(`Kusurlu/iyileştirilmesi gereken dosya sayısı: ${report.length}`);

// Kategorilere göre sorun dökümü
const feilGruplari = {};
for (const r of report) {
  for (const f of r.feil) {
    const tip = f.split(':')[0];
    feilGruplari[tip] = (feilGruplari[tip] || 0) + 1;
  }
}
console.log('Sorun dağılımı:', feilGruplari);

// Hatalı dosyaların tam listesini json olarak yaz
fs.writeFileSync('scripts/redaksjon/denetim-raporu.json', JSON.stringify(report, null, 2), 'utf8');
console.log('Rapor yazıldı: scripts/redaksjon/denetim-raporu.json');
