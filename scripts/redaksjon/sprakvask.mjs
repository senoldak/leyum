import { gemini, typografi } from './lib.mjs';
import { TEKST_SKJEMA } from './pedagog.mjs';

export async function sprakvaskBokmal(sak) {
  const prompt = `Du er språkvasker for barnebøker og barnemagasiner. Gjør språket i teksten levende, klangfullt og fullstendig korrekt på norsk bokmål (Språkrådets normer).
Fjern oversettelsespreg, anglisismer, byråkratisk stil og nynorsk-former utenfor sitater. Behold innholdet uendret.

Tittel: ${sak.title}
Ingress: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: TEKST_SKJEMA,
    systemInstruction: 'Rett BARE språket og flyten. Behold alle fakta og meningen intakt.',
  });

  const bearbeidet = res ?? sak;
  return {
    title: typografi(bearbeidet.title, { lang: 'no' }),
    description: typografi(bearbeidet.description, { lang: 'no' }),
    body: typografi(bearbeidet.body, { lang: 'no' }),
  };
}

export async function sprakvaskTurkce(sak) {
  const prompt = `Sen ödüllü bir çocuk edebiyatı editörü ve Türk Dil Kurumu uzmanısın. Aşağıdaki metni çocukların hayal gücünü besleyen, akıcı, sıcak ve pürüzsüz bir Türkçeyle yayına hazırla.
Çeviri kokan soğuk kalıpları ayıkla, cümleleri melodik ve canlı kıl. İçeriğin özünü ve doğruluğunu değiştirme.

Başlık: ${sak.title}
Özet: ${sak.description}

${sak.body}`;

  const res = await gemini({
    prompt,
    schema: TEKST_SKJEMA,
    systemInstruction: 'SADECE dili ve edebi akıcılığı kusursuzlaştır. Gerçekleri ve anlamı koru.',
  });

  const bearbeidet = res ?? sak;
  return {
    title: typografi(bearbeidet.title, { lang: 'tr' }),
    description: typografi(bearbeidet.description, { lang: 'tr' }),
    body: typografi(bearbeidet.body, { lang: 'tr' }),
  };
}
