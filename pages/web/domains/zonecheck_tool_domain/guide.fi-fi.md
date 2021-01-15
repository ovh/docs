---
deprecated: true
title: Verkkotunnuksen ZoneCheck
excerpt: Tässä ohjeessa kerrotaan kuinka tehdään ZoneCheck-toimenpide verkkotunnukselle
slug: verkkotunnuksen_zonecheck
legacy_guide_number: g1980
---


## Vaadittujen kenttien täyttö
ZoneCheck-työkalua[](https://www.zonemaster.net/)  voidaan käyttää varmistamaan haluamasi nimipalvelimien ensisijainen ja toissijainen DNS-konfiguraatio.

Tätä varten sinun on mentävä Zonemaster-sivuille [](https://www.zonemaster.net/)tästä. Klikkaa sitten "Test of an undelegated domain" ja täytä seuraavat kentät:


- Domain name: syötä verkkotunnus, jota haluat testata
- DNS servers: klikkaa nimipalvelinten vieressä olevaa + merkkiä ja syötä sitten palvelimet ja niitä vastaavat IP-osoitteet.
- Klikkaa seuraavaksi "confirm" saadaksesi tulokset



![](images/img_3213.jpg){.thumbnail}


## Tulos
Kun kaavake on vahvistettu, tulos tulee näkyviin hetken kuluttua:


- Jos kaikki on vihreää: Alueesi on täysin oikein. Voit vahvistaa nimipalvelimen vaihdon hallintapaneelissa.

- Jos elementtejä on merkitty punaisella: Tulosten yksityiskohdissa kerrotaan tarvittavat korjaustoimenpiteet.

Huomaa, mikäli elementtejä on punaisella, ei nimipalvelinta voi päivittää ellet tiedä varmasti mitä teet. Toimenpide saatetaan estää, jolloin mitkään verkkotunnukseesi liittyvät palvelut eivät pysty toimimaan.

![](images/img_3211.jpg){.thumbnail}


## Hyödyllistä tietoa
Mikäli tästä työkalusta tai sen toiminnoista heräsi kysymyskiä, suosittelemme tutustumaan ZoneMasterin "FAQ"-osioon.

![](images/img_3212.jpg){.thumbnail}

