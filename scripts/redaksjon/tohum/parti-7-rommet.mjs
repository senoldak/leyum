import { calistirParti } from './parti-derleyici.mjs';

const ROMMET_HIKAYELER = [
  // 4-6 YAŞ (6 KONU - Duru, duyusal, gökyüzü ve uzay merakı; bebek dili kesinlikle yok)
  {
    slug: 'hvorfor-lyser-manen',
    category: 'rommet',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Hvorfor lyser månen så klart på nattehimmelen?',
      description: 'Månen har ingen egen lampe inni seg; hvordan sender den likevel sitt sølvfargede lys ned til oss?',
      body: `Når kvelden senker seg, lyser månen som en rund lykt over åskammene.

Månen brenner ikke som et bål og lager ikke sitt eget lys.

Den er en kule av grå stein og støv som kretser rundt Jorden.

Solen skinner på månen tvers over det mørke rommet; måneoverflaten fungerer som et enormt speil.

Det klare lyset vi ser fra sengen, er solstråler som spretter mot den lyse månesteinen.

> **Månekikk:** Se på månen med en liten kikkert; ser du de mørke feltene som kalles månehav?`
    },
    tr: {
      title: 'Gece Göğünde Ay Neden Işıldar?',
      description: 'Ay kendi içinde bir ışık üretmez; peki geceleri odamızı aydınlatan o gümüş ışıltı nereden gelir?',
      body: `Akşam karanlığı çöktüğünde Ay dağların ve ağaçların üzerinde gümüş bir fener gibi parıldar.

Ay bir ateş gibi yanmaz ve kendi ışığını kendisi üretmez.

O, Dünya’mızın etrafında dönen gri taşlardan ve tozlardan oluşmuş devasa bir gök cismidir.

Uzayın derinliklerinden gelen Güneş ışınları Ay’ın kayalık yüzeyine çarpar; Ay dev bir ayna gibi davranır.

Geceleri penceremizden gördüğümüz parlaklık, aslında Güneşin Ay yüzeyinden yansıyan ılık ışığıdır.

> **Ay Gözlemi:** Gökyüzündeki Ay’a dikkatle bak; yüzeyindeki koyu renkli düzlüklere antik çağda ay denizleri denirdi.`
    }
  },
  {
    slug: 'hva-er-stjerneskudd',
    category: 'rommet',
    ageRange: '4-6',
    no: {
      title: 'Hva er et glitrende stjerneskudd på himmelen?',
      description: 'En lysende stripe farer plutselig over stjernehimmelen og forsvinner; er det en ekte stjerne som faller?',
      body: `Når du sitter ute i mørket og ser opp, kan en lysstripe plutselig skyte over himmelen.

Det er ikke en ekte stjerne som løsner fra universet; stjernene står trygt på sine faste plasser.

Et stjerneskudd er et ørlite støvkorn eller en liten steinbit fra rommet.

Når steinbiten faller mot Jorden i voldsom fart, møter den luften som omgir kloden vår.

Friksjonen mot luften gjør steinen brennende varm; den gløder opp som en gnist før den forsvinner.

> **Natteønske:** Følg stjernestripen med blikket helt til den slukker; naturen viser oss sine raskeste lysglimt.`
    },
    tr: {
      title: 'Kayan Yıldızlar Gerçekte Nedir?',
      description: 'Gece gökyüzünde aniden parlayıp sönen parlak bir ışık çizgisi: Yıldızlar gerçekten gökten düşer mi?',
      body: `Karanlık bir gecede gökyüzünü izlerken aniden parlak bir ışık çizgisinin kayıp gittiğini görebilirsin.

Oysa gökyüzünden hiçbir gerçek yıldız kopup düşmez; yıldızlar uzaydaki yerlerinde sabit durur.

Kayan yıldız dediğimiz şey, uzay boşluğunda serbestçe dolaşan minik bir taş zerresi veya toz tanesidir.

Bu taş parçası büyük bir hızla Dünya’mızın atmosferine girdiğinde havayla sürtünür.

Sürtünmenin etkisiyle taş akkor haline gelir ve saniyeler içinde gökyüzünde parıldayan bir ışık çizgisi bırakır.

> **Gece Seyri:** Işık çizgisinin kaybolduğu noktaya dikkatle bak; doğanın en hızlı ışık dansına şahit oldun.`
    }
  },
  {
    slug: 'solen-var-narmeste-stjerne',
    category: 'rommet',
    ageRange: '4-6',
    no: {
      title: 'Solen: Vår aller nærmeste stjerne',
      description: 'Hvorfor er solen så mye større og varmere enn de andre stjernene vi ser om kvelden?',
      body: `Hver morgen stiger en gyllen kule opp i øst og fyller dagen med lys og varme.

Solen er en ekte stjerne, akkurat som de bittesmå lysprikkene vi ser på nattehimmelen.

De andre stjernene ser små ut fordi de er ufattelig langt borte fra oss.

Solen er vår nærmeste nabo i rommet; den er en gigantisk kule av glødende, kokhet gass.

Uten solens varme ville havene frosset til is og ingen planter eller dyr kunne leve på Jorden.

> **Solvarme:** Lukk øynene og vend ansiktet mot en solstripe i stuen; kjenn hvordan stjernen vår varmer kinnet ditt.`
    },
    tr: {
      title: 'Güneş: Bize En Yakın Sımsıcak Yıldız',
      description: 'Güneş neden geceleri gördüğümüz diğer küçük yıldızlardan çok daha büyük ve sıcaktır?',
      body: `Her sabah doğudan yükselen altın rengi küre günümüzü aydınlatır ve yeryüzünü ısıtır.

Güneş aslında gerçek bir yıldızdır; tıpkı gece gökyüzünde parıldayan diğer milyarlarca yıldız gibi.

Diğer yıldızlar bize o kadar uzaktadır ki gökyüzünde yalnızca minicik birer ışık noktası gibi görünürler.

Güneş ise uzaydaki en yakın komşumuzdur; parıldayan, devasa ve sımsıcak bir gaz küresidir.

Onun sıcaklığı ve ışığı olmasaydı denizler donar, bitkiler yeşeremez ve dünyada yaşam var olamazdı.

> **Güneş Sıcaklığı:** Gözlerini kapatıp pencereden gelen gün ışığına yüzünü dön; yıldızımızın tenini nasıl ısıttığını hisset.`
    }
  },
  {
    slug: 'saturns-vakre-ringer',
    category: 'rommet',
    ageRange: '4-6',
    no: {
      title: 'De glitrende ringene rundt planeten Saturn',
      description: 'I det ytre solsystemet svever en gigantisk gassplanet pyntet med brede, lysende sirkler. Hva består de av?',
      body: `Saturn er en av de vakreste planetene i vårt solsystem, berømt for sine skinnende ringer.

Hvis du ser på Saturn gjennom et teleskop, ser ringene ut som en stiv tallerken av gull.

Men ringene er ikke laget av fast stein; de består av utallige milliarder biter av ren is og frossent støv.

Noen isbiter er så små som snøfnugg, mens andre er store som hus.

Alle isbitene kretser sammen rundt planeten i samme retning som en uendelig elv av glitrende krystaller.

> **Teleskopundring:** Tenk å stå på en av Saturns måner; se de enorme ringene strekke seg over himmelen.`
    },
    tr: {
      title: 'Satürn Gezegeninin Buzdan Halkaları',
      description: 'Güneş sisteminin derinliklerinde etrafında göz alıcı çemberler dönen dev gezegen: Halkalar neden yapılmıştır?',
      body: `Satürn, güneş sistemimizin etrafındaki geniş halkalarıyla bilinen en büyüleyici dev gezegenidir.

Bir teleskopla baktığında Satürn’ün halkaları altın bir tabak gibi pürüzsüz görünür.

Oysa bu halkalar katı bir levha değildir; sayısız buz parçasından ve donmuş kaya tozundan oluşur.

Kimi buz tanesi kar tanesi kadar küçüktür, kimisi ise koca bir kaya büyüklüğündedir.

Tüm bu buz kütleleri gezegenin etrafında aynı yönde döner; adeta gökyüzünde süzülen parlak bir kristal nehir gibidir.

> **Uzay Hayali:** Satürn’ün uydularından birinde durup gökyüzünü boydan boya saran dev halkaları izlediğini hayal et.`
    }
  },
  {
    slug: 'den-rode-planeten-mars',
    category: 'rommet',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor lyser naboplaneten Mars så rustrød?',
      description: 'Når du finner den lille røde prikken på kveldshimmelen, ser du på en kald ørkenplanet dekket av jernstøv.',
      body: `Blant alle stjernene på himmelen kan du ofte få øye på et stødig, oransjerødt lyspunkt.

Dette er Mars, den fjerde planeten fra solen og Jordens nærmeste nabo utover i rommet.

Mars er en tørr og forblåst ørkenverden der temperaturen er langt kaldere enn i Arktis.

Den røde fargen skyldes at sanden og steinene på overflaten inneholder store mengder jern.

Når jern reagerer med gassrester, ruster overflaten; den blir rød som en gammel jernspiker.

> **Roverspor:** På Mars ruller små selvkjørende roboter rundt og borer i steinene for å undersøke planetens historie.`
    },
    tr: {
      title: 'Komşu Gezegen Mars Neden Kızıldır?',
      description: 'Gece göğünde hafifçe kızıla çalan o parlak nokta: Demir pasıyla kaplı soğuk çöl gezegeni Mars.',
      body: `Gece gökyüzündeki yıldızların arasında göz kırpmadan duran turuncu kızıl bir nokta görebilirsin.

Bu nokta, Güneşten dördüncü sırada yer alan ve Dünya’mıza komşu olan Mars gezegenidir.

Mars, kutuplardan çok daha dondurucu ve fırtınalı kuru bir çöl dünyasıdır.

Yüzeyinin kızıl görünmesinin sebebi, kumlarının ve kayalarının bol miktarda demir minerali barındırmasıdır.

Demir milyonlarca yıl boyunca oksitlenmiş, tıpkı eskiyen bir çivi gibi paslanarak kızıl bir renge bürünmüştür.

> **Kaşif Robotlar:** Mars yüzeyinde tekerlekli robotlar gezinir; kayaları delerek bu kızıl dünyanın geçmişini araştırırlar.`
    }
  },
  {
    slug: 'hva-har-astronauter-pa-seg',
    category: 'rommet',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor må astronauter bære en hvit romdrakt?',
      description: 'Ute i rommet finnes ingen luft å puste i, og det er enten brennhett eller isnende kaldt. Hvordan beskytter drakten?',
      body: `Når astronauter forlater romstasjonen for å gjøre reparasjoner på utsiden, må de kle seg i en hvit romdrakt.

Romdrakten er egentlig et komplett lite romskip formet etter menneskekroppen.

I verdensrommet finnes det ingen luft; derfor pumper drakten frisk surstoff inn i hjelmen hele tiden.

Utenfor er det enten iskald skygge eller brennhet sol; drakten er bygget av mange lag med isolerende tekstiler som holder jevn temperatur.

Den hvite fargen kaster det sterke sollyset tilbake så astronauten ikke overopphetes under arbeidet.

> **Hjelmvisir:** Visiret er belagt med tynt ekte gull; det beskytter øynene mot solens skarpe stråler.`
    },
    tr: {
      title: 'Astronotlar Uzayda Neden Beyaz Özel Giysi Giyer?',
      description: 'Uzay boşluğunda nefes alacak hava yoktur; sıcaklık ise bir anda kavurucu ya da dondurucu olabilir. Elbise nasıl korur?',
      body: `Astronotlar uzay istasyonunun dışına tamirat için çıktıklarında kalın beyaz bir uzay elbisesi giyerler.

Bu giysi aslında insan vücuduna göre tasarlanmış mini bir uzay gemisi gibidir.

Uzayda hava bulunmadığı için sırt çantasındaki tüpler kaska sürekli temiz oksijen pompalar.

Güneş altında kavurucu sıcaklık, gölgede ise dondurucu soğuk vardır; giysinin katmanları vücut ısısını dengede tutar.

Giysinin bembeyaz olması, yakıcı güneş ışınlarını geri yansıtarak astronotun serin kalmasını sağlar.

> **Altın Kask:** Astronot kaskının siperliği mikroskobik bir altın tabakayla kaplıdır; bu katman gözleri zararlı ışınlardan korur.`
    }
  },

  // 7-9 YAŞ (8 KONU - Yörüngeler, fırtınalar, kuyrukluyıldızlar, teleskoplar ve kraterler)
  {
    slug: 'manens-faser-og-tidevann',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Månens skiftende faser og havets rytmiske tidevann',
      description: 'Fra en tynn nymånesigd til en lysende fullmåne; hvordan trekker månens gravitasjon i Jordens store hav?',
      body: `Når vi observerer månen gjennom en måned, ser den ut til å forandre form fra en smal sigd til en full sirkel.

Selve månen forandrer seg aldri; det er bare vinkelen mellom solen, månen og Jorden som forskyver seg kontinuerlig.

Nymåne oppstår når månen står mellom oss og solen slik at den opplyste siden vender vekk fra Jorden.

Etter to uker har månen vandret til motsatt side av himmelen; da ser vi hele den solbelyste halvkulen som en strålende fullmåne.

Samtidig utøver månens gravitasjon en merkbar trekkraft på vannmassene i verdenshavene.

Vannet buler ut mot månen og skaper flo; når jorden roterer under denne vannbulen, opplever kystene høyvann og lavvann to ganger i døgnet.

> **Tidevannsfakta:** Forskjellen mellom flo og fjære i Fundy-bukten i Canada kan være over seksten meter, like høyt som en fireetasjers bygning.`
    },
    tr: {
      title: 'Ay’ın Evreleri ve Okyanusların Gelgit Ritmi',
      description: 'Hilalden dolunaya uzanan döngü: Ay’ın kütleçekim kuvveti denizleri ve okyanusları nasıl hareket ettirir?',
      body: `Bir ay boyunca gökyüzünü izlediğimizde Ay’ın biçimi incecik bir hilalden parlak bir dolunaya doğru değişir.

Aslında Ay’ın biçimi hiç değişmez; değişen şey Güneş, Ay ve Dünya arasındaki geometrik açıdır.

Yeniay evresinde Ay, Güneş ile Dünya’mızın arasında durur; bu yüzden aydınlanan yüzü bize görünmez.

İki hafta sonra yörüngesinin diğer tarafına geçtiğinde, güneş alan tüm yüzü bize döner ve dolunay parıldar.

Ay aynı zamanda kütleçekim kuvvetiyle yeryüzündeki devasa okyanus sularını kendine doğru çeker.

Bu çekim denizlerin kabarmasına yol açarak gelgiti oluşturur; kıyılar günde iki kez yükselip alçalan düzenli bir ritme kavuşur.

> **Gelgit Rekoru:** Kanada’daki Fundy Körfezi’nde sular her altı saatte bir tam on altı metre yükselir; bu yükseklik dört katlı bir binaya eşittir.`
    }
  },
  {
    slug: 'hvorfor-kalles-venus-morgenstjernen',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Venus: Den brennhete søsterplaneten i solsystemet',
      description: 'Selv om den kalles morgenstjernen på grunn av sin glans, er Venus en kvelende verden med ekstrem drivhuseffekt.',
      body: `Like før soloppgang eller like etter solnedgang lyser et blendende hvitt himmellegeme kraftigere enn noen annen stjerne.

Dette er planeten Venus, ofte kalt Jordens tvilling fordi den har nesten samme størrelse og masse som vår klode.

Under det skinnende skylaget skjuler det seg likevel solsystemets mest ugjestmilde helvete.

Atmosfæren består nesten utelukkende av tett karbondioksid, som fanger solvarmen i en løpsk og voldsom drivhuseffekt.

Overflatetemperaturen når over 460 varmegrader, varmt nok til å smelte bly på et øyeblikk.

I tillegg regner det etsende svovelsyre fra de gule skyene, og lufttrykket ved bakken er nitti ganger høyere enn på Jorden.

> **Rotasjonsgåte:** Venus roterer baklengs i forhold til de fleste andre planeter; her står solen opp i vest og går ned i øst.`
    },
    tr: {
      title: 'Venüs: Gökyüzünün Parlak Sabah Yıldızı ve Sıcak Dünyası',
      description: 'Göz alıcı parlaklığıyla bilinen Venüs, yoğun karbondioksit atmosferiyle neden güneş sisteminin en sıcak gezegenidir?',
      body: `Gün doğmadan hemen önce ya da akşam gün batımında gökyüzünde bir elmas gibi parıldayan güçlü bir ışık belirir.

Halk arasında sabah yıldızı denen bu gök cismi aslında yıldız değil, Dünya’mızla neredeyse aynı boyutta olan Venüs gezegenidir.

Ancak Venüs’ün bu parlak bulutlarının altında güneş sisteminin en kavurucu ortamı gizlenir.

Atmosferi neredeyse tamamen yoğun karbondioksit gazından oluşur; bu gaz içeri giren güneş ısısını hapsederek aşırı bir sera etkisi yaratır.

Yüzey sıcaklığı 460 dereceyi aşar; bu sıcaklık kurşun madenini bile anında eritecek kadar yüksektir.

Sarı bulutlardan sülfürik asit damlaları dökülür ve yüzeydeki hava basıncı Dünya’dakinin tam doksan katına ulaşır.

> **Ters Dönüş:** Venüs kendi ekseni etrafında diğer gezegenlerin tersi yönde döner; bu yüzden Venüs’te Güneş batıdan doğar ve doğudan batar.`
    }
  },
  {
    slug: 'jupiters-store-rode-flekk',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Jupiters store røde flekk: Solsystemets mektigste orkan',
      description: 'En gigantisk gasskjempe med titalls måner og en virvlende storm som har rast uavbrutt i over tre hundre år.',
      body: `Jupiter er den største planeten i vårt solsystem; den er så massiv at alle andre planeter kunne fått plass inni den til sammen.

Planeten har ingen fast overflate å lande på, men består av tykke lag med hydrogen og helium som virvler i fargerike striper.

Det mest kjente kjennetegnet er Den store røde flekk, et enormt høytrykksområde som roterer mot klokken.

Denne gigantiske stormen er bredere enn hele planeten Jorden, og vindene langs ytterkanten raser i over fire hundre kilometer i timen.

Astronomer har observert stormen kontinuerlig gjennom teleskoper siden 1600-tallet, noe som gjør den til den eldste kjente stormen i kosmos.

I bane rundt Jupiter kretser nesten hundre måner, inkludert Europa, som skjuler et helt flytende hav under sin frosne isoverflate.

> **Kosmisk beskytter:** Jupiters enorme gravitasjon fungerer som en kosmisk støvsuger som fanger opp mange asteroider før de når de indre planetene.`
    },
    tr: {
      title: 'Jüpiter’in Asırlık Fırtınası: Büyük Kırmızı Leke',
      description: 'Diğer tüm gezegenlerin toplamından büyük gaz devi Jüpiter ve yüzeyinde üç yüz yıldır dinmeyen devasa fırtına.',
      body: `Jüpiter güneş sistemimizin en büyük gezegenidir; içine diğer bütün gezegenleri sığdırabilecek kadar devasa bir kütleye sahiptir.

Katı bir kayalık yüzeyi yoktur; hidrojen ve helyum gazlarından oluşan renkli şeritler gezegenin etrafında hızla döner.

Jüpiter’in en çarpıcı özelliği, ekvatorun hemen güneyinde dönen Büyük Kırmızı Leke adındaki devasa fırtınadır.

Bu fırtına Dünya gezegeninden bile daha geniştir ve kenarlarındaki rüzgarlar saatte dört yüz kilometreyi aşan bir hızla savrulur.

Gökbilimciler bu antik fırtınayı 1600’lü yıllardan beri teleskoplarla izlemektedir; fırtına yüzlerce yıldır dinmeden dönmektedir.

Ayrıca Jüpiter’in etrafında dönen uydulardan Europa, kalın buz kabuğunun altında sıvı bir okyanus saklamaktadır.

> **Kozmik Kalkan:** Jüpiter güçlü kütleçekimi sayesinde başıboş asteroitleri kendine çekerek Dünya’mızı olası çarpmalardan koruyan bir kalkan görevi görür.`
    }
  },
  {
    slug: 'kometenes-hale-av-is-og-stov',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Kometenes hale: Kosmiske isfjell på langreise',
      description: 'Fra det ytterste mørket i Oorts sky suser kometene inn mot solen og folder ut sine millioner av kilometer lange haler.',
      body: `Kometer beskrives ofte av astronomer som skitne snøballer som har overlevd helt fra solsystemets opprinnelse for fire milliarder år siden.

Kjernen består av frossent vann, metanis, karbondioksid og mørkt steinstøv, og måler ofte noen kilometer i tverrsnitt.

Mesteparten av sin eksistens tilbringer kometen i dyp dvale i de ytterste, iskaldeste grensene av solsystemet.

Når kometens langstrakte bane fører den nærmere solen, forårsaker solvarmen at isen sublimerer direkte fra fast stoff til gass.

Gassen og støvet slynges ut i rommet og danner en lysende sky, en koma, rundt kjernen.

Solvinden blåser dette materialet bort fra solen, noe som skaper en spektakulær hale som kan strekke seg over hundre millioner kilometer.

> **Kometens retning:** En komethale peker alltid rett vekk fra solen, uansett hvilken retning kometen selv beveger seg i.`
    },
    tr: {
      title: 'Kuyrukluyıldızların Buz ve Tozdan Kuyruğu',
      description: 'Güneş sisteminin donmuş köşelerinden gelen antik buz dağları; Güneşe yaklaştıkça uzayan milyonlarca kilometrelik kuyruklar.',
      body: `Kuyrukluyıldızlar gökbilimciler tarafından güneş sistemimizin dört milyar yıllık doğumundan kalma kirli kartopları olarak tanımlanır.

Çekirdekleri donmuş su buzu, metan, karbondioksit ve koyu renkli taş tozlarından oluşur.

Hayatlarının büyük bölümünü uzayın en soğuk ve ıssız sınırlarında derin bir donmuşluk içinde geçirirler.

Yörüngeleri onları Güneşe yaklaştırdığında sıcaklık buzu aniden gaza dönüştürür ve çekirdeğin çevresinde parlak bir gaz bulutu oluşturur.

Güneşten yayılan parçacık rüzgarı bu gaz ve tozları geriye doğru süpürür.

Bu sayede gökyüzünde milyonlarca kilometre boyunca uzanan görkemli ve parıldayan bir toz kuyruğu meydana gelir.

> **Kuyruk Yönü:** Bir kuyrukluyıldızın kuyruğu, nereye doğru uçarsa uçsun daima Güneşin tam tersi yönüne doğru uzanır.`
    }
  },
  {
    slug: 'hvorfor-er-pluto-en-dvergplanet',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Hvorfor ble Pluto omklassifisert til en dvergplanet?',
      description: 'I 2006 endret Den internasjonale astronomiske union definisjonen av hva en planet er; hva skjedde med solsystemets ytterste verden?',
      body: `I mange tiår lærte skolebarn over hele verden at vårt solsystem besto av nøyaktig ni planeter, med vesle Pluto ytterst.

Da kraftigere teleskoper ble bygget på 1990-tallet, oppdaget forskere et helt belte av isklumper utenfor Neptun, kalt Kuiperbeltet.

I 2005 fant astronomene Eris, et himmellegeme av is og stein som var nesten like stort og massivt som Pluto.

Dette tvang astronomene til å stille et grunnleggende spørsmål: Hva er egentlig de formelle kravene for å kalles en ekte planet?

I 2006 vedtok forskerne tre krav: Himmelleget må gå i bane rundt solen; det må være rundt av egen tyngde og ha ryddet sin bane.

Pluto oppfylte de to første kravene, men deler sin bane med tusenvis av andre islegemer i Kuiperbeltet; dermed ble den omdefinert til en dvergplanet.

> **New Horizons-funn:** Da romsonden New Horizons fløy forbi Pluto i 2015, avslørte bildene enorme fjell av vann-is og en gigantisk hjerteformet nitrogenbre.`
    },
    tr: {
      title: 'Plüton Neden Cüce Gezegen Sınıfına Alındı?',
      description: 'Güneş sisteminin dokuzuncu gezegeni olarak bilinen Plüton’un statüsü 2006 yılında neden yeniden tanımlandı?',
      body: `Uzun yıllar boyunca ders kitaplarında güneş sisteminin dokuz gezegeni olduğu ve en uzakta Plüton’un yer aldığı yazılırdı.

1990’lı yıllarda gelişmiş uzay teleskopları Neptün’ün ötesinde Kuiper Kuşağı adı verilen binlerce buzlu gök cismi keşfetti.

2005 yılında gökbilimciler Plüton ile neredeyse aynı büyüklükte olan Eris adında yeni bir gök cismi bulunca tartışmalar alevlendi.

Uluslararası Astronomi Birliği bir gök cisminin gezegen sayılabilmesi için üç kesin kural belirledi.

Cisim Güneş etrafında dönmeli, kendi kütleçekimiyle küre biçimini almalı ve yörüngesindeki diğer gök taşlarını temizlemiş olmalıdır.

Plüton ilk iki kurala uysa da yörüngesini Kuiper Kuşağındaki binlerce buz kütlesiyle paylaştığı için cüce gezegen sınıfına dahil edildi.

> **Buz Kalbi:** New Horizons uzay aracı 2015 yılında Plüton’un yanından geçtiğinde, yüzeyinde donmuş azottan devasa bir kalp deseni görüntüledi.`
    }
  },
  {
    slug: 'nordlys-og-solstormer',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Nordlys: Når solstormer maler himmelen i grønt og lilla',
      description: 'Det magiske lyssløret som danser over polarnatten, er resultatet av en kosmisk kollisjon mellom solpartikler og Jordens atmosfære.',
      body: `Nordlyset, eller aurora borealis, er et av de mest storslåtte naturfenomenene man kan bevitne på den nordlige halvkule.

Fenomenet begynner hundre og femti millioner kilometer unna på soloverflaten, der kraftige eksplosjoner slynger ut skyer av ladede partikler.

Denne solvinden raser gjennom rommet i flere hundre kilometer i sekundet og treffer Jordens usynlige magnetfelt.

Magnetfeltet leder de elektriske partiklene mot polområdene i nord og sør, der feltlinjene samles og bøyer seg ned mot atmosfæren.

I en høyde på mellom hundre og fem hundre kilometer kolliderer solpartiklene med gassmolekyler i luften.

Kollisjoner med oksygenatomer skaper det klassiske grønne og røde lyset, mens kollisjoner med nitrogen produserer fiolette og dypblå bånd.

> **Forskning i nord:** Den norske fysikeren Kristian Birkeland gjenskapte nordlyset i laboratoriet på 1800-tallet med et magnetisk miniatyr-jordkamera kalt Terrella.`
    },
    tr: {
      title: 'Kutup Işıkları ve Güneş Fırtınalarının Dansı',
      description: 'Kutup gecelerinde gökyüzünü zümrüt yeşili dalgalarla aydınlatan aurora: Güneş parçacıklarının atmosferle buluşması.',
      body: `Kutup ışıkları ya da bilimsel adıyla aurora, yeryüzünde tanık olunabilecek en büyüleyici görsel doğa olaylarından biridir.

Bu ışık şöleninin kaynağı, yüz elli milyon kilometre uzaktaki Güneş yüzeyinde gerçekleşen şiddetli patlamalardır.

Patlamalarla uzaya saçılan yüklü parçacıklar, güneş rüzgarıyla Dünya’mızın koruyucu manyetik kalkanına ulaşır.

Manyetik alan bu elektrik yüklü parçacıkları kuzey ve güney kutup bölgelerine doğru yönlendirir.

Yüz kilometreyi aşan yüksekliklerde güneş parçacıkları atmosferimizdeki gaz molekülleriyle şiddetle çarpışır.

Oksijen molekülleriyle çarpışma yeşil ve kızıl ışıklar yayarken, azot molekülleri gökyüzünde mor ve mavi perdeler oluşturur.

> **Tarihsel Keşif:** Norveçli fizikçi Kristian Birkeland, 1800’lü yıllarda laboratuvarında kurduğu manyetik Terrella küresiyle kutup ışıklarını yapay olarak üretmeyi başarmıştır.`
    }
  },
  {
    slug: 'romteleskopet-hubble',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Hubble-romteleskopet: Et krystallklart øye i bane rundt Jorden',
      description: 'Plassert over den forstyrrende atmosfæren har Hubble tatt noen av historiens dypeste og vakreste bilder av fjerne galakser.',
      body: `Teleskoper på bakken møter alltid et optisk problem: Jordens turbulente luftlag gjør at stjernene flimrer og bildene blir uskarpe.

I 1990 skjøt NASA opp romteleskopet Hubble i en bane nesten seks hundre kilometer over bakken for å unngå atmosfærens slør.

Uten luftens forstyrrelser kunne Hubbles 2,4 meter brede speil fange det svakeste og eldste lyset fra fjerne deler av kosmos.

I 1995 rettet astronomene teleskopet mot et tilsynelatende tomt, bekmørkt felt på himmelen i ti dager i strekk.

Resultatet, kjent som Hubble Deep Field, avslørte over tre tusen fjerne galakser i et felt som ikke var større enn et knappenålshode på armlengdes avstand.

Hubble har hjulpet forskere med å bestemme universets alder til omtrent 13,8 milliarder år og bekreftet eksistensen av supermassive sorte hull.

> **Serviceoppdrag:** Hubble er det eneste romteleskopet som er designet for å bli reparert og oppgradert i verdensrommet av astronauter fra romfergen.`
    },
    tr: {
      title: 'Hubble Uzay Teleskobu ve Evrenin Derinlikleri',
      description: 'Atmosferin puslu katmanlarının ötesine yerleştirilen Hubble, tarihin en derin uzay fotoğraflarını nasıl yakaladı?',
      body: `Yeryüzündeki dev teleskopların karşısına daima bir engel çıkar: Atmosferin hareketli hava dalgaları yıldız ışıklarını titretip görüntüyü bulanıklaştırır.

1990 yılında fırlatılan Hubble Uzay Teleskobu, yeryüzünün altı yüz kilometre yukarısındaki yörüngesine yerleşerek bu engeli aştı.

Atmosferin dışındaki berrak ortam sayesinde Hubble’ın aynası evrenin en uzak köşelerinden gelen narin ışıkları yakalamayı başardı.

1995 yılında gökbilimciler teleskobu gökyüzündeki zifiri karanlık ve boş görünen küçücük bir noktaya tam on gün boyunca odakladılar.

Elde edilen fotoğrafta, iğne ucu kadar küçük o boşlukta üç binden fazla dev galaksinin parıldadığı ortaya çıktı.

Hubble evrenin yaşının yaklaşık 13,8 milyar yıl olduğunu kanıtlamış ve astronomi bilimine çağ atlatmıştır.

> **Uzayda Tamirat:** Hubble, uzay mekiğiyle yörüngeye çıkan astronotlar tarafından uzay boşluğunda tamir edilen ve geliştirilen tek teleskoptur.`
    }
  },
  {
    slug: 'meteoritter-steiner-fra-rommet',
    category: 'rommet',
    ageRange: '7-9',
    no: {
      title: 'Meteoritter: Ekte steinprøver fra solsystemets dyp',
      description: 'Når en romstein overlever den brennhete turen gjennom atmosfæren og treffer bakken, holder du en bit av en fremmed verden i hånden.',
      body: `Hver eneste dag faller det tonnevis med kosmiske partikler ned mot Jorden, men nesten alt fordamper høyt oppe i atmosfæren.

De få steinene som er store og tette nok til å overleve den voldsomme heten under nedbremsingen, kalles meteoritter.

Under ferden gjennom luften smelter friksjonen det ytterste laget av steinen og danner en tynn, mørk smeltehinne med avrundede groper.

De fleste meteoritter stammer fra asteroidebeltet mellom Mars og Jupiter, og har reist uforstyrret gjennom rommet i over fire milliarder år.

Noen består hovedsakelig av silikatmineraler, mens andre er kompakte legeringer av nikkel og jern som er ekstremt tunge for sin størrelse.

Ved å analysere disse steinene i laboratorier kan kjemikere undersøke de nøyaktige byggesteinene som dannet planetene i vårt solsystem.

> **Sjeldne funn:** Noen få meteoritter har vist seg å være steiner slått løs fra månen eller Mars etter voldsomme asteroidenedslag i fortiden.`
    },
    tr: {
      title: 'Göktaşları: Uzaydan Yeryüzüne Düşen Antik Taşlar',
      description: 'Atmosferin alevlerini aşıp toprağa çarpan göktaşları; güneş sisteminin oluşumundan kalan en kadim tanıklar.',
      body: `Her gün Dünya atmosferine tonlarca kozmik toz ve kaya parçası girer; fakat bunların neredeyse tamamı sürtünmeyle buharlaşır.

Atmosferin kavurucu sürtünmesine dayanıp yeryüzüne sağlam ulaşmayı başaran taş parçalarına göktaşı veya meteorit adı verilir.

Düşüş sırasında havanın yarattığı yüksek ısı taşın dış yüzeyini eriterek parmak izine benzeyen çukurlar ve siyah bir kabuk oluşturur.

Göktaşlarının büyük kısmı Mars ile Jüpiter arasındaki asteroit kuşağından kopup gelen dört milyar yıllık el değmemiş parçalardır.

Bazıları mineral taşlarından oluşurken, bazıları ise nikel ve demir madenlerinden meydana gelen son derece ağır metal kütleleridir.

Laboratuvarlarda bu taşları inceleyen bilim insanları, gezegenlerin hangi yapı taşlarıyla oluştuğunu doğrudan gözlemleme şansı bulur.

> **Mars Parçaları:** Yeryüzünde bulunan bazı nadir göktaşlarının, geçmişte dev asteroit çarpmalarıyla Ay veya Mars’tan kopup geldiği kanıtlanmıştır.`
    }
  },

  // 10-12 YAŞ (6 KONU - Yıldız evrimi, ötegezegenler, kozmoloji, kozmik fon ışıması, nötron yıldızları)
  {
    slug: 'voyagers-gylne-plate-og-interstellaire-reise',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Voyagers gylne plate: Et tidløst budskap til det interstellare rom',
      description: 'Om bord på de to ubemannede romsondene som nå har forlatt solsystemet, hviler en forgylt grammofonplate med hilsener fra Jorden.',
      body: `I 1977 sendte NASA opp romsondene Voyager 1 og Voyager 2 for å utforske de ytre gasskjempene Jupiter, Saturn, Uranus og Neptun.

Etter å ha fullført sine primære oppdrag fortsatte sondene videre utover, og krysset omsider heliopausen inn i det uutforskede interstellare rommet.

Vitende om at sondene ville drive lydløst gjennom Melkeveien i milliarder av år, ledet astronomen Carl Sagan en komité for å skape et universelt budskap.

Resultatet ble The Golden Record, en forgylt kobberplate med analogt innspilte lyder, hilsener på femtifem språk og nittifem minutter med global musikk.

Platen inneholder også analogt kodede fotografier av biologisk mangfold, menneskelig anatomi og sivilisasjonens arkitektur.

På omslaget er det inngravert et diagram som forklarer avspillingshastigheten og posisjonerer Solen i forhold til fjorten roterende pulsarer.

> **Evig reise:** Selv etter at sondenes plutoniumdrevne generatorer slutter å produsere strøm, vil metallplaten forbli lesbar i rommets vakuum i over en milliard år.`
    },
    tr: {
      title: 'Voyager ve Yıldızlararası Yolculuğun Altın Plağı',
      description: 'Güneş sisteminin sınırlarını aşıp derin uzaya açılan uzay sondasında dünya insanlığının evrene gönderdiği altın mesaj.',
      body: `1977 yılında fırlatılan Voyager 1 ve Voyager 2 uzay sondaları, Jüpiter ve Satürn gibi dev gaz gezegenlerini incelemek üzere yola çıktı.

Görevlerini başarıyla tamamlayan bu iki araç, Güneşin manyetik etki alanını aşarak yıldızlararası boşluğa ulaşan ilk insan yapımı nesneler oldu.

Sondaların milyarlarca yıl boyunca samanyolu galaksisinde sürükleneceğini bilen gökbilimci Carl Sagan, evrene bir mesaj bırakma fikrini geliştirdi.

Bu fikir doğrultusunda hazırlanan Altın Plak; dalga sesleri, kuş cıvıltıları, elli beş dilde selamlama ve farklı kültürlerden müzikler içerir.

Plakta ayrıca insan anatomisini, dünya mimarisini ve gezegenimizin biyolojik zenginliğini anlatan yüz on beş fotoğraf kodlanmıştır.

Kapağındaki piktogramlar ise plağın nasıl çalınacağını ve Güneşin bilinen on dört pulsara göre galaksideki tam konumunu açıklar.

> **Sonsuz Elçi:** Nükleer pilleri tükendikten sonra bile bu altın kaplama metal plak, uzay boşluğunda milyarlarca yıl boyunca bozulmadan yol alacaktır.`
    }
  },
  {
    slug: 'stjernenes-livssyklus-og-supernova',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Stjernenes livssyklus: Fra hydrogenskyer til kataklysmiske supernovaer',
      description: 'Hvert jernatom i blodet ditt og hvert gullkorn i fjellet ble smidd i hjertet av døende stjerner før solsystemet ble født.',
      body: `Stjerner fødes i monumentale gravitasjonelle kollapser inne i kalde tåker av interstellart hydrogen, kjent som stjerneskoler.

Når tettheten og trykket i protostjernens kjerne når kritiske nivåer, tennes kjernefysisk fusjon der hydrogenatomer smelter sammen til helium.

Gjennom milliarder av år opprettholdes hydrostatisk likevekt: strålingstrykket fra fusjonen balanserer nøyaktig gravitasjonskreftene som vil knuse stjernen.

Når stjernen tømmer sitt hydrogenreservoar, svulmer den opp til en rød kjempe og fusjonerer gradvis tyngre grunnstoffer som karbon og oksygen.

For stjerner med over åtte solmasser ender fusjonskjeden katastrofalt når kjernen omdannes til stabilt jern, som krever mer energi enn det avgir.

Uten utoverrettet trykk kollapser kjernen på brøkdeler av et sekund, og den resulterende sjokkbølgen river stjernen i filler i en kosmisk supernovaeksplosjon.

> **Stjernestøv:** Tungmetaller som gull, platina og uran kan utelukkende dannes under de ekstreme nøytronstrømmene i supernovaer og nøytronstjernekollisjoner.`
    },
    tr: {
      title: 'Yıldızların Yaşam Döngüsü ve Süpernova Patlamaları',
      description: 'Kanımızdaki demirden dağlardaki altına kadar her element, geçmişte patlayan dev yıldızların kalbinde üretilmiştir.',
      body: `Yıldızlar, uzay boşluğundaki devasa soğuk hidrojen gazı ve toz bulutlarının kütleçekim etkisiyle içe çökmesi sonucu dünyaya gelir.

Çekirdekteki basınç ve sıcaklık milyonlarca dereceye ulaştığında nükleer füzyon başlar; hidrojen atomları birleşerek helyuma dönüşür.

Yıldız milyarlarca yıl boyunca hidrostatik dengede kalır: füzyonun dışa doğru ürettiği radyasyon basıncı, içeri çeken kütleçekimi dengeler.

Hidrojen tükendiğinde yıldız genişleyerek bir kırmızı deve dönüşür ve karbon, oksijen gibi daha ağır elementleri sentezlemeye başlar.

Güneşten sekiz kat daha büyük yıldızlar demir sentezlemeye başladığında reaksiyon durur; çünkü demir füzyonu enerji üretmek yerine enerji tüketir.

Dışa doğru basınç kesildiği an çekirdek saniyenin kesrinde çöker ve yıldız süpernova adı verilen akıl almaz bir patlamayla paramparça olur.

> **Kozmik Miras:** Yeryüzündeki tüm altın, platin ve demir elementleri, Güneş sistemi oluşmadan önce patlayan bu antik süpernovaların tozlarıdır.`
    }
  },
  {
    slug: 'eksoplaneter-og-leting-etter-liv',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Eksoplaneter: Letingen etter beboelige verdener i fremmede solsystemer',
      description: 'Ved hjelp av transitfotometri og romteleskoper har astrofysikere katalogisert tusenvis av planeter rundt fjerne stjerner.',
      body: `Frem til 1990-tallet visste menneskeheten kun om planetene i vårt eget solsystem; eksistensen av andre verdener var ren teori.

I 1995 bekreftet sveitsiske astronomer oppdagelsen av 51 Pegasi b, en gasskjempe som kretser tett rundt en sollignende stjerne.

Den mest vellykkede metoden for å finne eksoplaneter er transitmetoden, brukt av romteleskoper som Kepler og TESS.

Når en planet passerer direkte foran sin moderstjerne sett fra Jorden, faller stjernens lysstyrke med en ørliten brøkdel av en prosent.

Ved å måle varigheten og dybden på dette lysfallet kan astronomer beregne planetens radius, omløpstid og avstand til stjernen.

Hovedmålet er å finne steinplaneter i den beboelige sonen, avstanden der temperaturen tillater flytende vann på overflaten.

> **Atmosfærisk spektroskopi:** James Webb-teleskopet analyserer stjernelys som filtreres gjennom eksoplaneters atmosfærer for å spore biosignaturer som metan og vanndamp.`
    },
    tr: {
      title: 'Ötegezegenler ve Yaşanabilir Bölgede Yaşam Arayışı',
      description: 'Işık eğrileri ve geçiş fotometrisiyle keşfedilen binlerce yabancı gezegen: Başka yıldızların etrafında hayat var mı?',
      body: `1990’lı yıllara kadar insanların bildiği tek gezegenler Güneş sistemimizdekilerdi; başka yıldızların etrafında dönen dünyalar sadece kuramdı.

1995 yılında gökbilimciler 51 Pegasi b adlı ilk ötegezegeni keşfederek evrende yalnız olmadığımızı kanıtlayan yeni bir çağ açtılar.

Gezegen avında en çok kullanılan yöntem transit yani geçiş fotometrisi yöntemidir.

Bir ötegezegen Dünya ile kendi yıldızının arasından geçtiğinde, yıldızın yaydığı parlaklıkta mikroskobik bir azalma meydana gelir.

Bu ışık azalmasının süresini ve periyodunu inceleyen astronomlar, gezegenin çapını, yörünge hızını ve kütlesini matematiksel olarak hesaplarlar.

En heyecan verici hedef ise Goldilocks yani yaşanabilir kuşakta yer alan, yüzeyinde sıvı su barındırabilecek kayalık dünyaları bulmaktır.

> **Atmosfer Analizi:** James Webb Teleskobu, yabancı gezegenlerin atmosferinden süzülen ışığı tayf analizine tabi tutarak metan ve su buharı arar.`
    }
  },
  {
    slug: 'kosmisk-avstand-og-lysaar',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Den kosmiske avstandsstigen: Hvordan måler vi universets dimensjoner?',
      description: 'I et univers der vanlige måleenheter kollapser, bruker astrofysikere stjerneparallakse og standardlys til å kartlegge dypet.',
      body: `Avstandene i verdensrommet er så uoverskuelige at enheter som kilometer blir meningsløse; lyset fra Månen bruker ett sekund, mens sollyset bruker åtte minutter.

For å beskrive avstander til stjernene benytter vi lysår, distansen lyset tilbakelegger i vakuum i løpet av et helt år, nesten ti billioner kilometer.

For nærliggende stjerner benytter astronomer triangulering gjennom stjerneparallakse.

Når Jorden beveger seg fra den ene siden av sin bane rundt solen til den andre, forskyver nære stjerner seg ørlite mot den fjerne bakgrunnen.

For galakser lenger unna benyttes standardlys, himmellegemer med kjent lysstyrke som kefeide-variable stjerner og type Ia-supernovaer.

Ved å sammenligne en supernovas sanne lysstyrke med hvor svak den fremstår i teleskopet, kan avstanden beregnes presist via den inverse kvadratloven.

> **Nærmeste nabo:** Vår nærmeste nabostjerne utenfor solsystemet er Proxima Centauri, som befinner seg litt over 4,2 lysår unna oss.`
    },
    tr: {
      title: 'Kozmik Mesafe Basamakları: Evrenin Boyutları Nasıl Ölçülür?',
      description: 'Kilometrelerin yetersiz kaldığı derin uzayda astronomlar; ıraklık açısı, ışık yılı ve standart mumlarla mesafeleri nasıl hesaplar?',
      body: `Uzaydaki mesafeler insan aklının sınırlarını zorlayacak kadar geniştir; Ay ışığı bir saniyede, Güneş ışığı ise sekiz dakikada bize ulaşır.

Yıldızlararası mesafeleri ölçmek için ışığın boşlukta bir yılda katettiği mesafe olan ışık yılı birimi kullanılır; bu da yaklaşık on trilyon kilometredir.

Bize yakın yıldızların mesafesini ölçmek için paralaks adı verilen geometrik üçgenleme yöntemi uygulanır.

Dünya Güneş etrafında dönerken altı ay arayla bakıldığında, yakın yıldızlar arka plandaki uzak yıldızlara göre hafifçe yer değiştirmiş gibi görünür.

Milyonlarca ışık yılı uzaktaki galaksiler içinse kefeid yıldızları ve tip Ia süpernovaları gibi parlaklığı sabit standart mumlar kullanılır.

Patlamanın gerçek parlaklığı ile teleskoptaki sönük görüntüsü karşılaştırılarak galaksinin uzaklığı kesin olarak hesaplanır.

> **En Yakın Yıldız:** Güneşten sonra bize en yakın yıldız olan Proxima Centauri, yaklaşık 4,2 ışık yılı mesafede parıldar.`
    }
  },
  {
    slug: 'den-kosmiske-bakgrunnsstralingen',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Det store smellet og den kosmiske mikrobølgebakgrunnen',
      description: 'Det eldste lyset i universet fyller hele rommet som en svak glød; historien om hvordan ekkoet fra Big Bang ble oppdaget.',
      body: `I 1965 forsøkte de to amerikanske fysikerne Arno Penzias og Robert Wilson å kalibrere en gigantisk hornantenne ved Bell Laboratories i New Jersey.

Uansett hvilken retning de rettet antennen, fanget de opp en konstant, uforklarlig bakgrunnsstøy av mikrobølger som aldri forsvant.

De renset antennen for dueekskrementer og sjekket alle elektriske kretser, men signalet forble like sterkt dag og natt.

Det de uforvarende hadde oppdaget, var den kosmiske mikrobølgebakgrunnen, det definitive beviset på at universet ble til i Big Bang.

Omtrent 380 000 år etter universets begynnelse sank temperaturen nok til at elektroner og protoner dannet nøytrale hydrogenatomer.

Dette øyeblikket, kalt rekombinasjonen, gjorde universet gjennomsiktig for lys for aller første gang; fotonene ble frigjort til å reise fritt gjennom rommet.

> **Kosmisk temperatur:** Rommets ekspansjon har strukket dette opprinnelige lyset til mikrobølger med en temperatur på bare 2,7 Kelvin over det absolutte nullpunkt.`
    },
    tr: {
      title: 'Büyük Patlama ve Kozmik Mikrodalga Arka Plan Işıması',
      description: 'Evrenin en eski ışığı tüm uzayı sessizce doldurur: Big Bang teorisini kanıtlayan 13,8 milyar yıllık yankı.',
      body: `1965 yılında iki fizikçi, Arno Penzias ve Robert Wilson, gökyüzündeki radyo sinyallerini dinlemek için devasa bir anten kurdular.

Anteni nereye çevirirlerse çevirsinler, gece gündüz hiç kesilmeyen cızırtılı bir mikrodalga arka plan paraziti duyuyorlardı.

Antenin içini temizlediler ve tüm devreleri baştan aşağı yenilediler, fakat bu gizemli sinyal hiçbir yere kaybolmadı.

Fizikçiler aslında farkında olmadan evrenin Büyük Patlama ile doğduğunu kanıtlayan en kesin fosil izi, kozmik arka plan ışımasını keşfetmişlerdi.

Büyük Patlama’dan 380 bin yıl sonra evren soğumuş, atomlar oluşmuş ve ilk ışık tanecikleri uzay boşluğunda serbestçe akmaya başlamıştı.

Evrenin ilk bebeklik fotoğrafı sayılan bu kadim ışık, genişleyen uzayda milyarlarca yıl boyunca yol alarak mikrodalga boyuna uzamıştı.

> **Kozmik Sıcaklık:** Uzayın her köşesine homojen dağılan bu ilk ışığın sıcaklığı, mutlak sıfır noktasının yalnızca 2,7 derece üzerindedir.`
    }
  },
  {
    slug: 'nøytronstjerner-og-pulsarer',
    category: 'rommet',
    ageRange: '10-12',
    no: {
      title: 'Nøytronstjerner og pulsarer: Universets mest kompakte klokker',
      description: 'En hel sol klemt sammen til en kule på størrelse med en by; oppdagelsen av roterende stjernerester som sender ut radiopulser.',
      body: `Når en massiv stjerne eksploderer som supernova, kan restene av kjernen bli presset sammen under ubeskrivelige gravitasjonskrefter.

Trykket er så voldsomt at elektronene presses direkte inn i atomkjernenes protoner og danner en kompakt sfære av rene nøytroner.

Resultatet er en nøytronstjerne: en himmelkropp med en masse større enn Solen, men med en diameter på knapt tjue kilometer.

Tettheten er så ufattelig at en enkelt teskje med nøytronstjernemateriale ville veie like mye som et helt fjell på Jorden.

Mange nøytronstjerner roterer hundrevis av ganger i sekundet og sender ut konsentrerte stråler av radiolys fra sine magnetiske poler.

Når disse strålene sveiper forbi Jorden som et kosmisk fyrtårn, registrerer radioteleskoper rytmiske signaler fra det som kalles en pulsar.

> **Jocelyn Bells oppdagelse:** I 1967 oppdaget den unge britiske astronomen Jocelyn Bell Burnell den aller første pulsaren, et signal så presist at det først ble spøkt med som utenomjordiske hilsener.`
    },
    tr: {
      title: 'Nötron Yıldızları ve Pulsarlar: Kozmosun Atom Çekirdeği Devleri',
      description: 'Koca bir güneşin bir şehir boyutuna sıkıştığı akıl almaz yoğunluk: Saniyede yüzlerce kez dönen kozmik deniz fenerleri.',
      body: `Büyük bir yıldız süpernova patlamasıyla yok olduğunda, geride kalan çekirdek muazzam bir kütleçekim baskısıyla içe doğru çöker.

Basınç öylesine şiddetlidir ki elektronlar atom çekirdeğindeki protonlarla birleşerek bütünüyle nötronlardan oluşan katı bir küre yaratır.

Böylece nötron yıldızı doğar: Güneşten daha ağır bir kütle, yalnızca yirmi kilometrelik bir şehir büyüklüğüne sıkışmıştır.

Yoğunluk öylesine akıl almazdır ki, bir nötron yıldızından alınacak tek bir çay kaşığı madde Dünya’da bir dağ kadar ağır gelir.

Bu kalıntılar manyetik kutuplarından uzaya yoğun radyo dalgaları fışkırtırken saniyede yüzlerce tur hızla kendi etrafında döner.

Bu ışınlar dönen bir deniz feneri gibi Dünya’mızı her taradığında teleskoplar milisaniyelik ritmik sinyaller kaydeder; bunlara pulsar denir.

> **Tarihsel Keşif:** İlk pulsarı 1967 yılında keşfeden Jocelyn Bell, sinyallerin düzenliliği karşısında ilk başta uzaylılardan mesaj aldığını düşünmüştü.`
    }
  }
];

async function main() {
  await calistirParti('Parti 7: Uzay & Evren (rommet)', ROMMET_HIKAYELER);
}

main().catch(console.error);
