---
deprecated: true
title: Sähköpostiosoitteen konfigurointi iPhonella tai iPadilla
excerpt: Opi konfiguroimaan MX Plan -sähköpostiosoite iPhonella tai iPadilla
slug: webhotellien_sahkoposti_konfigurointiohje_iphone_ios_91-versiolle
section: Apple
---

**Päivitetty 26.2.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla tai sovelluksella. Näin voit lähettää ja vastaanottaa viestejä haluamallasi laitteella.

**Opi konfiguroimaan MX Plan -sähköpostiosoite iPhonella tai iPadilla.**

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli/){.external}).
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Tämä dokumentaatio soveltuu seuraaviin Mac-käyttöjärjestelmiin: iOS 7 ja myöhemmät versiot.
>

## Käytännössä

Lisäys voidaan tehdä kahdella eri tavalla:

- **Muutamalla klikkauksella Apple Devices -työkalulla**: mene linkkiin <https://autodiscover.mail.ovh.net/AppleDevices/> ja seuraa eri konfigurointivaiheita.

- **Seuraamalla laitteesi konfigurointiavustajaa**.

Tästä eteenpäin tämä dokumentaatio keskittyy ainoastaan konfigurointiin laitteellasi.

### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä kohtaan `Asetukset`{.action}. Tilin lisäys tapahtuu kahdella tapaa käyttöjärjestelmäsi versiosta riippuen:

- **iOS 7, 8, 9 ja 10**: Klikkaa `Posti, yhteystiedot, kalenterit`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Muu`{.action} ja sitten `Lisää sähköpostitili`{.action}.

- **iOS 11**: Klikkaa `Tilit ja salasanat`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Muu`{.action} ja sitten `Lisää sähköpostitili`{.action}.

![exchange](images/configuration-mail-ios-step1.png){.thumbnail}

Syötä nyt tilisi tiedot:

|Tieto|Kuvaus|
|---|---|
|Nimi|Syötä nimi, joka näkyy lähettäjänä, kun viestejä lähetetään tällä osoitteella.|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Kuvaus|Anna nimi, jolla tunnistat tilin muista Mail-sovelluksessa näkyvistä tileistä.|

Klikkaa nyt `Seuraava`{.action} ja syötä pyydetyt tiedot:

|Tieto|Kuvaus| 
|---|---| 
|IMAP tai POP|Suosittelemme **IMAP-protokollan** käyttöä (oletusvalinta). Voit kuitenkin valita **POP-protokollan** (sähköpostien säilytys paikallisesti Mail-sovelluksessa) alasvetovalikosta.|
|Isäntäpalvelimen nimi (vastaanottava)|Syötä palvelin “ssl0.ovh.net”.|
|Käyttäjänimi (vastaanottava)|Syötä täydellinen sähköpostiosoite.|
|Salasana (vastaanottava)|Syötä sähköpostiosoitteen salasana.|  
|Isäntäpalvelimen nimi (lähettävä)|Syötä palvelin “ssl0.ovh.net”.|
|Käyttäjänimi (lähettävä)|Syötä täydellinen sähköpostiosoite.|
|Salasana (lähettävä)|Syötä sähköpostiosoitteen salasana.| 

Klikkaa nyt `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![exchange](images/configuration-mail-ios-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Klikkaa sitten kohtaa `Tallenna`{.action}.

Voit tehdä testilähetyksen laitteesi Mail-sovelluksella ja tarkistaa, että tilisi asetukset on määritetty oikein.

Jos täytät käsin teknisiä kenttiä tilisi valinnoissa, näet alla MX Plan -tuotteemme kanssa käytettävät asetukset:

- **IMAP-konfiguraatio**

|Palvelimen tyyppi|Palvelimen nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|Kyllä|993|
|Lähtevä|ssl0.ovh.net|Kyllä|465|

- **POP-konfiguraatio**

|Palvelimen tyyppi|Palvelimen nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|Kyllä|995|
|Lähtevä|ssl0.ovh.net|Kyllä|465|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa verkkosovelluksen, jolla sähköpostiosoitteeseen voidaan päästä verkkoselaimella osoitteesta <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[E-mail Pro -tilin konfigurointi iPhonella tai iPadilla.](https://docs.ovh.com/fi/emails-pro/konfigurointi-iphone/){.external}

[Exchange-tilin konfigurointi iPhonella tai iPadilla.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_automaattimaarittely_iosssa_iphone_ipad/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.