import { gemini } from './lib.mjs';
import { systemPromptPedagog } from './lover-og-regler.mjs';

export const VURDERING_SKJEMA = {
  type: 'object',
  properties: {
    godkjent: { type: 'boolean', description: 'Pedagojik ve duygusal olarak çocuklar için tamamen uygun mu?' },
    problemer: { type: 'array', items: { type: 'string' }, description: 'Tespit edilen pedagojik veya duygusal kusurlar' },
  },
  required: ['godkjent', 'problemer'],
};

export const TEKST_SKJEMA = {
  type: 'object',
  properties: {
    title: { type: 'string' },
    description: { type: 'string' },
    body: { type: 'string' },
  },
  required: ['title', 'description', 'body'],
};

export async function vurderPedagogisk(sak, { alder = '7-9' } = {}) {
  const prompt = `Tekstutkast til vurdering for barn ${alder} år:
Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: VURDERING_SKJEMA,
    systemInstruction: systemPromptPedagog(alder),
  });

  return res ?? { godkjent: true, problemer: [] };
}
