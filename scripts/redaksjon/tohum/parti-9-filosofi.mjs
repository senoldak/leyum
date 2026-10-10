import { calistirParti } from './parti-derleyici.mjs';

const FILOSOFI_HIKAYELER = [
  // 4-6 YAŞ (6 KONU - Benlik, arkadaşlık, duygular, adalet, rüyalar ve değişim)
  {
    slug: 'hvem-er-jeg-speilet-og-navnet',
    category: 'filosofi',
    ageRange: '4-6',
    featured: true,
    no: {
      title: 'Hvem er jeg? Undringen foran det store speilet',
      description: 'Når du ser på ditt eget ansikt i glasset; hva er det som gjør akkurat deg til deg?',
      body: `Når du stiller deg foran et stort speil, ser to nysgjerrige øyne tilbake på deg.

Du har et bestemt navn, mykt hår og hender som kan bygge tårn av klosser.

Men du er mer enn bare klærne dine og fargen på jakken din.

Du er også tankene dine, minnene dine og sangene du liker å nynne på.

I hele det enorme universet finnes det ingen annen som er akkurat som deg.

Du er helt unik; et lite menneske som oppdager verden hver eneste dag.

> **Speilblikk:** Se deg selv inn i øynene i speilet; smil til den som står der inne.`
    },
    tr: {
      title: 'Ben Kimim? Aynadaki Yüz ve İsmin Gizemi',
      description: 'Aynanın karşısına geçtiğinde sana bakan iki göz: Seni sen yapan o eşsiz varlık nedir?',
      body: `Büyük bir aynanın karşısına geçtiğinde iki meraklı gözün sana baktığını görürsün.

Senin güzel bir ismin, yumuşacık saçların ve kuleler yapan maharetli ellerin var.

Fakat sen sadece giydiğin kıyafetlerden veya boyundan ibaret değilsin.

Sen aynı zamanda aklından geçen düşünceler, hissettiğin sevgiler ve neşeli şarkılarsın.

Koca evrende senin gibi düşünen ve hisseden bir başkası daha yoktur.

Sen tamamen benzersizsin; dünyayı her sabah yeniden keşfeden harika bir insansın.

> **Ayna Oyunu:** Aynada gözlerinin içine dikkatlice bak; kendine sıcacık bir tebessüm hediye et.`
    }
  },
  {
    slug: 'hva-er-en-god-venn',
    category: 'filosofi',
    ageRange: '4-6',
    no: {
      title: 'Hva vil det si å være en god og ekte venn?',
      description: 'En venn er noen å leke med; men hva skjer når den andre slår seg eller blir lei seg?',
      body: `Det er gøy å leke med klosser eller løpe om kapp i gresset sammen med en venn.

En god venn er noen som lytter når du vil fortelle en hemmelighet.

Hvis vennen din snubler og slår kneet sitt, ler du ikke av fallet.

Du stopper leken, setter deg ned på kneet og spør hvordan det går.

Vennskap er som en usynlig tråd av varme som binder to hjerter sammen.

Når begge hjelper hverandre, blir selv gråværsdager fylt med trygghet og latter.

> **Venneklem:** Tenk på en god venn; husk en gang dere lo godt sammen av noe rart.`
    },
    tr: {
      title: 'Gerçek Bir Arkadaş Olmak Ne Demektir?',
      description: 'Birlikte koşup oynamak harikadır; peki arkadaşın üzüldüğünde yanında olmak neden en değerli şeydir?',
      body: `Bir arkadaşınla çimenlerde koşmak veya oyuncaklarla oynamak günün en tatlı neşesidir.

İyi bir arkadaş, aklına gelen bir fikri heyecanla anlattığında seni dikkatle dinleyendir.

Eğer arkadaşın koşarken düşüp dizini incitirse ona gülmezsin.

Hemen oyununu durdurur, yanına oturur ve nasıl olduğunu şefkatle sorarsın.

Arkadaşlık, iki insanı birbirine bağlayan görünmez ve sıcacık bir sevgi bağıdır.

Birbirinize destek olduğunuzda en zor günler bile neşeyle ve güvenle aydınlanır.

> **Dostluk Hatırası:** En sevdiğin arkadaşını düşün; birlikte kahkahalarla güldüğünüz bir anı hatırla.`
    }
  },
  {
    slug: 'hvorfor-foler-vi-sinne-og-glede',
    category: 'filosofi',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor kjenner vi både sinne og glede inni oss?',
      description: 'Følelser er som skiftende vær over et hav; hvorfor må vi av og til slippe ut et tordenvær før solen titter frem?',
      body: `Noen dager kjenner du deg lett som en ballong som svever mot himmelen; det er glede.

Andre dager velter et mørkt uvær opp i magen; du blir sint eller lei deg.

Følelsene dine er som været ute i naturen; ingen kan bestemme at det bare skal være solskinn.

Sinne hjelper deg å si ifra når noe føles urettferdig eller vondt.

Glede gir kroppen din lyst til å danse, le og klemme andre.

Alle følelsene dine er helt vanlige; de kommer, forteller deg noe, og driver forbi som skyer.

> **Pustebølge:** Når sinnet koker, pust dypt inn gjennom nesen; pust rolig ut og la skyen drive vekk.`
    },
    tr: {
      title: 'İçimizdeki Öfke ve Sevinç Dalgaları Nereden Gelir?',
      description: 'Duygularımız gökyüzündeki hava durumu gibidir: Bazen güneş açar, bazen de bir fırtına kopup diner.',
      body: `Bazı günler kendini gökyüzüne süzülen hafif bir balon gibi neşeli hissedersin.

Bazı anlarda ise içinde aniden kara bulutlar toplanır; öfkelenir veya üzülürsün.

Duyguların doğadaki hava durumu gibidir; her günün güneşli olması gerekmez.

Öfke, bir şeyin haksız veya incitici olduğunu hissettiğinde sesini duyurmana yardım eder.

Sevinç ise kollarına enerji verir; dans etmek ve sevdiklerine sarılmak istersin.

Bütün duygular doğaldır; içimize gelir, bize bir şey söyler ve bulutlar gibi geçip gider.

> **Nefes Egzersizi:** İçinde bir öfke hissettiğinde burnundan derin bir nefes al; sakince vererek bulutun dağılmasını izle.`
    }
  },
  {
    slug: 'hva-er-rettferdighet-a-dele-likt',
    category: 'filosofi',
    ageRange: '4-6',
    no: {
      title: 'Hva er rettferdig når vi skal dele et rødt eple?',
      description: 'Betyr rettferdighet alltid like store biter; eller handler det også om hvem som er mest sulten?',
      body: `Tenk deg at du har et saftig rødt eple som du skal dele med en venn.

Du kan ta en kniv og skjære eplet i to nøyaktig like store halvdeler.

Det virker veldig rettferdig; begge to får like mye fruktkjøtt.

Men hva om vennen din ikke har spist mat hele dagen og er kjempesulten?

Og hva om du nettopp har spist en stor bolle med grøt?

Rettferdighet handler ikke bare om målebånd; det handler også om å se hva den andre trenger.

> **Epletanke:** Neste gang du deler noe godt, spør vennen din hvor sulten hun er først.`
    },
    tr: {
      title: 'Bir Elmayı Paylaşırken Adalet Nedir?',
      description: 'Adalet her zaman her şeyi cetvelle eşit bölmek midir, yoksa kimin neye ihtiyacı olduğuna bakmak mıdır?',
      body: `Masada kıpkırmızı, sulu bir elma olduğunu ve onu arkadaşınla paylaşacağını hayal et.

Bir bıçakla elmayı tam ortadan iki eşit parçaya bölebilirsin.

Bu ilk bakışta çok adil görünür; ikinize de aynı büyüklükte pay düşer.

Peki ya arkadaşın sabahtan beri hiçbir şey yememiş ve çok acıkmışsa?

Sen ise henüz kocaman bir tabak yemek yemiş ve doymuşsan?

Adalet sadece cetvelle ölçmek değildir; karşındakinin ihtiyacını kalbinle anlamaktır.

> **Paylaşım Sorusu:** Bir şeyi paylaşırken arkadaşına önce ne kadar ihtiyacı olduğunu sormayı dene.`
    }
  },
  {
    slug: 'hvor-blir-tankene-av-nar-vi-sover',
    category: 'filosofi',
    ageRange: '4-6',
    no: {
      title: 'Hvor reiser tankene våre når vi drømmer om natten?',
      description: 'Kroppen din ligger helt stille under dynen; men i drømmene kan du fly over hustakene som en fugl.',
      body: `Når lampen slukkes, legger du hodet på puten og lukker øynene.

Kroppen din hviler i sengen og rører nesten ikke på seg.

Men plutselig kan du drømme at du løper barbent over en strand eller flyr.

Hjernen din sover aldri helt; den rydder i alt du så og hørte om dagen.

Den blander minner, ønsker og eventyr sammen til rare og morsomme historier.

Drømmer er hjernens egen nattkino der alt er mulig i mørket.

> **Morgentanke:** Hva drømte du mens du sov? Prøv å huske én morsom farge eller ting før du står opp.`
    },
    tr: {
      title: 'Uykuya Daldığımızda Düşüncelerimiz Nereye Gider?',
      description: 'Bedenin yatağında sessizce dinlenirken rüyalarında gökyüzünde bir kuş gibi uçabilirsin; rüyalar nasıl doğar?',
      body: `Işıklar söndüğünde başını yastığa koyar ve gözlerini kapatırsın.

Bedenin sıcacık yatağında hiç kımıldamadan dinlenmeye çekilir.

Fakat rüyanda kendini deniz kenarında koşarken ya da gökyüzünde uçarken bulabilirsin.

Beynimiz uyurken bile tamamen durmaz; gün boyunca gördüklerini ve duyduklarını düzenler.

Hatıraları, dilekleri ve masalları birbirine karıştırarak rengarenk hikayeler örer.

Rüyalar, zihnimizin geceleri kurduğu ve her şeyin mümkün olduğu sihirli bir sinemadır.

> **Sabah Hatırası:** Uyandığında gördüğün rüyadan tek bir nesneyi ya da rengi hatırlamaya çalış.`
    }
  },
  {
    slug: 'hvorfor-forandrer-ting-seg-arstidene',
    category: 'filosofi',
    ageRange: '4-6',
    no: {
      title: 'Hvorfor står aldri tiden stille i skogen?',
      description: 'Grønne blader blir gule, faller til jorden og blir til ny jord; hvorfor må allting forandre seg?',
      body: `Om våren spretter bittesmå lysegrønne knopper ut på de nakne grenene i skogen.

Om sommeren er treet dekket av dypgrønne blader som gir sval skygge.

Når høsten kommer, skifter bladene farge til brennende gult, rødt og brunt før de faller.

Om vinteren sover treet under et hvitt teppe av snø.

Ingenting i naturen står helt stille; allting vokser, hviler og begynner på nytt.

Hvis ingenting forandret seg, ville det aldri blitt plass til nye blomster eller friske bær.

> **Naturvandring:** Finn et visnet blad på bakken; tenk på at det gir næring til nye skudd til våren.`
    },
    tr: {
      title: 'Zaman ve Değişim: Ağaçlar Neden Hep Başka Görünür?',
      description: 'Yeşil yapraklar sararır, toprağa düşer ve yeni fideleri besler: Doğadaki bu sonsuz değişim döngüsü neden vardır?',
      body: `İlkbaharda çıplak dallarda minicik taze yeşil tomurcuklar uyanır.

Yaz geldiğinde ağaç yemyeşil yapraklarla dolar ve gölgesinde serinleriz.

Sonbaharda yapraklar altın sarısına ve kızıla dönerek sakince toprağa dökülür.

Kışın ise ağaç beyaz kar örtüsünün altında derin bir dinlenmeye çekilir.

Doğadaki hiçbir şey donup kalmaz; her varlık büyür, dinlenir ve yeniden başlar.

Eğer hiçbir şey değişmeseydi, topraktan yeni çiçeklerin ve meyvelerin yeşermesine yer kalmazdı.

> **Toprak Döngüsü:** Yerde kurumuş bir yaprağa bak; onun baharda açacak yeni fidanları besleyeceğini hatırla.`
    }
  },

  // 7-9 YAŞ (8 KONU - Sokrates, doğruluk, cesaret, hayvan zihni, kurallar, güzellik, zaman ve Platon)
  {
    slug: 'sokrates-og-kunsten-a-stille-sporsmal',
    category: 'filosofi',
    ageRange: '7-9',
    featured: true,
    no: {
      title: 'Sokrates og kunsten å stille nysgjerrige spørsmål',
      description: 'I antikkens Aten gikk en filosof barbeint rundt og påsto at han ingenting visste; hvorfor gjorde spørsmålene hans folk klokere?',
      body: `For over to tusen år siden vandret filosofen Sokrates rundt på torget i den greske byen Aten.
      
Han skrev aldri ned en eneste bok og holdt ingen lange taler for store forsamlinger.
      
I stedet stoppet han folk han møtte og stilte enkle spørsmål: «Hva er egentlig rettferdighet?» eller «Hva er mot?»
      
Folk trodde først de visste svaret, men da Sokrates spurte videre, oppdaget de at svarene deres ikke hang sammen.
      
Sokrates sammenlignet seg selv med en jordmor; han hjalp andre mennesker til å føde sine egne kloke tanker.
      
Han ble berømt for ordene: «Det eneste jeg vet, er at jeg ingenting vet.»
      
> **Sokratisk samtale:** Prøv å spørre «hvorfor det?» tre ganger på rad neste gang noen påstår noe som virker helt sikkert.`
    },
    tr: {
      title: 'Sokrates ve Bitmeyen Meraklı Soruların Sanatı',
      description: 'Antik Atina pazarında yalınayak dolaşan bir düşünür: Neden hiçbir şey bilmediğini söyleyerek insanları aydınlattı?',
      body: `İki bin yılı aşkın bir süre önce düşünür Sokrates, Atina sokaklarında yalınayak dolaşır ve insanlarla sohbet ederdi.
      
Hayatı boyunca tek bir kitap bile yazmadı ve kalabalıklara gösterişli nutuklar atmadı.
      
Bunun yerine karşılaştığı kişilere sade sorular sordu: “Adalet nedir?” ya da “Cesaret ne anlama gelir?”
      
İnsanlar önce cevabı bildiklerini sandı; fakat Sokrates derinleştikçe düşüncelerindeki boşlukları fark ettiler.
      
Sokrates kendisini bir ebeye benzetirdi; insanların zihnindeki bilge düşünceleri doğurtmaya yardım ediyordu.
      
Onun en ünlü sözü şuydu: “Bildiğim tek şey, hiçbir şey bilmediğimdir.”
      
> **Sokratik Yöntem:** Birisi kesin görünen bir fikir söylediğinde, peş peşe üç kez “peki ama neden?” diye sorarak düşünmeyi derinleştir.`
    }
  },
  {
    slug: 'hva-er-sannhet-og-hvorfor-lyver-vi',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Hva er sannhet, og hvorfor kan en løgn svi så vondt?',
      description: 'Når en kopp knuses på kjøkkengulvet; hvorfor er det så fristende å skylde på katten selv om samvittigheten brenner?',
      body: `En løgn starter ofte som et lite skjold for å slippe kjeft eller beskytte seg mot ubehag.
      
Kanskje veltet du et vannglass, og i et brøkdels sekund sier du at du ikke rørte det.
      
Men i samme øyeblikk som usannheten er uttalt, oppstår en urolig klump i magen som kalles dårlig samvittighet.
      
Problemet med en løgn er at den krever nye oppdiktede historier for ikke å bli avslørt av andre.
      
Tillit mellom mennesker er som et fint porselensfat; det tar lang tid å bygge, men sprekker raskt hvis man ikke snakker sant.
      
Å fortelle sannheten krever ofte mot, men det renser luften og gjør at andre kan stole på deg.
      
> **Sannhetstest:** Legg merke til hvor lett og fri kroppen føles med en gang du innrømmer en feil du har gjort.`
    },
    tr: {
      title: 'Doğruluk Nedir ve Neden Bir Yalan İçimizi Acıtır?',
      description: 'Mutfakta bir bardak kırıldığında suçu başkasına atmak neden ilk başta kolay, sonrasında ise çok ağır gelir?',
      body: `Bir yalan genellikle azarlanmaktan korktuğumuzda ya da kendimizi korumak istediğimizde ortaya çıkar.
      
Belki masadaki bir bardağı devirdin ve bir anlık telaşla “ben yapmadım” dedin.
      
Fakat bu söz ağzından çıktığı anda içinde vicdan azabı adı verilen ağır bir düğüm oluşur.
      
Yalanın en zor tarafı, ortaya çıkmaması için peşinden başka uydurma hikayeler anlatmak zorunda kalmandır.
      
İnsanlar arasındaki güven porselen bir tabağa benzer; inşa edilmesi uzun sürer ama küçük bir yalanla çatlayabilir.
      
Doğruyu söylemek cesaret ister; ama gerçeği kabul etmek içini ferahlatır ve insanların sana güvenmesini sağlar.
      
> **Ferahlık Testi:** Yaptığın küçük bir hatayı dürüstçe kabul ettiğinde göğsünden kalkan ağırlığı ve rahatlığı fark et.`
    }
  },
  {
    slug: 'hva-betyr-det-a-vare-modig',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Hva betyr det egentlig å være modig når man er redd?',
      description: 'Er modige mennesker de som aldri kjenner frykt, eller er ekte mot å gjøre det rette på tross av at knærne skjelver?',
      body: `Mange tror at det å være modig betyr å aldri være mørkeredd eller aldri grue seg til noe som helst.
      
Men hvis du ikke kjenner frykt i det hele tatt, koster det deg ingenting å kaste deg ut i en situasjon.
      
Ekte mot finnes bare der det også finnes frykt.
      
Modig er den som kjenner hjertet banke hardt i brystet, men likevel tør å gå frem til den som står alene i skolegården.
      
Modig er den som tør å rekke opp hånden og si: «Dette forstår jeg ikke», eller tør å si ifra når noen blir ertet.
      
Mot er ikke fravær av frykt; det er vurderingen av at noe annet er viktigere enn frykten.
      
> **Hverdagsmot:** Å si unnskyld til en venn etter en krangel krever ofte mer mot enn å klatre i det høyeste treet.`
    },
    tr: {
      title: 'Cesur Olmak Nedir? Korkuya Rağmen Adım Atabilmek',
      description: 'Cesur insanlar hiçbir şeyden korkmayanlar mıdır, yoksa dizleri titrese bile doğru olanı yapanlar mıdır?',
      body: `Pek çok kişi cesareti karanlıktan hiç korkmamak veya hiçbir şeyden çekinmemek sanır.
      
Oysa hiç korku hissetmiyorsan tehlikeli bir duruma atılmak senin için bir fedakarlık sayılmaz.
      
Gerçek cesaret ancak korkunun var olduğu yerde doğar.
      
Cesur insan, kalbi küt küt atsa bile teneffüste tek başına oturan arkadaşının yanına gidip elini uzatandır.
      
Cesur insan, sınıfta parmak kaldırıp “bunu anlamadım” diyebilen ya da bir haksızlığa karşı çıkandır.
      
Cesaret korkusuzluk değil; doğru olanın korkudan daha önemli olduğuna karar vermektir.
      
> **Günlük Cesaret:** Bir kavgadan sonra arkadaşından özür dilemek, çoğu zaman en yüksek ağaca tırmanmaktan daha büyük cesaret ister.`
    }
  },
  {
    slug: 'har-dyr-tanker-og-folelser',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Har dyr sine egne tanker og hemmelige følelser?',
      description: 'Når en hund logrer med halen eller en elefant trøster ungen sin; opplever dyr verden på samme måte som oss?',
      body: `I mange århundrer trodde noen filosofer at dyr bare var mekaniske vesener som reagerte på instinkter uten indre liv.
      
Når du ser en hund som venter ved døren og logrer vilt når du kommer hjem, ser du ekte gjensynsglede.
      
Forskning viser at kråker kan huske menneskeansikter i årevis og løse intrikate gåter for å nå en matbit.
      
Elefanter samler seg rundt skjelettene til sine døde flokkmedlemmer og stryker knoklene forsiktig med snabelen i dyp sorg.
      
Dyr bruker kanskje ikke ord med grammatikk som oss, men de har et rikt landskap av følelser, frykt, vennskap og lengsel.
      
Derfor har mennesker et etisk ansvar for å behandle alle levende skapninger med omtanke og respekt.
      
> **Dyreblikk:** Se en hest eller en katt inn i øynene; legg merke til det våkne, oppmerksomme nærværet som ser tilbake.`
    },
    tr: {
      title: 'Hayvanlar da Düşünür ve Duygular Hisseder mi?',
      description: 'Bir köpek kuyruk salladığında veya bir fil yavrusunu sevdiğinde: Hayvanlar dünyayı nasıl algılar ve yaşar?',
      body: `Eski çağlarda bazı düşünürler hayvanların sadece içgüdüleriyle hareket eden hissiz varlıklar olduğunu sanırdı.
      
Oysa eve döndüğünde kapıda seni bekleyen ve kuyruk sallayan bir köpeğe baktığında sevinci açıkça görürsün.
      
Bilimsel araştırmalar kargaların insan yüzlerini yıllarca hatırladığını ve karmaşık bulmacaları çözdüğünü kanıtlamıştır.
      
Filler ölen sürü arkadaşlarının kemikleri etrafında toplanır ve hortumlarıyla onlara dokunarak günlerce yas tutar.
      
Hayvanlar bizim gibi kelimelerle konuşmasa da korku, sevgi, bağlılık ve özlem gibi derin duygular yaşarlar.
      
Bu yüzden insanlık, yeryüzünü paylaştığı tüm canlılara şefkat ve saygıyla yaklaşmakla yükümlüdür.
      
> **Canlı Bakışı:** Bir kedinin veya atın gözlerine dikkatle bak; orada dünyayı merakla izleyen canlı bir bilinç göreceksin.`
    }
  },
  {
    slug: 'hvorfor-trenger-vi-regler-i-et-samfunn',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Hvorfor trenger vi regler når vi leker og lever sammen?',
      description: 'Tenk deg en fotballkamp der ingen følger banegrensene og alle bruker hendene; hva skjer uten felles avtaler?',
      body: `Noen ganger kan regler føles kjedelige, som når du må rydde lekene eller vente på grønt lys i lyskrysset.
      
Men forestill deg en fotballkamp der ingen følger reglene: Alle tar ballen med hendene og sparker motstanderne på leggen.
      
Da slutter fotballen å være fotball, og leken forvandles til rent kaos der bare den sterkeste bestemmer.
      
Regler er i bunn og grunn avtaler vi gjør for at alle skal være trygge og få like muligheter.
      
Trafikkregler sørger for at bilene ikke kolliderer; spilleregler sørger for at leken blir rettferdig og morsom for alle deltakere.
      
Frihet betyr ikke å gjøre hva som helst; ekte frihet oppstår når vi samarbeider under felles rettferdige rammer.
      
> **Regellaging:** Lag et helt nytt spill sammen med en venn; bestem tre enkle regler som gjør at begge har like stor sjanse til å vinne.`
    },
    tr: {
      title: 'Birlikte Yaşarken ve Oynarken Neden Kurallara İhtiyaç Duyarız?',
      description: 'Herkesin kuralsızca elle top tuttuğu bir futbol maçı hayal et: Kurallar özgürlüğümüzü kısıtlar mı yoksa korur mu?',
      body: `Bazen kurallar sıkıcı görünebilir; oyuncakları toplamak ya da kırmızı ışıkta beklemek sabır ister.
      
Fakat kuralların tamamen unutulduğu bir futbol maçı hayal et: Herkes topu elle tutar ve rakibini yere iter.
      
O anda oyun futbol olmaktan çıkar; en güçlünün zorbalık yaptığı kargaşa dolu bir kavgaya dönüşür.
      
Kurallar aslında herkesin güvende olması ve eşit haklara sahip olması için aramızda yaptığımız ortak sözleşmelerdir.
      
Trafik kuralları kazaları önler; oyun kuralları ise oyunun herkes için eğlenceli ve adil olmasını sağlar.
      
Gerçek özgürlük aklına gelen her şeyi yapmak değil; birbirimize saygı duyarak huzurla bir arada yaşayabilmektir.
      
> **Oyun Tasarımı:** Bir arkadaşınla yeni bir oyun icat et; ikinizin de eşit şansı olmasını sağlayan üç temel kural belirle.`
    }
  },
  {
    slug: 'hva-er-skjonnhet-ligger-den-i-oyet',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Hva gjør noe vakkert: naturen eller øyet som ser?',
      description: 'Hvorfor kan to mennesker se på nøyaktig samme maleri eller stein, og den ene synes det er magisk mens den andre går forbi?',
      body: `Hvis du finner en rund, glatt rullestein i fjæra, kan du synes den er det vakreste smykket i verden.
      
En annen person som går forbi, ser kanskje bare en grå klump og kaster den ut i bølgene.
      
Er skjønnheten en egenskap som bor inni selve steinen, eller oppstår den først i blikket til den som beundrer den?
      
Filosofer har diskutert dette i tusenvis av år: Noen mener skjønnhet handler om symmetri og balanse i naturens former.
      
Andre mener at skjønnhet er en følelse som våkner i hjertet basert på minner, følelser og personlig smak.
      
Når du ser skjønnhet i noe som andre overser, skjenker du gjenstanden din egen oppmerksomhet og omtanke.
      
> **Hverdagsblikk:** Finn en helt vanlig ting på rommet ditt; se på den som om du aldri har sett den før og finn én vakker detalj.`
    },
    tr: {
      title: 'Güzellik Nedir? Baktığımız Şeyde mi Yoksa Gözlerimizde mi?',
      description: 'Sahildeki bir çakıl taşı birine bir elmas gibi büyüleyici gelirken diğeri neden yanından geçip gider?',
      body: `Sahilde pürüzsüz yuvarlak bir çakıl taşı bulduğunda onun dünyanın en zarif hazinesi olduğunu düşünebilirsin.
      
Yanından geçen bir başkası ise onu sıradan gri bir taş parçası olarak görüp denize fırlatabilir.
      
Güzellik taşın kendi içinde saklanan bir özellik midir, yoksa ona bakan kişinin gözlerinde mi var olur?
      
Düşünürler yüzyıllardır bu soruyu tartışır: Bazıları güzelliğin doğadaki simetri ve dengeden doğduğunu savunur.
      
Bazıları ise güzelliğin kalbimizdeki hatıralarla, sevgiyle ve merakla uyanan bir duygu olduğuna inanır.
      
Başkalarının fark etmediği bir güzelliği gördüğünde, o nesneye kendi ruhundan ve dikkatinden bir değer katmış olursun.
      
> **Güzellik Avı:** Odandaki sıradan bir eşyaya daha önce hiç görmemiş gibi dikkatle bak; onda güzel bir detay keşfet.`
    }
  },
  {
    slug: 'hva-er-tid-kan-vi-holde-et-sekund',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Hva er tiden: En elv som renner eller noe vi måler?',
      description: 'Når du kjeder deg snegler minuttene seg av sted; når du har det gøy forsvinner en hel time på et blunk. Hva er tid?',
      body: `En klokke på veggen tikker med nøyaktig samme jevne rytme dag og natt: seksti sekunder i hvert eneste minutt.
      
Likevel føles tiden helt forskjellig avhengig av hva du gjør.
      
Når du sitter på et venterom og kjeder deg, føles fem minutter som en hel evighet.
      
Når du bygger med venner eller leker din favorittlek, forsvinner tre hele timer før du rekker å blunke.
      
Fortiden er borte og finnes bare i våre minner; fremtiden har ennå ikke skjedd og finnes bare i våre tanker.
      
Det eneste øyeblikket som virkelig eksisterer akkurat nå, er dette sekundet du leser disse ordene i.
      
> **Sekundopplevelse:** Lukk øynene og tell sakte til ti; kjenn hvordan hvert enkelt sekund glir forbi uten at du kan holde det fast.`
    },
    tr: {
      title: 'Zaman Nedir? Akan Bir Nehir mi Yoksa Bir Ölçü mü?',
      description: 'Sıkıldığında dakikalar bir türlü geçmezken eğlenirken saatler nasıl bir anda uçar gider? Zamanın sırrı.',
      body: `Duvardaki saat gece gündüz aynı tempoyla tıkırdar: Her dakikada tam altmış saniye vardır.
      
Buna rağmen zamanın akışı yaptığımız şeye göre bambaşka hissedilir.
      
Sıkıcı bir bekleme odasında beş dakika koca bir asır gibi uzayabilir.
      
En sevdiğin oyunu oynarken ise koskoca üç saat göz açıp kapayıncaya kadar akıp gider.
      
Geçmiş artık yok olmuştur ve sadece hatıralarımızda yaşar; gelecek ise henüz gelmemiştir ve sadece hayallerimizdedir.
      
Gerçekten var olan tek an, tam şu saniyede bu satırları okuduğun şimdiki zamandır.
      
> **Saniye Deneyi:** Gözlerini kapat ve içinden ona kadar say; geçen her saniyenin avucundan kayıp giden su gibi olduğunu hisset.`
    }
  },
  {
    slug: 'platons-huleligning-skygger-pa-veggen',
    category: 'filosofi',
    ageRange: '7-9',
    no: {
      title: 'Platons huleligning: Skyggene på fjellveggen og sollyset',
      description: 'Antikkens mest berømte filosofiske fortelling om fanger som bare så skygger; hva skjer når noen klatrer opp i lyset?',
      body: `Filosofen Platon fortalte en berømt lignelse om mennesker som levde lenket fast dypt inne i en mørk fjellhule.
      
De kunne bare se rett frem mot huleveggen, der et bål bak dem kastet skygger av figurer som ble båret forbi.
      
Siden fangene aldri hadde sett noe annet, trodde de oppriktig at disse flate skyggene var hele den virkelige verden.
      
En dag slapp en av fangene fri og krøp møysommelig opp den bratte åpningen mot dagslyset.
      
Først ble øynene hans blendet av solen, men etter hvert så han ekte trær, fargerike fugler og den enorme himmelen.
      
Han forsto at skyggene i hulen bare var svake etterligninger av den strålende og mangfoldige sannheten utenfor.
      
> **Skyggeteater:** Lag en skyggefigur med hendene mot en lys vegg; tenk over hvordan skyggen bare viser en liten flik av hånden din.`
    },
    tr: {
      title: 'Platon’un Mağarası: Duvardaki Gölgeler ve Gerçek Işık',
      description: 'Felsefe tarihinin en ünlü alegorisi: Tüm hayatı mağara duvarındaki gölgeleri izlemekle geçen insanlar ve gün ışığının gerçeği.',
      body: `Düşünür Platon, derin ve karanlık bir mağarada zincirlenmiş yaşayan insanlarla ilgili ünlü bir hikaye anlattı.
      
Bu insanlar arkalarındaki ateşin önünden geçen nesnelerin duvara düşen gölgelerini izlerdi.
      
Hayatlarında başka hiçbir şey görmedikleri için, duvardaki o siyah gölgelerin tek gerçek dünya olduğuna inanıyorlardı.
      
Bir gün tutsaklardan biri zincirlerinden kurtuldu ve mağaranın dik çıkışından yukarıya tırmandı.
      
İlk başta gün ışığı gözlerini kamaştırdı; fakat gözleri alıştıkça gerçek ağaçları, kuşları ve parlayan güneşi gördü.
      
Mağaradaki gölgelerin, dışarıdaki muazzam gerçeğin sadece silik birer yansıması olduğunu anladı.
      
> **Gölge Tiyatrosu:** Duvarda ellerinle bir gölge hayvan yap; o gölgenin ellerinin asıl rengini ve dokusunu sakladığını düşün.`
    }
  },

  // 10-12 YAŞ (6 KONU - Theseus'un gemisi, Altın Kural, Özgür irade, Çin odası, Stoacılık, Eudaimonia)
  {
    slug: 'thesevs-skip-og-identitetens-gater',
    category: 'filosofi',
    ageRange: '10-12',
    featured: true,
    no: {
      title: 'Thesevs’ skip: Hva gjør en gjenstand eller et menneske til seg selv?',
      description: 'Hvis hver eneste planke på et skip byttes ut over tid; er det da fortsatt det samme skipet? Filosofiens eldste identitetsgåte.',
      body: `I gresk mytologi vendte helten Thesevs tilbake til Aten etter å ha beseiret labyrintens vokter Minotauros på Kreta.
      
Atenere bevarte det ærverdige treskipet i havnen i århundrer som et nasjonalt minnesmerke.
      
Etter hvert som treverket råtnet i saltvannet, skiftet håndverkere ut planke etter planke med nytt, friskt tømmer.
      
Til slutt var samtlige opprinnelige nagler, bordganger og seil erstattet; ingen fiber fra det opprinnelige skipet var igjen.
      
Filosofene stilte da det uunngåelige spørsmålet: Er dette nøyaktig det samme skipet som Thesevs seilte, eller et helt nytt fartøy?
      
Det samme gjelder menneskekroppen: Omtrent hvert syvende år er nesten samtlige celler i kroppen din fornyet.
      
Likevel føler du deg som den samme personen; identiteten din hviler i strukturen, bevisstheten og minnene, ikke i atomene alene.
      
> **Gåten utvides:** Tenk om noen samlet alle de gamle råtne plankene og bygde et skip av dem; hvilket skip er da det ekte Thesevs-skipet?`
    },
    tr: {
      title: 'Theseus’un Gemisi ve Kimliğin Değişmeyen Özü',
      description: 'Zaman içinde tüm tahtaları yenilenen bir gemi hala aynı gemi midir? Felsefenin asırlık kimlik bilmecesi.',
      body: `Yunan mitolojisinde kahraman Theseus, Girit adasındaki zorlu görevinden Atina’ya ahşap bir gemiyle döndü.
      
Atinalılar bu tarihi gemiyi limanda bir anıt olarak yüzyıllarca özenle korudular.
      
Tuzlu suda çürüyen tahtalar marangozlar tarafından zamanla yenileriyle değiştirildi.
      
Yıllar sonra gemideki bütün kalaslar, çiviler ve yelkenler tamamen yenilenmişti; ilk gemiden tek bir parça kalmamıştı.
      
Düşünürler şu derin soruyu sordu: Bu gemi hala Theseus’un bindiği aynı gemi midir, yoksa yepyeni bir gemi mi olmuştur?
      
Aynı durum insan bedeni için de geçerlidir: Yaklaşık yedi yılda bir vücudumuzdaki hemen her hücre yenilenir.
      
Buna rağmen hepimiz kendimizi aynı insan olarak hissederiz; çünkü kimliğimiz atomların kendisinde değil, hafızamızda ve bilincimizde yaşar.
      
> **Bilmecenin İkinci Kısmı:** Çıkarılan eski çürük tahtalar bir depoda toplanıp yeniden birleştirilseydi, asıl Theseus gemisi hangisi olurdu?`
    }
  },
  {
    slug: 'den-gylne-regel-og-moralske-valg',
    category: 'filosofi',
    ageRange: '10-12',
    no: {
      title: 'Den gylne regel: Etisk kompass på tvers av kulturer og årtusener',
      description: 'Fra Konfutse i Kina til antikkens Hellas; hvordan oppdaget ulike sivilisasjoner nøyaktig samme kjerne for rettferdighet?',
      body: `I det gamle Kina spurte en elev vismannen Konfutse om det fantes ett enkelt ord som kunne rettlede hele livet.
      
Konfutse svarte: «Gjensidighet. Gjør ikke mot andre det du ikke vil at andre skal gjøre mot deg.»
      
Flere tusen kilometer unna formulerte greske tenkere og midtøstlige lærde nøyaktig det samme moralske prinsippet.
      
Dette kalles Den gylne regel, og finnes i praktisk talt alle store etiske tradisjoner og kulturer i menneskehetens historie.
      
Regelen krever empati: Du må mentalt bytte plass med den andre og vurdere handlingen fra mottakerens synsvinkel.
      
Senere formulerte Immanuel Kant sitt kategoriske imperativ: Handle bare etter en regel du vil skal gjelde som allmenn lov for alle.
      
> **Etisk test:** Før du tar et vanskelig valg, spør deg selv: Ville verden vært et godt sted hvis samtlige mennesker handlet nøyaktig slik som jeg gjør nå?`
    },
    tr: {
      title: 'Altın Kural: Bin Yıllar ve Kıtalar Ötesindeki Ahlaki Pusula',
      description: 'Eski Çin’deki Konfüçyüs’ten Antik Yunan’a kadar tüm medeniyetlerin buluştuğu ortak adalet ilkesi.',
      body: `Eski Çin’de bir öğrencisi bilge Konfüçyüs’e bütün bir hayatı yönetecek tek bir temel ilke olup olmadığını sordu.
      
Konfüçyüs şöyle cevap verdi: “Karşılıklılık. Kendine yapılmasını istemediğin şeyi başkasına yapma.”
      
Binlerce kilometre ötede, Antik Yunan filozofları ve Doğu bilgeleri de aynı ahlaki pusulayı kaleme aldı.
      
Tarihte Altın Kural olarak adlandırılan bu ilke, yeryüzündeki neredeyse bütün felsefi ve ahlaki geleneklerin merkezinde yer alır.
      
Bu kural empati gerektirir: Kendini karşındakinin yerine koymalı ve eylemini onun hissettikleri üzerinden değerlendirmelisin.
      
Filozof Immanuel Kant bu fikri ödev ahlakıyla derinleştirdi: Yalnızca herkesin uygulamasını isteyeceğin kurallara göre hareket et.
      
> **Ahlak Pusulası:** Karar verirken kendine şunu sor: Yeryüzündeki bütün insanlar benim şu an yaptığım gibi davransaydı dünya nasıl bir yer olurdu?`
    }
  },
  {
    slug: 'fri-vilje-eller-skjebne-hvor-frie-er-vi',
    category: 'filosofi',
    ageRange: '10-12',
    no: {
      title: 'Fri vilje eller determinisme: Velger vi våre egne handlinger?',
      description: 'Er hvert valg du tar et resultat av fri bevissthet, eller er alt bestemt av tidligere hendelser og hjernens kjemiske prosesser?',
      body: `Når du bestemmer deg for å løfte høyre arm eller velge et eple fremfor en pære, opplever du et fritt valg.
      
Men i fysikkens verden følger hver årsak en uunngåelig virkning; en biljardkule beveger seg strengt etter vinkelen den treffes med.
      
Determinister argumenterer for at universet er en kjede av årsaker og virkninger der alt fra stjerner til hjerneceller følger naturlover.
      
Hvis genene dine, oppveksten din og kjemien i hjernen din bestemmer hva du tenker, hvor fri er da viljen din egentlig?
      
På den andre siden opplever vi moralsk ansvar: Hvis ingen valg er frie, gir det da mening å rose eller klandre noen for handlingene deres?
      
Mange filosofer mener fri vilje handler om evnen til å reflektere over egne ønsker og ta rasjonelle valg basert på verdier.
      
> **Hjernemåling:** Eksperimenter viser at elektriske signaler i hjernen begynner brøkdeler av et sekund før vi bevisst opplever at vi tar et valg.`
    },
    tr: {
      title: 'Özgür İrade ve Belirlenimcilik: Kararlarımızı Gerçekten Biz mi Veririz?',
      description: 'Zihnimizdeki seçimler özgür irademizin sonucu mudur, yoksa doğa kanunları ve beyin kimyasıyla önceden belirlenmiş midir?',
      body: `Bir elmayı bir armuda tercih ettiğinde veya kolunu kaldırdığında tamamen özgür bir seçim yaptığını hissedersin.
      
Fakat fizik dünyasında her neden kaçınılmaz bir sonucu doğurur; bir bilardo topu ancak ona vurulan açıyla hareket eder.
      
Belirlenimcilik felsefesi evrenin katı neden-sonuç zincirleriyle örülü olduğunu, beyin hücrelerimizin de doğa yasalarına uyduğunu öne sürer.
      
Eğer genlerimiz, geçmiş yaşantımız ve hormonlarımız kararlarımızı etkiliyorsa irademiz ne kadar bağımsız olabilir?
      
Öte yandan insanlık ahlaki sorumluluğa inanır: Eğer seçimlerimiz önceden belirlenmişse bir insanı iyiliği veya kötülüğü için takdir etmek mümkün olur mu?
      
Pek çok düşünür, özgür iradenin arzularımız üzerine düşünüp değerlerimize göre bilinçli tercihler yapabilme gücümüz olduğunu savunur.
      
> **Beyin Sinyali:** Nörolojik deneyler, bir hareketi yapmaya bilinçli olarak karar vermeden saliseler önce beyinde elektriksel sinyallerin başladığını gösterir.`
    }
  },
  {
    slug: 'tankeeksperimentet-om-det-kinesiske-rommet',
    category: 'filosofi',
    ageRange: '10-12',
    no: {
      title: 'Det kinesiske rommet: Kan en datamaskin noen gang tenke ekte?',
      description: 'John Searles berømte tankeeksperiment som utfordrer ideen om at kunstig intelligens forstår ordene den setter sammen.',
      body: `I 1980 presenterte filosofen John Searle et tankeeksperiment som rystet synet på datamaskiners bevissthet.
      
Forestill deg en person som er låst inne i et rom og som ikke forstår et eneste ord kinesisk.
      
Gjennom en luke mottar personen lapper med kinesiske tegn, sammen med en stor regelbok skrevet på hans eget morsmål.
      
Regelboken gir instruksjoner: «Når du ser tegn X, skal du lete opp tegn Y og skyve det ut gjennom luken.»
      
For folk utenfor rommet virker svarene perfekte og flytende; de tror at personen inne i rommet behersker kinesisk flytende.
      
I realiteten manipulerer personen bare abstrakte symboler etter et regelsett uten å ane hva ordene betyr.
      
Searle konkluderte med at datamaskiner har syntaks, men mangler semantikk: De kan behandle koder uten å forstå innholdet.
      
> **Bevissthetskløft:** En datamaskin kan regne ut nøyaktig når vann koker, men den opplever aldri varmen fra kokende vann.`
    },
    tr: {
      title: 'Çin Odası Deneyi: Bir Bilgisayar Gerçekten Düşünebilir mi?',
      description: 'John Searle’ün ünlü deneyi: Yapay zeka sembolleri kusursuzca eşleştirirken anlamın farkında olabilir mi?',
      body: `1980 yılında düşünür John Searle, makinelerin bilinci hakkında dünyayı derinden sarsan bir düşünce deneyi tasarladı.
      
Bir odada tek bir kelime bile Çince bilmeyen bir insanın kilitli olduğunu hayal et.
      
Odadaki kişiye kapının altından üzerinde karmaşık Çince harfler olan kağıtlar uzatılır.
      
İçerideki kişinin elinde kendi dilinde yazılmış devasa bir kural kitabı vardır: “Şu şekli gördüğünde şu şekli bul ve dışarı uzat.”
      
Dışarıdaki insanlar kusursuz cevaplar aldıklarında içerideki kişinin ana dili gibi Çince konuştuğunu zanneder.
      
Oysa içerideki kişi sembollerin ne anlama geldiğini hiç bilmeden yalnızca mekanik kuralları uygulamıştır.
      
Searle buradan yola çıkarak bilgisayarların kuralları işleyebildiğini fakat anlamı ve hissi asla kavrayamadığını öne sürdü.
      
> **Bilinç Uçurumu:** Bir bilgisayar suyun kaç derecede kaynayacağını kusursuzca hesaplayabilir; fakat kaynar suyun sıcaklığını hiçbir zaman hissedemez.`
    }
  },
  {
    slug: 'stoikerne-og-kunsten-a-finne-indre-ro',
    category: 'filosofi',
    ageRange: '10-12',
    no: {
      title: 'Stoisismen: Kunsten å skille mellom det vi kan styre og det vi må tåle',
      description: 'Fra keiser Marcus Aurelius til slaven Epiktet; hvordan fant antikkens tenkere urokkelig sjelefred midt i stormfulle tider?',
      body: `I antikkens Hellas og Roma utviklet filosofene en praktisk livslære som kalles stoisisme.
      
Kjernen i stoikernes tenkning var et skarpt skille: Noen ting i tilværelsen har vi full kontroll over, mens andre ting er utenfor vår makt.
      
Vi kan styre våre egne tanker, våre handlinger, våre holdninger og hvordan vi behandler andre mennesker.
      
Vi kan derimot ikke styre været, hva andre tenker om oss, sykdom eller uforutsette ulykker.
      
Slaven Epiktet påpekte at det aldri er selve hendelsene som sårer oss, men våre egne oppfatninger om det som skjer.
      
Ved å akseptere det vi ikke kan endre og ta fullt ansvar for våre egne reaksjoner, oppnås en dyp og urokkelig indre ro.
      
> **Stoikernes kompass:** Når du møter motgang, spør deg selv: «Er dette innenfor eller utenfor min kontroll?» Fokuser all kraft på det første.`
    },
    tr: {
      title: 'Stoacılar ve İç Huzur: Değiştirebileceklerimiz ve Kabulleniş',
      description: 'İmparator Marcus Aurelius’tan köle Epiktetos’a: Fırtınalı bir dünyada sarsılmaz bir ruh dinginliği nasıl inşa edilir?',
      body: `Antik Yunan ve Roma’da düşünürler stoacılık adı verilen pratik ve güçlü bir yaşam felsefesi geliştirdi.
      
Stoacıların temel öğretisi sade bir ayrıma dayanır: Hayatta bazı şeyler kontrolümüz altındadır, bazı şeyler ise kontrolümüz dışındadır.
      
Kendi düşüncelerimizi, davranışlarımızı, dürüstlüğümüzü ve olaylara verdiğimiz tepkileri tamamen kontrol edebiliriz.
      
Fakat havayı, başkalarının hakkımızdaki fikirlerini ya da başımıza gelen talihsizlikleri kontrol edemeyiz.
      
Kölelikten bilgeliğe yükselen Epiktetos, insanları üzen şeyin olaylar değil, olaylar hakkındaki yorumları olduğunu söylemiştir.
      
Değiştiremeyeceğimiz şeyleri vakarla kabullenip sadece kendi erdemimize odaklanarak sarsılmaz bir iç huzura ulaşabiliriz.
      
> **Stoacı Pusula:** Bir zorlukla karşılaştığında kendine sor: “Bu benim kontrolümde mi, yoksa kontrolüm dışında mı?” Tüm enerjini kontrol edebileceğin alana ver.`
    }
  },
  {
    slug: 'hva-er-et-godt-liv-aristoteles-og-eudaimonia',
    category: 'filosofi',
    ageRange: '10-12',
    no: {
      title: 'Aristoteles og eudaimonia: Hva kjennetegner et meningsfullt menneskeliv?',
      description: 'Er lykke bare flyktig moro, eller er det å blomstre som menneske ved å bruke sine evner til felleskapets beste?',
      body: `I antikkens Aten observerte filosofen Aristoteles at alle menneskelige handlinger søker mot et mål.
      
Vi spiser for å få energi, vi sover for å hvile, og vi studerer for å tilegne oss kunnskap.
      
Men hva er det ytterste målet for selve livet, det vi ønsker for dets egen skyld og ikke som et middel til noe annet?
      
Aristoteles kalte dette målet for eudaimonia, et begrep som best oversettes med menneskelig oppblomstring og et vellykket liv.
      
Han mente at et godt liv ikke bare er overfladisk nytelse eller rikdom, men å utvikle sine beste intellektuelle og moralske dyder.
      
Gjennom Den gylne middelvei søkte han balanse: Mot er for eksempel balansen mellom feighet på den ene siden og hodeløs dumdristighet på den andre.
      
> **Oppblomstring:** Aristoteles sammenlignet mennesket med en eikenøtt; et meningsfullt liv er å vokse og folde seg ut til et mektig eiketre.`
    },
    tr: {
      title: 'Aristoteles ve Eudaimonia: Anlamlı ve İyi Bir Yaşam Nedir?',
      description: 'Mutluluk geçici eğlencelerden mi ibarettir, yoksa insanın erdemleriyle serpilip topluma faydalı bir varlık olması mıdır?',
      body: `Antik Atina’da düşünür Aristoteles, insanların her eyleminin bir amaca yönelik olduğunu fark etti.
      
Enerji almak için yemek yeriz, dinlenmek için uyuruz ve öğrenmek için kitap okuruz.
      
Peki bütün bu amaçların ötesinde, insanın hayat boyunca ulaşmak istediği en nihai ve en yüce amaç nedir?
      
Aristoteles bu hedefe eudaimonia adını verdi; bu kavram insanın potansiyelini gerçekleştirip çiçek gibi açması anlamına gelir.
      
İyi bir yaşamın sadece anlık zevklerde değil, ahlaki erdemleri ve aklı en yüksek düzeyde geliştirmekte saklı olduğunu savundu.
      
Altın Orta Kuralı ile aşırılıklardan kaçındı: Örneğin cesaret, korkaklık ile körü körüne atılganlığın tam ortasındaki dengedir.
      
> **Meşe Palamudu:** Aristoteles insanı bir meşe palamuduna benzetirdi; anlamlı bir yaşam, tohumun kök salıp görkemli bir ağaca dönüşmesidir.`
    }
  }
];

calistirParti('Parti 9: Düşünce & Felsefe (filosofi)', FILOSOFI_HIKAYELER);
