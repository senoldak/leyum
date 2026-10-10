import { calistirParti } from './parti-derleyici.mjs';

const AKTIVITETER_KONULARI = [
  // 4-6 YAŞ (6 KONU - Duyusal atölye, saygın zanaat ve form keşfi; bebek dili kesinlikle yok)
  {
    slug: 'fingermaling-og-arstidenes-tre',
    category: 'aktiviteter',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Monotypi og fingermaling: Årstidenes fargeskift',
      description: 'Utforsk hvordan treets krone skifter drakt fra høst til vår med fingertrykk og fargeblanding på papir.',
      body: `Tegn en solid trestamme med dype røtter på et kraftig tegnepapir.

Dypp tommelen og fingertuppene i okergul, rustrød og dyp oransje temperamaling.

Press fingrene mot arket i tette klynger rundt grenene for å skape høstløv.

Når fargene møtes på papiret, blander de seg til nye, varme nyanser av gyllent løvverk.

Løft arket opp mot lyset og betrakt hvordan hvert fingertrykk gir treet levende struktur og dybde.

> **Ateliertips:** Bland lysegrønn og hvit maling; lag et friskt vårtre med spirende knopper.`
    },
    tr: {
      title: 'Parmak Baskısı ve Renk Karışımı: Mevsimlerin Ağacı',
      description: 'Parmak uçlarıyla boyaları karıştırarak bir ağacın yaprak dokusunu ve mevsimsel dönüşümünü kağıda aktarma atölyesi.',
      body: `Kalın bir resim kağıdının ortasına sağlam kökleri olan koyu bir ağaç gövdesi çiz.

Parmak uçlarını hardal sarısı, pas kırmızısı ve kiremit tonlarındaki boyalara hafifçe dokundur.

Dalların etrafına parmaklarını ritmik hareketlerle basarak ağacın gür yaprak dokusunu oluştur.

Islak boyalar kağıt üzerinde birbiriyle kaynaşarak sonbaharın zengin tonlarını meydana getirir.

Resmini ışığa kaldırıp incele; parmak izlerinin oluşturduğu doku ağaca doğal bir hacim kazandırır.

> **Atölye İpucu:** Palet üzerinde açık yeşil ve beyaz boyayı karıştırarak taze filizler açmış bir ilkbahar ağacı da çalışabilirsin.`
    }
  },
  {
    slug: 'sot-ugle-av-dorull',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Skulptur i papp: Skogens nattugle',
      description: 'Form en tredimensjonal uglefigur av en solid pappsylinder med enkle brettinger og grafiske mønstre.',
      body: `Ta en ren pappsylinder og trykk den øverste kanten forsiktig innover fra to sider.

Slik danner pappen to spisse fjærører som kjennetegner kattuglen i skogen.

Klipp to store, runde sirkler av hvitt papir og tegn mørke pupiller i midten.

Lim øynene høyt på sylinderen og fest et trekantet nebb av brun kartong like under.

Tegn fine bueformede linjer over uglemagen med fargestift for å illustrere fjærdrakten.

> **Utsnitt:** Plasser pappuglen på en bokhylle eller i en vinduskarm der den kan våke over rommet om kvelden.`
    },
    tr: {
      title: 'Karton Heykelcilik: Ormanın Bilge Gece Baykuşu',
      description: 'Geri dönüştürülmüş karton silindiri katlayıp biçimlendirerek üç boyutlu grafik bir baykuş heykeli oluşturma sanatı.',
      body: `Sert bir karton silindiri alıp üst kenarını iki tarafından içe doğru dikkatle bastır.

Bu basit büküm kartonun tepesinde baykuşlara özgü iki sivri kulak formu oluşturur.

Beyaz kağıttan iki geniş daire kesip ortalarına koyu renkli göz bebekleri çiz.

Gözleri silindirin üst kısmına yapıştır; hemen altına kahverengi kartondan üçgen bir gaga yerleştir.

Boya kalemiyle baykuşun gövdesine düzenli yaylar çizerek göğüs tüylerinin desenini tamamla.

> **Sergileme:** Hazırladığın baykuş heykelini bir kitap rafına koy; odanın sessiz bir bekçisi gibi dursun.`
    }
  },
  {
    slug: 'enkle-skulpturer-av-modelleire',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Form og volum: Skulpturer i naturleire',
      description: 'Utforsk leirens formbarhet gjennom kuler, ruller og spiraler; bygg geometriske dyrefigurer med hendene.',
      body: `Kna en klump med myk modellerleire mellom håndflatene til massen blir smidig og lun.

Rull en jevn pølse på underlaget; kveil den opp i en tett spiral for å lage sneglehuset.

Trill en mindre kule til sneglenes kropp og fest den forsiktig mot undersiden av sneglehuset.

Bruk en trepinne til å risse inn fine teksturer og furer i leirens overflate.

Gjennom hendenes trykk forvandles en formløs masse til en fast skulptur med tydelig balanse og volum.

> **Tørking:** La leirefiguren hvile på en treplank over natten slik at formen setter seg og herder.`
    },
    tr: {
      title: 'Form ve Hacim: Kille Üç Boyutlu Heykel Çalışması',
      description: 'Avuç içinde yuvarlanan killerle spiral ve küre formlarını birleştirerek dengeli heykeller üretme atölyesi.',
      body: `Yumuşak heykel kilini avuçlarının arasında yoğurarak kıvama getir.

Masada ileri geri yuvarlayarak uzun bir fitil oluştur; ardından bunu içe doğru sararak bir salyangoz kabuğu yap.

Daha küçük bir kil parçasını silindir şeklinde uzatarak salyangozun gövdesini oluştur ve kabukla birleştir.

Ahşap bir çubuk yardımıyla kilin yüzeyine ince çizgiler ve doğal dokular kazı.

Ellerinin uyguladığı dengeli basınç, biçimsiz bir kil parçasını üç boyutlu zarif bir heykele dönüştürür.

> **Kuruma:** Yaptığın heykeli oda sıcaklığında kurumaya bırak; kil sertleştikçe biçimini kalıcı olarak korur.`
    }
  },
  {
    slug: 'lett-origami-hund-og-katt',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Papirbretting: Geometriske dyreportretter',
      description: 'Gjennom diagonale bretter og symmetriske vinkler forvandles et kvadratisk ark til et stilrent katteansikt.',
      body: `Legg et kvadratisk ark med farget papir foran deg på bordet med spissen pekende opp.

Brett arket diagonalt fra hjørne til hjørne slik at det dannes en rettvinklet trekant.

Fold de to øverste hjørnene skrått oppover for å reise kattens spisse ører mot kanten.

Bøy den nederste spissen av trekanten en centimeter innover for å skape en flat hake.

Tegn værhår og mandelformede øyne med en fin penn for å fullføre det geometriske portrettet.

> **Origamiprinsipp:** Stryk alltid tommelfingerneglen hardt over hver brettekant; skarpe bretter gir en stødig figur.`
    },
    tr: {
      title: 'Kağıt Katlama Sanatı: Geometrik Kedi Portresi',
      description: 'Kare bir kağıdı köşegen çizgiler ve simetrik açılarla katlayarak stilize bir kedi yüzü oluşturma rehberi.',
      body: `Renkli kare bir kağıdı masanın üzerine köşelerinden biri sana bakacak şekilde yerleştir.

Kağıdı tam ortadan ikiye katlayarak düzgün bir üçgen elde et.

Üçgenin iki yan köşesini yukarı doğru açılı biçimde katlayarak kedinin dik kulaklarını oluştur.

Üçgenin alt sivri ucunu bir parmak kadar yukarı katlayıp çene hattını düzleştir.

İnce uçlu bir kalemle badem şeklinde gözler ve uzun bıyıklar çizerek portreni tamamla.

> **Katlama Kuralı:** Her katlama çizgisinin üzerinden tırnağınla iyice geç; net çizgiler origaminin kusursuz durmasını sağlar.`
    }
  },
  {
    slug: 'moro-med-bladtrykk',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Botanisk grafikk: Naturtrykk med høstløv',
      description: 'Bruk ekte blader fra eik og lønn som trykkplater for å overføre naturens mikroskopiske nerver til papir.',
      body: `Samle tørre og friske blader med tydelige bladnerver under trærne i parken eller skogen.

Legg bladet med baksiden opp; det er her nervene stikker tydeligst frem fra overflaten.

Påfør et tynt, jevnt lag med mørk gouachemaling over nervene med en flat pensel.

Legg bladet forsiktig med fargesiden ned mot et rent, hvitt tegneark.

Legg et tørkepapir over og press håndflaten bestemt mot hele flaten før du løfter bladet sakte av.

Det oppstår et krystallklart botanisk avtrykk som dokumenterer treets indre transportsystem.

> **Samling:** Trykk ulike treslag på samme ark; sammenlign hvordan eikeløvets buer skiller seg fra bjørkens spisser.`
    },
    tr: {
      title: 'Botanik Baskı Atölyesi: Yaprak Damarlarından Doğal Gravür',
      description: 'Ağaç yapraklarını doğal birer baskı kalıbı olarak kullanarak yaprak damarlarının kusursuz mimarisini kağıda aktarma.',
      body: `Parktan veya bahçeden damarları belirgin, taze dökülmüş meşe veya çınar yaprakları topla.

Yaprağı damarlı arka yüzü üste gelecek biçimde masaya ser; desenler bu yüzde daha kabarıktır.

Geniş bir fırçayla damarların üzerine ince ve eşit bir kat guaj boya sür.

Boyalı yüzeyi beyaz resim kağıdının üzerine dikkatlice yerleştir.

Üzerine temiz bir kağıt koyup avucunla eşit kuvvetle bastır; ardından yaprağı köşesinden usulca kaldır.

Kağıtta yaprağın tüm besin kanallarını gösteren son derece zarif ve net bir botanik baskı kalır.

> **Doğa Karşılaştırması:** Farklı yaprak türlerini yan yana basarak meşe ve akçaağaç yapraklarının damar desenlerini karşılaştır.`
    }
  },
  {
    slug: 'regnbuearmband-med-perler',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Trådsløyd og rytme: Armbånd med geometriske mønstre',
      description: 'Lær å tre perler i faste sekvenser for å utforske fargeteori, mønsterrepetisjon og finmotorisk presisjon.',
      body: `Klipp en vokset bomullstråd på omtrent tretti centimeter og bind en stødig knute i den ene enden.

Sorter treperler i skåler etter primærfarger og komplementærfarger på arbeidsbordet.

Træ perlene inn på snoren i et strengt gjentakende mønster: to dypblå, én lys oker, to skoggrønne.

Gjennom denne rytmen lærer øyet å gjenkjenne matematiske sekvenser og harmoniske fargeoverganger.

Når båndet når rundt håndleddet, knyttes endene sammen i en solid dobbeltknute som sikres med en dråpe trelim.

> **Mønsterlek:** Tegn mønsteret ditt på et papir med fargeblyanter før du begynner å tre perlene på snoren.`
    },
    tr: {
      title: 'İp ve Boncuk Zanaatı: Ritmik Geometrik Bileklik',
      description: 'Renk sıralaması ve tekrarlayan desenlerle boncuk dizerek ritim duygusunu ve el koordinasyonunu geliştirme çalışması.',
      body: `Yaklaşık otuz santimetre uzunluğunda pamuklu sağlam bir ip kesip ucuna açılmayacak bir düğüm at.

Ahşap boncukları masadaki küçük kaselere renklerine göre özenle ayır.

Boncukları ipe düzenli bir matematiksel örüntüyle diz: iki lacivert, bir sarı, iki orman yeşili.

Bu düzenli tekrar, gözün renk armonilerini ve geometrik ritimleri doğal olarak kavramasını sağlar.

Bileklik boyuna ulaştığında iki ucu sağlam bir çifte düğümle bağlayarak tamamla.

> **Tasarım Planı:** İpe dizmeye başlamadan önce boncuk renklerinin sırasını kağıda boyayarak kendi modelini çiz.`
    }
  },

  // 7-9 YAŞ (8 KONU - Deney, maket, aerodinamik, botanik ve görsel ilkeler)
  {
    slug: 'lag-en-regnbue-med-et-vannglass',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Optisk prisme: Fang solens fargespekter med vann og speil',
      description: 'Demonstrer hvordan hvitt sollys brytes og spres i sine syv spektralfarger ved hjelp av enkle husholdningsartikler.',
      body: `Hvitt dagslys inneholder alle synlige bølgelengder av lys, men for å skille dem fra hverandre må vi tvinge lysstrålene gjennom et brytende medium.

Fyll en dyp glasskål eller et klart vannglass halvfullt med rent vann og plasser det i en vinduskarm med direkte solinnfall.

Plasser et lite, flatt baderomsspeil på skrå nedi vannet slik at speilflaten vender opp mot de innkommende solstrålene.

Juster vinkelen til speilet reflekterer lyset ut i rommet mot en hvit vegg eller et stort ark tegnepapir.

Vannet over speilet danner et flytende prisme; lyset bremses og bøyes ulikt avhengig av bølgelengde.

På veggen avtegner det seg et skarpt regnbuespekter fra rødt med lengst bølgelengde til fiolett med kortest bølgelengde.

> **Vitenskapelig oppgave:** Hold et farget gjennomsiktig plastark foran lysstrålen; observer hvilke deler av spekteret som blokkeres.`
    },
    tr: {
      title: 'Optik Deney: Su Dolu Bardak ve Aynayla Spektrum Yakalama',
      description: 'Beyaz gün ışığının su prizmasında kırılarak yedi tayf rengine ayrılmasını evde gözlemleme rehberi.',
      body: `Gözümüze renksiz görünen gün ışığı aslında tüm görünür ışık dalga boylarının kusursuz bir bileşimidir.

Derin bir cam kabı veya geniş bir bardağı suyla doldurup doğrudan güneş alan bir pencere pervazına koy.

Küçük düz bir aynayı suyun içine yaklaşık kırk beş derecelik bir açıyla, güneşe bakacak şekilde yerleştir.

Aynadan yansıyan ışığı odadaki beyaz bir duvara veya geniş bir resim kağıdına doğru yönlendir.

Suyun oluşturduğu sıvı prizma ışığı kırar; her dalga boyu farklı bir açıyla bükülerek birbirinden ayrılır.

Yansıyan ışıkta kırmızıdan mora uzanan net bir spektrum kuşağının duvarda parıldadığını görürsün.

> **Bilimsel Soru:** Işığın önüne renkli şeffaf bir jelatin tut; spektrumun hangi renklerinin emildiğini dikkatle incele.`
    }
  },
  {
    slug: 'steg-for-steg-tegn-et-sott-ekorn',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Tegnekunst for oppdagere: Ekornets proporsjoner og anatomi',
      description: 'Lær å bygge opp en anatomisk korrekt dyretegning ved hjelp av geometriske grunnformer, skravering og tekstur.',
      body: `All klassisk tegning hviler på å observere komplekse motiver som sammensetninger av enkle geometriske volumer.

Begynn med å skissere en eggformet oval for kroppen og en mindre sirkel like over for hodet med en lys blyant.

Tegn hjelpelinjer for ryggradens kurve; ekornet sitter vanligvis krummet over bakbeina med tyngdepunktet lavt.

Legg til de kompakte baklabbene og de smidige forpotene som holdes samlet foran brystet som om de griper en kongle.

Skisser den karakteristiske S-kurven til den buskete halen, som fungerer både som ror ved hopp og som varmeteppe om vinteren.

Bruk korte, tette blyantstrøk i pelsens vekstretning for å bygge opp volum og gi halefjærene en realistisk ullen tekstur.

> **Atelierprinsipp:** Unngå å trykke hardt på blyanten i startfasen; hold linjene lette til alle proporsjoner stemmer med helheten.`
    },
    tr: {
      title: 'Çizim Atölyesi: Form, Anatomi ve Dokuyla Sincap Çizimi',
      description: 'Basit geometrik hacimler, omurga eğrileri ve tarama teknikleriyle gerçekçi bir hayvan illüstrasyonu oluşturma.',
      body: `Klasik desen çizimi, karmaşık canlı formlarını temel geometrik hacimler üzerinden inşa etme esasına dayanır.

Önce hafif bir kurşun kalemle gövde için yumurta biçiminde bir oval, baş içinse hemen üstünde daha küçük bir daire çiz.

Sincabın omurgasını gösteren hafif bir yay çek; sincaplar genellikle ağırlık merkezini arka ayaklarına vererek çömelir.

Gövdenin altına güçlü arka patileri, göğüs hizasına ise bir meşe palamudu tutan çevik ön elleri yerleştir.

Sırtından yukarı doğru kıvrılan görkemli kuyruk için geniş bir S eğrisi çiz; kuyruk sincaba dengede kalma yeteneği verir.

Kürkün uzama yönüne paralel kısa ve ritmik tarama çizgileri çekerek kuyruğa dolgun ve gerçekçi bir doku kazandır.

> **Ressam Kuralı:** İlk aşamada kalemi kağıda fazla bastırma; oranlar tamamen oturana kadar çizgilerini hafif ve silinebilir tut.`
    }
  },
  {
    slug: 'origami-fly-og-glidekonkurranse',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Aerodynamisk bretting: Konstruksjon av langdistansefly i papir',
      description: 'Test hvordan vingespenn, balanseror og vektfordeling påvirker papirflyets glideflukt og stabilitet i luften.',
      body: `Konstruksjon av papirfly er en praktisk introduksjon til grunnleggende prinsipper innen flyteknikk og strømlinjeforming.

Bruk et standard A4-ark med jevn fiberstruktur og sørg for at hver fold er symmetrisk langs arkets midtlinje.

En smal pilform med tilspissede vinger reduserer luftmotstanden og gir høy kastehastighet i en rett kulebane.

Et bredvinget glidefly fanger derimot oppadgående luftstrømmer og holder seg svevende i store, langsomme sirkler.

Bøy de bakerste vingekantene noen millimeter oppover for å skape høyderor; dette motvirker flyets tendens til å stupe nesen i bakken.

Gjennom systematiske prøvekast kan du justere vingevinklene til modellen oppnår perfekt aerodynamisk likevekt.

> **Ingeniørlogg:** Gjennomfør fem testkast med tre ulike vingemodeller; noter flytid og distanse i et enkelt måleskjema.`
    },
    tr: {
      title: 'Aerodinamik Katlama: Uzun Mesafe Kağıt Uçak Tasarımı',
      description: 'Kanat açıklığı, denge kanatçıkları ve ağırlık merkezi ilkeleriyle havada uzun süre süzülen uçaklar inşa etme rehberi.',
      body: `Kağıt uçak katlamak, havacılık mühendisliğinin aerodinamik ve akışkanlar prensiplerini doğrudan deneyimlemenin en pratik yoludur.

Düzgün lifli standart bir A4 kağıt alıp orta hat boyunca katlamaların kusursuz bir simetriye sahip olmasını sağla.

Sivri burunlu ve dar kanatlı modeller hava sürtünmesini en aza indirerek ileriye doğru ok gibi hızla fırlar.

Geniş kanatlı planör tasarımları ise odadaki hava akımlarını kanat altında toplayarak uzun süre zarifçe süzülür.

Kanatların arka uçlarını milimetrik olarak yukarı kıvırmak irtifa dümeni işlevi görür ve uçağın burun üstü çakılmasını önler.

Her deneme uçuşunda kanat açılarını ince ayarla düzelterek hava direnci ile kaldırma kuvveti arasında mükemmel bir denge yakala.

> **Mühendislik Kaydı:** Üç farklı kanat modeliyle beşer deneme uçuşu yap; süzülme süresini ve mesafesini bir tabloya not et.`
    }
  },
  {
    slug: 'kjokkenvulkan-med-natron-og-eddik',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Kjemisk geologi: Bygg en modellvulkan med syre-base-reaksjon',
      description: 'Utforsk hvordan natriumbikarbonat og eddiksyre produserer gass under trykk som etterligner et vulkanutbrudd.',
      body: `Vulkanutbrudd i naturen drives av oppløste gasser som utvider seg under enormt trykk dypt nede i magmakammeret.

Vi kan simulere dette geologiske prinsippet trygt på kjøkkenbenken ved å utnytte en syre-base-reaksjon.

Plasser en liten sylinderformet plastbeholder midt på et dypt brett og bygg et kjeglefjell av leire rundt kantene.

Fyll beholderen med to spiseskjeer natron, litt flytende oppvasksåpe og noen dråper rød farge for å simulere lava.

Når du heller vanlig husholdningseddik ned i krateret, reagerer eddiksyren umiddelbart med natriumhydrogenkarbonatet.

Reaksjonen danner store mengder karbondioksidgass som fanges i såpeskummet og fosser over kraterkanten som en rød strøm.

> **Geologifakta:** I virkelige vulkaner som Etna er det vanndamp og svovelgasser under høyt trykk som slynger lavaen til værs.`
    },
    tr: {
      title: 'Kimyasal Jeoloji: Asit-Baz Tepkimesiyle Çalışan Model Yanardağ',
      description: 'Karbonat ve sirke tepkimesiyle oluşan karbondioksit gazının magma odası basıncını nasıl taklit ettiğini inceleme deneyi.',
      body: `Doğadaki volkanik patlamalar, yer kabuğunun altındaki magma odasında sıkışan gazların yüksek basınçla genişlemesiyle meydana gelir.

Bu jeolojik olayı mutfakta asit-baz kimyasal reaksiyonu yardımıyla güvenli bir model üzerinde inceleyebiliriz.

Derin bir tepsinin ortasına küçük silindirik bir kap koyup etrafını kilden bir koni dağı şeklinde kapla.

Kabın içine iki yemek kaşığı karbonat, birkaç damla sıvı sabun ve lav rengini taklit etmek için kırmızı boya ekle.

Kraterin içine sirke döktüğün anda asetik asit ile sodyum bikarbonat molekülleri şiddetle tepkimeye girer.

Açığa çıkan karbondioksit gazı sabun köpüklerine hapsolarak genişler ve kraterin ağzından kırmızı bir lav akıntısı gibi taşar.

> **Jeoloji Bilgisi:** Gerçek yanardağlarda lavı yeryüzüne fışkırtan asıl güç, magmanın içinde çözünmüş haldeki yüksek basınçlı gazlardır.`
    }
  },
  {
    slug: 'lag-ditt-eget-minidrivhus',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Botanisk veksthuskammer: Frøspiring i lukket mikroklima',
      description: 'Konstruer et gjennomsiktig miniveksthus for å observere hvordan fuktighet, varme og oksygen vekker kimplanten.',
      body: `Et frø er en sovende botanisk kapsel som inneholder et komplett embryo og opplagsnæring for den første vekstfasen.

For å studere denne prosessen uten å forstyrre røttene, kan du bygge et veksthuskammer av et gjennomsiktig plastbeger.

Legg et lag med fuktet tørkepapir eller ren bomull langs innerveggen av begeret.

Skyv to tørkede bønnefrø forsiktig ned mellom plastveggen og bomullen slik at frøene er fullt synlige fra utsiden.

Strekk gjennomsiktig plastfilm over toppen for å holde på luftfuktigheten og stikk noen luftehull for gassutveksling.

Plasser begeret i lyst, indirekte sollys; innen få dager sprekker frøskallet, kimroten søker nedover og kimbladene strekker seg mot lyset.

> **Forskerlogg:** Bruk en millimeterlinjal daglig; tegn frøets utvikling i tre stadier: rotfeste, stengelstrekk og bladdanning.`
    },
    tr: {
      title: 'Botanik Gözlem Odası: Şeffaf Mini Serada Tohum Çimlenmesi',
      description: 'Tohumun içindeki embriyonun nem ve ısıyla uyanışını, kök ve yaprak gelişimini şeffaf haznede izleme projesi.',
      body: `Tohum, içinde eksiksiz bir bitki embriyosu ve ilk besin deposunu barındıran dayanıklı bir biyolojik kapsüldür.

Gelişim sürecini köklere zarar vermeden incelemek için şeffaf bir plastik bardaktan kontrollü bir sera odası kurabilirsin.

Bardağın iç çeperine nemli pamuk veya temiz peçete katmanları yerleştir.

İki kuru fasulye tohumunu bardağın şeffaf kenarı ile pamuk arasına, dışarıdan rahatça görünecek şekilde sıkıştır.

Bardağın ağzını nemi içeride tutacak şeffaf bir filmle kapat ve oksijen girişi için birkaç iğne deliği aç.

Düzeneği aydınlık bir pervaza yerleştir; birkaç gün içinde tohum kabuğu çatlar, ana kök aşağıya, filiz ise yukarıya uzanır.

> **Gözlem Defteri:** Her gün cetvelle ölçüm yap; tohumun kök salma, gövde uzatma ve yaprak açma evrelerini defterine çizerek belgele.`
    }
  },
  {
    slug: 'pappdukketeater-hjemme',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Scenografi og mekanikk: Bygg et miniatyrteater i papp',
      description: 'Lær grunnprinsipper innen scenearkitektur, kulisseveksling og figurmekanikk ved hjelp av en gjenbrukt skoeske.',
      body: `Teaterarkitektur handler om å skape en illusjon av en hel verden innenfor en avgrenset visuell ramme.

Skjær ut en stor rektangulær portal i bunnen av en solid skoeske for å danne scenens prosceniumsåpning.

Skjær parallelle spor i eskens overside; gjennom disse sporene kan scenearbeideren skyve kulisser og baktepper inn og ut.

Tegn karakterer på stiv kartong, klipp dem presist ut og fest dem til tynne trepinner med lim eller maskeringstape.

Figurene senkes ned gjennom toppsporene slik at dukkeføreren kan manipulere bevegelsene uten å synes for publikum.

Ved å plassere en lyskilde i skrå vinkel fra siden skapes dramatiske slagskygger som gir scenen dybde og mystikk.

> **Sceneprøve:** Mal et nattlandskap og et dagslandskap på to ulike baktepper; skift mellom dem under forestillingen for å markere tidens gang.`
    },
    tr: {
      title: 'Sahne Tasarımı ve Mekanik: Karton Kutudan Minyatür Tiyatro',
      description: 'Karton ayakkabı kutusunu sahne mimarisi, kayar dekor panelleri ve kukla mekanizmasıyla bir sahneye dönüştürme.',
      body: `Tiyatro sahne tasarımı, sınırlı bir mekan içinde derinlik ve atmosfer hissi yaratarak izleyiciye bir dünya sunma sanatıdır.

Sert bir ayakkabı kutusunun tabanından geniş bir pencere keserek sahnenin ana çerçevesini oluştur.

Kutunun tavanına boydan boya paralel yarıklar aç; bu yarıklar arka plan dekorlarının kaydırılarak değiştirilmesini sağlar.

Karakterleri kalın kartonlara çiz, kes ve alt kısımlarına ahşap çıtalar sabitle.

Kuklaları tavan yarıklarından sahneye indirerek seyirciye görünmeden karakterleri yönlendirebilirsin.

Yandan yönlendireceğin bir el feneri ışığı sahneye güçlü gölgeler düşürerek üç boyutlu bir atmosfer kazandırır.

> **Dekor Değişimi:** Biri geceyi diğeri gündüzü temsil eden iki ayrı arka fon çiz; oyun sırasında paneli kaydırarak zaman geçişini canlandır.`
    }
  },
  {
    slug: 'lag-et-solur-med-kritt',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Astronomisk tidtaking: Konstruer et nøyaktig solur i skolegården',
      description: 'Utnytt Jordens jevne rotasjon og solens skyggekast til å kalibrere et fungerende horisontalt solur.',
      body: `Før oppfinnelsen av pendelur og atomur leste menneskeheten tiden ved å observere hvordan skygger vandret over bakken.

Finn en åpen, solrik plass på asfalt eller steinheller som har fri sikt mot himmelen hele dagen.

Plasser en rett, vertikal stang, kalt en gnomon, i midten av flaten og tegn en stor krittsirkel rundt den.

Hver hele time går du ut og trekker en snorrett linje langs midten av skyggen som stangen kaster på bakken.

Noter det nøyaktige klokkeslettet ved ytterkanten av hver skyggestrek med holdbart kritt.

Skyggens vandring skyldes at Jorden roterer jevnt rundt sin egen akse fra vest mot øst med femten grader i timen.

> **Tidsavvik:** Sammenlign solurets skygge med armbåndsuret ditt noen uker senere; undersøk hvorfor soltid og standardtid kan variere litt.`
    },
    tr: {
      title: 'Güneş Saati İnşası: Gölge ve Açıyla Astronomik Zaman Ölçümü',
      description: 'Dünya’nın dönüş hızını ve güneş ışığının düşüş açısını kullanarak zeminde kusursuz bir yatay saat oluşturma.',
      body: `Mekanik ve atomik saatler geliştirilmeden önce uygarlıklar zamanı gölgelerin yerdeki düzenli hareketini izleyerek ölçerdi.

Gün boyu doğrudan güneş alan, engelsiz ve düz bir taş zemin belirle.

Zeminin tam ortasına dikey ve düz bir çubuk dikerek çevresine tebeşirle geniş bir daire çiz; bu çubuğa gnomon denir.

Her saat başında dışarı çıkıp çubuğun zemine düşürdüğü gölgenin tam merkez hattına düz bir çizgi çek.

Çizginin ucuna saati not et; gün ilerledikçe gölgenin bir kadran gibi düzenli aralıklarla ilerlediğini göreceksin.

Gölgenin bu kusursuz hareketi, gezegenimizin kendi ekseni etrafında saatte on beş derecelik sabit bir hızla dönmesinden kaynaklanır.

> **Gözlem Farkı:** Birkaç hafta sonra aynı saatte gölgenin konumunu kontrol et; mevsimsel güneş yüksekliğinin gölge boyunu nasıl etkilediğini tartış.`
    }
  },
  {
    slug: 'bokmerke-med-torkede-blomster',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Herbarium på kartong: Botaniske bokmerker med presseduk',
      description: 'Lær tradisjonell plantepressing for å bevare markblomsters morfologi og fargepigmenter i et varig bokmerke.',
      body: `Herbarieinnsamling er en vitenskapelig og kunstnerisk metode som botanikere har brukt i århundrer for å bevare planteprøver.

Plukk små blomster med slanke kronblader på en tørr formiddag etter at morgenfrosten eller duggen har fordampet.

Legg blomstene forsiktig utbredt mellom to lag porøst trekkpapir eller avispapir inni en tung bokpresse.

Plasser jevn vekt over boken og la den stå uforstyrret i to uker slik at fuktigheten trekkes langsomt ut av plantevevet.

Når planten er fullstendig tørr og papirtynn, løftes den med pinsett og monteres på en stripe stiv akvarellkartong.

Beskytt det botaniske eksemplaret med en selvklebende matt film for å hindre at oksygen og slitasje bryter ned pigmentene.

> **Artsetikett:** Skriv plantens norske og latinske artsnavn samt dato og funnsted nederst på bokmerket slik botanikere gjør.`
    },
    tr: {
      title: 'Botanik Ayracı: Preslenmiş Kır Çiçekleriyle Herbaryum Sanatı',
      description: 'Geleneksel bitki presleme teknikleriyle çiçeklerin morfolojisini ve doğal pigmentlerini kalıcı bir kitap ayracında koruma.',
      body: `Herbaryum oluşturmak, botanikçilerin yüzyıllardır bitki türlerini belgelemek için kullandığı bilimsel ve estetik bir yöntemdir.

Sabah çiği kuruduktan sonra papatya, yonca veya minik kır çiçeklerini saplarıyla birlikte özenle topla.

Çiçeklerin taç yapraklarını iki emici kurutma kağıdı arasına özenle yayarak ağır bir kitabın sayfaları arasına koy.

Kitabın üzerine ilave ağırlık koyup iki hafta boyunca hiç açmadan bekleterek bitki dokusundaki tüm nemin emilmesini sağla.

Kuru ve tüy kadar hafif hale gelen narin çiçeği cımbızla alıp kalın bir suluboya kartonunun üzerine yerleştir.

Havadaki nem ve sürtünmeden korumak için üzerini şeffaf mat bir koruyucu şeritle kapla.

> **Botanik Etiketi:** Ayracın alt kısmına çiçeğin adını, toplandığı yeri ve tarihi not ederek gerçek bir doğa arşivcisi gibi çalış.`
    }
  },

  // 10-12 YAŞ (6 KONU - İleri atölye, optik, perspektif, animasyon, termodinamik, geometri ve ekosistem)
  {
    slug: 'bygg-et-enkelt-periskop',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Geometrisk optikk: Konstruksjon av periskop med to planspeil',
      description: 'Utforsk refleksjonsloven og lysets rette forplantning ved å bygge et funksjonelt optisk observasjonsinstrument.',
      body: `Et periskop utnytter prinsippet om at lys beveger seg i rette linjer og reflekteres i forutsigbare vinkler mot glatte flater.

Finn en langstrakt, stiv pappeske eller en melkekartong med kvadratisk tverrsnitt for å danne instrumentets rør.

Skjær to observasjonsluker på motstående sider av esken: en innsynsåpning nederst og en utsynsåpning øverst på baksiden.

Monter to parallelle planspeil innvendig i en streng vinkel på nøyaktig 45 grader i forhold til eskens vertikale akse.

Lysstrålene fra omgivelsene treffer det øverste speilet, reflekteres 90 grader nedover gjennom røret, og sendes ut av det nederste speilet til øyet.

Fordi innfallsvinkelen er nøyaktig lik utfallsvinkelen, bevares hele synsfeltets geometri uten optisk forvrengning.

> **Taktisk felttest:** Bruk instrumentet til å observere over en murkant eller rundt et hjørne uten å eksponere observatørens posisjon.`
    },
    tr: {
      title: 'Geometrik Optik: İki Düzlem Aynayla Çalışan Periskop Tasarımı',
      description: 'Yansıma kanunları ve ışığın doğrusal yayılımı ilkeleriyle çalışan gerçek bir optik gözlem aracı imal etme projesi.',
      body: `Periskop, ışığın doğrusal yayılımını ve pürüzsüz yüzeylerdeki geometrik yansıma kurallarını temel alan klasik bir optik araçtır.

Kare kesitli sert ve uzun bir karton kutu temin ederek aletin ana optik gövdesini hazırla.

Gövdenin alt ön yüzüne bir bakış penceresi, üst arka yüzüne ise karşılıklı bir hedef penceresi aç.

Kutunun içine iki düzlem aynayı birbirine tam paralel ve gövde eksenine tam 45 derecelik açılarla dikkatle sabitle.

Dış ortamdan gelen ışınlar üstteki aynaya çarparak 90 derecelik dik bir açıyla gövdeden aşağı iner ve alttaki ayna aracılığıyla göze ulaşır.

Işığın yüzeye geliş açısı yansıma açısına daima eşit olduğundan, görüntüde hiçbir kırılma ya da bozulma yaşanmadan hedef net olarak izlenir.

> **Saha Denemesi:** Periskobunu kullanarak yüksek bir duvarın veya bir engelin arkasını kendini göstermeden gözetlemeyi dene.`
    }
  },
  {
    slug: 'perspektiv-og-skyggetegning',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Renessansens romillusjon: Ett-punktsperspektiv og chiaroscuro',
      description: 'Lær de matematiske lovene bak horisontlinjen, forsvinningspunktet og lyskildens projeksjon for å skape romlig dybde.',
      body: `Å skape en troverdig tredimensjonal illusjon på et todimensjonalt ark var en av renessansekunstens største vitenskapelige bragder.

Tegn en vannrett horisontlinje tvers over tegnearket for å definere betrakterens øyehøyde i rommet.

Plasser et enslig forsvinningspunkt midt på linjen; alle ortogonale linjer i arkitekturen må konvergere presist mot dette punktet.

Når du tegner en gate eller en søylerekke, må avstanden mellom objektene avta proporsjonalt etter hvert som de nærmer seg sentrum.

For å bygge opp fysisk masse benyttes chiaroscuro, teknikken der man definerer en fast lyskilde og tegner konsekvente kjernekroner og slagskygger.

Gjennom myke valørtoninger fra høylys til dyp skygge oppstår en kraftfull optisk dybde som trekker betrakterens blikk dypt inn i motivet.

> **Tegneøvelse:** Konstruer et innvendig rom med flislagt gulv der hver enkelt fliserute følger hjelpelinjene mot forsvinningspunktet.`
    },
    tr: {
      title: 'Tek Kaçışlı Perspektif ve Hacim: Rönesans Mekan Kurgusu',
      description: 'Ufuk çizgisi, kaçış noktası ve ışık gölge projeksiyonuyla iki boyutlu kağıtta matematiksel mekan derinliği yaratma.',
      body: `Düz bir yüzey üzerinde inandırıcı bir üç boyutlu derinlik kurgulamak, Rönesans ressamlarının geometri ve optik alanındaki en büyük başarısıdır.

Kağıdın üzerine göz hizasını belirleyen yatay bir ufuk çizgisi çekerek kompozisyona başla.

Çizginin üzerine tek bir kaçış noktası koy; çizdiğin sokaktaki tüm bina çatıları ve kaldırım hatları bu noktada kesişmelidir.

Kaçış noktasına yaklaştıkça binalar, pencereler ve sokak lambaları kademeli olarak küçülmeli ve aralıkları daralmalıdır.

Cisimlere kütle kazandırmak için ışığın geldiği yönü belirleyip zıt tarafa gölgeler yerleştirerek chiaroscuro tekniğini uygula.

Açıktan koyuya doğru yumuşak tonlamalar yapmak düz bir çizimi derinliği olan somut bir mimari alana dönüştürür.

> **Perspektif Çizimi:** Karoları kaçış noktasına doğru daralan bir zemin ve iki yanında pencereli binalar yükselen bir koridor tasarla.`
    }
  },
  {
    slug: 'lag-din-egen-stop-motion-film',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Kinematografisk animasjon: Produksjon av stop-motion med leire',
      description: 'Forstå prinsippet om synspersepsjon og bildehastighet ved å produsere en animert sekvens bilde for bilde.',
      body: `All film hviler på synsbedraget kjent som synsfeltets etterbilde; hjernen smelter sammen enkeltbilder som vises i rask rekkefølge til kontinuerlig bevegelse.

I tradisjonell stop-motion-animasjon kreves det vanligvis tolv unike fotografier for å skape ett enkelt sekund med flytende film.

Rigg opp en fast arbeidsflate med jevn belysning og monter kameraet på et urokkelig stativ; selv mikroskopiske kamerabevegelser ødelegger illusjonen.

Form karakterer av stabil plastilinleire over et fleksibelt ståltrådskjelett som tillater kontrollerte justeringer av leddene.

Flytt figurens armer og bein bare en millimeter eller to per eksponering, og hold en streng tidsplan for bevegelsens akselerasjon og retardasjon.

Ved å kombinere bildesekvensen med synkrone lydeffekter og bakgrunnsstøy i et redigeringsprogram, vekkes de livløse figurene til live på skjermen.

> **Fysikk i bevegelse:** Studer hvordan en hoppende leirball flates ut idet den treffer bakken og strekker seg i luften for å gi spenst i animasjonen.`
    },
    tr: {
      title: 'Stop-Motion Sinema Sanatı: Kil Figürlerle Kare Kare Animasyon',
      description: 'Gözün artık görüntü ilkesi ve kare hızı fiziğiyle cansız modellere hayat veren stop-motion film yönetmenliği.',
      body: `Sinemanın temeli gözün ağtabakasındaki görüntü kalıcılığına dayanır; saniyede art arda geçen kareler zihinde kesintisiz bir hareket olarak birleşir.

Geleneksel stop-motion animasyonda akıcı bir saniyelik sahne oluşturabilmek için en az on iki ayrı fotoğraf çekilmesi gerekir.

Sabit bir masa üzerinde ışıklandırmanı kur ve telefonunu kesinlikle sarsılmayacak sağlam bir tripoda yerleştir.

Figürlerini bükülebilir tel iskelet üzerine modellenmiş kilden yaparak eklemlerinin kontrollü biçimde poz vermesini sağla.

Her karede karakterin kolunu veya adımını sadece bir iki milimetre ilerletip sabırla yeni bir fotoğraf çek.

Kareleri montaj yazılımında birleştirip adım sesleri ve ortam gürültüleri eklediğinde kil figürün ekranda canlandığına şahit olursun.

> **Animasyon İlkesi:** Yuvarlanan bir kil topun yere çarptığında ezilmesini ve zıplarken uzamasını sağlayarak harekete organik bir elastikiyet kat.`
    }
  },
  {
    slug: 'bygg-en-solovn-av-en-pappeske',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Termisk solenergi: Konstruer en effektiv solovn med drivhuseffekt',
      description: 'Utnytt refleksjon, absorpsjon og termisk isolasjon for å fange solstråler og oppnå høye temperaturer i en resirkulert boks.',
      body: `En solovn illustrerer hvordan elektromagnetisk stråling fra solen kan konsentreres og omdannes til direkte termisk energi.

Ta en ren pappeske med hengslet lokk og kle innsiden av lokket med glatt aluminiumsfolie for å lage et parabollignende reflektorspeil.

Klipp en luke i lokket og forsegl åpningen med dobbel plastfilm; dette skaper et isolerende luftlag som slipper lys inn, men hindrer varmetap.

Mal bunnen av bakkammeret med matt, varmebestandig sort maling, ettersom mørke overflater har maksimal absorpsjonsevne for synlig lys.

Når solstrålene reflekteres inn i kammeret, absorberes de av den svarte bunnen og gjenutstråles som langbølget infrarød varme.

Plastfilmen blokkerer den infrarøde strålingen fra å unnslippe, noe som driver temperaturen i det lukkede kammeret opp mot nesten hundre grader.

> **Termisk måling:** Plasser et steketermometer inne i solovnen og loggfør temperaturøkningen hvert tiende minutt midt på dagen.`
    },
    tr: {
      title: 'Termal Güneş Fırını: Yansıma ve Sera Etkisiyle Isı Odası İnşası',
      description: 'Elektromanyetik güneş ışınımını yansıtıcı paneller ve siyah soğurucu yüzeylerle yüksek ısı enerjisine dönüştürme projesi.',
      body: `Güneş fırını, güneşten gelen radyasyon enerjisinin toplanarak doğrudan termal ısıya nasıl dönüştürülebileceğini kanıtlar.

Kapaklı temiz bir karton kutu alıp kapağının iç yüzeyini pürüzsüz alüminyum folyoyla kaplayarak geniş bir yansıtıcı ayna yap.

Kutunun ağzını çift kat şeffaf streç filmle hava sızdırmayacak biçimde kapat; bu katman ışığı içeri alır fakat ısının kaçmasını önler.

Kutunun tabanını mat siyah kağıtla kapla; siyah yüzeyler görünür ışığı neredeyse tamamen soğurarak ısıya çevirir.

Yansıtıcıdan içeri giren ışınlar tabana çarptığında uzun dalga boylu kızılötesi ısı dalgalarına dönüşür.

Şeffaf film bu kızılötesi dalgaların dışarı kaçmasını engelleyerek içerideki sera etkisini tırmandırır ve sıcaklığı seksen derecenin üzerine çıkarır.

> **Sıcaklık Grafiği:** Fırının içine bir fırın termometresi koyup güneşli bir öğle saatinde her on dakikada bir sıcaklık artışını kaydet.`
    }
  },
  {
    slug: 'mandala-og-geometrisk-tegning',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Sakral geometri og symmetri: Konstruksjon av mandala med passer',
      description: 'Utforsk euklidsk geometri, rotasjonssymmetri og gyldne proporsjoner gjennom presisjonskonstruksjon med passer og linjal.',
      body: `En mandala bygger på prinsipper om rotasjonssymmetri der geometriske elementer gjentas i faste vinkler rundt et sentralt fokalpunkt.

Plasser passerspissen nøyaktig i midten av arket og slå flere konsentriske sirkler med faste, matematiske intervaller.

Bruk en gradskive og en rett linjal til å dele sirkelbuene inn i tolv like sektorer på nøyaktig tretti grader hver.

Konstruer overlappende sirkelbuer fra skjæringspunktene for å skape det klassiske geometriske mønsteret kjent som livets blomst.

Når grunnstrukturen er etablert med sylskarpe blyantlinjer, legges harmoniske mønstre inn med rotasjonell repetisjon i hver sektor.

Denne geometriske disiplinen trener romforståelse og skaper et visuelt verk preget av streng matematisk balanse og ro.

> **Geometrisk variasjon:** Forsøk å konstruere en åttedelt mandala basert på gjentatte kvadratrotasjoner med 45 graders vinkelforskyvning.`
    },
    tr: {
      title: 'Geometrik Mandala Tasarımı: Pergel ve Cetvelle Dairesel Simetri',
      description: 'Öklid geometrisi, dairesel açılar ve radyal simetri kurallarıyla karmaşık ve dengeli mandala motifleri inşa etme.',
      body: `Mandala sanatı, geometrik formların merkezi bir odak noktası etrafında sabit açılarla tekrarlandığı radyal simetriye dayanır.

Pergelin sivri ucunu kağıdın tam merkezine sabitleyip belirli yarıçap aralıklarıyla iç içe geçmiş eşmerkezli daireler çiz.

Açıölçer ve cetvel yardımıyla daireyi her biri tam otuzar derecelik on iki eşit açısal dilime ayır.

Kesişim noktalarını merkez alarak pergel açıklığını bozmadan yaylar çiz ve kadim geometrideki yaşam çiçeği ızgarasını kur.

Bu kusursuz matematiksel iskelet üzerine her dilimde aynı geometrik yaprak ve motifleri milimetrik bir disiplinle tekrarla.

Bu çizim süreci zihinsel odaklanmayı artırırken Öklid geometrisinin harmonik oranlarını somut bir sanat eserine dönüştürür.

> **Geometrik Deneme:** Aynı merkez etrafında kırk beş derecelik açılarla döndürülmüş karelerle sekizgen bir mandala kompozisyonu geliştir.`
    }
  },
  {
    slug: 'bygg-et-lite-flaskeokosystem',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Biosfære i miniatyr: Konstruer et forseglet terrarium med lukket kretsløp',
      description: 'Forstå biogeokjemiske kretsløp ved å skape et hermetisk lukket økosystem der vann, oksygen og karbon resirkuleres.',
      body: `Jorden er et lukket materielt system der alt liv avhenger av kontinuerlig resirkulering av vann, nitrogen og karbonatomer.

Vi kan bygge en fungerende mikromodell av biosfæren i en stor glasskrukke med tettsittende gummipakning og bøylelokk.

Legg et to centimeter tykt lag med vasket pukk eller lecakuler i bunnen for å sikre uunnværlig vanndrenering mot rotråte.

Dekk singellaget med et tynt filter og et lag med aktivt kull som filtrerer bakterier og forhindrer anaerob forråtnelse.

Legg på næringsrik pottejord og plant saktevoksende mose, bregner eller dvergplanter før du fukter jorden forsiktig med regnvann.

Når krukken forsegles, driver fotosyntesen og cellulær respirasjon et selvstendig kretsløp der vanndamp kondenserer og faller som regn.

> **Økologisk likevekt:** Dersom det danner seg for mye kondens på glasset om morgenen, må krukken luftes en kort stund før endelig forsegling.`
    },
    tr: {
      title: 'Kapalı Biyosfer Modeli: Kavanozda Kendi Kendine Yeten Teraryum',
      description: 'Su, karbon ve oksijenin dışarıdan müdahale olmadan döngüye girdiği hermetik olarak mühürlü bir ekosistem kurma rehberi.',
      body: `Dünyamız kapalı bir biyosferdir; tüm canlılık suyun, oksijenin ve karbonun milyarlarca yıldır kesintisiz devridaim yapmasıyla sürer.

Bu biyolojik prensibi cam bir kavanozda tamamen mühürlü minyatür bir ekosistem inşa ederek doğrudan gözlemleyebilirsin.

Kavanozun dibine fazla suyu toplayarak bitki köklerinin çürümesini önleyecek iki santimetre kalınlığında temiz çakıl katmanı ser.

Çakılların üzerine suyu temizleyecek ve zararlı bakterileri filtreleyecek aktif karbon parçacıkları ekle.

Üzerine hafif saksı toprağı koyup neme dayanıklı yosunlar ve küçük eğrelti otları diktikten sonra toprağı birkaç damla suyla nemlendir.

Kavanozun kapağını hava almayacak şekilde kapattığında fotosentez ve solunum dengesi kurulur; camda buharlaşan su düzenli yağmur gibi toprağa döner.

> **Ekolojik Denge:** Sabahları cam duvarlarda aşırı yoğunlaşma görüyorsan kapağı kısa bir süre açıp fazla nemi uçurduktan sonra nihai olarak mühürle.`
    }
  }
];

async function main() {
  await calistirParti('Parti 5: Etkinlik & Sanat (aktiviteter)', AKTIVITETER_KONULARI);
}

main().catch(console.error);
