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
      tagline: 'Gleden ved å forstå, utforske og tenke fritt.',
      description: 'Vitenskap, filosofi, kunst, natur og tospråklige fortellinger. Et trygt, uavhengig og reklamefritt digitalt magasin for unge tenkere.',
      readMore: 'Les hele saken',
      backToHome: 'Tilbake til forsiden',
      categoriesTitle: 'Kategorier',
      latestStories: 'Siste fortellinger',
      featuredTitle: 'Ukens utvalgte',
      allStoriesInCategory: 'Alle saker i denne kategorien',
      answerReveal: 'Vis svar',
      aboutTitle: 'Om leyum',
      aboutDesc: 'leyum er et trygt, uavhengig og reklamefritt tospråklig barnetidsskrift på norsk og tyrkisk.',
      editorialTitle: 'Redaksjon & Retningslinjer',
      privacyTitle: 'Personvern og Sikkerhet',
      nonCommercial: 'Helt uten reklame og kommersielt press. En trygg havn for nysgjerrige sinn.',
    },
    tr: {
      code: 'tr',
      name: 'Türkçe',
      flag: '🇹🇷',
      localeTag: 'tr-TR',
      tagline: 'Dünyayı anlama, keşfetme ve düşünme sevinci.',
      description: 'Bilim, felsefe, sanat, doğa ve diller arası serüvenler. Çocukların zihnine saygı duyan, güvenli ve bağımsız dijital mecmua.',
      readMore: 'Hikayeyi Oku',
      backToHome: 'Ana Sayfaya Dön',
      categoriesTitle: 'Bölümler',
      latestStories: 'Son Eklenenler',
      featuredTitle: 'Haftanın Seçkisi',
      allStoriesInCategory: 'Bu bölümdeki tüm içerikler',
      answerReveal: 'Cevabı Gör',
      aboutTitle: 'leyum Hakkında',
      aboutDesc: 'leyum, çocuklar için güvenli, tamamen reklamsız ve bağımsız iki dilli (Norveççe & Türkçe) kültür ve bilim mecmuasıdır.',
      editorialTitle: 'Yazı İşleri & Yayın İlkeleri',
      privacyTitle: 'Gizlilik ve Güvenlik',
      nonCommercial: 'Tamamen reklamsız, ticari baskılardan uzak, çocuklar için güvenli liman.',
    },
  },
};

export const AGE_GROUPS = [
  { id: 'all', label: { no: 'Alle aldre', tr: 'Tüm Yaşlar' }, badge: '🌟' },
  { id: '4-6', label: { no: '4-6 år', tr: '4-6 Yaş' }, badge: '🐣', subtitle: { no: 'Små utforskere', tr: 'Minik Kaşifler' } },
  { id: '7-9', label: { no: '7-9 år', tr: '7-9 Yaş' }, badge: '🚀', subtitle: { no: 'Nysgjerrige barn', tr: 'Meraklı Dedektifler' } },
  { id: '10-12', label: { no: '10-12 år', tr: '10-12 Yaş' }, badge: '🧭', subtitle: { no: 'Store oppdagere', tr: 'Büyük Kaşifler' } },
] as const;

export type AgeGroupId = (typeof AGE_GROUPS)[number]['id'];

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
  {
    slug: 'historie',
    icon: '🏛️',
    color: '#B45309', // Amber / Parchment
    bgLight: '#FEF3C7',
    title: { no: 'Historie & Sivilisasjoner', tr: 'Tarih & Medeniyet' },
    desc: { no: 'Vikingskip, eldgamle pyramider og oppdagelser som formet verden.', tr: 'Viking gemileri, kadim piramitler ve dünyayı değiştiren keşifler.' },
  },
  {
    slug: 'rommet',
    icon: '🪐',
    color: '#4338CA', // Cosmos Indigo
    bgLight: '#E0E7FF',
    title: { no: 'Rommet & Universet', tr: 'Uzay & Evren' },
    desc: { no: 'Planeter, fjerne galakser, stjernestøv og kosmiske mysterier.', tr: 'Gezegenler, uzak galaksiler, yıldız tozları ve kozmik sırlar.' },
  },
  {
    slug: 'musikk',
    icon: '🎵',
    color: '#E11D48', // Carmine Rose
    bgLight: '#FFE4E6',
    title: { no: 'Musikk & Rytme', tr: 'Müzik & Ritim' },
    desc: { no: 'Instrumentenes magi, verdensrytmer og hvordan lyd skaper følelser.', tr: 'Enstrümanların büyüsü, dünya ritimleri ve seslerin duygusu.' },
  },
  {
    slug: 'filosofi',
    icon: '💡',
    color: '#0D9488', // Sage Teal
    bgLight: '#CCFBF1',
    title: { no: 'Filosofi & Store Spørsmål', tr: 'Düşünce & Felsefe' },
    desc: { no: 'Hvem er jeg? Rettferdighet, vennskap og livets forunderlige gåter.', tr: 'Ben kimim? Adalet, dostluk ve hayatın derin soruları.' },
  },
  {
    slug: 'kultur',
    icon: '🗺️',
    color: '#C2410C', // Warm Terracotta
    bgLight: '#FFEDD5',
    title: { no: 'Verden & Kulturer', tr: 'Dünya & Kültürler' },
    desc: { no: 'Folkefester, skikker, språk og menneskenes fargerike fellesskap.', tr: 'Dünya dilleri, festivaller, gelenekler ve insanlığın ortak mirası.' },
  },
  {
    slug: 'teknologi',
    icon: '🤖',
    color: '#0891B2', // Electric Cyan
    bgLight: '#CFFAFE',
    title: { no: 'Teknologi & Oppfinnelser', tr: 'Teknoloji & İcatlar' },
    desc: { no: 'Roboter, datakoder, ren energi og smarte maskiner som forandrer hverdagen.', tr: 'Robotlar, bilgisayar kodları, temiz enerji ve hayatı kolaylaştıran akıllı makineler.' },
  },
  {
    slug: 'kroppen',
    icon: '🫀',
    color: '#BE185D', // Crimson Berry
    bgLight: '#FCE7F3',
    title: { no: 'Kroppen & Sansene', tr: 'Bedenimiz & Sağlık' },
    desc: { no: 'Hjernens mysterier, sansenes signaler og hvordan immunforsvaret beskytter oss.', tr: 'Beynimizin sırları, duyularımızın rehberliği ve bağışıklık sistemimizin kalkanı.' },
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
