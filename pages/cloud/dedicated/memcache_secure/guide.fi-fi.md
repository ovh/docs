---
deprecated: true
title: Palvelimen suojaus Memcached-palvelulla
slug: palvelimen-suojaus-memcached-palvelulla
excerpt: Katso, kuinka voit suojata Memcached-palvelusi
section: Edistynyt käyttö
---

**Päivitetty 2.3.2018**


## Tavoite

Memcached on tietokantapalvelu, jota käytetään pääasiassa verkkosovellusten nopeuttamiseen asettamalla staattista sisältöä ja tietokantahakujen tuloksia välimuistiin. Mekanismi on hyvin yksinkertainen. Se on avainasemassa oleva tietokanta, jonka tallennusmuisti ei ole pysyvä.

Oletuksena memcached-palvelua ei ole suojattu tunnistautumisella. Mikäli palvelin on saatavilla, kaikki voivat lukea ja kirjoittaa siellä tietoja. Tästä syystä on tärkeää suojata tämä tietokanta.


**Tämän ohjeen tarkoituksena on auttaa näissä konfiguraatiomuutoksissa.**


> [!warning]
>
> OVH tarjoaa käyttöösi koneita, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
>
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
>


## Edellytykset


- Sinulla on pääsy Memcached-palvelua käyttävälle palvelimelle (SSH-yhteys Linux-ympäristöissä tai etätyöpöytä Windowsissa).
- Niiden palveluiden tunnistaminen, joilla on käytössä Memcached. Tätä varten vastaa seuraaviin kysymyksiin:
    - Ovatko Memcached-palvelua käyttävät palvelut samalla palvelimella? Käytetäänkö niitä yksityisessä verkossa?
    - Tarvitseeko Memcached-palvelua käyttävien palvelujen olla julkisesti saatavilla verkossa?


## Käytännössä

### Memcached-palvelun suojaaminen konfigurointia muokkaamalla

Memcached-palvelimen suojaus tapahtuu kahdessa vaiheessa:

- palvelun kuunteluosoitetta rajoittamalla.
- hyväksymällä ainoastaan TCP-yhteydet.


Versiota /1.5.6/ vanhemmissa versioissa memcached hyväksyy oletuksena TCP- ja UDP-yhteydet. Tätä oletustilaa voidaan käyttää hyväksi niin kutsutuissa “vahvistinhyökkäyksissä”.
Kehittäjien mukaan UDP-yhteydet olivat olennaisia ohjelmiston luomisessa, sillä tämän kaltaiset resurssit olivat silloin paljon harvinaisempia.
Oletamme tässä ohjeessa, että kuulut niihin 99 %:iin käyttäjistä, jotka eivät tarvitse UDP-yhteyksiä.

Jos memcached-palvelintasi käytetään ainoastaan paikalliselta koneelta, voit rajoittaa kuunteluosoitteen lukuun `127.0.0.1`.
Jos toisten koneiden tarvitsee yhdistää siihen yksityisessä verkossa, pakota kuuntelu yksityiseen IP-osoitteeseen (esim. `10.0.0.1`, joka on mukautettava verkkoluokkaasi).

**Joka tapauksessa** poista käytöstä UDP-kuuntelu `-U-0` -ohjeella.

Luettelemme nyt konfigurointiin liittyvät seikat yleisimmin käytetyille käyttöjärjestelmille.


#### Debian/Ubuntu

Debian ja Ubuntu käyttävät oletuksena `service memcached status/start/restart/force-reload` Memcached-palvelun hallinnointiin. Jos tämä koskee sinua, muokkaa tiedostoa `/etc/memcached.conf` pääkäyttäjäksi kirjautuneena.

Voit aloittaa lisäämällä tämän option, joka poistaa käytöstä UDP-kuuntelun. Kuten aiemmin todettiin, tämä teknologia on vanhentunutta.

```sh
# Disable UDP protocol
-U 0
```
Jos memcached-palvelinta käytetään ainoastaan paikalliselta koneelta, voit aktivoida seuraavan option. Voit estää sen avulla palvelusi paljastumisen Internet-verkkoon.

```sh
-l 127.0.0.1
```

Kun muokkaukset on tehty, tallenna tiedosto ja käytä jompaa kumpaa näistä kahdesta komennosta konfigurointisi uudelleenkäynnistämiseksi:


```sh
service memcached force-reload
/etc/init.d/memcached force-reload
```


#### CentOS/Fedora/Red Hat


CentOS, Fedora ja Red Hat käyttävät oletuksena `service memcached status/start/restart/force-reload` Memcached-palvelun hallinnointiin. Jos tämä koskee sinua, muokkaa tiedostoa `/etc/sysconfig/memcached` pääkäyttäjäksi kirjautuneena.


Jos memcached-palvelintasi käytetään ainoastaan paikalliselta koneelta, suosittelemme seuraavaa `OPTIONS`-riviä, jolla voit estää palvelusi paljastumisen Internet-verkkoon poistamalla käytöstä vanhentuneen UDP-protokollan.

```sh
OPTIONS="-l 127.0.0.1 -U 0"
```


Jos memcached-palvelintasi käyttävät myös kolmannen osapuolen palvelimet, tällä `OPTIONS`-rivillä voidaan poistaa käytöstä ainoastaan UDP-protokolla:

```sh
OPTIONS="-U 0"
```

Kun muokkaukset on tehty, tallenna tiedosto ja käytä seuraavaa komentoa konfigurointisi uudelleenkäynnistämiseksi:

```sh
sudo service memcached force-reload
```


#### Arch Linux


Arch Linux käyttää oletuksena `systemctl start/restart/stop memcached ` Memcached-palvelun hallinnointiin. Jos tämä koskee sinua, muokkaa tiedostoa ` /usr/lib/systemd/system/memcached` pääkäyttäjäksi kirjautuneena.

Jos memcached-palvelintasi käytetään ainoastaan paikalliselta koneelta, suosittelemme seuraavaa riviä, jolla voit estää palvelusi paljastumisen Internet-verkkoon poistamalla käytöstä vanhentuneen UDP-protokollan:

```sh
ExecStart=/usr/bin/memcached -l 127.0.0.1 -U 0 -o modern
```


Jos memcached-palvelintasi käyttävät myös kolmannen osapuolen palvelimet, tällä rivillä voidaan poistaa käytöstä ainoastaan UDP-protokolla:

```sh
ExecStart=/usr/bin/memcached -l 0 -U 0 -o modern
```


Kun muokkaukset on tehty, tallenna tiedosto ja käytä jompaa kumpaa näistä kahdesta komennosta konfiguroinnin uudelleenkäynnistämiseksi:


```sh
sudo systemctl daemon-reload
sudo systemctl force-reload memcached
```

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.