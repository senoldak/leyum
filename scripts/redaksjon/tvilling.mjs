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
