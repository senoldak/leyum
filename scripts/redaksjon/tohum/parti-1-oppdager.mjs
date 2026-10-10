import { calistirParti } from './parti-derleyici.mjs';

const OPPDAGER_HIKAYELER = [
  // 4-6 YAŞ (6 KONU - Duru, duyusal, saygın ve bilimsel merak dili; bebek dili kesinlikle yok)
  {
    slug: 'hvorfor-er-skyene-hvite',
    category: 'oppdager',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Hvorfor er skyene på himmelen hvite?',
      description: 'Når solen skinner på den dype himmelen, seiler skyene forbi som krystallklare snøfjell. Hva er hemmeligheten?',
      body: `Himmelen er dyp og blå, men skyene lyser blendende hvitt i dagslyset.

Hver eneste sky består av milliarder av ørsmå vanndråper og krystaller.

Når sollyset treffer dråpene, kastes alle fargene i lyset tilbake samtidig; da ser vi det reneste hvite lyset.

Selv om en sky ser lett ut som damp, bærer himmelen enorme mengder vann over tretoppene.

> **Himmeltitting:** Løft blikket mot de drivende skyene; ser du hvordan formene forandrer seg sakte med vinden?`
    },
    tr: {
      title: 'Bulutlar Gökyüzünde Neden Beyaz Görünür?',
      description: 'Güneş mavi gökyüzünü aydınlatırken bulutlar karlı dağlar gibi parıldar; peki bu beyazlığın gerçek sırrı nedir?',
      body: `Gökyüzünün derin maviliği üzerinde süzülen bulutlar göz alıcı bir beyazlıkla ışıldar.

Her bulut, havada serbestçe asılı duran sayısız su damlacığı ve mikroskobik buz kristalinden oluşur.

Güneş ışığı bu damlacıklara çarptığında ışığın bütün renkleri aynı anda etrafa yansır; gözlerimiz bu birleşimi saf beyaz olarak görür.

Bulutlar gökyüzünde tüy gibi hafif görünse de içlerinde tonlarca su taşırlar.

> **Gökyüzü Seyri:** Başını yukarı kaldırıp geçen bulutları izle; rüzgarın onların şeklini nasıl usulca değiştirdiğini fark edebiliyor musun?`
    }
  },
  {
    slug: 'hvordan-viser-speil-oss',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvordan kaster speilet bildet vårt tilbake?',
      description: 'Når du stiller deg foran speilet, ser du dine egne øyne med en gang. Hvordan sender glasset lyset tilbake?',
      body: `Når du står foran det blanke glasset, møter du ditt eget blikk.

Lyset i rommet treffer kinnene dine først og kastes mot speilflaten.

Bak det klare glasset ligger et syltynt lag med blankt sølvmetall.

Dette glatte metallaget fanger lysstrålene og kaster dem snorrett tilbake til øynene dine.

Slik ser du et krystallklart bilde av deg selv i samme sekund.

> **Lysprøve:** Hold en liten gjenstand foran speilet og se hvordan glasset gjengir hver minste farge og form.`
    },
    tr: {
      title: 'Aynalar Görüntümüzü Bize Nasıl Yansıtır?',
      description: 'Pürüzsüz bir aynanın karşısına geçtiğinde kendi gözlerinle karşılaşırsın; peki cam bu görüntüyü nasıl geri gönderir?',
      body: `Aynanın karşısına geçtiğinde doğrudan kendi bakışlarınla karşılaşırsın.

Odadaki ışık önce yüzüne değer ve oradan aynanın yüzeyine doğru yönelir.

Saydam camın hemen arkasında gümüşten yapılmış son derece ince parlak bir sır tabakası bulunur.

Bu pürüzsüz metal katman ışık ışınlarını yakalar ve dosdoğru gözlerine geri yansıtır.

İşte bu sayede kendi yansımanı o anda hiçbir gecikme olmadan görürsün.

> **Işık Denemesi:** Aynaya doğru küçük bir nesne tut ve camın onun her rengini nasıl birebir yansıttığını incele.`
    }
  },
  {
    slug: 'hvor-kommer-vinden-fra',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvor oppstår den usynlige vinden?',
      description: 'Vinden kan bøye de største trærne og drive seilbåter over fjorden; men hvor starter luftens mektige reise?',
      body: `Vinden er usynlig for øyet, men vi kjenner den mot kinnet og hører suset i løvverket.

Solen varmer opp jordoverflaten og luften som hviler over markene.

Varm luft blir lettere og stiger høyt opp mot himmelen.

Kald og tung luft strømmer straks inn fra siden for å fylle tomrommet.

Denne mektige bevegelsen av luftmasser kaller vi vind.

> **Vindtegn:** Se opp på furutoppene i skogen; selv når vi står stille, viser greinene hvilken retning luften vandrer.`
    },
    tr: {
      title: 'Görünmez Rüzgar Nereden Doğar?',
      description: 'Rüzgar ulu ağaçları eğip tekneleri dalgaların üzerinde yürütür; peki havanın bu güçlü yolculuğu nereden başlar?',
      body: `Rüzgar gözle görünmez; fakat serinliğini tenimizde hisseder, sesini ağaç yapraklarının hışırtısında duyarız.

Güneş ışınları yeryüzünü ve toprak üzerindeki hava katmanını ısıtır.

Isınan hava hafifler ve gökyüzüne doğru yavaşça yükselmeye başlar.

Onun boşalttığı yere daha serin ve ağır hava kütleleri hızla akın eder.

Havanın yeryüzündeki bu kesintisiz akışına rüzgar adını veririz.

> **Rüzgar İşareti:** Çam ağaçlarının tepelerine bak; biz yerde dursak bile dalların eğilişi havanın hangi yöne aktığını fısıldar.`
    }
  },
  {
    slug: 'hvorfor-fester-magneter-seg',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Den usynlige kraften i magneter',
      description: 'En magnet trekker til seg metallgjenstander uten berøring. Hva er denne usynlige kraften?',
      body: `En magnet ser ut som en vanlig jernbit, men bærer på et usynlig kraftfelt.

Når du fører magneten mot jern eller stål, griper kraften tak med et fast klikk.

Kraftfeltet kalles magnetisme og virker tvers gjennom luft, vann og papirark.

Treverk, stein og plast lar seg derimot ikke påvirke av denne kraften.

Naturen skjuler krefter som vi bare kan sanse gjennom virkningen de har.

> **Magnetjakt:** Før en magnet over ulike gjenstander på bordet; hvilke metaller kjenner du at den trekker til seg?`
    },
    tr: {
      title: 'Mıknatısların Görünmez Çekim Gücü',
      description: 'Bir mıknatıs metal parçalarını dokunmadan kendine doğru çeker; peki bu görünmez kuvvet nereden gelir?',
      body: `Mıknatıs sıradan bir metal parçasına benzer; ancak çevresinde görünmez bir çekim alanı barındırır.

Mıknatısı demir veya çeliğe yaklaştırdığında bu güç nesneyi kararlı bir sesle kendine çeker.

Bu kuvvete manyetizma denir; manyetik alan havayı, suyu ve ince kağıtları kolayca aşar.

Ahşap, taş ve plastik gibi maddeler ise bu çekimden kesinlikle etkilenmez.

Doğa, yalnızca etkilerini gördüğümüzde fark edebileceğimiz derin güçlerle doludur.

> **Mıknatıs Deneyi:** Masadaki farklı eşyalara bir mıknatıs yaklaştır; hangi nesnelerin çekildiğini dikkatle gözlemle.`
    }
  },
  {
    slug: 'hvor-blir-solen-av-om-natten',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvor vandrer solen når natten senker seg?',
      description: 'Når kveldshimmelen mørkner og stjernene tennes over hustakene, hvor forsvinner sollyset hen?',
      body: `Når kvelden faller over landskapet, svinner dagslyset og nattehimmelen blir dyp og mørk.

Solen har likevel ikke slukket eller reist sin vei fra universet.

Det er vår egen planet Jorden som langsomt dreier rundt sin egen akse.

Når vårt land vender seg bort fra solen, trer vi inn i nattens skygge.

Samtidig stråler det klare dagslyset ned på byer og hav på den andre siden av kloden.

> **Globuslek:** Drei en globus eller en ball foran en lampe; se hvordan den ene siden bader i lys mens den andre hviler i skygge.`
    },
    tr: {
      title: 'Gece Çökünce Güneş Nereye Gider?',
      description: 'Akşam göğü kararıp yıldızlar evlerin üzerinde parıldamaya başladığında güneş nereye kaybolur?',
      body: `Akşam vadinin üzerine çöktüğünde gün ışığı usulca çekilir ve gökyüzü koyu bir renge bürünür.

Oysa güneş ne sönmüştür ne de gökyüzünden uzaklaşıp gitmiştir.

Dönen aslında üzerinde yaşadığımız Dünya gezegeninin ta kendisidir.

Bulunduğumuz topraklar güneşe arkasını döndüğünde gecenin sakin gölgesine gireriz.

Aynı anda Dünya’nın diğer tarafındaki şehirler ve okyanuslar pırıl pırıl bir gün ışığıyla aydınlanır.

> **Işık Modeli:** Bir lambanın önüne bir elma veya top koyup çevir; bir yüzü aydınlanırken diğer yüzünün gölgede kalışını izle.`
    }
  },
  {
    slug: 'hvorfor-er-sapebobler-runde',
    category: 'oppdager',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor blir svevende såpebobler alltid runde?',
      description: 'Uansett hvilken fasong rammen du blåser gjennom har, lukker boblen seg alltid i en perfekt kule. Hvorfor?',
      body: `Såpebobler svever lydløst i luften og glitrer i regnbuens fineste fargenyanser.

Inne i boblen finnes luft som du har pustet forsiktig ut.

Utenpå danner såpevannet en elastisk og syltynn hinne som omslutter luften.

Vannmolekylene i hinnen trekker seg sammen med like stor kraft fra alle kanter.

Den formen som samler luften på minst mulig flate, er alltid en perfekt kule.

> **Bobleblåsing:** Se nøye på en svevende boble i sollyset; ser du hvordan fargene flyter rundt på kuleflaten før den sprekker?`
    },
    tr: {
      title: 'Sabun Baloncukları Neden Hep Yuvarlaktır?',
      description: 'Üflediğin telin şekli ne olursa olsun, sabun köpüğü havada daima kusursuz bir küreye dönüşür; peki neden?',
      body: `Sabun baloncukları havada sessizce süzülür ve güneş ışığında gökkuşağı renkleriyle parıldar.

Baloncuğun içinde senin üflediğin sakin hava saklıdır.

Dış yüzeyde ise sabunlu su, havayı saran son derece ince ve esnek bir zar oluşturur.

Sudaki moleküller birbirini her yönden eşit bir kuvvetle merkeze doğru çeker.

Bir hacmi en az yüzeyle çevreleyen kusursuz geometrik biçim daima küredir.

> **Işık Halkası:** Güneş ışığı altında süzülen bir baloncuğa yakından bak; yüzeyinde dönen renk desenlerini fark et.`
    }
  },

  // 7-9 YAŞ (8 KONU - Macera, neden-sonuç, bilimsel merak ve duru keşif dili)
  {
    slug: 'hvordan-sover-astronauter-i-rommet',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan sover astronauter om bord på romstasjonen?',
      description: 'I vektløs tilstand finnes det verken gulv, tak, dyner eller vanlige senger. Hvordan hviler man i bane rundt Jorden?',
      body: `Om bord på Den internasjonale romstasjonen faller alt i en evig sirkelbane rundt Jorden; her opplever astronautene fullstendig vektløshet.

Dersom en astronaut bare la seg til å sove fritt i kabinen, ville kroppen drive viljeløst av gårde med luftstrømmen.

De kunne kollidere med følsomme instrumenter eller sette seg fast i trange hjørner mens de sov.

Løsningen er spesialbygde sovekabiner der astronautene fester seg inne i solide soveposer forankret direkte til veggen.

Posen holder armer og bein samlet så kroppen holdes trygt på plass gjennom hele hvileperioden.

I tillegg må kraftige vifter sørge for jevn luftsirkulasjon; uten ventilasjon ville utpustet karbondioksid samle seg som en kvelende boble rundt hodet.

> **Astronautfakta:** Astronauter trenger verken madrass eller pute; i vektløshet hviler alle kroppens muskler helt naturlig uten trykkpunkter.`
    },
    tr: {
      title: 'Astronotlar Uzay İstasyonunda Nasıl Uyur?',
      description: 'Yerçekimsiz ortamda ne zemin vardır ne de tavan. Yörüngede süzülen astronotlar çarpmadan nasıl dinlenir?',
      body: `Uluslararası Uzay İstasyonunda her nesne Dünya yörüngesinde sürekli bir düşüş halindedir; bu durum tam bir yerçekimsiz ortam yaratır.

Bir astronot uzay aracının içinde serbestçe uyumaya kalkışsaydı, hava akımı yüzünden kabinin içinde sürüklenirdi.

Uykusunda duvarlardaki hassas cihazlara çarpabilir ya da dar panellerin arasına sıkışabilirdi.

Bu tehlikeyi önlemek için duvarlara sıkıca sabitlenmiş özel fermuarlı uyku tulumlarında uyurlar.

Tulum, kolların ve gövdenin istemsizce havada dalgalanmasını engelleyerek bedeni sabit tutar.

Ayrıca kabin içinde vantilatörlerin kesintisiz çalışması şarttır; aksi halde nefes verirken çıkan karbondioksit başlarının etrafında birikir.

> **Uzay Bilgisi:** Ağırlıksız ortamda yastığa veya yumuşak yatağa gerek kalmaz; kaslar hiçbir baskı altında kalmadan doğal olarak dinlenir.`
    }
  },
  {
    slug: 'hvordan-kan-fly-flyve',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan kan tunge passasjerfly løfte seg fra rullebanen?',
      description: 'Flere hundre tonn med stål og passasjerer stiger uanstrengt mot skyene. Hvordan skaper vingene denne mektige løftekraften?',
      body: `Et moderne passasjerfly veier like mye som en hel flokk med hvaler, likevel glir det stødig gjennom luftlagene.

Hemmeligheten bak denne bragden ligger i vingeprofilens presise kurve.

Vingens overside er hvelvet, mens undersiden er nesten flat.

Når flyets jetmotorer dytter skroget framover i stor hastighet, må luften over vingen bevege seg raskere enn luften under.

Rask luft skaper et lavere lufttrykk over vingen; det høyere trykket under vingen dytter hele flyet oppover i et fenomen kalt løftekraft.

Så lenge farten fremover opprettholdes, bærer den usynlige luften det massive flyet trygt over kontinentene.

> **Aerodynamisk test:** Hold en papirstrimmel like under leppene og blås kraftig over den; se hvordan papiret straks løfter seg i luftstrømmen.`
    },
    tr: {
      title: 'Tonlarca Ağırlıktaki Uçaklar Havada Nasıl Yükselir?',
      description: 'Yüzlerce tonluk dev gövdeler gökyüzünde zarifçe süzülür; kanatlar bu muazzam kaldırma kuvvetini nasıl üretir?',
      body: `Modern bir yolcu uçağı yüzlerce ton ağırlığa ulaşabilir; buna rağmen gökyüzünde son derece dengeli bir şekilde uçar.

Bu mühendislik harikasının temel sırrı kanat profilinin aerodinamik yapısında saklıdır.

Uçak kanatlarının üst yüzeyi kavisli, alt yüzeyi ise daha düz bir forma sahiptir.

Motorlar uçağı ileriye doğru yüksek bir hızla ittiğinde, kanadın üstünden geçen hava akımı altındakine göre daha hızlı hareket eder.

Akışkanlar mekaniğine göre hızlanan havanın basıncı düşer; alttaki yüksek basınç uçağı yukarı doğru güçlü biçimde kaldırır.

İleriye doğru hareket devam ettiği müddetçe, hava kütlesi tonlarca ağırlıktaki bu devasa aracı gökyüzünde taşır.

> **Basit Deney:** İnce bir kağıt şeridini alt dudağının hemen altına tut ve üstünden kuvvetlice üfle; kağıdın hızla yukarı kalktığını göreceksin.`
    }
  },
  {
    slug: 'nar-viser-regnbuen-seg',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Når og hvordan oppstår regnbuens spekter på himmelen?',
      description: 'Hvorfor krever naturen både regnvær og strålende solskinn samtidig for at regnbuen skal åpenbare seg?',
      body: `En regnbue oppstår aldri tilfeldig; den krever en presis geometrisk vinkel mellom solen, regndråpene og øynene dine.

For å få øye på fenomenet må du stå med ryggen mot solen og se mot et område der det faller regn.

Når det hvite sollyset trenger inn i en regndråpe, fungerer vanndråpen som et naturlig optisk prisme.

Lyset bremses opp og brytes; deretter reflekteres det på innsiden av dråpen og brytes på ny idet det forlater vannet.

Fordi ulike bølgelengder av lys brytes i ulike vinkler, spres fargene ut i en ren bue fra rødt til fiolett.

Dersom du betrakter en regnbue fra et fly høyt over bakken, danner den faktisk en fullstendig sirkel.

> **Optisk observasjon:** Se etter neste gang det dannes en dobbel regnbue; den ytre buen har alltid fargene i omvendt rekkefølge.`
    },
    tr: {
      title: 'Gökkuşağının Renkleri Ne Zaman ve Nasıl Belirir?',
      description: 'Gökyüzünde bir gökkuşağının açması için neden hem parlayan bir güneş hem de yağmur damlaları gerekir?',
      body: `Gökkuşağı gökyüzünde rastlantı eseri belirmez; güneş, yağmur damlaları ve senin bakış açın arasında kusursuz bir geometri gerektirir.

Gökkuşağını görebilmek için sırtını güneşe vermeli ve yağmurun yağdığı alana doğru bakmalısın.

Güneşten gelen beyaz ışık havadaki su damlalarına girdiğinde, her damla doğal bir cam prizma görevi üstlenir.

Işık damlanın içine geçerken kırılır, arka iç yüzeyden yansır ve dışarı çıkarken tekrar kırılarak bileşenlerine ayrılır.

Işığın her rengi farklı bir açıyla kırıldığı için kırmızıdan mora uzanan göz alıcı bir spektrum yay çizer.

Bir uçaktan baktığında ufuk engeli kalktığı için gökkuşağının aslında tam bir çember olduğunu görürsün.

> **Optik Ayrıntı:** Çift gökkuşağı gördüğünde dikkatle bak; dıştaki ikinci yayın renk sıralaması birincinin tam tersidir.`
    }
  },
  {
    slug: 'vokser-sjokolade-pa-trær',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Kakaotreet og sjokoladens opprinnelse i regnskogen',
      description: 'Fra modne frukter på trestammer i Mellom-Amerika til krystallisering og foredling; hvordan blir kakaobønner til sjokolade?',
      body: `Sjokoladeplater henger ikke ferdige på grenene, men råvaren stammer fra et fascinerende tre i fuktige tropeskoger.

Kakaotreet bærer store, skinnende frukter som vokser direkte ut av selve trestammen.

Inne i den tykke frukten ligger frøene, kjent som kakaobønner, omgitt av et saftig, hvitt fruktkjøtt.

Bønnene høstes for hånd, gjæres i bananblader for å utvikle den dype smaken, og tørkes grundig i solen.

Deretter brennes og males bønnene til en tykk kakaomasse, før kakaosmør og sukker blandes inn under kontrollert oppvarming.

Gjennom historien verdsatte aztekere og maya-folket kakaodrikken så høyt at bønnene fungerte som edelt betalingsmiddel.

> **Kakaofakta:** Et enkelt kakaotre produserer bare nok bønner hvert år til å lage omtrent en halv kilo ren sjokolade.`
    },
    tr: {
      title: 'Kakao Ağacı ve Çikolatanın Yağmur Ormanlarındaki Yolculuğu',
      description: 'Ağaç gövdesinde açan egzotik meyvelerden mutfaklarımıza uzanan kadim bir botanik ve üretim hikayesi.',
      body: `Paketli çikolatalar elbette dallardan toplanmaz; ancak çikolatanın asıl kaynağı yağmur ormanlarında yetişen kadim bir ağaçtır.

Kakao ağacı, kalın gövdesinden doğrudan fışkıran iri ve sert kabuklu meyveler üretir.

Meyvenin lifli kabuğu yarıldığında içinde beyaz bir meyve özüne gömülü onlarca kakao tohumu çıkar.

Bu tohumlar özenle toplanır, aromalarının gelişmesi için fermente edilir ve güneş altında günlerce kurutulur.

Ardından kavrulan çekirdekler değirmenlerde ezilerek kakao yağı ve kuru kakao tozuna dönüştürülür.

Orta Amerika’daki kadim uygarlıklar kakao tohumlarını öylesine değerli sayarlardı ki onları para yerine alışverişte kullanırlardı.

> **Botanik Notu:** Bir kakao ağacı, bütün bir yıl boyunca ancak birkaç tablet çikolata yapmaya yetecek kadar tohum verir.`
    }
  },
  {
    slug: 'hvordan-reiser-lyden-i-luften',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan forplanter lydbølger seg gjennom luften?',
      description: 'Når en streng slås an eller noen snakker, hvordan reiser usynlige vibrasjoner frem til øret ditt?',
      body: `Hver eneste lyd i verden starter med en fysisk vibrasjon i en gjenstand.

Når du slår på en tromme, rister trommeskinnet frem og tilbake i lynrask takt.

Denne bevegelsen dytter til luftmolekylene like foran skinnet, som igjen støter borti sine nabomolekyler.

Det dannes fortettede bølger av lufttrykk som brer seg utover i rommet som ringer i vannet.

Når disse trykkbølgene treffer trommehinnen i øret ditt, vibrerer hinnen i samme mønster.

Spesialiserte nerveceller oversetter bevegelsen til elektriske signaler som hjernen tolker som toner, ord eller støy.

> **Akustisk eksperiment:** Strekk en gummistrikk mellom to fingre og knips på den; observer hvordan vibrasjonen skaper en klar tone i luften.`
    },
    tr: {
      title: 'Ses Dalgaları Havada Nasıl İlerler?',
      description: 'Bir enstrümanın teline dokunulduğunda veya biri konuştuğunda, görünmez titreşimler kulağımıza nasıl ulaşır?',
      body: `Duyduğumuz her ses, bir maddenin bulunduğu ortamda fiziksel olarak titreşmesiyle başlar.

Bir davulun derisine vurduğunda yüzey mikroskobik bir hızla ileri ve geri hareket eder.

Bu titreşim deriye temas eden hava moleküllerini sıkıştırır ve birbirine doğru iter.

Moleküllerin bu zincirleme hareketi, göle atılan bir taşın yarattığı halkalar gibi havada dalga dalga yayılır.

Ses dalgası kulağına ulaştığında kulak zarını aynı frekansta titreştirir.

İç kulaktaki duyarlı hücreler bu mekanik hareketi sinir sinyallerine çevirir ve beynimiz bunları ses olarak algılar.

> **Titreşim Gözlemi:** İki parmağın arasına bir paket lastiği gerip hafifçe çekip bırak; titreşimin havada nasıl net bir ton ürettiğini duy.`
    }
  },
  {
    slug: 'hvordan-dukker-ubater',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan kontrollerer ubåter sin oppdrift under vann?',
      description: 'Tusenvis av tonn med solid stål kan både flyte på overflaten og sveve vektløst i havets dyp. Hvordan virker fysikken?',
      body: `En ubåt må kunne mestre to motstridende krefter: tyngdekraften som trekker ned, og oppdriften som løfter opp.

Skroget er utstyrt med store rom langs sidene som kalles ballasttanker.

Når ubåten seiler på overflaten, er tankene fylt med luft, noe som gjør farkostens samlede tetthet lavere enn vannets.

For å dykke åpner man ventiler på toppen av tankene slik at sjøvann fosser inn fra bunnen og fortrenger luften.

Når ubåtens vekt nøyaktig matcher vekten av det fortrengte vannet, oppnår den nøytral oppdrift og svever stabilt i dypet.

Når mannskapet vil stige til overflaten igjen, presses sjøvannet ut med kraftig komprimert luft.

> **Marinefakta:** Ubåter navigerer i stummende mørke ved hjelp av sonar, som sender ut lydpulser og lytter til ekkoet fra havbunnen.`
    },
    tr: {
      title: 'Denizaltılar Suyun Derinliklerine Nasıl Dalar ve Yükselir?',
      description: 'Tonlarca çelikten yapılmış devasa bir araç denizde hem yüzebilir hem de derinliklerde asılı kalabilir; peki nasıl?',
      body: `Denizaltılar Arşimet prensibine dayanan iki temel kuvveti dengeler: yerçekimi ve suyun kaldırma kuvveti.

Gövdenin iç ve dış çeperleri arasında safra tankı adı verilen geniş hazneler yer alır.

Denizaltı su yüzeyindeyken bu hazneler havayla doludur; bu durum aracın toplam yoğunluğunu deniz suyundan daha hafif kılar.

Dalışa geçmek için tankların üst kapakları açılır ve deniz suyu hızla içeri dolarak havayı tahliye eder.

Aracın ağırlığı yer değiştirdiği suyun ağırlığına eşitlendiğinde denizaltı derinliklerde dengede kalarak ilerler.

Yüzeye çıkmak istendiğinde ise yüksek basınçlı hava tanklara basılarak su dışarı atılır ve araç tekrar hafifler.

> **Sonar Teknolojisi:** Denizaltılar zifiri karanlık derinliklerde ses dalgaları yayarak ve bu dalgaların yankısını dinleyerek yön bulur.`
    }
  },
  {
    slug: 'hvordan-finner-kompasset-nord',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvordan peker kompassnålen alltid mot nord?',
      description: 'Uansett hvor du snur deg i en ukjent skog eller på havet, søker den lette metallnålen nordpolen. Hva styrer den?',
      body: `Et kompass er et av de eldste og mest pålitelige navigasjonsredskapene menneskeheten har utviklet.

Selve nålen er en tynn metallbit som er blitt magnetisert og balansert på en sylskarp spiss slik at den roterer friksjonsfritt.

Planeten Jorden fungerer som en gigantisk magnet med en flytende kjerne av smeltet jern dypt i sitt indre.

Denne jernkjernen skaper et usynlig magnetfelt som strekker seg tusenvis av kilometer ut i verdensrommet.

Kompassnålens magnetiske pol påvirkes av Jordens magnetfelt og retter seg automatisk inn langs feltlinjene mot nord.

Selv i tykk tåke eller stormvær gir denne usynlige naturkraften en urokkelig retningslinje for reisende.

> **Eksperiment på kjøkkenet:** Gni en synål mot en kjøleskapsmagnet, legg den forsiktig på et flytende løvblad i en skål med vann, og se den finne nord.`
    },
    tr: {
      title: 'Pusula İbresi Kuzeyi Nasıl Kusursuzca Gösterir?',
      description: 'Sık bir ormanda ya da açık denizde nereye dönersen dön, serbestçe salınan ince ibre daima kuzeye yönelir; neden?',
      body: `Pusula, insanlık tarihinin yön bulmak amacıyla geliştirdiği en sade ve güvenilir araçlardan biridir.

Pusulanın içindeki ince metal ibre mıknatıslanmış bir çeliktir ve sivri bir mil üzerinde sürtünmesizce döner.

Üzerinde yaşadığımız Dünya gezegeni, merkezindeki erimiş demir çekirdeği sayesinde devasa bir mıknatıs gibi davranır.

Bu çekirdek gezegenin çevresinde binlerce kilometre boyunca uzanan görünmez bir manyetik alan üretir.

Pusula ibresi bu manyetik alanın çizgilerine kapılarak kendiliğinden hizalanır ve ibrenin ucu daima kuzeyi işaret eder.

Sisli havalarda veya fırtınalı gecelerde bile bu evrensel kuvvet kaşiflere güvenilir bir rehberlik sunar.

> **Evde Pusula:** Bir dikiş iğnesini mıknatısa sürt, bir su kabındaki mantar parçasının üzerine koy ve iğnenin kuzeye dönüşünü izle.`
    }
  },
  {
    slug: 'hvorfor-har-snoflak-seks-kanter',
    category: 'oppdager',
    ageRange: '7-9',
    no: {
      title: 'Hvorfor har snøkrystaller alltid seks armer?',
      description: 'Hvert snøfnugg er et mikroskopisk symmetrisk underverk. Hvilke naturlover former denne sekskantede geometrien?',
      body: `Når fuktig luft stiger mot kalde skylag om vinteren, fryser vanndampen direkte til krystaller uten å bli til flytende dråper først.

Måten vannmolekyler binder seg sammen på når de fryser, danner alltid et strengt sekskantet mønster.

Dette molekylære gitteret fungerer som krystallens opprinnelige grunnstein.

Når krystallen driver gjennom skyene, vokser seks identiske armer symmetrisk ut fra sentrum.

Siden alle seks armene opplever nøyaktig samme temperatur og fuktighet til enhver tid, utvikler de seg helt likt.

Likevel følger hvert enkelt snøflak en unik rute mot bakken; derfor finnes det knapt to fullstendig identiske snøkrystaller i verden.

> **Vinterutforskning:** Fang ferske snøfnugg på en mørk ullvott og studer de krystallklare forgreningene under et forstørrelsesglass.`
    },
    tr: {
      title: 'Kar Kristalleri Neden Daima Altıgen Şekilde Büyür?',
      description: 'Gökyüzünden süzülen her kar tanesi mikroskobik bir simetri harikasıdır; bu altı köşeli mimari nasıl kurulur?',
      body: `Kışın nemli hava soğuk bulut katmanlarına ulaştığında su buharı sıvılaşmadan doğrudan katı buz kristallerine dönüşür.

Su molekülleri donma noktasında birbirine bağlanırken kimyasal bağları nedeniyle daima altıgen bir kafes oluşturur.

Bu moleküler yapı kar kristalinin temel çekirdeğini meydana getirir.

Kristal bulutların içinde aşağıya doğru süzülürken merkezden dışarıya doğru altı eşit kol simetrik olarak uzar.

Her altı kol da süzülüş boyunca aynı hava sıcaklığı ve neme maruz kaldığından birbirine eş bir ritimle dallanır.

Her kar tanesi gökyüzünde kendine has farklı bir yolculuk yaptığından, yeryüzünde birbirinin tıpatıp aynısı iki kristal bulmak neredeyse imkansızdır.

> **Kış Gözlemi:** Taze yağan kar tanelerini koyu renkli bir eldivenin üzerine düşür ve büyüteçle altıgen kolların zarif desenini incele.`
    }
  },

  // 10-12 YAŞ (6 KONU - Edebi derinlik, felsefi ve bilimsel olgunluk, zengin kavrayış)
  {
    slug: 'hvorfor-har-jorden-tidssoner',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvorfor deler vi kloden inn i standardiserte tidssoner?',
      description: 'Før jernbanen og telegrafen hadde hver by sin egen soltid. Hvordan skapte Jordens rotasjon behovet for en global tidsavtale?',
      body: `Gjennom mesteparten av historien var tid et strengt lokalt anliggende.

Hver landsby og kystby stilte sine tårnur etter solen; middag var det nøyaktige øyeblikket da solen sto høyest på den lokale himmelen.

Med utbyggingen av jernbanenett og telegraflinjer på 1800-tallet kollapset dette tradisjonelle systemet i et kaos av ruteplaner.

Fordi Jorden bruker omtrent 24 timer på å fullføre en hel rotasjon på 360 grader, beveger dagslyset seg over 15 lengdegrader hver time.

I 1884 samlet diplomater og astronomer seg i Washington for å etablere et enhetlig system med 24 globale tidssoner med nullmeridianen gjennom Greenwich.

Denne standardiseringen knytter i moderne tid satellitter, flyruter og finansmarkeder sammen til en koordinert global rytme.

> **Tankeeksperiment:** Dersom du fløy et supersonisk fly vestover i 1600 kilometer i timen langs ekvator, ville du reise i takt med solen og oppleve evig middag.`
    },
    tr: {
      title: 'Dünya Neden Standart Zaman Dilimlerine Bölünmüştür?',
      description: 'Demiryolları ve telgraftan önce her kasaba kendi yerel güneş saatini kullanırdı; küresel zaman düzeni nasıl doğdu?',
      body: `İnsanlık tarihinin büyük bölümünde zaman kavramı tamamen yerel bir ölçümden ibaretti.

Her şehir ve liman kendi kule saatini Güneşin gökyüzünde ulaştığı en yüksek tepe noktasına göre ayarlar, öğle vaktini buna göre belirlerdi.

19. yüzyılda kıtaları saran demiryolları ve telgraf hatları yaygınlaşınca, farklı yerel saatler sefer tarifelerinde büyük bir karmaşaya yol açtı.

Dünya kendi ekseni etrafındaki 360 derecelik tam bir dönüşü yaklaşık 24 saatte tamamladığı için, Güneş ışığı saatte 15 boylamlık bir yay çizer.

1884 yılında toplanan uluslararası konferans, Greenwich gözlemevini başlangıç meridyeni kabul ederek yerküreyi 24 eşit zaman dilimine böldü.

Bu küresel mutabakat günümüzde uyduların, havayolu ağlarının ve iletişim sistemlerinin kusursuz bir senkronizasyonla işlemesini sağlar.

> **Zaman Düşüncesi:** Ekvator çizgisi üzerinde batıya doğru saatte yaklaşık 1600 kilometre hızla uçabilseydin, Güneşin batışına hiç şahit olmadan sonsuz bir öğle vaktinde kalırdın.`
    }
  },
  {
    slug: 'hva-er-et-sort-hull',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hva er egentlig et sort hull i astrofysikken?',
      description: 'Steder i rommet der masse er komprimert så voldsomt at selve romtiden krummer seg, og ikke engang lyset slipper unna.',
      body: `Et sort hull representerer en av de mest ekstreme forutsigelsene i Albert Einsteins generelle relativitetsteori.

Når en stjerne med mange ganger Solens masse brenner ut sitt kjernefysiske drivstoff, opphører det utoverrettede trykket som holder stjernen stabil.

Kjernen kollapser under sin egen uimotståelige gravitasjon og presses sammen til en teoretisk singularitet med uendelig tetthet.

Rundt dette punktet oppstår en usynlig grenseflate kjent som hendelseshorisonten.

Innenfor denne terskelen er romtidens krumning så bratt at unnslippelseshastigheten overgår lysets hastighet på nesten 300 000 kilometer i sekundet.

Selv om det sorte hullet i seg selv er usynlig, røper det sitt nærvær gjennom den glødende gassen som virvler rundt horisonten i en akkresjonsskive.

> **Kosmisk sentrum:** I hjertet av vår egen galakse, Melkeveien, hviler Sagittarius A*, et supermassivt sort hull med massen til fire millioner soler.`
    },
    tr: {
      title: 'Astrofizikte Karadelik Kavramı ve Olay Ufku',
      description: 'Maddenin öylesine yoğunlaştığı kozmik bölgeler ki, uzay-zaman bükülür ve evrenin en hızlı şeyi olan ışık bile oradan kaçamaz.',
      body: `Karadelikler, Albert Einstein’ın genel görelilik kuramının evrene kazandırdığı en büyüleyici ve radikal kavramlardan biridir.

Güneşten katbekat büyük dev bir yıldız nükleer yakıtını tükettiğinde, çekirdeği dengede tutan iç basınç aniden çöker.

Yıldız kendi muazzam kütleçekim kuvvetinin etkisiyle içe doğru büzülerek sonsuz yoğunluktaki bir tekillik noktasına sıkışır.

Bu merkez noktasının etrafında olay ufku adı verilen geri dönüşü olmayan kuramsal bir sınır oluşur.

Olay ufkunu geçen hiçbir madde veya bilgi, saniyede 300 bin kilometre hızla hareket eden ışık dahi, bu çekim alanından kurtulamaz.

Gökbilimciler karadeliği doğrudan göremeseler de, olay ufkunun hemen dışındaki gazların dönerken yaydığı yoğun ışıma sayesinde varlığını belgelerler.

> **Galaktik Merkez:** Samanyolu galaksimizin tam kalbinde Güneşin yaklaşık dört milyon katı kütleye sahip Sagittarius A* adlı dev bir süper kütleli karadelik yer alır.`
    }
  },
  {
    slug: 'hvordan-strommer-elektrisitet',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvordan forflytter elektrisk ladning seg i ledere?',
      description: 'Når du trykker på bryteren, tennes lyset momentant; men hvordan beveger de enkelte elektronene seg inne i metallet?',
      body: `Elektrisitet er en fundamental naturkraft som driver hele den moderne sivilisasjonens infrastruktur.

I metalliske stoffer som kobber er atomkjernene organisert i faste krystallgittere, mens de ytterste elektronene er frie til å vandre mellom atomene.

Disse frie elektronene danner en slags elektrongass i lederen.

Når en spenningskilde kobles til en lukket krets, opprettes det et elektrisk felt langs hele ledningens lengde.

Selve det elektriske feltet forplanter seg med nesten lysets hastighet, noe som forklarer hvorfor lampen tennes på et brøkdels sekund.

De enkelte elektronene driver derimot ganske langsomt fremover i kollisjon med metallatomene, en bevegelse som kalles driftshastighet.

> **Fysisk faktum:** Mens signalet i kretsen brer seg i svimlende fart, beveger et elektron i en vanlig lommelyktledning seg med bare brøkdeler av en millimeter per sekund.`
    },
    tr: {
      title: 'Elektrik Akımı İletken Tellerde Nasıl İlerler?',
      description: 'Düğmeye bastığın an oda ışıkla dolar; peki bakır tellerin atomik yapısında elektronlar gerçekte nasıl hareket eder?',
      body: `Elektrik akımı, modern uygarlığın tüm teknolojisini ve bilgi ağlarını besleyen temel bir fiziksel olgudur.

Bakır gibi iletken metallerde atom çekirdekleri düzenli bir kafes yapısı oluştururken, en dıştaki elektronlar atomlar arasında serbestçe dolaşabilir.

Bu serbest parçacıklar iletkenin içinde adeta bir elektron denizi meydana getirir.

Devreye bir gerilim uygulandığında telin her iki ucu arasında anında güçlü bir elektrik alanı kurulur.

Elektrik alanının iletken boyunca yayılma hızı ışık hızına oldukça yakındır; anahtara bastığımız an ampulün yanması bu yüzdendir.

Ancak atomlarla sürekli çarpışan bağımsız elektronların fiziksel sürüklenme hızı son derece yavaştır ve saatte yalnızca birkaç santimetreyi bulur.

> **Fiziksel Gerçek:** Elektriksel enerji dalgası inanılmaz bir hızla yayılırken, elektronların tel içindeki kendi ilerleyişi bir salyangozdan bile daha sakindir.`
    }
  },
  {
    slug: 'hvordan-ser-teleskoper-fortiden',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvorfor er store teleskoper vinduer inn i universets fortid?',
      description: 'Lyset bruker tid på å krysse kosmiske avstander. Når vi retter speilene mot fjerne galakser, ser vi milliarder av år bakover.',
      body: `I hverdagen opplever vi at synsinntrykk skjer øyeblikkelig, men i kosmisk målestokk har lyset en endelig hastighet.

Lyset beveger seg gjennom vakuum i nøyaktig 299 792 kilometer i sekundet.

Dette betyr at sollyset som treffer bakken, forlot soloverflaten for over åtte minutter siden.

Når astronomer retter avanserte romteleskoper mot stjernetåker og fjerne galaksehoper, har lyspartiklene reist over ufattelige avstander.

Lyset fra en galakse ti milliarder lysår unna viser dermed hvordan galaksen så ut for ti milliarder år siden, like etter universets barndom.

Astronomiske observatorier fungerer derfor som ekte tidsmaskiner som lar oss kartlegge stjernenes og galaksernes opprinnelige evolusjon.

> **James Webb-innsikt:** James Webb-teleskopet benytter infrarøde detektorer for å fange opp lys som har blitt strukket ut av universets ekspansjon gjennom milliarder av år.`
    },
    tr: {
      title: 'Dev Uzay Teleskopları Evrenin Geçmişine Nasıl Bakar?',
      description: 'Işık kozmik mesafeleri aşarken zaman harcar; uzak galaksilerin ışığını yakalayan aynalar geçmişi nasıl aydınlatır?',
      body: `Günlük yaşantımızda ışığın anında ulaştığını düşünürüz; ancak evren ölçeğinde ışık sonlu ve ölçülebilir bir hızla seyahat eder.

Işık boşlukta saniyede yaklaşık 300 bin kilometre hızla yol alır.

Bu fiziksel gerçek nedeniyle, şu an gördüğümüz Güneş ışığı aslında sekiz dakika önce yola çıkmış bir enerjidir.

Gökbilimciler devasa teleskopları derin uzaydaki galaksi kümelerine çevirdiklerinde, yakaladıkları fotonlar milyarlarca yıllık bir yolculuktan gelmiştir.

On milyar ışık yılı uzaktaki bir galaksiyi gözlemlediğimizde, onun şimdiki halini değil, evrenin erken dönemindeki halini inceleriz.

Bu sebeple büyük uzay gözlemevleri, evrenin ilk yıldızlarının doğumunu ve ilk galaksilerin oluşumunu belgeleyen birer zaman penceresidir.

> **James Webb Notu:** James Webb Uzay Teleskobu, evrenin genişlemesiyle dalga boyu uzayıp kızıla kayan bu kadim ışığı yakalamak için altın kaplama aynalar kullanır.`
    }
  },
  {
    slug: 'hvordan-tenker-en-robot',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Hvordan bearbeider autonome roboter sanseinntrykk?',
      description: 'Mellom sensorer, mikrokontrollere og maskinlæring; hvordan omsetter maskiner fysiske målinger til målrettet handling?',
      body: `En autonom robot tenker ikke med bevissthet eller følelser, men utfører kontinuerlige sykluser av sanseoppfattelse og beregning.

Gjennom sensorer som optiske kameraer, ultralyd og laserskannere samler roboten inn enorme mengder fysiske måleverdier fra miljøet.

Disse rådataene konverteres til digitale signaler som mates inn i en sentral prosessor.

Algoritmene strukturerer dataene til et internt kart over omgivelsene og beregner sannsynlige ruter for bevegelse.

Med moderne maskinlæringsmodeller kan roboten gjenkjenne mønstre og tilpasse sine reaksjoner basert på tidligere erfaringer.

Til slutt sendes presise elektriske impulser til motorer og aktuatorer som styrer hjul eller gripearmer med millimeternøyaktighet.

> **Robotikk i praksis:** Selvkjørende rovere på Mars må ta egne avgjørelser i steinete terreng fordi radiosignalene fra Jorden bruker opptil tjue minutter på å nå frem.`
    },
    tr: {
      title: 'Otonom Robotlar Çevreyi Nasıl Algılar ve Karar Verir?',
      description: 'Sensörler, işlemciler ve yapay zeka algoritmaları arasında bir döngü: Makineler fiziksel dünyayı nasıl haritalandırır?',
      body: `Otonom bir robot insanlar gibi bilinçle düşünmez; algılama, hesaplama ve eylemden oluşan kesintisiz bir matematiksel döngü işletir.

Lazer tarayıcılar, kameralar ve ultrasonik sensörler yardımıyla robot çevresindeki fiziksel ortamdan saniyede binlerce ölçüm toplar.

Bu ham veriler dijital sinyallere dönüştürülerek merkezi işlem birimine aktarılır.

Algoritmalar mekanın anlık bir koordinat haritasını çıkarır ve en güvenli hareket yolunu olasılık hesaplarıyla belirler.

Yapay zeka modelleri sayesinde robot, karşılaştığı nesneleri tanımayı ve daha önceki verilerden hareketle yeni durumlara uyum sağlamayı öğrenir.

Son aşamada motorlara hassas elektrik sinyalleri gönderilerek tekerlekler veya robotik kollar kusursuz bir dengeyle yönlendirilir.

> **Mars Kaşifleri:** Mars yüzeyindeki robotik keşif araçları kayalık arazide kendi rotalarını belirlemek zorundadır; çünkü Dünya ile iletişim sinyalleri dakikalarca gecikmeyle ulaşır.`
    }
  },
  {
    slug: 'fornybar-energi-for-fremtiden',
    category: 'oppdager',
    ageRange: '10-12',
    no: {
      title: 'Teknologien bak fornybare energiressurser',
      description: 'Hvordan omdanner vi solstråling, vindens kinetiske kraft og vannets kretsløp til utslippsfri elektrisitet?',
      body: `Sivilisasjonens energibehov har lenge vært drevet av fossile brensler med alvorlige miljømessige konsekvenser.

Fornybar energi henter derimot kraft fra uuttømmelige kretsløp som solen driver kontinuerlig.

I solceller slår fotoner løs elektroner i silisiumkrystaller gjennom den fotovoltaiske effekten, og skaper direkte likestrøm.

Vindturbiner konverterer luftmassenes kinetiske energi til mekanisk rotasjon som driver kraftige magnetiske generatorer.

Vannkraftverk utnytter regnets og snøsmeltingens potensielle energi idet vannmassene ledes gjennom turbiner med høy virkningsgrad.

Ved å koble disse teknologiene sammen i intelligente strømnett bygger ingeniører et robust og bærekraftig energisystem for fremtiden.

> **Energifakta:** Mengden solenergi som treffer Jordens overflate i løpet av én enkelt time, er mer enn hele menneskehetens samlede årlige energiforbruk.`
    },
    tr: {
      title: 'Yenilenebilir Enerji Teknolojileri ve Geleceğin Dönüşümü',
      description: 'Güneş ışınları, rüzgarın kinetik gücü ve su döngüsü nasıl karbon salımı olmadan temiz elektriğe dönüştürülür?',
      body: `Modern dünyanın artan enerji ihtiyacı uzun yıllar fosil yakıtlarla karşılanmış, bu durum gezegenin iklim dengesini zorlamıştır.

Yenilenebilir enerji sistemleri ise doğanın kesintisiz devam eden döngülerinden beslenerek çevreye zarar vermeden enerji üretir.

Güneş panelleri, silisyum yarı iletkenler üzerine düşen ışık fotonlarının elektronları harekete geçirmesiyle doğrudan elektrik akımı sağlar.

Dev rüzgar türbinleri hava kütlelerinin taşıdığı kinetik enerjiyi mekanik dönme gücüne, oradan da jeneratörler yardımıyla elektriğe çevirir.

Hidroelektrik santralleri ise dağlardan vadiye inen suyun potansiyel enerjisini yüksek verimli türbinlerle temiz bir kaynağa dönüştürür.

Bu sistemlerin akıllı şebekelerle entegre edilmesi, gezegenimizin geleceğini güvence altına alacak en stratejik mühendislik adımıdır.

> **Güneş Potansiyeli:** Yeryüzüne tek bir saat içinde ulaşan güneş enerjisi, tüm insanlığın bir yıllık elektrik tüketimini tek başına karşılayabilecek güçtedir.`
    }
  }
];

async function main() {
  await calistirParti('Parti 1: Meraklı Kaşif (oppdager)', OPPDAGER_HIKAYELER);
}

main().catch(console.error);
