---
deprecated: true
title: 'Sähköpostiosoitteen konfigurointi Outlook 2016- sovelluksella Mac-koneella'
slug: konfigurointi-outlook-2016-mac
excerpt: 'Opi konfiguroimaan MX Plan -sähköpostiosoite Outlook 2016 -sovelluksella Mac-koneella'
section: Outlook
---

**Päivitetty 19.3.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Näin voit lähettää ja vastaanottaa viestejä valitsemastasi sovelluksesta.

**Opi konfiguroimaan MX Plan -sähköpostiosoite Outlook 2016 -sovelluksella Mac-koneella.**

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external}).
- Mac-laitteeseesi on asennettu Microsoft Outlook-sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö vanhempaa Outlook-versiota Mac-koneella? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Outlook 2011 -sovelluksella Mac-koneella](https://docs.ovh.com/fi/emails/webhotellit_ja_sahkopostit_outlook_2011_-konfigurointiohje_os_xlle/){.external}.
>
> Käytätkö Outlook 2016 -sovellusta Windowsissa? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Outlook 2016 -sovelluksella Windowsissa](https://docs.ovh.com/fi/emails/konfigurointi-outlook-2016/){.external}
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Outlook-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyskerran yhteydessä**: näkyviin tulee konfigurointiavustaja ja pyytää antamaan sähköpostiosoitteesi.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Työkalut`{.action} ja sitten `Tilit`{.action}. Klikkaa näkyviin tulevassa ikkunassa kohtaa `+`{.action} ja sitten `Uusi tili`{.action}.

![mxplan](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Ilmoita nyt sähköpostiosoitteesi ja klikkaa `Jatka`{.action}. Valitse palveluntarjoajien joukosta `IMAP/POP`{.action} ja täytä sitten pyydetyt tiedot.

|Tieto|Kuvaus|
|---|---|
|Tilin tyyppi|Suosittelemme **IMAP-protokollan** käyttöä (oletusvalinta). Voit kuitenkin valita **POP-protokollan** (sähköpostien säilytys paikallisesti Outlook-sovelluksessa) alasvetovalikosta.|
|Postiosoite|Anna nimi, jolla tunnistat tilin muista Outlook-sovelluksessa näkyvistä tileistä.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Saapuvan postin palvelin|Syötä palvelin “ssl0.ovh.net”. Jätä rasti ruutuun **Käytä yhdistämiseen SSL-salausta**.|
|Saapuva portti|Syötä portti “993”.|
|Lähtevä palvelin|Syötä palvelin “ssl0.ovh.net”. Jätä rasti ruutuun **Käytä yhdistämiseen SSL-salausta**.|
|Lähtevä portti|Syötä portti “465”.|

Kun tiedot on annettu, klikkaa painiketta `Lisää tili`{.action}. Jos tiedot ovat oikein, tilille kirjautuminen onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![mxplan](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

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

OVH tarjoaa lisäksi verkkosovelluksen, jolla sähköpostiosoitteeseen voidaan päästä verkkoselaimella. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[E-mail Pro -tilin konfigurointi Outlook 2016 -sovelluksella Mac-koneella.](https://docs.ovh.com/fi/emails-pro/konfigurointi-outlook-2016-mac/){.external}

[Exchange -tilin konfigurointi Outlook 2016 -ohjelmalla Mac-koneella.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/konfigurointi-outlook-2016-mac/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.