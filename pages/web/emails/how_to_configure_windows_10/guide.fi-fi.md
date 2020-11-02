---
deprecated: true
title: 'Sähköpostiosoitteen konfigurointi Sähköposti-sovelluksella (Windows 2010)'
slug: sahkoposti-konfigurointi-windows-10
excerpt: 'Opi konfiguroimaan MX Plan -sähköpostiosoite Sähköposti-sovelluksella Windowsissa'
section: Windows
---

**Päivitetty 18.4.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Näin voit lähettää ja vastaanottaa viestejä valitsemastasi sovelluksesta.

**Opi konfiguroimaan MX Plan -sähköpostiosoite Sähköposti-sovelluksella Windowsissa.**

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external}).
- Laitteeseesi on asennettu Sähköposti-sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö vanhempaa Windows-versiota? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Sähköposti-sovelluksella käyttöjärjestelmässä Windows 8](https://docs.ovh.com/fi/emails/ovh-sahkoposti_asetukset_windows_8lla/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Sähköposti-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään klikkaamaan `Lisää tili`{.action}.

- **Jos on olemassa jo määritetty tili**: klikkaa `Tilit`{.action} sovelluksen vasemmalla puolella olevassa valikkopalkissa ja sitten `Lisää tili`{.action} oikealle ilmestyvästä valikosta.

![mxplan](images/configuration-mail-windows-step1.png){.thumbnail}

Klikkaa näkyviin tulevassa ikkunassa `Edistynyt konfigurointi`{.action} ja valitse sitten tilin tyypiksi `Internet-sähköposti`{.action}.

Syötä nyt pyydetyt tiedot:

|Tieto|Kuvaus|
|---|---|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Tilin nimi|Anna nimi, jolla tunnistat tilin muista Sähköposti-sovelluksessa näkyvistä tileistä.|
|Lähetä viestejä nimeä käyttäen|Syötä nimi, joka näkyy lähettäjän kentässä, kun viestejä lähetetään tällä osoitteella.|
|Saapuvan postin palvelin|Syötä palvelin “ssl0.ovh.net:993”.|
|Tilin tyyppi|Suosittelemme valitsemaan **IMAP4**-protokollan. Voit kuitenkin valita **POP-protokollan** (sähköpostien säilytys paikallisesti Sähköposti-sovelluksessa) alasvetovalikosta.|
|Lähtevän postin palvelin|Syötä palvelin “ssl0.ovh.net:465”.|

Varmista, että seuraavat ruudut on rastitettu:

- “Lähtevän postin palvelin vaatii tunnistautumisen”
- “Käytä sähköpostin lähetykseen samaa käyttäjänimeä ja salasanaa”
- “Vaadi SSL-protokollaa saapuvalle postille”
- “Vaadi SSL-protokollaa lähtevälle postille”

Kun tiedot on täytetty, klikkaa painiketta `Kirjaudu`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![mxplan](images/configuration-mail-windows-step2.png){.thumbnail}

Jos täytät käsin teknisiä kenttiä tilisi valinnoissa, näet alla MX Plan -tuotteemme kanssa käytettävät asetukset:

- **IMAP4-konfiguraatio**

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

[E-mail Pro -tilin konfigurointi Sähköposti-sovelluksella Windows-käyttöjärjestelmässä](https://docs.ovh.com/fi/emails-pro/sahkoposti-konfigurointi-windows-10/){.external}.

[Exchange -tilin konfigurointi Sähköposti-sovelluksella Windows-käyttöjärjestelmässä](https://docs.ovh.com/fi/microsoft-collaborative-solutions/sahkoposti-konfigurointi-windows-10/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.