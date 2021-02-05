---
deprecated: true
title: Exchange-tilin konfigurointi iPhonella tai iPadilla
excerpt: Opi konfiguroimaan Exchange-tili Mail-sovelluksen avulla iPhonella tai iPadilla
slug: exchange_2013_automaattimaarittely_iosssa_iphone_ipad
section: Exchange-yhteensopivan älypuhelimen/tabletin konfigurointi
---

**Päivitetty 23.2.2018**

## Tavoite

Exchange -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää valitsemallasi laitteella.

**Opi konfiguroimaan Exchange-tili Mail-sovelluksen avulla iPhonella tai iPadilla.**

## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Laitteeseesi on asennettu Mail-sovellus.
- Sinulla on tunnukset sähköpostiosoitteeseen, jonka asetuksia haluat muokata.

> [!primary]
>
> Tämä dokumentaatio soveltuu seuraaviin Mac-käyttöjärjestelmiin: iOS 7 ja myöhemmät versiot.
>

## Käytännössä

Lisäys voidaan tehdä kahdella eri tavalla:

- **Muutamalla klikkauksella Apple Devices -työkalulla**: mene linkkiin <https://autodiscover.mail.ovh.net/AppleDevices/> ja seuraa eri konfigurointivaiheita.

- **Seuraamalla laitteesi konfigurointiavustajaa**.

Tästä eteenpäin tämä dokumentaatio keskittyy ainoastaan konfigurointiin laitteellasi.

### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä kohtaan `Asetukset`{.action}. Tilin lisäys tapahtuu kahdella tapaa käyttöjärjestelmäsi versiosta riippuen:

- **iOS 7, 8, 9 ja 10**: Klikkaa `Posti, yhteystiedot, kalenterit`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Exchange`{.action}.

- **iOs 11**: Klikkaa `Tilit ja salasanat`{.action} ja sitten `Lisää tili`{.action}. Valitse lopuksi `Exchange`{.action}.

![exchange](images/configuration-mail-exchange-ios-step1.png){.thumbnail}

Syötä nyt tilisi tiedot:

|Tieto|Kuvaus|
|---|---|
|Osoite|Syötä täydellinen sähköpostiosoite.|
|Kuvaus|Anna nimi, jolla tunnistat tilin muista Mail-sovelluksessa näkyvistä tileistä.|

Klikkaa nyt `Seuraava`{.action} ja valitse `Manuaalinen asennus`{.action}.

Ilmoita sähköpostiosoitteesi salasana ja klikkaa `Seuraava`{.action}.

Syötä nyt pyydetyt tiedot:

|Tieto|Kuvaus|
|---|---|
|Osoite|Tämän kentän pitäisi olla täytetty. Mikäli näin ei ole, syötä täydellinen sähköpostiosoite.|
|Palvelin|Ilmoita palvelin, jossa Exchange-palveluasi ylläpidetään. Voit löytää sen [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} kyseisen Exchange-palvelun välilehdeltä `Yleiset tiedot`{.action} ja sitten kohdasta `Yhteys`{.action}.|
|Verkkotunnus|Älä syötä tähän mitään.|
|Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Tämän kentän pitäisi olla täytetty. Mikäli näin ei ole, syötä sähköpostiosoitteen salasana.|
|Kuvaus|Tämän kentän pitäisi olla täytetty. Mikäli näin ei ole, anna nimi, jolla tunnistat tilin muista Mail-sovelluksessasi näkyvistä tileistä.|

Klikkaa nyt `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![exchange](images/configuration-mail-exchange-ios-step2.png){.thumbnail}

Varmista sovellusten valinnan yhteydessä, että vähintään kohta `Mail`{.action} on rastitettuna, jotta sovellus voi käyttää tiliä. Muut sovellukset (kuten *Kalenteri* ja *Muistiinpanot*) voivat käyttää tiettyjä Exchangen ryhmätyöominaisuuksia. Kun valintasi on tehty, klikkaa kohtaa `Tallenna`{.action}. 

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa <https://www.ovh-hosting.fi/mail/>. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi iPhonella tai iPadilla.](https://docs.ovh.com/fi/emails/webhotellien_sahkoposti_konfigurointiohje_iphone_ios_91-versiolle/){.external}

[E-mail Pro -tilin konfigurointi iPhonella tai iPadilla](https://docs.ovh.com/fi/emails-pro/konfigurointi-iphone/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.