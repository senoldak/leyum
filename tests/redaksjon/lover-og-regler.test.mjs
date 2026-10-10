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
  assert.match(prompt, /4[–-]6/);
  assert.match(prompt, /eko-anksiyete/i);
});

test('systemPromptVaktsjef VVP 4.8 ve doğruluk ilkelerini içerir', () => {
  const prompt = systemPromptVaktsjef();
  assert.match(prompt, /Vær Varsom/i);
  assert.match(prompt, /Ansvarlig Redaktør/i);
});
