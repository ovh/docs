---
deprecated: true
title: 'E-mail Pro -tilin konfigurointi Sähköposti-sovelluksella (Windows 10)'
slug: sahkoposti-konfigurointi-windows-10
excerpt: 'Opi konfiguroimaan E-mail Pro -tili Sähköposti-sovelluksen avulla Windows 10 -käyttöjärjestelmässä'
section: 'Sähköpostiohjelman konfigurointi'
order: 7
---

**Päivitetty 18.4.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää haluamallasi laitteella.

**Opi konfiguroimaan E-mail Pro -tili Sähköposti-sovelluksen avulla Windows 10 -käyttöjärjestelmässä.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Laitteeseesi on asennettu Sähköposti-sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Sähköposti-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyksen yhteydessä**: avautuvassa ikkunassa pyydetään klikkaamaan `Lisää tili`{.action}.

- **Jos on olemassa jo määritetty tili**: klikkaa `Tilit`{.action} sovelluksen vasemmalla puolella olevassa valikkopalkissa ja sitten `Lisää tili`{.action} oikealle ilmestyvästä valikosta.

![emailpro](images/configuration-mail-windows-step1.png){.thumbnail}

Klikkaa näkyviin tulevassa ikkunassa `Edistynyt konfigurointi`{.action} ja valitse sitten tilin tyypiksi `Internet-sähköposti`{.action}.

Syötä nyt pyydetyt tiedot:

|Tieto|Kuvaus|
|---|---|
|Sähköpostiosoite|Syötä täydellinen sähköpostiosoite.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Tilin nimi|Anna nimi, jolla tunnistat tilin muista Sähköposti-sovelluksessa näkyvistä tileistä.|
|Lähetä viestit käyttämällä tätä nimeä|Syötä nimi, joka näkyy lähettäjänä, kun viestejä lähetetään tällä osoitteella.|
|Saapuvan postin palvelin|Syötä palvelin “pro1.mail.ovh.net:993”.|
|Tilin tyyppi|Suosittelemme valitsemaan **IMAP4**-protokollan. Voit kuitenkin valita **POP-protokollan** (sähköpostien säilytys paikallisesti Sähköposti-sovelluksessa) alasvetovalikosta.|
|Lähtevän postin palvelin|Syötä palvelin “pro1.mail.ovh.net:587”.|

Varmista, että seuraavat ruudut on rastitettu:

- “Lähtevän postin palvelin vaatii tunnistautumisen”
- “Käytä sähköpostin lähetykseen samaa käyttäjänimeä ja salasanaa”
- “Vaadi SSL-protokollaa saapuvalle postille”
- “Vaadi SSL-protokollaa lähtevälle postille”

Kun tiedot on täytetty, klikkaa painiketta `Kirjaudu`{.action}. Jos tiedot ovat oikein, tilille kirjautuminen onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![emailpro](images/configuration-mail-windows-step2.png){.thumbnail}

Jos määrittelet teknisiä kenttiä manuaalisesti tilin asetuksissa, näet alla E-mail Pro -tuotteemme kanssa käytettävät asetukset:

|Palvelimen tyyppi|Palvelimen nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|Kyllä|993|
|Lähtevä|pro1.mail.ovh.net|Kyllä|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan - tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Sähköposti-sovelluksessa Windows 10 -käyttöjärjestelmässä.](https://docs.ovh.com/fi/emails/sahkoposti-konfigurointi-windows-10/){.external}

[Exchange -tilin konfigurointi Sähköposti-sovelluksella Windows 10 -käyttöjärjestelmässä](https://docs.ovh.com/fi/microsoft-collaborative-solutions/sahkoposti-konfigurointi-windows-10/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.