import { calistirParti } from './parti-derleyici.mjs';

const GATER_KONULARI = [
  // 4-6 YAŞ (6 KONU - Cümle sınırı: ≤12 kelime)
  {
    slug: 'morsomme-dyregater-for-sma',
    category: 'gater',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Morsomme dyregåter for nysgjerrige små',
      description: 'Hvem vifter med halen og hvem sier mjau? Gjett dyrene!',
      body: `Jeg har myk pels og sier mjau. Hvem er jeg? Det er katten!

Jeg har lang hale og elsker gulrøtter. Hvem er jeg? Kaninen!

Jeg svømmer i dammen og sier kvakk. Hvem er jeg? Andungen!

> **Gjett selv:** Lukk øynene og etterlign et dyr for en venn!`
    },
    tr: {
      title: 'Sevimli Hayvan Bilmeceleri',
      description: 'Miyavlayan kedilerden zıpzıp tavşanlara minik hayvan bilmeceleri ve eğlenceli oyunlar!',
      body: `Yumuşak tüylerim var ve miyav derim. Ben kimim? Sevimli kedi!

Uzun kulaklarım var ve havucu çok severim. Ben kimim? Neşeli tavşan!

Gölde yüzerim ve vak vak derim. Ben kimim? Minik ördek!

> **Hayvan oyunu:** Gözlerini kapat ve bir arkadaşına hayvan taklidi yap!`
    }
  },
  {
    slug: 'farger-og-former-i-hverdagen',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Gjett fargen og formen rundt deg!',
      description: 'Solen er rund og gresset er grønt. Hva ser du?',
      body: `Solen er rund som en ball. Den lyser gult på himmelen.

Gresset er mykt og grønt under føttene våre.

Appelsinen er rund og smaker søtt og friskt.

Hvilke farger og former ser du i rommet ditt nå?

> **Liten lek:** Finn tre røde ting i lekekassen din!`
    },
    tr: {
      title: 'Renkler ve Şekiller Bilmecesi',
      description: 'Güneş yuvarlaktır, çimenler yemyeşil. Çevrendeki renk ve şekilleri bulma oyunu!',
      body: `Güneş gökyüzünde sarı bir top gibi parıldar.

Ayaklarımızın altındaki çimenler yemyeşil ve yumuşaktır.

Portakal masmavi göğün altında turuncu ve yuvarlaktır.

Şimdi odanda hangi renkleri ve şekilleri görüyorsun?

> **Renk avı:** Odanın içinde üç tane kırmızı nesne bul!`
    }
  },
  {
    slug: 'hva-gjemmer-seg-i-huset',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Hva gjemmer seg i lekekassen?',
      description: 'Noen ting triller, andre kan stables høyt. Gjett lekene!',
      body: `Jeg er rund og spretter høyt mot taket. Hva er jeg? Ballen!

Vi er mange fargerike klosser som bygger tårn. Byggeklosser!

Jeg har fire hjul og ruller raskt bortover gulvet. Lekebilen!

Alle lekene våre har sin egen morsomme form.

> **Ryddetid:** Hvor høyt tårn klarer du å bygge av klosser?`
    },
    tr: {
      title: 'Evimizdeki Gizli Eşyalar',
      description: 'Zıplayan toplar, üst üste dizilen renkli küpler ve oyuncak kutusunun bilmeceleri!',
      body: `Yere atınca tavana kadar zıplarım. Ben neyim? Zıpzıp top!

Rengarenk dizilip kule oluruz. Biz kimiz? Ahşap bloklar!

Dört tekerleğim var ve halıda hızla kayarım. Oyuncak araba!

Oyuncak kutusundaki her eşyanın kendine ait bir sırrı vardır.

> **Kule oyunu:** Tahta bloklarla devrilmeyen en yüksek kuleyi yap!`
    }
  },
  {
    slug: 'sma-fingerregler-og-moro',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Morsomme rim og fingerregler for små hender',
      description: 'Tommeltott, slikkepott og alle de andre fingrene på eventyr!',
      body: `Tommeltott falt i vannet. Slikkepott dro ham opp.

Langemann bar ham hjem til et varmt hus.

Gullebrann la ham i den myke sengen.

Og vesle Petter Spillemann spiste opp all maten!

> **Fingerlek:** Rør ved hver finger mens du sier reglen høyt!`
    },
    tr: {
      title: 'Minik Parmak Tekerlemeleri ve Oyunları',
      description: 'Başparmak, işaret parmağı ve beş kardeşin sıcacık tekerleme oyunu!',
      body: `Başparmağım kapıyı çaldı, tak tak tak!

İşaret parmağım pencereden baktı, kim o dedi?

Orta parmağım anahtarı çevirdi ve kapıyı açtı.

Yüzük parmağım sofrayı kurdu, serçe parmağım hepsini afiyetle yedi!

> **Parmak oyunu:** Tekerlemeyi söylerken her parmağını sırayla kıpırdat!`
    }
  },
  {
    slug: 'hvem-lager-denne-lyden',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Hvem lager denne rare lyden?',
      description: 'Tik-takk sier klokken, drypp-drypp sier vannet. Lytt nøye!',
      body: `Tik-takk, tik-takk høres fra veggen. Det er klokken som går!

Drypp, drypp faller dråper fra kranen i vasken.

Svisj, svisj suser vinden gjennom de grønne bladene i treet.

Lukk øynene dine og lytt til lydene rundt deg.

> **Lyttepost:** Hvilken hemmelig lyd hører du aller best akkurat nå?`
    },
    tr: {
      title: 'Ses Taklidi Bilmeceleri: Bu Ses Kimin?',
      description: 'Tik-tak diyen saatler, şıp-şıp damlayan sular ve çevremizdeki gizli sesler!',
      body: `Duvardan tik-tak tik-tak sesleri geliyor. Bu çalışan saattir!

Musluktan şıp-şıp damlalar damlıyor ve serinlik saçıyor.

Ağaçların yaprakları arasından rüzgar fış-fış diye esiyor.

Gözlerini kapat ve etrafındaki sesleri dikkatle dinle.

> **Dinleme oyunu:** Şu an evde duyduğun en kısık ses hangisi?`
    }
  },
  {
    slug: 'frukt-og-gronnsakskurven',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Gåter fra den fargerike fruktkurven',
      description: 'Rød på utsiden og søt inni. Hva slags frukt er dette?',
      body: `Jeg er gul, bøyd og apekatter elsker meg. Bananen!

Jeg er rund, rød og knaser godt i tennene. Eplet!

Jeg er oransje og vokser under den myke jorden. Gulroten!

Frukt og grønnsaker gir kroppen vår god energi og styrke.

> **Matglede:** Smak på en saftig eplebåt sammen med en voksen!`
    },
    tr: {
      title: 'Meyve ve Sebze Sandığı Bilmeceleri',
      description: 'Kıpkırmızı elmalar, sapsarı muzlar ve toprağın altındaki lezzetli havuçlar!',
      body: `Sapsarı bir kabuğum var ve maymunlar bana bayılır. Muz!

Kıpkırmızı yuvarlak bir meyveyim, çıtır çıtır yenirim. Elma!

Toprağın altında yetişen turuncu bir köküm. Çıtır havuç!

Meyve ve sebzeler vücudumuza sağlık ve neşeli güç katar.

> **Lezzet oyunu:** Çıtır bir elma dilimi ye ve tadını hisset!`
    }
  },

  // 7-9 YAŞ (8 KONU - Cümle sınırı: ≤18 kelime)
  {
    slug: 'naturens-lure-gater',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Naturens lure og grønne gåter',
      description: 'Hva kan gå over fjell uten å ta et eneste skritt? Løs naturens egne mysterier!',
      body: `Naturen er full av magiske gåter som venter på å bli løst.

Hva kan løpe hele dagen uten bein og aldri bli sliten? Det er elven!

Hva har en kappe av nåler, men kan aldri sy et plagg? Det er granen!

Hva følger deg overalt i solskinnet, men forsvinner når mørket kommer? Skyggen din!

Når vi ser nøye på naturen, oppdager vi hvor smart alt henger sammen.

> **Oppdagertips:** Still en av disse gåtene til vennene dine på neste skogstur!`
    },
    tr: {
      title: 'Şaşırtıcı Doğa ve Çevre Bilmeceleri',
      description: 'Ayakları olmadan dağları aşan nehirler ve iğnesi olup dikemeyen çam ağaçları!',
      body: `Doğa çözülmeyi bekleyen eğlenceli ve akıllı bilmecelerle doludur.

Ayakları olmadan durmaksızın koşan ve hiç yorulmayan şey nedir? Çağlayan bir nehirdir!

Üzerinde binlerce yeşil iğne taşıyan ama dikiş dikemeyen varlık nedir? Çam ağacı!

Güneş açınca peşinden ayrılmayan fakat karanlık basınca kaybolan şey nedir? Elbette senin gölgen!

Doğaya merakla baktığımızda her canlının bir bilmece gibi uyum içinde yaşadığını görürüz.

> **Doğa dedektifi:** Bir sonraki yürüyüşünde bu bilmeceleri arkadaşlarına sor ve birlikte eğlenin!`
    }
  },
  {
    slug: 'brovokterens-logiske-gaate',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Brovokterens hemmelige tankenøtt',
      description: 'En gammel trebro tåler bare to personer om gangen i nattemørket. Hvordan kommer alle trygt over?',
      body: `Fire vandrere må krysse en smal hengebro i nattemørket med bare én lykt.

Broen tåler maks to personer samtidig, og de må alltid ha lykten med seg.

Vandrerne bruker 1, 2, 5 og 10 minutter på å krysse broen.

Når to går sammen, må de gå i farten til den tregeste personen.

Løsningen er å la de to raskeste gå først, og deretter tenke smart!

Ved å samarbeide og planlegge trinn for trinn kommer alle trygt over ravinen.

> **Tankenøtt:** Prøv å regne ut den korteste tiden med papir og blyant!`
    },
    tr: {
      title: 'Adım Adım Mantık Dedektifi: Köprü Geçişi',
      description: 'Gece karanlığında tek fenerle eski bir tahta köprüyü geçmeye çalışan dört yolcunun mantık bilmecesi!',
      body: `Dört gezgin zifiri karanlıkta tek bir fenerle eski bir asma köprüyü geçmek zorundadır.

Köprü aynı anda en fazla iki kişiyi taşır ve fener mutlaka yanlarında olmalıdır.

Yolcular köprüyü 1, 2, 5 ve 10 dakikada geçebilmektedir.

İki kişi birlikte yürürken hızları her zaman daha yavaş olanın hızına göre ayarlanır.

İşin sırrı, en hızlı iki kişinin feneri taşırken akıllıca bir plan kurmasında saklıdır.

Birlikte düşünmek ve acele etmeden plan yapmak zor görünen engelleri kolayca aşmayı sağlar.

> **Mantık oyunu:** Bir kağıt ve kalem alıp en kısa geçiş süresini hesaplamayı dene!`
    }
  },
  {
    slug: 'ordjakt-og-akrostikon',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Morsom ordjakt og hemmelige akrostikon',
      description: 'Lær hvordan bokstaver kan gjemme skjulte ord loddrett og vannrett i dikt!',
      body: `Et akrostikon er et hemmelig dikt der forbokstavene danner et helt nytt ord.

Hvis du skriver ordet SOL loddrett, kan hver linje starte med disse bokstavene.

«S» for skinnende lys på himmelen, «O» for oppe i det blå, og «L» for lysende varme.

Ordjakt hjelper hjernen med å finne mønstre og leke med språket på nye måter.

Du kan lage akrostikon med navnet ditt eller med favorittdyret ditt.

Det er som å sende hemmelige brev som bare de smarteste kan lese.

> **Skriv et dikt:** Skriv navnet ditt loddrett på et ark og lag ditt eget akrostikon!`
    },
    tr: {
      title: 'Eğlenceli Kelime Avı ve Akrostiş Oyunları',
      description: 'Harflerin mısra başlarında gizli kelimeler oluşturduğu büyüleyici akrostiş ve kelime oyunları rehberi!',
      body: `Akrostiş, şiirin ilk harflerinin yukarıdan aşağıya okunduğunda anlamlı bir kelime oluşturduğu eğlenceli bir oyundur.

Örneğin BAL kelimesini alt alta yazıp her harfle başlayan tatlı cümleler kurabilirsin.

“B” petekten süzülen sarı damla, “A” arıların kanat çırpışı, “L” lezzetli bir şifa kaynağıdır.

Kelime avı oynamak zihnimizi çevikleştirir ve yeni sözcüklerle tanışmamızı sağlar.

Kendi adını veya sevdiğin bir hayvanın ismini kağıda yazarak gizli şiirler üretebilirsin.

> **Kendi akrostişini yaz:** İsminin baş harflerini alt alta yazıp ailene özel bir şiir hediye et!`
    }
  },
  {
    slug: 'morsomme-optiske-illusjoner',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Optiske illusjoner som lurer øyet',
      description: 'Hvorfor ser to like lange linjer forskjellige ut? Oppdag hvordan hjernen tolker synsinntrykk!',
      body: `Øynene våre fanger lys, men det er hjernen som forteller oss hva vi ser.

Noen ganger blir hjernen lurt av farger, vinkler og mønstre rundt en figur.

I Müller-Lyer-illusjonen ser to linjer like lange ut, men pilspissene lurer oss.

Når pilene peker utover, tror hjernen at linjen er mye lenger enn den andre.

Ved å legge en linjal over strekene ser vi at de måler nøyaktig like mange centimeter.

Optiske illusjoner minner oss på at vi alltid bør undersøke fakta nøye.

> **Tegn selv:** Tegn to rette streker på 5 centimeter og sett ulike piler på endene!`
    },
    tr: {
      title: 'Gözleri Yanıltan Eğlenceli Optik İllüzyonlar',
      description: 'Aynı uzunluktaki çizgiler neden farklı görünür? Beynimizin gözlerimizi nasıl yanılttığını keşfet!',
      body: `Gözlerimiz ışığı yakalar, fakat gördüklerimize anlam veren ve resmi birleştiren organımız beynimizdir.

Bazen çizgilerin açıları ve renklerin kontrastı beynimizin yanılmasına yol açar.

Müller-Lyer illüzyonunda iki eşit çizgi, uçlarına takılan ok işaretleri yüzünden farklı boyda görünür.

Oklar dışarı doğru açıldığında beyin o çizgiyi otomatik olarak daha uzun algılar.

Cetveli kağıdın üzerine koyduğumuzda ise iki çizginin milimetresine kadar eşit olduğunu görürüz.

Göz yanılsamaları bize ilk bakışta gördüğümüz her şeyin gerçek olmayabileceğini öğretir.

> **Çizim deneyi:** Kağıda beşer santimlik iki çizgi çizip uçlarına oklar ekleyerek arkadaşlarını şaşırt!`
    }
  },
  {
    slug: 'tankespill-som-lurer-hjernen',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Lure spørsmål som får hjernen til å smile',
      description: 'Hva blir våtere jo mer det tørker? Prøv disse morsomme tankespillene!',
      body: `Lure spørsmål tvinger oss til å tenke utenfor den vanlige boksen.

Hva blir våtere jo mer det tørker? Et håndkle etter et deilig bad!

Hvor mange måneder i året har 28 dager? Alle tolv månedene har minst 28 dager!

Hva har en hals, men ikke noe hode? En glassflaske med saft!

Disse tankelekene trener lattermusklene og lærer oss å lytte ekstra nøye til ordene.

Når vi ler og tenker samtidig, vokser hjernen og blir enda smartere.

> **Hjernetrim:** Fortell gåten om håndkleet til noen ved middagsbordet og se om de gjetter riktig!`
    },
    tr: {
      title: 'Ters Köşe Zeka Soruları ve Şaşırtmacalar',
      description: 'Kurudukça ıslanan şey nedir? Gülümseten ters köşe zeka sorularıyla zihnini esnet!',
      body: `Şaşırtmacalı sorular kalıpların dışına çıkıp kelimelerin farklı anlamlarını düşünmemizi sağlar.

Kullandıkça ve kuruladıkça daha çok ıslanan eşya nedir? Tabii ki banyo havlusu!

Yılda kaç ayın içinde yirmi sekiz gün vardır? Bütün on iki ayda en az yirmi sekiz gün bulunur!

Boğazı olan ama başı olmayan şey nedir? Masadaki cam sürahi veya şişe!

Bu tarz tatlı şaşırtmacalar hem neşeli kahkahalar attırır hem de dikkatimizi geliştirir.

> **Zeka oyunu:** Bu sorulardan birini akşam yemekte ailene sor ve cevapları dinlerken eğlen!`
    }
  },
  {
    slug: 'arstidenes-og-tidens-gater',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Gåter om årstider, sol og måneder',
      description: 'Tolv brødre følger etter hverandre, men møtes aldri. Løs tidens egne gåter!',
      body: `Tiden beveger seg som et uendelig hjul med fire vakre årstider.

Hvem kommer med hvite tepper, pynter vinduene med rim og biter i nesen? Vinteren!

Hvem vekker blomstene, smelter snøen og fyller trærne med lysegrønne knopper? Våren!

Hvem maler skogen i gull og rødt før bladene daler sakte mot bakken? Høsten!

Tolv brødre vandrer på rekke og rad gjennom året: årets tolv måneder.

Naturens kretsløp gir oss alltid nye farger, smaker og gleder å se frem til.

> **Kalenderlek:** Hvilken årstid er din favoritt, og hva liker du aller best å gjøre da?`
    },
    tr: {
      title: 'Zaman ve Mevsim Bilmeceleri',
      description: 'Birbirini kovalayan on iki kardeş ve doğanın döngüsünü anlatan bilge mevsim bilmeceleri!',
      body: `Zaman dört harika mevsimle süslenmiş büyük ve kesintisiz bir tekerlek gibi döner.

Pencerelere buzdan danteller ören ve burnumuzu üşüten beyaz mevsim hangisidir? Kış mevsimi!

Karları eritip papatyaları uyandıran ve kuşları neşeyle öttüren kimdir? Bahar!

Yaprakları sarıya ve kızıla boyayıp rüzgarla dans ettiren mevsim hangisidir? Sonbahar!

Peş peşe yürüyen on iki kardeş ise takvimdeki on iki aydır.

Mevsimlerin bu güzel dengesi dünyamıza her zaman yeni renkler ve taze umutlar taşır.

> **Mevsim sohbeti:** En sevdiğin mevsim hangisi ve o mevsimde doğada ne yapmayı çok seversin?`
    }
  },
  {
    slug: 'morsomme-ordkjeder',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Bygg lange og morsomme ordkjeder sammen!',
      description: 'Hvor lang ordkjede klarer du og vennene dine å bygge uten å stoppe?',
      body: `Ordkjeder er en super lek der det siste ordet gir starten på det neste.

Du kan bygge sammensatte ord som solhatt, hatteske, eskelokk og lokkemat.

Eller du kan lage kjeder der siste bokstav i ordet blir første bokstav i neste ord.

Hvis du sier «katt», må neste person finne et ord på «t», som «tog».

Denne leken er perfekt i bilen, på bussen eller rundt et lunt kveldsbord.

Hjernen leter i sitt store ordlager og finner frem morsomme ord du nesten hadde glemt.

> **Start en kjede:** Si et ord og be en venn finne neste ord på samme bokstav!`
    },
    tr: {
      title: 'Neşeli Sözcük Türetmece ve Kelime Treni',
      description: 'Son harften kelime türetme ve bileşik kelimelerle upuzun bir tren kurma oyunu!',
      body: `Kelime treni, söylenen her sözcüğün son harfiyle yeni bir kelime başlattığımız harika bir zeka oyunudur.

Örneğin “kitap” kelimesiyle başlarsan, arkadaşın “p” harfiyle “pasta” diyebilir.

Ardından gelen kişi “armut”, diğeri ise “tilki” diyerek vagonları ardı ardına ekler.

Ayrıca “ayçiçeği”, “çiçeklik”, “likör” gibi birleşik kelime türetmeceleri de yapabilirsiniz.

Bu oyun yolculuklarda veya sıkıldığın anlarda zihnini canlandırmanın en neşeli yoludur.

> **Kelime treni:** Yanındaki bir arkadaşınla hemen beş vagonlu küçük bir kelime treni başlat!`
    }
  },
  {
    slug: 'tungekrollere-som-far-deg-til-a-le',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Sprø tungekrøllere som får alle til å le',
      description: 'Raske ord som krøller tungen til en knute! Prøv å si dem tre ganger fort!',
      body: `Tungekrøllere er setninger med like lyder som er nesten umulige å si fort.

«Ibsens ripsbusker og andre buskvekster» er en klassiker som krever full konsentrasjon.

Prøv denne: «Stekt torsk, kokt torsk, stekt torsk, kokt torsk!»

Hjernen vet hva den vil si, men tungen og leppene henger seg helt opp.

Skuespillere bruker slike regler for å varme opp stemmen før de går på scenen.

Når vi snubler i ordene og ler sammen, har vi det kjempegøy med språket.

> **Utfordring:** Klarer du å si «kokt torsk, stekt torsk» fem ganger uten å snuble?`
    },
    tr: {
      title: 'Kahkahalı Dil Bükücü Tekerlemeler',
      description: 'Hızlı söylerken dili düğümleyen, kahkahalara boğan en eğlenceli Türkçe tekerlemeler!',
      body: `Dil tekerlemeleri benzer sesleri peş peşe dizerek ağzımızı ve dilimizi çalıştıran eğlenceli oyunlardır.

“Şu köşe yaz köşesi, şu köşe kış köşesi, ortadaki su şişesi” tekerlemesini üç kez hızlıca söylemeyi dene!

Ya da “Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş” kuralını hatırla.

Beynimiz ne söylemek istediğini bilir fakat dilimiz hızlandıkça tatlı sürçmeler yaşar.

Tiyatro oyuncuları sahneye çıkmadan önce seslerini açmak için tekerlemelerle pratik yaparlar.

Hata yaptıkça kahkahalarla gülmek konuşmayı daha akıcı ve neşeli hale getirir.

> **Tekerleme düellosu:** Bir arkadaşınla karşılıklı geçip en zor tekerlemeyi şaşırmadan söylemeye çalışın!`
    }
  },

  // 10-12 YAŞ (6 KONU - Cümle sınırı: ≤24 kelime)
  {
    slug: 'cæsarchiffer-og-hemmelige-koder',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Hvordan knekke hemmelige koder med Cæsarchiffer?',
      description: 'Lær krypteringsteknikken Julius Cæsar brukte for to tusen år siden for å sende hemmelige beskjeder til hæren sin.',
      body: `Kryptografi er vitenskapen om å skjule informasjon slik at bare mottakeren kan lese det hemmelige innholdet.

For over to tusen år siden oppfant den romerske keiseren Julius Cæsar en enkel forskyvningsmetode som vi kaller Cæsarchiffer.

Han flyttet hver bokstav tre plasser frem i alfabetet: A ble til D, B ble til E, og C ble til F.

Mottakeren som kjente den hemmelige nøkkelen flyttet ganske enkelt bokstavene tre plasser tilbake for å lese den opprinnelige meldingen.

Moderne datamaskiner bruker avansert matematikk med gigantiske primtall for å beskytte passord og banktransaksjoner på internett.

Men prinsippet bak all moderne cybersikkerhet bygger på nøyaktig den samme logikken som Cæsars hemmelige alfabetforskyvning.

> **Knek koden:** Skriv en hemmelig setning med forskyvning på to bokstaver og la en venn knekke koden!`
    },
    tr: {
      title: 'Şifreli Mesajlar ve Sezar Kriptolojisi',
      description: 'Julius Sezar’ın iki bin yıl önce gizli askeri emirleri korumak için icat ettiği harf kaydırma şifreleme yöntemini keşfet!',
      body: `Kriptoloji, gizli bilgileri yalnızca alıcının çözebileceği matematiksel kurallarla koruma bilimidir.

İki bin yıl önce Romalı komutan Julius Sezar, mektuplarını düşmanların eline geçse bile anlaşılamayacak şekilde şifrelemeyi başarmıştı.

Bu yöntemde alfabedeki her harf belirli bir sayıda ileri kaydırılır; örneğin üç basamak kaydırmada A harfi Ç, B harfi D olur.

Mesajı alan kişi gizli anahtarı bilerek harfleri tam üç basamak geri aldığında orijinal metin kolayca ortaya çıkar.

Günümüzde bankacılık işlemleri ve internet siteleri devasa asal sayılara dayanan çok güçlü algoritmalarla korunur.

Fakat modern siber güvenliğin temeli Sezar’ın geliştirdiği bu harika mantıksal şifreleme düzenine dayanmaktadır.

> **Şifre kırıcı:** İki harf ileri kaydırarak arkadaşına gizli bir mesaj yaz ve şifreyi çözmesini iste!`
    }
  },
  {
    slug: 'elvekryssingens-klassiske-gaate',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Den klassiske gåten om båten over elven',
      description: 'En bonde, en ulv, en geit og et kålhode skal krysse elven i en bitteliten robåt. Hvordan løser du floken?',
      body: `Elvekryssingsgåten er en av verdens mest berømte logiske utfordringer og har fascinert tenkere i over tusen år.

En bonde må frakte en ulv, en geit og et kålhode over en elv. Båten har bare plass til ham og én gjenstand.

Hvis bonden forlater geiten og ulven alene, vil ulven spise geiten uten å nøle.

Hvis bonden forlater geiten og kålhodet alene, vil geiten spise kålhodet til lunsj.

Nøkkelen til å løse gåten ligger i å frakte geiten over først, og deretter ta geiten med tilbake når ulven settes i land.

Denne typen logiske nøtter kalles tilstandsoverganger i informatikk og lærer oss å tenke metodisk på rekkefølge og konsekvenser.

> **Logisk utfordring:** Tegn elven på et ark med fire små brikker og beveg dem systematisk til alle er trygt over!`
    },
    tr: {
      title: 'Nehir Geçme Mantık Paradoksları',
      description: 'Kurt, kuzu ve lahana ile nehri tek bir sandalla geçmeye çalışan çiftçinin bin yıllık klasik mantık bilmecesi!',
      body: `Nehir geçme paradoksu, matematikçilerin ve düşünürlerin binyıllardır çözmekten keyif aldığı klasik bir mantık bilmecesidir.

Bir çiftçi yanındaki kurt, kuzu ve lahana sepetiyle karşı kıyıya geçmek zorundadır; fakat sandala sadece biri sığabilir.

Çiftçi yanlarında yokken kurt kuzuyu tek başına yer, kuzu ise lahanayı afiyetle mideye indirir.

İşin zekice çözümü kuzuyu ilk seferde karşıya geçirmekte ve daha sonra kurdu götürürken kuzuyu geri getirmekte yatar.

Bilgisayar biliminde durum geçişleri olarak bilinen bu mantık kuralı, karmaşık algoritmaların sırayla nasıl çalışacağını modeller.

Adım adım düşünmek ve riskleri doğru analiz etmek, en çözümsüz gibi görünen düğümleri bile kolayca çözer.

> **Adım adım çöz:** Kağıda bir nehir çiz ve dört küçük madeni parayla adımları canlandırarak çözümü göster!`
    }
  },
  {
    slug: 'sudoku-og-tallmonstre-for-mestere',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Sudoku og magiske tallmønstre for mestere',
      description: 'Hvordan fungerer 9x9 rutenettet, og hvilke deduktive metoder gjør deg til en uovervinnelig tallmester?',
      body: `Sudoku ble oppfunnet på slutten av 1970-tallet og ble raskt en global farsott for alle som elsker systematisk problemløsning.

Målet er enkelt: fyll et 9x9 rutenett med tallene fra 1 til 9. Ingen tall kan gjentas i samme rad, kolonne eller boks.

I motsetning til hva mange tror handler ikke Sudoku om matematikk eller regning, men om ren deduktiv logikk og mønstergjenkjenning.

En av de mest effektive strategiene kalles eliminasjonsmetoden, der du sjekker hvilke tall som er helt umulige i en bestemt rute.

Når du finner den eneste mulige plasseringen for et tall, åpner det seg umiddelbart nye ledetråder i andre deler av brettet.

Å løse Sudoku regelmessig styrker arbeidshukommelsen, forbedrer konsentrasjonen og trener hjernen i tålmodig analyse.

> **Prøv et brett:** Finn et lett Sudoku-brett i avisen og bruk blyant slik at du kan viske ut underveis!`
    },
    tr: {
      title: 'Sudoku ve Sayı Kalıpları Rehberi',
      description: '9x9 karelerde gizlenen mantık harikası: İpuçlarını birleştirerek sayı kalıplarını ustaca çözme teknikleri!',
      body: `Sudoku, Japonya’dan dünyaya yayılan ve sayılarla oynanan en popüler zeka geliştirme oyunlarından biridir.

Temel kural basittir: 9x9 boyutundaki tabloya 1’den 9’a kadar olan sayıları satır, sütun ve kutularda tekrarlanmayacak biçimde yerleştirmelisin.

Yaygın inanışın aksine Sudoku toplama veya çıkarma işlemi gerektirmez; tamamen saf mantık ve eleme prensibine dayanır.

Usta oyuncuların en çok kullandığı yöntem tek olasılık kuralıdır: bir kareye diğer sayılar giremiyorsa doğru sayı kendiliğinden kalır.

Her doğru yerleştirilen rakam zincirleme bir reaksiyon başlatır ve tablonun diğer kısımlarındaki kilitleri tek tek açar.

Düzenli Sudoku çözmek odaklanma yeteneğini keskinleştirir, sabırlı düşünmeyi öğretir ve görsel hafızayı güçlendirir.

> **Usta denemesi:** Gazetedeki kolay bir Sudoku bulmacasını kurşun kalemle çözerek eleme yöntemini uygula!`
    }
  },
  {
    slug: 'fyrstikkgater-og-geometri',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Fyrstikkgåter og geometriske tankeleker',
      description: 'Flytt to fyrstikker og lag fire trekanter! Hvordan romlig tenkning og geometri utfordrer sansene våre.',
      body: `Fyrstikkgåter er en klassisk form for romlig hjernetrim som utfordrer hvordan vi oppfatter vinkler, arealer og symmetri.

Ved å flytte bare én eller to fyrstikker kan et tilsynelatende umulig regnestykke eller en form forvandles til noe helt nytt.

For eksempel kan tre likesidede trekanter bli til fire hvis du tenker i tre dimensjoner og bygger en pyramide.

Hjernen vår låser seg ofte fast i todimensjonale flater og glemmer at løsningen kan finnes i høyden eller i nye perspektiver.

Geometriske tankeleker trener opp evnen til å rotere figurer i hodet, en ferdighet som er avgjørende for arkitekter og ingeniører.

Når du løser slike oppgaver lærer du at det å endre synsvinkel ofte er den raskeste veien til et genialt gjennombrudd.

> **Bygg med pinner:** Legg seks fyrstikker eller tannpirkere på bordet og prøv å lage fire likesidede trekanter!`
    },
    tr: {
      title: 'Kibrit Çöpleriyle Geometri Akıl Oyunları',
      description: 'İki çöpün yerini değiştirip dört üçgen oluşturabilir misin? Üç boyutlu düşünme ve uzamsal geometri zeka oyunları!',
      body: `Kibrit çöpü bilmeceleri, açıları, alanları ve simetriyi farklı açılardan görmemizi sağlayan eğlenceli uzamsal zeka oyunlarıdır.

Masanın üzerindeki çöplerden yalnızca bir veya iki tanesini oynatarak yanlış bir eşitliği doğru hale getirebilir veya yeni şekiller üretebilirsin.

Örneğin altı çöple masada dört üçgen yapmak iki boyutta imkansızken, üç boyutlu bir piramit kurarak kolayca başarılır.

Zihnimiz çoğu zaman alışılagelmiş düzlemlere sıkışıp kalır; oysa derinlik ve yükseklik yepyeni kapılar aralar.

Geometrik akıl oyunları mühendislerin, mimarların ve tasarımcıların ihtiyaç duyduğu uzamsal canlandırma yeteneğini geliştirir.

Bakış açını değiştirdiğinde çözülemez sanılan sorunların ne kadar zarif çözümleri olduğunu fark edersin.

> **Kürdan deneyi:** Masaya altı adet kürdan koy ve üç boyutlu düşünerek dört adet eşkenar üçgen inşa etmeyi dene!`
    }
  },
  {
    slug: 'ridderne-og-sannhetens-oy',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Gåten om Ridderne og Sannhetens øy',
      description: 'På en mystisk øy snakker ridderne alltid sant, mens kjeltringene alltid lyver. Hvem kan du stole på?',
      body: `Gåten om Ridderne og Kjeltringene ble popularisert av matematikeren Raymond Smullyan og danner grunnlaget for formell logikk.

På en magisk øy finnes det to typer innbyggere: riddere som alltid forteller sannheten, og kjeltringer som alltid lyver.

Du møter to personer, A og B. Person A sier: «Minst én av oss er en kjeltring.» Hvem er egentlig A og hvem er B?

Hvis A var en kjeltring, ville påstanden vært sann, men kjeltringer kan aldri snakke sant. Derfor må A være en ridder!

Siden en ridder alltid snakker sant, stemmer påstanden hans, og det betyr at person B må være den andre kjeltringen.

Denne typen deduktiv resonnering er nøyaktig den samme logiske strukturen som databrikker bruker med sine Booleske sannhetsverdier.

> **Lag en egen gåte:** Lag en logisk samtale mellom en ridder og en kjeltring og utfordre familien til å avsløre dem!`
    },
    tr: {
      title: 'Yalan Söylemeyen Adalılar Mantık Bilmecesi',
      description: 'Yalnızca doğruları söyleyen şövalyeler ile sürekli yalan söyleyen haydutların adasındaki matematiksel mantık oyunu!',
      body: `Şövalyeler ve Haydutlar mantık bilmecesi, ünlü matematikçi Raymond Smullyan tarafından popüler hale getirilmiş kadim bir mantık paradoksudur.

Efsanevi bir adada sadece iki grup insan yaşar: her zaman doğruyu söyleyen şövalyeler ve her zaman yalan söyleyen haydutlar.

Yolda karşılaştığın iki kişiden biri şöyle der: “İkimizden en az biri yalancıdır.” Peki bu konuşan kişi kimdir?

Eğer konuşan kişi bir haydut olsaydı söylediği söz doğru çıkardı; oysa haydutlar asla doğruyu söyleyemez. Demek ki o bir şövalyedir!

Şövalye her zaman doğru söylediğine göre sözü gerçektir; bu durumda yanındaki ikinci kişinin kesinlikle haydut olması gerekir.

Bu dedektiflik mantığı bilgisayar işlemcilerindeki ikili kodların ve Boole mantığının nasıl çalıştığını mükemmel biçimde gösterir.

> **Kendi paradoksunu kur:** Bir doğrucu ve bir yalancı karakter kurgulayıp arkadaşlarına çözmeleri için bir diyalog yaz!`
    }
  },
  {
    slug: 'detektiv-sherlocks-tankerekker',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Tren tankene dine som en ekte mesterdetektiv',
      description: 'Hvordan skiller du mellom antakelser og bevis? Lær deduksjon og observasjonsteknikker fra litteraturens største detektiver.',
      body: `Mesterdetektiven Sherlock Holmes pleide å si at folk flest bare ser, men sjelden observerer detaljene rundt seg.

Observasjon handler om å legge merke til fakta uten å hoppe til raske og forhastede konklusjoner før bevisene er samlet.

Hvis noen har våt paraply og gjørmete støvler, vet vi sikkert at de har vært ute i regnet.

Deduksjon betyr å ta en generell sannhet og kombinere den med konkrete spor for å trekke en uomtvistelig logisk slutning.

En dyktig detektiv samler små puslespillbiter, tester ulike hypoteser og utelukker alt som beviselig er umulig.

Når det umulige er eliminert, må det som står igjen være sannheten, uansett hvor usannsynlig det kan virke ved første øyekast.

> **Detektivøvelse:** Se på et rom i tretti sekunder, lukk øynene og beskriv fem spesifikke detaljer du la merke til!`
    },
    tr: {
      title: 'Usta Bir Dedektif Gibi Akıl Yürütme Rehberi',
      description: 'Varsayımlarla kanıtları birbirinden ayırma sanatı: Efsanevi dedektiflerin gözlem ve tümdengelim yöntemlerini keşfet!',
      body: `Efsanevi dedektif Sherlock Holmes çoğu insanın sadece etrafa baktığını fakat detayları dikkatle gözlemlemediğini söylerdi.

Gözlem yapmak, aceleci varsayımlarda bulunmadan önce somut kanıtları ve fiziksel ipuçlarını sabırla toplamak anlamına gelir.

Birinin çamurlu ayakkabılarından ve ıslak şemsiyesinden yağmurda yürüdüğünü kesin olarak anlarız, fakat otobüsü kaçırdığını varsayamayız.

Tümdengelim ise genel kurallarla özel ipuçlarını birleştirerek sarsılmaz ve kesin bir mantıksal sonuca ulaşma sanatıdır.

İyi bir araştırmacı elindeki küçük yapboz parçalarını titizlikle bir araya getirir ve imkansız olan bütün ihtimalleri eler.

İmkansız olan her şey elendiğinde geriye kalan ihtimal ne kadar şaşırtıcı görünürse görünsün mutlak gerçeğin ta kendisidir.

> **Dedektif alıştırması:** Bulunduğun odaya otuz saniye dikkatle bak, ardından gözlerini kapatıp fark ettiğin beş ayrıntıyı say!`
    }
  }
];

async function main() {
  await calistirParti('Parti 4: Zeka & Bilmece (gater)', GATER_KONULARI);
}

main().catch(console.error);
