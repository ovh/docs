---
deprecated: true
title: OVH:n Kuormantasaajan esittely
slug: kuormantasaaja-esittely
excerpt: Tutustu OVH:n uuteen Kuormantasaajaan
section: Aluksi
order: 1
---

**Päivitetty 15.01.2018**

## Tavoite

OVH:n uusi **Kuormantasaaja** (load balancer) yhdistää konfiguraation ketteryyden sekä luotettavuuden. Konfiguroi tuotteesi OVH:n Kuormantasaajalla ja me huolehdimme lopusta!

**Tutustu nyt OVH:n uuteen Kuormantasaajaan**

## Edellytykset

- Ei erityisiä edellytyksiä.


## Käytännössä

 
Tämä uusi tuote perustuu vankkoihin avoimen lähdekoodin ratkaisuihin: Haproxy TCP-datavuolle ja Nginx UDP-datavuolle.

Ei enää rajoituksia! Uutta OVH:n Kuormantasaajaa voidaan käyttää toimimaan erilaisten protokollien kanssa:

|Tyyppi|Kuvaus|Edut|Teknologia|
|---|---|---|---|
|HTTP|Kaiken tyyppiset HTTP- ja HTTPS-verkkopalvelut|Optimoitu L7-käsittelylle (sovellus)|Haproxy|
|TCP|Kaikille verkkopalveluille, jotka eivät ole HTTP-palveluja|Voi tukea kaikkia TCP-sovelluksia|Haproxy|
|UDP|Kaiken tyyppisille UDP-datavirroille|Voi tukea kaikkia UDP-sovelluksia|Nginx|

Tähän uuteen palveluun sisältyy:

- OVH:n Anti-DDoS-suojaus
- monialuetuki (Anycast)
- edistynyt HTTP/HTTPS-tuki (mm. uudelleenohjaukset, otsaketiedot, ACL)
- yhteensopiva yhden Fail-over IP -osoitteen kanssa
- tukee virtuaaliräkkiä (vRack)
- redundanssi: Kuormantasaajasi toimii erillisillä instansseilla, jotka puolestaan toimivat itse erillisillä ja redundoiduilla laitteilla.

### Perusosat

- OVH:n uusi Kuormantasaaja koostuu kolmesta perusosasta:

![Yleistä](images/diag_gen.png){.thumbnail}

|Perusosa|Toiminto|
|---|---|
|Frontend|Frontend määrittää OVH:n Kuormantasauspalvelun protokollan tyypin (HTTP, TCP, UDP). Se on lisäksi osa, joka näyttää palvelun kuunteluportin.|
|Farm|Farmi vastaanottaa frontendistä tulevan liikenteen ja hoitaa kuorman jakamisen.|
|Server|Palvelimet vastaanottavat lopullisen liikenteen ja vastaavat sovelluksen kautta.|

Nämä kolme perusosaa muodostavat Kuormantasaajan. Niillä on mahdollista konfiguroida lähes kaiken tyyppistä kuorman tasaamista.


### Miksi käyttää OVH:n Kuormantasaajaa?

#### Kuorman jakaminen

Tämä on kuormantasaajan perusominaisuus, mutta OVH:n Kuormantasaaja pystyy lisäksi paljon muuhun.

![Distribute load](images/distribute_load.png){.thumbnail}

#### Downtimen ehkäiseminen

OVH:n Kuormantasaaja pystyy havaitsemaan automaattisesti palvelimen vastauksen puuttumisen. Tällaisessa tapauksessa se uudelleenohjaa palvelimelle tulevan liikenteen toiselle palvelimelle, mikäli mahdollista. Näin ongelma voidaan ratkaista vaikuttamatta tuotantoosi.

![Eliminate downtimes](images/eliminate_downtimes.png){.thumbnail}

#### Infrastruktuurin kehittäminen helposti

Voit lisätä tai poistaa farmin, frontendin tai OVH:n Kuormantasauspalvelun palvelimen ilman palvelukatkosta.

![Scale your infra easily](images/facilitate_maintenance.png){.thumbnail}


#### Ylläpidon helpottaminen

Mikäli infrastruktuuriisi on suunniteltu huoltotoimenpide, on mahdollista asettaa farmi vaivattomasti downtimeen, jotta se lakkaa ennakoivasti vastaanottamasta liikennettä. Näin voit tehdä helposti intervention ja lisätä palvelimesi huoltotoimenpiteen päätyttyä.

![Facilitates maintenance](images/scale_easily.png){.thumbnail}


#### Palvelujen vaihteleminen

Voit nyt yhdistellä eri OVH:n palveluja Kuormantasaajaan, kuten esimerkiksi:

- Public Cloud -instansseja ja Fail-over IP -osoitteen
- virtuaalipalvelimia ja Fail-over IP -osoitteen
- dedikoituja palvelimia ja Fail-over IP -osoitteen
- virtuaaliräkkejä

![Mix and match service](images/mix_and_match.png){.thumbnail}

#### Anycast

Voit jakaa kuorman eri maantieteellisille alueille:

![Anycast](images/anycast.png){.thumbnail}


#### Kaikentyyppisen liikenteen jakaminen

OVH:n Kuormantasaaja ei rajoitu enää pelkästään HTTP-liikenteeseen! Voit nyt käyttää sitä kaikenlaiselle TCP- tai UDP-liikenteelle.


#### Sähköpostipalvelin

Jaa kuorma sähköpostipalvelintesi välillä:

![Sähköposti](images/mail.png){.thumbnail}


#### Tietokanta

Tasapainota ja redundoi tietokantasi:

![Tietokanta](images/database.png){.thumbnail}


## Lisää aiheesta

[Lue lisää kuormantasauksesta](https://en.wikipedia.org/wiki/Load_balancing){.external}

[Lue lisää Haproxy-ratkaisusta](http://www.haproxy.org/#desc){.external}

[Lue lisää Nginx-ratkaisusta](https://en.wikipedia.org/wiki/Nginx){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.