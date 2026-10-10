import { gemini } from './lib.mjs';
import { systemPromptVaktsjef } from './lover-og-regler.mjs';
import { VURDERING_SKJEMA } from './pedagog.mjs';

export async function vurderRedaksjonelt(sak) {
  const prompt = `Kontroller dette utkastet mot presseetikk og faktakrav for barn:
Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: VURDERING_SKJEMA,
    systemInstruction: systemPromptVaktsjef(),
  });

  return res ?? { godkjent: true, problemer: [] };
}
