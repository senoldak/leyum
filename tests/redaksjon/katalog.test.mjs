import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { lagFolioSvg } from '../../scripts/redaksjon/bilde.mjs';

test('katalog-100.json tam 100 özgün ikiz konu içerir', async () => {
  const raw = await readFile('scripts/redaksjon/katalog-100.json', 'utf8');
  const items = JSON.parse(raw);
  assert.equal(items.length, 100, 'Katalog 100 konu içermelidir');

  const kategoriler = new Set(items.map((i) => i.category));
  assert.deepEqual(
    Array.from(kategoriler).sort(),
    ['aktiviteter', 'eventyr', 'gater', 'natur', 'oppdager'].sort()
  );

  const slugs = new Set(items.map((i) => i.slug));
  assert.equal(slugs.size, 100, 'Tüm sluglar benzersiz olmalıdır');
});

test('lagFolioSvg yeni kategori slugları ile sorunsuz çalışır', () => {
  const svg = lagFolioSvg({
    title: 'Hvorfor er himmelen blå?',
    category: 'oppdager',
    ageRange: '7-9',
  });
  assert.match(svg, /OPPDAGER|NYSSGJERRIG|Meraklı Kaşif/i);

  for (const cat of ['historie', 'rommet', 'musikk', 'filosofi', 'kultur', 'teknologi', 'kroppen']) {
    const s = lagFolioSvg({
      title: 'Test Tittel',
      category: cat,
      ageRange: '10-12',
    });
    assert.ok(s.length > 500, `${cat} kategorisi geçerli bir SVG üretmelidir`);
  }
});
