import test from 'node:test';
import assert from 'node:assert/strict';
import { matchEntities, findEntities, SCIENCE_ENTITIES } from '../../src/lib/entities.ts';

test('SCIENCE_ENTITIES contains all 7 required Wikidata mappings', () => {
  const qids = SCIENCE_ENTITIES.map((e) => e.sameAs);
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q544'), 'Solsystemet / Güneş Sistemi (Q544) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q430'), 'Dinosaurer / Dinozorlar (Q430) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q1073'), 'Hjernen / Beyin (Q1073) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q12560'), 'Vikinger / Vikingler (Q12560) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q11982'), 'Fotosyntese / Fotosentez (Q11982) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q321'), 'Melkeveien / Samanyolu (Q321) must exist');
  assert.ok(qids.includes('https://www.wikidata.org/wiki/Q7430'), 'DNA (Q7430) must exist');
});

test('DNA lookaround matching handles isolated acronyms and punctuation suffixes', () => {
  const textNo = 'DNA: Den spiralformede oppskriftsboken inne i hver celle.';
  const resNo = matchEntities(textNo, 'no');
  assert.ok(resNo.some((e) => e.name === 'DNA' && e.sameAs.endsWith('Q7430')));

  const textTr = "DNA'nın yapısı ve yaşamın çift sarmallı genetik şifresi.";
  const resTr = matchEntities(textTr, 'tr');
  assert.ok(resTr.some((e) => e.name === 'DNA' && e.sameAs.endsWith('Q7430')));

  const textHyphen = 'DNA-molekylet i cellen.';
  const resHyphen = matchEntities(textHyphen, 'no');
  assert.ok(resHyphen.some((e) => e.name === 'DNA' && e.sameAs.endsWith('Q7430')));
});

test('DNA does NOT match false-positive substring occurrences', () => {
  const textFalse1 = 'Adnan ve arkadaşları kütüphanede buluştu.';
  const resFalse1 = matchEntities(textFalse1, 'tr');
  assert.equal(resFalse1.some((e) => e.sameAs.endsWith('Q7430')), false);

  const textFalse2 = 'Rommet var ordnad for kvelden.';
  const resFalse2 = matchEntities(textFalse2, 'no');
  assert.equal(resFalse2.some((e) => e.sameAs.endsWith('Q7430')), false);

  const textFalse3 = 'Aydınlatma sistemi çok güzel çalışıyor.';
  const resFalse3 = matchEntities(textFalse3, 'tr');
  assert.equal(resFalse3.some((e) => e.sameAs.endsWith('Q7430')), false);
});

test('Science entities match properly in both Norwegian and Turkish with localized names', () => {
  // Norwegian
  const noInput = 'Vikinger seilte over havet mens de studerte solsystemet og melkeveien.';
  const noMatches = matchEntities(noInput, 'no');
  const noNames = noMatches.map((m) => m.name);
  assert.ok(noNames.includes('Vikinger'));
  assert.ok(noNames.includes('Solsystemet'));
  assert.ok(noNames.includes('Melkeveien'));

  // Turkish
  const trInput = 'Dinozorlar çağında fotosentez yapan bitkiler ve beyin gelişimi.';
  const trMatches = matchEntities(trInput, 'tr');
  const trNames = trMatches.map((m) => m.name);
  assert.ok(trNames.includes('Dinozorlar'));
  assert.ok(trNames.includes('Fotosentez'));
  assert.ok(trNames.includes('Beyin'));
});

test('findEntities partitions into about and mentions', () => {
  const richText = 'Solsystemet, melkeveien, dinosaurer og hjernen i en fascinerende fortelling.';
  const res = findEntities(richText, 'no');
  assert.ok(res.about.length <= 2, 'About array max length should be 2');
  assert.ok(Array.isArray(res.mentions), 'Mentions should be an array');
  assert.equal(res.about.length + res.mentions.length, 4);
});
