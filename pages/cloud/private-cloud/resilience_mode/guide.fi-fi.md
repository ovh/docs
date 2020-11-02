---
deprecated: true
title: 'Häiriönsietotilan käyttö'
slug: hairionsietotila
excerpt: 'Katso, kuinka OVH:n häiriönsietotilaa käytetään'
legacy_guide_number: '7766742'
section: 'OVH:n ominaisuudet'
---

**Päivitetty 1.10.2018**

## Tavoite

Häiriönsietotila on OVH:n kehittämä työkalu, joka simuloi jonkin isäntäpalvelimesi (_hosts_) rikkoutumista. Sen avulla voit tarkistaa, että *High Availability* (HA) ja *Fault Tolerance* (FT) -tyyppinen järjestelmä toimii oikein **kehitettävänä olevassa** klusterissasi.

**Tässä ohjeessa kerrotaan, kuinka OVH:n häiriönsietotilaa käytetään.**

## Edellytykset

* [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuote.
* Pääsy vSphere-hallintakäyttöliittymään.



## Käytännössä

Ennen kuin teet mitään, varmista seuraavat kohdat:

- isäntäpalvelimen on oltava klusterissa
- *High Availability* (HA) -vaihtoehdon on oltava aktivoituna
- toisen isäntäpalvelimen on oltava saatavilla ja toimintatilassa klusterissa.

> [!warning]
>
> Tämä on testi **kehitysympäristölle**. Tätä ei pidä tehdä **tuotantotilassa**.
> 


### Häiriönsietotilan aktivointi

Kun olet kirjautunut vSphere-tilaan, mene isäntäpalvelimiesi ja klusterien valikoimaan. Valitse kyseessä oleva isäntäpalvelin hiiren oikealla klikkauksella. Klikkaa sitten kohtaa `OVH Private Cloud`{.action}, ja sitten `Resilience`{.action}.

![Klikkaa isäntäpalvelimen kohdalla hiiren oikeaa painiketta häiriönsietotilan aktivoimiseksi](images/resilience_01.png){.thumbnail}

Kun olet tarkistanut, että kaikki edellytykset täyttyvät, klikkaa painiketta `Next`{.action}.

![Edellytysten tarkistaminen ja vahvistaminen](images/resilience_02.png){.thumbnail}

Käyttöehdot täytyy hyväksyä ennen testin käynnistämistä. Kun olet rastittanut ruudun `I accept the terms of the failure simulation agreement`{.action}, voit klikata painiketta `Next`{.action}.

![Käyttöehtojen hyväksyntä](images/resilience_03.png){.thumbnail}

Aktivointipyyntö on rekisteröity.

![Häiriönsietotilaa aktivoidaan](images/resilience_04.png){.thumbnail}

Muutaman minuutin kuluttua isäntäpalvelin ei ole enää saatavilla.

![Isäntäpalvelin ei saatavilla](images/resilience_05.png){.thumbnail}


### Häiriönsietotilan poistaminen käytöstä

Simulaation lopettamiseksi klikkaa uudestaan häiriönsietotilaa.

![Simulaation lopetus](images/resilience_06.png){.thumbnail}

Pyyntö koskien häiriönsietotilan poistamista käytöstä on rekisteröity.

![Häiriönsietotilaa poistetaan käytöstä](images/resilience_07.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.

