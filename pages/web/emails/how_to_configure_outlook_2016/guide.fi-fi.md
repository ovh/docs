---
deprecated: true
title: Sähköpostiosoitteen konfigurointi Outlook 2016 -ohjelmalla Windowsissa
slug: konfigurointi-outlook-2016
excerpt: Opi konfiguroimaan MX Plan -sähköpostiosoite Outlook 2016 -ohjelmalla Windowsissa
section: Outlook
---

**Päivitetty 23.3.2018**

## Tavoite

MX Plan -sähköpostiosoitteita voidaan konfiguroida yhteensopivalla sähköpostiohjelmistolla. Näin voit lähettää ja vastaanottaa viestejä valitsemastasi sovelluksesta.

**Opi konfiguroimaan MX Plan -sähköpostiosoite Outlook 2016 -ohjelmalla Windowsissa.**

## Edellytykset

- MX Plan -sähköpostiosoite (sisältyy MX Plan -tuotteeseen tai [OVH:n webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli){.external}).
- Laitteeseesi on asennettu Microsoft Outlook 2016.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö vanhempaa Outlook-versiota Windowsissa? Tutustu dokumentaatioomme versiosta [Outlook 2010](https://docs.ovh.com/fi/emails/ovh-sahkoposti_outlook_2010_-konfigurointiohje/){.external}.
>
> Käytätkö Outlook 2016 -ohjelmaa Mac-koneella? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Outlook 2016 -ohjelmalla Mac-koneella](https://docs.ovh.com/fi/emails/konfigurointi-outlook-2016-mac/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Outlook-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyskerran yhteydessä**: näkyviin tulee konfigurointiavustaja ja pyytää antamaan sähköpostiosoitteesi.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Tiedosto`{.action} ja sitten `Lisää tili`{.action}.

![mxplan](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Ilmoita nyt sähköpostiosoitteesi ja klikkaa `Edistyneet valinnat`{.action}. Rastita ruutu näkyviin tulevassa kohdassa `Tilin konfigurointi manuaalisesti`{.action} ja klikkaa sitten `Kirjaudu sisään`{.action}.

Valitse erityyppisten tilien joukosta joko **IMAP** tai **POP**. Suosittelemme valitsemaan **IMAP**-protokollan. Voit kuitenkin valita **POP**-protokollan sähköpostien paikallista säilytystä varten Outlook-sovelluksessasi.

![mxplan](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Täytä sitten pyydetyt tiedot.

- **Saapuvalle postille:**

|Tieto|Kuvaus|
|---|---|
|Palvelin|Syötä palvelin “ssl0.ovh.net”.|
|Portti|Ilmoita portti “993”.|
|Salaustapa|Valitse “SSL/TLS”.|
|Vaadi tunnistautumista|Älä rastita ruutua “Vaadi tunnistautumista suojatulla salasanalla (SPA) kirjautumisen yhteydessä”.|

- **Lähtevälle postille:**

|Tieto|Kuvaus|
|---|---|
|Palvelin|Syötä palvelin “ssl0.ovh.net”.|
|Portti|Ilmoita portti “465”.|
|Salaustapa|Valitse “SSL/TLS”.|
|Vaadi tunnistautumista|Älä rastita ruutua “Vaadi tunnistautumista suojatulla salasanalla (SPA) kirjautumisen yhteydessä”.|

Kun tiedot on täytetty, klikkaa `Seuraava`{.action} ja syötä sitten sähköpostiosoitteen **salasana**. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![mxplan](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Jos täytät käsin teknisiä kenttiä tilisi valinnoissa, näet alla MX Plan -tuotteemme kanssa käytettävät asetukset:

- **IMAP-konfiguraatio**

|Palvelimen tyyppi (Server type)|Palvelimen nimi|Salaustapa|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|SSL/TLS|993|
|Lähtevä|ssl0.ovh.net|SSL/TLS|465|

- **POP-konfiguraatio**

|Palvelimen tyyppi (Server type)|Palvelimen nimi|Salaustapa|Portti|
|---|---|---|---|
|Saapuva|ssl0.ovh.net|SSL/TLS|995|
|Lähtevä|ssl0.ovh.net|SSL/TLS|465|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi verkkosovelluksen, jolla sähköpostiosoitteeseen voidaan päästä verkkoselaimella. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[E-mail Pro -tilin konfigurointi Outlook 2016 -ohjelmalla Windowsissa](https://docs.ovh.com/fi/emails-pro/konfigurointi-outlook-2016/){.external}

[Exchange -tilin konfigurointi Outlook 2016 -ohjelmalla Windowsissa](https://docs.ovh.com/fi/microsoft-collaborative-solutions/konfigurointi-outlook-2016/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.