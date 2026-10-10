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
