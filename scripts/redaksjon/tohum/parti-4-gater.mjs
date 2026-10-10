import { calistirParti } from './parti-derleyici.mjs';

const GATER_KONULARI = [
  // 4-6 YAŞ (6 KONU - Duru, merak uyandıran, duyusal ve zekaya saygı duyan bilmeceler)
  {
    slug: 'morsomme-dyregater-for-sma',
    category: 'gater',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Skogens hemmelige spor og dyregåter',
      description: 'Hvem klatrer med klør i trestammen, og hvem bygger demninger av tømmer i bekken? Gjett dyrenes spor!',
      body: `Jeg har skarpe klør, en buskete hale og gjemmer eikenøtter dypt nede i mosen. Hvem er jeg? Ekornet!

Jeg svømmer i elven, feller trær med tennene og bygger sterke trehytter i vannet. Hvem er jeg? Beveren!

Jeg bærer et spiralformet hus på ryggen og kryper sakte over fuktige steiner etter regnet. Hvem er jeg? Sneglen!

Hvert dyr i skogen har sitt eget hemmelige spor og sin helt unike måte å leve på.

> **Spordetektiv:** Se etter kongler på skogbunnen. Er de spist av et ekorn eller hakket av en spettmeis?`
    },
    tr: {
      title: 'Ormanın Gizli İzleri ve Hayvan Bilmeceleri',
      description: 'Ağaç gövdelerine tırmanıp ceviz saklayanlar ve nehirde bent kuran mimarlar: Doğanın izlerini tahmin et!',
      body: `Keskin tırnaklarım ve tüylü bir kuyruğum var; meşe palamutlarını yosunların arasına saklarım. Ben kimim? Çevik sincap!

Nehirde yüzerim, keskin dişlerimle dalları kesip suyun üzerine sağlam ahşap kaleler kurarım. Ben kimim? Usta kunduz!

Sırtımda sarmal bir ev taşırım; yağmur dindiğinde nemli taşların üzerinde sessizce ilerlerim. Ben kimim? Sakin salyangoz!

Ormandaki her canlı kendi özel izini bırakır ve doğanın dengesinde önemli bir görev üstlenir.

> **İz Dedektifi:** Orman yürüyüşünde yerdeki çam kozalaklarını incele; kabukları bir sincap tarafından mı kemirilmiş?`
    }
  },
  {
    slug: 'farger-og-former-i-hverdagen',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Naturens kamuflasje og gjemte former',
      description: 'Hvorfor skifter haren pels når vinteren kommer, og hvilken form har månens gylne skive på himmelen?',
      body: `Hvem er brun som skogbunnen om sommeren, men blir hvit som nysnø når kulden setter inn? Fjellharen!

Hva lyser som en tynn sigd på kveldshimmelen, og vokser til en rund, sølvfarget tallerken? Månen!

Hvilket lite kryp har seks tynne bein og ligner en grønn kvist på greinen? Vandrende pinne!

Naturen bruker former og farger for å beskytte dyrene og vekke vår nysgjerrighet.

> **Formjakt:** Se deg rundt i rommet akkurat nå. Hvor mange ting finner du som har form som en perfekt sirkel?`
    },
    tr: {
      title: 'Doğanın Gizli Renkleri ve Kamuflaj Bilmecesi',
      description: 'Kış gelince kürkünü beyaza çeviren canlılar ve gökyüzünde şekil değiştiren gümüş tepsi bilmeceleri!',
      body: `Yazın orman toprağı gibi kahverengiyken, kış gelince bembeyaz bir örtüye bürünen kimdir? Dağ tavşanı!

Akşamları gökyüzünde ince bir yay gibi parıldayıp zamanla gümüş bir tepsiye dönüşen nedir? Ay!

Altı ince bacağı olan ve bir ağaç dalına konduğunda kuru bir yapraktan farksız görünen kimdir? Çubuk çekirgesi!

Doğa, renkleri ve geometrik şekilleri canlıları korumak ve merakımızı uyandırmak için ustaca kullanır.

> **Şekil Avı:** Şu an etrafına dikkatle bak; odanın içinde tam bir daire şeklinde olan kaç eşya sayabilirsin?`
    }
  },
  {
    slug: 'hva-gjemmer-seg-i-huset',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Husets hemmelige hjelpere og oppfinnelser',
      description: 'Hva slipper sollyset inn i stuen uten å slippe inn kald vind? Løs hjemmets egne gåter!',
      body: `Jeg er helt gjennomsiktig; jeg slipper lyset inn i stuen, men holder vinterkulden og stormen ute. Vinduets glass!

Jeg har to hender som beveger seg i sirkel hele dagen, men jeg har ingen armer eller føtter. Klokken på veggen!

Jeg er laget av mange papirark bundet sammen; jeg forteller spennende historier uten å si et ord. Boken!

De vanlige tingene rundt oss i huset er smarte oppfinnelser som gjør hverdagen vår trygg og spennende.

> **Oppfinnerblikk:** Hvilken gjenstand i huset ditt synes du er den allersmarteste oppfinnelsen menneskene har laget?`
    },
    tr: {
      title: 'Evimizdeki Sessiz İcatlar Bilmecesi',
      description: 'Güneş ışığını içeri alıp soğuk rüzgarı dışarıda tutan şeffaf kalkan nedir? Evimizin gizemlerini çöz!',
      body: `Bütünüyle şeffafım; güneş ışığını odana buyur eder ama dondurucu kış rüzgarını dışarıda tutarım. Pencere camı!

Yüzümde gün boyu daireler çizen iki ibrem var, fakat ne kollarım ne de bacaklarım bulunur. Duvardaki saat!

Birbirine dikilmiş onlarca sayfadan oluşurum; tek bir ses çıkarmadan sana bambaşka dünyalar anlatırım. Kitap!

Evimizde her gün kullandığımız sıradan eşyalar, aslında hayatı kolaylaştıran harika mühendislik buluşlarıdır.

> **Mucit Gözü:** Sence evinde bulunan eşyalar arasında insanların tasarladığı en dahiyane icat hangisi?`
    }
  },
  {
    slug: 'sma-fingerregler-og-moro',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Rytmiske regler for kvikke fingre',
      description: 'Fem gode venner på hver hånd samarbeider om å bygge tårn, knyte lisser og spille melodier.',
      body: `Tommelen er sterk og står støtt for seg selv når hånden griper om en trekloss.

Pekefingeren viser retningen mot fjerne stjerner og blar forsiktig i boksidene.

Langemann rager høyest opp mot himmelen og hjelper til med å bære tunge ting.

Ringfingeren og vesle lillefinger sørger for balanse og holder godt fast i vannglasset.

Fem ulike fingre på samme hånd kan gjøre fantastiske ting når de lærer å samarbeide.

> **Fingerlek:** Rør tommelen borti tuppen av hver eneste finger på hånden etter tur, én etter én!`
    },
    tr: {
      title: 'Beş Kardeşin Akıl ve Ritim Oyunu',
      description: 'Kuleler yapan, düğüm atan ve resim çizen beş parmağın iş birliğini anlatan ritmik tekerleme.',
      body: `Başparmak güçlüdür; elin bir nesneyi kavramak istediğinde sağlam bir dayanak oluşturur.

İşaret parmağı gökyüzündeki takımyıldızları gösterir ve kitap sayfalarını nazikçe çevirir.

Orta parmak kardeşlerin en uzunudur; ağır eşyaları kaldırırken gücü eşit dağıtır.

Yüzük parmağı ve serçe parmak elin dengesini korur, su bardağını düşürmeden tutar.

Birbirinden farklı boydaki bu beş parmak, birlikte hareket ettiklerinde harika sanat eserleri üretir.

> **Koordinasyon:** Başparmağını sırasıyla diğer dört parmağının ucuna tek tek değdir; hareketi hızlandırmayı dene!`
    }
  },
  {
    slug: 'hvem-lager-denne-lyden',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Hvem lager denne hemmelige lyden i mørket?',
      description: 'Vannet risler, vinden synger i granbaret og nattens fugler roper. Tren opp hørselen din!',
      body: `Hva suser gjennom trekronene som en myk melodi, men kan verken sees eller fanges i hendene? Vinden!

Hva trommer taktfast mot takrennene og lager små ringer i vannpyttene på asfalten? Regndråpene!

Hvem kvekker med dyp stemme fra sivkanten ved tjernet når solen har gått ned? Skogfrosken!

Ørene våre fanger opp hundrevis av hemmelige lyder som forteller hva som skjer i naturen rundt oss.

> **Lyttepost:** Lukk øynene dine i ett minutt. Hvilken lyd er den svakeste og mest hemmelige du klarer å høre?`
    },
    tr: {
      title: 'Doğanın Gizli Sesleri Dedektifi',
      description: 'Çam yapraklarındaki fısıltı, nehirdeki çağıltı ve gece kuşlarının sesleri: Kulaklarını aç ve tahmin et!',
      body: `Ağaç dallarının arasından ıslık çalarak geçen, fakat ne görülebilen ne de avuçta tutulabilen nedir? Rüzgar!

Çatılardan ritmik adımlarla inip yerdeki su birikintilerinde halkalar oluşturan nedir? Yağmur damlaları!

Güneş battığında göl kenarındaki sazlıkların arasından derin bir sesle koroya başlayan kimdir? Gece kurbağası!

Kulaklarımız çevremizdeki doğanın fısıldadığı yüzlerce küçük işareti yakalayan olağanüstü alıcılardır.

> **Dinleme İstasyonu:** Gözlerini bir dakika kapat; bulunduğun mekanda duyabildiğin en kısık ve derindeki ses hangisi?`
    }
  },
  {
    slug: 'frukt-og-gronnsakskurven',
    category: 'gater',
    ageRange: '4-6',
    no: {
      title: 'Gåter fra jordens spiskammer',
      description: 'Hvem gjemmer seg under den mørke jorden, og hvem modnes i sommersolen høyt oppe i trærne?',
      body: `Jeg vokser dypt nede i den fuktige molden; jeg er oransje, sprø og rik på næring for øynene. Gulroten!

Jeg henger på en gren hele sommeren; skallet mitt blir rødt i høstsolen, og inni gjemmer det seg fem små frø. Eplet!

Jeg har et hardt treaktig skall; du må knekke kappen min for å finne den knasende kjernen inni. Valnøtten!

Jorden og solen samarbeider om å fylle kurven vår med smaker, farger og livsviktige vitaminer.

> **Smaksutforsker:** Studer et eple når en voksen deler det i to på tvers. Ser du at kjernehuset danner en vakker femtakket stjerne?`
    },
    tr: {
      title: 'Toprağın ve Güneşin Lezzet Bilmeceleri',
      description: 'Toprağın altında gizlenen turuncu kökler ve ağaç dallarında olgunlaşan yıldızlı meyveler!',
      body: `Nemli toprağın derinliklerinde büyürüm; turuncu, çıtır ve gözlere kuvvet veren lezzetli bir köküm. Havuç!

Bütün yaz dalda güneşi içerim; sonbaharda kabuğum kızarır, kalbimde ise beş minik tohum gizlenir. Elma!

Dışımda tahta gibi sert bir zırh taşırım; içimdeki besleyici lezzete ulaşmak için kabuğumu kırman gerekir. Ceviz!

Toprak, su ve güneş el ele vererek sofralarımızı rengarenk vitaminlerle ve tatlarla donatır.

> **Meyve Yıldızı:** Bir elmayı enine ikiye böldüğünde, çekirdek yuvalarının beş köşeli bir yıldız oluşturduğunu hiç fark ettin mi?`
    }
  },

  // 7-9 YAŞ (8 KONU - Merak, akıl yürütme, neden-sonuç, kavramsal derinlik)
  {
    slug: 'naturens-lure-gater',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Naturens egne gåter og logiske paradokser',
      description: 'Hva kan krysse hele kontinentet uten å ta et eneste skritt, og hva har tusen nåler uten å kunne sy?',
      body: `Naturen er full av fenomener som ved første øyekast virker som magi, men som egentlig styres av strenge naturlover.

Hva kan løpe uavbrutt dag og natt fra fjellet til havet uten bein, og aldri snu tilbake? Elvefaret!

Hva bærer på en eviggrønn kappe av nåler gjennom bitende vinterfrost, men kan aldri sy en tråd? Grantreet!

Hva følger fotsporene dine overalt i direkte sollys, men forsvinner i det øyeblikket du trer inn i skyggen? Silhuetten din!

Når vi studerer omgivelsene våre med et åpent og nysgjerrig blikk, oppdager vi at hver plante og stein bærer på en logisk forklaring.

Vitenskap begynner alltid med et menneske som tør å stille spørsmål ved det som tilsynelatende virker helt selvsagt.

> **Undring:** Hvorfor fryser innsjøer alltid fra toppen og nedover, og aldri fra bunnen og opp? Tenk over hva som ville skjedd med fiskene om det var omvendt!`
    },
    tr: {
      title: 'Doğanın Gizli Şifreleri ve Mantık Bilmeceleri',
      description: 'Ayakları olmadan kıtaları aşan nehirler ve iğneleriyle dikiş dikemeyen çam ağaçlarının tabiat dengesi.',
      body: `Doğa, ilk bakışta büyüleyici bir masal gibi görünen fakat arkasında kusursuz fizik ve biyoloji kanunları barındıran sırlar bütünüdür.

Dağların karlı zirvelerinden denizlere kadar gece gündüz durmaksızın koşan, fakat hiç yorulmayan şey nedir? Coşkun bir nehir!

Dondurucu kış soğuklarında bile yeşil iğnelerden pelerin taşıyan, fakat tek bir kumaş dikemeyen varlık nedir? Çam ağacı!

Güneş tepedeyken attığın her adımı takip eden, fakat gölgeye girdiğin anda aniden sırra kadem basan nedir? Elbette senin gölgen!

Çevremizi dikkatle incelediğimizde her yaprağın, her kayanın ve her akıntının mantıklı bir doğa kuralına dayandığını görürüz.

Bütün büyük bilim insanları, herkesin olağan gördüğü şeylere hayretle ve sorularla yaklaşarak büyük keşiflere imza atmışlardır.

> **Derin Soru:** Göller kışın neden dipten değil de yüzeyden donar? Eğer göller dipten donmaya başlasaydı sudaki canlılara ne olurdu?`
    }
  },
  {
    slug: 'brovokterens-logiske-gaate',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Brovokterens nattlige logikknøtt',
      description: 'Fire reisende må krysse en smal hengebro i mørket med bare én lykt. Hvordan finner du den mest effektive strategien?',
      body: `Fire oppdagere ankommer en råtten hengebro over en dyp ravine i bekmørket, og de har bare én felles fjøslykt til rådighet.

Broen er så skrøpelig at den maksimalt tåler vekten av to personer samtidig, og ingen tør å ta et skritt ut på plankene uten lykten.

Vandrerne har ulik fart: den raskeste krysser på ett minutt, den neste på to, den tredje på fem, og den eldste bruker ti minutter.

Når to personer går sammen, må de naturligvis holde farten til den tregeste av dem for ikke å snuble i mørket.

Hvis du sender de to raskeste over først, lar den raskeste løpe tilbake med lykten, og deretter sender de to tregeste sammen, sparer du verdifull tid.

Denne typen oppgaver kalles ruteoptimalisering i matematikken og viser hvordan systematisk planlegging kan løse tilsynelatende umulige kniper.

> **Blyantutfordring:** Tegn en elv på et ark og bruk fire mynter for å regne ut den raskeste veien over broen!`
    },
    tr: {
      title: 'Karanlık Kanyon ve Köprü Geçiş Paradoksu',
      description: 'Dört yolcunun gece vakti tek fenerle çürük bir asma köprüyü en kısa sürede geçmesini sağlayan matematiksel mantık oyunu.',
      body: `Dört araştırmacı zifiri karanlıkta derin bir kanyonun üzerindeki eski bir asma köprünün başına varırlar; ellerinde yalnızca tek bir fener vardır.

Köprü öyle dar ve yıpranmıştır ki aynı anda en fazla iki kişiyi taşır; üstelik fener olmadan köprüde yürümek imkansızdır.

Yolcuların köprüyü geçiş hızları farklıdır: en genci bir dakikada, ikincisi iki dakikada, üçüncüsü beş dakikada, en yaşlısı ise on dakikada geçer.

İki kişi birlikte yürürken hızları daima daha yavaş olanın temposuna göre belirlenir.

Eğer önce en hızlı iki kişiyi karşıya geçirir, feneri en hızlıyla geri yollar ve ardından en yavaş iki kişiyi birlikte gönderirseniz muazzam bir zaman kazanırsınız.

Matematikte optimizasyon adı verilen bu stratejik düşünme yöntemi, karmaşık görünen engelleri adım adım planlayarak aşmayı öğretir.

> **Masa Başı Oyunu:** Kağıda bir nehir çiz ve dört madeni parayı yolcu yaparak toplam süreyi en aza indiren geçiş planını hesapla!`
    }
  },
  {
    slug: 'ordjakt-og-akrostikon',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Skjulte budskap med akrostikon og anagrammer',
      description: 'Lær hvordan bokstaver kan stokkes om eller settes loddrett for å skjule hemmelige beskjeder i tilsynelatende vanlige tekster.',
      body: `Et akrostikon er en eldgammel form for ordlek der den første bokstaven i hver linje danner et hemmelig ord når du leser teksten loddrett.

Hvis du for eksempel skriver ordet «HAV» loddrett nedover arket, kan hver linje begynne med disse tre bokstavene:

«H» for horisonten som møter bølgene, «A» for algene som vugger i strømmen, og «V» for vannet som aldri står stille.

Et anagram oppstår når du stokker om bokstavene i et ord for å skape et helt nytt ord, som når «laks» blir til «skal».

Disse språklige gåtene trener hjernen til å gjenkjenne mønstre, utvide ordforrådet og se at bokstaver er som byggeklosser med uendelige muligheter.

Forfattere og spioner har gjennom århundrer brukt slike teknikker for å sende hemmelige hilsener rett foran nesen på uinnvidde lesere.

> **Lag et kodevers:** Skriv navnet ditt loddrett på et ark og lag et dikt der hver linje starter med din egen forbokstav!`
    },
    tr: {
      title: 'Harflerin Gizli Dünyası: Akrostiş ve Anagram',
      description: 'Mısra başlarındaki gizli harfler ve yer değiştiren sözcüklerle şifreli mesajlar kurma sanatını keşfet!',
      body: `Akrostiş, şiirin her dizesindeki ilk harfin yukarıdan aşağıya okunduğunda gizli bir kelimeyi ortaya çıkardığı kadim bir edebiyat oyunudur.

Örneğin “GÖK” kelimesini kağıdın sol kenarına alt alta yazıp her mısrayı bu harflerle başlatabilirsin:

“G” güneşin batışıyla moraran ufuk, “Ö” örtüsünü seren serin rüzgar, “K” karanlıkta parıldayan ilk yıldız.

Anagram ise bir kelimedeki harflerin yerini değiştirerek yepyeni anlamlı bir sözcük üretmektir; tıpkı “kitap” sözcüğünden “patik” türetmek gibi.

Bu zeka oyunları zihnimizin kelime hazinesini genişletir, harfleri birer yapı taşı gibi esnek kullanmamızı sağlar.

Tarih boyunca yazarlar ve gizli haberciler, önemli sırları sıradan metinlerin içine gizlemek için akrostiş sanatından yararlanmışlardır.

> **Kendi Şiirin:** Kendi isminin harflerini alt alta yazarak ailene veya arkadaşına gizli mesaj taşıyan özel bir şiir hediye et!`
    }
  },
  {
    slug: 'morsomme-optiske-illusjoner',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Når øyet ser og hjernen gjetter',
      description: 'Hvorfor virker to like lange streker ulike når pilspissene snus? Utforsk vitenskapen bak optiske bedrag.',
      body: `Øynene våre fungerer som sofistikerte linser som fanger lysstråler, men det er hjernens synssenter som må tolke hva signalene faktisk betyr.

I den berømte Müller-Lyer-illusjonen tegner man to rette linjer med nøyaktig samme lengde på papiret.

Når du setter utovervendte piler på den ene linjen og innovervendte piler på den andre, oppfatter hjernen den første som betydelig lenger.

Dette skjer fordi hjernen vår automatisk forsøker å tolke todimensjonale tegninger som tredimensjonale rom med dybde og hjørner.

En annen klassiker er Rubin-vasen, der hjernen din veksler mellom å se en hvit vase eller to sorte ansiktsprofiler som ser på hverandre.

Optiske illusjoner beviser at det vi kaller virkelighet er en aktiv tolkning, og at vi alltid bør undersøke fakta før vi trekker bastante konklusjoner.

> **Tegneøvelse:** Bruk en linjal og tegn to linjer på nøyaktig 6 centimeter. Sett piler på endene og vis tegningen til familien uten å røpe at de er like!`
    },
    tr: {
      title: 'Göz Yanılsamaları ve Beynin Algı Sırları',
      description: 'Aynı uzunluktaki çizgiler neden farklı görünür? Optik illüzyonların ardındaki nörolojik mekanizmaları keşfet.',
      body: `Gözlerimiz ışığı toplayan birer mercek gibi çalışır; fakat o ışık sinyallerini anlamlandıran ve resmi oluşturan organımız beynimizdir.

Ünlü Müller-Lyer yanılsamasında, kağıda cetvelle milimetresine kadar eşit uzunlukta iki düz çizgi çizilir.

Çizgilerden birinin uçlarına dışa açılan oklar, diğerine ise içe kapanan oklar eklendiğinde, beynimiz ilk çizgiyi çok daha uzun algılar.

Bunun sebebi, zihnimizin iki boyutlu çizimleri derinliği olan üç boyutlu mekanlar ve oda köşeleri gibi yorumlamaya programlanmış olmasıdır.

Rubin vazosu illüzyonunda ise beyin aynı anda hem beyaz bir kadeh hem de birbirine bakan iki siyah insan profili görür ve ikisi arasında gidip gelir.

Göz yanılsamaları bize ilk bakışta gördüğümüz her şeyin mutlak gerçek olmayabileceğini ve her zaman sorgulayıcı olmamız gerektiğini hatırlatır.

> **Cetvel Deneyi:** Kağıda altışar santimlik iki eşit çizgi çiz; uçlarına oklar ekleyip arkadaşlarının hangisini daha uzun göreceğini test et!`
    }
  },
  {
    slug: 'tankespill-som-lurer-hjernen',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Lure spørsmål som utfordrer antakelsene våre',
      description: 'Hvorfor svarer vi ofte feil på enkle gåter? Lær hvordan hjernen tar mentale snarveier og hvordan du avslører dem.',
      body: `Mange tankenøtter er konstruert for å utnytte hjernens trang til å ta raske snarveier i stedet for å analysere ordene bokstavelig.

Tenk over dette klassiske spørsmålet: Hvor mange måneder i året har 28 dager? De fleste svarer umiddelbart «februar».

Men sannheten er selvsagt at samtlige tolv måneder i året har minst 28 dager, selv om de fleste har flere.

Eller hva med dette: Hva blir våtere jo mer du tørker med det? Svaret er badehåndkleet ditt etter en dusj.

Disse gåtene tvinger oss til å stanse opp, undersøke premissene og unngå å hoppe til forhastede konklusjoner basert på vane.

Å trene hjernen med slike oppgaver styrker den kritiske sansen og gjør oss flinkere til å løse uventede problemer i skolehverdagen.

> **Middagstrim:** Still gåten om månedene ved middagsbordet og se hvor mange som svarer februar før de innser poenget!`
    },
    tr: {
      title: 'Varsayımları Yıkan Ters Köşe Zeka Soruları',
      description: 'Beynimizin otomatik kalıplara nasıl kapıldığını gösteren ve kelimelerin gerçek anlamını düşündüren zeka soruları.',
      body: `Pek çok zeka sorusu, beynimizin kelimeleri derinlemesine incelemek yerine alışkanlıklarla kestirmeden cevap verme eğilimini test eder.

Şu klasik soruyu düşün: Bir yılda kaç ayın içinde yirmi sekiz gün bulunur? İnsanların çoğu hiç düşünmeden “şubat” der.

Oysa gerçekte takvimdeki bütün on iki ayın içinde en az yirmi sekiz gün vardır; çoğunda fazlası da bulunur.

Ya da şu soruya bakalım: Kuruladıkça ve sildikçe kendisi daha çok ıslanan eşya nedir? Elbette banyo havlusu!

Bu tarz şaşırtmacalar bizi aceleci varsayımlardan kurtarır, söylenen cümlenin mantıksal zeminini dikkatle incelemeyi öğretir.

Ters köşe sorularla zihin jimnastiği yapmak, okulda ve günlük hayatta karmaşık sorunlarla karşılaştığımızda kalıpların dışına çıkmamızı sağlar.

> **Akıl Jimnastiği:** Yirmi sekiz gün bilmecesini ailene sor; kaç kişinin şubat yanıtını verip ardından gülümsediğini izle!`
    }
  },
  {
    slug: 'arstidenes-og-tidens-gater',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Jordens skrå akse og årstidenes kretsløp',
      description: 'Hvorfor har vi sommer når Australia har vinter? Løs astronomiens store gåte om sollyset og kalenderen.',
      body: `Mange tror feilaktig at jorden har sommer fordi vi er nærmere solen, men i virkeligheten er jorden faktisk litt nærmere solen i januar.

Den virkelige årsaken til årstidene er at jordaksen heller med nøyaktig 23,5 grader i forhold til banen rundt solen.

Når den nordlige halvkule heller mot solen, treffer solstrålene bakken mer direkte og dagene blir lange og varme.

Samtidig heller den sørlige halvkule bort fra solen, noe som betyr at de har vinter med kalde, korte dager mens vi bader i fjorden.

To ganger i året, ved vårjevndøgn og høstjevndøgn, er dag og natt nøyaktig like lange over hele kloden.

Dette kosmiske samspillet minner oss på at tiden og årstidene våre er et direkte resultat av jordens evige dans gjennom verdensrommet.

> **Globuseksperiment:** Lys med en lommelykt på en globus eller en appelsin som holdes på skrå. Hvilken halvdel får mest direkte lysstråler?`
    },
    tr: {
      title: 'Dünya’nın Eğik Ekseni ve Mevsimler Bilmecesi',
      description: 'Kuzey yarımkürede yaz yaşanırken güneyde neden kış hüküm sürer? Gezegenimizin eğik duruşunun astronomik sırrı.',
      body: `Pek çok insan mevsimlerin Dünya’nın Güneş’e yaklaşıp uzaklaşmasıyla oluştuğunu zanneder; oysa gezegenimiz ocak ayında Güneş’e aslında daha yakındır.

Mevsimlerin asıl sebebi, Dünya’mızın dönme ekseninin yörünge düzlemine göre tam yirmi üç buçuk derece eğik durmasıdır.

Kuzey yarımküre Güneş’e doğru eğildiğinde, ışınlar dik açıyla gelir; günler uzar ve toprak sıcacık bir yaz mevsimine uyanır.

Aynı anda güney yarımküre Güneş’ten uzak kaldığı için orada dondurucu kış fırtınaları ve kısa günler yaşanır.

Yılda iki kez, ilkbahar ve sonbahar ekinokslarında ise gece ile gündüz yeryüzünün her köşesinde birbirine tam eşit olur.

Mevsimlerin bu muazzam döngüsü, evrendeki minik bir açı farkının koca bir gezegenin yaşam ritmini nasıl belirlediğini kanıtlar.

> **Fener Deneyi:** Bir portakala el feneri tutarken portakalı hafifçe eğik tut; fener ışığının hangi yarımküreye daha dik vurduğunu gözlemle!`
    }
  },
  {
    slug: 'morsomme-ordkjeder',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Sammensatte ord og språklige kjedereaksjoner',
      description: 'Hvordan kan det siste leddet i et ord bli starten på det neste? Bygg uendelige ordtog sammen med venner!',
      body: `Det norske språket har en fantastisk egenskap: vi kan sette sammen to selvstendige ord og skape et helt nytt begrep med egen betydning.

I ordkjedeleken bruker man slutten av et sammensatt ord som starten på det neste leddet i kjeden.

For eksempel: solhatt blir til hatteske, som blir til eskelokk, som blir til lokkemat, som igjen kan bli til matpakke.

En annen variant er siste-bokstav-leken, der siste lyd i ordet må bli første bokstav hos neste deltaker uten nøling.

Denne typen språktrening tvinger hjernen til å hente frem ord fra hukommelsens dypeste lag og styrker ordforrådet betydelig.

Leken krever verken papir eller strøm, og er perfekt for å gjøre lange bilreiser eller regnværsdager morsomme og lærerike.

> **Start et ordtog:** Hvor mange vogner klarer du og en venn å koble sammen med sammensatte ord uten å gjenta det samme ordet?`
    },
    tr: {
      title: 'Bileşik Sözcükler ve Sonsuz Kelime Treni',
      description: 'Bir sözcüğün son ekinin yeni bir dünyanın kapısını açtığı morfolojik kelime türetmece oyunu.',
      body: `Türkçemiz yeni kavramlar üretmek için eklerin ve bileşik kelimelerin bir yapboz gibi birleştiği muhteşem bir dildir.

Kelime treni oyununda söylenen her bileşik sözcüğün ikinci yarısı, bir sonraki yolcunun vagonuna lokomotif olur.

Örneğin: ayçiçeği sözcüğü çiçeklik kelimesine bağlanır, oradan likör, ardından kördüğüm ve düğüm noktası diyerek tren uzayıp gider.

Bir diğer varyasyon ise son harften kelime türetmektir; her oyuncu önceki sözcüğün son harfiyle anında yeni bir kelime bulmalıdır.

Bu oyun zihnimizin sözlük hafızasını harekete geçirir, çağrışım hızını artırır ve dilimizin zenginliğini eğlenceli bir yarışa dönüştürür.

Yolculuklarda veya arkadaşlarla bir aradayken ekranlara ihtiyaç duymadan zihni tazeleyen en keyifli akıl oyunudur.

> **Vagon Yarışı:** Bir arkadaşınla hemen bir kelime treni başlat; aynı kelimeyi tekrar etmeden kaç vagon bağlayabileceğinizi görün!`
    }
  },
  {
    slug: 'tungekrollere-som-far-deg-til-a-le',
    category: 'gater',
    ageRange: '7-9',
    no: {
      title: 'Fonetik gymnastikk og vriene tungekrøllere',
      description: 'Hvorfor snubler tungen når like konsonanter følger tett på hverandre? Lær skuespillernes oppvarmingsteknikker.',
      body: `Tungekrøllere er setninger konstruert med like konsonantlyder som tvinger talemuskulaturen til å veksle posisjon i ekstrem fart.

Klassikeren «Ibsens ripsbusker og andre buskvekster» krever at leppene og tungen skifter lynhurtig mellom p- og b-lyder.

Når vi prøver å si setningen raskt tre ganger på rad, sender hjernen motoriske signaler raskere enn musklene i munnen rekker å respondere.

Skuespillere og nyhetsopplesere bruker bevisst slike fraser under stemmetrening for å gjøre diksjonen skarp og artikulert før de går på scenen.

Når vi snubler i ordene og ler av de komiske lydene som oppstår, trener vi samtidig hjernens evne til finmotorisk kontroll.

Målet er ikke å være feilfri, men å utforske hvordan språklyder lages ved hjelp av tenner, tunge, lepper og lufttrykk.

> **Presisjonsøvelse:** Si «Stekt torsk, kokt torsk» tre ganger sakte med overdreven munnbevegelse, og forsøk deretter å doble hastigheten!`
    },
    tr: {
      title: 'Fonetik Akrobasi ve Dil Bükücü Tekerlemeler',
      description: 'Birbirine benzeyen sesler peş peşe dizilince dilimiz neden sürçer? Tiyatrocuların ses ve diksiyon antrenmanını keşfet.',
      body: `Tekerlemeler, benzer harf ve hecelerin art arda dizilmesiyle dil kaslarını ve dudak koordinasyonunu zorlayan fonetik zeka oyunlarıdır.

“Şu köşe yaz köşesi, şu köşe kış köşesi, ortadaki su şişesi” cümlesi söylenirken dil damağın farklı noktalarına saliseler içinde dokunmak zorundadır.

Hızlandıkça beynin konuşma merkezi ağız kaslarına yetişemez ve kelimeler birbirine karışarak kahkahalara yol açan sürçmeler doğar.

Tiyatro sanatçıları ve spikerler, sahneye çıkmadan önce kelimeleri tane tane ve kusursuz telaffuz edebilmek için tekerlemelerle ısınırlar.

Hata yaptıkça gülmek ve tekrar denemek, konuşma akıcılığını artırır ve ses tellerimizi güçlendirir.

Önemli olan dili bir jimnastikçi gibi esnetmek ve seslerin ağzımızın hangi noktalarından çıktığını bilinçli olarak fark etmektir.

> **Diksiyon Meydan Okuması:** “Bir berber bir berbere gel beraber bir berber dükkanı açalım demiş” tekerlemesini önce yavaşça, sonra hızlanarak söyle!`
    }
  },

  // 10-12 YAŞ (6 KONU - Kriptoloji, algoritmik düşünce, Boole mantığı, uzamsal geometri, analitik dedüksiyon)
  {
    slug: 'cæsarchiffer-og-hemmelige-koder',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Cæsarchiffer og kryptografiens matematiske røtter',
      description: 'Hvordan fungerer alfabetforskyvning, og hvorfor danner Julius Cæsars to tusen år gamle metode grunnlaget for moderne datasikkerhet?',
      body: `Kryptografi, kunsten å skjule informasjon bak matematiske regler, har avgjort kriger og formet historien i over to tusen år.

Den romerske feltherren Julius Cæsar stolte ikke på budbringerne sine og oppfant et substitusjonschiffer der hver bokstav forskyves et fast antall plasser i alfabetet.

Med en forskyvning på tre plasser blir A til D, B til E, og bokstavene på slutten av alfabetet ruller rundt til starten.

Mottakeren som kjente den hemmelige nøkkelen trengte bare å reversere forskyvningen for å rekonstruere den opprinnelige teksten.

Svakheten ved Cæsarchifferet ble avslørt av arabiske matematikere på åttenhundretallet gjennom frekvensanalyse: i alle språk forekommer visse bokstaver mye oftere enn andre.

Selv om moderne datakryptering bruker ugjennomtrengelige nøkler basert på gigantiske primtall, bygger all digital sikkerhet på Cæsars opprinnelige prinsipp om symmetrisk koding.

> **Kryptoanalyse:** Skriv en setning på fem ord der hver bokstav er forskjøvet to plasser fremover. Gi koden til en venn og se om de klarer å knekke nøkkelen!`
    },
    tr: {
      title: 'Sezar Kriptolojisi ve Şifreleme Matematiği',
      description: 'Harf kaydırma algoritmaları, frekans analizi ve modern siber güvenliğin iki bin yıllık köklerini keşfet.',
      body: `Kriptoloji, yani gizli mesajları matematiksel kurallarla koruma bilimi, iki bin yıldır tarihin ve askeri stratejilerin kaderini belirlemiştir.

Romalı komutan Julius Sezar, ulaklarına güvenmediği için alfabedeki her harfi belirli bir adım ileri kaydıran bir şifreleme düzeni geliştirdi.

Üç basamaklı bir kaydırmada A harfi Ç, B harfi D olur; alfabenin sonundaki harfler ise başa sararak döngüyü tamamlar.

Mesajı alan komutan gizli anahtarı bilerek harfleri üç adım geri aldığında orijinal askeri emirler kolayca ortaya çıkardı.

Fakat bu yöntemin zayıflığını dokuzuncu yüzyılda İslam alimi El-Kindi frekans analiziyle çözdü; çünkü her dilde bazı harfler diğerlerinden çok daha sık kullanılır.

Modern internet bankacılığı devasa asal sayılara dayanan karmaşık algoritmalar kullansa da, temeli Sezar’ın attığı bu simetrik mantığa dayanır.

> **Şifre Avcısı:** Bir kağıda iki harf ileri kaydırarak beş kelimelik gizli bir mesaj yaz; arkadaşına verip frekans analiziyle çözmesini iste!`
    }
  },
  {
    slug: 'elvekryssingens-klassiske-gaate',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Elvekryssing og tilstandsrommets algoritmer',
      description: 'Bonden, ulven, geiten og kålhodet: Hvordan en klassisk tankenøtt fra middelalderen modellerer moderne datalogisk problemløsning.',
      body: `Elvekryssingsgåten ble først nedtegnet av den lærde Alcuin av York på åttehundretallet og utgjør en hjørnestein innen algoritmisk tenkning.

En bonde må frakte en ulv, en geit og et kålhode over en stri elv i en robåt som bare har plass til ham selv og én passasjer om gangen.

Dersom bonden forlater geiten og kålhodet alene på elvebredden, spiser geiten kålet; dersom ulven og geiten forlates alene, spiser ulven geiten.

Den geniale løsningen krever et kontraintuitivt grep: bonden må først ro geiten over, deretter ro kålhodet over, men ta med seg geiten tilbake på returen.

I moderne informatikk representerer denne oppgaven et tilstandsrom med grafer der hver gyldig kombinasjon utgjør en node, og ulovlige tilstander filtreres vekk.

Problemet lærer oss at den raskeste veien til målet noen ganger krever at man tar et midlertidig skritt bakover for å bevare systemets likevekt.

> **Algoritmisk kartlegging:** Tegn alle de mulige tilstandene som sirkler på et ark, og trekk piler mellom dem for å visualisere løsningsstien!`
    },
    tr: {
      title: 'Nehir Geçiş Paradoksu ve Durum Algoritmaları',
      description: 'Kurt, kuzu ve lahana paradoksu: Ortaçağ mantık bilmecesinin modern bilgisayar algoritmalarını nasıl modellediğini incele.',
      body: `Nehir geçiş paradoksu, dokuzuncu yüzyılda Alcuin tarafından kayda geçirilmiş klasik bir mantık ve durum uzayı problemidir.

Bir çiftçi yanındaki kurt, kuzu ve lahana sepetiyle nehrin karşısına geçmelidir; fakat elindeki küçük sandal sadece kendisini ve bir nesneyi taşır.

Çiftçi yanlarında yokken kuzu lahanayı yer, kurt ise kuzuyu tek lokmada mideye indirir.

Çözümün pürek noktası şaşırtıcı bir geri adımda saklıdır: çiftçi önce kuzuyu geçirir, sonra lahanayı götürür fakat dönerken kuzuyu tekrar sandala alıp geri getirir.

Bilgisayar biliminde bu mantık durum grafiği olarak adlandırılır; geçerli adımlar birbirine bağlanırken tehlikeli düğümler elenir.

Bu problem bize, karmaşık bir hedefe ulaşırken bazen geriye doğru geçici bir hamle yapmanın en doğru strateji olabileceğini kanıtlar.

> **Grafik Çizimi:** Olası tüm durumları kağıda daireler halinde çiz ve aralarına oklar koyarak güvenli geçiş yolunu bir algoritma gibi modelle!`
    }
  },
  {
    slug: 'sudoku-og-tallmonstre-for-mestere',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Sudoku og deduktiv logikk på 9x9 ruter',
      description: 'Hvorfor handler ikke Sudoku om matematikk, men om ren deduksjon og eliminasjonsmetoder? Bli en mester i mønstergjenkjenning.',
      body: `Selv om Sudoku spilles med tallene fra 1 til 9, krever spillet verken addisjon, subtraksjon eller regneferdigheter; du kunne like gjerne brukt ni ulike farger.

Kjernen i spillet er ren deduktiv logikk: hvert tall må forekomme nøyaktig én gang i hver rad, hver kolonne og hver av de ni 3x3-blokkene.

Avanserte spillere bruker eliminasjonsteknikker som kalles «enslige kandidater» og «skjulte par» for å utelukke umulige plasseringer systematisk.

Når du beviser at et bestemt tall er det eneste som lovlig kan stå i en rute, utløser det ofte en dominoeffekt av nye oppdagelser over hele brettet.

Datamaskiner løser Sudoku ved hjelp av tilbakesporingsalgoritmer, men den menneskelige gleden ligger i å oppdage mønstrene gjennom tålmodig observasjon.

Å løse krevende brett trener hjernens arbeidshukommelse og lærer deg å skille mellom antakelser og ugjendrivelige bevis.

> **Mestertips:** Når du står fast på et Sudoku-brett, skriv små blyantnotater med mulige kandidater i hjørnene av rutene for å visualisere mønsteret!`
    },
    tr: {
      title: 'Sudoku Dedüksiyonu ve 9x9 Mantık Matrisi',
      description: 'Sudoku neden bir matematik oyunu değil de saf mantık elemesidir? İpuçlarını birleştirerek sayı kalıplarını ustaca çözme teknikleri.',
      body: `Sudoku 1’den 9’a kadar rakamlarla oynansa da toplama veya çarpma işlemi gerektirmez; sayılar yerine dokuz farklı renk de kullanılabilirdi.

Oyunun temeli saf tümdengelim mantığıdır: her rakam her satırda, her sütunda ve her 3x3’lük bölgede tam olarak bir kez yer almalıdır.

Usta oyuncular, bir kareye gelebilecek diğer tüm olasılıkları eleyerek tek kalan doğru sayıyı bulan tekil aday yöntemini uygularlar.

Doğru yerleştirilen her bir rakam bir kilit açar ve tablonun diğer köşelerindeki gizli sayıların peş peşe ortaya çıkmasını sağlar.

Bilgisayarlar bu bulmacaları geri izleme algoritmalarıyla çözerken, insan zihni desenleri sabırla fark etmenin entelektüel keyfini yaşar.

Sudoku çözmek görsel hafızayı keskinleştirir, sabırlı analizi geliştirir ve kesin kanıtlarla tahminler arasındaki farkı net biçimde öğretir.

> **Usta İpucu:** Zorlu bir Sudoku bulmacasında tıkandığında, karelerin köşelerine minik kurşun kalem notlarıyla aday sayıları yazarak eleme yap!`
    }
  },
  {
    slug: 'fyrstikkgater-og-geometri',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Romlig tenkning og fyrstikkenes topologi',
      description: 'Hvordan kan seks like lange pinner danne fire likesidede trekanter? Utforsk overgangen fra todimensjonale flater til tredimensjonalt rom.',
      body: `Fyrstikkgåter virker ofte uskyldige, men de utfordrer hjernens tendens til å låse seg fast i todimensjonale flater og kjente geometriske vaner.

En klassisk oppgave ber deg lage nøyaktig fire likesidede trekanter ved hjelp av bare seks like lange fyrstikker uten å knekke eller krysse dem.

Hvis du forsøker å legge pinnene flatt på bordplaten, oppdager du raskt at det er matematisk umulig; seks pinner kan maksimalt danne to uavhengige trekanter.

Løsningen krever at du bryter ut av flaten og tenker i tre dimensjoner: ved å bygge en tetraeder (en trebent pyramide), oppstår fire like trekanter i rommet.

Denne evnen til romlig rotasjon og dimensjonsskifte er den samme ferdigheten som arkitekter, molekylærbiologer og romfartsingeniører benytter hver eneste dag.

Gåten beviser at begrensninger ofte ikke ligger i oppgaven selv, men i de usynlige rammene vi ubevisst pålegger vår egen tenkning.

> **Praktisk konstruksjon:** Ta seks tannpirkere og litt modellkitt. Bygg en tredimensjonal pyramide på bordet og bekreft at den har nøyaktig fire trekantede flater!`
    },
    tr: {
      title: 'Uzamsal Düşünme ve Kibrit Çöpü Geometrisi',
      description: 'Altı çöple dört eşkenar üçgen kurma bilmecesi: İki boyutlu düzlemden üç boyutlu uzaya geçişin matematiksel zarafeti.',
      body: `Kibrit çöpü bilmeceleri, zihnimizin iki boyutlu düzlemlere sıkışıp kalma eğilimini kıran harika uzamsal geometri problemleridir.

Klasik bir soru senden altı eşit uzunluktaki çöple hiçbirini kırmadan tam dört adet eşkenar üçgen kurmanı ister.

Çöpleri masanın üzerine yatay olarak dizmeye çalıştığında bunun imkansız olduğunu görürsün; düzlemde altı çöp en fazla iki üçgen oluşturur.

Sorunun çözümü üçüncü boyuta adım atmakta saklıdır: masada bir üçgen taban kurup diğer üç çöpü tepede birleştirerek bir piramit inşa edersin.

Ortaya çıkan dörtyüzlü yapı (tetrahedron), tam dört adet kusursuz eşkenar üçgen yüzeye sahiptir.

Bu uzamsal canlandırma becerisi mimarların, moleküler biyologların ve uzay mühendislerinin her gün başvurduğu temel zihinsel araçtır.

> **Uygulamalı Deney:** Altı kürdan ve biraz oyun hamuru alarak masada üç boyutlu bir piramit yap; dört farklı üçgen yüzeyi parmaklarınla say!`
    }
  },
  {
    slug: 'ridderne-og-sannhetens-oy',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Sannhetens øy og Boole-logikkens lover',
      description: 'På en øy der riddere alltid snakker sant og kjeltringer alltid lyver, danner logiske deduksjoner grunnlaget for moderne databrikker.',
      body: `Matematikeren Raymond Smullyan skapte de berømte gåtene om Ridderne og Kjeltringene for å illustrere formell logikk og sannhetsverdier.

På denne mytiske øya snakker ridderne utelukkende sant, mens kjeltringene er biologisk ute av stand til å si noe som stemmer med virkeligheten.

Tenk deg at du møter innbygger A, som erklærer: «Jeg er en kjeltring, eller så er to pluss to lik fem.» Hva er han egentlig?

Hvis A var en ridder, måtte påstanden være sann; men en ridder kan verken være en kjeltring eller påstå at to pluss to er fem.

Hvis A var en kjeltring, måtte påstanden være usann; men siden det første leddet er sant for en kjeltring, ville hele utsagnet blitt sant, noe som skaper et uløselig paradoks.

Slike oppgaver demonstrerer prinsippene bak Boolsk algebra der uttrykk evalueres til enten sann eller usann, nøyaktig slik transistorene i en prosessor opererer med 1 og 0.

> **Logisk analyse:** Hva ville en innbygger på øya svare dersom du spurte ham: «Er du en ridder?» Tenk nøye gjennom svaret både for en ridder og en kjeltring!`
    },
    tr: {
      title: 'Doğruluk Adası ve Boole Mantığının Kanunları',
      description: 'Şövalyeler ile haydutların adasındaki paradokslar: İkili kodların ve bilgisayar işlemcilerinin mantıksal temeli.',
      body: `Ünlü mantıkçı Raymond Smullyan tarafından kurgulanan Doğruluk Adası, biçimsel mantığı ve ikili doğruluk değerlerini öğreten klasik bir düşünce laboratuvarıdır.

Bu adada şövalyeler asla yalan söyleyemez; haydutlar ise ağızlarından tek bir doğru sözcük bile çıkaramazlar.

Yolda karşılaştığın bir ada sakini sana şöyle der: “Ben bir haydutum veya iki kere iki beş eder.” Bu konuşan kişi kimdir?

Eğer bu kişi şövalye olsaydı sözünün doğru olması gerekirdi; oysa bir şövalye ne hayduttur ne de matematiğin yanlış olduğunu savunabilir.

Eğer haydut olsaydı sözünün yanlış olması gerekirdi; fakat cümlenin ilk kısmı bir haydut için doğru olduğundan cümle doğruya dönüşür ve çelişki doğar.

Bu mantıksal kurgu, bilgisayar işlemcilerindeki transistörlerin 1 ve 0 mantığıyla nasıl çalıştığını birebir modeller.

> **Mantık Paradoksu:** Adadaki birine “Sen bir şövalye misin?” diye sorsan ne cevap alırsın? Hem şövalyenin hem haydutun aynı yanıtı vereceğini fark ettin mi?`
    }
  },
  {
    slug: 'detektiv-sherlocks-tankerekker',
    category: 'gater',
    ageRange: '10-12',
    no: {
      title: 'Deduksjonens kunst og vitenskapelig observasjon',
      description: 'Hvordan skiller mesterdetektiven mellom antakelser og ugjendrivelige spor? Lær å tenke med streng logisk stringens.',
      body: `Arthur Conan Doyles berømte detektiv Sherlock Holmes påpekte ofte at folk flest ser sine omgivelser, men svært sjelden observerer detaljene med bevissthet.

Observasjon handler om å registrere faktiske fysiske spor uten å forurense dem med forhastede teorier eller personlige fordommer.

Dersom en person har våte skosåler og fuktige skuldre, kan du fastslå at vedkommende nylig har vært ute i regnværet, men ikke at han har glemt paraplyen hjemme.

Deduksjon betyr å kombinere en allmenngyldig sannhet med konkrete observasjoner for å trekke en konklusjon som med nødvendighet må være sann.

Holmes oppsummerte sin metode i en berømt læresetning: Når du har eliminert alt som er umulig, må det som står igjen være sannheten, uansett hvor usannsynlig det virker.

Denne systematiske metoden er identisk med den vitenskapelige arbeidsmetoden som leger, astronomer og kriminalteknikere bruker for å avdekke naturens hemmeligheter.

> **Observasjonstest:** Se nøye på et rom i tretti sekunder. Lukk øynene og beskriv fem spesifikke detaljer du vanligvis aldri legger merke til!`
    },
    tr: {
      title: 'Tümdengelim Sanatı ve Bilimsel Gözlem Metodu',
      description: 'Sherlock Holmes’un analitik akıl yürütme ilkeleri: Varsayımlarla somut kanıtları birbirinden ayırma rehberi.',
      body: `Efsanevi araştırmacı Sherlock Holmes, insanların çoğunun çevrelerine yalnızca baktığını fakat detayları bilinçle gözlemlemediğini söylerdi.

Gözlem yapmak, fiziksel kanıtları önyargılardan ve aceleci teorilerden arındırarak tarafsızca kaydetme disiplinidir.

Birinin ayakkabılarının altı çamurlu ve omuzları ıslaksa, onun yağmur altında yürüdüğünü kesin olarak anlarsınız; fakat şemsiyesini kaybettiğini varsayamazsınız.

Tümdengelim ise genel tabiat kanunlarıyla somut ipuçlarını birleştirerek sarsılmaz ve zorunlu bir mantıksal sonuca ulaşma sanatıdır.

Holmes bu yöntemi ünlü ilkesiyle özetler: İmkansız olan tüm ihtimalleri elediğinde geriye kalan şey, ne kadar şaşırtıcı görünürse görünsün mutlak gerçektir.

Bu analitik düşünce disiplini doktorların teşhis koyarken, gökbilimcilerin yeni gezegenler keşfederken kullandığı evrensel bilimsel yöntemdir.

> **Gözlem Alıştırması:** Bulunduğun odaya otuz saniye boyunca dikkatle bak; ardından gözlerini kapatıp fark ettiğin beş küçük ayrıntıyı say!`
    }
  }
];

async function main() {
  await calistirParti('Parti 4: Zeka & Bilmece (gater)', GATER_KONULARI);
}

main().catch(console.error);
