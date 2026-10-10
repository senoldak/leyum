export type Locale = 'no' | 'tr';

export const SITE = {
  name: 'leyum',
  domain: 'https://leyum.com',
  social: {
    instagram: '',
    youtube: '',
  },
  locales: {
    no: {
      code: 'no',
      name: 'Norsk',
      flag: '🇳🇴',
      localeTag: 'nb-NO',
      tagline: 'Et nysgjerrig og fargerikt barnemagasin!',
      description: 'Oppdag spennende eventyr, morsomme oppgaver, vitenskap for nysgjerrige barn og koselige fortellinger.',
      readMore: 'Les hele saken',
      backToHome: 'Tilbake til forsiden',
      categoriesTitle: 'Kategorier',
      latestStories: 'Siste fortellinger',
      featuredTitle: 'Ukens stjerne',
      allStoriesInCategory: 'Alle saker i denne kategorien',
      answerReveal: 'Vis svar',
      aboutTitle: 'Om leyum',
      aboutDesc: 'leyum er et trygt, reklamefritt og nysgjerrig digitalt barnemagasin på norsk og tyrkisk.',
      privacyTitle: 'Personvern',
      nonCommercial: 'Helt uten reklame, trygt for barn.',
    },
    tr: {
      code: 'tr',
      name: 'Türkçe',
      flag: '🇹🇷',
      localeTag: 'tr-TR',
      tagline: 'Meraklı ve rengarenk çocuk dergisi!',
      description: 'Heyecanlı masallar, eğlenceli bilmeceler, doğa kaşifleri ve yaratıcı etkinliklerle dolu çocuk dergisi.',
      readMore: 'Hikayeyi Oku',
      backToHome: 'Ana Sayfaya Dön',
      categoriesTitle: 'Bölümler',
      latestStories: 'Son Eklenenler',
      featuredTitle: 'Haftanın Yıldızı',
      allStoriesInCategory: 'Bu bölümdeki tüm içerikler',
      answerReveal: 'Cevabı Gör',
      aboutTitle: 'leyum Hakkında',
      aboutDesc: 'leyum, çocuklar için güvenli, reklamsız, iki dilli (Norveççe & Türkçe) dijital bir çocuk dergisidir.',
      privacyTitle: 'Gizlilik',
      nonCommercial: 'Tamamen reklamsız, çocuklar için %100 güvenli.',
    },
  },
};

export const CATEGORIES = [
  {
    slug: 'oppdager',
    icon: '🚀',
    color: '#0284C7', // Sky Blue
    bgLight: '#E0F2FE',
    title: { no: 'Nysgjerrig Oppdager', tr: 'Meraklı Kaşif' },
    desc: { no: 'Romfart, vitenskap og hverdagsmysterier.', tr: 'Uzay, bilim ve günlük hayatın gizemleri.' },
  },
  {
    slug: 'eventyr',
    icon: '📖',
    color: '#7C3AED', // Purple
    bgLight: '#F3E8FF',
    title: { no: 'Eventyr & Fortellinger', tr: 'Masal & Hikaye' },
    desc: { no: 'Magiske verdener og lærerike historier.', tr: 'Büyülü dünyalar ve sıcacık masallar.' },
  },
  {
    slug: 'aktiviteter',
    icon: '🎨',
    color: '#EA580C', // Orange
    bgLight: '#FFEDD5',
    title: { no: 'Aktiviteter & Kunst', tr: 'Etkinlik & Sanat' },
    desc: { no: 'Tegning, bretting og morsomme eksperimenter.', tr: 'Çizim, origami ve eğlenceli deneyler.' },
  },
  {
    slug: 'gater',
    icon: '🧩',
    color: '#059669', // Emerald Green
    bgLight: '#D1FAE5',
    title: { no: 'Gåter & Moro', tr: 'Zeka & Bilmece' },
    desc: { no: 'Tankevekkende gåter og morsomme vitser.', tr: 'Akıl dolu bilmeceler ve güldüren tekerlemeler.' },
  },
  {
    slug: 'natur',
    icon: '🌍',
    color: '#16A34A', // Leaf Green
    bgLight: '#DCFCE7',
    title: { no: 'Natur & Dyr', tr: 'Doğa & Hayvanlar' },
    desc: { no: 'Dyrenes hemmeligheter og planeten vår.', tr: 'Hayvanlar aleminin sırları ve mavi gezegenimiz.' },
  },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export function getCategory(slug: string) {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function formatDate(date: Date, locale: Locale) {
  const l = locale === 'no' ? 'nb-NO' : 'tr-TR';
  const tz = locale === 'no' ? 'Europe/Oslo' : 'Europe/Istanbul';
  return date.toLocaleDateString(l, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: tz,
  });
}
