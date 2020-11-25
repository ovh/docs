---
deprecated: true
title: E-mail Pro -tilin konfigurointi Androidilla Gmail-sovelluksen kautta
slug: konfigurointi-android
excerpt: Opi konfiguroimaan E-mail Pro -tili Androidilla Gmail-sovelluksen avulla
section: Sähköpostiohjelman konfigurointi
order: 5
---

**Päivitetty 01.3.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää haluamallasi laitteella.

**Opi konfiguroimaan E-mail Pro -tili Androidilla Gmail-sovelluksen avulla.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Laitteessasi on Gmail-sovellus. Voit asentaa sen Google Play -kaupasta.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Tämä dokumentaatio on toteutettu Nexus 6 -laitteella, joka käyttää Android 7.1.1 -versiota. Yhdenmukaisuutta varten käytämme Gmail-sovellusta, jonka voi asentaa Play-kaupasta. Jos haluat käyttää toista sovellusta, toimintatapa saattaa olla erilainen.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä sovellukseen `Gmail`{.action}. Tilin lisäys voi alkaa kahdella tavalla:

- **Jos yhtään tiliä ei ole määritetty**: tervetuloa-vaiheen jälkeen klikkaa `Lisää sähköpostiosoite`{.action}. Valitse lopuksi `Muu`{.action}. 

- **Jos sähköpostitili on jo määritetty**: klikkaa kolmea viivaa esittävää kuvaketta ylävasemmalla ja sitten nuolen kuvaa määritetyn tilin oikealla puolella. Klikkaa lopuksi kohtaa `Lisää tili`{.action} ja valitse `Muu`{.action}. 

![emailpro](images/configuration-email-pro-gmail-application-android-step1.png){.thumbnail}

Syötä sähköpostiosoitteesi ja klikkaa `Seuraava`{.action}.

Valitse tilityyppiä valitessa **IMAP** ja syötä sähköpostiosoitteesi salasana. Klikkaa `Seuraava`{.action} konfiguroinnin jatkamiseksi.

![emailpro](images/configuration-email-pro-gmail-application-android-step2.png){.thumbnail}

Syötä saapuvan postin palvelimen asetukset:

|Tieto|Kuvaus| 
|---|---| 
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Palvelin|Syötä palvelin “pro1.mail.ovh.net”.|

Klikkaa `Seuraava`{.action} ja syötä lähtevän postin palvelimen asetukset.

|Tieto|Kuvaus| 
|---|---| 
|Vaadi yhteyttä|Varmista, että tämä painike jätetään kytketyksi.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|SMTP-palvelimet|Syötä palvelin “pro1.mail.ovh.net”.|

Klikkaa `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![emailpro](images/configuration-email-pro-gmail-application-android-step3.png){.thumbnail}

Määritä tilin valinnat ja klikkaa `Seuraava`{.action}. Lopuksi voit nimetä tilin, jotta tunnistat sen muista sovelluksessa olevista tileistä sekä luoda nimen, joka näkyy sähköpostiviestejä lähetettäessä. Kun nämä toiminnot on suoritettu, klikkaa `Seuraava`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

Jos määrittelet teknisiä kenttiä manuaalisesti tilin asetuksissa, näet alla E-mail Pro -tuotteemme kanssa käytettävät asetukset:

|Palvelimen tyyppi|Palvelun nimi|Salaus|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|SSL/TLS|993|
|Lähtevä|pro1.mail.ovh.net|STARTTLS|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/emails/konfigurointi-android/){.external}

[Exchange-tilin konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_android-maarittely/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.