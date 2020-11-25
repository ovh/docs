---
deprecated: true
title: 'Tuntiperusteisen resurssin lisääminen'
slug: tuntiperusteisen-resurssin-lisaaminen
excerpt: 'Katso, kuinka lisätään tuntiperusteisesti laskutettavia resursseja'
legacy_guide_number: '7766721'
section: 'OVH:n ominaisuudet'
---

**Päivitetty 18.9.2018**

## Tavoite

[Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuotteessa on mahdollista lisätä tunneittain laskutettavia resursseja.

**Tässä ohjeessa kerrotaan, kuinka Private Cloud -tuotteeseen lisätään tuntiperusteinen resurssi vSphere-käyttöliittymän kautta.**

## Edellytykset

* [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuote.
* Olet antanut käyttäjälle “Resurssin lisäys” -oikeudet kyseiselle konesalille [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager){.external}.
* Olet kirjautunut vSphere-asiakasohjelmaan.


## Käytännössä

### Valitse resurssi

Jotta pääset käyttöliittymään, jossa resursseja voidaan lisätä, valitse datacenter ja klikkaa sitten välilehteä `Manage`{.action}.

![Isäntäpalvelimen lisäys](images/addhost_01.png){.thumbnail}

Esimerkissämme lisäämme tuntiperusteisesti laskutettavan isäntäpalvelimen. Kun malli on valittu, klikkaa painiketta `Next`{.action}. Huomaa, että datasäilön lisäämiseksi tarvitsee vain valita välilehti `Add OVH Storage`{.action}.

![Isäntäpalvelimen lisäys](images/addhost_03.png){.thumbnail}


### Tilauksen vahvistaminen

Tilauksen vahvistamista ja viimeistelyä varten täytyy klikata uudestaan painiketta `Next`{.action}.

![](images/addhost_04.png){.thumbnail}

### Asennuksen seuraaminen

Heti kun tilauksesi on vahvistettu, voit seurata resurssin lisäyksen etenemistä. 

![](images/addhost_06.png){.thumbnail}

Lisäksi vShpere-käyttöliittymäsi viimeaikaisiin tehtäviin ilmestyy tehtävä. Myös sen avulla voit seurata resurssin lisäyksen etenemistä.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.
