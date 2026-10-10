import { redigerOgPubliser } from './rediger.mjs';

const KATEGORILER = ['merakli-kasif', 'masal-hikaye', 'etkinlik-sanat', 'zeka-bilmece', 'doga-hayvanlar'];
const YASLAR = ['4-6', '7-9', '10-12'];

const VARSAYILAN_TEMALAR = [
  { tema: 'Hvorfor skifter kameleon farge?', kategori: 'doga-hayvanlar', alder: '7-9' },
  { tema: 'Hvordan reiser astronauter til romstasjonen?', kategori: 'merakli-kasif', alder: '7-9' },
  { tema: 'Den lille stjernen som var redd for mørket', kategori: 'masal-hikaye', alder: '4-6' },
  { tema: 'Hvordan lage en magisk regnbue med et vannglass?', kategori: 'etkinlik-sanat', alder: '7-9' },
  { tema: 'Gåter som får hjernen til å smile', kategori: 'zeka-bilmece', alder: '10-12' },
];

async function main() {
  const args = process.argv.slice(2);
  const params = {};
  for (let i = 0; i < args.length; i += 2) {
    params[args[i].replace(/^--/, '')] = args[i + 1];
  }

  const tilfeldig = VARSAYILAN_TEMALAR[Math.floor(Math.random() * VARSAYILAN_TEMALAR.length)];
  const tema = params.konu || params.tema || tilfeldig.tema;
  const kategori = params.kategori || tilfeldig.kategori;
  const alder = params.yas || params.alder || tilfeldig.alder;

  const res = await redigerOgPubliser({ tema, kategori, alder });
  if (!res.publisert) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error('Hata:', err);
  process.exit(1);
});
