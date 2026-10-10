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
const files = fs.readdirSync(noDir).filter((f) => f.endsWith('.md'));

const shortArticles = [];
const clicheStarters = [];
const ageWordStats = {
  '4-6': { count: 0, noTotalWords: 0, trTotalWords: 0 },
  '7-9': { count: 0, noTotalWords: 0, trTotalWords: 0 },
  '10-12': { count: 0, noTotalWords: 0, trTotalWords: 0 },
};

for (const f of files) {
  const noParsed = parseMd(fs.readFileSync(path.join(noDir, f), 'utf8'));
  const trParsed = parseMd(fs.readFileSync(path.join(trDir, f), 'utf8'));

  const noWords = (noParsed.body.match(/[\p{L}\p{N}]+/gu) || []).length;
  const trWords = (trParsed.body.match(/[\p{L}\p{N}]+/gu) || []).length;

  const rawAge = String(noParsed.data.ageRange || '').replace(/\s*(år|yaş)/gi, '').trim();
  if (ageWordStats[rawAge]) {
    ageWordStats[rawAge].count++;
    ageWordStats[rawAge].noTotalWords += noWords;
    ageWordStats[rawAge].trTotalWords += trWords;
  }

  // Çok kısa makale kontrolü
  if (noWords < 80 || trWords < 80) {
    shortArticles.push({ file: f, noWords, trWords, cat: noParsed.data.category, age: noParsed.data.ageRange });
  }

  // Masal dışı kategorilerde klişe masal başlangıcı kontrolü
  if (noParsed.data.category !== 'eventyr') {
    if (/^(Det var en gang|En gang for lenge siden)/i.test(noParsed.body.trim())) {
      clicheStarters.push({ file: f, lang: 'no', snippet: noParsed.body.slice(0, 50) });
    }
    if (/^(Bir varmış bir yokmuş|Evvel zaman içinde)/i.test(trParsed.body.trim())) {
      clicheStarters.push({ file: f, lang: 'tr', snippet: trParsed.body.slice(0, 50) });
    }
  }
}

console.log('Kısa makale sayısı (<80 kelime):', shortArticles.length);
if (shortArticles.length > 0) console.log(shortArticles);

console.log('Klişe başlangıç sayısı (bilim/doğa/tarih):', clicheStarters.length);
if (clicheStarters.length > 0) console.log(clicheStarters);

console.log('\nYaş Gruplarına Göre Ortalama Kelime Sayıları:');
for (const [age, stats] of Object.entries(ageWordStats)) {
  const avgNo = Math.round(stats.noTotalWords / Math.max(1, stats.count));
  const avgTr = Math.round(stats.trTotalWords / Math.max(1, stats.count));
  console.log(`- ${age} Yaş (${stats.count} konu): NO ortalama ${avgNo} kelime, TR ortalama ${avgTr} kelime`);
}
