---
deprecated: true
title: Exchange-tilin konfigurointi macOS:n Mail-sovelluksessa
slug: exchange-automaattinen-konfigurointi-mail-macos
excerpt: Opi konfiguroimaan Exchange-sähköpostiosoite Mail-sovelluksessa El Capitan, Sierra ja High Sierra -käyttöjärjestelmissä
section: Exchange-sähköpostiohjelman konfigurointi
---

**Päivitetty 2.2.2018**

## Tavoite

Exchange-tilejä voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Tämän ansiosta voit käyttää sähköpostiosoitettasi haluamaltasi laitteelta ja hyödyntää Exchange-ohjelmaan sisältyviä ryhmätyöominaisuuksia.

**Opi konfiguroimaan Exchange-sähköpostiosoite Mail-sovelluksessa macOS El Capitan, Sierra ja High Sierra -käyttöjärjestelmissä.**


## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on konfiguroitavan sähköpostiosoitteen käyttäjätunnukset.

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

Kun Mail-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan aloittaa kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään valitsemaan Mail-tilin tarjoaja. Valitse `Exchange`{.action} ja jatka.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Mail`{.action} ja sitten `Lisää tili`{.action}. Valitse `Exchange`{.action} ja jatka.

![exchange](images/configuration-mail-macos-step1.png){.thumbnail}

Syötä nyt tilisi tiedot:

|Tieto|Kuvaus| 
|---|---| 
|Nimi|Syötä nimi, joka näkyy lähettäjänä, kun viestejä lähetetään tällä osoitteella.|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|  

Klikkaa nyt painiketta `Kirjaudu sisään`{.action}. Jos annetut tiedot ovat oikein ja verkkotunnuksen asetukset on määritetty oikein Exchange-palvelussasi, yhdistäminen tilille onnistuu.

![exchange](images/configuration-mail-macos-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että vähintään kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Muut sovellukset voivat käyttää tiettyjä Exchangen ryhmätyöominaisuuksia. Kun olet tehnyt valintasi, klikkaa `Valmis`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![exchange](images/configuration-mail-macos-step3.png){.thumbnail}

Jos yhteys ei onnistu, suosittelemme:

- tarkistamaan Exchange-palvelussasi määritetyn verkkotunnuksesi konfiguroinnin [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager){.external} välilehdeltä `Liitetyt verkkotunnukset`{.action} ja sieltä sarakkeen taulukon `Vianhaku`{.action}.

- yrittämään URL-yhteysosoitteiden syöttämistä käsin Exchange-palveluun. Seuraa menettelyä varmenteen tietoturvavaroituksesta huolimatta, täytä sitten kentät `Sisäinen URL`{.action} ja `Ulkoinen URL`{.action} sen palvelimen tiedoilla, jossa Exchange-palveluasi ylläpidetään.

Tämän palvelimen löydät kirjautumalla [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external} ja menemällä siellä kyseiseen Exchange-palveluun. Siirry seuraavaksi välilehdelle `Yleiset tiedot`{.action} ja hae sitten palvelin, joka näkyy kohdassa `Yhteys`{.action}.

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa [https://www.ovh-hosting.fi/mail/](https://www.ovh-hosting.fi/mail/){.external}. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/emails/jaettu_sahkoposti_sahkopostin_konfigurointiohje_mac_-_el_capitan/){.external}

[E-mail Pro -tilin konfigurointi macOS Mail-sovelluksessa.](https://docs.ovh.com/fi/emails-pro/email-pro-mail-macos-konfigurointi/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.