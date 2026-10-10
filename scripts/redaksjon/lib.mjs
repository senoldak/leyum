import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export function lagSlug(tittel = '') {
  return tittel
    .toLowerCase()
    .replace(/[æ]/g, 'ae')
    .replace(/[ø]/g, 'o')
    .replace(/[å]/g, 'a')
    .replace(/[ı]/g, 'i')
    .replace(/[ğ]/g, 'g')
    .replace(/[ü]/g, 'u')
    .replace(/[ş]/g, 's')
    .replace(/[ö]/g, 'o')
    .replace(/[ç]/g, 'c')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

export function typografi(tekst = '', { lang = 'no' } = {}) {
  let res = String(tekst)
    .replace(/ - /g, lang === 'no' ? ' – ' : ' — ')
    .replace(/ {2,}/g, ' ')
    .trim();

  if (lang === 'no') {
    res = res
      .replace(/"([^"\n]+)"/g, '«$1»')
      .replace(/[“”„]([^“”„\n]+)[“”]/g, '«$1»')
      .replace(/^[-–]\s+(?=.+,\s*(?:sier|seier|svarer|forteller)\b)/gm, '– ');
  } else {
    res = res
      .replace(/"([^"\n]+)"/g, '“$1”')
      .replace(/«([^»\n]+)»/g, '“$1”')
      .replace(/^[-—]\s+(?=.+,\s*(?:dedi|diye sordu|ekledi)\b)/gm, '— ');
  }
  return res;
}

export function formaterMarkdown({ meta, body }) {
  const datoStr = meta.date instanceof Date ? meta.date.toISOString().split('T')[0] : meta.date;
  const yaml = [
    '---',
    `lang: ${meta.lang}`,
    `title: ${JSON.stringify(meta.title)}`,
    `description: ${JSON.stringify(meta.description)}`,
    `date: ${datoStr}`,
    `category: ${meta.category}`,
    meta.cover ? `cover: ${meta.cover}` : null,
    meta.coverAlt ? `coverAlt: ${JSON.stringify(meta.coverAlt)}` : null,
    `ageRange: ${JSON.stringify(meta.ageRange ?? '7-9')}`,
    `featured: ${Boolean(meta.featured)}`,
    `draft: ${Boolean(meta.draft)}`,
    '---',
    '',
    body.trim(),
    '',
  ]
    .filter((l) => l !== null)
    .join('\n');

  return yaml;
}

const SETT_FIL = path.resolve('scripts/redaksjon/sett.json');

export async function lesSett() {
  try {
    const raw = await readFile(SETT_FIL, 'utf8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export async function lagreSett(nokkel) {
  const sett = await lesSett();
  if (!sett.includes(nokkel)) {
    sett.push(nokkel);
    await mkdir(path.dirname(SETT_FIL), { recursive: true });
    await writeFile(SETT_FIL, JSON.stringify(sett.slice(-500), null, 2), 'utf8');
  }
}

export async function gemini({
  prompt,
  schema = null,
  temperature = 0.4,
  systemInstruction = '',
  apiKey = process.env.GEMINI_API_KEY,
  model = process.env.GEMINI_MODEL || 'gemini-2.5-flash',
}) {
  if (!apiKey) {
    console.warn('GEMINI_API_KEY bulunamadı, simüle ediliyor.');
    return null;
  }

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const bodyPayload = {
    contents: [{ role: 'user', parts: [{ text: prompt }] }],
    generationConfig: {
      temperature,
      ...(schema && {
        responseMimeType: 'application/json',
        responseSchema: schema,
      }),
    },
    ...(systemInstruction && {
      systemInstruction: { parts: [{ text: systemInstruction }] },
    }),
  };

  for (let forsok = 1; forsok <= 3; forsok++) {
    try {
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bodyPayload),
        signal: AbortSignal.timeout(90_000),
      });

      if (res.status === 429 || res.status >= 500) {
        await sleep(10_000 * forsok);
        continue;
      }

      if (!res.ok) {
        throw new Error(`Gemini ${res.status}: ${await res.text()}`);
      }

      const data = await res.json();
      const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text ?? '';
      return schema ? JSON.parse(rawText) : rawText;
    } catch (err) {
      if (forsok === 3) throw err;
      await sleep(3000 * forsok);
    }
  }
  return null;
}
