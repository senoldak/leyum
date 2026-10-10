import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { deterministiskSjekk } from './sjekker.mjs';

async function skannMappe(lang) {
  const dir = path.resolve(`src/content/yazilar/${lang}`);
  const mapper = await readdir(dir, { withFileTypes: true });
  let feilTeller = 0;

  for (const entry of mapper) {
    let filePath = '';
    if (entry.isDirectory()) {
      filePath = path.join(dir, entry.name, 'index.md');
    } else if (entry.isFile() && entry.name.endsWith('.md')) {
      filePath = path.join(dir, entry.name);
    } else {
      continue;
    }

    try {
      const raw = await readFile(filePath, 'utf8');
      const title = raw.match(/title:\s*"([^"]+)"/)?.[1] ?? entry.name;
      const rawAge = raw.match(/ageRange:\s*"([^"]+)"/)?.[1] ?? '7-9';
      const ageRange = rawAge.replace(/\s*(år|yaş)/gi, '').trim();
      const body = raw.replace(/^---[\s\S]*?---/, '').trim();

      const res = deterministiskSjekk({ title, body }, { lang, alder: ageRange });
      if (!res.ok) {
        console.warn(`⚠️ [${lang.toUpperCase()}] ${path.basename(filePath)} (${ageRange} år):`);
        res.feil.forEach((feil) => console.warn(`   - ${feil}`));
        feilTeller += res.feil.length;
      }
    } catch {
      // Dosya yoksa veya okunamadıysa geç
    }
  }
  return feilTeller;
}

async function main() {
  console.log('🔍 [Redaksjon] Tüm yayınlar taranıyor...');
  const feilNo = await skannMappe('no');
  const feilTr = await skannMappe('tr');
  if (feilNo === 0 && feilTr === 0) {
    console.log('✨ Harika! Tüm içerikler pedagojik ve yasal kurallara tam uyumlu.');
  } else {
    console.warn(`Toplam ${feilNo + feilTr} editoryal uyarı tespit edildi.`);
  }
}

main();
