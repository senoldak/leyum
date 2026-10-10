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
