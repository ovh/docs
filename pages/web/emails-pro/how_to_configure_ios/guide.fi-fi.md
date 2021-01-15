---
deprecated: true
title: E-mail Pro -tilin konfigurointi iPhonella tai iPadilla
slug: konfigurointi-iphone
excerpt: Opi konfiguroimaan E-mail Pro -tili iPhonella tai iPadilla Mail-sovelluksen avulla
section: Sähköpostiohjelman konfigurointi
order: 3
---

**Päivitetty 22.2.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää valitsemallasi laitteella.

**Opi konfiguroimaan E-mail Pro -tili Mail-sovelluksen avulla iPhonella tai iPadilla.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on tunnukset sähköpostiosoitteeseen, jonka asetuksia haluat muokata.

> [!primary]
>
> Tämä dokumentaatio soveltuu seuraaviin Mac-käyttöjärjestelmiin: iOS 7 ja myöhemmät versiot.
>

## Käytännössä

Lisäys voidaan tehdä kahdella eri tavalla:

- **Muutamalla klikkauksella Apple Devices -työkalulla**: mene linkkiin <https://autodiscover.mail.ovh.net/AppleDevices/> ja seuraa eri konfigurointivaiheita.

- **Seuraamalla laitteesi konfigurointiavustajaa**.

Tästä eteenpäin tämä dokumentaatio keskittyy ainoastaan sähköpostien konfigurointiin laitteellasi.


### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä kohtaan `Asetukset`{.action}. Tilin lisäys tapahtuu kahdella tapaa käyttöjärjestelmäsi versiosta riippuen:

- **iOS 7, 8, 9 ja 10**: Klikkaa `Posti, yhteystiedot, kalenterit`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Muu`{.action} ja sitten `Lisää sähköpostitili`{.action}.

- **iOs 11**: Klikkaa `Tilit ja salasanat`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Muu`{.action} ja sitten `Lisää sähköpostitili`{.action}.

![emailpro](images/configuration-mail-ios-step1.png){.thumbnail}

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
|IMAP tai POP|Jätä oletuksena valittu **IMAP**.|
|Isäntäpalvelimen nimi (vastaanottava)|Syötä palvelin “pro1.mail.ovh.net”.|
|Käyttäjänimi (vastaanottava)|Syötä täydellinen sähköpostiosoite.|
|Salasana (vastaanottava)|Syötä sähköpostiosoitteen salasana.|  
|Isäntäpalvelimen nimi (lähettävä)|Syötä palvelin “pro1.mail.ovh.net”.|
|Käyttäjänimi (lähettävä)|Syötä täydellinen sähköpostiosoite.|
|Salasana (lähettävä)|Syötä sähköpostiosoitteen salasana.|

Klikkaa nyt `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![emailpro](images/configuration-mail-ios-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Klikkaa sitten kohtaa `Tallenna`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

Jos määrittelet teknisiä kenttiä manuaalisesti tilin asetuksissa, näet alla E-mail Pro -tuotteemme kanssa käytettävät asetukset:

|Palvelimen tyyppi|Palvelun nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|Kyllä|993|
|Lähtevä|pro1.mail.ovh.net|Kyllä|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi iPhonella tai iPadilla.](https://docs.ovh.com/fi/emails/webhotellien_sahkoposti_konfigurointiohje_iphone_ios_91-versiolle/){.external}

[Exchange-tilin konfigurointi iPhonella tai iPadilla.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_automaattimaarittely_iosssa_iphone_ipad/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.