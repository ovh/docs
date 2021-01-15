---
deprecated: true
title: Sähköpostiosoitteen konfigurointi Androidilla Gmail-sovelluksen kautta
slug: konfigurointi-android
excerpt: Opi konfiguroimaan MX Plan -sähköpostiosoite Androidilla Gmail-sovelluksen avulla
section: Android
---

**Päivitetty 7.3.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Näin voit lähettää ja vastaanottaa viestejä haluamallasi laitteella.

**Opi konfiguroimaan MX Plan -sähköpostiosoite Androidilla Gmail-sovelluksen avulla.**

## Edellytykset

- Sinulla on MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli/){.external}).
- Laitteessasi on Gmail-sovellus. Voit asentaa sen Google Play -kaupasta.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Tämä dokumentaatio on toteutettu Nexus 6 -laitteella, joka käyttää Android 7.1.1 -versiota. Yhdenmukaisuuden vuoksi käytämme Gmail-sovellusta, jonka voi asentaa Play-kaupasta. Jos haluat käyttää toista sovellusta, toimintatapa saattaa olla erilainen.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä sovellukseen `Gmail`{.action}. Tilin lisäys voi alkaa kahdella tavalla:

- **Jos yhtään tiliä ei ole määritetty**: tervetuloa-vaiheen jälkeen klikkaa `Lisää sähköpostiosoite`{.action}. Valitse lopuksi `Muu`{.action}. 

- **Jos sähköpostitili on jo määritetty**: klikkaa kolmea viivaa esittävää kuvaketta ylävasemmalla ja sitten nuolen kuvaa määritetyn tilin oikealla puolella. Klikkaa lopuksi kohtaa `Lisää tili`{.action} ja valitse `Muu`{.action}. 

![mxplan](images/configuration-gmail-application-android-step1.png){.thumbnail}

Ilmoita sähköpostiosoitteesi ja klikkaa `Seuraava`{.action}.

Tilin tyyppiä valitessa suosittelemme käyttämään **IMAP**-protokollaa. Voit kuitenkin valita **POP**-protokollan, joka merkitsee sähköpostien paikallista säilömistä Gmail-sovelluksessasi. Sitä ei kuitenkaan suositella, jos käytät sähköpostiosoitettasi useilla sähköpostiohjelmistoilla.

Ilmoita sähköpostiosoitteesi salasana ja klikkaa `Seuraava`{.action}.

![mxplan](images/configuration-gmail-application-android-step2.png){.thumbnail}

Syötä saapuvan postin palvelimen asetukset:

|Tieto|Kuvaus| 
|---|---| 
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Palvelin|Syötä palvelin “ssl0.ovh.net”.|

Klikkaa `Seuraava`{.action} ja syötä lähtevän postin palvelimen asetukset.

|Tieto|Kuvaus| 
|---|---| 
|Vaadi yhteyttä|Varmista, että tämä painike jätetään kytketyksi.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|SMTP-palvelin|Syötä palvelin “ssl0.ovh.net”.|

Klikkaa `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![mxplan](images/configuration-gmail-application-android-step3.png){.thumbnail}

Määritä tilin valinnat ja klikkaa `Seuraava`{.action}. Lopuksi voit nimetä tilin, jotta tunnistat sen muista sovelluksessa olevista tileistä sekä luoda nimen, joka näkyy sähköpostiviestejä lähetettäessä. Kun nämä toiminnot on suoritettu, klikkaa `Seuraava`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

Jos täytät käsin teknisiä kenttiä tilisi valinnoissa, näet alla MX Plan -tuotteemme kanssa käytettävät asetukset:

- **IMAP-konfiguraatio**

|Palvelimen tyyppi|Palvelun nimi|Salaus|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|SSL/TLS|993|
|Lähtevä|ssl0.ovh.net|SSL/TLS|465|

- **POP-konfiguraatio**

|Palvelimen tyyppi|Palvelun nimi|Salaus|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|SSL/TLS|995|
|Lähtevä|ssl0.ovh.net|SSL/TLS|465|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa verkkosovelluksen, jolla sähköpostiosoitteeseen voidaan päästä verkkoselaimella osoitteesta <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[E-mail Pro -tilin konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/emails-pro/konfigurointi-android/){.external}

[Exchange-tilin konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_android-maarittely/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.