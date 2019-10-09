---
title: 'Sähköpostiosoitteen konfigurointi macOS Mail-sovelluksessa'
excerpt: 'Opi konfiguroimaan MX Plan -sähköpostiosoite Mail-sovelluksessa El Capitan, Sierra ja High Sierra'
slug: jaettu_sahkoposti_sahkopostin_konfigurointiohje_mac_-_el_capitan
section: Apple
---

**Päivitetty 23.2.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Näin voit lähettää ja vastaanottaa viestejä valitsemastasi sovelluksesta.

**Katso, kuinka MX Plan -sähköpostiosoite konfiguroidaan El Capitan, Sierra ja High Sierra -käyttöjärjestelmissä Mail-sovelluksessa.**

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external}).
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on tunnukset sähköpostiosoitteeseen, jonka asetuksia haluat muokata.

> [!primary]
>
> Tämä dokumentaatio soveltuu seuraaviin Mac-käyttöjärjestelmiin: El Capitan, Sierra ja High Sierra.
>

## Käytännössä

Lisäys voidaan tehdä kahdella eri tavalla:

- **Muutamalla klikkauksella Apple Devices -työkalulla**: mene linkkiin <https://autodiscover.mail.ovh.net/AppleDevices/> ja seuraa eri konfigurointivaiheita.

- **Seuraamalla Mail-sovelluksen konfigurointiavustajaa**: käynnistä Mail-sovellus laitteessasi.

Tästä eteenpäin tämä dokumentaatio keskittyy ainoastaan konfigurointiin Mail-sovelluksen kautta.

### 1. vaihe: Tilin lisäys

Kun Mail-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään valitsemaan Mail-tilin tarjoaja. Valitse `Muu Mail-tili`{.action} ja jatka.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Mail`{.action} ja sitten `Lisää tili`{.action}. Valitse `Muu Mail-tili`{.action} ja jatka.

![mxplan](images/configuration-mail-macos-step1.png){.thumbnail}

Syötä nyt tilisi tiedot:

|Tieto|Kuvaus|
|---|---|
|Nimi|Syötä täydellinen sähköpostiosoite.|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|

Klikkaa nyt painiketta `Kirjaudu sisään`{.action}. Viesti kehottaa jatkamaan ja antamaan lisätietoja:

|Tieto|Kuvaus|
|---|---|
|Tilin tyyppi|Suosittelemme **IMAP-protokollan** käyttöä (oletusvalinta). Voit kuitenkin valita **POP-protokollan** (sähköpostien säilytys paikallisesti Mail-sovelluksessa) alasvetovalikosta.|
|Saapuva sähköpostipalvelin|Syötä palvelin “ssl0.ovh.net”.|
|Lähtevä sähköpostipalvelin|Syötä palvelin “ssl0.ovh.net”.|

Klikkaa nyt uudestaan painiketta `Kirjaudu sisään`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![mxplan](images/configuration-mail-macos-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Klikkaa sitten kohtaa `Valmis`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

Jos täytät käsin teknisiä kenttiä tilisi valinnoissa, näet alla MX Plan -tuotteemme kanssa käytettävät asetukset:

- **IMAP-konfiguraatio**

|Palvelimen tyyppi|Palvelun nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|Kyllä|993|
|Lähtevä|ssl0.ovh.net|Kyllä|465| 

- **POP-konfiguraatio**

|Palvelimen tyyppi|Palvelun nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|Kyllä|995|
|Lähtevä|ssl0.ovh.net|Kyllä|465|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa verkkosovelluksen, jolla sähköpostiosoitteeseen voidaan päästä verkkoselaimella osoitteesta <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[E-mail Pro -tilin konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/emails-pro/email-pro-mail-macos-konfigurointi/){.external}

[Exchange-tilin konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange-automaattinen-konfigurointi-mail-macos/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.