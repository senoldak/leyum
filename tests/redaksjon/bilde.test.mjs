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
