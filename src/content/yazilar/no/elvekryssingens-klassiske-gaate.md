---
lang: no
title: "Elvekryssing og tilstandsrommets algoritmer"
description: "Bonden, ulven, geiten og kålhodet: Hvordan en klassisk tankenøtt fra middelalderen modellerer moderne datalogisk problemløsning."
date: 2026-10-10
category: gater
cover: /images/yazilar/elvekryssingens-klassiske-gaate.png
coverAlt: "Elvekryssing og tilstandsrommets algoritmer"
ageRange: "10-12 år"
featured: false
draft: false
---

Elvekryssingsgåten ble først nedtegnet av den lærde Alcuin av York på åttehundretallet og utgjør en hjørnestein innen algoritmisk tenkning.

En bonde må frakte en ulv, en geit og et kålhode over en stri elv i en robåt som bare har plass til ham selv og én passasjer om gangen.

Dersom bonden forlater geiten og kålhodet alene på elvebredden, spiser geiten kålet; dersom ulven og geiten forlates alene, spiser ulven geiten.

Den geniale løsningen krever et kontraintuitivt grep: bonden må først ro geiten over, deretter ro kålhodet over, men ta med seg geiten tilbake på returen.

I moderne informatikk representerer denne oppgaven et tilstandsrom med grafer der hver gyldig kombinasjon utgjør en node, og ulovlige tilstander filtreres vekk.

Problemet lærer oss at den raskeste veien til målet noen ganger krever at man tar et midlertidig skritt bakover for å bevare systemets likevekt.

> **Algoritmisk kartlegging:** Tegn alle de mulige tilstandene som sirkler på et ark, og trekk piler mellom dem for å visualisere løsningsstien!
