import { calistirParti } from './parti-derleyici.mjs';

const OPPDAGER_HIKAYELER = [
  // 4-6 YAŞ (6 KONU)
  {
    slug: 'hvorfor-er-skyene-hvite',
    category: 'oppdager',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Hvorfor er skyene hvite?',
      description: 'Hvorfor er de myke skyene så hvite som melk på himmelen?',
      body: `Himmelen er blå, men skyene er hvite. Hvorfor er det slik?

Skyer er laget av ørsmå vanndråper. Når solen skinner, treffer lyset dråpene.

Vanndråpene sprer alle fargene i sollyset likt. Da ser skyen helt hvit og myk ut.

> **Visste du dette?** En stor sky veier like mye som mange elefanter!`
    },
    tr: {
      title: 'Bulutlar Neden Beyazdır?',
      description: 'Gökyüzündeki pofuduk bulutlara bakıp neden pamuk gibi bembeyaz olduklarını merak ettin mi?',
      body: `Gökyüzü mavidir, ama bulutlar bembeyaz parıldar. Peki bu nasıl olur?

Bulutlar gökyüzünde yüzen minik su damlacıklarından oluşur. Güneş ışığı bu damlacıklara çarpar.

Su damlacıkları tüm renkleri neşeyle etrafa saçar. İşte bu yüzden bulutlar pamuk gibi bembeyaz görünür.

> **Biliyor muydun?** Gökyüzünde süzülen kocaman bir bulut, yüzlerce fil kadar ağırdır!`
    }
  },
  {
    slug: 'hvordan-viser-speil-oss',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvordan viser speilet oss?',
      description: 'Når du smiler til speilet, smiler det tilbake. Hvordan klarer speilet det?',
      body: `Når du ser i speilet, ser du deg selv. Speilet smiler alltid tilbake til deg.

Lys treffer ansiktet ditt først. Deretter spretter lyset bort på det glatte speilglasset.

Bak glasset ligger et tynt lag med skinnende metall. Det sender lyset rett tilbake til øynene dine.

> **Liten lek:** Gjør en morsom grimase foran speilet. Hvem ler først?`
    },
    tr: {
      title: 'Aynalar Bizi Nasıl Gösterir?',
      description: 'Aynaya bakıp gülümsediğinde o da sana gülümser. Peki ayna bunu nasıl yapar?',
      body: `Aynanın karşısına geçtiğinde kendini görürsün. Sen el sallayınca o da el sallar.

Önce odadaki ışık yüzüne değer. Sonra bu ışık aynanın pürüzsüz camına doğru seker.

Aynanın arkasında parlak gümüş bir sır vardır. Işık oradan zıplayıp doğrudan gözlerine geri döner.

> **Eğlenceli oyun:** Aynaya bakıp komik bir yüz yap. Kim önce gülecek?`
    }
  },
  {
    slug: 'hvor-kommer-vinden-fra',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvor kommer vinden fra?',
      description: 'Vinden kan ruske i håret og danse med bladene. Men hvor starter vinden?',
      body: `Vinden er luft som er på farten. Vi kan ikke se den, men vi kjenner den.

Solen varmer opp bakken og luften. Varm luft er lett og stiger opp mot himmelen.

Da suser kald luft inn for å ta plassen. Denne bevegelsen kaller vi vind.

> **Visste du dette?** Vinden hjelper fuglene med å seile høyt over trærne!`
    },
    tr: {
      title: 'Rüzgar Nereden Gelir?',
      description: 'Rüzgar saçlarımızı uçurur ve yaprakları neşeyle dans ettirir. Peki rüzgar nasıl doğar?',
      body: `Rüzgar aslında aceleyle koşan havadır. Onu göremeyiz ama yüzümüzde hissederiz.

Güneş yeryüzünü ısıtır. Isınan sıcak hava hafifler ve gökyüzüne doğru yükselir.

Onun boşalttığı yere serin hava koşar. Havanın bu neşeli koşusuna rüzgar deriz.

> **Biliyor muydun?** Rüzgar kuşların kanat çırpmadan gökyüzünde süzülmesine yardım eder!`
    }
  },
  {
    slug: 'hvorfor-fester-magneter-seg',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor fester magneter seg?',
      description: 'En magnet kan holde tegningen din fast på kjøleskapet som ren magi!',
      body: `Magneter er veldig morsomme leketøy. De fester seg til kjøleskapet med et lite klikk.

Hver magnet har en usynlig kraft. Denne kraften kalles magnetisme.

Magneten er glad i ting laget av jern. Men den vil ikke feste seg til tre eller plast.

> **Prøv selv:** Finn en binders. Se hvordan magneten løfter den opp!`
    },
    tr: {
      title: 'Mıknatıslar Nasıl Yapışır?',
      description: 'Bir mıknatıs resmini buzdolabına sihirli bir el gibi yapıştırır. Bu sihir nasıl çalışır?',
      body: `Mıknatıslar çok eğlencelidir. Buzdolabının kapağına çıt diye yapışırlar.

Her mıknatısın görünmez güçlü kolları vardır. Biz buna çekim gücü deriz.

Mıknatıs demirden yapılmış şeyleri çok sever. Ama tahta veya plastiği çekmez.

> **Sen de dene:** Bir ataş bul. Mıknatısın onu nasıl kaptığını izle!`
    }
  },
  {
    slug: 'hvor-blir-solen-av-om-natten',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvor blir solen av om natten?',
      description: 'Når stjernene tennes og vi skal sove, hvor reiser solen da hen?',
      body: `Når kvelden kommer, blir himmelen mørk. Solen ser ut til å gå og legge seg.

Men solen står helt stille i rommet. Det er vår egen planet Jorden som snurrer rundt.

Når vår side snur seg vekk, får vi natt. Da skinner solen på barn på den andre siden.

> **Visste du dette?** Mens du sover, spiser barn langt borte frokost!`
    },
    tr: {
      title: 'Gece Olunca Güneş Nereye Gider?',
      description: 'Yıldızlar parıldayıp uyku vakti geldiğinde Güneş nereye saklanır?',
      body: `Akşam olunca gökyüzü kararır. Güneş sanki uyumaya gitmiş gibi görünür.

Oysa Güneş uzayda yerinde durur. Dönüp duran aslında bizim güzel Dünyamızdır.

Biz arkamızı döndüğümüzde gece olur. Güneş o sırada dünyanın diğer ucundaki çocukları aydınlatır.

> **Biliyor muydun?** Sen tatlı uykundayken, uzaktaki çocuklar güneşe bakıp kahvaltı yapar!`
    }
  },
  {
    slug: 'hvorfor-er-sapebobler-runde',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor er såpebobler runde?',
      description: 'Selv om såpeblåseren er firkantet, blir boblen alltid rund som en ball!',
      body: `Såpebobler glitrer i alle farger. De svever så lett gjennom luften.

Boblen er fylt med luft du puster inn. Såpevannet lager en tynn hinne rundt luften.

Hinnen trekker seg sammen så mye den kan. Den rundeste formen er alltid en kule.

> **Prøv selv:** Blås forsiktig. Klarer du å lage en kjempeboble?`
    },
    tr: {
      title: 'Sabun Köpükleri Neden Yuvarlaktır?',
      description: 'Üfleme çubuğun kare olsa bile sabun baloncukları hep top gibi yuvarlak çıkar!',
      body: `Sabun köpükleri gökkuşağı gibi parlar. Havada tüy gibi süzülürler.

Köpüğün içi nefesindeki havayla dolar. Sabunlu su bu havanın etrafına sarılır.

Su damlacıkları birbirine sımsıkı sarılmayı sever. En sıkı ve rahat şekil küredir.

> **Sen de dene:** Yavaşça üfle. Havada dans eden kocaman bir baloncuk yap!`
    }
  },

  // 7-9 YAŞ (8 KONU)
  {
    slug: 'hvordan-sover-astronauter-i-rommet',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan sover astronauter i rommet?',
      description: 'Uten tyngdekraft kan man sveve opp i taket! Hvordan legger man seg da?',
      body: `I den internasjonale romstasjonen svever alt. Det finnes ikke noe opp eller ned.

Hvis en astronaut bare la seg på en seng, ville hun sveve rundt i rommet og dunke hodet.

Derfor sover de i spesielle soveposer som er festet til veggen med solide stropper.

Posen holder kroppen på plass slik at de ikke driver av gårde mens de drømmer.

De har også vifter i sovekabinen for å sirkulere frisk luft hele natten.

> **Moro fakta:** Astronauter trenger verken madrass eller pute, for kroppen føles helt vektløs!`
    },
    tr: {
      title: 'Astronotlar Uzayda Nasıl Uyur?',
      description: 'Yerçekimi olmayınca havaya uçarsın! Peki astronotlar tavana çarpmadan nasıl uyur?',
      body: `Uluslararası Uzay İstasyonunda her şey havada uçar. Orada yukarı ya da aşağı yoktur.

Bir astronot normal bir yatağa uzansaydı, uyurken havaya yükselir ve duvarlara çarpardı.

Bu yüzden astronotlar duvara sımsıkı bağlanmış özel uyku tulumlarında uyurlar.

Tulum onları sabit tutar, böylece rüya görürken odanın içinde süzülüp kaybolmazlar.

Ayrıca odadaki özel havalandırmalar gece boyunca onlara taze hava üfler.

> **İlginç bilgi:** Uzayda yastığa veya yatağa gerek yoktur, çünkü vücudun tüy gibi hafiftir!`
    }
  },
  {
    slug: 'hvordan-kan-fly-flyve',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan kan store fly fly i luften?',
      description: 'Tunge passasjerfly veier mange tonn, men de glir lett gjennom skyene. Hvordan?',
      body: `Et stort fly veier like mye som mange hundre elefanter. Likevel flyr det som en fugl.

Hemmeligheten ligger i vingens smarte form. Vingen er buet på toppen og flat på undersiden.

Når flyet raser fremover, beveger luften over vingen seg raskere enn luften under.

Dette skaper et sug oppover som kalles løftekraft. Løftekraften løfter hele det tunge flyet opp i luften.

Motorene dytter flyet fremover, og vingene sørger for at det holder seg oppe.

> **Eksperiment:** Hold en papirstrimmel under underleppen og blås over den. Se hvordan papiret løfter seg!`
    },
    tr: {
      title: 'Dev Uçaklar Gökyüzünde Nasıl Uçar?',
      description: 'Tonlarca ağırlıktaki kocaman uçaklar gökyüzünde bir kuş gibi nasıl süzülür?',
      body: `Kocaman bir yolcu uçağı yüzlerce fil kadar ağırdır. Yine de gökyüzünde kolayca uçar.

Bunun büyük sırrı kanatların özel şeklinde saklıdır. Kanadın üstü kavisli, altı ise düzdür.

Uçak hızlandıkça kanadın üzerinden geçen hava hızlanır ve basınç düşer.

Alttaki hava ise uçağı yukarı doğru güçlüce iter. Bilim insanları buna kaldırma kuvveti der.

Motorlar uçağı ileri doğru iterken, kanatlar gökyüzünde süzülmesini sağlar.

> **Küçük deney:** Bir kağıt şeridini dudağının altına koyup üstünden üfle. Kağıdın yukarı kalktığını göreceksin!`
    }
  },
  {
    slug: 'nar-viser-regnbuen-seg',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Når viser regnbuen seg?',
      description: 'Hvorfor må det både regne og være solskinn samtidig for at regnbuen skal titte frem?',
      body: `En regnbue er et av naturens aller vakreste underverker på himmelen.

For å se en regnbue må du ha solen i ryggen og regnvær foran deg.

Når det hvite sollyset treffer regndråpene, fungerer hver dråpe som et lite prisme.

Lyset bøyes og deles opp i sine hemmelige farger: rød, oransje, gul, grønn, blå, indigo og fiolett.

Fargene reflekteres tilbake til øynene dine i en fantastisk, buet fargebro.

> **Visste du dette?** Fra et fly høyt oppe ser regnbuen ut som en hel, perfekt sirkel!`
    },
    tr: {
      title: 'Gökkuşağı Ne Zaman Ortaya Çıkar?',
      description: 'Gökkuşağının parıldaması için neden hem yağmurun hem de güneşin aynı anda olması gerekir?',
      body: `Gökkuşağı doğanın gökyüzüne çizdiği en renkli ve neşeli köprüdür.

Bir gökkuşağı görebilmek için Güneşin arkanda, yağmurun ise önünde olması gerekir.

Güneşten gelen beyaz ışık havada asılı duran minik yağmur damlalarına çarpar.

Her yağmur damlası minik bir cam prizma gibi çalışır ve ışığı yedi renge ayırır.

Kırmızı, turuncu, sarı, yeşil, mavi, lacivert ve mor gökyüzünde bir yay çizer.

> **Biliyor muydun?** Gökyüzündeki bir uçaktan baktığında gökkuşağı yarım yay değil, tam bir çemberdir!`
    }
  },
  {
    slug: 'vokser-sjokolade-pa-trær',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Vokser sjokolade på trær?',
      description: 'Lørdagsgodtet vi elsker har en lang reise fra tropiske regnskoger til butikkhyllen!',
      body: `Du finner ikke ferdige sjokoladeplater hengende på grenene i skogen.

Men sjokoladens viktigste ingrediens vokser faktisk på trær i varme land!

Treet kalles kakaotre. Det får store, fargerike frukter som vokser rett ut av trestammen.

Inne i frukten ligger mange kakaobønner gjemt i et hvitt fruktkjøtt.

Bønnene tørkes, brennes og males til kakaomasse før de blandes med melk og sukker.

> **Historisk fakta:** For lenge siden brukte Maya-folket kakaobønner som ekte penger!`
    },
    tr: {
      title: 'Çikolata Ağaçta mı Yetişir?',
      description: 'Severek yediğimiz lezzetli çikolatanın tropik ormanlardan mutfağımıza uzanan heyecanlı yolculuğu!',
      body: `Ağaç dallarında paketli çikolatalar sallanmaz, bu doğru.

Fakat çikolatanın kalbi olan kakao gerçekten de tropik yağmur ormanlarındaki ağaçlarda yetişir!

Bu ağaca kakao ağacı denir. Kocaman ve renkli meyveleri doğrudan gövdesinde büyür.

Meyvenin kabuğunu açtığınızda içinde pamuk gibi meyve özü ve kakao çekirdekleri çıkar.

Bu çekirdekler kurutulur, kavrulur, öğütülür ve süt ile şekerle karıştırılarak çikolataya dönüşür.

> **Tarihi bilgi:** Çok eski zamanlarda Maya uygarlığı kakao çekirdeklerini para gibi kullanırdı!`
    }
  },
  {
    slug: 'hvordan-reiser-lyden-i-luften',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan reiser lyden i luften?',
      description: 'Når noen roper til deg over skolegården, hvordan finner lyden frem til øret ditt?',
      body: `Alt som lager lyd, begynner med en liten vibrasjon.

Når du snakker, vibrerer stemmebåndene i halsen din og dytter borti luftpartiklene.

Partiklene dytter på naboene sine som en usynlig bølge i et hav av luft.

Denne lydbølgen treffer trommehinnen i øret ditt, som begynner å vibrere i samme takt.

Hjernen din oversetter disse vibrasjonene til stemmer, musikk eller fuglesang.

> **Eksperiment:** Legg hånden forsiktig på halsen og nynn høyt. Kjenner du vibrasjonen?`
    },
    tr: {
      title: 'Ses Havada Nasıl Yol Alır?',
      description: 'Arkadaşın bahçenin diğer ucundan seslendiğinde o ses senin kulağına nasıl ulaşır?',
      body: `Duyduğumuz her ses aslında minik ve hızlı bir titreşimle başlar.

Sen konuştuğunda boğazındaki ses telleri titrer ve etrafındaki hava taneciklerini iter.

Hava tanecikleri birbirine çarparak havada görünmez bir dalga gibi yayılır.

Bu ses dalgası kulağındaki kulak zarına çarpar ve zarı aynı ritimle titreştirir.

Beynin bu titreşimleri harika bir melodiye, kelimelere veya bir kahkahaya dönüştürür.

> **Küçük deney:** Elini boğazına koy ve mırıldan. Parmaklarının altındaki titreşimi hissediyor musun?`
    }
  },
  {
    slug: 'hvordan-dukker-ubater',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan dukker ubåter under vannet?',
      description: 'En enorm stålbåt kan både flyte på overflaten og synke kontrollert ned i havet. Hvordan?',
      body: `Ubåter er havets mest hemmelighetsfulle skip. De kan gli under bølgene i ukevis.

Ubåten har spesielle tanker som kalles ballasttanker. Disse tankene fungerer som flytevester.

Når ubåten skal dykke, åpnes ventilene og tankene fylles med tungt sjøvann.

Da blir ubåten tung nok til å synke ned i det dype havet.

Når den vil opp igjen, blåses vannet ut med kraftig trykkluft så båten blir lett og flyter.

> **Visste du dette?** Ubåter bruker lydbølger, kalt sonar, for å se under det mørke vannet!`
    },
    tr: {
      title: 'Denizaltılar Su Altında Nasıl Dalar?',
      description: 'Tonlarca ağırlıktaki koca bir gemi su üstünde yüzerken nasıl derinliklere dalar ve geri çıkar?',
      body: `Denizaltılar okyanusların en gizemli araçlarıdır. Haftalarca suyun altında kalabilirler.

Denizaltının içinde safra tankı adı verilen özel su depoları bulunur.

Dalış yapmak istediğinde bu tankların kapakları açılır ve içleri deniz suyuyla doldurulur.

Gemi ağırlaşır ve yavaşça derin sulara doğru süzülür.

Yüzeye çıkmak istediğinde ise basınçlı hava verilerek su dışarı fışkırtılır ve denizaltı hafifler.

> **Biliyor muydun?** Denizaltılar karanlık sularda yönünü bulmak için sonar adı verilen ses dalgalarını kullanır!`
    }
  },
  {
    slug: 'hvordan-finner-kompasset-nord',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan finner kompasset nord?',
      description: 'En liten metallnål snurrer rundt og peker alltid mot nordpolen. Hvordan vet den veien?',
      body: `Enten du står i en mørk skog eller på et stormfullt hav, viser kompasset alltid vei.

Nålen i kompasset er en tynn og lett magnet som flyter fritt på en liten spiss.

Vår planet Jorden er som en gigantisk magnet med en magnetisk nordpol og sørpol.

Kompassnålens nordpol tiltrekkes av Jordens magnetfelt og snur seg alltid rett mot nord.

Slik har modige oppdagere funnet veien over ukjente hav i mange hundre år.

> **Tips til tur:** Ta med et kompass på tur. Prøv å finne nord!`
    },
    tr: {
      title: 'Pusula Kuzeyi Nasıl Bulur?',
      description: 'Minik bir iğne döner döner ve her zaman kuzeyi gösterir. Yolunu nasıl bu kadar iyi bilir?',
      body: `İster sık bir ormanda ister sisli bir denizde ol, pusula sana her zaman yön gösterir.

Pusulanın içindeki ince ibre serbestçe dönebilen hafif bir mıknatıstır.

Bizim güzel Dünyamız da aslında uzayda dönen devasa bir mıknatıs gibidir.

Dünyanın manyetik alanı, pusulanın iğnesini görünmez bir güçle çeker ve kuzeye döndürür.

Eski kaşifler yüzyıllar boyunca okyanusları aşarken yönlerini hep bu küçük iğneyle bulmuşlardır.

> **Keşif ipucu:** Doğaya çıktığında pusulanı çıkar ve hangi yönün kuzey olduğunu bulmaya çalış!`
    }
  },
  {
    slug: 'hvorfor-har-snoflak-seks-kanter',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvorfor har snøflak seks kanter?',
      description: 'Hvert eneste snøfnugg er et lite kunstverk, og alle har nøyaktig seks symmetriske armer!',
      body: `Når det snør ute, daler millioner av glitrende stjerner sakte ned fra himmelen.

Snøflak dannes høyt oppe i skyene når vanndamp fryser direkte til iskrystaller.

Vannmolekyler er bygget opp slik at de naturlig hekter seg sammen i sekskanter når de fryser.

Mens krystallen vokser og faller gjennom luften, bygges det seks like armer ut fra midten.

Hvert fnugg opplever ulik temperatur på veien ned, så nesten ingen er helt like.

> **Vintertips:** Fang et snøfnugg på en mørk vott og studer de vakre grenene før det smelter!`
    },
    tr: {
      title: 'Kar Taneleri Neden Altı Köşelidir?',
      description: 'Gökyüzünden süzülen her kar tanesi bir sanat eseridir ve hepsi tam altı köşelidir!',
      body: `Kışın gökten süzülen kar taneleri minik birer elmas gibi parıldar.

Kar taneleri gökyüzündeki soğuk bulutlarda su buharının buza dönüşmesiyle başlar.

Su tanecikleri donarken birbirine tam altıgen bir desen oluşturacak şekilde kenetlenir.

Kristal aşağı doğru süzüldükçe merkezden dışarıya doğru altı eşit kol uzar.

Her tanecik farklı bir rüzgarla karşılaştığı için hiçbir kar tanesi birbirinin aynısı değildir.

> **Kış eğlencesi:** Koyu renkli eldiveninin üzerine düşen bir kar tanesini büyüteçle incele!`
    }
  },

  // 10-12 YAŞ (6 KONU)
  {
    slug: 'hvorfor-har-jorden-tidssoner',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvorfor har Jorden ulike tidssoner?',
      description: 'Når du spiser middag i Oslo, spiser kanskje noen frokost i Tokyo. Hvorfor deler vi tiden inn slik?',
      body: `Før i tiden stilte hver by klokkene etter når solen sto høyest på himmelen midt på dagen.

Da jernbanen og telegrafen kom, ble dette kaos fordi togtidene ikke stemte mellom nabobyer.

Jorden bruker 24 timer på å snurre én hel runde rundt sin egen akse på 360 grader.

Deler vi 360 grader på 24 timer, ser vi at solen flytter seg over 15 lengdegrader hver eneste time.

I 1884 ble verden enige om å dele kloden inn i 24 standard tidssoner med utgangspunkt i Greenwich i London.

Slik vet fly, tog og internett nøyaktig hva klokken er uansett hvor i verden du befinner deg.

> **Tankeoppgave:** Hvis du flyr vestover like fort som Jorden snurrer, kan du oppleve samme solnedgang hele tiden!`
    },
    tr: {
      title: 'Zaman Dilimleri ve Dünyanın Dönüşü',
      description: 'Sen İstanbul’da akşam yemeği yerken Tokyo’da neden yeni bir gün doğar? Zamanı nasıl böldük?',
      body: `Eski çağlarda her şehir kendi yerel saatini öğle vaktinde Güneşin en tepede olduğu ana göre ayarlardı.

Ancak trenler ve telgraf icat edilince, farklı saatler nedeniyle tren seferlerinde büyük karışıklıklar yaşandı.

Dünyamız kendi ekseni etrafındaki 360 derecelik tam bir dönüşü yaklaşık 24 saatte tamamlar.

Bu hesaba göre Güneş her bir saatte gökyüzünde 15 boylamlık bir mesafe kat eder.

1884 yılında bilim insanları dünyayı 24 eşit zaman dilimine bölerek Londra’daki Greenwich gözlemevini başlangıç noktası seçti.

Artık uçaklar, uydular ve internet bu düzenli zaman dilimleri sayesinde kusursuz uyum içinde çalışır.

> **Düşünce sorusu:** Dünyanın dönüş hızında batıya doğru uçsaydın, batmayan bir gün batımını sonsuza dek izleyebilirdin!`
    }
  },
  {
    slug: 'hva-er-et-sort-hull',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hva er egentlig et sort hull?',
      description: 'De mest ekstreme objektene i universet, der tyngdekraften er så enorm at ikke engang lyset slipper ut.',
      body: `I det dype universet finnes det kosmiske mysterier som utfordrer alt vi forstår om fysikk.

Når en gigantisk stjerne dør, kollapser kjernen under sin egen enorme vekt og knuses sammen.

Massen presses inn i et uendelig lite punkt som kalles en singularitet.

Tyngdekraften her blir så sterk at ingenting som kommer for nær kan slippe unna, ikke engang det raske lyset.

Grensen der det ikke lenger finnes noen vei tilbake, kalles for hendelseshorisonten.

Siden lyset fanges, kan vi ikke se hullet direkte, men vi ser gassen som gløder intenst like utenfor kanten.

> **Fascinerende fakta:** I sentrum av vår egen Melkevei-galakse ligger det et supermassivt sort hull som kalles Sagittarius A*!`
    },
    tr: {
      title: 'Karadelikler Nedir?',
      description: 'Evrenin en gizemli gök cisimleri: Çekim kuvveti o kadar büyüktür ki ışık bile kaçamaz!',
      body: `Evrenin derinliklerinde fizik kurallarının sınırlarını zorlayan akıl almaz cisimler bulunur.

Devasa bir yıldız yakıtını bitirip öldüğünde, kendi dev kütlesinin ağırlığı altında aniden çöker.

Yıldızın tüm maddesi sonsuz küçüklükte bir noktaya sıkışır ve bir tekillik meydana gelir.

Bu noktanın çekim kuvveti o kadar şiddetlidir ki, evrendeki en hızlı şey olan ışık bile oradan kurtulamaz.

Geri dönüşü olmayan bu görünmez sınıra bilim insanları olay ufku adını verirler.

Karadeliğin kendisini göremeyiz ama etrafında dönen ve deliğe çekilen parlak gazları gözlemleyebiliriz.

> **Büyüleyici bilgi:** Samanyolu galaksimizin tam merkezinde Sagittarius A* adında devasa bir süper kütleli karadelik bulunur!`
    }
  },
  {
    slug: 'hvordan-strommer-elektrisitet',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvordan strømmer elektrisitet i ledninger?',
      description: 'Når du trykker på lysbryteren tennes lampen på et brøkdels sekund. Hva skjer inne i ledningen?',
      body: `Elektrisitet driver datamaskiner, tog og lyspærer, men hva er det egentlig som beveger seg?

Alt rundt oss er bygget opp av atomer, og ytterst i atomene kretser ørsmå partikler kalt elektroner.

I metaller som kobber sitter noen av elektronene veldig løst og kan hoppe fra atom til atom.

Når et batteri eller en generator kobles til, dytter den elektronene i samme retning som vann i et rør.

Selve elektronene beveger seg ganske sakte, men den elektriske bølgen sprer seg nesten like raskt som lyset.

Når elektronene strømmer gjennom tråden i lampen, skaper motstanden varme og lys som lyser opp rommet.

> **Sikkerhet:** Husk at kroppen vår leder strøm godt, så lek aldri med stikkontakter hjemme!`
    },
    tr: {
      title: 'Elektrik Kablolarda Nasıl Akar?',
      description: 'Düğmeye bastığın an odan ışıkla dolar. Peki o incecik bakır tellerin içinde neler olur?',
      body: `Elektrik dünyamızdaki trenleri, bilgisayarları ve lambaları çalıştırır, peki içinden geçen nedir?

Etrafımızdaki her şey atomlardan yapılmıştır ve atomların etrafında elektron adı verilen minik parçacıklar döner.

Bakır gibi metallerde bu elektronlar serbestçe gezer ve atomdan atoma kolayca atlayabilir.

Bir pil veya jeneratör bağlandığında elektronlar bir su borusundaki su gibi aynı yöne doğru itilir.

Elektronların kendisi yavaş ilerlese de elektrik dalgası kablo boyunca ışık hızına yakın bir hızla yayılır.

Akım lambadaki ince telden geçerken oluşan direnç ısıya ve gözlerimizi aydınlatan parlak ışığa dönüşür.

> **Güvenlik uyarısı:** İnsan vücudu elektriği çok iyi iletir, bu yüzden prizlerle asla oyun oynanmamalıdır!`
    }
  },
  {
    slug: 'hvordan-ser-teleskoper-fortiden',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvordan ser store teleskoper inn i fortiden?',
      description: 'Når James Webb-teleskopet tar bilder av fjerne galakser, ser det faktisk millioner av år tilbake i tid!',
      body: `Visste du at astronomer er universets ekte tidsreisende? Hver gang de ser ut i rommet, ser de fortid.

Årsaken er at lyset, selv om det er lynraskt med 300 000 kilometer i sekundet, bruker tid på å reise.

Sollyset du kjenner på kinnet en varm sommerdag, forlot solen for litt over åtte minutter siden.

Når vi retter store romteleskoper mot fjerne galakser, har lyset reist i milliarder av år før det treffer speilet.

Det betyr at vi ser galaksene slik de så ut like etter at universet ble til, ikke slik de er i dagens øyeblikk.

Teleskoper fungerer som kraftige tidsmaskiner som lar oss utforske universets aller første kapitler.

> **Visste du dette?** James Webb-romteleskopet bruker gullbelagte speil for å fange det eldgamle infrarøde lyset!`
    },
    tr: {
      title: 'Teleskoplar Geçmişe Nasıl Bakar?',
      description: 'Dev uzay teleskopları milyonlarca ışık yılı uzaktaki yıldızları görüntülerken zamanda geriye nasıl bakar?',
      body: `Gökbilimciler evrenin gerçek zaman yolcularıdır. Çünkü uzaya her baktıklarında geçmişi görürler.

Bunun sebebi ışığın saniyede 300.000 kilometre gibi akıl almaz bir hızla yol almasına rağmen evrenin çok büyük olmasıdır.

Yüzünü ısıtan ılık Güneş ışığı aslında sekiz dakika önce Güneşten yola çıkmıştır.

Milyarlarca ışık yılı uzaktaki bir galaksiye teleskopla baktığımızda, o ışık teleskoba ulaşmak için milyarlarca yıl seyahat etmiştir.

Yani biz o galaksinin şimdiki halini değil, evrenin ilk gençlik yıllarındaki halini görürüz.

Teleskoplar gökyüzünün en büyüleyici zaman makineleridir ve evrenin başlangıç sırlarını keşfetmemizi sağlar.

> **Büyüleyici bilgi:** James Webb Uzay Teleskobu bu antik ışığı yakalamak için altın kaplama aynalar kullanır!`
    }
  },
  {
    slug: 'hvordan-tenker-en-robot',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvordan tenker og lærer en robot?',
      description: 'Roboter har ingen biologisk hjerne, men de kan løse rubiks kube og navigere på Mars. Hvordan virker de?',
      body: `Roboter kan utføre kirurgiske inngrep, støvsuge stuen og kjøre rovere på den røde planeten Mars.

En robot består av tre hoveddeler: sensorer som sanser omgivelsene, motorer som beveger seg, og en datamaskin.

Sensorene fungerer som robotens øyne og ører ved å måle avstander, temperatur og lysstyrke.

Datamaskinen kjører en algoritme, som er en samling nøyaktige instruksjoner skrevet av programmerere.

Moderne roboter bruker maskinlæring, der de trener på tusenvis av eksempler for å gjenkjenne hindringer.

De tenker ikke med følelser som mennesker, men regner ut lynraske matematiske sannsynligheter.

> **Prøv å kode:** Lær deg enkle blokkbaserte kodespråk som Scratch for å programmere din egen virtuelle robot!`
    },
    tr: {
      title: 'Robotlar Nasıl Düşünür ve Kodlanır?',
      description: 'Robotların etten kemikten bir beyni yoktur ama Mars’ta gezinebilirler. Peki nasıl karar verirler?',
      body: `Robotlar fabrikalarda araba üretebilir, evimizi süpürebilir ve Mars gezegeninde keşif yapabilirler.

Her robot temel olarak üç parçadan oluşur: çevreyi algılayan sensörler, hareket eden motorlar ve bir işlemci beyin.

Sensörler robotun gözü ve kulağı gibidir; mesafeyi, ışığı ve sıcaklığı ölçerek bilgisayara iletir.

İşlemci, yazılımcıların yazdığı algoritma adı verilen adım adım mantık kurallarını çalıştırır.

Yapay zekaya sahip modern robotlar milyonlarca veriyi inceleyerek engelleri tanımayı ve kendi kendine öğrenmeyi başarır.

İnsanlar gibi hissetmezler, ancak saniyede milyarlarca matematiksel olasılığı hesaplayarak en doğru kararı verirler.

> **Kodlama ipucu:** Scratch gibi görsel blok kodlama araçlarıyla sen de kendi robotuna görevler verebilirsin!`
    }
  },
  {
    slug: 'fornybar-energi-for-fremtiden',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Fornybar energi for en grønn fremtid',
      description: 'Hvordan kan vi fange kraften fra sol, vind og brusende elver for å ta vare på planeten vår?',
      body: `Mennesker trenger energi til varme, lys, transport og fabrikker hver eneste dag.

Lenge har verden brent kull, olje og gass, men disse kildene forurenser og tar slutt en dag.

Fornybar energi kommer fra kilder som naturen fyller på hele tiden uten å gå tom.

Solcellepaneler fanger lyspartikler og forvandler dem direkte til ren elektrisk strøm.

Vindturbiner på fjelltopper og ute i havet utnytter luftens bevegelse til å snurre store generatorer.

Vannkraftverk i fossefall lager stabil strøm fra vannets tyngdekraft i kretsløpet.

Ved å satse på fornybar teknologi bygger vi en trygg og renere fremtid for alle som bor på Jorden.

> **Visste du dette?** I Norge kommer nesten all strøm i stikkontaktene fra ren og fornybar vannkraft!`
    },
    tr: {
      title: 'Temiz ve Yenilenebilir Enerji',
      description: 'Güneşin, rüzgarın ve coşkun nehirlerin gücünü yakalayarak dünyamızı nasıl koruyabiliriz?',
      body: `Evlerimizi aydınlatmak, fabrikaları çalıştırmak ve trenleri yürütmek için her gün enerjiye ihtiyaç duyarız.

Yıllarca kömür ve petrol gibi fosil yakıtlar kullanıldı, ancak bunlar havayı kirletir ve bir gün tükenecektir.

Yenilenebilir enerji ise doğanın bize sunduğu ve asla tükenmeyen temiz kaynaklardan elde edilir.

Güneş panelleri gökyüzünden gelen ışık taneciklerini yakalayarak doğrudan elektrik akımına dönüştürür.

Dev rüzgar türbinleri rüzgarın gücüyle dönerek temiz enerji üretir.

Akarsular üzerine kurulan hidroelektrik santralleri ise suyun coşkulu akış gücünü elektriğe çevirir.

Yenilenebilir kaynaklara yönelmek mavi gezegenimizin geleceğine verebileceğimiz en değerli hediyedir.

> **Biliyor muydun?** Güneşten dünyamıza bir saatte ulaşan enerji, tüm dünyanın bir yıllık elektrik ihtiyacından fazladır!`
    }
  }
];

async function main() {
  await calistirParti('Parti 1: Meraklı Kaşif (oppdager)', OPPDAGER_HIKAYELER);
}

main().catch(console.error);
