import type { Locale } from './site';

export interface EntityMapping {
  name: Record<Locale, string>;
  type: 'Thing' | 'Organization';
  sameAs: string;
  keywords: string[];
}

export const SCIENCE_ENTITIES: EntityMapping[] = [
  {
    name: { no: 'Solsystemet', tr: 'Güneş Sistemi' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q544',
    keywords: [
      'Solsystemet',
      'Solsystem',
      'Güneş Sistemi',
      'Güneş sistemi',
      'Solar System',
    ],
  },
  {
    name: { no: 'Dinosaurer', tr: 'Dinozorlar' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q430',
    keywords: [
      'Dinosaurer',
      'Dinosaur',
      'dinosaurene',
      'dinosaurenes',
      'Dinozorlar',
      'Dinozor',
      'dinozorları',
      'dinozorların',
      'Dinosaurs',
    ],
  },
  {
    name: { no: 'Hjernen', tr: 'Beyin' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q1073',
    keywords: [
      'Hjernen',
      'Hjerne',
      'hjernens',
      'hjerner',
      'Beyin',
      'Beynimiz',
      'beynin',
      'beynimizin',
      'beyin dalgaları',
      'Brain',
    ],
  },
  {
    name: { no: 'Vikinger', tr: 'Vikingler' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q12560',
    keywords: [
      'Vikinger',
      'Viking',
      'vikingene',
      'vikingtiden',
      'vikingskip',
      'vikingskipene',
      'Vikingler',
      'vikinglerin',
      'viking gemisi',
      'viking çağı',
      'Vikings',
    ],
  },
  {
    name: { no: 'Fotosyntese', tr: 'Fotosentez' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q11982',
    keywords: [
      'Fotosyntese',
      'fotosyntesen',
      'Fotosentez',
      'fotosentezin',
      'Photosynthesis',
    ],
  },
  {
    name: { no: 'Melkeveien', tr: 'Samanyolu' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q321',
    keywords: [
      'Melkeveien',
      'Melkeveigalaksen',
      'Samanyolu',
      'Samanyolu Galaksisi',
      'Samanyolu galaksisi',
      'Milky Way',
    ],
  },
  {
    name: { no: 'DNA', tr: 'DNA' },
    type: 'Thing',
    sameAs: 'https://www.wikidata.org/wiki/Q7430',
    keywords: ['DNA'],
  },
];

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

export function matchEntities(
  text: string,
  locale: Locale = 'no'
): Array<{ '@type': string; name: string; sameAs: string }> {
  if (!text) return [];
  const about: Array<{ '@type': string; name: string; sameAs: string }> = [];

  for (const ent of SCIENCE_ENTITIES) {
    const matched = ent.keywords.some((kw) => {
      const escaped = escapeRegex(kw);
      // For short keywords (like DNA or <= 4 chars), strictly enforce start and end word-boundary
      // assertions with Unicode lookaround to prevent substring false positives (e.g. Adnan, ordnad, aydınlatma).
      // Turkish/Norwegian apostrophes and hyphens ("DNA'nın", "DNA-molekyl") match cleanly because ' and -
      // are not in \p{L}\p{N}.
      const isShort = kw.length <= 4;
      const pattern = isShort
        ? new RegExp(`(?<![\\p{L}\\p{N}])${escaped}(?![\\p{L}\\p{N}])`, 'ui')
        : new RegExp(`(?<![\\p{L}\\p{N}])${escaped}`, 'ui');
      return pattern.test(text);
    });

    if (matched) {
      about.push({
        '@type': ent.type,
        name: ent.name[locale] || ent.name.no,
        sameAs: ent.sameAs,
      });
    }
  }

  return about.slice(0, 4);
}

export function findEntities(text: string, locale: Locale = 'no') {
  const matched = matchEntities(text, locale);
  return {
    about: matched.slice(0, 2),
    mentions: matched.slice(2),
  };
}
