---
deprecated: true
title: E-mail Pro -tilin konfigurointi macOS Mail-sovelluksessa
slug: email-pro-mail-macos-konfigurointi
excerpt: Katso, kuinka E-mail Pro -tili konfiguroidaan macOS El Capitan, Sierra ja High Sierra -käyttöjärjestelmissä Mail-sovelluksessa
section: Sähköpostiohjelman konfigurointi
order: 4
---

**Päivitetty 14.2.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Tämän avulla voit käyttää sähköpostiosoitteita valitsemastasi sovelluksesta.

**Katso, kuinka E-mail Pro -tili konfiguroidaan macOS El Capitan, Sierra ja High Sierra -käyttöjärjestelmissä Mail-sovelluksessa.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on tunnukset sähköpostiosoitteeseen, jonka asetuksia haluat muokata.

> [!primary]
>
> Tämä dokumentaatio soveltuu seuraaviin Mac-käyttöjärjestelmiin: El Capitan, Sierra ja High Sierra.
>

## Käytännössä

Lisäys voidaan tehdä kahdella eri tavalla:

- **Muutamalla klikkauksella Apple Devices -työkalulla**: mene linkkiin [https://autodiscover.mail.ovh.net/AppleDevices/](https://autodiscover.mail.ovh.net/AppleDevices/){.external} ja seuraa eri konfigurointivaiheita.

- **Seuraamalla Mail-sovelluksen konfigurointiavustajaa**: käynnistä Mail-sovellus laitteessasi.

Tästä eteenpäin tämä dokumentaatio keskittyy ainoastaan konfigurointiin Mail-sovelluksen kautta.

### 1. vaihe: Tilin lisäys

Kun Mail-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan aloittaa kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään valitsemaan Mail-tilin tarjoaja. Valitse `Muu Mail-tili`{.action} ja jatka.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Mail`{.action} ja sitten `Lisää tili`{.action}. Valitse `Muu Mail-tili`{.action} ja jatka.

![emailpro](images/configuration-mail-sierra-step1.png){.thumbnail}

Syötä nyt tilisi tiedot:

|Tieto|Kuvaus|  
|---|---|  
|Nimi|Syötä nimi, joka näkyy lähettäjänä, kun viestejä lähetetään tällä osoitteella.| 
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.| 
|Salasana|Syötä sähköpostiosoitteen salasana.|  

Klikkaa nyt painiketta `Kirjaudu sisään`{.action}. Viesti kehottaa jatkamaan ja antamaan lisätietoja:

|Tieto|Kuvaus|  
|---|---|  
|Tilin tyyppi|Jätä valittuna näkyvä IMAP alasvetovalikkoon| 
|Saapuva sähköpostipalvelin|Syötä palvelin *pro1.mail.ovh.net*| 
|Lähtevä sähköpostipalvelin|Syötä palvelin *pro1.mail.ovh.net*|  

Klikkaa nyt uudestaan painiketta `Kirjaudu sisään`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![emailpro](images/configuration-mail-sierra-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Klikkaa sitten kohtaa `Valmis`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

Jos syötät käsin asetuksia tilisi valintoihin, näet alla E-mail Pro -tuotteemme kanssa käytettävät tekniset asetukset:

|Palvelimen tyyppi|Palvelimen nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|Kyllä|993|
|Lähtevä|pro1.mail.ovh.net|Kyllä|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa [https://pro1.mail.ovh.net](https://pro1.mail.ovh.net){.external}. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla. 

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/emails/jaettu_sahkoposti_sahkopostin_konfigurointiohje_mac_-_el_capitan/){.external}

[Exchange-tilin konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange-automaattinen-konfigurointi-mail-macos/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.