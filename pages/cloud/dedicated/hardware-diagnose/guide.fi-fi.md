---
deprecated: true
title: 'Laitteistojen toimintahäiriöiden tunnistaminen dedikoidulla palvelimella'
slug: vianhaku-laitteistojen-toimintahairiot-dedikoitu-palvelin
excerpt: 'Katso, kuinka tunnistetaan laitteistojen toimintahäiriöitä dedikoidulla palvelimella'
section: Tietoturva
---

**Päivitetty 29.8.2018**

## Tavoite


Palvelimen kuluminen voi aiheuttaa ajan kuluessa virheisiin johtavia laitteistojen toimintahäiriöitä. Palvelimesi on varustettu sitä varten useilla vianhakutyökaluilla, joilla voidaan tunnistaa vioittuneita osia.

**Katso, kuinka laitteistojen toimintahäiriöitä tunnistetaan dedikoidulla palvelimella.**


## Edellytykset

* Sinulla on [dedikoitu palvelin.](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}
* Palvelin on uudelleenkäynnistetty [rescue-tilassa](https://docs.ovh.com/fi/dedicated/ovh-rescue/){.external}.


## Käytännössä

### Verkkokäyttöliittymän käyttö

Kun palvelimesi on uudelleenkäynnistynyt [rescue-tilassa](https://docs.ovh.com/fi/dedicated/ovh-rescue/), saat sähköpostitse palveluusi liittyvät tunnukset. Viesti sisältää lisäksi linkin rescue-tilan verkkokäyttöliittymään. Se näyttää useimmiten tältä: *https://palvelimen_IP:444*.

Kun olet klikannut linkkiä, sinut uudelleen ohjataan verkkokäyttöliittymään alla näkyvällä tavalla.

![Verkkokäyttöliittymä](images/rescue-mode-04.png){.thumbnail}


### Suorita laitteistotestit

Verkkokäyttöliittymässä voit klikata painiketta `Käynnistä kaikki testit`{.action}, mikä suorittaa samanaikaisesti kaikki saatavilla olevat laitteistotestit.

![Käynnistä kaikki testit](images/rescue-mode-042.png){.thumbnail}


### Erilaisten laitteistotestien suorittaminen

Verkkokäyttöliittymällä voidaan suorittaa erilaisia testejä:

- suorittimille
- verkkoyhteydelle
- RAM-muistille
- levyosioille

Voit lisäksi nähdä palvelimesi SMART-lokitietoja, jotka antavat tarkempia tietoja kovalevyistä.

 
#### Suorittimet

Suorittimen testi tarkistaa palvelimesi suorittimen toiminnan, onnistuneeseen testaukseen tarvitaan noin 30 minuuttia. Jos palvelin menee epäkuntoon testin aikana, tarkoittaa tämä sitä, että palvelin on viallinen.

Klikkaa testin käynnistämiseksi painiketta kuten alla näkyvässä kuvassa näytetään.

![Suorittimen testi](images/processors.png){.thumbnail}

#### Verkkoyhteys

Verkkoyhteyden testaus tarkistaa sisäisen ja ulkoisen kaistanleveytesi. Klikkaa testin käynnistämiseksi painiketta kuten alla näkyvässä kuvassa näytetään.

![Verkkotesti](images/network-connection.png){.thumbnail}

#### RAM-muisti

Muistin testaus tarkistaa palvelimesi RAM-moduulien eheyden. Jos palvelin menee epäkuntoon testin aikana, tarkoittaa tämä sitä, että yksi tai useampi RAM-moduuli on viallinen.

Klikkaa testin käynnistämiseksi painiketta kuten alla näkyvässä kuvassa näytetään.

![Muistitesti](images/memory.png){.thumbnail}

#### Levyosiot

Levyosioiden testi käsittää kirjautumistestin levylle sekä tiedostojärjestelmän tarkistuksen. Levyn kirjautumistesti tarkistaa, voiko järjestelmä kommunikoida palvelimesi kovalevyjen kanssa. Tiedostojärjestelmien tarkistus käyttää komentoa `fsck-fy`.

> [!warning]
>
> Tiedostojärjestelmän tarkistuksen suorittaminen vioittuneella kovalevyllä voi johtaa tietojen menetykseen.
>

![Levytesti](images/partitions.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.