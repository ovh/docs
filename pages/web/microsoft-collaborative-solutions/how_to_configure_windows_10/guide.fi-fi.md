---
deprecated: true
title: 'Exchange -tilin konfigurointi Sähköposti-sovelluksella (Windows 10)'
slug: sahkoposti-konfigurointi-windows-10
excerpt: 'Opi konfiguroimaan Exchange-tili Sähköposti-sovelluksen avulla Windows 10 -käyttöjärjestelmässä'
section: 'Exchange-sähköpostiohjelman konfigurointi'
---

**Päivitetty 18.4.2018**

## Tavoite

Exchange-tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää valitsemallasi laitteella.

**Opi konfiguroimaan Exchange-tili Sähköposti-sovelluksen avulla Windows 10 -käyttöjärjestelmässä.**

## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Laitteeseesi on asennettu Sähköposti-sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö vanhempaa Windows-versiota? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Sähköposti-sovelluksella käyttöjärjestelmässä Windows 8](https://docs.ovh.com/fi/microsoft-collaborative-solutions/exchange_2013_kayttoonotto_windows_8lla/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Sähköposti-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään klikkaamaan `Lisää tili`{.action}.

- **Jos olemassa on jo määritetty tili**: klikkaa `Tilit`{.action} sovelluksen vasemmalla puolella olevassa valikkopalkissa ja sitten `Lisää tili`{.action} oikealle ilmestyvästä valikosta.

![exchange](images/configuration-mail-windows-step1.png){.thumbnail}

Klikkaa näkyviin tulevassa ikkunassa `Edistynyt konfigurointi`{.action} ja valitse sitten tilin tyypiksi `Exchange ActiveSync`{.action}.

Syötä nyt pyydetyt tiedot:

|Tieto|Kuvaus|
|---|---|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|
|Verkkotunnus|Älä syötä tähän mitään.|
|Palvelin|Ilmoita palvelin, jossa Exchange-palveluasi ylläpidetään. Voit löytää sen [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} kyseisen Exchange-palvelun välilehdeltä `Yleiset tiedot`{.action} ja sitten kohdasta `Yhteys`{.action}.|
|Palvelin vaatii salatun yhteyden (SSL)|Tähän ruutuun on ehdottomasti jätettävä rasti.|
|Tilin nimi|Anna nimi, jolla tunnistat tilin muista Sähköposti-sovelluksessa näkyvistä tileistä.|

Kun tiedot on annettu, klikkaa painiketta `Kirjaudu`{.action}. Jos tiedot ovat oikein, tilille kirjautuminen onnistuu.

Näkyviin tulee nyt ikkuna, jossa kysytään, haluatko lisätä tilin. Se kertoo myös laitteesi tiettyjä ominaisuuksia koskevista muutoksista. Tutustu niihin ja vahvista sitten tilin lisäys.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![exchange](images/configuration-mail-windows-exchange-step2.png){.thumbnail}

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan - tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Sähköposti-sovelluksessa käyttöjärjestelmässä Windows 10.](https://docs.ovh.com/fi/emails/sahkoposti-konfigurointi-windows-10/){.external}

[E-mail Pro -tilin konfigurointi Sähköposti-sovelluksella käyttöjärjestelmässä Windows 10.](https://docs.ovh.com/fi/emails-pro/sahkoposti-konfigurointi-windows-10/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.