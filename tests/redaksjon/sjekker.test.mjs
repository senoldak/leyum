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
  const langSetning = 'Dette er en veldig lang setning som inneholder altfor mange ord for et lite barn på fire år og blir for vanskelig.';
  const feil = sjekkSetningslengde(langSetning, '4-6');
  assert.ok(feil.length > 0, '4-6 yaş için uzun cümle tespit edilmeli');
});

test('sjekkSvarteliste korku ve şiddet kelimelerini yakalar', () => {
  const tekst = 'Det var et skummelt monster fylt med blodbad og terror.';
  const feil = sjekkSvarteliste(tekst);
  assert.ok(feil.some((f) => /terror|blodbad/i.test(f)));
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
