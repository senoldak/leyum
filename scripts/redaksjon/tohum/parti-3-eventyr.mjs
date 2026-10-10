import { calistirParti } from './parti-derleyici.mjs';

const EVENTYR_HIKAYELER = [
  // 4-6 YAŞ (6 KONU)
  {
    slug: 'den-lille-stjernen-og-morket',
    category: 'eventyr',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Den lille stjernen som lærte å skinne',
      description: 'Høyt oppe på himmelen bodde en stjerne som gjemte seg.',
      body: `Høyt oppe på nattehimmelen bodde en bitteliten stjerne. Den var så sjenert.

Hver kveld gjemte den seg bak en myk, blå kveldssky.

Månen smilte mildt og sa: «Verden trenger ditt fine lys, lille venn.»

Da stakk stjernen hodet frem og blinket forsiktig. Hele himmelen lyste opp.

> **Sov godt:** Se ut av vinduet og send et smil til stjernene.`
    },
    tr: {
      title: 'Karanlıktan Korkan Minik Yıldız',
      description: 'Gökyüzünün derinliklerinde bulutların arkasına saklanan utangaç bir yıldız vardı.',
      body: `Gökyüzünün masmavi kucağında küçücük parıldayan bir yıldız yaşardı. Çok utangaçtı.

Her akşam pofuduk ve yumuşak bir bulutun arkasına saklanırdı.

Hilal Ay ona şefkatle gülümsedi: “Dünya senin ılık ışığını bekliyor minik dostum.”

Küçük yıldız cesaretle başını uzattı ve göz kırptı. Gökyüzü sıcacık parıldadı.

> **Tatlı rüyalar:** Bu gece pencereden bak ve parıldayan yıldızlara neşeyle el salla.`
    }
  },
  {
    slug: 'det-glade-ekornet-som-delte',
    category: 'eventyr',
    ageRange: '4-6',
    no: {
      title: 'Det glade ekornet som elsket å dele eikenøtter',
      description: 'I den grønne skogen bodde Nøtti som fant en kjempenøtt.',
      body: `Nøtti var et lite ekorn med en stor og bustete hale.

En dag fant Nøtti den største og fineste konglen i hele skogen.

En liten spurv kom flygende og var så sulten i magen sin.

Nøtti delte konglen i to biter med et smil. Sammen spiste de festmåltid.

> **Gledestips:** Når vi deler med venner, blir all mat dobbelt så god!`
    },
    tr: {
      title: 'Paylaşmayı Öğrenen Neşeli Sincap',
      description: 'Kocaman fındıklar toplayan neşeli sincabın ormandaki sıcacık dostluk masalı.',
      body: `Fındık adında kıpır kıpır, kuyruğu püsküllü küçük bir sincap vardı.

Bir gün meşe ağacının altında altın gibi parıldayan kocaman bir palamut buldu.

O sırada aç bir serçe dalın ucuna konup hüzünle baktı.

Fındık palamudu ikiye böldü ve serçeye uzattı. Birlikte neşeyle yediler.

> **Dostluk kuralı:** Paylaştığımız her lezzet iki kat daha tatlı olur!`
    }
  },
  {
    slug: 'den-myke-skyens-regnsang',
    category: 'eventyr',
    ageRange: '4-6',
    no: {
      title: 'Den myke skyens lille regnsang',
      description: 'Lille Plysj fløy over engen og sang for tørste blomster.',
      body: `Lille sky Plysj svevet lett og glad over de grønne bakkene.

Blomstene nede på bakken ropte: «Vi er så tørste nå!»

Plysj begynte å nynne en liten, koselig melodi av lette dråper.

Pitter, patter falt dråpene, og alle blomstene åpnet sine fargerike blader.

> **Liten dans:** Tramp lett med tærne som små regndråper på gulvet!`
    },
    tr: {
      title: 'Pofuduk Bulutun Yağmur Şarkısı',
      description: 'Gökyüzünde dans eden minik bulut, susamış kır çiçeklerine neşeyle şarkı söyler.',
      body: `Pofuduk adında sevimli bir bulut yemyeşil tepelerin üzerinde süzülüyordu.

Aşağıdaki papatyalar başlarını kaldırıp seslendi: “Çok susadık, bize biraz su verir misin?”

Pofuduk gökyüzünde dönerek tatlı bir yağmur şarkısı mırıldanmaya başladı.

Şıpır şıpır inen ılık damlalarla bütün çiçekler sevinçle yapraklarını açtı.

> **Minik oyun:** Parmak uçlarını masaya vurup yağmur damlası sesleri çıkar!`
    }
  },
  {
    slug: 'elefanten-som-ikke-fikk-sove',
    category: 'eventyr',
    ageRange: '4-6',
    no: {
      title: 'Den lille elefanten som telte sommerfugler',
      description: 'Elefanten Timmy rullet seg fra side til side i det myke gresset.',
      body: `Månen lyste gult over den store og varme savannen.

Lille Timmy Elefant klarte ikke å sovne i det høye gresset.

Mamma strøk ham med snabelen: «Tell fargerike sommerfugler i hodet ditt, venn.»

Timmy telte én, to og tre glade sommerfugler, og sovnet trygt.

> **Pust rolig:** Lukk øynene dine og tenk på en vakker sommerfugl.`
    },
    tr: {
      title: 'Uykusu Gelmeyen Yavru Fil',
      description: 'Kocaman kulaklarıyla uyku arayan yavru filin tatlı ninni masalı.',
      body: `Geniş ovada sarı ay ışığı huzurla parıldıyordu.

Minik fil Memo yumuşacık çimenlerin üzerinde bir türlü uyuyamıyordu.

Anne fil hortumuyla Memo’yu okşadı: “Gözlerini kapat ve kelebekleri say yavrum.”

Memo bir, iki, üç kelebek saydı ve mışıl mışıl daldı.

> **Huzurlu an:** Gözlerini kapat ve rengarenk uçuşan bir kelebek hayal et.`
    }
  },
  {
    slug: 'den-bortkomne-sokkens-reise',
    category: 'eventyr',
    ageRange: '4-6',
    no: {
      title: 'Den bortkomne sokkens modige reise',
      description: 'En rød ullsokk med hvite prikker la ut på ekspedisjon under sofaen!',
      body: `Sokken Snelle var rød med hvite, morsomme prikker på hælen.

En dag trillet Snelle under den store sofaen i stuen.

Der møtte hun en gammel lekebil og en støvete fargestift.

De kjørte på eventyr sammen til støvsugeren kom og ryddet dem opp.

> **Lek:** Se under sengen din. Kanskje finner du en gammel skatt?`
    },
    tr: {
      title: 'Kayıp Çorabın Neşeli Macerası',
      description: 'Kırmızı puantiyeli yün çorap koltuğun altına yuvarlanıp yeni arkadaşlar bulur!',
      body: `Pıtır adında kırmızı puantiyeli neşeli bir yün çorap vardı.

Bir sabah yataktan kayıp kocaman koltuğun altına doğru yuvarlandı.

Orada sarı bir oyuncak araba ve kayıp bir boya kalemiyle karşılaştı.

Üç dost halının altında neşeyle oyunlar oynayıp eğlenceli vakit geçirdiler.

> **Eğlenceli arayış:** Yatağının altına bak, belki orada kaybolmuş eski bir oyuncağını bulursun!`
    }
  },
  {
    slug: 'den-lille-maleren-og-fargene',
    category: 'eventyr',
    ageRange: '4-6',
    no: {
      title: 'Den lille maleren og de glade fargene',
      description: 'Hva skjer når gult og blått klemmer hverandre på papiret?',
      body: `Lille Leo hadde en pensel og en krukke med vann.

Han malte en stor og varm sol med gul maling på arket.

Så tok han litt blå maling og strøk over kanten.

Plutselig ble fargen magisk grønn som gresset i hagen om våren!

> **Fargelek:** Bland gult og blått på et ark og se magien selv!`
    },
    tr: {
      title: 'Renklerini Arayan Küçük Ressam',
      description: 'Sarı ile mavi boya kağıtta birbirine sarılınca ortaya çıkan büyük sihir!',
      body: `Ali’nin elinde temiz bir fırça ve su bardağı vardı.

Kağıdın ortasına sarı boyayla kocaman ve sıcak bir güneş çizdi.

Sonra fırçasına biraz mavi boya alıp güneşe dokundurdu.

İki renk sarılınca kağıtta yemyeşil taze çimenler açtı!

> **Renk oyunu:** Sarı ile maviyi parmağınla karıştır ve yeşilin doğuşunu izle!`
    }
  },

  // 7-9 YAŞ (8 KONU)
  {
    slug: 'det-hviskende-biblioteket-i-skogen',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Det hviskende biblioteket i den dype skogen',
      description: 'Inne i en hul eikestamme fantes det bøker med blader som hvisket eventyr når vinden blåste.',
      body: `Dypt inne i trollskogen sto et urgammelt eiketre med en dør laget av tørket bark.

Da ti år gamle Ella skjøv døren opp, oppdaget hun et eventyrlig bibliotek opplyst av ildfluer.

Bøkene i hyllene var ikke laget av vanlig papir, men av pressede, gylne eikeblader.

Når en mild bris strøk over sidene, leste bladene høyt med hviskende, myke stemmer.

De fortalte om gamle ugler, stjerner som falt i tjernet og blomster som danset i måneskinn.

Ella satte seg i en mosegrodd lenestol og lyttet til historiene helt til skumringen falt.

> **Leseglede:** Finn en koselig krok i stuen og les din favorittbok!`
    },
    tr: {
      title: 'Ormanın Kalbindeki Fısıldayan Kütüphane',
      description: 'Devasa bir meşe ağacının kovuğunda rüzgar estikçe masallar fısıldayan büyülü yapraklar vardı.',
      body: `Yeşil ormanın derinliklerinde kabuktan yapılmış küçük bir kapısı olan asırlık bir meşe ağacı vardı.

Küçük Elif merakla kapıyı araladığında ateşböceklerinin aydınlattığı sıcacık bir kütüphane gördü.

Raflardaki kitaplar sıradan kağıtlardan değil, kurutulmuş altın renkli sonbahar yapraklarından yapılmıştı.

Hafif bir esinti sayfalara değdiğinde, yapraklar tatlı fısıltılarla masallar anlatmaya başlardı.

Gökyüzünden göle düşen yıldızların ve dans eden kır çiçeklerinin büyüleyici hikayelerini dinlerdi.

Elif yumuşacık yosun kaplı mindere oturup ormanın fısıltılarını huzurla dinledi.

> **Kitap sevgisi:** Sen de evinde sıcak bir köşe bulup en sevdiğin masal kitabını aç!`
    }
  },
  {
    slug: 'trebaten-som-fanget-vinden',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Trebåten som lærte å fange den milde vinden',
      description: 'En liten barkebåt la ut fra bekken for å finne den store innsjøens hemmelighet.',
      body: `Bestefar spikket en liten seilbåt av furubark og festet et lønneblad som seil.

Lukas satte båten forsiktig ut i den klukkende bekken bak huset.

Først snurret båten rundt i bakevjen og visste ikke hvilken vei den skulle seile.

Men da en mild sønnavind fylte det grønne seilet, skjøt den fart nedover strømmen.

Båten hilste på frosker, seilte trygt forbi skarpe steiner og nådde den glitrende innsjøen.

Lukas løp langs stien og vinket stolt til sin modige lille seiler.

> **Båtbygger:** Prøv å lage en liten barkebåt selv neste gang du er ved en bekk!`
    },
    tr: {
      title: 'Rüzgarı Yakalayan Tahta Yelkenli',
      description: 'Çam kabuğundan yapılan minik yelkenli dere boyunca cesur bir maceraya yelken açar.',
      body: `Dedesi çam kabuğundan ince bir tekne oydu ve yelken olarak geniş bir çınar yaprağı taktı.

Can tekneyi bahçenin arkasından şırıl şırıl akan derenin serin sularına bıraktı.

Tekne ilk başta suyun içinde kendi etrafında dönüp yolunu şaşırmış gibi durdu.

Fakat ılık bir rüzgar çınar yaprağına dokununca yelkenli neşeyle hız kazandı.

Taşların arasından ustaca süzüldü, kurbağalara selam verip büyük mavi göle ulaştı.

Can kıyıdan koşarak cesur küçük gemisine gururla el salladı.

> **Tekne ustası:** Bir dere kenarına gittiğinde sen de kuru bir ağaç kabuğundan minik bir yelkenli yap!`
    }
  },
  {
    slug: 'urmakeren-som-stoppet-tiden',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Den vennlige urmakeren og det gylne lommeuret',
      description: 'Mester Henrik reparerte klokker, men lærte at de beste øyeblikkene ikke kan måles i sekunder.',
      body: `I en smal brosteinsgate tikket hundrevis av klokker i det vesle verkstedet til urmaker Henrik.

Folk i byen hadde det alltid så travelt og så bare på armbåndsurene sine hele dagen.

En dag skrudde Henrik på et magisk tannhjul, og alle klokkene i byen stoppet helt opp.

Folk stoppet forundret opp, så på hverandre, smilte og begynte å prate sammen på gaten.

De delte nybakte boller, lo sammen og la merke til den vakre ettermiddagssolen.

Da Henrik startet klokkene igjen, husket alle at det viktigste i livet er å være til stede.

> **Tankevekker:** Sett deg ned med familien en kveld uten telefoner og snakk om dagen deres.`
    },
    tr: {
      title: 'Dost Canlısı Saatçi ve Altın Köstekli Saat',
      description: 'Usta saatçi zamanı bir anlığına durdurunca insanların birbirine nasıl gülümsediğinin sıcacık hikayesi.',
      body: `Eski bir sokaktaki dükkanında yaşlı saatçi Hasan Usta yüzlerce saati tamir ederdi.

Kasaba halkı ise sürekli bir yerlere yetişme telaşıyla koşar, birbirlerine selam bile vermezdi.

Hasan Usta bir gün dükkandaki sihirli bir çarkı çevirdi ve kasabadaki bütün saatler durdu.

İnsanlar şaşkınlıkla durakladı, telefonlarını ceplerine koyup birbirlerinin yüzüne baktılar.

Sokakta sohbet ettiler, fırından yeni çıkan sıcak ekmekleri paylaşıp neşeyle güldüler.

Saatler yeniden çalışmaya başladığında herkes dostluğun zamandan çok daha kıymetli olduğunu anladı.

> **Güzel bir an:** Bu akşam ailenle oturup ekranlardan uzakta sıcacık bir sohbet başlat.`
    }
  },
  {
    slug: 'dragen-som-elsket-a-lope',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Den snille dragen som heller ville løpe fort',
      description: 'Dragen Balder hadde små vinger, men de raskeste beina i hele det grønne kongeriket!',
      body: `I fjellene bodde dragen Balder sammen med sine store og flygende brødre.

De andre dragene svevde høyt i skyene og skrøt av hvor store vingene deres var.

Men Balder likte aller best å kjenne det myke gresset kile under de grønne potene.

Han trente hver dag og ble den raskeste løperen i hele det vidstrakte kongeriket.

Da en liten geitekilling gikk seg vill i en dyp kløft, kunne ingen flygere lande der.

Balder løp som en vind over steinene og bar killingen trygt tilbake til flokken.

> **Vær deg selv:** Du trenger ikke gjøre det samme som andre for å være helt spesiell!`
    },
    tr: {
      title: 'Uçamayan Ama Çok Hızlı Koşan Ejderha',
      description: 'Kanatları küçük olsa da ormanın en hızlı koşan dostu olan sevimli ejderha Boncuk!',
      body: `Yüksek sisli dağlarda yaşayan Boncuk adında yeşil ve sevimli bir ejderha vardı.

Kardeşleri gökyüzünde kanat çırpıp bulutların arasında uçmaktan gurur duyarlardı.

Boncuk ise ayaklarının altındaki serin çimenleri hissetmeyi ve hızla koşmayı çok severdi.

Her gün antrenman yaptı ve krallığın en hızlı, en çevik koşucusu oldu.

Bir gün dik kayalıklarda kaybolan minik bir keçi yavrusunu kurtarmak için uçaklar bile inemedi.

Boncuk rüzgar gibi koşarak dar patikalardan geçti ve yavruyu sırtında güvenle taşıdı.

> **Kendin ol:** Herkesle aynı olmak zorunda değilsin; senin yeteneğin sana özeldir!`
    }
  },
  {
    slug: 'stjernefroet-fra-himmelen',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Det glitrende stjernefrøet som falt i hagen',
      description: 'En natt falt et stjerneskudd ned i blomsterbedet til Sara og begynte å spire.',
      body: `En stjerneklar natt så Sara et gyllent stjerneskudd dale sakte ned bak epletreet.

Da hun løp ut neste morgen, fant hun et lite frø som glødet med et sølvfarget lys.

Sara plantet frøet i den fuktige jorden og vannet det kjærlig hver ettermiddag.

Etter noen uker vokste det opp en nydelig plante med stjerneformede, glitrende blader.

Om natten lyste planten opp hele hagen som en trygg lykt for sovende fugler og humler.

Sara forsto at stjerner kan vokse på jorden så lenge de får kjærlighet og omsorg.

> **Naturvenn:** Ta vare på plantene i vinduskarmen din, så gir de deg glede tilbake!`
    },
    tr: {
      title: 'Gökyüzünden Bahçeye Düşen Yıldız Tohumu',
      description: 'Gece gökyüzünden süzülen parlak bir tohum, bahçede sevgiyle sulanınca neler olur?',
      body: `Yıldızlı bir yaz gecesi Zeynep pencereden elma ağacının dibine düşen bir ışık gördü.

Sabah bahçeye koştuğunda gümüş rengi parıldayan minik bir tohum buldu.

Zeynep tohumu özenle toprağa ekti ve her gün sevgiyle sulayıp güneş almasını sağladı.

Birkaç hafta sonra topraktan yıldız şeklinde yaprakları olan harika bir fidan boy verdi.

Geceleri bütün bahçeyi sıcacık bir fener gibi aydınlatarak kuşlara huzur verdi.

Zeynep sevgiyle bakılan her şeyin bir gün gökyüzü gibi parlayacağını anladı.

> **Bitki dostu:** Evindeki bir çiçeğe su verip yapraklarını sevgiyle temizle!`
    }
  },
  {
    slug: 'gutten-som-ble-venn-med-skyggen',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Gutten som ble bestevenn med skyggen sin',
      description: 'Sindre syntes skyggen hans var litt kjedelig, helt til de lærte å danse sammen.',
      body: `Sindre la merke til at den mørke skyggen fulgte etter ham uansett hvor han gikk.

Noen dager var den lang som en lyktestolpe, andre dager gjemte den seg under skoene.

En solrik ettermiddag begynte Sindre å hoppe på ett ben for å se hva skyggen gjorde.

Skyggen hermet etter hver eneste bevegelse, og snart danset de en vill og morsom skyggedans.

De lagde kaninører og flagrende fugler på den hvite husveggen med hendene sine.

Fra den dagen visste Sindre at han aldri var helt alene så lenge solen skinte.

> **Lek med lys:** Bruk en lommelykt på soveromsveggen og lag skyggebilder med fingrene!`
    },
    tr: {
      title: 'Gölgesiyle Arkadaş Olan Meraklı Çocuk',
      description: 'Gölgesini sıkıcı bulan Kerem, bir gün onunla dans edip kuklalar yapmayı keşfeder.',
      body: `Kerem nereye giderse gitsin gölgesinin peşinden geldiğini fark etti.

Bazen bir kavak ağacı gibi uzuyor, bazen de ayaklarının dibinde küçücük kalıyordu.

Güneşli bir ikindi vakti Kerem tek ayağı üzerinde zıplayıp komik hareketler yaptı.

Gölgesi de onunla aynı anda zıpladı ve birlikte harika bir dans başlattılar.

Elleriyle duvara tavşan kulakları ve uçan kuş figürleri çizerek kahkahalar attılar.

Kerem güneş ışığı oldukça yanında hep neşeli bir oyun arkadaşı olduğunu anladı.

> **Işık oyunu:** Odanı karartıp bir el feneriyle duvara parmaklarınla gölge hayvanlar yap!`
    }
  },
  {
    slug: 'det-snakkende-kompasset-i-kisten',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Det kloke kompasset på det gamle loftet',
      description: 'Oskar fant et gammelt messingkompass som ikke bare viste nord, men veien til gode gjerninger.',
      body: `På bestefars støvete loft sto en gammel kiste med lås av skinnende jern.

Nedi kisten fant ti år gamle Oskar et tungt messingkompass med en grønn glassnål.

Når Oskar holdt det i hånden, hvisket kompasset milde råd om hvor han burde gå.

Nålen pekte mot skolegården der en ny gutt sto alene uten noen å leke med.

Oskar fulgte pilen, gikk bort og inviterte gutten med på fotballkampen i friminuttet.

Kompasset glødet fornøyd i lommen, for den beste retningen er alltid mot vennlighet.

> **Et godt valg:** Se deg rundt i hverdagen. Er det noen som trenger en god venn?`
    },
    tr: {
      title: 'Eski Sandıktaki Konuşan Pusula',
      description: 'Ozan tavan arasındaki sandıkta sadece kuzeyi değil, iyiliğin yolunu gösteren bir pusula bulur.',
      body: `Dedemin tavan arasındaki ahşap sandığında eski haritalar ve pirinç bir pusula vardı.

Ozan pusulayı eline aldığında yeşil iğnesinin fısıltıyla yön gösterdiğini fark etti.

Pusula sadece kuzeyi değil, kalbin ve iyiliğin gitmesi gereken doğru yönü işaret ediyordu.

İbre okul bahçesinde yapayalnız duran yeni bir öğrenciyi gösterdi.

Ozan pusulanın gösterdiği yöne yürüdü ve çocuğu neşeyle oyunlarına davet etti.

Pusula cebinde ılık bir ışıkla parıldadı; çünkü en doğru yol her zaman nezakettir.

> **Günün iyiliği:** Okulda etrafına dikkatle bak; belki bir arkadaşının senin gülümsemene ihtiyacı vardır.`
    }
  },
  {
    slug: 'maneblomsten-som-apnet-om-natten',
    category: 'eventyr',
    ageRange: '7-9',
    no: {
      title: 'Måneblomsten som våknet under sølvlyset',
      description: 'I den hemmelige hagen fantes en knopp som nektet å åpne seg for den varme solen.',
      body: `Gartneren i den kongelige parken undret seg over en mystisk og lukket blomsterknopp.

Alle de andre rosene og tulipanene strakte seg ivrig mot det gylne sollyset om dagen.

Men denne unike planten ventet tålmodig helt til månen sto høyt over tretoppene.

Da natten ble stille og kjølig, åpnet de perlehvite kronbladene seg under sølvlyset.

En søt og beroligende duft fylte hagen og hjalp alle dyrene i skogen til å sove trygt.

Alt i naturen har sin egen rytme og sin helt spesielle tid til å blomstre.

> **Tålmodighet:** Husk at det er helt greit å bruke den tiden du trenger for å lære nye ting.`
    },
    tr: {
      title: 'Ay Işığında Açan Gizli Gece Çiçeği',
      description: 'Gündüz güneşinde açmayan, sadece gece gümüş ay ışığında yapraklarını seren eşsiz çiçek.',
      body: `Büyük bahçedeki bahçıvan ne yaparsa yapsın açmayan beyaz bir tomurcuğa şaşırırdı.

Güller ve laleler gündüz güneşine doğru neşeyle kollarını açarken o kapalı dururdu.

Fakat gece olup gümüş hilal gökyüzünde yükseldiğinde tomurcuk yavaşça uyandı.

İnci beyazı taç yaprakları ay ışığının altında sessizce ve zarafetle açıldı.

Bahçeye yayılan tatlı koku bütün ormandaki canlılara huzur ve tatlı rüyalar verdi.

Doğadaki her varlığın kendine ait bir zamanı ve güzelliğini gösterme saati vardır.

> **Sabır öğüdü:** Yeni bir şey öğrenirken acele etme; senin de çiçek açacağın en güzel an gelecektir.`
    }
  },

  // 10-12 YAŞ (6 KONU)
  {
    slug: 'dalen-med-de-glemte-kartene',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Dalen med de glemte karttegnerne',
      description: 'En gammel pergamentrull ledet to søsken til en skjult dal der geografi ble til gjennom minner og fortellinger.',
      body: `I et bibliotek i den gamle kystbyen fant tolv år gamle Nora og broren Emil et umerket sjøkart.

Kartet viste ikke øyer og dybder, men stier tegnet med blekk som endret farge etter årstidene.

De fulgte de kryptiske koordinatene opp gjennom tåkefulle fjellpass og fant den legendariske Kartdalen.

Der bodde et laug av karttegnere som ikke målte verden i meter, men i historier som folk hadde opplevd.

Hver høydekurve representerte en sang som var sunget, og hver blå elv bar minnet om et viktig løfte.

Søsknene forsto at ekte oppdagelser handler vel så mye om å lytte til fortellinger som å måle avstander.

> **Tegn ditt eget kart:** Lag et personlig kart over nabolaget ditt der du markerer steder der du har ledd og hatt det gøy!`
    },
    tr: {
      title: 'Unutulmuş Haritalar Vadisi',
      description: 'Eski bir harita iki kardeşi metrelere değil, anılara ve hikayelere göre çizilmiş gizemli bir vadiye götürür.',
      body: `Tarihi bir sahil kasabasının kütüphanesinde Defne ile kardeşi Arda sararmış kadim bir rulo buldular.

Bu harita sıradan dağları ve adaları değil, mevsimlere göre rengi değişen gizemli patikaları gösteriyordu.

Sisli dağ geçitlerini aşıp haritayı takip ettiklerinde efsanevi Unutulmuş Haritalar Vadisine ulaştılar.

Orada dünyayı santimetrelerle değil, insanların yaşadığı derin hatıralarla çizen bilge haritacılar yaşıyordu.

Haritadaki her bir tepe söylenmiş güzel bir şarkıyı, her bir berrak nehir ise tutulmuş bir dostluk sözünü simgeliyordu.

İki kardeş gerçek bir kaşif olmanın sadece yeni yerler görmek değil, oradaki hikayeleri kalpten dinlemek olduğunu öğrendiler.

> **Kendi haritanı çiz:** Yaşadığın mahalleyi anılarınla çiz; en çok güldüğün ve oyun oynadığın yerleri yıldızlarla işaretle!`
    }
  },
  {
    slug: 'fyrvokternes-stille-vennskap',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Fyrvokterens stille lys over havet',
      description: 'På to forblåste holmer voktet to fjerne fyrsjeler hvert sitt lys og sendte varme hilsener i morsekode.',
      body: `Ute i havgapet sto to ensomme fyrtårn på hver sin værbitte holme, skilt av tre nautiske mil med frådende bølger.

Den gamle fyrvokteren Aksel holdt vakt i det røde fyret, mens unge Maren passet lyset i det hvite fyret i sør.

I vinterstormene kunne de aldri besøke hverandre, men hver kveld før lyset ble tent, sendte de korte lysblink.

Korte og lange blink i morsekode fortalte om kaffekopper, bøker de leste og måker som søkte ly mot vinden.

Dette ordløse sambandet over det mørke havet minnet dem på at ingen er helt alene så lenge noen holder et lys tent.

Da våren kom med stille sjø, møttes de på midtfjords i hver sin trebåt med nystekte vafler og brede smil.

> **Vis omsorg:** Send en hyggelig melding eller hilsen til noen du ikke har snakket med på en god stund!`
    },
    tr: {
      title: 'İki Dostun Sessiz Deniz Feneri Bekçiliği',
      description: 'Azgın dalgaların ayırdığı iki fener bekçisinin mors alfabesi ve ışıkla kurduğu sıcacık dostluk masalı.',
      body: `Uçsuz bucaksız denizin ortasında fırtınalara direnen iki kayalık adacık ve üzerlerinde iki deniz feneri vardı.

Kuzeydeki kırmızı fenerde yaşlı Ahmet Usta, güneydeki beyaz fenerde ise genç denizci Leyla nöbet tutardı.

Aralarındaki derin dalgalar kış aylarında kayıkla geçit vermezdi, fakat onlar akşamları birbirlerine ışıkla seslenirlerdi.

Mors alfabesiyle fenerlerinden gönderdikleri kısa ve uzun parıltılar okudukları kitapları ve demlenen çayları anlatırdı.

Karanlık sularda parıldayan bu sessiz ışık dili, uzakta da olsa bir dostun varlığını hissetmenin en sıcak yoluydu.

Bahar gelip deniz sütliman olduğunda, iki dost tekneleriyle ortada buluşup taze çay ve simitle kucaklaştılar.

> **Bir dostu hatırla:** Uzun zamandır aramadığın bir arkadaşına veya akrabana sıcacık bir hal hatır mesajı gönder!`
    }
  },
  {
    slug: 'byen-hvor-tiden-sto-stille',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Byen hvor alle klokkene tok en pause',
      description: 'Hva skjer med et samfunn når tidsfrister og hastverk opphører, og folk må lære å lytte til sin egen puls?',
      body: `I den pittoreske dalbyen Elvestad sluttet rådhusklokken plutselig å slå sine vante slag en tirsdag formiddag.

Først ble innbyggerne grepet av mild forvirring fordi ingen visste nøyaktig når møter skulle starte eller busser skulle gå.

Men etter få timer oppdaget folk en uventet ro som senket seg over de trange gatene og torgene.

Bakevarer ble spist mens de ennå var rykende varme, og naboer satte seg på benker for å lytte til elvens rolige sang.

Barn lekte uten å kikke på klokken, og malere oppdaget at farger ser dypere ut når man ikke haster videre.

Selv da urmestrene reparerte loddet neste dag, bestemte byen seg for å beholde én klokkefri time hver eneste ettermiddag.

> **Digital pause:** Prøv å legge vekk alle klokker og skjermer i én time og se hvordan tiden føles annerledes.`
    },
    tr: {
      title: 'Zamanda Asılı Kalan Eski Kasaba',
      description: 'Kasabadaki büyük saat kulesi durduğunda insanların telaşı unutup hayatın tadını çıkardığı büyüleyici bir öykü.',
      body: `Nehir kenarındaki şirin Yeşilvadi kasabasında belediye meydanındaki tarihi saat kulesi bir sabah aniden durdu.

İnsanlar ilk başta alışkanlıklarını kaybedip şaşırdılar; otobüslerin ve toplantıların saatini kimse tam kestiremiyordu.

Fakat birkaç saat içinde sokaklara daha önce hiç hissedilmemiş derin ve huzurlu bir dinginlik yayıldı.

Fırından yeni çıkmış sıcak ekmekler acele etmeden yenildi, komşular banklarda oturup nehrin akışını dinledi.

Çocuklar saatlerine bakmadan doyasıya saklambaç oynadı, ressamlar renklerin telaşsız anlarda daha canlı olduğunu gördü.

Kule ertesi gün tamir edildiğinde bile kasaba halkı her akşamüstü bir saat boyunca saatlere bakmama kuralı koydu.

> **Zaman molası:** Sen de bir saat boyunca saatlere ve telefonlara hiç bakmadan sadece anın tadını çıkarmayı dene.`
    }
  },
  {
    slug: 'fjellekkoets-mester',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Fjellekkoets hemmelighet i de høye tindene',
      description: 'En ung jente søkte opp i de kvasse tindene for å lære kunsten å snakke med fjellets eget tusenårige ekko.',
      body: `Oppe i de mektige Sunnmørsalpene bodde en gammel gjeterkvinne som ble kalt Ekkoets Mester av landsbyboerne.

Elleve år gamle Astrid klatret opp de steinete stiene for å forstå hvordan fjellet kunne svare med så klare ord.

Gjeterkvinnen forklarte at fjellet ikke bare kaster lyder tilbake, men forsterker følelsen bak det som blir ropt.

«Hvis du roper med sinne, svarer fjellet med harde, kalde drønn som skremmer steinene,» sa den kloke kvinnen.

«Men hvis du synger med varme og omtanke, svarer tindene med myke melodier som bærer helt ned til dalbunnen.»

Astrid la hendene rundt munnen og sendte en varm strofe ut over fjorden, og hørte fjellene synge harmonisk tilbake.

> **Visdom:** Det du sender ut i verden med dine ord og handlinger, er det som til slutt vender tilbake til deg selv.`
    },
    tr: {
      title: 'Dağların Ardındaki Yankı Ustası',
      description: 'Sarp kayalıkların bilge çobanı, dağlara seslenirken asıl yankılanan şeyin kalpteki niyet olduğunu öğretir.',
      body: `Yüksek karlı zirvelerin eteğinde yaşayan yaşlı bir bilge köylüler tarafından Yankı Ustası olarak bilinirdi.

On iki yaşındaki Eren, dağların nasıl bu kadar berrak ve anlamlı cevaplar verdiğini öğrenmek için yukarı tırmandı.

Bilge kadın gülümsedi ve dağların sadece sesleri değil, o sesin arkasındaki asıl niyeti ve duyguyu yansıttığını anlattı.

“Öfkeyle ve sertçe bağırırsan, kayalıklar da sana taş gibi soğuk ve ürkütücü seslerle karşılık verir,” dedi usta.

“Fakat sevgiyle ve içtenlikle seslenirsen, vadiler o güzel melodiyi çoğaltıp bütün köye neşe olarak geri gönderir.”

Eren ellerini ağzına siper edip vadiye neşeli bir şarkı söyledi ve dağların bu şarkıyı binlerce kez güzelleştirdiğini duydu.

> **Hayat dersi:** Dünyaya söylediğin her söz ve yaptığın her iyilik, bir yankı gibi eninde sonunda sana geri döner.`
    }
  },
  {
    slug: 'oppdageren-med-papirvinger',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Oppdageren som bygde vinger av drømmer',
      description: 'Leonardo drømte om å sveve som en ørn og brukte skissebøker og bambus til å utfordre tyngdekraften.',
      body: `I en italiensk landsby satt en nysgjerrig gutt og studerte hvordan haukene sirklet uanstrengt på varme luftstrømmer.

Leonardo fylte notatbøker med tegninger av fuglevinger, flaggermusbein og intrikate mekaniske snorer og trinser.

Han bygde små modeller av lett silke og splittet bambus, og slapp dem fra det høye kirketårnet for å teste bæreevnen.

Landsbyboerne ristet på hodet og mente at mennesker aldri var skapt for å forlate den trygge jorden under føttene.

Men Leonardo ga aldri opp sin fascinasjon for aerodynamikk og la grunnlaget for ideer som hundrevis av år senere ble til fly.

Han lærte verden at ethvert stort vitenskapelig gjennombrudd starter med en modig drøm som våger å tenke annerledes.

> **Kreativitet:** Tegn en oppfinnelse du drømmer om i skisseboken din, uansett hvor vill og umulig den kanskje virker ved første øyekast!`
    },
    tr: {
      title: 'Kağıttan Kanatlarla Uçan Genç Kaşif',
      description: 'Kuşların gökyüzündeki süzülüşünü inceleyip geleceğin uçak tasarımlarını kağıtlara döken hayalperest bir gencin hikayesi.',
      body: `Zeytin ağaçlarıyla kaplı bir vadide genç Leonardo, kartalların sıcak hava akımlarında nasıl süzüldüğünü dikkatle izlerdi.

Defterlerini kuş iskeletleri, yarasa kanatları ve ipekten yapılmış minik pervane çizimleriyle doldururdu.

Köyün taş kulesinden bambu çıtalarla yaptığı hafif modelleri bırakarak havanın kaldırma gücünü sabırla test ederdi.

Etraftakiler insanların asla uçamayacağını söylese de o doğanın kanunlarını anlamak için yılmadan çizmeye devam etti.

Yüzyıllar sonra göklerde süzülecek olan uçakların ve paraşütlerin ilk tohumları işte bu cesur defter sayfalarında atıldı.

Gerçek bilimsel devrimler, imkansız gibi görünen hayallere inanan cesur zihinlerin sabırlı çalışmalarıyla başlar.

> **Hayal gücü:** Sen de aklındaki çılgın bir icadı defterine çiz ve hayallerinin peşinden gitmekten asla vazgeçme!`
    }
  },
  {
    slug: 'havfruens-antikke-melodi',
    category: 'eventyr',
    ageRange: '10-12',
    no: {
      title: 'Den glemte melodien fra dypets kilde',
      description: 'Et eldgammelt skjell bar på en melodi som kunne minne menneskene på havets sårbarhet og skjønnhet.',
      body: `Ved fjæras kulp fant kystvaktdatteren Selma et spiralformet perlemorsskjell dekket av sjeldne krystalliserte alger.

Da hun la øret inntil åpningen, hørte hun ikke det vanlige bruset, men en ren og stemningsfull sang uten ord.

Det var sangen om havets opprinnelse, om korallenes første pust og om hvalenes urgamle vandringsruter over kloden.

Melodien minnet om hvor skjørt det marine økosystemet er, og hvordan plast og forurensning truer balansen under overflaten.

Selma lærte melodien på fløyten sin og spilte den på havnen under den store årlige kystfestivalen i byen.

Tonene rørte hjertene til fiskerne og byfolket, som sammen forpliktet seg til å rydde og verne strendene for all fremtid.

> **Miljøansvar:** Plukk med deg tre biter plast neste gang du besøker stranden eller elvebredden!`
    },
    tr: {
      title: 'Denizkızının Sakladığı Antik Melodi',
      description: 'Kumsalda bulunan sedefli bir deniz kabuğu, okyanusların güzelliğini ve korunması gerektiğini anlatan antik bir şarkı söyler.',
      body: `Kıyı kasabasında yaşayan Selin, kayalıkların arasında sedef işlemeli çok eski bir deniz kabuğu buldu.

Kulağına yaklaştırdığında klasik dalga uğultusunu değil, sözleri olmayan büyüleyici ve dokunaklı bir melodi duydu.

Bu melodi okyanusların ilk doğuşunu, balinaların antik göç yollarını ve mercanların kırılgan güzelliğini anlatıyordu.

Kabuktaki ses kirliliğin denizleri nasıl üzdüğünü ve temiz suların ne kadar büyük bir nimet olduğunu fısıldıyordu.

Selin bu melodiyi yan flütüyle kasaba meydanındaki festivalde çaldığında bütün balıkçılar ve kasaba halkı büyülendi.

O günden sonra kasabalılar el ele vererek sahilleri temizlemeye ve denizleri korumaya hep birlikte söz verdiler.

> **Deniz sevgisi:** Sahile veya göl kenarına gittiğinde yerdeki plastik çöpleri toplayıp geri dönüşüm kutusuna at!`
    }
  }
];

async function main() {
  await calistirParti('Parti 3: Masal & Hikaye (eventyr)', EVENTYR_HIKAYELER);
}

main().catch(console.error);
