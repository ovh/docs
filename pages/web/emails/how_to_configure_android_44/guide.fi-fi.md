---
deprecated: true
title: 'OVH Sähköpostit: Android versio 4.4 -puhelimen konfigurointiohje'
excerpt: Miten konfiguroidaan sähköposti Android-puhelimelle
slug: ovh_sahkopostit_android_versio_44_-puhelimen_konfigurointiohje
legacy_guide_number: g1347
---


## Vaihe 1: Tilin lisääminen
Mene puhelimen "Asetuksiin".

Esimerkissämme konfiguroimme IMAP-tyyppisen sähköpostitilin Nexus 5  -puhelimeen, jossa on Android 4.4-versio.

Tiliä lisättäessä varmista, että puhelin internetyhteys on aktiivinen.

Valitse "Lisää tili" konfiguroinnin jatkamiseksi.

![](images/img_1510.jpg){.thumbnail}


## Vaihe 2: Tilin tyyppi
Tilin tyypiksi valitaan "IMAP".

On myös mahdollista valita tilin tyypiksi "POP". Tässä tapauksessa käytä ohjeen lopussa löytyviä asetuksia.

![](images/img_1511.jpg){.thumbnail}


## Vaihe 3: Manuaalinen konfigurointi
Syötä sähköpostiosoite kokonaisuudessaan ja salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).

Voit valita "Manuaalinen konfigurointi" jatkaaksesi puhelimen konfigurointia.

![](images/img_1512.jpg){.thumbnail}


## Vaihe 4: Sähköpostiprotokolla
Valitse "IMAP"-protokolla jatkaaksesi.

On myös mahdollista valita "POP". Tässä tapauksessa käytä ohjeen lopussa löytyviä asetuksia.

![](images/img_1513.jpg){.thumbnail}


## Vaihe 5: Tilin konfiguraatio (1)
Määrittele pyydetyt asetukset:

Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.

Salasana: salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).

Palvelin: SSL0.OVH.NET

Portti: 993

Suojaustyyppi: SSL/TLS (hyväksy kaikki varmenteet)

Käyttäessäsi toista konfiguraatiota, käytä ohjeen lopussa löytyviä asetuksia.

Klikkaa "Seuraava" jatkaaksesi konfigurointia.

![](images/img_1514.jpg){.thumbnail}


## Vaihe 6: Tilin konfiguraatio (2)
Määrittele pyydetyt asetukset:

SMTP-palvelin: SSL0.OVH.NET

Portti: 465

Suojaustyyppi: SSL/TLS (hyväksy kaikki varmenteet)

"Vaadi yhteyttä" on oltava rastitettuna.

Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.

Salasana: salasana, jonka olet määrittänyt [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).

Käyttäessäsi toista konfiguraatiota, käytä ohjeen lopussa löytyviä asetuksia.

Klikkaa "Seuraava" jatkaaksesi konfigurointia.

![](images/img_1515.jpg){.thumbnail}

- SMTP-palvelimen yhteys on pakollinen asetus, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos yhteyttä ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Yhteys SMTP-palvelimelle aktivoitava sähköpostien lähettämiseksi.




## Vaihe 7: Tilin asetukset
Eri asetukset ovat valittavissa tai määritettävissä.

Valitse ne asetukset, jotka haluat aktivoida.

Klikkaa "Seuraava" jatkaaksesi konfigurointia.

![](images/img_1516.jpg){.thumbnail}


## Valmis
Päättääksesi tilin lisäämisen puhelin pyytää määrittelemään nimen, joka näytetään sähköpostitilille puhelimessa sekä näytettävä nimi lähteville sähköposteille.

Klikkaa "Seuraava" päättääksesi konfiguroinnin.

![](images/img_1517.jpg){.thumbnail}


## Sähköpostitilin näyttäminen
Nähdäksesi lisätyn tilin tai muokataksesi tilin asetuksia mene "Asetukset" sitten "Tilit" ja valitse "IMAP".

Täältä voi muuttaa tilin asetuksia.

![](images/img_1518.jpg){.thumbnail}


## POP-asetukset
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_dun_telephone_mobile_sous_android_partie_6_configuration_du_compte_2) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-asetukset
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_dun_telephone_mobile_sous_android_partie_6_configuration_du_compte_2) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|




## Samsung Galaxy Note 3
Jos kohtaat virheen:


- Virhe: Autentikointi epäonnistui


Voit yrittää muuttaa käyttäjätunnukseen prosentti-merkin sposti_osoite%esimerkki.fi (@-merkin sijaan).

