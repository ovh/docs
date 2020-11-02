---
deprecated: true
title: PostgreSQL-tietokantojen kayton aloitus
slug: postgresql-tietokantojen-kayton-aloitus
excerpt: Tietokantojen kaytto
---

Haluatko käyttää PostgreSQL-tietokantoja? Katso kuinka tietokantojen luominen ja hallinnointi tapahtuu helposti!


## Yleista

### Edellytykset


> [!primary]
>
> Tätä tutoriaalia varten:
> - käytössäsi on CloudDB-instanssi
> - olet tutustunut CloudDB-tuotteen aloitusohjeeseen: docs/cloud/clouddb/debuter-avec-clouddb
>

### Mika on PostgreSQL-tietokanta?
PostgreSQL on relaatiotietokantojen ja objektitietokantojen hallintajärjestelmä (SGBDRO). Se on vankka ja laajentumiskykyinen järjestelmä, joka pystyy hallitsemaan suuria tietomääriä luotettavasti. Lisäksi sillä on erittäin aktiivinen avoimen lähdekoodin yhteisö.


## Kirjautuminen tietokantaan


> [!primary]
>
> On huomioitava, ettei tämä tuote mahdollista pääsyä isäntäpalvelimeen vaan sen ylläpitämiin tietokantoihin. Yleiset SQL-komennot toimivat ongelmitta, ja HeidiSQL- tai SQuirrel SQL -tyyppiset ohjelmistot ovat täysin yhteensopivia.
> 

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
psql --host=palvelin --port=portti --user=käyttäjä --password=password tietokannan_nimi
```


### Kirjautuminen PHP-skriptilla

```php
1. <?php
2. $myPDO = new PDO('pgsql:host=host;port=port;dbname=dbname', 'username', 'password');
3. ?>
```


### Kirjautuminen ohjelmistolla (SQuirreL SQL)
- Käynnistä SQuirreL SQL ja klikkaa `Aliases`{.action} ja sitten `+`{.action}


![launch SQuirreL SQL](images/1.PNG){.thumbnail}

- Täytä alla olevat kentät ja vahvista sitten painikkeella `OK`{.action} :
    - **Name**: Valitse nimi
    - **Driver**: Valitse "PostgreSQL"
    - **URL**: Anna palvelimen ja portin osoite muodossa jdbc:postgresql://server:port/database
    - **User Name**: Anna käyttäjänimi
    - **Password**: Anna salasana


![config connection](images/2.PNG){.thumbnail}

- Vahvista uudestaan painikkeella `Connect`{.action}


![valid connection](images/3.PNG){.thumbnail}

Olet nyt kirjautunut tietokantaasi:


![config connection](images/4.PNG){.thumbnail}


### Kirjautuminen phppgAdminilla
- Saatavilla pian erillisenä ohjeena.*


## PostgreSQL-tietokannan vieminen

### Tietokannan vieminen komentoriville

```bash
pg_dump --host=palvelin --port=portti --user=käyttäjä --password=password tietokannan_nimi > tietokannan_nimi.sql
```


## PostgreSQL-tietokannan tuominen

### Tietokannan tuominen komentorivilta

```bash
psql --host=palvelin --port=portti --user=käyttäjä --password=password tietokannan_nimi < tietokannan_nimi.sql
```