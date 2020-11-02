---
deprecated: true
title: MySQL- ja MariaDB-tietokantojen kayton aloitus
slug: mysql-ja-mariadb-tietokantojen-kayton-aloitus
excerpt: Tietokantojen kaytto
---

Haluatko käyttää MySQL- tai MariaDB-tietokantoja? Katso kuinka tietokantojen luominen ja hallintointi tapahtuu helposti!


## Yleista

### Edellytykset


> [!primary]
>
> Tätä tutoriaalia varten:
> - tarvitset CloudDB-instanssin
> - olet tutustunut CloudDB-tuotteen käynnistysohjeeseen: docs/cloud/clouddb/debuter-avec-clouddb
>

### Mika on MySQL-tietokanta?
MySQL on relaatiotietokantojen hallintajärjestelmä, joka on kehitetty toisista järjestelmistä poiketen

korkeaa lukusuorituskykyä vaativiin tehtäviin.

Tämä kone perustuu avoimeen lähdekoodiin ja sen emoyhtiö on mikäs muu kuin Oracle.


### Mika on MariaDB-tietokanta?
MariaDB on MySQL-hallintajärjestelmästä johdettu järjestelmä (fork).

Tämä moottori on täysin yhteensopiva, ja "vapaampi" kuin isosiskonsa MySQL. Kaikkiin vikoihin ja

roadmap-suunnitelmiin on vapaa pääsy toisin kuin Oracle-versiossa. Lisäksi InnoDB-varastointimoottori on korvattu XtraDB:llä ja muilla suorituskykyä parantavilla

optimoinneilla.


## Kirjautuminen tietokantaan


> [!primary]
>
> On huomioitava, ettei tämä tuote mahdollista pääsyä isäntäpalvelimeen vaan sen ylläpitämiin
> 

tietokantoihin. Yleiset SQL-komennot toimivat ongelmitta, ja HeidiSQL- tai SQuirrel SQL -tyyppiset

ohjelmistot ovat täysin yhteensopivia.



> [!primary]
>
> Koska MariaDB on johdettu MySQL:stä, erilaiset komennot ovat täysin samanlaisia molemmissa
> 

tietokantatyypeissä.

Jotta voit kirjautua tietokantaasi, varmista, että sinulla on:

- tietokantainstanssisi osoite
- tietokantasi portti
- tietokantasi käyttäjänimi
- tietokantasi salasana
- tietokantasi nimi

Kaikki nämä tiedot löytyvät [Hallintapaneelisi Web-osiosta](https://www.ovh.com/manager/web/){.external}.

Saatavilla on myös ohje: [](debuter-avec-clouddbguide.fi-fi.md){.ref}


### Kirjautuminen komentorivilla

```bash
mysql --host=palvelin --user=käyttäjä --port=portti --password=password tietokannan_nimi
```


### Kirjautuminen PHP-skriptilla

```php
1. <?php
2. $db = new PDO('mysql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Kirjautuminen ohjelmistolla (SQuirreL SQL)
- Käynnistä SQuirreL SQL ja klikkaa `Aliases`{.action}, ja sitten `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Täytä alla olevat kentät ja vahvista sitten painikkeella `OK`{.action} :
    - **Name**: Valitse nimi
    - **Driver**: Valitse "MySQL Driver"
    - **URL**: Anna palvelimen ja portin osoite muodossa jdbc:mysql://server:port
    - **User Name**: Anna käyttäjänimi
    - **Password**: Anna salasana


![config connection](images/2.PNG){.thumbnail}

- Vahvista uudestaan painikkeella `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Olet nyt kirjautunut tietokantaasi:


![config connection](images/4.PNG){.thumbnail}


### Kirjautuminen phpMyAdminilla
*Saatavilla pian erillisenä ohjeena.*


## MySQL- tai MariaDB-tietokannan vieminen

### Tietokannan vieminen komentoriville

```bash
mysqldump --host=palvelin --user=käyttäjä --port=portti --password=password tietokannan_nimi > tietokannan_nimi.sql
```


## MySQL- tai MariaDB-tietokannan tuominen

### Tietokannan tuominen komentorivilta

```bash
cat tietokannan_nimi.sql | mysql --host=palvelin --user=käyttäjä --port=portti --password=password tietokannan_nimi
```