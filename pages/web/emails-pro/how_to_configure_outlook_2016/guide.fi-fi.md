---
deprecated: true
title: 'E-mail Pro -tilin konfigurointi Outlook 2016 -sovelluksella Windowsissa'
slug: konfigurointi-outlook-2016
excerpt: 'Opi konfiguroimaan E-mail Pro -tili Outlook 2016 -sovelluksella Windowsissa'
section: 'Sähköpostiohjelman konfigurointi'
order: 1
---

**Päivitetty 26.3.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää haluamallasi laitteella.

**Opi konfiguroimaan E-mail Pro -tili Outlook 2016 -sovelluksella Windowsissa.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Laitteeseesi on asennettu Microsoft Outlook 2016.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö Outlook 2016 -ohjelmaa Mac-laitteella? Tutustu dokumentaatioomme: [E-mail Pro -tilin konfigurointi macOS Mail -sovelluksessa](https://docs.ovh.com/fi/emails-pro/konfigurointi-outlook-2016-mac/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Mail-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyskerran yhteydessä**: näkyviin tulee konfigurointiavustaja ja pyytää antamaan sähköpostiosoitteesi.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Tiedosto`{.action} ja sitten `Lisää tili`{.action}.

![emailpro](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Ilmoita sähköpostiosoitteesi ja klikkaa `Edistyneet valinnat`{.action}. Rastita ruutu näkyviin tulevassa kohdassa `Tilin konfigurointi manuaalisesti`{.action} ja klikkaa sitten `Kirjaudu sisään`{.action}. Valitse eri tilityyppien joukosta **IMAP**.

![emailpro](images/configuration-outlook-2016-windows-step2.png){.thumbnail}

Täytä sitten pyydetyt tiedot:

- **saapuvalle postille:**

|Tieto|Kuvaus|
|---|---|
|Palvelin|Syötä palvelin “pro1.mail.ovh.net”.|
|Portti|Ilmoita portti “993”.|
|Salaustapa|Valitse “SSL/TLS”.|
|Vaadi tunnistautumista|Älä rastita ruutua “Vaadi kirjautumisen yhteydessä tunnistautumista suojatulla salasanalla (SPA) ”.|

- **lähtevälle postille:**

|Tieto|Kuvaus|
|---|---|
|Palvelin|Syötä palvelin “pro1.mail.ovh.net”.|
|Portti|Ilmoita portti “587”.|
|Salaustapa|Valitse “STARTTLS”.|
|Vaadi tunnistautumista|Älä rastita ruutua “Vaadi kirjautumisen yhteydessä tunnistautumista suojatulla salasanalla (SPA) ”.|

Kun tiedot on täytetty, klikkaa kohtaa `Seuraava`{.action} ja syötä sitten sähköpostiosoitteen **salasana**. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![emailpro](images/configuration-outlook-2016-windows-step3.png){.thumbnail}

Jos määrittelet teknisiä kenttiä manuaalisesti tilin asetuksissa, näet alla E-mail Pro -tuotteemme kanssa käytettävät asetukset:

|Palvelimen tyyppi (Server type)|Palvelimen nimi|Salaustapa|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|SSL/TLS|993|
|Lähtevä|pro1.mail.ovh.net|STARTTLS|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen. Se on käytettävissä osoitteessa <https://pro1.mail.ovh.net>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan - tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Outlook 2016 -ohjelmalla Windowsissa.](https://docs.ovh.com/fi/emails/konfigurointi-outlook-2016/){.external}

[Exchange-tilin konfigurointi Outlook 2016 -ohjelmalla Windowsissa.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/konfigurointi-outlook-2016/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.