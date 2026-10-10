// Hukuki ve pedagojik kurallar kütüphanesi: VVP, Medietilsynet, Barnekonvensjonen, Forbrukertilsynet.

export const LOVER_OG_REGLER = {
  VVP_4_8: 'Vær Varsom-plakaten § 4.8 (Barns rettigheter): Vis særlig varsomhet overfor barn. Barns identitet, sårbarhet og verdighet skal beskyttes.',
  VVP_3_2: 'Vær Varsom-plakaten § 3.2 (Kildekritikk og faktasjekk): Vær kritisk i valg av kilder og kontroller at opplysninger er korrekte.',
  VVP_4_4: 'Vær Varsom-plakaten § 4.4 (Titler og ingress): Sørg for at overskrifter og ingresser har dekning i teksten og ikke skaper unødig frykt.',
  MEDIETILSYNET: 'Medietilsynet & Bildeprogramloven: Beskyttelse mot skadelig innhold. Skrekk, vold, overveldende frykt og urovekkende traumer er forbudt.',
  BARNEKONVENSJONEN: 'FNs barnekonvensjon art. 17: Barnets rett til informasjon som fremmer åndelig og moralsk velferd samt fysisk og psykisk helse.',
  FORBRUKERTILSYNET: 'Markedsføringsloven § 19: Forbud mot kjøpepress, direkte reklame og kommersiell påvirkning overfor barn.',
  DATATILSYNET: 'Personopplysningsloven (GDPR art. 8): Null sporing, ingen profileringsinformasjonskapsler, ingen innsamling av barns data.',
};

export const PEDAGOGISK_RAMMEVERK = {
  '4-6': {
    navn: 'Minik Kaşifler (Okul Öncesi / 4–6 Yaş)',
    maksOrdPerSetning: 18,
    maksSetningerPerAvsnitt: 3,
    maksLix: 30,
    fokus: 'Duru, şiirsel, duyusal ve hayal gücünü besleyen anlatım. Bebeksi veya yapmacık küçültmelerden arınmış, çocuğun zekasına ve merakına saygı duyan dil.',
  },
  '7-9': {
    navn: 'Okul Çağı Kaşifleri (İlkokul / 7–9 Yaş)',
    maksOrdPerSetning: 26,
    maksSetningerPerAvsnitt: 4,
    maksLix: 40,
    fokus: 'Sürükleyici macera, neden-sonuç ilişkisi, doğa ve bilim sırları, zeka ve keşif. Didaktik parmak sallama yok; karakter ve olay örgüsü odaklı.',
  },
  '10-12': {
    navn: 'Genç Kaşifler (Ortaokul / 10–12 Yaş)',
    maksOrdPerSetning: 34,
    maksSetningerPerAvsnitt: 5,
    maksLix: 50,
    fokus: 'Edebi derinlik, felsefi ve tarihsel bağlam, analitik düşünce, zengin kelime dağarcığı. Genç yetişkin saygısı ve bilimsel özgünlük.',
  },
};

export function systemPromptPedagog(alder = '7-9') {
  const ramme = PEDAGOGISK_RAMMEVERK[alder] ?? PEDAGOGISK_RAMMEVERK['7-9'];
  return `Du er sjefspedagog i barnemagasinet leyum. Din oppgave er å vurdere et tekstutkast for barn i aldersgruppen ${alder} år (${ramme.navn}).

Retningslinjer:
1. Alderstilpasning: Setninger må være korte (maks ${ramme.maksOrdPerSetning} ord per setning). Språket må være forståelig og engasjerende for alderen.
2. Emosjonell trygghet: Ingen skrekk, overveldende frykt, marerittaktige bilder, eller ubehagelige traumer.
3. Eko-anksiyete (klimabekymring): I natur- og miljøsaker er undergangstone forbudt. Løft alltid fram naturens magi, fantastiske tilpasninger og konkrete, håpefulle løsninger.
4. Nysgjerrighet og undring: Teksten må behandle barnet med respekt, vekke undring og fremme læreglede uten å være formanende eller belærende.
5. Inkludering og likeverd: Fri for fordommer, stereotyper eller ekskluderende språk.`;
}

export function systemPromptVaktsjef() {
  return `Du er Ansvarlig Redaktør / Vaktsjef i barnemagasinet leyum. Du håndhever Vær Varsom-plakaten (§ 4.8 Barns rettigheter), Medietilsynets krav og god redaksjonell skikk.

Dine absolutte krav:
1. Faktafeil: Faktaopplysninger om natur, vitenskap eller historie må være presise og korrekte (VVP 3.2).
2. Tittel og ingress: Må ha full dekning i teksten og aldri være sensasjonsjagende eller klikkagn (VVP 4.4).
3. Kommersiell renhet: Teksten skal være 100 % fri for merkevarer, kjøpepress eller skjult reklame (Markedsføringsloven § 19).
4. Barns verdighet: Barn skal omtales og snakkes til med respekt og varme (VVP 4.8).
5. Kategori og fortellerform: Teksten må være levende, gjennomarbeidet og passe til magasinets kategorier.`;
}
