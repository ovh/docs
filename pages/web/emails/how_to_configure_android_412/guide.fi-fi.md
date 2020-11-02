---
deprecated: true
title: 'Webhotellit: Konfigurointi Android 4.1.2 -tabletilla'
excerpt: Konfigurointi Android 4.1.2 -tabletilla
slug: webhotellit_konfigurointi_android_412_-tabletilla
legacy_guide_number: g1283
---


## Vaihe 1: sähköposti
Näpäytä ”Sähköposti”-kuvaketta.

Tässä esimerkissä jaettu sähköpostilaatikko on konfiguroitu POP-tyyppisenä Samsung Tab GT P7510 -tabletilla, Android-versiolla 4.1.2.

Kun lisäät tiliä, varmista että joko WLAN- tai 3G-yhteys on käytössä.

![](images/img_1161.jpg){.thumbnail}


## Vaihe 2: sähköpostitilin konfigurointi
Syötä koko sähköpostiosoitteesi ja salasanasi kuten määrittelit sen [url=”https://www.ovh-hosting.fi/managerv3”]hallintapaneelissa[/url] sähköpostitilillesi.

Näpäytä ”Manuaal. asennus” jatkaaksesi.

![](images/img_1162.jpg){.thumbnail}


## Vaihe 3: sähköpostitilin tyyppi
Valitse tässä vaiheessa ”POP3-tili” jatkaaksesi postitilin konfigurointia.

Jos haluat käyttää IMAP-yhteyttä, syötä tämän ohjeen lopussa olevat asetukset.

![](images/img_1163.jpg){.thumbnail}


## Vaihe 4: sisääntulevan palvelimen asetukset
Syötä oheiset asetukset sähköpostiohjelmaan.

”Käyttäjän nimi”: koko sähköpostiosoitteesi.

”Salasana”: salasanasi kuten määrittelit sen [hallintapaneelissa](https://www.ovh-hosting.fi/managerv3/).

”POP3-palvelin”: syötä SSL0.OVH.NET.

”Suojaustyyppi”: valitse ”SSL (hyväksy kaikki varmenteet)”.

”Portti”: portti on 995.


Näpäytä ”Seuraava” jatkaaksesi.

![](images/img_1164.jpg){.thumbnail}


## Vaihe 5: lähtevän palvelimen asetukset
Syötä lähtevän postin palvelintiedot.

”SMTP-palvelin”: syötä SSL0.OVH.NET.

”Suojaustyyppi”: valitse ”SSL (hyväksy kaikki varmenteet)”.

”Portti”: portti on 465.

”Vaadi sisäänkirjautumista” täytyy olla valittuna.

”Käyttäjätunnus”: koko sähköpostiosoitteesi.

”Salasana”: salasanasi kuten määrittelit sen [hallintapaneelissa](https://www.ovh-hosting.fi/managerv3/).

Näpäytä ”Seuraava” jatkaaksesi.

![](images/img_1165.jpg){.thumbnail}

- Lähtevän palvelimen yhteys on pakollinen asetus, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos yhteyttä ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Lähtevän palvelimen yhteyden on oltava aktivoituna sähköpostien lähettämiseksi.




## Vaihe 6: tilin asetukset
Tässä vaiheessa voit valita eri asetuksia postitilillesi kuten valinnat ”Synkronoinnin aikataulu” ja ”Ruuhka-ajan aikataulu”.

Jatka klikkaamalla ”Seuraava” kun olet määritellyt asetukset haluamiksesi.

![](images/img_1166.jpg){.thumbnail}


## Vaihe 7: viimeistely
Tässä vaiheessa voit nimetä postitilisi ja määritellä lähetettävissä viesteissä näkyvän nimen.

Viimeistelläksesi postitilisi asennuksen, klikkaa ”Valmis”.

![](images/img_1167.jpg){.thumbnail}


## Sähköpostikäyttöliittymä
Tässä on sähköpostiliittymä jota voit nyt käyttää.

Näpäytys yläoikealta mahdollistaa postiasetuksien eri asetusten määrittelyn.

![](images/img_1168.jpg){.thumbnail}


## IMAP-konfigurointitiedot
Jos haluat käyttää IMAP-tyyppistä yhteyttä, syötä seuraavat asetukset.

”Käyttäjän nimi”: myöskin täysi sähköpostiosoitteesi.

”Salasana”: salasanasi kuten määrittelit sen [hallintapaneelissa](https://www.ovh-hosting.fi/managerv3).

”IMAP-palvelin”: syötä SSL0.OVH.NET.

”Suojaustyyppi”: valitse ”SSL (hyväksy kaikki varmenteet)”.

”Portti”: portti on 993.

Alla tiedot lähtevälle IMAP-palvelimelle.

”SMTP-palvelin”: syötä SSL0.OVH.NET

”Suojaustyyppi”: valitse ”SSL (hyväksy kaikki varmenteet)”.

”Portti”: portti on 465.

”Vaadi sisäänkirjautumista” täytyy olla valittuna.

”Käyttäjätunnus”: koko sähköpostiosoitteesi.

”Salasana”: salasanasi kuten määrittelit sen [hallintapaneelissa](https://www.ovh-hosting.fi/managerv3).


## POP-asetukset
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/managerv3/).
Käyttäjätunnus:jaettu sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_protocole_pop_partie_5_parametres_du_serveur_sortant) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-asetukset
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/managerv3/).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#configuration_protocole_pop_partie_5_parametres_du_serveur_sortant) on aktivoitava.


|Portti|SSLaktivoitu|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



