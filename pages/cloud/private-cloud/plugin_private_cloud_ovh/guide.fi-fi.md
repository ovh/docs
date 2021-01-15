---
deprecated: true
title: 'OVH:n Private Cloud -liitännäisen käyttö'
slug: ovh-private-cloud-liitannainen
excerpt: 'Katso, kuinka OVH:n Private Cloud -liitännäistä käytetään'
section: 'OVH:n ominaisuudet'
---

**Päivitetty 25.9.2018**

## Tavoite

OVH:n Private Cloud -liitännäinen mahdollistaa dedikoitujen resurssien lisäämisen infrastruktuuriisi muutamassa minuutissa.

**Katso, kuinka liitännäistä käytetään.**


## Edellytykset

* [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuote.
* Pääsy vSphere-hallintakäyttöliittymään.


## Käytännössä

Tarjolla on kaksi tuntiperusteisesti laskutettua dedikoitua resurssia:

* isäntäpalvelimet
* datasäilöt

Mene vSphere-asiakasohjelmassa osioon “Host and Cluster” ja avaa vasemman puoleinen jaottelurakenne. Pääset nyt liitännäisen valikkoihin konesalin tai klusterin `Configure`{.action}-välilehden kautta.

![](images/addhost_01.png){.thumbnail}

Valikko `Add OVH Host`{.action} on omistettu isäntäpalvelimille. Sen kautta on mahdollista nähdä niiden tekniset tiedot ja tilata niitä.

![](images/addhost_02.png){.thumbnail}

Ylimääräisen datastoren tilaus tapahtuu puolestaan valikossa `Add OVH Storage`{.action}.

![](images/addstorage_02.png){.thumbnail}

Huomaa, että on olemassa toinenkin tapa päästä näihin valikkoihin. Voit klikata konesalin tai infrastruktuurin klusterin kohdalla hiiren oikeaa painiketta ja valita sitten `OVH Private Cloud`{.action}.

![Vaihtoehto OVH Private Cloud](images/rightclick.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.
