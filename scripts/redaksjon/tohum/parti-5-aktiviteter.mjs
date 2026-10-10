import { calistirParti } from './parti-derleyici.mjs';

const AKTIVITETER_KONULARI = [
  // 4-6 YAŞ (6 KONU - Cümle sınırı: ≤12 kelime)
  {
    slug: 'fingermaling-og-arstidenes-tre',
    category: 'aktiviteter',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Moro med fingermaling: Årstidenes fargerike tre',
      description: 'Bruk fingrene til å male fargerike blader på et tre!',
      body: `Dypp tommelen i rød, gul og oransje maling.

Trykk tommelen mot arket rundt en brun trestamme.

Plutselig har du laget et nydelig høsttre!

Vask de små hendene med varmt vann og såpe.

Maling med fingrene er kjempegøy og gir masse glede.

> **Galleritips:** Heng det fine bildet ditt på kjøleskapet med en magnet!`
    },
    tr: {
      title: 'Parmak Boyasıyla Ağaç ve Mevsimler',
      description: 'Parmak uçlarını boyaya batırıp mevsimlerin renkli ağaçlarını kağıda basma sanatı!',
      body: `Başparmağını sarı, kırmızı ve turuncu boyaya hafifçe batır.

Kağıda çizdiğin kahverengi gövdenin etrafına parmağınla yapraklar bas.

Bir anda rengarenk harika bir sonbahar ağacın hazır olur!

Ellerini ılık su ve sabunla güzelce yıka.

Parmak boyası yapmak hem çok eğlenceli hem de renklidir.

> **Minik sergi:** Yaptığın bu güzel resmi buzdolabının kapağına bir mıknatısla as!`
    }
  },
  {
    slug: 'sot-ugle-av-dorull',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Lag en søt liten ugle av dorull og papir',
      description: 'Brett toppen ned og lim på to store ugleøyne!',
      body: `Finn en tom papprull fra en dorull.

Trykk toppen forsiktig ned for å lage to spisse ugleører.

Klipp ut to store, runde øyne av hvitt papir.

Tegn svarte prikker inni øynene og lim dem på uglen.

Nå har du en klok og søt nattugle!

> **Uglevenn:** Hvilket morsomt navn vil du gi til den nye uglen din?`
    },
    tr: {
      title: 'Rulodan Sevimli Baykuş Yapımı',
      description: 'Tuvalet kağıdı rulosunu büküp kocaman gözler yapıştırarak sevimli bir baykuş yap!',
      body: `Karton bir tuvalet kağıdı rulosunu eline al.

Üst kısmını parmaklarınla içeri doğru bastırıp iki sivri kulak yap.

Beyaz kağıttan iki kocaman yuvarlak göz kes.

Gözlerin ortasına siyah noktalar çizip ruloya yapıştır.

İşte sevimli ve bilge küçük baykuşun hazır!

> **Baykuş dostu:** Yaptığın bu tatlı baykuşa hangi güzel ismi vermek istersin?`
    }
  },
  {
    slug: 'enkle-skulpturer-av-modelleire',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Enkle og morsomme figurer av fargerik leire',
      description: 'Rull en kule, trykk den flat og lag en snegle!',
      body: `Rull en myk klump med leire mellom hendene dine.

Lag en lang pølse og rull den sammen som en snegle.

Sett to små leirekuler på toppen som følehorn.

Du kan også lage en rund og smilende sol.

Leire former seg lett etter de flinke fingrene dine.

> **Kreativ lek:** Prøv å lage en liten gulrot til et lekekanindyr!`
    },
    tr: {
      title: 'Basit Oyun Hamuru Heykelleri',
      description: 'Avuçlarında yuvarlanan renkli hamurlarla salyangoz ve neşeli hayvanlar yapma oyunu!',
      body: `Avucunun içinde yumuşacık bir parça hamuru yuvarla.

Uzun bir şerit yapıp kıvırarak salyangoz kabuğu oluştur.

Tepesine minik hamur parçalarından iki sevimli anten tak.

Dilersen kocaman sarı bir güneş heykeli de yapabilirsin.

Oyun hamuru küçük parmaklarınla kolayca şekil alır.

> **Minik heykeltıraş:** Oyuncak tavşanın için turuncu bir havuç heykeli yap!`
    }
  },
  {
    slug: 'lett-origami-hund-og-katt',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Enkel bretting: Katt og hund med papir',
      description: 'Brett et kvadratisk papir til en søt firbent venn!',
      body: `Ta et firkantet papirark i favorittfargen din.

Brett arket diagonalt på midten til en spiss trekant.

Brett de to øverste hjørnene ned for å lage hundeører.

Tegn nese, munn og to glade øyne med en fargestift.

Hunden din vifter nesten med halen på arket!

> **Papirvenn:** Brett et papir til og lag en pusekatt med spisse ører!`
    },
    tr: {
      title: 'Kolay Origami: Kedi ve Köpek Yüzü Katlama',
      description: 'Kare bir kağıdı ikiye katlayıp kulaklarını bükerek sevimli hayvan yüzleri yap!',
      body: `Sevdiğin renkte kare bir kağıdı önüne koy.

Kağıdı çapraz katlayıp sivri bir üçgen elde et.

Üstteki iki köşeyi aşağı doğru bükerek kulaklar yap.

Boya kalemiyle burnunu, ağzını ve neşeli gözlerini çiz.

Kağıttan sevimli köpeğin sana neşeyle gülümsüyor!

> **Kağıt dostu:** Bir kağıt daha alıp kulakları yukarı bakan bir kedi katla!`
    }
  },
  {
    slug: 'moro-med-bladtrykk',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Lag vakker kunst med blader fra skogen',
      description: 'Finn fine blader ute og trykk dem på papiret med maling!',
      body: `Plukk tre fine blader fra bakken under et tre.

Mal baksiden av bladet forsiktig med grønn eller rød maling.

Legg bladet med malingen ned mot det hvite arket.

Press lett med hånden og løft bladet forsiktig opp.

Mønsteret fra bladets årer viser seg som ren magi!

> **Naturkunst:** Lag et bilde med blader i mange forskjellige farger!`
    },
    tr: {
      title: 'Doğadan Sanat: Yaprak Baskısı Yapımı',
      description: 'Ağaçların altından toplanan yaprakları boyayıp kağıda basarak doğanın desenlerini keşfet!',
      body: `Bahçedeki ağaçların altından dökülmüş üç güzel yaprak topla.

Yaprağın damarlı arka yüzünü fırçayla yeşil ya da kırmızıya boya.

Boyalı kısmı beyaz kağıdın üzerine yavaşça yapıştır.

Elinle hafifçe bastırıp yaprağı kenarından kaldır.

Yaprağın damarları kağıtta harika bir iz bırakır!

> **Doğa resmi:** Farklı boyutta yapraklar kullanarak renkli bir orman resmi yap!`
    }
  },
  {
    slug: 'regnbuearmband-med-perler',
    category: 'aktiviteter',
    ageRange: '4-6',
    no: {
      title: 'Fargerike vennskapsbånd med tråd og perler',
      description: 'Træ perler på en snor og lag et koselig bånd!',
      body: `Klipp en passe lang tråd sammen med en voksen.

Finn frem perler i alle regnbuens fine farger.

Træ én og én perle forsiktig inn på tråden.

Knytt en trygg knute i begge endene av snoren.

Nå har du et nydelig bånd til håndleddet ditt!

> **Gi bort:** Gi et hjemmelaget perlebånd i gave til en god venn!`
    },
    tr: {
      title: 'İp ve Boncukla Gökkuşağı Bilekliği',
      description: 'Rengarenk boncukları ipe dizerek arkadaşına hediye edebileceğin harika bileklikler yap!',
      body: `Büyüklerinden yardım alarak uygun uzunlukta bir ip kes.

Gökkuşağının bütün renklerindeki minik boncukları önüne diz.

Boncukları tek tek ve dikkatle ipin içinden geçir.

İpin iki ucunu açılmayacak sağlam bir düğümle bağla.

Bileğinde pırıl pırıl parıldayan gökkuşağı bilekliğin hazır!

> **Sevgi hediyesi:** Bu güzel bilekliği en sevdiğin arkadaşına hediye et!`
    }
  },

  // 7-9 YAŞ (8 KONU - Cümle sınırı: ≤18 kelime)
  {
    slug: 'lag-en-regnbue-med-et-vannglass',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Hvordan fange en regnbue med et vannglass og sollys?',
      description: 'Se hvordan hvitt lys splittes i alle regnbuens farger ved hjelp av vann og et lite speil.',
      body: `Hvitt sollys ser fargeløst ut, men det inneholder egentlig alle fargene i hele regnbuen.

Fyll et klart glass med lunkent vann og sett det i en solfylt vinduskarm.

Plasser et lite lommespeil på skrå nedi vannet slik at sollyset treffer glasset.

Hold et hvitt papirark foran speilet til en lysende regnbue danser på papiret.

Vannet og glasset fungerer som et optisk prisme som bryter og sprer lysstrålene.

Dette er nøyaktig det samme som skjer når regndråper i luften skaper regnbuer.

> **Fargejakt:** Tell alle de syv fargene du klarer å se på det hvite arket!`
    },
    tr: {
      title: 'Bir Bardak Su ve Aynayla Gökkuşağı Yakalama',
      description: 'Beyaz güneş ışığının su damlacıklarında nasıl renklere ayrıldığını gösteren odada gökkuşağı yakalama deneyi!',
      body: `Gözümüze renksiz görünen güneş ışığı aslında evrendeki bütün parlak renkleri içinde gizler.

Şeffaf bir su bardağını temiz suyla doldurup güneş alan pencerenin kenarına koy.

Bardağın içine küçük bir aynayı hafif eğik biçimde yerleştir.

Aynadan yansıyan ışığın önüne beyaz bir kağıt tutarak gökkuşağını yakala.

Su ve cam ışığı kırarak kırmızıdan mora kadar bütün renkleri sırayla ayırır.

Gökyüzündeki yağmur damlaları da işte tam olarak bu muhteşem doğa olayını gerçekleştirir.

> **Renk saymaca:** Kağıdın üzerine düşen gökkuşağındaki yedi rengi sırayla saymayı dene!`
    }
  },
  {
    slug: 'steg-for-steg-tegn-et-sott-ekorn',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Steg for steg: Lær å tegne et kjempesøtt ekorn',
      description: 'Med enkle sirkler og buer kan du tegne et sjarmerende ekorn med stor, bustete hale!',
      body: `Tegning er en morsom ferdighet som blir lettere når du deler figuren inn i enkle former.

Start med å tegne en oval sirkel for kroppen og en litt mindre sirkel for hodet.

Tegn to spisse ører med små hårtufser på toppen og et stort, mørkt øye.

Legg til to bittesmå forpoter som holder godt fast i en rund eikenøtt.

Den store hemmeligheten er halen: tegn en enorm, myk bueformet kurve som svinger oppover ryggen.

Fargelegg ekornet med varme oransje og brune farger og gi magen et lyst felt.

> **Tegnetips:** Bruk en myk blyant først slik at du kan hviske ut hjelpelinjene etterpå!`
    },
    tr: {
      title: 'Adım Adım Sevimli Sincap Çizimi',
      description: 'Daireler ve kavisli çizgiler kullanarak fındık kemiren püsküllü kuyruklu sevimli bir sincap çizme rehberi!',
      body: `Resim yapmak karmaşık görünen canlıları basit geometrik şekillere böldüğümüzde çok kolaylaşır.

Önce sincabın gövdesi için bir oval, başı içinse daha küçük yuvarlak bir daire çiz.

Başın üstüne iki sivri kulak kondur ve ortasına parlak siyah bir göz ekle.

Göğsünün hizasına lezzetli bir meşe palamudu tutan minik iki el yerleştir.

İşin en eğlenceli kısmı ise sırtından yukarı kıvrılan kocaman püsküllü bir kuyruktur.

Sincabını turuncu ve sıcak kahverengi tonlarıyla boyayarak göbeğini krem rengi bırak.

> **Ressam kuralı:** Önce kurşun kalemle hafif çizgiler çiz ki gereksiz hatları kolayca silebilesin!`
    }
  },
  {
    slug: 'origami-fly-og-glidekonkurranse',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Bygg de beste papirflyene som glir lengst!',
      description: 'Brett en klassisk glider eller en rask pil og test hvordan vingene fanger luften.',
      body: `Papirfly er en spennende kombinasjon av gammel brettekunst og ekte aerodynamikk.

Bruk et vanlig A4-ark og sørg for at alle brettene blir knivskarpe med tommelen.

En spiss pil kutter luften raskt og flyr rett frem med høy hastighet.

Et fly med brede vinger fanger derimot luftstrømmene og kan sveve sakte og elegant i sirkler.

Bøy vingespissene bittelitt oppover for å gi flyet bedre stabilitet mot turbulens i rommet.

Kast flyet med en myk og jevn bevegelse i stedet for å bruke rå kraft.

> **Konkurranse:** Test tre ulike brettinger i stuen og mål hvem som lander lengst unna!`
    },
    tr: {
      title: 'En Uzağa Uçan Origami Uçak Katlama',
      description: 'Aerodinamik kurallarıyla havada süzülen veya ok gibi fırlayan en iyi kağıt uçakları katlama sanatı!',
      body: `Kağıt uçak yapmak Japon katlama sanatı origami ile havacılık biliminin harika bir buluşmasıdır.

Düzgün bir A4 kağıdı al ve her katlama çizgisinin üzerinden tırnağınla iyice geç.

Sivri burunlu ince uçaklar havayı hızla delip ok gibi ileriye doğru fırlar.

Geniş kanatlı uçaklar ise hava akımlarını yakalayarak odada zarifçe ve uzun süre süzülür.

Kanatların ucunu hafifçe yukarı doğru kıvırmak uçağın dengesini korumasını ve takla atmamasını sağlar.

Uçağı fırlatırken sertçe atmak yerine omzundan yumuşak bir hareketle ileriye doğru süzdür.

> **Menzil yarışı:** Evde üç farklı model katlayıp koridorda en uzağa giden uçağı belirle!
`
    }
  },
  {
    slug: 'kjokkenvulkan-med-natron-og-eddik',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Morsomt kjøkkeneksperiment: Den boblende vulkanen',
      description: 'Bygg et krater av leire og se et ufarlig utbrudd av rød lava med natron og eddik!',
      body: `Kjemi kan være like spennende som et ekte naturvitenskapelig eventyr på laboratoriet.

Sett en liten plastkopp i midten av et dypt fat for å samle opp sølet.

Bygg et fjell av trolldeig eller modellkitt rundt koppen slik at det ligner en vulkan.

Hell to spiseskjeer natron, litt oppvaskmiddel og noen dråper rød konditorfarge nedi krateret.

Hell eddik forsiktig oppi og se det skummende, røde utbruddet fosse over kantene.

Eddiksyren reagerer med natronet og danner millioner av bobler med ufarlig karbondioksidgass.

> **Forskerblikk:** Hva skjer hvis du tilsetter litt mer oppvaskmiddel før du heller i eddiken?`
    },
    tr: {
      title: 'Mutfakta Güvenli Deney: Köpüren Yanardağ',
      description: 'Karbonat ve sirkenin kimyasal tepkimesiyle fışkıran kırmızı lavlar: Evde güvenli yanardağ deneyi!',
      body: `Kimya bilimi mutfaktaki malzemelerle bile inanılmaz görsel mucizeler yaratabileceğimiz eğlenceli bir dünyadır.

Geniş bir tepsinin ortasına küçük bir cam veya plastik bardak yerleştir.

Bardağın etrafını oyun hamuruyla kaplayarak heybetli bir yanardağ dağı inşa et.

Bardağın içine iki kaşık karbonat, biraz sıvı sabun ve kırmızı gıda boyası ekle.

Üzerine sirke döktüğünde bardağın ağzından kırmızı köpüklerin lav gibi taştığını göreceksin.

Sirke ile karbonat tepkimeye girerek milyonlarca karbondioksit gaz kabarcığı üretir.

> **Bilimsel gözlem:** Sıvı sabun miktarını artırdığında köpüklerin nasıl daha kabarık olduğunu incele!`
    }
  },
  {
    slug: 'lag-ditt-eget-minidrivhus',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Bygg et lite minidrivhus i en plastkopp',
      description: 'Se et lite bønnefrø spire og strekke røttene sine i et gjennomsiktig minidrivhus.',
      body: `Et frø bærer på en utrolig livskraft som bare venter på vann og varme.

Legg fuktig bomull eller litt plantejord i bunnen av et gjennomsiktig plastbeger.

Plasser et par tørkede bønner inntil plastveggen slik at du kan se dem fra utsiden.

Dekk toppen med plastfolie og stikk noen bittesmå luftehull med en tannpirker.

Sett begeret i en lun vinduskarm der det får masse dagslys og hold bomullen fuktig.

Etter få dager sprekker skallet, roten vokser nedover og grønne spirer klatrer opp mot lyset.

> **Botaniker:** Mål spiren din med en linjal hver morgen og skriv opp veksten i en notatbok!`
    },
    tr: {
      title: 'Kendi Mini Seranı Kur: Fasulye Çimlendirme',
      description: 'Şeffaf bardakta nem ve ısıyla fasulye tohumunun köklenişini adım adım izleme projesi!',
      body: `Kuru bir fasulye tohumu doğru ısı ve nemi bulduğunda uyanmayı bekleyen bir mucizedir.

Şeffaf bir bardağın dibine nemli pamuk veya biraz temiz saksı toprağı yerleştir.

İki adet kuru fasulyeyi bardağın şeffaf kenarına yakın şekilde pamukların arasına koy.

Bardağın ağzını streç filmle kapatıp üzerine kürdanla minik hava delikleri aç.

Bardağı güneş alan ılık bir pencere pervazına koy ve pamuğun kurumasını engelle.

Birkaç gün içinde tohumun çatlayıp köklerinin aşağıya, filizlerinin yukarıya uzadığını göreceksin.

> **Büyüme günlüğü:** Her sabah filizin boyunu cetvelle ölçüp bir deftere not al!`
    }
  },
  {
    slug: 'pappdukketeater-hjemme',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Lag ditt eget dukketeater av en skoeske',
      description: 'Forvandle en tom skoeske til en magisk teaterscene med baktepper og papirfigurer på grillpinner.',
      body: `En gammel skoeske kan bli til den mest fantastiske teaterscenen du kan forestille deg.

Klipp ut et stort rektangel i bunnen av esken for å lage selve sceneåpningen.

Tegn vakre bakgrunner på hvite ark med skoger, slott eller hav, og fest dem bak.

Tegn figurer på stiv papp, klipp dem ut og lim dem fast på trepinner.

Klipp smale sprekker i toppen av esken slik at du kan styre figurene ovenfra.

Skru av lyset i rommet og lys opp scenen med en lommelykt bakfra for stemning.

> **Teatersjef:** Inviter familien til premiere og spill en morsom historie du har funnet på selv!`
    },
    tr: {
      title: 'Karton Kutudan Mini Kukla Tiyatrosu Yapımı',
      description: 'Ayakkabı kutusunu sahneye dönüştürüp çubuk kuklalarla kendi oyununu sergileme sanatı!',
      body: `Eski bir ayakkabı kutusu biraz hayal gücüyle harika bir tiyatro sahnesine dönüşebilir.

Kutunun kapağını çıkarıp tabanından geniş bir pencere keserek sahne boşluğunu oluştur.

Arka fona orman, şato veya deniz resimleri çizip kutunun arkasına yapıştır.

Karakterlerini sert bir kartona çiz, kes ve altlarına ahşap dondurma çubukları yapıştır.

Kutunun üst kısmına ince yarıklar açarak kuklalarını yukarıdan sahneye indirebilirsin.

Odanın ışıklarını kapatıp sahneyi bir el feneriyle aydınlatarak gizemli bir hava yakala.

> **Sahne sırası:** Aileni salona davet et ve yazdığın eğlenceli tiyatro oyununu sergile!`
    }
  },
  {
    slug: 'lag-et-solur-med-kritt',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Lag et ekte solur med farget kritt i skolegården',
      description: 'Hvordan fortalte folk tiden før armbåndsuret fantes? Bygg et solur med solen og skygger.',
      body: `Før menneskene oppfant mekaniske klokker, leste de tiden ved å studere solens vandring på himmelen.

Finn en åpen asfaltplass som har full sol hele dagen fra morgen til ettermiddag.

Sett en rett pinne eller en kjegle i midten av en stor krittsirkel.

Hver hele time går du ut og tegner en strek der pinnens skygge faller på asfalten.

Skriv klokkeslettet ved enden av streken med farget kritt og se mønsteret vokse.

Skyggen flytter seg jevnt fordi jorden roterer rundt sin egen akse fra vest mot øst.

> **Vitenskapsmann:** Kom tilbake neste solskinnsdag og se om skyggen treffer de samme krittmerkene!`
    },
    tr: {
      title: 'Renkli Tebeşirle Güneş Saati Yapımı',
      description: 'Mekanik saatlerden önce zamanı gösteren kadim icat: Bahçede gölge ve güneşle saat yapımı!',
      body: `İnsanlar mekanik saatleri icat etmeden önce gökyüzündeki güneşin hareketlerini takip ederek zamanı okurlardı.

Günün büyük bölümünde doğrudan güneş alan düz ve taşlık bir alan seç.

Yere dik bir çubuk dik veya koni koyup etrafına tebeşirle geniş bir daire çiz.

Her saat başı dışarı çıkıp çubuğun gölgesinin düştüğü yere tebeşirle bir çizgi çek.

Çizginin ucuna saati yazarak gün boyu gölgenin nasıl hareket ettiğini takip et.

Gölgenin düzenli hareketi Dünya’mızın kendi ekseni etrafında batıdan doğuya doğru dönmesinden kaynaklanır.

> **Zaman dedektifi:** Ertesi güneşli gün dışarı çıkıp gölgenin aynı çizgilere denk gelip gelmediğini kontrol et!`
    }
  },
  {
    slug: 'bokmerke-med-torkede-blomster',
    category: 'aktiviteter',
    ageRange: '7-9',
    no: {
      title: 'Lag koselige bokmerker med tørkede blomster',
      description: 'Press fine sommerblomster i tunge bøker og lag varige bokmerker med kartong og snor.',
      body: `Pressing av blomster er en vakker tradisjon som lar deg bevare sommerens farger hele året.

Plukk små, flate blomster som forglemmegei, fioler eller kløver på en tørr og solrik dag.

Legg blomstene forsiktig mellom to ark med tørkepapir inni en tung og tykk bok.

La boken ligge i ro i en uke slik at all fuktigheten trekkes helt ut.

Lim de tørkede blomstene på en stripe med stiv kartong og dekk med gjennomsiktig bokplast.

Lag et hull øverst med en hullemaskin og knytt en fin silkesnor gjennom hullet.

> **Bokorm:** Legg det vakre bokmerket i favorittboken din så finner du alltid riktig side!`
    },
    tr: {
      title: 'Kuru Çiçeklerle Doğal Kitap Ayracı Yapımı',
      description: 'Ağır kitapların arasında kurutulan kır çiçeklerini şık ve kalıcı bir kitap ayracına dönüştürme sanatı!',
      body: `Çiçek kurutmak doğanın en zarif renklerini yıllarca saklamanın en güzel ve huzurlu yoludur.

Güneşli ve kuru bir havada menekşe, papatya veya yonca gibi küçük çiçekler topla.

Çiçekleri iki peçetenin arasına koyup kalın ve ağır bir kitabın sayfaları arasına yerleştir.

Kitabı bir hafta boyunca açmadan bekleterek çiçeğin nemini tamamen kaybetmesini sağla.

Kuruyan narin çiçekleri renkli bir karton şeridin üzerine yapıştırıp şeffaf bantla kapla.

Üst kısmına delgeçle bir delik açıp renkli bir kurdele bağlayarak ayracını tamamla.

> **Okuma keyfi:** Hazırladığın bu doğal ayracı en sevdiğin kitabın arasına koy!`
    }
  },

  // 10-12 YAŞ (6 KONU - Cümle sınırı: ≤24 kelime)
  {
    slug: 'bygg-et-enkelt-periskop',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Bygg et fungerende periskop med to små speil',
      description: 'Lær om optikk og lysets refleksjonsvinkel ved å bygge et periskop som lar deg se over høye kanter.',
      body: `Et periskop er et genialt optisk instrument som lar ubåter og oppdagere se over hindringer uten å bli oppdaget selv.

Du trenger en lang melkekartong eller en smal pappeske, to små flate speil, en saks og sterk limbånd.

Klipp to åpninger i esken på motsatte sider: én øverst foran og én nederst på baksiden.

Monter de to speilene parallelt i en nøyaktig vinkel på 45 grader i forhold til eskens rette vegger.

Lyset fra omgivelsene treffer det øverste speilet, reflekteres 90 grader nedover, og sendes ut gjennom det nederste speilet til øyet ditt.

Dette eksperimentet demonstrerer refleksjonsloven, som sier at innfallsvinkelen for lys alltid er nøyaktig like stor som utfallsvinkelen.

> **Spionoppdrag:** Bruk periskopet ditt til å kikke forsiktig over sofaryggen uten at noen i stuen oppdager deg!`
    },
    tr: {
      title: 'Evde Basit Periskop Yapımı (İki Aynayla)',
      description: 'Denizaltıların su yüzeyini gözetleme prensibi: İki ayna ve karton kutuyla optik periskop yapımı rehberi!',
      body: `Periskop, denizaltıların ve kaşiflerin görünmeden yüksek engellerin ardını görmesini sağlayan büyüleyici bir optik araçtır.

İhtiyacın olan malzemeler uzun bir meyve suyu kutusu, iki küçük düz ayna, makas ve yapışkan banttır.

Kutunun üst ön kısmına ve alt arka kısmına karşılıklı iki adet pencere aç.

Aynaları kutunun içine tam kırk beş derecelik açılarla ve birbirine paralel olacak biçimde dikkatle yerleştir.

Üstteki aynaya çarpan ışık dik bir açıyla aşağı yansır ve alttaki ayna sayesinde doğrudan gözüne ulaşır.

Bu deney optik bilimindeki yansıma kanununu kanıtlar; yani ışığın bir yüzeye geliş açısı ile yansıma açısı birbirine daima eşittir.

> **Gizli dedektif:** Periskobunu kullanarak koltuğun arkasına saklanıp odayı görünmeden gözetlemeyi dene!`
    }
  },
  {
    slug: 'perspektiv-og-skyggetegning',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Tegnetips for mestere: Lær perspektiv og skygger',
      description: 'Hvordan skaper kunstnere dybde på et flatt ark? Lær forsvinningspunktet og skyggeleggingens kunst.',
      body: `Å tegne tredimensjonale scener på et flatt papir er en teknikk som renessansekunstnerne perfeksjonerte for fem hundre år siden.

Start med å trekke en horisontlinje tvers over arket og merk av et lite forsvinningspunkt midt på linjen.

Når du tegner en vei eller togskinner, skal linjene starte brede nederst og smalne gradvis inn mot forsvinningspunktet.

Trær og lyktestolper må også tegnes gradvis mindre og tettere jo nærmere de kommer dette felles punktet i horisonten.

For å gi objektene ekte volum må du bestemme hvor lyskilden kommer fra og legge konsekvente skygger på motsatt side.

Gjennom myke overganger fra lys til mørke forvandles flate sirkler til massive kuler som ser ut til å sveve i rommet.

> **Øvelse:** Tegn en lang gate med bygninger på begge sider som alle følger hjelpelinjene mot ett enkelt forsvinningspunkt!`
    },
    tr: {
      title: 'Usta Çizim İpuçları: Perspektif ve Gölgelendirme',
      description: 'Düz bir kağıtta derinlik hissi yaratma sanatı: Kaçış noktası, ufuk çizgisi ve hacimli gölgelendirme teknikleri!',
      body: `Düz bir kağıt üzerinde üç boyutlu mekanlar ve derinlikler yaratma tekniği Rönesans ressamlarının geliştirdiği muazzam bir yöntemdir.

Önce kağıdın ortasından düz bir ufuk çizgisi çek ve çizginin tam ortasına minik bir kaçış noktası koy.

Çizdiğin yol veya tren rayları kağıdın alt kısmında geniş başlayıp ufuk noktasına doğru gittikçe daralmalıdır.

Ağaçlar ve sokak lambaları da bu noktaya yaklaştıkça kademeli olarak küçülmeli ve birbirine daha sık çizilmelidir.

Nesnelere gerçek bir hacim kazandırmak için ışığın hangi yönden geldiğini belirlemeli ve zıt tarafa gölgeler eklemelisin.

Açıktan koyuya doğru yumuşak tonlamalar yaptığında sıradan bir yuvarlak, adeta masanın üzerinde duran gerçek bir küreye dönüşür.

> **Perspektif çizimi:** İki yanında binalar sıralanan ve tek bir noktada birleşen derin bir cadde manzarası çizmeyi dene!`
    }
  },
  {
    slug: 'lag-din-egen-stop-motion-film',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Lag din egen stop-motion-film med leirfigurer',
      description: 'Pust liv i leirfigurer og leker ved å ta bilde for bilde og sette dem sammen til en ekte animasjonsfilm.',
      body: `Stop-motion er den magiske filmteknikken der ubevegelige figurer flyttes mikroskopisk lite mellom hvert eneste fotografi.

Når bildene spilles av i rask rekkefølge med ti til tolv bilder i sekundet, oppfatter hjernen dette som jevn og flytende bevegelse.

Du trenger et stødig bord, god belysning, modellkitt eller leketøysfigurer og et mobilkamera montert på et stabilt stativ.

Kameraet må stå helt urokkelig fast under hele opptaket for at ikke bakgrunnen skal hoppe urolig fra bilde til bilde.

Flytt leirfigurens arm eller bein bare noen få millimeter per bilde og ta ett nytt bilde for hvert eneste trinn.

Med tålmodighet og kreativitet kan du lage sjarmerende animasjonsfilmer med egne historier, morsomme lydeffekter og spennende dialoger.

> **Første film:** Lag en kort film på fem sekunder der en leirball ruller over bordet og forvandler seg til en blomst!`
    },
    tr: {
      title: 'Kendi Stop-Motion Animasyon Filmini Çek',
      description: 'Cansız nesnelere hayat verme sanatı: Hamur figürler ve kare kare fotoğraf çekerek kendi animasyonunu yönet!',
      body: `Stop-motion, hareketsiz nesnelerin her fotoğraf karesinde milimetrik olarak oynatılmasıyla yapılan büyüleyici bir sinema sanatıdır.

Fotoğraflar saniyede on veya on iki kare hızla art arda oynatıldığında insan beyni bunları akıcı bir hareket olarak algılar.

İhtiyacın olan şeyler sabit bir masa, parlak bir ışık, oyun hamuru figürleri ve sarsılmayan bir telefon tutacağıdır.

Kameranın çekim boyunca milim oynamaması gerekir; aksi takdirde arka plan sahnede sürekli titreyip dikkati dağıtır.

Karakterinin kolunu veya bacağını her karede birkaç milimetre kıvırıp sabırla yeni bir fotoğraf çek.

Ses efektleri ve neşeli müzikler eklediğinde kendi ürettiğin çizgi filmin yönetmeni olmanın gururunu yaşarsın.

> **İlk animasyon:** Oyun hamurundan bir topun yuvarlanıp çiçeğe dönüştüğü beş saniyelik kısa bir animasyon çek!`
    }
  },
  {
    slug: 'bygg-en-solovn-av-en-pappeske',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Bygg en enkel solovn av en pizzaboks',
      description: 'Utnytt solens fornybare energi til å smelte ostesmørbrød ved hjelp av aluminiumsfolie og drivhuseffekten.',
      body: `Solen sender enorme mengder ren energi til jorden hver dag, og en solovn demonstrerer hvordan denne varmen kan fanges effektivt.

Du kan bygge en enkel solovn ved å gjenbruke en ren pizzaboks eller en lignende flat pappeske med hengslet lokk.

Klipp en luke i lokket og kle innsiden av luken med blank aluminiumsfolie for å reflektere solstrålene ned i esken.

Dekk åpningen med gjennomsiktig plastfolie for å skape et lufttett drivhuskammer som fanger den infrarøde varmestrålingen.

Mal bunnen innvendig med matt svart maling eller legg svart papir der, fordi mørke flater absorberer varmeenergi maksimalt.

På en varm sommerdag kan temperaturen i solovnen stige til over sytti grader og smelte marshmallows eller ostesmørbrød.

> **Solbaker:** Test ovnen utendørs midt på dagen med en kjeks dekket av sjokolade og se hvor raskt den smelter!`
    },
    tr: {
      title: 'Karton Kutudan Güneş Fırını Yapımı',
      description: 'Temiz enerjinin gücü: Alüminyum folyo ve sera etkisiyle pizza kutusunu güneş fırınına dönüştürme projesi!',
      body: `Güneş her saniye Dünya’mıza muazzam miktarda ısı ve ışık enerjisi gönderir; güneş fırını bu gücü doğrudan yakalamayı öğretir.

Temiz bir pizza kutusu veya kapaklı karton bir kutu bu fen projesi için mükemmel bir fırın gövdesidir.

Kapağın üzerinde üç kenarı kesilmiş bir pencere aç ve kapağın içini parlak alüminyum folyoyla kapla.

Açılan boşluğu şeffaf streç filmle hava almayacak şekilde örterek içeride güçlü bir sera etkisi odası yarat.

Kutunun tabanını siyah kağıtla kapla; çünkü koyu renkler güneş ışınlarını yansıtmak yerine içine çekip ısıya dönüştürür.

Güneşli bir yaz öğlesinde bu mini fırının iç sıcaklığı yetmiş dereceye kadar çıkabilir ve peynirleri eritebilir.

> **Güneş şefi:** Öğle saatinde fırının içine çikolatalı bir bisküvi koyup ne kadar sürede eridiğini gözlemle!`
    }
  },
  {
    slug: 'mandala-og-geometrisk-tegning',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Tegn beroligende mandalaer med passer og linjal',
      description: 'Oppdag matematikkens skjønnhet gjennom sirkelsymmetri, vinkler og beroligende geometriske mønstre.',
      body: `Mandala er et eldgammelt kunstnerisk symbol på helhet og harmoni som bygger på matematiske prinsipper om rotasjonssymmetri.

Start med å finne midtpunktet på arket og tegn en serie konsentriske sirkler med en passer med faste avstander.

Bruk en gradskive eller en linjal til å dele sirklene inn i like vinkler, for eksempel åtte eller tolv sektorer.

Når grunnmønsteret er klart, gjentar du kronblader, buer og geometriske figurer i hver eneste sektor rundt hele sirkelen.

Denne repeterende prosessen krever konsentrasjon og har en beroligende virkning på sinnet, nesten som aktiv meditasjon.

Fargelegg mandalaen fra sentrum og utover med harmoniske fargekombinasjoner for å fremheve den visuelle dybden i mønsteret.

> **Presisjon:** Prøv å bruke bare to komplementærfarger som blått og oransje for å skape en slående kontrast!`
    },
    tr: {
      title: 'Pergel ve Cetvelle Mandala Geometrisi Çizimi',
      description: 'Matematiğin ve simetrinin huzur veren sanatı: Dairesel açılar ve cetvelle büyüleyici mandala çizimi rehberi!',
      body: `Mandala, evrendeki dengeyi ve bütünlüğü simgeleyen, dairesel simetri kurallarına dayanan kadim bir geometrik sanat formudur.

Kağıdın tam merkezini belirleyip pergel yardımıyla iç içe geçmiş farklı çaplarda düzenli daireler çizerek başla.

Açıölçer veya cetvelle bu daireleri sekiz veya on iki eşit açısal dilime ayırarak temel ızgara yapısını kur.

Ardından her dilime aynı yaprak, yay veya üçgen motiflerini kusursuz bir simetriyle ardı ardına tekrarla.

Bu ritmik ve düzenli çizim süreci zihni sakinleştirir, odaklanmayı artırır ve derin bir huzur verir.

Merkezden dışa doğru uyumlu renklerle boyama yaptığında geometrik desenlerin nasıl derinlik kazandığını göreceksin.

> **Renk dengesi:** Mandalanda sadece mavi ve turuncu gibi zıt iki rengi kullanarak çarpıcı bir kontrast yakala!`
    }
  },
  {
    slug: 'bygg-et-lite-flaskeokosystem',
    category: 'aktiviteter',
    ageRange: '10-12',
    no: {
      title: 'Bygg ditt eget lukkede økosystem i et glass',
      description: 'Skap en selvforsynt miniatyrverden i et forseglet syltetøyglass der planter og mikrober lever i harmoni.',
      body: `Et lukket terrarium er en fascinerende modell av planeten Jorden, der alle næringsstoffer og vann resirkuleres i en lukket sirkel.

Finn et stort, rent glass med tettsittende lokk, småstein til drenering, aktivt kull, pottejord og saktevoksende mose.

Legg småstein i bunnen for å hindre rotråte, et tynt lag kull for å rense vannet, og deretter fuktig jord.

Plant små mosedotter eller bregner forsiktig i jorden med en pinsett og spray med bare noen få dråper rent vann.

Skru lokket godt igjen: plantene produserer oksygen om dagen, og kondensert vann drypper ned igjen som regn.

Hvis balansen mellom lys og fuktighet er riktig, kan et slikt økosystem overleve forseglet i flere tiår uten åpning.

> **Økolog:** Plasser glasset i lyst, men indirekte sollys, og følg med på hvordan vanndråpene danser på glassveggene!`
    },
    tr: {
      title: 'Kavanozda Kendi Kapalı Ekosistemini (Teraryum) Kur',
      description: 'Dünya’nın su döngüsünü kavanoza sığdırmak: Hiç açılmadan yıllarca yaşayan kapalı ekosistem (teraryum) yapımı!',
      body: `Kapalı bir teraryum, doğadaki su ve oksijen döngüsünün minyatür bir kavanozda nasıl kusursuz çalıştığını gösteren harika bir modeldir.

Temiz bir cam kavanoz, drenaj için çakıl taşları, aktif karbon, saksı toprağı ve yosun parçaları temin et.

Kavanozun dibine fazla suyu tutacak çakılları, suyu temizleyecek kömürü ve ardından nemli toprağı katmanlar halinde diz.

Cımbız yardımıyla nemi seven küçük yosun ve eğrelti otlarını toprağa özenle dikip birkaç damla su püskürt.

Kavanozun kapağını sıkıca kapat; bitkiler gündüz oksijen üretir, camda buharlaşan su ise yağmur gibi toprağa geri döner.

Doğru miktarda dolaylı ışık aldığında bu minik dünya kapağı hiç açılmadan yıllarca kendi kendine yaşamaya devam eder.

> **Ekosistem nöbeti:** Kavanozunu doğrudan yakıcı güneş almayan aydınlık bir yere koy ve camdaki su damlacıklarını izle!`
    }
  }
];

async function main() {
  await calistirParti('Parti 5: Etkinlik & Sanat (aktiviteter)', AKTIVITETER_KONULARI);
}

main().catch(console.error);
