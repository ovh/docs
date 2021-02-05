---
deprecated: true
title: KVM-konsolin käyttö VPS-palvelimilla
excerpt: Kuinka KVM-konsolia käytetään VPS-palvelimilla 
slug: kvm-kaytto-vps-palvelimella 
section: Aluksi
---

**Päivitetty 18.04.2018**

## Tavoite


KVM-konsoli mahdollistaa suoran yhteyden virtuaalipalvelimeesi ilman ulkopuolisen ohjelmiston käyttöä (Terminal, Putty jne.). Pääsy tähän konsoliin tapahtuu hallintapaneelin tai API:n kautta.  

**Tässä ohjeessa käydään läpi nämä kaksi vaihtoehtoa.**

## Edellytykset

- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie).


## Käytännössä

### Kirjautuminen KVM:ään hallintapaneelin kautta

Kun olet kirjautunut hallintapaneeliisi, mene VPS:n hallintasivulle. Oikealta löydät painikkeen `KVM`{.action}:

![Valitse painike KVM](images/activating_kvm_manager.png){.thumbnail}


 
Tämän jälkeen avautuu ikkuna, joka käynnistää kirjautumisen VPS-palvelimellesi. Tässä voi kulua joitakin sekunteja. Nyt tarvitsee enää kirjautua palveluun.

![Kirjautuminen KVM-konsoliin](images/kvm_screen.png){.thumbnail}


> [!primary]
>
> Näppäimistön asetukset voivat poiketa omasta näppäimistöstäsi. Huolehdi sen tarkistamisesta, esimerkiksi näppäimistö saattaa olla AZERTY eikä QWERTY.
>

### Kirjautuminen KVM-konsoliin API:n kautta

Joskus on mahdollista, että KVM-konsoliin kirjautuminen hallintapaneelin kautta ei onnistu ongelmitta. Tällöin jäljelle jäävä vaihtoehto on API. Kirjaudu ensin [OVH:n API](https://api.ovh.com/)-ohjelmistoon.

#### VPS 2014 -mallissa

VPS 2014 -mallissa voi ilmetä 1006-virheitä, yhteys APIn kautta voi ratkaista tämän. Tässä käytettävä API:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

APIn positiivisesta vastauksesta huolimatta on mahdollista, että yhteyden muodostaminen kestää muutamia minuutteja. Tämä on aika, jonka portti tarvitsee avautuakseen täydellisesti.

#### VPS 2016 -mallissa

Mikäli KVM-konsoliin liittyen ilmenee ongelmia, voit käyttää KVM-kirjautumisessa tätä suositeltua APIa:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://www.ovh-hosting.fi/community/foorumi.xml>.
