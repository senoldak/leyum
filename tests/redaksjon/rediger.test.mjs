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
