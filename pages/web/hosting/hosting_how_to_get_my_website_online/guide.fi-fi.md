---
title: 'Webhotellit: Kotisivujen siirto verkkoon'
description: 'Ohjeessa neuvotaan, miten kotisivut saadaan näkymään verkossa.'
slug: webhotellit_kotisivujen_siirto_verkkoon
legacy_guide_number: g1374
---


## Yleistä
WWW-sivu on toiminnassa ja näkyy oikein ainoastaan silloin kun se on laitettu oikeaan hakemistoon.
Yleensä Internet-sivujen tiedostot on sijoitettava webhotellin ”www”-hakemistoon sivujen näkymiseksi.
Tätä varten on tiedostot siirrettävä ensin webhotelliin, mitä varten käytetään tiedostonsiirtoprotokollaa käyttävää ohjelmistoa (File Transfer Protocol).
Ohjeessa käytetään [FileZillaa](https://filezilla-project.org/), joka on ilmainen FTP-asiakasohjelma.


### FTP-kirjautumistietojen hakeminen

Sait OVH:n webhotellituotteen rekisteröinnin yhteydessä sähköpostin palveluiden asennukseen liittyen. Tämä sähköpostiviesti sisältää, muun muassa, tarvittavat FTP-tunnukset.
Tuotteesta ja webhotelliin liitetystä verkkotunnuksesta riippuen sähköpostiviestin aihe on:



```
/* kun kyseessä on Persotilaus verkkotunnukselle "verkkotunnuksesi.tld" */


[OVH-perso] asennettu verkkotunnuksesi.tld
```



Sisältö:


```
[...]
FTP KOODISI
-------------

Näillä koodeilla voit siirtää sivusi verkkoon
(Varoitus: Tietojen täytyy olla asetettu www-hakemistoon)


ftp-palvelin: ftp.verkkotunnuksesi.tld tai
ftp.cluster0XX.ovh.net
Login tai käyttäjä: loginftp
Salasana: mDpFtP

[...]
```


Tarvitset siis tätä tunnusparia kirjautumiseen.

Jos FTP-salsanaa on muokattu asennusken jälkeen, sähköpostissa oleva salasana on hyödytön. Tällöin olet muuttanut salasanaa hallintapaneelissa. Säilytä kuitenkin käyttäjätunnus, sillä se on muuttumaton.


### Hallintapaneeli
Hallintapaneelissa
Kun olet kirjautunut hallintapaneeliin, valitse webhotellin verkkotunnus ja klikkaa "Webhotelli".
Klikkaa "FTP-salasana"-kuvaketta.
Aukenevalla sivulla voi muuttaa FTP-salasanan. 
Käyttäjätunnus näkyy ruudulla "FTP-tunnus:" tekstin jälkeen.

Syötä uusi salasana, varmista se ja klikkaa "Vahvista". Salasanan on oltava 8 - 12 merkkiä pitkä ja se voi sisältää kirjaimia ja numeroita.

Muutos astuu voimaan muutamassa minuutissa.


### FileZillan käyttö

Ks. ohjeet FileZillan käyttöön:[]({legacy}1380)

Sinulla on oltava tiedossa seuraavat tiedostot ja tiedot:

- verkkosivun tiedostot
- tietokannan varmuuskopiotiedosto (mikäli tarpeen)

FTP-tunnukset:

- palvelimen nimi: ftp.verkkotunnus.fi tai ftp.cluster0XX.ovh.net tai newftp.cluster0XX.ovh.net
- tunnus: oma FTP-tunnus
- salasana: FTP-tunnuksiin liittyvä salasana (ks. edelliset kohdat)
- portti: 21 (SSH-yhteydelle: 22 – Pro-tuotetasosta alkaen)



![](images/img_1858.jpg){.thumbnail}


## FTP-kirjautumistietojen hakeminen

### Hallintapaneelin kautta
Voit palauttaa FTP-tilan automaattisesti edelliseen päivään hallintapaneelin kautta.

Valitse verkkotunnus hallintapaneelissa ja mene valikkoon "Webhotelli" >"FTP ja sitten "Palauta levytila".

![](images/img_2690.jpg){.thumbnail}
Valitse seuraavaksi haluttu palautuspäivä. 

Huomio: palautetut tiedot korvaavat webhotellin nykyisen sisällön.

Klikkaa "Vahvista" aloittaaksesi operaation. Tiedostojen palautukseen kuluu muutamia tunteja.


- FTP-levytila palautetaan tällä tavalla kokonaisuudessaan päinvastoin kuin FileZillan varmuuskopiota palautettaessa.



### Palautus Filezillan avulla
Lue ohjeet FTP-tilan tai tiedostojen palautuksesta Filezillalla: []({legacy}1593)  FileZillan

## Tietokantaan

### Yleistä
Tietokantaan tallennetaan verkkosivuun, tai sovelluksiin, liittyvät tiedot.

Tietokantaan voi tallentaa eri tyyppisiä tietoja kuten sivun sisältöä, sivujen URL-osoitteita tai kävijätietoja.

OVH:n webhotelleissa voi käyttää useita eri tietokantamoottoreita: MySQL, PostgreSQL, SQL Server (saatavilla Windows-webhotelleissa).


### Luominen
Webhotelli-tuotteeseen sisältyvää tietokantaa ei asenneta automattisesti webhotellin asennuksen yhteydessä.
Tietoja ei siis lähetetä automaattisesti sähköpostiisi.
Luo ensin tietokanta.
Kirjaudu hallintapaneeliin ja valitse haluttu webhotelli oikeasta osiosta.

Mene sitten valikkoon "SQL" ->
"Luo tietokanta"

![](images/img_2743.jpg){.thumbnail}
Valitse tietokantakone:
"Mysql tai PostgreSQL."
Valitse tietokannan tyyppi ja sitten "Seuraava"

Seuraavaksi pyydetään syöttämään käyttäjätunnus ja salasana.

Tietokannan tunnukset lähetetään sinulle sähköpostitse.

Saat muutaman minuutin kuluessa sähköpostiviestin, joka sisältää tietokantaasi liittyvät tiedot.

![](images/img_2694.jpg){.thumbnail}


### SQL-tunnukset


- Varoitus: tietokantaasi ei luoda automaattisesti webhotellin asennuksen yhteydessä. 


Kun tietokanta on luotu, saat sähköpostitse tunnukset tietokantaan.
Löydät tämän sähköpostin hallintapaneelista. Kun olet kirjautunut, klikkaa valikkoa Tuki ja sitten Sähköpostihistoria

![](images/img_2747.jpg){.thumbnail}
Sähköpostin otsikko on muotoa:


```
[MySQL] MySQL-tietokanta DB_nimi
```


Sisältö:


```
[...]

MySQL-tietokantasi on asennettu palvelimellemme.

Tekniset tiedot:
-----------------------------

MySQL:
Palvelin: mysql51-66.pro
Käyttäjä: DB_nimi
Tietokannan nimi: DB_nimi
Salasana: ************

[...]
```



### Hallintapaneelissa
Voit muuttaa tietokannan salasanan hallintapaneelissa.


- Huomio: tietokannan salasanan muutos ei ole vähäpätöinen toiminto. Se voi aiheuttaa verkkosivun tai tietokantaa käyttävien palveluiden keskeytymisen.


Mikäli haluat muuttaa tietokannan salasanan, mene Web-hallintapaneeliin ja valitse verkkotunnus. Seuraavaksi mene osioon ”Alustat” → verkkotunnus.fi → ”SQL” → klikkaa tietokantarivin oikealla puolella olevaa hammasrattaan kuvaa ja valitse ”Salasanamuutos”. 

Voit päivittää tietokannan salasanan.

Muista päivittää verkkosivun konfigurointitiedosto, jotta se yhdistää tietokantaan uudella salasanalla, jos webhotellissa on muutoksentekohetkellä verkkosivu olemassa.


### phpMyAdmin-yhteys
Kirjaudu [phpMyAdmin-käyttöliittymään](https://phpmyadmin.ovh.net/).

Syötä pyydetyt tiedot kenttiin:


- Palvelin: käyttäjä.mysql.db (käyttäjätunnus löytyy tietokannan luomisviestistä).

- Käyttäjä: löytyy tietokannan luomisviestistä.

- Salasana: tietokannan salasana.

- Versio: voit valita kirjautumisen nykyiseen tietokantaan, tai 1 tai 7 päivän varmuuskopioon.


Syötettyäsi kaikki tiedot, klikkaa "Suorita" kirjautuaksesi.

![](images/img_1960.jpg){.thumbnail}

- MYSQL4-tietokantoihin kirjautumiseen käytä käyttöliittymän alla annettua linkkiä.




### Vienti
Miten SQL-tietokanta viedään? Millä eri tavoilla tietokannan varmuuskopiointi on suoritettavissa?

Ohje tietokantojen viennistä:[]({legacy}1394)

![](images/img_1932.jpg){.thumbnail}


### Tuonti
Miten SQL-tietokannan varmuuskopio tuodaan? Millä eri tavoilla sen voi tehdä?

Ohje MySql-tietokantojen tuonnista:[]({legacy}1393)

![](images/img_1933.jpg){.thumbnail}


### Korjaus – Optimointi – Analysointi
Tietokantataulukkoja voi korjata, optimoida ja analysoida.

Tätä varten kirjaudu [phpMyAdmin-käyttöliittymään](https://phpmyadmin.ovh.net/).

Valitse ensin taulukko, jolle haluat toiminnot suorittaa. 

Sitten klikkaa ylhäällä oikealla "Operaatiot".

Huolto-välilehdellä voit sitten suorittaa halutut operaatiot.

![](images/img_1961.jpg){.thumbnail}


## Private SQL -käyttö
M#iten Private SQL -palvelinta käytetään? Miten tietokanta tuodaan ja viedään?

Pikaohje Private SQL -palvelimen käytöstä:[Private SQL -palvelin](http://ohjeet.ovh-hosting.fi/QuickUseSQLprivate)

![](images/img_1866.jpg){.thumbnail}


## Asennusohje
Miten luoda nopeasti verkkosivu ilman teknistä erityisosaamista kotisivujen luonnista?

Ohje sisällönhallintajärjestelmän asennukseen OVH:n helppoasennusmoduulien avulla:[]({legacy}1402)

![](images/img_1930.jpg){.thumbnail}


### Uusi WordPress-asennus

WordPress on sisällönhallintajärjestelmä (CMS), jonka avulla voit luoda ja hallinnoida kotisivuja tai blogeja helposti.
Ilmaista vapaan lähdekoodin WordPressiä voi kustomoida useiden teemojen ja laajennuksien ansiosta.


- Blogi & verkkosivu

Ohje WordPress-sisällönhallintajärjestelmän asentamiseen käsin:[]({legacy}1375)


![](images/img_1873.jpg){.thumbnail}


### Uusi Joomla-asennus

Joomla on sisällönhallintajärjestelmä (CMS). Ilmaista vapaan lähdekoodin Joomlaa voi kustomoida useiden teemojen ja laajennuksien ansiosta. 
Tämä sisällönhallintajärjestelmä on sovellus, jonka avulla voit hallita dynaamista verkkosivuja tai kokonaista intranetiä yksinkertaisesti.


- Verkkosivu

Ohje Joomla-sisällönhallintajärjestelmän asentamiseen käsin:[]({legacy}1375)


![](images/img_1874.jpg){.thumbnail}


### Uusi PrestaShop-asennus

PrestaShop on vapaan lähdekoodin sovellus, jolla on mahdollista luoda verkkokauppa.


- Verkkokauppa

Ohje PrestaShop -sisällönhallintajärjestelmän asentamiseen käsin:[]({legacy}1375)


![](images/img_1862.jpg){.thumbnail}


## Tiedosto .ovhconfig
Miten webhotellin PHP-versio muutetaan? Miten PHP-FPM aktivoidaan?

Ohjeet .ovhconfig-tiedoston käytöstä ja konfiguroinnista:


- []({legacy}1175)

- []({legacy}1207)



![](images/img_1867.jpg){.thumbnail}


## Webhotellissa käytettävät kirjastot
Tietoa käytettävistä kirjastoista:

|Kirjasto|Saatavuus| 
|---|---|
|ffmepg|ei aktiivinen| 
|GD|aktivoitu| 
|imagemagik|aktivoitu| 
|zend (opcache)|aktivoitu| 
|PDO|aktivoitu| 
|Zip - Gzip|aktivoitu|



![](images/img_1867.jpg){.thumbnail}
Huomio: PHP-FPM:ää käytettäessä, ja turvallisuussyistä, seuraavat optiot eivät ole aktiivisia:


- register_globals
- magic_quotes_gpc




## Verkkosivun suoristuskyvyn optimointi
Miten verkkosivun hidastelun syitä tutkitaan? Miten parannetaan verkkosivujen suorituskykyä?

Ohje verkkosivun hidastelun syiden tutkimisesta ja suorituskyvyn parantamisesta:[]({legacy}1396)

![](images/img_1865.jpg){.thumbnail}

