---
deprecated: true
title: Exchange-tilin konfigurointi Androidilla Gmail-sovelluksen kautta
excerpt: Opi konfiguroimaan Exchange-tili Androidilla Gmail-sovelluksen avulla
slug: exchange_2013_android-maarittely
section: Exchange-yhteensopivan älypuhelimen/tabletin konfigurointi
---

**Päivitetty 21.2.2018**

## Tavoite

Exchange -tilejä voidaan konfiguroida erilaisilla yhteensopivilla sähköpostiohjelmistoilla. Tämän ansiosta sähköpostiosoitettasi on mahdollista käyttää valitsemallasi laitteella.

**Opi konfiguroimaan Exchange-tili Androidilla Gmail-sovelluksen avulla.**

## Edellytykset

- Sinulla on [Exchange-tuote](https://www.ovh-hosting.fi/sahkopostit/){.external}.
- Laitteeseesi on asennettu Gmail-sovellus. Voit asentaa sen Google Play -kaupasta.
- Sinulla on määritettävän sähköpostiosoitteen käyttäjätunnukset.

> [!primary]
>
> Tämä dokumentaatio on toteutettu Nexus 6 -laitteella, joka käyttää Android 7.1.1 -versiota. Yhdenmukaisuuden vuoksi käytämme Gmail-sovellusta, jonka voi asentaa Play-kaupasta. Jos haluat käyttää toista sovellusta, toimintatapa on erilainen.
>

## Käytännössä

### 1. vaihe: Tilin lisäys

Mene laitteesi päänäytössä kohtaan `Gmail`{.action}. Tilin lisäys voi alkaa kahdella tavalla:

- **Jos yhtään tiliä ei ole määritetty**: klikkaa tervetuloa-vaiheen jälkeen `Lisää sähköpostiosoite`{.action}. Valitse lopuksi `Exchange ja Office 365`{.action}. 

- **Jos sähköpostitili on jo määritetty**: klikkaa kolmea viivaa esittävää kuvaketta ylävasemmalla ja sitten nuolen kuvaa määritetyn tilin oikealla puolella. Klikkaa lopuksi kohtaa `Lisää tili`{.action} ja valitse `Exchange ja Office 365`{.action}. 

![exchange](images/configuration-exchange-gmail-application-android-step1.png){.thumbnail}

Syötä sähköpostiosoitteesi ja klikkaa `Seuraava`{.action}.

Syötä sähköpostiosoitteesi salasana, älä valitse asiakassertifikaattia. Klikkaa sitten `Seuraava`{.action} konfiguroinnin jatkamiseksi. OVH:n palvelimeen saatetaan yhdistää tilisi konfiguroimiseksi. Tällaisessa tapauksessa laitteellasi tulee näkyviin ilmoitus. Klikkaa `OK`{.action} yhteyksien suorittamiseksi.

Syötä nyt saapuvan postin palvelimen asetukset. Tietyt kentät saattavat olla valmiiksi täytettyjä.

|Tieto|Kuvaus| 
|---|---| 
|Verkkotunnus/Käyttäjänimi|Syötä täydellinen sähköpostiosoite.|  
|Salasana|Syötä sähköpostiosoitteen salasana.|
|Asiakassertifikaatti|Älä valitse mitään.|
|Palvelin|Ilmoita palvelin, jossa Exchange-palveluasi ylläpidetään. Voit löytää sen [hallintapaneelista](https://www.ovh.com/auth/?action=gotomanager){.external} kyseisen Exchange-palvelun välilehdeltä `Yleiset tiedot`{.action} ja sitten kohdasta `Yhteys`{.action}.|
|Portti|Syötä portti 443.|  
|Salaus|Valitse “SSL/TLS”|

Klikkaa `Seuraava`{.action}. Jos syötetyt tiedot ovat oikein, kirjautuminen tilille onnistuu.

![exchange](images/configuration-exchange-gmail-application-android-step2.png){.thumbnail}

Konfiguroinnin viimeistelemiseksi sinun on annettava OVH:n palvelimelle lupa hallita etänä tiettyjä laitteesi tietoturvaan liittyviä ominaisuuksia. Klikkaa `OK`{.action}, lue näkyviin tulevat tiedot ja klikkaa `Aktivoi tämä administraattori laitteelle`{.action}.

Nimeä lopuksi tilisi niin, että tunnistat sen muista sovelluksessasi näkyvistä osoitteista. Klikkaa `Seuraava`{.action}.

Voit tehdä testilähetyksen tarkistaaksesi, että tilisi asetukset on määritetty oikein.

### 2. vaihe: Sähköpostiosoitteen käyttö

Kun sähköpostiosoite on konfiguroitu, se on valmis käytettäväksi! Voit nyt lähettää ja vastaanottaa viestejä.

OVH tarjoaa [ryhmätyöominaisuuksilla](https://www.ovh-hosting.fi/sahkopostit/){.external} varustetun verkkosovelluksen, joka on saatavilla osoitteessa [https://www.ovh-hosting.fi/mail/](https://www.ovh-hosting.fi/mail/){.external}. Voit kirjautua siihen sähköpostiosoitteeseesi liittyvillä tunnuksilla.

## Lue lisää aiheesta

[MX Plan -tai webhotellituotteeseen sisältyvän sähköpostiosoitteen konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/emails/konfigurointi-android/){.external}

[E-mail Pro -tilin konfigurointi Androidilla Gmail-sovelluksen kautta.](https://docs.ovh.com/fi/emails-pro/konfigurointi-android/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi){.external}.