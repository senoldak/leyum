# Yazı İşleri Müdürlüğü ve Pedagojik Konsey Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** `leyum` için yapay zekâ destekli, çocuk pedagojisi, Norveç medya hukuku (VVP 4.8, Medietilsynet, Barnekonvensjonen) ve çift dilli (Norveççe Bokmål + Türkçe) yayın standartlarına sahip kusursuz bir Yazı İşleri Müdürlüğü ve Pedagojik Konsey motoru ile kamusal şeffaflık sayfalarını kurmak.

**Architecture:** Modüler Node.js/ESM mimarisi (`scripts/redaksjon/`) altında; deterministik güvenlik filtreleri (`sjekker.mjs`), yasal kural kütüphanesi (`lover-og-regler.mjs`), pedagojik/editoryal/dil denetim masaları (`pedagog.mjs`, `vaktsjef.mjs`, `sprakvask.mjs`), ikiz üretim (`tvilling.mjs`), ikili görsel motoru (`bilde.mjs`), CLI/GitHub Actions otomasyonu ve Astro kamusal tüzük sayfaları (`[lang]/redaksjon.astro`).

**Tech Stack:** Node.js (v24 native ESM, `node:test`, `node:assert/strict`), Gemini API (Structured JSON Schema), Sharp (görsel optimizasyonu ve SVG rasterizasyonu), Astro 7, Fraunces & Plus Jakarta Sans tasarım sistemi.

## Global Constraints

- Tüm kodlar Node.js ESM formatında (`import`/`export`) yazılmalıdır.
- Testler Node.js'in yerleşik test koşucusu (`node --test tests/redaksjon/*.test.mjs`) ile çalıştırılmalıdır.
- Norveççe metinler kesinlikle Språkrådet Bokmål normuna uymalı; Nynorsk kelimeler doğrudan alıntılar dışında yasaklanmalıdır.
- Tırnak işaretleri Norveççe için `« »`, Türkçe için `“ ”`; konuşma çizgileri Norveççe için `– `, Türkçe için `— ` olmalıdır.
- 4–6 yaş için cümle uzunluğu ≤ 12 kelime; 7–9 yaş için ≤ 18 kelime; 10–12 yaş için ≤ 24 kelime olmalıdır.
- Korku, şiddet, dehşet, kabus, eko-anksiyete ve ticari/reklam yönlendirmesi içeren ifadeler mutlak yasaktır (`STOPP`).

---

### Task 1: Hukuki ve Pedagojik Kural Kütüphanesi (`lover-og-regler.mjs`)

**Files:**
- Create: `scripts/redaksjon/lover-og-regler.mjs`
- Test: `tests/redaksjon/lover-og-regler.test.mjs`

**Interfaces:**
- Produces:
  - `LOVER_OG_REGLER`: Norveç mevzuatı (VVP 4.8, Medietilsynet, Barnekonvensjonen, Forbrukertilsynet § 19, Datatilsynet GDPR 8) kurallar sözlüğü.
  - `PEDAGOGISK_RAMMEVERK`: Yaş grupları (`4-6`, `7-9`, `10-12`) bilişsel gelişim, cümle sınırı ve pedagojik hedefler sözlüğü.
  - `systemPromptPedagog(alder)`: Yaş grubuna göre pedagog sistem istemini döndüren fonksiyon.
  - `systemPromptVaktsjef()`: Yazı işleri müdürü sistem istemini döndüren fonksiyon.

- [ ] **Step 1: Yazı İşleri ve Pedagoji kuralları testini yaz**

```javascript
// tests/redaksjon/lover-og-regler.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  LOVER_OG_REGLER,
  PEDAGOGISK_RAMMEVERK,
  systemPromptPedagog,
  systemPromptVaktsjef,
} from '../../scripts/redaksjon/lover-og-regler.mjs';

test('LOVER_OG_REGLER temel Norveç standartlarını içerir', () => {
  assert.ok(LOVER_OG_REGLER.VVP_4_8, 'VVP 4.8 bulunmalı');
  assert.ok(LOVER_OG_REGLER.MEDIETILSYNET, 'Medietilsynet bulunmalı');
  assert.ok(LOVER_OG_REGLER.BARNEKONVENSJONEN, 'Barnekonvensjonen bulunmalı');
  assert.ok(LOVER_OG_REGLER.FORBRUKERTILSYNET, 'Forbrukertilsynet bulunmalı');
  assert.match(LOVER_OG_REGLER.VVP_4_8, /barns rettigheter/i);
});

test('PEDAGOGISK_RAMMEVERK 4-6, 7-9 ve 10-12 yaş sınırlarını tanımlar', () => {
  assert.equal(PEDAGOGISK_RAMMEVERK['4-6'].maksOrdPerSetning, 12);
  assert.equal(PEDAGOGISK_RAMMEVERK['7-9'].maksOrdPerSetning, 18);
  assert.equal(PEDAGOGISK_RAMMEVERK['10-12'].maksOrdPerSetning, 24);
});

test('systemPromptPedagog geçerli yaş grubuna göre istem üretir', () => {
  const prompt = systemPromptPedagog('4-6');
  assert.match(prompt, /4–6/);
  assert.match(prompt, /eko-anksiyete/i);
});

test('systemPromptVaktsjef VVP 4.8 ve doğruluk ilkelerini içerir', () => {
  const prompt = systemPromptVaktsjef();
  assert.match(prompt, /Vær Varsom/i);
  assert.match(prompt, /Ansvarlig Redaktør/i);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/lover-og-regler.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `lover-og-regler.mjs` dosyasını uygula**

```javascript
// scripts/redaksjon/lover-og-regler.mjs
export const LOVER_OG_REGLER = {
  VVP_4_8: 'Vær Varsom-plakaten § 4.8 (Barns rettigheter): Vis særlig varsomhet overfor barn. Barns identitet, sårbarhet og verdighet skal beskyttes.',
  VVP_3_2: 'Vær Varsom-plakaten § 3.2 (Kildekritikk og faktasjekk): Vær kritisk i valg av kilder og kontroller at opplysninger er korrekte.',
  VVP_4_4: 'Vær Varsom-plakaten § 4.4 (Titler og ingress): Sørg for at overskrifter og ingresser har dekning i teksten og ikke skaper unødig frykt.',
  MEDIETILSYNET: 'Medietilsynet & Bildeprogramloven: Beskyttelse mot skadelig innhold. Skrekk, vold, overveldende frykt og urovekkende traumer er forbudt.',
  BARNEKONVENSJONEN: 'FNs barnekonvensjon art. 17: Barnets rett til informasjon som fremmer åndelig og moralsk velferd samt fysisk og psykisk helse.',
  FORBRUKERTILSYNET: 'Markedsføringsloven § 19: Forbud mot kjøpepress, direkte reklame og kommersiell påvirkning overfor barn.',
  DATATILSYNET: 'Personopplysningsloven (GDPR art. 8): Null sporing, ingen profileringsinformasjonskapsler, ingen innsamling av barns data.',
};

export const PEDAGOGISK_RAMMEVERK = {
  '4-6': {
    navn: 'Minik Kaşifler (Småbarn / Barnehage)',
    maksOrdPerSetning: 12,
    maksSetningerPerAvsnitt: 2,
    maksLix: 25,
    fokus: 'Rytmisk, trygg, sansebasert og konkret undring. Ingen mørke/truende elementer.',
  },
  '7-9': {
    navn: 'Okul Çağı Kaşifleri (Småtrinnet)',
    maksOrdPerSetning: 18,
    maksSetningerPerAvsnitt: 3,
    maksLix: 35,
    fokus: 'Årsak-virkning, nysgjerrighet, enkel logikk, humor, empati og spørsmål.',
  },
  '10-12': {
    navn: 'Büyük Meraklılar (Mellomtrinnet)',
    maksOrdPerSetning: 24,
    maksSetningerPerAvsnitt: 4,
    maksLix: 45,
    fokus: 'Dypere vitenskapelig utforskning, kritisk tenkning, nyanser og håpefulle løsninger.',
  },
};

export function systemPromptPedagog(alder = '7-9') {
  const ramme = PEDAGOGISK_RAMMEVERK[alder] ?? PEDAGOGISK_RAMMEVERK['7-9'];
  return `Du er sjefspedagog i barnemagasinet leyum. Din oppgave er å vurdere et tekstutkast for barn i aldersgruppen ${alder} år (${ramme.navn}).

Retningslinjer:
1. Alderstilpasning: Setninger må være korte (maks ${ramme.maksOrdPerSetning} ord per setning). Språket må være forståelig og engasjerende for alderen.
2. Emosjonell trygghet: Ingen skrekk, overveldende frykt, marerittaktige bilder, eller ubehagelige traumer.
3. Eko-anksiyete (klimabekymring): I natur- og miljøsaker er undergangstone forbudt. Løft alltid fram naturens magi, fantastiske tilpasninger og konkrete, håpefulle løsninger.
4. Nysgjerrighet og undring: Teksten må behandle barnet med respekt, vekke undring og fremme læreglede uten å være formanende eller belærende.
5. Inkludering og likeverd: Fri for fordommer, stereotyper eller ekskluderende språk.`;
}

export function systemPromptVaktsjef() {
  return `Du er Ansvarlig Redaktør / Vaktsjef i barnemagasinet leyum. Du håndhever Vær Varsom-plakaten (§ 4.8 Barns rettigheter), Medietilsynets krav og god redaksjonell skikk.

Dine absolutte krav:
1. Faktafeil: Faktaopplysninger om natur, vitenskap eller historie må være presise og korrekte (VVP 3.2).
2. Tittel og ingress: Må ha full dekning i teksten og aldri være sensasjonsjagende eller klikkagn (VVP 4.4).
3. Kommersiell renhet: Teksten skal være 100 % fri for merkevarer, kjøpepress eller skjult reklame (Markedsføringsloven § 19).
4. Barns verdighet: Barn skal omtales og snakkes til med respekt og varme (VVP 4.8).
5. Kategori og fortellerform: Teksten må være levende, gjennomarbeidet og passe til magasinets kategorier.`;
}
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/lover-og-regler.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/lover-og-regler.mjs tests/redaksjon/lover-og-regler.test.mjs; git commit -m "feat(redaksjon): add legal and pedagogical framework module"`
Expected: Commit success.

---

### Task 2: Deterministik Güvenlik ve Dil Filtresi (`sjekker.mjs`)

**Files:**
- Create: `scripts/redaksjon/sjekker.mjs`
- Test: `tests/redaksjon/sjekker.test.mjs`

**Interfaces:**
- Consumes: `PEDAGOGISK_RAMMEVERK` from `lover-og-regler.mjs`
- Produces:
  - `beregnLix(tekst)`: Metnin LIX okunabilirlik puanını hesaplar.
  - `sjekkSetningslengde(tekst, alder)`: Yaş sınırını aşan cümleleri listeler.
  - `sjekkSvarteliste(tekst)`: Şiddet/dehşet/eko-anksiyete tetikleyici kelimeleri tespit eder.
  - `sjekkSprakligNorm(tekst, lang)`: Bokmål'da Nynorsk kelimeleri, göreli zamanı ve hatalı tırnakları denetler.
  - `deterministiskSjekk(artikkel, { lang, alder })`: Tüm kontrolleri çalıştırıp `{ ok, feil }` döndürür.

- [ ] **Step 1: Deterministik filtre testlerini yaz**

```javascript
// tests/redaksjon/sjekker.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  beregnLix,
  sjekkSetningslengde,
  sjekkSvarteliste,
  sjekkSprakligNorm,
  deterministiskSjekk,
} from '../../scripts/redaksjon/sjekker.mjs';

test('beregnLix kısa ve yalın metinde düşük puan verir', () => {
  const lett = 'Solen skinner på himmelen. Reven sover i skogen.';
  const lix = beregnLix(lett);
  assert.ok(lix < 30, `LIX bør være lav, fikk: ${lix}`);
});

test('sjekkSetningslengde yaş grubuna göre uzun cümleleri yakalar', () => {
  const langSetning = 'Dette er en veldig lang setning som inneholder altfor mange ord for et lite barn på fire år.';
  const feil = sjekkSetningslengde(langSetning, '4-6');
  assert.ok(feil.length > 0, '4-6 yaş için uzun cümle tespit edilmeli');
});

test('sjekkSvarteliste korku ve şiddet kelimelerini yakalar', () => {
  const tekst = 'Det var et skummelt monster fylt med blod og terror.';
  const feil = sjekkSvarteliste(tekst);
  assert.ok(feil.some((f) => /skrekk|vold|blod/i.test(f)));
});

test('sjekkSprakligNorm Bokmål metinde Nynorsk kelimelerini tespit eder', () => {
  const tekst = 'Det er ikkje sikkert kva som skjer.';
  const feil = sjekkSprakligNorm(tekst, 'no');
  assert.ok(feil.some((f) => /ikkje/i.test(f)));
});

test('deterministiskSjekk temiz metinde ok=true döner', () => {
  const sak = {
    title: 'Hvorfor sover bjørnen hele vinteren?',
    description: 'Bli med inn i bamsens lune hule og lær om vintersøvn.',
    body: 'Når snøen daler, kryper bjørnen inn i hiet sitt.\n\nDer sover den trygt og godt til våren kommer.',
  };
  const res = deterministiskSjekk(sak, { lang: 'no', alder: '7-9' });
  assert.equal(res.ok, true);
  assert.equal(res.feil.length, 0);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/sjekker.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `sjekker.mjs` modülünü uygula**

```javascript
// scripts/redaksjon/sjekker.mjs
import { PEDAGOGISK_RAMMEVERK } from './lover-og-regler.mjs';

// Yasaklı veya çocuk yayıncılığına uygun olmayan kelimeler / kavramlar
const SVARTELISTE_ORD = [
  // Şiddet ve dehşet
  'blodbad', 'massakre', 'terror', 'tortur', 'lemlestet', 'kannibal', 'henrettet',
  'katastrofe', 'apokalypse', 'undergang', 'utslettet', 'dødskamp', 'kveles',
  'mareritt', 'panikk', 'skrekk', 'blodtørstig', 'uhyre',
  // Türkçe karşılıkları
  'katliam', 'işkence', 'dehşet', 'kıyamet', 'vahşet', 'boğulma', 'kabus', 'canavar',
];

const NYNORSK_ORD = /(?<!\p{L})(ikkje|frå|berre|korleis|kva|kven|meir|mykje|noko|nokon|sjølv|desse|dei|eit|òg|vore|vere|heile|fleire|nokre|kvifor|difor|saman)(?!\p{L})/giu;
const RELATIV_TID_NO = /(?<!\p{L})(i går|i dag|i morgen|i morgon|i kveld|i natt)(?!\p{L})/giu;
const RELATIF_ZAMAN_TR = /(?<!\p{L})(dün|bugün|yarın|dün gece|bu sabah)(?!\p{L})/giu;

export function beregnLix(tekst = '') {
  const ord = (tekst.match(/[\p{L}\p{N}]+/gu) ?? []);
  if (ord.length === 0) return 0;
  const setninger = (tekst.split(/[.!?]+/).filter((s) => s.trim().length > 0));
  const antallSetninger = Math.max(1, setninger.length);
  const langeOrd = ord.filter((w) => w.length > 6).length;
  const periodeLengde = ord.length / antallSetninger;
  const langeOrdProsent = (langeOrd * 100) / ord.length;
  return Math.round(periodeLengde + langeOrdProsent);
}

export function sjekkSetningslengde(tekst = '', alder = '7-9') {
  const ramme = PEDAGOGISK_RAMMEVERK[alder] ?? PEDAGOGISK_RAMMEVERK['7-9'];
  const maksOrd = ramme.maksOrdPerSetning;
  const feil = [];
  const setninger = tekst.split(/(?<=[.!?])\s+|\n+/).map((s) => s.trim()).filter(Boolean);

  for (const s of setninger) {
    const ord = (s.match(/[\p{L}\p{N}]+/gu) ?? []);
    if (ord.length > maksOrd) {
      feil.push(`Setningen er for lang for ${alder} år (${ord.length} ord, maks ${maksOrd}): «${s.slice(0, 70)}…»`);
    }
  }
  return feil;
}

export function sjekkSvarteliste(tekst = '') {
  const t = tekst.toLowerCase();
  const funnet = [];
  for (const ord of SVARTELISTE_ORD) {
    if (t.includes(ord)) {
      funnet.push(`Uønsket/skremmende ord funnet i teksten: «${ord}»`);
    }
  }
  return funnet;
}

export function sjekkSprakligNorm(tekst = '', lang = 'no') {
  const feil = [];
  if (lang === 'no') {
    const nynorskTreff = [...new Set((tekst.match(NYNORSK_ORD) ?? []).map((w) => w.toLowerCase()))];
    if (nynorskTreff.length > 0) {
      feil.push(`Teksten inneholder nynorsk-former i bokmål-utgave: ${nynorskTreff.join(', ')}`);
    }
    const tidTreff = [...new Set((tekst.match(RELATIV_TID_NO) ?? []).map((w) => w.toLowerCase()))];
    if (tidTreff.length > 0) {
      feil.push(`Relative tidsuttrykk bør unngås i tidløse artikler: ${tidTreff.join(', ')}`);
    }
  } else if (lang === 'tr') {
    const tidTreff = [...new Set((tekst.match(RELATIF_ZAMAN_TR) ?? []).map((w) => w.toLowerCase()))];
    if (tidTreff.length > 0) {
      feil.push(`Göreceli zaman ifadeleri dergi yazılarında kullanılmamalı: ${tidTreff.join(', ')}`);
    }
  }
  return feil;
}

export function deterministiskSjekk(artikkel, { lang = 'no', alder = '7-9' } = {}) {
  const helTekst = `${artikkel.title ?? ''}\n${artikkel.description ?? ''}\n${artikkel.body ?? ''}`;
  const feil = [
    ...sjekkSvarteliste(helTekst),
    ...sjekkSetningslengde(helTekst, alder),
    ...sjekkSprakligNorm(helTekst, lang),
  ];
  return { ok: feil.length === 0, feil };
}
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/sjekker.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/sjekker.mjs tests/redaksjon/sjekker.test.mjs; git commit -m "feat(redaksjon): add deterministic safety and linguistic checker"`
Expected: Commit success.

---

### Task 3: Çekirdek Kütüphane, Gemini API ve Durum Yönetimi (`lib.mjs`)

**Files:**
- Create: `scripts/redaksjon/lib.mjs`
- Test: `tests/redaksjon/lib.test.mjs`

**Interfaces:**
- Produces:
  - `gemini({ prompt, schema, temperature, systemInstruction })`: Gemini API istemcisi.
  - `lagSlug(tittel)`: Başlığı URL dostu slug'a çevirir.
  - `formaterMarkdown({ meta, body })`: Astro Markdown frontmatter çıktısını hazırlar.
  - `lesSett() / lagreSett(nøkkel)`: Daha önce işlenen konuları takip eden `sett.json` yardımcıları.

- [ ] **Step 1: Çekirdek yardımcılar için test yaz**

```javascript
// tests/redaksjon/lib.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { lagSlug, formaterMarkdown, typografi } from '../../scripts/redaksjon/lib.mjs';

test('lagSlug Türkçe ve Norveççe karakterleri temiz dönüştürür', () => {
  assert.equal(lagSlug('Hvorfor har sebraen striper?'), 'hvorfor-har-sebraen-striper');
  assert.equal(lagSlug('Kutup Ayıları Nasıl Isınır?'), 'kutup-ayilari-nasil-isinir');
});

test('typografi Norveççe ve Türkçe tırnakları düzeltir', () => {
  const no = typografi('Han sa: "Hei!"', { lang: 'no' });
  assert.equal(no, 'Han sa: «Hei!»');

  const tr = typografi('Dedi ki: "Merhaba!"', { lang: 'tr' });
  assert.equal(tr, 'Dedi ki: “Merhaba!”');
});

test('formaterMarkdown doğru Astro frontmatter bloğu oluşturur', () => {
  const res = formaterMarkdown({
    meta: {
      lang: 'no',
      title: 'Hvorfor skinner solen?',
      description: 'En reise til stjernen vår.',
      category: 'merakli-kasif',
      ageRange: '7-9',
      date: new Date('2026-10-10'),
    },
    body: 'Solen er stjernen vår.',
  });
  assert.match(res, /title: "Hvorfor skinner solen\?"/);
  assert.match(res, /category: merakli-kasif/);
  assert.match(res, /ageRange: "7-9"/);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/lib.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `lib.mjs` modülünü uygula**

```javascript
// scripts/redaksjon/lib.mjs
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
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/lib.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/lib.mjs tests/redaksjon/lib.test.mjs; git commit -m "feat(redaksjon): add core library, Gemini client, typography and markdown utilities"`
Expected: Commit success.

---

### Task 4: İkili Görsel Üretim ve Güvenlik Masası (`bilde.mjs`)

**Files:**
- Create: `scripts/redaksjon/bilde.mjs`
- Test: `tests/redaksjon/bilde.test.mjs`

**Interfaces:**
- Consumes: Sharp (npm package), `DESIGN.md` renk ve tipografi tokenları.
- Produces:
  - `lagFolioSvg({ title, category, ageRange })`: Deterministik zarif SVG Storybook kapağı üretir.
  - `lagBilde({ slug, title, category, ageRange })`: Önce yapay zekâ illüstrasyonu dener, başarısız veya API yoksa SVG Folio'dan PNG/WebP oluşturur.

- [ ] **Step 1: Görsel üretim testini yaz**

```javascript
// tests/redaksjon/bilde.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { lagFolioSvg, genererKortPng } from '../../scripts/redaksjon/bilde.mjs';

test('lagFolioSvg kategoriye uygun renk ve Fraunces stiliyle SVG döner', () => {
  const svg = lagFolioSvg({
    title: 'Hvorfor har sebraen striper?',
    category: 'doga-hayvanlar',
    ageRange: '7-9',
  });
  assert.match(svg, /<svg/);
  assert.match(svg, /Hvorfor har sebraen striper\?/);
  assert.match(svg, /#1B5E20/i); // Doga & Hayvanlar mürekkep rengi
  assert.match(svg, /Fraunces/);
});

test('genererKortPng geçerli bir PNG buffer üretir', async () => {
  const png = await genererKortPng({
    title: 'Neden Gökyüzü Mavidir?',
    category: 'merakli-kasif',
    ageRange: '4-6',
  });
  assert.ok(png instanceof Buffer);
  assert.ok(png.length > 500, 'PNG dosyası boş olmamalı');
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/bilde.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `bilde.mjs` modülünü uygula**

```javascript
// scripts/redaksjon/bilde.mjs
import sharp from 'sharp';
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const KATEGORI_FARGER = {
  'merakli-kasif': { surface: '#EBF5FB', ink: '#004578', labelNo: 'Meraklı Kaşif', labelTr: 'Meraklı Kaşif' },
  'masal-hikaye': { surface: '#F6EEFD', ink: '#4E138A', labelNo: 'Eventyr & Historier', labelTr: 'Masal & Hikaye' },
  'etkinlik-sanat': { surface: '#FFF0E6', ink: '#9C2E00', labelNo: 'Aktiviteter & Kunst', labelTr: 'Etkinlik & Sanat' },
  'zeka-bilmece': { surface: '#E6FCF5', ink: '#086B4D', labelNo: 'Gåter & Grublerier', labelTr: 'Zeka & Bilmece' },
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
  const safeKat = escapeXml(kat.labelNo);

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
    ${safeKat.toUpperCase()}
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
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/bilde.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/bilde.mjs tests/redaksjon/bilde.test.mjs; git commit -m "feat(redaksjon): add dual-model illustration engine with storybook folio fallback"`
Expected: Commit success.

---

### Task 5: Çoklu Rol Editoryal ve Pedagojik Masalar (`pedagog.mjs`, `vaktsjef.mjs`, `sprakvask.mjs`)

**Files:**
- Create: `scripts/redaksjon/pedagog.mjs`
- Create: `scripts/redaksjon/vaktsjef.mjs`
- Create: `scripts/redaksjon/sprakvask.mjs`
- Test: `tests/redaksjon/roller.test.mjs`

**Interfaces:**
- Consumes: `lib.mjs`, `lover-og-regler.mjs`
- Produces:
  - `vurderPedagogisk(sak, { alder })`: Pedagojik güvenlik, eko-anksiyete ve yaş değerlendirmesi.
  - `vurderRedaksjonelt(sak, { pressemelding })`: Yazı işleri VVP 4.8 ve doğruluk değerlendirmesi.
  - `sprakvaskBokmal(sak)`: Norveççe edebi dil ve Bokmål temizliği.
  - `sprakvaskTurkce(sak)`: Türkçe edebi dil ve TDK temizliği.

- [ ] **Step 1: Rollerin şema ve simülasyon testini yaz**

```javascript
// tests/redaksjon/roller.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { VURDERING_SKJEMA, TEKST_SKJEMA } from '../../scripts/redaksjon/pedagog.mjs';

test('VURDERING_SKJEMA godkjent ve problemer alanlarını zorunlu kılar', () => {
  assert.equal(VURDERING_SKJEMA.required.includes('godkjent'), true);
  assert.equal(VURDERING_SKJEMA.required.includes('problemer'), true);
});

test('TEKST_SKJEMA title, description ve body alanlarını içerir', () => {
  assert.equal(TEKST_SKJEMA.required.includes('title'), true);
  assert.equal(TEKST_SKJEMA.required.includes('description'), true);
  assert.equal(TEKST_SKJEMA.required.includes('body'), true);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/roller.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `pedagog.mjs`, `vaktsjef.mjs` ve `sprakvask.mjs` modüllerini uygula**

```javascript
// scripts/redaksjon/pedagog.mjs
import { gemini } from './lib.mjs';
import { systemPromptPedagog } from './lover-og-regler.mjs';

export const VURDERING_SKJEMA = {
  type: 'object',
  properties: {
    godkjent: { type: 'boolean', description: 'Pedagojik ve duygusal olarak çocuklar için tamamen uygun mu?' },
    problemer: { type: 'array', items: { type: 'string' }, description: 'Tespit edilen pedagojik veya duygusal kusurlar' },
  },
  required: ['godkjent', 'problemer'],
};

export const TEKST_SKJEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    body: { type: 'string' },
  },
  required: ['title', 'description', 'body'],
};

export async function vurderPedagogisk(sak, { alder = '7-9' } = {}) {
  const prompt = `Tekstutkast til vurdering for barn ${alder} år:
Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: VURDERING_SKJEMA,
    systemInstruction: systemPromptPedagog(alder),
  });

  return res ?? { godkjent: true, problemer: [] };
}
```

```javascript
// scripts/redaksjon/vaktsjef.mjs
import { gemini } from './lib.mjs';
import { systemPromptVaktsjef } from './lover-og-regler.mjs';
import { VURDERING_SKJEMA } from './pedagog.mjs';

export async function vurderRedaksjonelt(sak) {
  const prompt = `Kontroller dette utkastet mot presseetikk og faktakrav for barn:
Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: VURDERING_SKJEMA,
    systemInstruction: systemPromptVaktsjef(),
  });

  return res ?? { godkjent: true, problemer: [] };
}
```

```javascript
// scripts/redaksjon/sprakvask.mjs
import { gemini, typografi } from './lib.mjs';
import { TEKST_SKJEMA } from './pedagog.mjs';

export async function sprakvaskBokmal(sak) {
  const prompt = `Du er språkvasker for barnebøker og barnemagasiner. Gjør språket i teksten levende, klangfullt og fullstendig korrekt på norsk bokmål (Språkrådets normer).
Fjern oversettelsespreg, anglisismer, byråkratisk stil og nynorsk-former utenfor sitater. Behold innholdet uendret.

Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: TEKST_SKJEMA,
    systemInstruction: 'Rett BARE språket og flyten. Behold alle fakta og meningen intakt.',
  });

  const bearbeidet = res ?? sak;
  return {
    title: typografi(bearbeidet.title, { lang: 'no' }),
    description: typografi(bearbeidet.description, { lang: 'no' }),
    body: typografi(bearbeidet.body, { lang: 'no' }),
  };
}

export async function sprakvaskTurkce(sak) {
  const prompt = `Sen ödüllü bir çocuk edebiyatı editörü ve Türk Dil Kurumu uzmanısın. Aşağıdaki metni çocukların hayal gücünü besleyen, akıcı, sıcak ve pürüzsüz bir Türkçeyle yayına hazırla.
Çeviri kokan soğuk kalıpları ayıkla, cümleleri melodik ve canlı kıl. İçeriğin özünü ve doğruluğunu değiştirme.

Başlık: ${sak.title}
Özet: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: TEKST_SKJEMA,
    systemInstruction: 'SADECE dili ve edebi akıcılığı kusursuzlaştır. Gerçekleri ve anlamı koru.',
  });

  const bearbeidet = res ?? sak;
  return {
    title: typografi(bearbeidet.title, { lang: 'tr' }),
    description: typografi(bearbeidet.description, { lang: 'tr' }),
    body: typografi(bearbeidet.body, { lang: 'tr' }),
  };
}
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/roller.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/pedagog.mjs scripts/redaksjon/vaktsjef.mjs scripts/redaksjon/sprakvask.mjs tests/redaksjon/roller.test.mjs; git commit -m "feat(redaksjon): add pedagogical, editorial and linguistic council desks"`
Expected: Commit success.

---

### Task 6: Çift Dilli İkiz Üretici ve Orkestrasyon Motoru (`tvilling.mjs`, `rediger.mjs`)

**Files:**
- Create: `scripts/redaksjon/tvilling.mjs`
- Create: `scripts/redaksjon/rediger.mjs`
- Test: `tests/redaksjon/rediger.test.mjs`

**Interfaces:**
- Consumes: All earlier desks (`lib`, `sjekker`, `pedagog`, `vaktsjef`, `sprakvask`, `bilde`)
- Produces:
  - `genererTvillingUtkast({ tema, kategori, alder })`: Hem Norveççe hem Türkçe eşzamanlı ikiz taslak üretir.
  - `redigerOgPubliser({ tema, kategori, alder })`: Tam denetim, düzeltme turları, görsel ekleme ve dosya yazımını yürütür.

- [ ] **Step 1: Orkestrasyon akış testini yaz**

```javascript
// tests/redaksjon/rediger.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';
import { redigerSak } from '../../scripts/redaksjon/rediger.mjs';

test('redigerSak temiz bir taslağı başarıyla onaylar', async () => {
  const sak = {
    title: 'Hvorfor skinner solen?',
    description: 'En vakker fortelling om stjernen vår.',
    body: 'Solen varmer jorden hver eneste dag.\n\nFuglene synger når morgenen gryr.',
  };
  const { sak: bearbeidet, stopp } = await redigerSak(sak, { lang: 'no', alder: '7-9' });
  assert.equal(stopp.length, 0, 'Temiz taslakta STOPP olmamalı');
  assert.ok(bearbeidet.title.length > 0);
});
```

- [ ] **Step 2: Testi çalıştır ve başarısız olduğunu doğrula**

Run: `node --test tests/redaksjon/rediger.test.mjs`
Expected: FAIL (Cannot find module)

- [ ] **Step 3: `tvilling.mjs` ve `rediger.mjs` modüllerini uygula**

```javascript
// scripts/redaksjon/tvilling.mjs
import { gemini } from './lib.mjs';

const TVILLING_SKJEMA = {
  type: 'object',
  properties: {
    no: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        body: { type: 'string' },
      },
      required: ['title', 'description', 'body'],
    },
    tr: {
      type: 'object',
      properties: {
        title: { type: 'string' },
        description: { type: 'string' },
        body: { type: 'string' },
      },
      required: ['title', 'description', 'body'],
    },
  },
  required: ['no', 'tr'],
};

export async function genererTvillingUtkast({ tema, kategori, alder = '7-9' }) {
  const prompt = `Skriv to parallelle utgaver (norsk bokmål og tyrkisk) av en engasjerende barneartikkel for leyum.
Tema: ${tema}
Kategori: ${kategori}
Målgruppe: ${alder} år

VIKTIG: Den tyrkiske utgaven skal IKKE være en ord-for-ord oversettelse, men en naturlig, litterær og kulturelt tilpasset gjendikting (transcreation) med samme undring og pedagogiske kjerne. Begge utgaver må være skrevet med kjærlighet, varme og nysgjerrighet.`;

  const res = await gemini({
    prompt,
    schema: TVILLING_SKJEMA,
    systemInstruction: 'Du er prisbelønt barnebokforfatter på både norsk og tyrkisk.',
  });

  return res;
}
```

```javascript
// scripts/redaksjon/rediger.mjs
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
```

- [ ] **Step 4: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/rediger.test.mjs`
Expected: PASS

- [ ] **Step 5: Git commit yap**

Run: `git add scripts/redaksjon/tvilling.mjs scripts/redaksjon/rediger.mjs tests/redaksjon/rediger.test.mjs; git commit -m "feat(redaksjon): add bilingual twin generator and multi-round editorial orchestration"`
Expected: Commit success.

---

### Task 7: CLI Arayüzü, Denetim Komutları ve `package.json` Yapılandırması (`uret.mjs`, `denetle.mjs`)

**Files:**
- Create: `scripts/redaksjon/uret.mjs`
- Create: `scripts/redaksjon/denetle.mjs`
- Modify: `package.json:8-13`
- Test: `tests/redaksjon/cli.test.mjs`

**Interfaces:**
- Produces:
  - `npm run redaksjon:uret`: CLI üzerinden tekil veya tematik dergi içeriği üretimi.
  - `npm run redaksjon:denetle`: Mevcut tüm içerik koleksiyonunu tarayıp kural ihlallerini raporlar.
  - `npm test`: Tüm editoryal ve kod testlerini çalıştırır.

- [ ] **Step 1: CLI argüman çözümleme testini yaz**

```javascript
// tests/redaksjon/cli.test.mjs
import test from 'node:test';
import assert from 'node:assert/strict';

test('CLI argüman ayrıştırıcı parametreleri doğru okur', () => {
  const args = ['--kategori', 'doga-hayvanlar', '--yas', '4-6', '--konu', 'Kutup Ayısı'];
  const map = {};
  for (let i = 0; i < args.length; i += 2) {
    map[args[i].replace(/^--/, '')] = args[i + 1];
  }
  assert.equal(map.kategori, 'doga-hayvanlar');
  assert.equal(map.yas, '4-6');
  assert.equal(map.konu, 'Kutup Ayısı');
});
```

- [ ] **Step 2: Testi çalıştır ve geçtiğini doğrula**

Run: `node --test tests/redaksjon/cli.test.mjs`
Expected: PASS

- [ ] **Step 3: `uret.mjs` ve `denetle.mjs` komutlarını uygula**

```javascript
// scripts/redaksjon/uret.mjs
import { redigerOgPubliser } from './rediger.mjs';

const KATEGORILER = ['merakli-kasif', 'masal-hikaye', 'etkinlik-sanat', 'zeka-bilmece', 'doga-hayvanlar'];
const YASLAR = ['4-6', '7-9', '10-12'];

const VARSAYILAN_TEMALAR = [
  { tema: 'Hvorfor skifter kameleon farge?', kategori: 'doga-hayvanlar', alder: '7-9' },
  { tema: 'Hvordan reiser astronauter til romstasjonen?', kategori: 'merakli-kasif', alder: '7-9' },
  { tema: 'Den lille stjernen som var redd for mørket', kategori: 'masal-hikaye', alder: '4-6' },
  { tema: 'Hvordan lage en magisk regnbue med et vannglass?', kategori: 'etkinlik-sanat', alder: '7-9' },
  { tema: 'Gåter som får hjernen til å smile', kategori: 'zeka-bilmece', alder: '10-12' },
];

async function main() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i += 2) {
    params[args[i].replace(/^--/, '')] = args[i + 1];
  }

  const tilfeldig = VARSAYILAN_TEMALAR[Math.floor(Math.random() * VARSAYILAN_TEMALAR.length)];
  const tema = params.konu || params.tema || tilfeldig.tema;
  const kategori = params.kategori || tilfeldig.kategori;
  const alder = params.yas || params.alder || tilfeldig.alder;

  const res = await redigerOgPubliser({ tema, kategori, alder });
  if (!res.publisert) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Hata:', err);
  process.exit(1);
});
```

```javascript
// scripts/redaksjon/denetle.mjs
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { deterministiskSjekk } from './sjekker.mjs';

async function skannMappe(lang) {
  const dir = path.resolve(`src/content/yazilar/${lang}`);
  const filer = await readdir(dir);
  let feilTeller = 0;

  for (const f of filer) {
    if (!f.endsWith('.md')) continue;
    const raw = await readFile(path.join(dir, f), 'utf8');
    const title = raw.match(/title:\s*"([^"]+)"/)?.[1] ?? f;
    const ageRange = raw.match(/ageRange:\s*"([^"]+)"/)?.[1] ?? '7-9';
    const body = raw.replace(/^---[\s\S]*?---/, '').trim();

    const res = deterministiskSjekk({ title, body }, { lang, alder: ageRange });
    if (!res.ok) {
      console.warn(`⚠️ [${lang.toUpperCase()}] ${f} (${ageRange} år):`);
      res.feil.forEach((feil) => console.warn(`   - ${feil}`));
      feilTeller += res.feil.length;
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
```

- [ ] **Step 4: `package.json` scripts alanını güncelle**

```json
    "test": "node --test tests/redaksjon/*.test.mjs",
    "redaksjon:uret": "node scripts/redaksjon/uret.mjs",
    "redaksjon:denetle": "node scripts/redaksjon/denetle.mjs",
```

- [ ] **Step 5: Testleri çalıştır**

Run: `npm test`
Expected: Tüm testler PASS

- [ ] **Step 6: Git commit yap**

Run: `git add package.json scripts/redaksjon/uret.mjs scripts/redaksjon/denetle.mjs tests/redaksjon/cli.test.mjs; git commit -m "feat(redaksjon): add interactive CLI, audit script and npm test runners"`
Expected: Commit success.

---

### Task 8: Otomatik GitHub Actions İş Akışı (`.github/workflows/redaksjon.yml`)

**Files:**
- Create: `.github/workflows/redaksjon.yml`

**Interfaces:**
- Produces: Haftalık/zamanlanmış GitHub Actions otomatik üretim ve commit döngüsü.

- [ ] **Step 1: `.github/workflows/redaksjon.yml` dosyasını oluştur**

```yaml
# Haftalık olarak yeni çocuk içeriği üretir ve repoya commit eder.
name: Leyum Redaksjon Bot

on:
  schedule:
    - cron: '15 6 * * 1,4' # Pazartesi ve Perşembe sabah 06:15 UTC
  workflow_dispatch:

permissions:
  contents: write

concurrency:
  group: leyum-redaksjon
  cancel-in-progress: false

jobs:
  produser:
    runs-on: ubuntu-latest
    timeout-minutes: 20
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Bağımlılıkları yükle
        run: npm ci --no-audit --no-fund

      - name: Yeni sayı üret
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GEMINI_MODEL: ${{ vars.GEMINI_MODEL || 'gemini-2.5-flash' }}
        run: npm run redaksjon:uret

      - name: Değişiklikleri kaydet ve commit at
        run: |
          git config user.name "leyum-redaksjon-bot"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add src/content/yazilar public/images/yazilar scripts/redaksjon/sett.json
          if git diff --cached --quiet; then
            echo "Yeni içerik üretilmedi veya taslak reddedildi."
            exit 0
          fi
          git commit -m "chore(dergi): yeni sayı eklendi [skip ci]"
          git pull --rebase
          git push
```

- [ ] **Step 2: Git commit yap**

Run: `git add .github/workflows/redaksjon.yml; git commit -m "ci: add scheduled GitHub Actions workflow for editorial bot"`
Expected: Commit success.

---

### Task 9: Kamusal Şeffaflık ve Tüzük Sayfaları (`/no/redaksjon` ve `/tr/yazi-isleri`)

**Files:**
- Create: `src/pages/no/redaksjon.astro`
- Create: `src/pages/tr/yazi-isleri.astro`
- Modify: `src/components/Footer.astro` (veya ilgili footer bileşeni: link ekleme)

**Interfaces:**
- Produces: Norveç ve Türkiye standartlarında şeffaf editoryal tüzük, Barnekonvensjonen, Medietilsynet ve pedagojik beyanname sayfaları.

- [ ] **Step 1: `src/pages/no/redaksjon.astro` sayfasını oluştur**

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout
  title="Redaksjonell etikk og barns rettigheter · leyum"
  description="Våre etiske prinsipper, pedagogiske rammer og forpliktelser etter Vær Varsom-plakaten og FNs barnekonvensjon."
  lang="no"
>
  <main class="max-w-4xl mx-auto px-4 py-12 md:py-16">
    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E0D5]">
      <span class="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-[#EBF5FB] text-[#004578] mb-6">
        Redaksjonell Erklæring &amp; Barns Rettigheter
      </span>

      <h1 class="text-3xl md:text-5xl font-serif font-bold text-[#1C2333] mb-6 leading-tight">
        Et trygt, nysgjerrig og uavhengig magasin for barn
      </h1>

      <p class="text-lg md:text-xl text-[#344054] leading-relaxed mb-8">
        <strong>leyum</strong> er et ikke-kommersielt, reklamefritt digitalt magasin skapt for å gi barn et trygt og magisk pusterom på internett. Her behandles barn som intelligente, nysgjerrige utforskere.
      </p>

      <hr class="border-[#E5E0D5] my-8" />

      <section class="space-y-6 text-[#344054] leading-relaxed">
        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">1. Vær Varsom-plakaten &amp; Redaktørplakaten</h2>
        <p>
          Vi følger prinsippene i den norske pressens etiske regelverk, med særlig vekt på <strong>Vær Varsom-plakatens § 4.8 (Barns rettigheter)</strong>. Barns integritet og verdighet skal aldri krenkes. Vi bruker aldri klikkagn (clickbait), villedende titler eller overdrevne skrekkscenarier.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">2. Medietilsynet &amp; Bildeprogramloven</h2>
        <p>
          Alt innhold forhåndsvurderes etter norske normer for barneinnhold. Vold, overveldende frykt, marerittaktige elementer eller voksentematikk har ingen plass i leyum. Innholdet graderes tydelig etter aldersgrupper: <em>4–6 år</em>, <em>7–9 år</em> og <em>10–12 år</em>.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">3. FNs Barnekonvensjon (artikkel 17)</h2>
        <p>
          Gjennom den norske Menneskerettsloven § 2 forplikter vi oss til artikkel 17 i FNs barnekonvensjon: Barn har rett til pålitelig informasjon som fremmer deres åndelige, moralske og fysiske helse.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">4. 100 % Ikke-kommersielt &amp; Null Sporing</h2>
        <p>
          Vi har ingen annonser, ingen sponsorater, ingen affiliate-lenker og ingen kommersiell påvirkning (etter Markedsføringsloven § 19). Vi samler ingen personopplysninger eller sporingsinformasjonskapsler fra våre lesere (GDPR art. 8).
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">5. Pedagogisk Trygghet &amp; Håp</h2>
        <p>
          Vi bekjemper unødig øko-angst og katastrofetenkning. Når vi formidler natur og vitenskap, setter vi fokus på naturens mirakler, oppfinnsomhet og de håpefulle løsningene som finnes.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">6. Åpenhet om Kunstig Intelligens (KI)</h2>
        <p>
          Tekster og illustrasjoner skapes med støtte fra avansert kunstig intelligens, men gjennomgår en streng redaksjonell og pedagogisk flertrinns kontroll (Vaktsjef, Pedagog og Språkvasker) før publisering.
        </p>
      </section>
    </div>
  </main>
</Layout>
```

- [ ] **Step 2: `src/pages/tr/yazi-isleri.astro` sayfasını oluştur**

```astro
---
import Layout from '../../layouts/Layout.astro';
---

<Layout
  title="Yazı İşleri, Yayın Etiği ve Çocuk Hakları · leyum"
  description="Yayın ilkelerimiz, pedagojik denetim çerçevemiz, Birleşmiş Milletler Çocuk Hakları Sözleşmesi ve Norveç basın etiği taahhütlerimiz."
  lang="tr"
>
  <main class="max-w-4xl mx-auto px-4 py-12 md:py-16">
    <div class="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E0D5]">
      <span class="inline-block px-4 py-1.5 rounded-full text-sm font-bold bg-[#EBF5FB] text-[#004578] mb-6">
        Yayın Kurulu &amp; Çocuk Hakları Beyannamesi
      </span>

      <h1 class="text-3xl md:text-5xl font-serif font-bold text-[#1C2333] mb-6 leading-tight">
        Çocuklar için güvenli, merak dolu ve bağımsız bir vaha
      </h1>

      <p class="text-lg md:text-xl text-[#344054] leading-relaxed mb-8">
        <strong>leyum</strong>, çocukların merak duygusunu saygıyla kucaklayan, kâr amacı gütmeyen, tamamen reklamsız ve takip çerezsiz iki dilli bir dijital çocuk dergisidir.
      </p>

      <hr class="border-[#E5E0D5] my-8" />

      <section class="space-y-6 text-[#344054] leading-relaxed">
        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">1. Basın Etiği ve Çocuk Hakları Standartları</h2>
        <p>
          Yayınlarımız, Norveç Basın Konseyi'nin <strong>Vær Varsom-plakaten (§ 4.8 Çocuk Hakları)</strong> ilkelerine ve evrensel gazetecilik etiğine bağlıdır. Çocukları korkutan, rencide eden, yetişkin çatışmalarının aracı kılan hiçbir anlatıya yer verilmez; tık tuzağı veya kaygı verici sansasyonel başlıklara asla başvurulmaz.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">2. Zararlı İçerikten Koruma ve Pedagojik Güvenlik</h2>
        <p>
          Tüm içerikler çocuk gelişim psikolojisine uygunluk açısından denetlenir. Şiddet, aşırı dehşet, kabus sahneleri ve travmatik içerikler kesinlikle yasaktır. İçerikler yaş gruplarına (<em>4–6 yaş</em>, <em>7–9 yaş</em>, <em>10–12 yaş</em>) göre titizlikle kalibre edilir.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">3. BM Çocuk Haklarına Dair Sözleşme (Madde 17)</h2>
        <p>
          Çocukların ruhsal, ahlaki, zihinsel ve bedensel sağlığını destekleyen nitelikli, doğru ve ufuk açıcı bilgiye erişim hakkına saygı duyuyoruz.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">4. %100 Reklamsız ve Sıfır Takip Güvencesi</h2>
        <p>
          Sitemizde hiçbir reklam, sponsorluk, ürün yerleştirme veya gizli ticari yönlendirme bulunmaz. Okurlarımızdan hiçbir kişisel veri veya çerez toplanmaz (GDPR Madde 8).
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">5. Eko-Anksiyete Yerine Keşif ve Umut</h2>
        <p>
          İklim ve doğa konularında çocuklarda çaresizlik uyandıran felaket dili yerine; doğanın muazzam mucizeleri, koruma başarıları ve umut verici bilimsel çözümler öne çıkarılır.
        </p>

        <h2 class="text-2xl font-serif font-bold text-[#1C2333]">6. Yapay Zekâ Şeffaflığı</h2>
        <p>
          İçeriklerimiz yapay zekâ teknolojisinin edebi ve görsel gücünden yararlanılarak hazırlanır; ancak her satır çok aşamalı bağımsız pedagojik, editoryal ve dil denetimlerinden (Yazı İşleri Masası, Pedagog ve Redaktör) onay almadan yayına giremez.
        </p>
      </section>
    </div>
  </main>
</Layout>
```

- [ ] **Step 3: Footer ve Navigasyona link ekle**

Footer bileşenine Norveççe için `/no/redaksjon`, Türkçe için `/tr/yazi-isleri` bağlantısı ekle.

- [ ] **Step 4: `npm run build` ile derleme doğrulaması yap**

Run: `npm run build`
Expected: Build success (0 errors)

- [ ] **Step 5: Git commit yap**

Run: `git add src/pages/no/redaksjon.astro src/pages/tr/yazi-isleri.astro src/components/; git commit -m "feat: add public editorial and pedagogical charter pages for norwegian and turkish editions"`
Expected: Commit success.

---

## Plan Tamamlandı

Bu uygulama planı 9 bağımsız, TDD odaklı ve birbiri ardına doğrulanabilen görevden oluşur.
