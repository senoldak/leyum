import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { lagBilde } from '../bilde.mjs';
import { formaterMarkdown, typografi } from '../lib.mjs';
import { deterministiskSjekk } from '../sjekker.mjs';

export async function derleVeKaydetYazi({
  slug,
  category,
  ageRange,
  featured = false,
  no: { title: titleNo, description: descNo, body: bodyNo },
  tr: { title: titleTr, description: descTr, body: bodyTr },
}) {
  const alder = ageRange.includes('Yaş') ? ageRange.replace(' Yaş', '') : ageRange;

  // 1. Tipografi ve biçimlendirme
  const renBodyNo = typografi(bodyNo, { lang: 'no' });
  const renDescNo = typografi(descNo, { lang: 'no' });
  const renTitleNo = typografi(titleNo, { lang: 'no' });

  const renBodyTr = typografi(bodyTr, { lang: 'tr' });
  const renDescTr = typografi(descTr, { lang: 'tr' });
  const renTitleTr = typografi(titleTr, { lang: 'tr' });

  // 2. Deterministik Güvenlik ve Dil Kontrolleri
  const sjekkNo = deterministiskSjekk(
    { title: renTitleNo, description: renDescNo, body: renBodyNo },
    { lang: 'no', alder }
  );
  if (!sjekkNo.ok) {
    console.warn(`⚠️ [Sjekk NO] «${slug}» uyarıları:`, sjekkNo.feil);
  }

  const sjekkTr = deterministiskSjekk(
    { title: renTitleTr, description: renDescTr, body: renBodyTr },
    { lang: 'tr', alder }
  );
  if (!sjekkTr.ok) {
    console.warn(`⚠️ [Sjekk TR] «${slug}» uyarıları:`, sjekkTr.feil);
  }

  // 3. Kapak Görseli Üretimi
  const coverPath = await lagBilde({
    slug,
    title: renTitleNo,
    category,
    ageRange: alder,
  });

  const now = new Date('2026-10-10T12:00:00.000Z');

  // 4. Markdown Hazırlığı
  const mdNo = formaterMarkdown({
    meta: {
      lang: 'no',
      title: renTitleNo,
      description: renDescNo,
      category,
      cover: coverPath,
      coverAlt: renTitleNo,
      ageRange: `${alder} år`,
      featured,
      draft: false,
      date: now,
    },
    body: renBodyNo,
  });

  const mdTr = formaterMarkdown({
    meta: {
      lang: 'tr',
      title: renTitleTr,
      description: renDescTr,
      category,
      cover: coverPath,
      coverAlt: renTitleTr,
      ageRange: `${alder} Yaş`,
      featured,
      draft: false,
      date: now,
    },
    body: renBodyTr,
  });

  // 5. Dosyalara Yazım
  const dirNo = path.resolve('src/content/yazilar/no');
  const dirTr = path.resolve('src/content/yazilar/tr');
  await mkdir(dirNo, { recursive: true });
  await mkdir(dirTr, { recursive: true });

  await writeFile(path.join(dirNo, `${slug}.md`), mdNo, 'utf8');
  await writeFile(path.join(dirTr, `${slug}.md`), mdTr, 'utf8');

  return { slug, coverPath, ok: true };
}

export async function calistirParti(partiAdi, hikayeler) {
  console.log(`\n🚀 [Parti Derleyici] «${partiAdi}» üretimi başlatılıyor (${hikayeler.length} ikiz konu)...`);
  let basarili = 0;
  for (const h of hikayeler) {
    try {
      await derleVeKaydetYazi(h);
      basarili++;
      process.stdout.write(`  ✔ [${h.category}] ${h.slug} (${h.ageRange})\n`);
    } catch (err) {
      console.error(`  ✖ HATA [${h.slug}]:`, err);
    }
  }
  console.log(`✨ [${partiAdi}] Tamamlandı: ${basarili}/${hikayeler.length} ikiz hikaye (toplam ${basarili * 2} makale) üretildi.\n`);
}
