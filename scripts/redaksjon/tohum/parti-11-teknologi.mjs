import { calistirParti } from './parti-derleyici.mjs';

const TEKNOLOGI_HIKAYELER = [
  // 4-6 YAŞ (6 KONU - Tekerlekler, el feneri, mıknatıs, dokunmatik ekran, saat çarkları, köprüler)
  {
    slug: 'hjul-som-ruller-og-gjor-arbeid-lett',
    category: 'teknologi',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Hjulene som ruller og bærer tunge lass',
      description: 'Tenk om en sykkel hadde firkantede klosser i stedet for runde hjul; hvorfor triller en sirkel så lett?',
      body: `Hvis du prøver å skyve en tung pappeske over teppet, må du ta i med hele kroppen.

Esken skraper mot gulvet og bremser opp fordi overflatene gnisser mot hverantre.

Men hvis du setter runde hjul under kassen, forandrer alt seg med en gang.

Hjulet berører bare bakken på et ørsmå punkt om gangen.

Når du dytter forsiktig, ruller hjulet fremover uten å skrape; arbeidet blir lett som en lek.

Fra trillebårer til tog og sykler; runde hjul hjelper oss å frakte ting dit vi vil.

> **Trilletest:** Skyv en bok over bordet; legg tre runde fargeblyanter under boken og kjenn forskjellen.`
    },
    tr: {
      title: 'Ağır Yükleri Taşıyan Dönen Tekerlekler',
      description: 'Bir bisikletin tekerlekleri kare şeklinde olsaydı ne olurdu? Daire biçimli tekerlekler neden kaymak gibi akar?',
      body: `Ağır bir karton kutuyu halının üzerinde itmeye çalıştığında bütün gücünü kullanman gerekir.

Kutunun altı yere sürtünür ve ilerlemeni zorlaştırır.

Fakat aynı kutunun altına minik yuvarlak tekerlekler koyarsan her şey bir anda kolaylaşır.

Yuvarlak tekerlek yere sadece küçücük bir noktada değer.

Hafifçe dokunduğunda tekerlek döner; kutu sürtünmeden kayıp gider.

Bisikletlerden el arabalarına kadar yuvarlak tekerlekler hayatımızı hafifleten harika buluşlardır.

> **Tekerlek Deneyi:** Ağır bir kitabı masada it; altına üç adet yuvarlak boya kalemi koyup tekrar dene.`
    }
  },
  {
    slug: 'lommelykten-og-lyset-i-lommen',
    category: 'teknologi',
    ageRange: '4-6',
    no: {
      title: 'Hvordan kan en lommelykt trylle frem en lysstråle?',
      description: 'Når du trykker på en liten knapp på håndtaket, våkner en skarp lyskjegle i mørket; hva skjer inni røret?',
      body: `Når du tar med en lommelykt under dyna, kan du lage din egen lille hule av lys.

Inne i lommelykten ligger et lite batteri med lagret energi.

Når du trykker på knappen, kobles to tynne metallbiter sammen til en ubrutt bro.

Usynlige elektriske partikler strømmer gjennom tråden frem til den lille lysdioden.

Dioden gløder med et klart hvitt skinn uten å bli brennhet.

Et lite buet speil bak pæren samler alle strålene til en rett lyskjegle.

> **Skyggelek:** Lys på hånden din foran en hvit vegg; lag en kanin med fingrene dine i lysstrålen.`
    },
    tr: {
      title: 'Minik Bir El Feneri Nasıl Işık Saçar?',
      description: 'Düğmesine dokunduğun anda karanlığı yaran berrak bir ışık: El fenerinin içinde neler olup biter?',
      body: `Battaniyenin altına el feneriyle girdiğinde kendine sıcacık aydınlık bir mağara kurabilirsin.

Fenerin içinde enerji depolayan küçük bir pil saklanır.

Düğmeye bastığında metal parçalar birbirine dokunur ve kapalı bir köprü kurulur.

Görünmez elektrik tanecikleri bu köprüden geçerek minik lambaya ulaşır.

Lamba ısınmadan berrak beyaz bir ışık yaymaya başlar.

Lambanın arkasındaki kavisli parlak ayna ise ışığı toplayıp ileriye doğru fırlatır.

> **Gölge Oyunu:** Feneri duvara doğru tut; elinle duvarda tavşan kulağı yaparak ışığı yakala.`
    }
  },
  {
    slug: 'magnetens-usynlige-kraft',
    category: 'teknologi',
    ageRange: '4-6',
    no: {
      title: 'Magnetens magiske kraft: Hvorfor fester den seg?',
      description: 'En fargerik magnet sitter fast på kjøleskapsdøren uten lim; hvilke hemmelige usynlige hender trekker i metallet?',
      body: `Når du henger en fin tegning på kjøleskapet, klemmer du en magnet over papiret.

Magneten henger trygt fast helt av seg selv uten en eneste dråpe klebrig lim.

Rundt magneten finnes et usynlig kraftfelt som kalles et magnetfelt.

Dette feltet griper tak i jernet inni kjøleskapsdøren og trekker magneten inntil.

Hvis du prøver å feste magneten på en trestol eller en glassrute, faller den rett i gulvet.

Magneter er kresne; de elsker bare bestemte metaller som jern, nikkel og stål.

> **Magnefsafari:** Ta en kjøleskapsmagnet og test ting i rommet; hvilke gjenstander sier klikk og biter seg fast?`
    },
    tr: {
      title: 'Buzdolabına Yapışan Mıknatısın Görünmez Gücü',
      description: 'Yapıştırıcı olmadan buzdolabına sıkıca tutunan renkli taşlar: Mıknatıs demiri nasıl yakalar?',
      body: `Yaptığın güzel bir resmi buzdolabına asarken üzerine küçük bir mıknatıs koyarsın.

Mıknatıs arkasında hiçbir yapışkan olmadan buzdolabının kapağında asılı kalır.

Mıknatısın etrafında gözle görülmeyen bir çekim alanı bulunur.

Bu görünmez güç dolap kapağındaki demiri hisseder ve mıknatısı hızla kendine çeker.

Aynı mıknatısı ahşap bir masaya veya cam pencereye tuttuğunda ise hemen yere düşer.

Mıknatıslar seçicidir; yalnızca demir ve çelik gibi özel metalleri sıkıca yakalarlar.

> **Mıknatıs Keşfi:** Bir mıknatısı alıp odadaki eşyalara yaklaştır; hangi nesnelerin tık diye yapıştığını bul.`
    }
  },
  {
    slug: 'beroringsskjermen-og-fingertuppene',
    category: 'teknologi',
    ageRange: '4-6',
    no: {
      title: 'Hvordan vet nettbrettet hvor fingeren din trykker?',
      description: 'Når du stryker pekefingeren over det glatte glasset, flytter bildene seg; hvordan kjenner skjermen berøringen din?',
      body: `Når du ser på et nettbrett eller en telefon, ser du bare en blank glassflate.

Men like under det tynne glasset ligger et rutenett av mikroskopiske, usynlige ledninger.

Kroppen til et menneske leder ørlite granne naturlig elektrisitet.

Når den myke fingertuppen din berører glasset, suger fingeren til seg en bitteliten mengde ladning.

Nettbrettet oppdager lynraskt nøyaktig hvilken rute i nettet som mistet litt strøm.

Dermed vet datamaskinen nøyaktig hvor du tegnet, og maler en fargestripe på skjermen.

> **Hansketest:** Prøv å trykke på skjermen med en tykk ullvante; hvorfor reagerer ikke glasset før du tar av vanten?`
    },
    tr: {
      title: 'Dokunmatik Ekran Parmağımızı Nasıl Hisseder?',
      description: 'Pürüzsüz cama parmağınla dokunduğunda resimler canlanır: Cam ekran parmağının yerini nereden bilir?',
      body: `Bir tabletin ya da telefonun ekranına baktığında sadece parlak bir cam görürsün.

Fakat camın hemen altında mikroskobik boyutlarda görünmez tellerden bir ızgara örülüdür.

İnsan vücudu doğal olarak minicik bir elektrik yükü taşır.

Parmağını cama dokundurduğun anda parmak ucun ekrandaki elektrikten ufacık bir miktar çeker.

Tablet, ekranın tam hangi noktasındaki elektriğin değiştiğini saliseler içinde hesaplar.

Böylece cihaz nereye dokunduğunu tam olarak anlar ve parmağının izinden renkli çizgiler çizer.

> **Eldiven Deneyi:** Ekrana kalın yün bir eldivenle dokunmayı dene; neden ancak eldiveni çıkardığında ekran tepki verir?`
    }
  },
  {
    slug: 'klokkens-tannhjul-som-tikker',
    category: 'teknologi',
    ageRange: '4-6',
    no: {
      title: 'Tannhjulene som griper inn i hverandre og teller tid',
      description: 'Inne i en gammeldags veggklokke snurrer hjul med spisse tenner; hvordan hjelper de viserne å gå like fort?',
      body: `Hør nøye etter i et stille rom; kanskje hører du en gammel veggklokke som sier tik-takk.

Inne bak urskiven skjuler det seg mange små hjul av skinnende messing.

Hvert hjul har en rekke med små, jevne tenner langs ytterkanten.

Tennene på et stort hjul griper tak i tennene på et mindre hjul ved siden av.

Når det store hjulet dreier sakte én runde, tvinges det lille hjulet til å snurre mange ganger rundt.

Slik styrer tannhjulene den lange minuttviseren og den korte timeviseren med matematisk nøyaktighet.

> **Tannhjulslek:** Knyt fingrene på begge hender sammen som tannhjul; vri den ene hånden og kjenn hvordan den andre følger etter.`
    },
    tr: {
      title: 'Birbirini Döndüren Dişli Çarklar ve Zaman',
      description: 'Eski bir saatin içinde tıkır tıkır dönen pirinç çarklar: Akrep ve yelkovan nasıl hiç şaşmadan ilerler?',
      body: `Sessiz bir odada durup dikkatle dinlersen duvardaki saatin tık-tık seslerini duyabilirsin.

Kadranın arkasında sarı pirinçten yapılmış çok sayıda yuvarlak çark gizlidir.

Her çarkın kenarında düzenli minik dişler sıralanmıştır.

Büyük bir çarkın dişleri yanındaki küçük çarkın dişlerine tam oturur.

Büyük çark yavaşça bir tur döndüğünde yanındaki küçük çarkı hızla birkaç tur döndürür.

Bu dişliler sayesinde yelkovan dakikaları, akrep ise saatleri hiç şaşırmadan düzenli bir tempoyla sayar.

> **Çark Oyunu:** İki elinin parmaklarını birbirine kenetle; bir elini çevirdiğinde diğer elinin nasıl hareket ettiğini hisset.`
    }
  },
  {
    slug: 'broene-som-star-stott-over-elven',
    category: 'teknologi',
    ageRange: '4-6',
    no: {
      title: 'Hvordan klarer store broer å bære tunge biler?',
      description: 'Høyt over brusende elver og dype fjorder strekker lange hengebroer seg; hva holder veibanen oppe i luften?',
      body: `Når en vei møter en bred elv, bygger ingeniører en bro slik at biler kan kjøre tørrskodd over.

Noen broer hviler på tykke pilarer av stein som er støpt dypt ned i elvebunnen.

Andre broer er hengebroer; der henger selve veien i luften etter tykke stålkabler.

Kablene er spent over to kjempehøye tårn og forankret i fast fjell på begge sider av fjorden.

Hver gang en tung buss kjører ut på broen, fordeles vekten opp i kablene og ned i fjellet.

Trekantede fagverk av stål sørger for at broen ikke svaier for mye i kraftig høststorm.

> **Brobygger:** Bygg en bro mellom to stoler med en papplate; se hvor mange leketøysbiler broen din tåler før den bøyer seg.`
    },
    tr: {
      title: 'Nehirlerin Üzerindeki Köprüler Nasıl Ayakta Durur?',
      description: 'Geniş nehirlerin ve boğazların üzerine gerilen asma köprüler: Tonlarca ağırlıktaki araçları havada ne tutar?',
      body: `Yol geniş bir nehirle karşılaştığında mühendisler araçların sudan geçebilmesi için sağlam köprüler inşa eder.

Kimi köprüler nehir yatağına çakılmış devasa taş ayakların üzerinde durur.

Boğaz köprüleri gibi asma köprüler ise havada asılı duran çelik halatlarla taşınır.

Bu kalın halatlar göğe yükselen iki koca kulenin üzerinden geçerek karadaki sağlam kayalara kilitlenir.

Ağır bir otobüs köprüden geçerken ağırlığı bu çelik halatlar boyunca kulelere ve zemine dağıtılır.

Çelik üçgen kafesler ise köprünün şiddetli rüzgarlarda fazla sallanmasını önleyerek yolu güvenli tutar.

> **Köprü Mühendisi:** İki kutu arasına sert bir karton uzat; üzerine oyuncak arabalarını dizerek kartonun ne kadar taşıdığını gör.`
    }
  },

  // 7-9 YAŞ (8 KONU - Uçaklar, algoritma, piller, yenilenebilir enerji, denizaltı internet kabloları, robotlar, buzdolabı, maglev)
  {
    slug: 'hvordan-flyr-et-tungt-fly',
    category: 'teknologi',
    ageRange: '7-9',
    featured: true,
    no: {
      title: 'Hvordan kan et tungt stålfly sveve høyt oppe i luften?',
      description: 'Et passasjerfly veier like mye som førti elefanter; hvordan skaper vingenes krumme fasong usynlig løftekraft?',
      body: `Når du ser et passasjerfly på rullebanen, virker det utrolig at denne gigantiske stålkonstruksjonen kan lette.
      
Hemmeligheten ligger i vingenes spesielle form, kalt en aerodynamisk profil.
      
Oversiden av vingen er krummet, mens undersiden er flatere.
      
Når jetmotorene skyver flyet fremover i enorm fart, tvinges luften til å dele seg foran vingen.
      
Luften som strømmer over den krumme oversiden beveger seg raskere; dette skaper et lavere lufttrykk på oversiden.
      
Det høyere lufttrykket under vingen dytter flyet oppover i en kraft som kalles løftekraft.
      
Så lenge motorene opprettholder farten fremover, overvinner løftekraften tyngdekraften, og flyet flyter trygt på lufthavet.
      
> **Vinge-eksperiment:** Hold en tynn papirstrimmel under underleppen og blås kraftig over den; se hvordan papiret løfter seg opp i luftstrømmen.`
    },
    tr: {
      title: 'Tonlarca Ağırlıktaki Bir Uçak Havada Nasıl Süzülür?',
      description: 'Kırk fil ağırlığındaki devasa bir yolcu uçağı: Kanatların özel kavisli şekli havada görünmez bir kaldırma kuvvetini nasıl üretir?',
      body: `Havalimanındaki koca bir yolcu uçağına baktığında o devasa metal kütlesinin gökyüzüne nasıl yükseldiğine şaşırabilirsin.
      
İşin sırrı uçak kanatlarının aerodinamik adı verilen özel kavisli biçiminde gizlidir.
      
Kanadın üst yüzeyi bombeli ve kavisliyken alt yüzeyi daha düzdür.
      
Jet motorları uçağı büyük bir hızla ileri doğru ittiğinde kanat havayı ikiye yarar.
      
Kavisli üst yüzeyden geçen hava daha hızlı akar; bu da üst tarafta düşük bir hava basıncı yaratır.
      
Kanadın altındaki yüksek hava basıncı ise kanadı yukarı doğru iter; buna kaldırma kuvveti denir.
      
Motorlar uçağı ileri doğru itmeye devam ettiği sürece kaldırma kuvveti uçağın ağırlığını yener ve uçak gökyüzünde süzülür.
      
> **Kanat Deneyi:** İnce bir kağıt şeridi alt dudağının altına tut ve üstünden hızla üfle; kağıdın nasıl havalandığını izle.`
    }
  },
  {
    slug: 'hva-er-en-datakode-og-en-algoritme',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Hva er koder og algoritmer som datamaskiner forstår?',
      description: 'Datamaskiner er lynraske, men forstår ingenting uten nøyaktige oppskrifter; hvordan styrer koder spill og apper?',
      body: `En datamaskin kan regne ut millioner av gangestykker på et sekund, men den har ingen egen fantasi.
      
Uten instrukser fra et menneske er den bare en død boks av silisium, plast og metall.
      
En oppskrift på hvordan en oppgave skal løses kalles en algoritme.
      
Hvis du skal forklare en robot hvordan den pusser tennene, må du dele oppgaven i ørsmå, logiske trinn: «Ta børsten, skru av korken, klem ut krem.»
      
Koding er å oversette disse stegene til et språk datamaskinen forstår, som Python eller JavaScript.
      
Hvis du glemmer et eneste komma eller et trinn i koden, stopper programmet opp; det kalles en feil eller en bug.
      
> **Robotlek:** Gi en venn instruksjoner for å hente et glass vann; vennen får bare gjøre nøyaktig de mekaniske ordene du sier høyt.`
    },
    tr: {
      title: 'Bilgisayarların Gizli Dili: Kodlar ve Algoritmalar',
      description: 'Bilgisayarlar çok hızlıdır fakat adım adım tarifler olmadan hiçbir şey yapamazlar: Kodlar oyunları ve uygulamaları nasıl yönetir?',
      body: `Bir bilgisayar bir saniyede milyonlarca matematik işlemini çözebilir; ancak kendi başına düşünemez.
      
İnsanların yazdığı yönergeler olmasaydı bilgisayar yalnızca cam, plastik ve metalden ibaret sessiz bir kutu olarak kalırdı.
      
Bir işin adım adım nasıl yapılacağını gösteren kurallar dizisine algoritma denir.
      
Bir robota diş fırçalamayı öğretmek isteseydin adımları sırayla tarif etmen gerekirdi: “Fırçayı tut, kapağı aç, macunu sık.”
      
Kodlama, bu mantıksal adımları bilgisayarın anlayabileceği Python veya JavaScript gibi özel dillere çevirmektir.
      
Eğer kodda tek bir virgülü veya adımı atlarsan program durur; buna yazılım hatası veya bug denir.
      
> **Robot Oyunu:** Bir arkadaşını robot yap ve ona su getirmesi için adım adım kesin komutlar ver; sadece söylediğin adımları yapsın.`
    }
  },
  {
    slug: 'hvordan-fungerer-et-batteri',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Hva skjuler seg inni et lite batteri? Kjemisk energi',
      description: 'Uten ledning til veggen kan lommelykten og lekebilen kjøre rundt; hvordan forvandles kjemikalier til elektrisk strøm?',
      body: `Et lite stavbatteri ser ut som en glatt metallsylinder med et plusstegn i den ene enden og et minustegn i den andre.
      
Inni batteriet finnes to ulike kjemiske stoffer adskilt av en tynn hinne.
      
Ved den negative polen samler det seg et stort overskudd av bittesmå elektroner som vil over til den andre siden.
      
Siden de ikke kan hoppe tvers gjennom skilleveggen, venter de tålmodig på en omvei.
      
Når du kobler batteriet til en lommelykt, åpnes en vei gjennom ledningene og lyspæren.
      
Elektronene suser gjennom kretsen mot plusspolen; denne strømmen av elektroner tenner pæren og driver motoren.
      
Når alle kjemikaliene har reagert ferdig, er batteriet tomt og må lades opp igjen eller resirkuleres.
      
> **Resirkulering:** Kast aldri brukte batterier i søppelkassen; lever dem i spesialbokser så de verdifulle metallene kan brukes på nytt.`
    },
    tr: {
      title: 'Küçük Bir Pilin İçindeki Kimyasal Enerji',
      description: 'Duvara kablo takmadan el fenerini ve oyuncak arabayı çalıştıran piller: Kimyasal maddeler nasıl elektrik akımına dönüşür?',
      body: `Küçük bir kalem pilin bir ucunda artı işareti, diğer ucunda ise eksi işareti yer alır.
      
Pilin içinde ince bir zarla birbirinden ayrılmış iki farklı kimyasal madde bulunur.
      
Eksi kutupta toplanan milyonlarca minik elektron sabırsızlıkla karşı tarafa geçmek ister.
      
Aralarındaki zar doğrudan geçmelerine izin vermediği için kendilerine bir yol açılmasını beklerler.
      
Pili bir el fenerine ya da oyuncağa taktığında kablolar üzerinden kapalı bir yol oluşur.
      
Elektronlar bu yoldan hızla artı kutba doğru koşmaya başlar; bu elektron akışı lambayı yakar veya motoru döndürür.
      
Kimyasal maddeler birbirine tamamen dönüştüğünde pil biter ve yeniden şarj edilmesi ya da geri dönüştürülmesi gerekir.
      
> **Geri Dönüşüm:** Pilleri asla normal çöpe atma; özel pil kutularına bırak ki içindeki değerli metaller doğayı kirletmeden yeniden kullanılsın.`
    }
  },
  {
    slug: 'vindmoller-og-solceller-ren-kraft',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Vindmøller og solceller: Ren energi fra naturkreftene',
      description: 'Uten å brenne kull eller olje fanger høye turbiner og mørke takpaneler kraft rett fra vinden og solstrålene.',
      body: `For å drive lamper, tog og datamaskiner trenger verden enorme mengder elektrisk kraft hver time.
      
Lenge brant menneskene kull og olje, noe som skapte skadelig røyk og klimagasser i atmosfæren.
      
Moderne vindturbiner rager over hundre meter i været med tre slanke vinger av glassfiber.
      
Når vinden blåser over vingene, snurrer de rundt og driver en kjempegenerator som lager strøm av ren bevegelse.
      
På hustakene ligger solcellepaneler laget av rent silisium.
      
Når sollyset treffer silisiumet, slås elektroner løs inne i krystallene og ledes inn i ledningsnettet som strøm.
      
Disse fornybare teknologiene henter energi fra naturens evige kilder uten å forurense luften vi puster i.
      
> **Grønn fremtid:** Én eneste rotasjon fra en stor havvindturbin kan produsere nok strøm til å lade en elbil for flere mil.`
    },
    tr: {
      title: 'Rüzgar Türbinleri ve Güneş Panelleri: Doğanın Temiz Enerjisi',
      description: 'Kömür ve petrol yakmadan gökyüzünden ve rüzgardan güç toplamak: Yenilenebilir enerji teknolojileri nasıl çalışır?',
      body: `Işıkları yakmak, trenleri yürütmek ve bilgisayarları çalıştırmak için her an elektrik enerjisine ihtiyaç duyarız.
      
Eski yöntemlerde kömür ve petrol yakılarak havaya zararlı dumanlar ve sera gazları salınırdı.
      
Günümüz rüzgar türbinleri yüz metreyi aşan boylarıyla rüzgarın esişini bekler.
      
Rüzgar kanatları döndürdüğünde türbinin içindeki dev jeneratör bu hareketi anında elektriğe dönüştürür.
      
Çatılardaki güneş panelleri ise saf silisyum kristallerinden üretilir.
      
Güneş ışınları bu kristallere çarptığında elektronları harekete geçirerek doğrudan elektrik akımı yaratır.
      
Bu temiz teknolojiler doğanın tükenmeyen kaynaklarını kullanarak havayı kirletmeden gezegenimizi aydınlatır.
      
> **Temiz Güç:** Dev bir deniz üstü rüzgar türbininin tek bir tam dönüşü, bir elektrikli aracı kilometrelerce götürecek enerji üretir.`
    }
  },
  {
    slug: 'internett-kablene-pa-havets-bunn',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Internett under havet: Fiberkablene som binder kloden sammen',
      description: 'Mange tror internett bare svever trådløst i skyen; i realiteten sendes videoer og meldinger gjennom glass på havbunnen.',
      body: `Når du ser en video fra et annet kontinent, reiser signalet rundt halve kloden på et lite sekund.
      
Mange tror at all denne informasjonen sendes via satellitter i verdensrommet.
      
Over nittifem prosent av all global internettrafikk reiser gjennom undersjøiske fiberoptiske kabler.
      
Disse kablene ligger på bunnen av Atlanterhavet og Stillehavet på tusenvis av meters dyp blant sjøstjerner og hvaler.
      
Inne i kabelen ligger tynne tråder av rent glass, like tynne som et menneskehår.
      
Spesielle lasere skyter milliarder av lysglimt gjennom glasset hvert sekund; lyset reflekteres inne i kjernen i lynets hastighet.
      
Spesialskip pløyer kablene ned i sandbunnen for å beskytte dem mot ankre og hai-bitt.
      
> **Hårets tykkelse:** En enkelt glassfibertråd kan overføre hundretusenvis av filmer samtidig ved hjelp av ulike farger på laserlyset.`
    },
    tr: {
      title: 'Okyanusun Dibindeki Fiber Kablolar: Dünyayı Bağlayan Ağ',
      description: 'İnternetin sadece uydulardan geldiğini mi sanıyordun? Videolarımız okyanus tabanındaki cam tellerden ışık hızında akar.',
      body: `Başka bir kıtadaki arkadaşınla görüntülü konuştuğunda sesin ve görüntün bir saniyede dünyanın öbür ucuna ulaşır.
      
Çoğu insan bu bilgilerin sadece uzaydaki uydular aracılığıyla aktarıldığını zanneder.
      
Oysa dünya internet trafiğinin yüzde doksan beşinden fazlası deniz tabanına döşenmiş dev kablolarla taşınır.
      
Bu kablolar Atlantik ve Pasifik okyanuslarının binlerce metre derininde balinaların ve mercanların arasından geçer.
      
Kablonun içinde insan saçı inceliğinde saf cam lifler bulunur.
      
Güçlü lazerler bu cam tellerin içinden saniyede milyarlarca ışık atımı fırlatarak verileri ışık hızıyla iletir.
      
Özel gemiler bu kabloları deniz tabanındaki kumun altına gömerek gemi çapalarından korur.
      
> **Işık Hızı:** Tek bir incecik cam fiber tel, lazer ışığının farklı renkleri sayesinde aynı anda yüz binlerce filmi iletebilir.`
    }
  },
  {
    slug: 'robotene-som-hjelper-menneskene',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Robotene som utforsker vulkaner og bygger biler',
      description: 'Fra selvgående støvsugere i stuen til mekaniske armer i bilfabrikker; hva kjennetegner en ekte robot?',
      body: `I eventyr og filmer ser roboter ofte ut som metallmennesker som snakker med mekanisk stemme.
      
I den virkelige verden kan en robot se ut som en boks med hjul, en mekanisk arm eller en liten ubåt.
      
En ekte robot har tre viktige deler: sensorer for å sanse verden, en datamaskin for å tenke, og motorer for å handle.
      
I bilfabrikker sveiser digre robotarmer sammen bildeler med millimeterpresisjon uten å bli slitne.
      
På sykehus hjelper små presisjonsroboter kirurger med å operere gjennom ørsmå hull i huden.
      
Forskere sender også rullende roboter ned i aktive vulkaner og til planeten Mars der mennesker ikke kan sette foten.
      
Roboter overtar farlige og tunge oppgaver slik at mennesker kan bruke kreftene sine på trygge og kreative ting.
      
> **Sensorikk:** Robotstøvsugeren i stuen bruker usynlig infrarødt lys for å kjenne hvor trappen begynner så den ikke faller utfor.`
    },
    tr: {
      title: 'Fabrikalarda ve Yanardağlarda İnsanlara Yardım Eden Robotlar',
      description: 'Oturma odasındaki robot süpürgelerden Mars’taki kaşif araçlarına: Bir makineyi gerçek bir robot yapan nedir?',
      body: `Çizgi filmlerde robotlar çoğunlukla konuşan demir adamlara benzetilir.
      
Oysa gerçek dünyada bir robot tek bir mekanik kol, tekerlekli bir kutu ya da minik bir denizaltı şeklinde olabilir.
      
Gerçek bir robotta üç temel unsur bulunur: Dünyayı algılayan sensörler, karar veren bir bilgisayar beyni ve hareket eden motorlar.
      
Otomobil fabrikalarında dev mekanik kollar parçaları milimetrik hassasiyetle kaynak yapar ve hiç yorulmaz.
      
Hastanelerde ise hassas robotik kollar cerrahlara ameliyatlarda büyük bir titizlikle yardım eder.
      
Bilim insanları tekerlekli robotları aktif yanardağların kraterlerine ve Mars yüzeyine göndererek insanların gidemediği yerleri keşfeder.
      
Robotlar tehlikeli ve ağır işleri üstlenerek insanların daha güvenli ve yaratıcı alanlara odaklanmasını sağlar.
      
> **Sensör Gözleri:** Evdeki robot süpürgeler görünmez kızılötesi ışınlar kullanarak merdiven boşluklarını hisseder ve düşmekten kurtulur.`
    }
  },
  {
    slug: 'hvordan-fungerer-et-kjoleskap',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Hvordan kan et kjøleskap holde melken kald om sommeren?',
      description: 'Det finnes ingen isblokk inni skapet; hvordan pumper et lukket rørsystem varmen ut i kjøkkenet?',
      body: `På en brennhet sommerdag åpner du kjøleskapsdøren og henter ut en iskald kartong med melk.
      
Hvordan klarer skapet å holde seg så kaldt uten at noen legger inn snø og is?
      
Kjøleskapet lager egentlig ikke kulde; det fungerer ved å fjerne varmen fra innsiden og kaste den ut.
      
Inne i et lukket rørsystem sirkulerer en spesiell kjølevæske.
      
Når væsken strømmer gjennom fordamperen inne i skapet, fordamper den til gass og suger til seg all varme fra maten.
      
En elektrisk kompressor pumper så gassen ut til rørene på baksiden av skapet, der gassen kjøles ned og avgir varmen til rommet.
      
Kjenn på baksiden av kjøleskapet en dag; den er god og varm fordi den har hentet varmen ut fra maten din.
      
> **Fordamping:** Drypp en dråpe vann på håndbaken og blås forsiktig; kjenn hvor kald huden blir når vannet fordamper.`
    },
    tr: {
      title: 'Buzdolabı Yaz Sıcağında Yiyecekleri Nasıl Soğuk Tutar?',
      description: 'İçinde kardan buzdan eser yokken sütü buz gibi saklayan dolap: Kapalı borular sıcağı dışarı nasıl pompalar?',
      body: `Kavurucu bir yaz gününde buzdolabının kapağını açtığında yüzüne çarpan serinlik içini ferahlatır.
      
İçine hiç kar ya da buz koymadığımız halde buzdolabı yiyecekleri nasıl bu kadar soğuk tutabilir?
      
Buzdolabı aslında soğuk üretmez; dolabın içindeki ısıyı dışarı atarak içeriyi serinletir.
      
Dolabın arkasındaki boruların içinde özel bir soğutucu sıvı dolaşır.
      
Bu sıvı dolabın içindeki borulardan geçerken buharlaşır ve yiyeceklerin tüm ısısını bir sünger gibi içine çeker.
      
Bir motor bu gazı dolabın arkasındaki tellere pompalar; orada ısısını mutfağın havasına bırakarak tekrar sıvılaşır.
      
Buzdolabının arkasına elini yaklaştırırsan ılık olduğunu hissedersin; çünkü içerideki sıcağı dışarı fırlatmıştır.
      
> **Buharlaşma Hissi:** Eline bir damla su damlat ve üfle; su buharlaşırken teninin nasıl serinlediğini fark et.`
    }
  },
  {
    slug: 'maglev-tog-som-svever-pa-magneter',
    category: 'teknologi',
    ageRange: '7-9',
    no: {
      title: 'Maglev-tog: Togene som svever over skinnene uten hjul',
      description: 'I over seks hundre kilometer i timen suser toget lydløst forbi; hvordan løfter magnetisk frastøtning hele vognsettet?',
      body: `Vanlige tog har stålhjul som ruller mot stålskinner, noe som skaper støy, friksjon og vibrasjoner.
      
Maglev-tog, en forkortelse for magnetisk levitasjon, har overhodet ingen hjul når de kjører i toppfart.
      
Både undersiden av toget og selve sporet er utstyrt med kraftige elektromagneter.
      
Når like magnetiske poler møtes, frastøter de hverandre med enorm styrke og løfter toget en centimeter over sporet.
      
Fordi toget svever fritt i luften uten mekanisk kontakt, forsvinner all friksjon mot underlaget.
      
Datastyrte magnetfelter langs sporet trekker toget fremover og dytter det bakfra i over seks hundre kilometer i timen.
      
Passasjerene opplever en reise som er like jevn og stille som å fly gjennom en sky.
      
> **Svevetest:** Hold to like magnetpoler mot hverandre med hendene; kjenn den usynlige gummiputen av kraft som nekter dem å røre hverandre.`
    },
    tr: {
      title: 'Raylara Değmeden Uçan Manyetik Hızlı Trenler: Maglev',
      description: 'Saatte altı yüz kilometre hızla sessizce süzülen trenler: Manyetik itme kuvveti dev vagonları havaya nasıl kaldırır?',
      body: `Geleneksel trenlerin çelik tekerlekleri raylara sürtünerek ses çıkarır ve ilerledikçe yıpranır.
      
Manyetik havada kalma anlamına gelen Maglev trenleri ise son hızına ulaştığında tekerleklere hiç ihtiyaç duymaz.
      
Hem trenin tabanına hem de raylara çok güçlü elektromıknatıslar yerleştirilmiştir.
      
Aynı manyetik kutuplar birbirini ittiğinde vagonlar rayların bir santimetre üzerinde havaya yükselir.
      
Tren raylara hiç temas etmeden havada süzüldüğü için sürtünme tamamen ortadan kalkar.
      
Raylar boyunca sırayla değişen manyetik dalgalar treni saatte altı yüz kilometreyi aşan bir hızla ileriye doğru çeker.
      
Yolcular sarsıntısız ve adeta havada uçarcasına sessiz bir yolculuk deneyimi yaşarlar.
      
> **Manyetik Yastık:** İki mıknatısın aynı kutuplarını birbirine yaklaştır; aralarındaki görünmez itme kuvvetini ellerinle hisset.`
    }
  },

  // 10-12 YAŞ (6 KONU - Silisyum çipler, yapay zeka, kriptoloji, nükleer füzyon, nanoteknoloji, otonom araçlar)
  {
    slug: 'mikrobrikken-og-milliarder-av-transistorer',
    category: 'teknologi',
    ageRange: '10-12',
    featured: true,
    no: {
      title: 'Mikrobrikken: Silisiumflisen med milliarder av mikroskopiske brytere',
      description: 'På en flate på størrelse med en fingernegl skjuler det seg milliarder av transistorer som utfører moderne databehandling.',
      body: `Hjertet i enhver smarttelefon, spillkonsoll og romsonde er en bitteliten firkant av rent krystallinsk silisium kalt en mikroprosessor.
      
På 1940-tallet fylte de første datamaskinene hele rom og brukte tusenvis av varme, skjøre radiorør som ofte brant ut.
      
Oppfinnelsen av transistoren i 1947 revolusjonerte elektronikken: en halvlederbryter uten bevegelige deler som kan åpne og lukke for strøm.
      
Gjennom avansert fotolitografi etser ingeniører milliarder av transistorer inn på én enkelt silisiumskive ved hjelp av ekstremt ultrafiolett lys.
      
Hver transistor måler i moderne kretser bare noen få nanometer, tusenvis av ganger tynnere enn et enkelt rødt blodlegeme.
      
Ved å veksle mellom av og på milliarder av ganger i sekundet koder transistorene all verdens informasjon i binære ett-tall og nuller.
      
Uten denne mikroskopiske produksjonskunsten ville verken internett, digital medisin eller romfart vært mulig.
      
> **Nanomål:** En moderne databrikke kan romme over femti milliarder transistorer på et område som er mindre enn et frimerke.`
    },
    tr: {
      title: 'Silisyum Çipler ve Milyarlarca Transistörün Gücü',
      description: 'Tırnak büyüklüğündeki silisyum plaka üzerinde dijital dünyayı yöneten milyarlarca mikroskobik anahtar.',
      body: `Akıllı telefonların, oyun konsollarının ve uzay sondalarının kalbinde mikroişlemci adı verilen minik bir silisyum yongası yer alır.
      
1940’lı yıllarda ilk bilgisayarlar koca odaları kaplar ve sürekli bozulan akkor lambalı tüplerle çalışırdı.
      
1947 yılında transistörün icat edilmesiyle elektronik dünyası kökten değişti: Hareketli parçası olmayan bu yarı iletken cihaz elektrik akımını açıp kapatabilir.
      
Günümüzde morötesi ışıkla çalışan lazer litografi makineleri, tek bir plakanın üzerine milyarlarca transistör işler.
      
Bir transistörün boyutu artık sadece birkaç nanometredir; bu da bir kan hücresinden binlerce kat daha incedir.
      
Saniyede milyarlarca kez açılıp kapanarak çalışan bu anahtarlar, tüm dijital verileri ikili sistemdeki birler ve sıfırlar olarak işler.
      
Bu nanometrik mühendislik sanatı olmasaydı modern internet, dijital sağlık teknolojileri ve uzay araştırmaları var olamazdı.
      
> **Nanometre Ölçeği:** Bir posta pulundan daha küçük olan modern bir işlemcinin içine elli milyardan fazla transistör sığdırılabilir.`
    }
  },
  {
    slug: 'kunstig-intelligens-og-maskinlaring',
    category: 'teknologi',
    ageRange: '10-12',
    no: {
      title: 'Maskinlæring og nevrale nettverk: Hvordan lærer datamaskiner?',
      description: 'I stedet for å programmere hver regel for hånd, trenes matematiske nettverk på enorme datamengder for å finne mønstre.',
      body: `Tradisjonelle dataprogrammer følger strenge, forhåndsskrevne regler: Hvis tast A trykkes, skal handling B utføres.
      
Men hvis du vil at en datamaskin skal skille mellom et bilde av en katt og en hund, er det umulig å beskrive hver pelsfasong med faste regler.
      
Løsningen kalles maskinlæring, der forskere bygger kunstige nevrale nettverk inspirert av strukturen i menneskehjernen.
      
Nettverket fôres med millioner av merkede bilder av katter og hunder, og justerer kontinuerlig vektingen mellom sine matematiske noder.
      
Gjennom milliarder av beregninger lærer nettverket å gjenkjenne subtile mønstre: formen på ørene, avstanden mellom øynene og snutevinkelen.
      
Maskinen forstår ikke hva en katt føler eller er, men den oppnår en overmenneskelig evne til statistisk mønstergjenkjenning.
      
Denne teknologien brukes til alt fra å diagnostisere sjeldne sykdommer i røntgenbilder til å oversette mellom ulike språk.
      
> **Trening:** Kunstig intelligens tenker ikke med bevissthet; den er avansert statistikk som regner ut hvilke ord eller piksler som mest sannsynlig hører sammen.`
    },
    tr: {
      title: 'Yapay Sinir Ağları ve Makine Öğreniminin Çalışma Mantığı',
      description: 'Her kuralı elle yazmak yerine milyonlarca veriyi inceleyerek kendi kendine desenleri çözen matematiksel zeka.',
      body: `Geleneksel yazılımlar önceden belirlenmiş kurallara uyar: Eğer A tuşuna basılırsa B işlemini yap.
      
Fakat bir bilgisayarın kedi ile köpek fotoğraflarını ayırt etmesini istediğinde bunu katı kurallarla tarif etmek imkansızdır.
      
Bunun çözümü insan beynindeki nöron ağlarından ilham alan yapay sinir ağları ve makine öğrenimi modelidir.
      
Sisteme milyonlarca etiketli kedi ve köpek görseli gösterilir; ağ her denemede düğümler arasındaki matematiksel ağırlıkları günceller.
      
Milyarlarca hesaplamanın ardından sistem kulak biçimi, göz mesafesi ve burun kıvrımı gibi karmaşık desenleri tanımayı öğrenir.
      
Makine bir kedinin ne olduğunu veya ne hissettiğini bilmez; ancak istatistiksel desenleri kusursuz bir hassasiyetle yakalar.
      
Bu teknoloji tıbbi filmlerde hastalık teşhisinden diller arası anlık çeviriye kadar pek çok alanda insanlığa yardımcı olur.
      
> **Öğrenme Süreci:** Yapay zeka bir bilince sahip değildir; olasılık hesaplarıyla hangi piksellerin ya da kelimelerin yan yana geleceğini tahmin eden bir matematik harikasıdır.`
    }
  },
  {
    slug: 'kryptografi-og-sikker-kommunikasjon',
    category: 'teknologi',
    ageRange: '10-12',
    no: {
      title: 'Kryptografi: Matematikken som låser våre digitale hemmeligheter',
      description: 'Fra cæsarchifferet i antikken til offentlig nøkkel-kryptering; hvordan beskytter primtall bankkort og private meldinger?',
      body: `I antikkens Roma forskyvet Julius Cæsar bokstavene i sine hemmelige meldinger tre plasser frem i alfabetet for å lure spioner.
      
I den digitale tidsalderen sendes milliarder av passord, meldinger og bankoverføringer gjennom åpne nettverk hver time.
      
Hvis informasjonen ble sendt i klartekst, kunne hvem som helst med tilgang til kablene lese hemmelighetene dine.
      
Moderne kryptografi benytter asymmetrisk kryptering med to nøkler: en offentlig nøkkel som alle kan se, og en privat nøkkel som bare mottakeren kjenner.
      
Sikkerheten hviler på matematiske enveisfunksjoner: Det er lekende lett for en datamaskin å multiplisere to gigantiske primtall med hundrevis av sifre.
      
Men å ta det resulterende tallet og faktorisere det tilbake til de opprinnelige primtallene, ville tatt verdens kraftigste superdatamaskiner millioner av år.
      
Slik beskytter ren matematikk den personlige friheten og personvernet i en sammenkoblet verden.
      
> **Hengelås:** Tenk på den offentlige nøkkelen som en åpen hengelås hvem som helst kan klikke igjen; bare du har den unike metallnøkkelen som kan åpne den.`
    },
    tr: {
      title: 'Kriptoloji: Dijital Dünyanın Kırılmaz Matematiksel Kilitleri',
      description: 'Sezar şifrelerinden açık anahtarlı şifrelemeye: Asal sayıların devasa gücü banka hesaplarımızı ve mesajlarımızı nasıl korur?',
      body: `Eski Roma’da Jül Sezar gizli mektuplarındaki harfleri alfabede üç basamak kaydırarak düşman casuslarını yanıltırdı.
      
Günümüzün dijital dünyasında ise şifrelerimiz, banka transferlerimiz ve özel mesajlarımız açık fiber kablolardan akar.
      
Eğer bu veriler düz metin olarak gönderilseydi ağa bağlanan herkes tüm sırlarımızı kolayca okuyabilirdi.
      
Modern kriptografi iki anahtarlı asimetrik şifreleme tekniğini kullanır: Herkese açık genel anahtar ve yalnızca alıcıda duran özel anahtar.
      
Güvenliğin temeli tek yönlü matematik işlemlerine dayanır: Yüzlerce basamaklı iki dev asal sayıyı çarpmak bir bilgisayar için çok kolaydır.
      
Ancak elde edilen devasa sonucu tekrar çarpanlarına ayırmak dünyanın en güçlü süper bilgisayarlarının bile milyonlarca yılını alır.
      
Böylece soyut asal sayılar teorisi, dijital çağda insanların mahremiyetini ve güvenliğini koruyan en sağlam kalkana dönüşür.
      
> **Açık Asma Kilit:** Genel anahtarı herkesin kapatabileceği bir açık asma kilit gibi düşün; kilidi geri açacak tek anahtar ise sadece senin elindedir.`
    }
  },
  {
    slug: 'fornybar-fusjonsenergi-stjernenes-kraft-pa-jorden',
    category: 'teknologi',
    ageRange: '10-12',
    no: {
      title: 'Kjernefysisk fusjon: Drømmen om å fange stjernenes energi',
      description: 'Ved å smelte sammen hydrogenisotoper ved hundre millioner grader forsøker forskere å gjenskape solens egen energikilde.',
      body: `Dagens atomkraftverk bruker fisjon, der tunge uranatomer spaltes for å frigjøre energi, noe som etterlater langlivet radioaktivt avfall.
      
I stjernenes indre foregår det motsatte: lette hydrogenkjerner presses sammen under ekstrem gravitasjon og danner helium i kjernefysisk fusjon.
      
Fusjon frigjør enorme mengder energi uten klimagassutslipp, og drivstoffet kan hentes direkte fra vanlig sjøvann i form av deuterium.
      
Utfordringen er at hydrogenkjerner har positiv ladning og frastøter hverandre voldsomt.
      
For å overvinne denne barrieren må gassen varmes opp til over hundre millioner grader, varmere enn solens indre kjerne.
      
Ved denne temperaturen blir gassen til et glødende plasma som ikke kan berøre faste vegger uten å smelte beholderen.
      
I internasjonale forskningsreaktorer som ITER brukes enorme superledende magneter formet som en smultring for å holde plasmaet svevende i et magnetisk vakuum.
      
> **Drivstoffets kraft:** Energien i ett enkelt glass sjøvann omdannet gjennom fusjon tilsvarer energien i et helt fat med råolje.`
    },
    tr: {
      title: 'Füzyon Enerjisi: Yıldızların Gücünü Yeryüzünde Üretme Arayışı',
      description: 'Yüz milyon derecede birleşen hidrojen atomları: Güneşin kalbindeki temiz enerji kaynağını dünyada yakalama çabası.',
      body: `Günümüz nükleer santralleri ağır uranyum atomlarını parçalayarak enerji üretir; bu işlem uzun ömürlü radyoaktif atıklar bırakır.
      
Güneşin ve yıldızların merkezinde ise tam tersi bir süreç işler: Hafif hidrojen atomları birleşerek helyuma dönüşür ve devasa füzyon enerjisi açığa çıkarır.
      
Füzyon sera gazı salmaz ve yakıtı deniz suyundan elde edilen döteryum maddesinden sonsuzca sağlanabilir.
      
Ancak pozitif yüklü atom çekirdekleri birbirini çok güçlü bir biçimde iter.
      
Bu itmeyi aşmak için gazın Güneşin merkezinden bile daha sıcak olan yüz milyon dereceye kadar ısıtılması gerekir.
      
Bu sıcaklıkta madde plazma haline gelir ve değdiği hiçbir katı kap bu ısıya dayanamaz.
      
ITER gibi uluslararası deney reaktörlerinde simit biçimli dev süperiletken mıknatıslar plazmayı havada asılı tutarak hapseder.
      
> **Yakıtın Gücü:** Tek bir bardak deniz suyundan füzyonla elde edilecek enerji, koca bir varil petrolden elde edilen enerjiye eşittir.`
    }
  },
  {
    slug: 'nanoteknologi-og-atomenes-byggestener',
    category: 'teknologi',
    ageRange: '10-12',
    no: {
      title: 'Nanoteknologi: Hva skjer når vi bygger maskiner atom for atom?',
      description: 'På nanonivå slutter vanlige fysiske regler å gjelde; hvordan skaper karbonnanorør og kvantedotter fremtidens materialer?',
      body: `En nanometer er en milliarddels meter; til sammenligning vokser neglene dine med omtrent én nanometer hvert eneste sekund.
      
I tusenvis av år formet mennesker materialer ovenfra og ned: ved å hogge stein, smi jern eller veve tråder.
      
Nanoteknologi snur denne prosessen på hodet ved å bygge strukturer nedenfra og opp, atom for atom og molekyl for molekyl.
      
Når stoffer reduseres til nanostørrelse, forandrer egenskapene seg radikalt på grunn av kvantemekaniske lover.
      
Gull i nanostørrelse er for eksempel ikke gult, men skifter farge til rubinrødt eller lilla avhengig av partikkelens størrelse.
      
Karbonatomer arrangert i sekskantede sylindere kalles karbonnanorør; de er hundre ganger sterkere enn stål, men veier bare en brøkdel.
      
Medisinere utvikler nå nanopartikler som kan frakte medisiner direkte inn i syke celler uten å skade de friske naboene.
      
> **Lotus-effekten:** Nanoteknologiske overflater inspirert av lotusblomstens blader avviser vann og skitt fullstendig; væsken preller rett av.`
    },
    tr: {
      title: 'Nanoteknoloji: Atom Boyutunda Tasarlanan Geleceğin Malzemeleri',
      description: 'Metrenin milyarda birinde doğanın kuralları değişir: Karbon nanotüplerden akıllı ilaç kapsüllerine mikroskobik dünya.',
      body: `Bir nanometre metrenin milyarda biridir; tırnaklarımız her saniye yaklaşık bir nanometre uzar.
      
İnsanlık binlerce yıl boyunca eşyaları yukarıdan aşağıya işledi: Taşları yonttu, metalleri dövdü ve ağaçları kesti.
      
Nanoteknoloji ise bu süreci tersine çevirir; maddeleri en temel yapı taşlarından, yani atom atom inşa eder.
      
Maddeler nanometre boyutuna indiğinde kuantum fiziğinin etkisiyle özellikleri tamamen değişir.
      
Örneğin saf altın nanometre boyutunda sarı görünmez; tanecik boyutuna göre yakut kırmızısı veya mor bir ışıltı saçar.
      
Karbon atomlarının altıgen kafeslerle örüldüğü nanotüpler, çelikten yüz kat daha sağlam olmasına rağmen tüy kadar hafiftir.
      
Tıp dünyasında ise mikroskobik nano-kapsüller ilaçları doğrudan hasta hücrelere taşıyarak sağlıklı dokuları korur.
      
> **Lotus Etkisi:** Lotus çiçeğinin yapraklarındaki nano yapılar suyu ve kiri tamamen iter; su damlaları yaprak üzerinden hiç ıslatmadan kayıp gider.`
    }
  },
  {
    slug: 'selvkjorende-biler-og-sensornettverk',
    category: 'teknologi',
    ageRange: '10-12',
    no: {
      title: 'Selvkjørende biler: Hvordan ser kameraer og lidar veien?',
      description: 'Uten et menneske bak rattet manøvrerer autonome biler gjennom tett bytrafikk; hvordan smelter sensordata sammen til trygge valg?',
      body: `Et menneske bak rattet bruker øynene til å se veien, ørene til å høre sirener, og hjernen til å vurdere avstander.
      
En selvkjørende bil må gjenskape denne sanseevnen ved hjelp av et nettverk av ulike elektroniske sensorer.
      
Kameraer rundt hele karosseriet leser veiskilt, fotgjengerfelt og trafikklys med avansert bildeprosessering.
      
Radarsensorer sender ut radiobølger som spretter mot metallgjenstander; dette gir nøyaktig hastighet på forankjørende biler selv i tett tåke.
      
På taket roterer ofte en lidar, som skyter ut millioner av usynlige laserpulser i sekundet for å bygge et tredimensjonalt punktsky-kart over omgivelsene.
      
En kraftig datamaskin utfører sensorfusjon, der alle målingene flettes sammen til en kontinuerlig oppdatert modell av verden.
      
Avanserte algoritmer forutser andre trafikanters bevegelser sekunder frem i tid og styrer bremsing og rattutslag trygt.
      
> **Reaksjonstid:** Mens et menneske bruker omtrent ett sekund på å oppdage en fare og tråkke på bremsen, reagerer bilens datamaskin på noen få millisekunder.`
    },
    tr: {
      title: 'Otonom Araçlar: Lidar, Radar ve Kameralarla Yolu Görmek',
      description: 'Direksiyonda bir insan olmadan şehir trafiğinde güvenle ilerleyen araçlar: Sensör füzyonu yolu nasıl haritalandırır?',
      body: `Bir sürücü yola bakarken gözlerini, sirenleri duyarken kulaklarını ve mesafe hesaplarken beynini kullanır.
      
Sürücüsüz bir otonom araç ise bu insani duyuları elektronik sensör ağlarıyla taklit etmek zorundadır.
      
Gövdenin dört bir yanına yerleştirilmiş kameralar yol çizgilerini, yayaları ve trafik lambalarını anlık olarak okur.
      
Radar sensörleri radyo dalgaları yayarak yoğun siste ve yağmurda bile öndeki araçların hızını ve mesafesini hatasız ölçer.
      
Aracın tavanındaki lidar cihazı ise saniyede milyonlarca görünmez lazer atımı fırlatarak etrafın üç boyutlu lazer haritasını çıkarır.
      
Merkezi bilgisayar sensör füzyonu adı verilen işlemle tüm bu verileri birleştirir ve çevrenin anlık dijital modelini kurar.
      
Yapay zeka algoritmaları yayaların ve diğer araçların hareketlerini saliseler öncesinden tahmin ederek direksiyonu ve frenleri yönetir.
      
> **Tepki Süresi:** Bir insanın tehlikeyi görüp frene basması yaklaşık bir saniye sürerken, aracın işlemcisi birkaç milisaniyede fren emrini verir.`
    }
  }
];

calistirParti('Parti 11: Teknoloji & İcatlar (teknologi)', TEKNOLOGI_HIKAYELER);
