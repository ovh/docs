---
deprecated: true
title: 3. vaihe - Ensimmäisen virtuaalityöpöytäsarjan (pool) luominen
slug: kuinka-luodaan-pool
excerpt: Katso, kuinka ensimmäinen pool luodaan VMware Horizon 7.1 -alustalla
section: Käyttöönotto
order: 3
---

**Päivitetty 21.2.2018**

## Tavoite

Olet jo oppinut, kuinka [kirjaudutaan VMware Horizon -alustalle](https://docs.ovh.com/fi/cloud-desktop-infrastructure/horizon-7-alusta/){.external}, ja [poolimallisi](https://docs.ovh.com/fi/cloud-desktop-infrastructure/poolin-luominen/){.external} on valmis. Nyt on aika luoda ensimmäinen poolisi.

**Tässä ohjeessa kerrotaan, kuinka pool luodaan VMware Horizon 7.1 -alustalla.**



## Edellytykset

- Olet kirjautunut VMware Horizon 7.1 -alustalle.


## Käytännössä

Kun olet kirjautunut VMware Horizoniin, toimi seuraavasti:

- Klikkaa osion `Catalog`{.external} kohdassa `Desktop Pool`{.external} ja sitten `Add`{.action} käynnistääksesi lomakkeen poolin luomista varten.

![Poolin luominen](images/1200.png){.thumbnail}

- Valitse sitten `poolin tyyppi` (tässä esimerkissä *Automaattinen*).


> [!primary]
>
> Työpöytäpoolin kolme päätyyppiä ovat *automatisoitu*, *manuaalinen* ja *RDS*.
> 
> - *Automatisoidut* työpöytien poolit luodaan saman mallin tai virtuaalikoneen mallin tilannekuvan pohjalta.
> 
> - *Manuaaliset* työpöytien poolit ovat kokoelma virtuaalikoneita, fyysisiä tietokoneita tai kolmannen osapuolen virtuaalikoneita. *Automatisoiduissa* ja *manuaalisissa* pooleissa jokaiseen koneeseen voi yhdistää vain yksi käyttäjä kerrallaan.
>
> - *RDS*-työpöytien poolit eivät ole kokoelma koneita. Ne pikemminkin tarjoavat työpöytäistuntoja RDS-isännillä. Useilla käyttäjillä voi olla useampia työpöytäistuntoja samanaikaisesti yhdellä RDS-isännällä.
> 


![Poolin luominen](images/1201.png){.thumbnail}

- Valitse virtuaalityöpöytien `osoituksen tyyppi`:

 - *Dedicated*: virtuaalityöpöydät osoitetaan vain yhdelle yksittäiselle käyttäjälle.
 - *Floating*: virtuaalityöpöydät jaetaan käyttäjille kirjautumishetkellä vallitsevan saatavuuden mukaan.

![Poolin luominen](images/1202.png){.thumbnail}

- Valitse toteutettava klooni poolin täydentämiseksi:

 - *Full virtual machines*: virtuaalikoneen mallista otetaan täydellinen klooni.
 - *View Composer linked clones*: vertailukohtana oleva tilannekuva kloonataan. Tämä pienentää tilaa datasäilöissä, säästää resursseja ja parantaa käyttöönottonopeutta, mutta ylläpitää vahvaa yhteyttä virtuaalikoneen mallin ja käyttöönotetun virtuaalityöpöydän virtuaalikoneen välillä.

![Poolin luominen](images/1203.png){.thumbnail}

- Valitse poolin nimi (*display name*, sitä voidaan muokata myöhemmin, mutta ID:tä ei).

![Poolin luominen](images/1204.png){.thumbnail}

- Valitse poolin konfiguraatio (muista aktivoida tarvittaessa *HTML-yhteys*).


> [!primary]
>
> Suosittelemme käyttämään **Blast**-protokollaa, joka takaa paremman joustavuuden (yhteytesi kaistanleveydestä riippumatta), korkeamman turvatason ja vähentää mobiilikäytössä akun kulutusta. Lisätietoa protokollasta voit lukea [täältä](https://docs.vmware.com/en/VMware-Horizon-7/7.2/com.vmware.horizon-view.installation.doc/GUID-F64BAD49-78A0-44FE-97EA-76A56FD022D6.html){.external}.
> 

![Poolin luominen](images/1205.png){.thumbnail}

- Tämän jälkeen sinulla on mahdollisuus valita tapa, jolla virtuaalityöpöydät nimetään, sekä käyttöönotettujen virtuaalikoneiden lukumäärä.

![Poolin luominen](images/1206.png){.thumbnail}

- Seuraavassa näkymässä voit valita, ovatko käyttäjäprofiilit pysyvällä levyllä vai tarvitaanko erillistä levyä Windowsin tilapäisiä tiedostoja varten.

![Poolin luominen](images/1207.png){.thumbnail}

- Tämän jälkeen on mahdollista valita tallennuskäytännöt, joihin sisältyy käyttöjärjestelmälevyjen ja pysyvien levyjen erottaminen.

![Poolin luominen](images/1208.png){.thumbnail}

- Seuraavassa näkymässä voit valita *virtuaalikoneen mallin*, jota haluat käyttää.

> [!primary]
>
> Jos virtuaalikonetta ei näy, valitse `Show all parent VMs`{.action} nähdäksesi syyn tähän.
> 

![Poolin luominen](images/1209.png){.thumbnail}

- Valitse sitten *vertailukohtana oleva tilannekuva* (niitä voi olla useita versioiden hallintaa varten, testeihin tai tuotantoon eri pooleilla).

![Poolin luominen](images/1210.png){.thumbnail}

- Valitse poolisi *kohdekansio* (vSphere-organisaatiota varten). Sinne luodaan poolisi niminen alakansio käyttöönotettavien virtuaalikoneiden säilömistä varten.

![Poolin luominen](images/1211.png){.thumbnail}

- Valitse *datasäilöt*, joihin virtuaalikoneet säilötään.

![Poolin luominen](images/1212.png){.thumbnail}

- Seuraavassa näkymässä voit määrittää virtuaalityöpöytien tallennukseen liittyviä edistyneitä asetuksia.

![Poolin luominen](images/1213.png){.thumbnail}

- Voit määrittää seuraavaksi Active Directoryn käyttöönottoon liittyvät ja virtuaalikoneiden kustomointiin liittyvät valinnat (valitse yksi sysprep-kustomointi [Private Cloudissa luotujen kustomointien joukosta](https://docs.ovh.com/fi/cloud-desktop-infrastructure/){.external}).

![Poolin luominen](images/1214.png){.thumbnail}

- Voit lisäksi liittää käyttäjiä suoraan tähän virtuaalityöpöytien sarjaan tai päättää luomisen ja tehdä liittämisen myöhemmin.

Poolin luominen voi viedä jonkin verran aikaa käytetystä mallista riippuen. Virheen tapahtuessa poolin `Inventory`-osio antaa lisätietoja jokaisen virtuaalikoneen luomisesta ja mahdollistaa ongelman alkuperän ymmärtämisen.

Nyt kun pooli on luotu, lue seuraavasta ohjeesta, kuinka [virtuaalityöpöytiä jaetaan käyttäjille](https://docs.ovh.com/fi/cloud-desktop-infrastructure/tyopoytien-jako){.external}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.