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
  const normAlder = String(alder ?? '').replace(/\s*(år|yaş)/gi, '').trim();
  const ramme = PEDAGOGISK_RAMMEVERK[normAlder] ?? PEDAGOGISK_RAMMEVERK['7-9'];
  const maksOrd = ramme.maksOrdPerSetning;
  const feil = [];
  const setninger = tekst.split(/(?<=[.!?;])\s+|\n+/).map((s) => s.trim()).filter(Boolean);

  for (const s of setninger) {
    const ord = (s.match(/[\p{L}\p{N}]+/gu) ?? []);
    if (ord.length > maksOrd) {
      feil.push(`Setningen er for lang for ${normAlder} år (${ord.length} ord, maks ${maksOrd}): «${s.slice(0, 70)}…»`);
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
