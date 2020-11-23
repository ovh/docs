---
deprecated: true
title: 'E-mail Pro -tilin konfigurointi Outlook 2016 -sovelluksessa Mac-laitteella'
slug: konfigurointi-outlook-2016-mac
excerpt: 'Opi konfiguroimaan E-mail Pro -tili Outlook 2016 -sovelluksella Mac-laitteella'
section: 'Sähköpostiohjelman konfigurointi'
order: 2
---

**Päivitetty 30.3.2018**

## Tavoite

E-mail Pro -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää haluamallasi laitteella.

**Opi konfiguroimaan E-mail Pro -tili Outlook 2016 -sovelluksella Mac-laitteella.**

## Edellytykset

- Sinulla on [E-mail Pro -tuote](https://www.ovh-hosting.fi/sahkopostit/email-pro/){.external}.
- Mac-laitteeseesi on asennettu Microsoft Outlook -sovellus.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Käytätkö Outlook 2016 -sovellusta Windowsissa? Tutustu dokumentaatioomme: [Sähköpostiosoitteen konfigurointi Outlook 2016 -sovelluksella Windowsissa](https://docs.ovh.com/fi/emails-pro/konfigurointi-outlook-2016/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Outlook-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyskerran yhteydessä**: näkyviin tulee konfigurointiavustaja ja pyytää antamaan sähköpostiosoitteesi.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Työkalut`{.action} ja sitten `Tilit`{.action}. Klikkaa näkyviin tulevassa ikkunassa kohtaa `+`{.action} ja sitten `Uusi tili`{.action}.

![emailpro](images/configuration-outlook-2016-mac-step1.png){.thumbnail}

Ilmoita sähköpostiosoitteesi ja klikkaa `Jatka`{.action}. Valitse palveluntarjoajien joukosta `IMAP/POP`{.action} ja täytä sitten pyydetyt tiedot.

|Tieto|Kuvaus|
|---|---|
|Tilin tyyppi|Säilytä **IMAP** (oletuksena valittu).|
|Postiosoite|Anna nimi, jolla tunnistat tilin muista Outlook-sovelluksessa näkyvistä tileistä.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Saapuvan postin palvelin|Syötä palvelin “pro1.mail.ovh.net”. Jätä rasti ruutuun **Käytä yhdistämiseen SSL-salausta**.|
|Saapuva portti|Syötä portti 993.|
|Lähtevä palvelin|Syötä palvelin “pro1.mail.ovh.net”. Jätä rasti ruutuun **Käytä yhdistämiseen SSL-salausta**.|
|Lähtevä portti|Syötä portti “587”.|

Kun tiedot on annettu, klikkaa `Lisää tili`{.action}. Jos tiedot ovat oikein, tilille kirjautuminen onnistuu.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

![emailpro](images/configuration-outlook-2016-mac-step2.png){.thumbnail}

Jos määrittelet teknisiä kenttiä manuaalisesti tilin asetuksissa, näet alla E-mail Pro -tuotteemme kanssa käytettävät asetukset:

|Palvelimen tyyppi (Server type)|Palvelimen nimi|SSL|Portti|
|---|---|---|---|
|Saapuva|pro1.mail.ovh.net|Kyllä|993|
|Lähtevä|pro1.mail.ovh.net|Kyllä|587|

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen. Se on käytettävissä osoitteessa <https://pro1.mail.ovh.net>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan - tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Outlook 2016 -sovelluksessa Mac-laitteella.](https://docs.ovh.com/fi/emails/konfigurointi-outlook-2016-mac/){.external}

[Exchange-tilin konfigurointi Outlook 2016 -sovelluksessa Mac-laitteella.](https://docs.ovh.com/fi/microsoft-collaborative-solutions/konfigurointi-outlook-2016-mac/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.