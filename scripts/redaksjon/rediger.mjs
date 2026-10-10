import { writeFile } from 'node:fs/promises';
import path from 'node:path';
import { deterministiskSjekk } from './sjekker.mjs';
import { vurderPedagogisk, TEKST_SKJEMA } from './pedagog.mjs';
import { vurderRedaksjonelt } from './vaktsjef.mjs';
import { sprakvaskBokmal, sprakvaskTurkce } from './sprakvask.mjs';
import { genererTvillingUtkast } from './tvilling.mjs';
import { lagBilde } from './bilde.mjs';
import { lagSlug, formaterMarkdown, lagreSett, gemini } from './lib.mjs';

export async function rettSak(sak, feilListe, lang = 'no') {
  const prompt = `Rett følgende feil i barneartikkelen. Hold deg til målgruppen og fjern uønskede formuleringer:
Problemer:
${feilListe.map((f) => `- ${f}`).join('\n')}

Utkast:
Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const rettet = await gemini({
    prompt,
    schema: TEKST_SKJEMA,
    systemInstruction: 'Rett problemene og returner et rent, barnevennlig utkast.',
  });

  return rettet ?? sak;
}

export async function redigerSak(sak, { lang = 'no', alder = '7-9' } = {}) {
  let utkast = sak;
  const merknader = [];

  for (let runde = 0; runde < 2; runde++) {
    const forhaandsSjekk = deterministiskSjekk(utkast, { lang, alder });
    const pedagog = await vurderPedagogisk(utkast, { alder });
    const redaktor = await vurderRedaksjonelt(utkast);

    const problemer = [
      ...forhaandsSjekk.feil,
      ...pedagog.problemer,
      ...redaktor.problemer,
    ];

    if (problemer.length === 0) break;
    merknader.push(...problemer);
    utkast = await rettSak(utkast, problemer, lang);
  }

  // Språkvask
  utkast = lang === 'no' ? await sprakvaskBokmal(utkast) : await sprakvaskTurkce(utkast);

  // Son kesin kapı (Final Gate)
  const sluttSjekk = deterministiskSjekk(utkast, { lang, alder });
  return { sak: utkast, merknader, stopp: sluttSjekk.feil };
}

export async function redigerOgPubliser({ tema, kategori, alder = '7-9' }) {
  console.log(`\n🚀 [Redaksjon] Üretim başlatılıyor: «${tema}» (${kategori}, ${alder} yaş)...`);
  const tvilling = await genererTvillingUtkast({ tema, kategori, alder });
  if (!tvilling) throw new Error('Taslak üretimi başarısız oldu');

  const redigertNo = await redigerSak(tvilling.no, { lang: 'no', alder });
  const redigertTr = await redigerSak(tvilling.tr, { lang: 'tr', alder });

  if (redigertNo.stopp.length > 0 || redigertTr.stopp.length > 0) {
    console.error('⛔ STOPP: İçerik yasal/pedagojik filtreleri geçemedi:');
    console.error('NO:', redigertNo.stopp);
    console.error('TR:', redigertTr.stopp);
    return { publisert: false, feil: [...redigertNo.stopp, ...redigertTr.stopp] };
  }

  const slug = lagSlug(redigertNo.sak.title);
  const coverPath = await lagBilde({
    slug,
    title: redigertNo.sak.title,
    category: kategori,
    ageRange: alder,
  });

  const now = new Date();
  const mdNo = formaterMarkdown({
    meta: {
      lang: 'no',
      title: redigertNo.sak.title,
      description: redigertNo.sak.description,
      category: kategori,
      cover: coverPath,
      coverAlt: redigertNo.sak.title,
      ageRange: alder,
      date: now,
    },
    body: redigertNo.sak.body,
  });

  const mdTr = formaterMarkdown({
    meta: {
      lang: 'tr',
      title: redigertTr.sak.title,
      description: redigertTr.sak.description,
      category: kategori,
      cover: coverPath,
      coverAlt: redigertTr.sak.title,
      ageRange: alder,
      date: now,
    },
    body: redigertTr.sak.body,
  });

  const stiNo = path.resolve(`src/content/yazilar/no/${slug}.md`);
  const stiTr = path.resolve(`src/content/yazilar/tr/${slug}.md`);

  await writeFile(stiNo, mdNo, 'utf8');
  await writeFile(stiTr, mdTr, 'utf8');
  await lagreSett(tema);

  console.log(`✅ [Redaksjon] Başarıyla yayınlandı:\n  - ${stiNo}\n  - ${stiTr}`);
  return { publisert: true, slug, stiNo, stiTr };
}
