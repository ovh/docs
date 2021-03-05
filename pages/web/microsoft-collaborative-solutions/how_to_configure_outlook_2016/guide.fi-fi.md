---
deprecated: true
title: 'Exchange -tilin konfigurointi Outlook 2016 -sovelluksella Windowsissa'
slug: konfigurointi-outlook-2016
excerpt: 'Opi konfiguroimaan Exchange -tili Outlook 2016 -sovelluksella Windowsissa'
section: 'Exchange-sähköpostiohjelman konfigurointi'
---

**Päivitetty 11.4.2018**

## Tavoite

Exchange -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää valitsemallasi laitteella.

**Opi konfiguroimaan Exchange -tili Outlook 2016 -sovelluksella Windowsissa.**

## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Laitteeseesi on asennettu Microsoft Outlook 2016.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.
- OVH:n SRV-kentän on oltava konfiguroitu oikein verkkotunnuksen DNS-alueella.

> [!primary]
>
> Käytätkö Outlook 2016 -ohjelmaa Mac-laitteella? Tutustu dokumentaatioomme: [Exchange-tilin konfigurointi Outlook 2016 -sovelluksessa](https://docs.ovh.com/fi/microsoft-collaborative-solutions/konfigurointi-outlook-2016-mac/){.external}.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Kun Outlook-sovellus on käynnistetty laitteessasi, tilin lisäys voidaan tehdä kahdella tavalla.

- **Sovelluksen ensimmäisen käynnistyskerran yhteydessä**: näkyviin tulee konfigurointiavustaja ja pyytää antamaan sähköpostiosoitteesi.

- **Jos tili on jo määritetty**: klikkaa kuvaruudun yläosassa kohtaa `Tiedosto`{.action} ja sitten `Lisää tili`{.action}.

![exchange](images/configuration-outlook-2016-windows-step1.png){.thumbnail}

Ilmoita nyt sähköpostiosoitteesi ja klikkaa `Edistyneet valinnat`{.action}. Rastita ruutu näkyviin tulevassa kohdassa `Tilin konfigurointi manuaalisesti`{.action} ja klikkaa sitten `Kirjaudu sisään`{.action}. Valitse tilityyppien joukosta **Exchange**.

Näkyviin tulee turvaikkuna, joka pyytää syöttämään sähköpostiosoitteesi **salasanan**. Syötä salasana, rastita ruutu sen muistamista varten ja klikkaa sitten `OK`{.action}.

> [!primary]
>
> Jos näet viestin, ettei Outlook voinut määrittää tiliäsi, voi se tarkoittaa virheellistä SRV-kentän konfigurointia verkkotunnuksesi DNS-alueella.
>
> Suosittelemme tarkistamaan Exchange-palvelussasi määritetyn verkkotunnuksen konfiguroinnin [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} välilehdeltä `Liitetyt verkkotunnukset`{.action} ja sieltä taulukon `Vianhaku`{.action}-sarakkeesta.
>

Jos verkkotunnuksesi konfigurointi on oikein, näkyviin tulee pyyntö hyväksyä yhdistäminen OVH:n palvelimelle. Hyväksy yhteys, jotta Exchange-tilisi voidaan konfiguroida automaattisesti.

Kun verkkotunnuksesi on konfiguroitu oikein ja se on käytettävissä Outlook 2016 -sovelluksessa, voit tehdä testilähetyksen testataksesi tilin toimivuuden.

![exchange](images/configuration-outlook-2016-windows-exchange-step2.png){.thumbnail}

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa lisäksi [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit){.external} varustetun verkkosovelluksen. Se on käytettävissä osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan - tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Outlook 2016 -sovelluksella Windowsissa](https://docs.ovh.com/fi/emails/konfigurointi-outlook-2016/){.external}.

[E-mail Pro -tilin konfigurointi Outlook 2016 -sovelluksella Windowsissa](https://docs.ovh.com/fi/emails-pro/konfigurointi-outlook-2016/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.