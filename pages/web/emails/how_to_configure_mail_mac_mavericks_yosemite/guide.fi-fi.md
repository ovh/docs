---
deprecated: true
title: 'Webhotellit: MACin Mailin konfigurointi - Mavericks ja Yosemite'
excerpt: ''
slug: webhotellit_macin_mailin_konfigurointi_-_mavericks_ja_yosemite
legacy_guide_number: g1599
---


## OVH:n sähköpostitilisi Mac-tietokoneeseen yhdellä klikkauksella
OVH:n sähköpostitilin käyttäminen on lasten leikkiä Mac-tietokoneella.

Avaa tietokoneellasi linkki: [https://ssl0.ovh.net/roundcube/auto/](https://ssl0.ovh.net/roundcube/auto/).
Syötä OVH:n sähköpostiosoitteesi, klikkaa "Generoi", ja sitten seuraa loput vaiheet.

Tämä lisää profiilin Mac-koneeseesi ja voit alkaa käyttää sitä.


## Vaihe 1: Aloitus
Avaa MACin Mail-ohjelma. Kaksi vaihtoehtoa:


- 1. MACin Mail-ohjelmaan on jo tehty sähköpostiasetukset (oranssi kehys kuvassa):

Mene valikkoon "Mail" ja klikkaa "Tilit".

- 2. MACin Mail-ohjelmaan ei ole vielä tehty sähköpostiasetuksia (vihreä kehys kuvassa):

Valitse "Lisää uusi sähköpostitili".


![](images/img_2365.jpg){.thumbnail}


## Vaihe 2: Lisää tili
Valikoima erilaisia sähköpostiohjelmia ja -sovelluksia avautuu näyttöön.


- Valitse "Lisää uusi tili" valintaikkunan alaosasta.



![](images/img_2366.jpg){.thumbnail}


## Vaihe 3: Lisää sähköpostitili
Seuraavaksi pyydetään valitsemaan tilin tyyppi.


- Valitse "Lisää sähköpostitili"



![](images/img_2367.jpg){.thumbnail}


## Vaihe 4: Tilitiedot
Sähköpostitilin konfiguroimiseksi seuraavia tietoja pyydetään:


- Koko nimi: Haluttu nimi, joka näytetään Mail-sähköpostille.

- Sähköpostiosoite: Sähköpostiosoite kokonaisuudessaan.

- Salasana: Sähköpostitilin salasana.

Viesti voi tulla näkyviin, jossa pyydetään konfiguroimaan sähköpostitili käsin.


Napsauta "Seuraava" jatkaaksesi.

![](images/img_2368.jpg){.thumbnail}


## Vaihe 5: Saapuvan palvelimen asetukset
Saapuvan palvelimen konfiguroimiseksi pyydetään seuraavia tietoja:


- Tilin tyyppi: Valitse sähköpostin konfigurointi POP tai IMAP.

- Postipalvelin: Syötä palvelin SSL0.OVH.NET

- Käyttäjätunnus: Sähköpostiosoite kokonaisuudessaan.

- Salasana: Sähköpostitilin salasana.


Napsauta "Seuraava" jatkaaksesi.

![](images/img_2369.jpg){.thumbnail}


## Vaihe 6: Lähetyspalvelimen asetukset
Lähtevän palvelimen konfiguroimiseksi pyydetään seuraavia tietoja:


- SMTP-palvelin: Syötä palvelin SSL0.OVH.NET

- Käyttäjätunnus: Sähköpostiosoite kokonaisuudessaan.

- Salasana: Sähköpostitilin salasana.


Napsauta "Luo" jatkaaksesi.

Sähköpostitili lisätään.

![](images/img_2370.jpg){.thumbnail}


## SMTP:n muutokset
Päästäksesi sähköpostitilin SMTP-asetuksiin, käynnistä MACin Mail-ohjelma ja mene "Mail" ja klikkaa "Asetukset".

![](images/img_2371.jpg){.thumbnail}
Valitse sähköpostitili, jonka tiedot tulevat näkyviin.


- Tilintyyppi:IMAP-sähköpostin konfiguraatioon liittyvä valinta.

- Kuvaus: Sähköpostiohjelmassa näytettävä Mail-tilin nimi.

- Sähköpostiosoite: Sähköpostiosoite kokonaisuudessaan.

Koko nimi: Näytettävä Mail-tilin nimi.

- Saapuva palvelin: Sähköpostipalvelin SSL0.OVH.NET

- Käyttäjänimi: Sähköpostiosoite kokonaisuudessaan.

- Salasana: [Hallintapaneelissa määritelty salasana](https://www.ovh.com/manager/web/login.html).

- Lähetyspalvelin (SMTP): Tilille konfiguroitu lähtevän postin palvelin.



![](images/img_2372.jpg){.thumbnail}
Muokataksesi SMTP-palvelinta klikkaa SMTP-palvelimen nimen vieressä olevaa nuolta.

Näkyviin tulee lista palvelimia. (Ainoastaan jos muitakin SMTP-palvelimia on olemassa.)


- Voit napsauttaa "Muokkaa SMTP-palvelinten listaa".



![](images/img_2373.jpg){.thumbnail}


## SMTP-asetukset

## Mavericks
Näkyviin tulevat SMTP-palvelimet. Niistä voi muokata yhtä.

Osiossa "Tilin tiedot":

Kuvaus: SMTP-palvelimelle näytettävä nimi.

Palvelimen nimi: sähköpostipalvelin SSL0.OVH.NET

Osiossa "Edistynyt":


- Käytä oletusportteja (25, 465, 587) : Tämän voi valita käyttääkseen yleisiä portteja.

- Käytä SSL:ää (Secure Sockets Layer): Olet määritellyt SSL0.OVH.NET, voit rastittaa tai poistaa rastin "Käytä SSL:ää (Secure Sockets Layer)" edestä aktivoidaksesi tai poistaaksesi SSL-salauksen.

Autentikointi: syötä "Salasana"

Käyttäjänimi: sähköpostiosoite kokonaisuudessaan.

Salasana: [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) määritelty salasana.


![](images/img_2374.jpg){.thumbnail}

- Salasanan autentikointi on tehtävä, jotta sähköpostinlähetys toimisi moitteettomasti SMTP-palvelimillamme.

- Jos salasanan autentikointia ei aktivoida, Open SMTP-häiriötiketti voidaan avata, jossa ilmoitetaan, että "POP before SMTP" autentikointia ei tueta. Salasanan autentikointi on ehdottomasti aktivoitava sähköpostien lähettämiseksi.



## Mac-koneessa, jossa käytetään OS X Yosemitea, käyttöliittymä on hieman erilainen, mutta määriteltävät tiedot ovat samat.
Muista poistaa rasti ruudusta:
Salli suojaamaton autentikointi

![](images/img_2484.jpg){.thumbnail}


## POP-asetukset
Tässä ovat sähköpostilaatikon POP-tilin asetukset.

POP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
Käyttäjätunnus:jaettu sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 995 tai 110
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 110 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 995 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#information_sur_la_configuration_du_serveur_smtp_parametres_smtp) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|995|110|
|Lähtevä|465|587|




## IMAP-asetukset
Tässä ovat sähköpostilaatikon IMAP-tilin asetukset.

IMAP-tilin konfigurointi SSL-suojaus aktivoituna tai deaktivoituna: 

Sähköpostiosoite: sähköpostiosoite kokonaisuudessaan.
Salasana: salasana, joka on määritelty [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).
Käyttäjätunnus: sähköpostiosoite kokonaisuudessaan.
Saapuvan postin palvelin: saapuvien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: saapuvien sähköpostiviestien palvelimen portti: 993 tai 143
Lähtevän postin palvelin: lähtevien sähköpostiviestien palvelin: SSL0.OVH.NET
Saapuvan postin palvelimen portti: lähtevien sähköpostiviestien palvelimen portti: 465 tai 587

Portit 143 ja 587 vastaavat deaktivoitua SSL-suojausta.
Portit 993 ja 465 vastaavat  aktivoitua SSL-suojausta.


- Lähtevän SMTP-palvelimen [autentikointi](#information_sur_la_configuration_du_serveur_smtp_parametres_smtp) on aktivoitava.


|Portti|SSLaktiivinen|SSLdeaktivoitu|
|Saapuva|993|143|
|Lähtevä|465|587|



